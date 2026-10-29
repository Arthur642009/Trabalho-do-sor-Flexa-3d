import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { CSS2DRenderer, CSS2DObject } from "three/addons/renderers/CSS2DRenderer.js";

import { createMaterials } from "./materials.js";
import { buildRoom } from "./room.js";
import { buildLines } from "./stations.js";
import { buildProps } from "./props.js";
import { buildRobot } from "./robot.js";
import { createVR } from "./vr.js";
import { createWalk } from "./walk.js";
import { createDevStudio } from "./devstudio.js";
import { createBlockLab } from "./blocklab.js";
import { easeInOut } from "./utils.js";
import "./devstudio.css";
import "./blocklab.css";

/* ------------------------------------------------------------------ */
/* renderer / scene                                                    */
/* ------------------------------------------------------------------ */

const canvas = document.getElementById("scene");
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: "high-performance",
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b0d10);

const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.05, 140);
camera.position.set(10.5, 6.4, 15.5);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1.15, 0.3);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.maxPolarAngle = Math.PI / 2 - 0.035;
controls.minDistance = 0.7;
controls.maxDistance = 44;
controls.rotateSpeed = 0.55;
controls.zoomSpeed = 0.8;
controls.panSpeed = 0.6;
controls.screenSpacePanning = true;

const pmrem = new THREE.PMREMGenerator(renderer);
const envRT = pmrem.fromScene(new RoomEnvironment(), 0.05);
scene.environment = envRT.texture;
scene.environmentIntensity = 0.55;
pmrem.dispose();

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = "absolute";
labelRenderer.domElement.style.inset = "0";
labelRenderer.domElement.style.pointerEvents = "none";
document.getElementById("labels").appendChild(labelRenderer.domElement);

/* ------------------------------------------------------------------ */
/* build the lab                                                       */
/* ------------------------------------------------------------------ */

const mats = createMaterials(renderer);
const room = buildRoom(scene, mats);
const lines = buildLines(mats, renderer);
scene.add(lines.root);
const props = buildProps(mats);
scene.add(props.group);
const robot = buildRobot(scene, mats, renderer);

const updaters = lines.updaters;

const vr = createVR({ renderer, scene, camera, room });
const walk = createWalk({
  camera,
  dom: renderer.domElement,
  controls,
  onStop: () => syncWalkButton(),
  onInspect: () => inspectCenter(),
});

const studio = createDevStudio();
const blockLab = createBlockLab({
  onParts: (n) => addParts(n),
  // Esc is Chrome's own pointer-lock exit gesture, so grab the lock just after the key event.
  onClose: () => setTimeout(startWalkHere, 140),
});

const devScreens = [];
for (const mon of props.monitors) {
  mon.traverse((o) => {
    if (o.userData.devScreen) devScreens.push(o);
  });
}

const hmiHits = [];
const hmiToStation = new Map();
for (const s of lines.stations) {
  if (!s.hmi) continue;
  hmiHits.push(s.hmi.hit);
  hmiToStation.set(s.hmi.hit, s);
}

const CENTER = new THREE.Vector2(0, 0);

function pickInteractable(clientX, clientY) {
  pointer.x = (clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hmi = raycaster.intersectObjects(hmiHits, false)[0];
  const dev = raycaster.intersectObjects(devScreens, false)[0];
  if (hmi && (!dev || hmi.distance <= dev.distance)) {
    return { type: "hmi", station: hmiToStation.get(hmi.object) || null };
  }
  if (dev) return { type: "dev" };
  return null;
}

function openBlockLab(station) {
  if (!station || blockLab.isOpen() || vr.active) return;
  closePanel();
  closeProgramPanel();
  studio.close();
  if (walk.active) walk.stop();
  tween = null;
  blockLab.open(station);
}

function openStudio() {
  if (studio.isOpen() || vr.active) return;
  closePanel();
  closeProgramPanel();
  blockLab.close();
  if (walk.active) {
    walk.stop();
    syncWalkButton();
  }
  tween = null;
  studio.open();
}

/* ------------------------------------------------------------------ */
/* station entries, labels and interactions                            */
/* ------------------------------------------------------------------ */

const entries = [...lines.stations];

const robotEntry = {
  code: "CÉLULA",
  name: robot.info.name,
  type: robot.info.type,
  desc: robot.info.desc,
  tech: robot.info.tech,
  focus: robot.focus,
  hitbox: robot.hitbox,
  labelPos: robot.labelPos,
  isRobot: true,
};
entries.push(robotEntry);

robotEntry.hmi = robot.hmi;
hmiHits.push(robot.hmi.hit);
hmiToStation.set(robot.hmi.hit, robotEntry);

const labels = [];

for (const s of entries) {
  const el = document.createElement("div");
  el.className = "label-anchor";
  const inner = document.createElement("div");
  inner.className = "station-label" + (s.isRobot ? " is-robot" : "");
  const shortName = s.name.replace("Estação de ", "");
  inner.innerHTML = `<em>${s.isRobot ? "ROBÔ" : s.code.slice(-2)}</em><span>${shortName}</span>`;
  el.appendChild(inner);
  const obj = new CSS2DObject(el);
  obj.position.copy(s.labelPos);
  // stagger alternating labels so neighbours do not overlap in perspective
  if (!s.isRobot && entries.indexOf(s) % 2 === 1) obj.position.y += 0.17;
  obj.userData.inner = inner;
  scene.add(obj);
  labels.push(obj);
}

const hitToEntry = new Map();
entries.forEach((e) => hitToEntry.set(e.hitbox, e));
const hitboxes = entries.map((e) => e.hitbox);

/* click selection --------------------------------------------------- */

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let selected = null;
let selectionMarker = null;

const panel = document.getElementById("info-panel");
const panelKicker = document.getElementById("panel-kicker");
const panelTitle = document.getElementById("panel-title");
const panelDesc = document.getElementById("panel-desc");
const panelTech = document.getElementById("panel-tech");
const panelFocus = document.getElementById("panel-focus");

function clearSelectionMarker() {
  if (!selectionMarker) return;
  scene.remove(selectionMarker);
  selectionMarker.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) o.material.dispose();
  });
  selectionMarker = null;
}

function select(entry) {
  if (isProgramOpen()) closeProgramPanel();
  selected = entry;
  panelKicker.textContent = `${entry.type} · ${entry.code}`;
  panelTitle.textContent = entry.name;
  panelDesc.textContent = entry.desc;
  panelTech.innerHTML = entry.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("");
  panel.classList.add("is-open");
  panel.setAttribute("aria-hidden", "false");
  panelProgramBtn.hidden = !entry.isRobot;
  panelBlocksBtn.hidden = !entry.station;

  clearSelectionMarker();

  const anchor = entry.hitbox.parent;
  const p = entry.hitbox.getWorldPosition(new THREE.Vector3());
  const surfaceY = entry.isRobot ? 0.008 : anchor.getWorldPosition(new THREE.Vector3()).y + 0.008;
  const radius = entry.isRobot ? 0.66 : 0.44;

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(radius * 0.92, radius, 72),
    new THREE.MeshBasicMaterial({
      color: 0xff5a4a,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.renderOrder = 20;

  const marker = new THREE.Group();
  marker.position.set(p.x, surfaceY, p.z);
  marker.add(ring);
  scene.add(marker);
  selectionMarker = marker;
}

function closePanel() {
  panel.classList.remove("is-open");
  panel.setAttribute("aria-hidden", "true");
  selected = null;
  clearSelectionMarker();
}

function pickEntry(clientX, clientY) {
  pointer.x = (clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(
    entries.map((e) => e.hitbox),
    false
  );
  if (hits.length === 0) return null;
  return hitToEntry.get(hits[0].object) || null;
}

let down = { x: 0, y: 0, t: 0 };
renderer.domElement.addEventListener("pointerdown", (ev) => {
  down = { x: ev.clientX, y: ev.clientY, t: performance.now() };
});

renderer.domElement.addEventListener("pointerup", (ev) => {
  if (walk.active || blockLab.isOpen()) return;
  const moved = Math.hypot(ev.clientX - down.x, ev.clientY - down.y);
  if (moved > 7 || performance.now() - down.t > 700) return;
  const target = pickInteractable(ev.clientX, ev.clientY);
  if (target && target.type === "hmi") {
    if (target.station?.isRobot) openProgramPanel();
    else openBlockLab(target.station);
    return;
  }
  if (target && target.type === "dev") {
    openStudio();
    return;
  }
  const entry = pickEntry(ev.clientX, ev.clientY);
  if (entry) select(entry);
  else closePanel();
});

let hoverCheck = 0;
renderer.domElement.addEventListener("pointermove", (ev) => {
  if (walk.active || blockLab.isOpen()) return;
  const now = performance.now();
  if (now - hoverCheck < 90) return;
  hoverCheck = now;
  const target = pickInteractable(ev.clientX, ev.clientY);
  const entry = target ? null : pickEntry(ev.clientX, ev.clientY);
  renderer.domElement.style.cursor = target || entry ? "pointer" : "grab";
  renderer.domElement.title =
    target?.type === "hmi"
      ? target.station?.isRobot
        ? "Programar robô (teach pendant)"
        : "Programar bancada em blocos"
      : target?.type === "dev"
        ? "Abrir Dev Lab — atividades de programação"
        : "";
});

document.getElementById("panel-close").addEventListener("click", closePanel);
panelFocus.addEventListener("click", () => {
  if (selected) setView(null, selected.focus.pos, selected.focus.target);
});

/* ------------------------------------------------------------------ */
/* first-person aiming                                                 */
/* ------------------------------------------------------------------ */

const crosshair = document.getElementById("crosshair");
const crosshairHint = crosshair.querySelector(".ch-hint");
let aimTimer = 0;

function pickAtCenter(maxHmi, maxEntry) {
  raycaster.setFromCamera(CENTER, camera);
  const hmi = raycaster.intersectObjects(hmiHits, false)[0];
  if (hmi && hmi.distance <= maxHmi) {
    return { type: "hmi", station: hmiToStation.get(hmi.object) || null };
  }
  const hit = raycaster.intersectObjects(hitboxes, false)[0];
  if (hit && hit.distance <= maxEntry) {
    return { type: "entry", entry: hitToEntry.get(hit.object) || null };
  }
  return null;
}

function inspectCenter() {
  if (!walk.active) return;
  const aim = pickAtCenter(5.5, 7.5);
  if (aim?.type === "hmi" && aim.station) {
    if (aim.station.isRobot) openProgramPanel();
    else openBlockLab(aim.station);
  } else if (aim?.type === "entry" && aim.entry) select(aim.entry);
}

function updateAim(dt) {
  if (!walk.active || !walk.isLocked()) {
    crosshair.classList.remove("is-target");
    crosshairHint.textContent = "";
    return;
  }
  aimTimer += dt;
  if (aimTimer < 0.1) return;
  aimTimer = 0;
  const aim = pickAtCenter(5.5, 7.5);
  if (aim?.type === "hmi" && aim.station) {
    crosshair.classList.add("is-target");
    crosshairHint.textContent = aim.station.isRobot
      ? "E · programar robô"
      : `E · programar ${aim.station.code}`;
  } else if (aim?.type === "entry" && aim.entry) {
    crosshair.classList.add("is-target");
    crosshairHint.textContent = aim.entry.isRobot
      ? "E · célula robótica"
      : `E · ${aim.entry.code}`;
  } else {
    crosshair.classList.remove("is-target");
    crosshairHint.textContent = "";
  }
}

/* ------------------------------------------------------------------ */
/* camera presets                                                      */
/* ------------------------------------------------------------------ */

const VIEWS = {
  overview: {
    pos: new THREE.Vector3(1.3, 4.0, 11.7),
    target: new THREE.Vector3(-0.3, 0.95, -3.4),
  },
  line: {
    pos: new THREE.Vector3(-0.45, 1.72, 4.9),
    target: new THREE.Vector3(1.6, 1.08, -1.0),
  },
  robot: {
    pos: new THREE.Vector3(0.45, 2.15, 1.85),
    target: new THREE.Vector3(-2.0, 1.35, 0.15),
  },
  desks: {
    pos: new THREE.Vector3(2.35, 2.05, 6.4),
    target: new THREE.Vector3(6.15, 0.9, 0.1),
  },
  top: {
    pos: new THREE.Vector3(0.02, 36, 8),
    target: new THREE.Vector3(0, 0.15, 0.2),
    hideRoof: true,
  },
};

let tween = null;

function setView(name, posOverride, targetOverride) {
  if (vr.active) return;
  blockLab.close();
  if (walk.active) {
    walk.stop();
    syncWalkButton();
  }
  const view = name ? VIEWS[name] : null;
  const pos = posOverride || (view && view.pos);
  const target = targetOverride || (view && view.target);
  if (!pos || !target) return;

  document.querySelectorAll(".view-btn").forEach((b) => {
    b.classList.toggle("is-active", name !== null && b.dataset.view === name);
  });

  room.setRoofVisible(!(view && view.hideRoof));
  tween = {
    p0: camera.position.clone(),
    t0: controls.target.clone(),
    p1: pos.clone(),
    t1: target.clone(),
    t: 0,
    dur: name === "top" ? 1.5 : 1.25,
  };
}

document.querySelectorAll(".view-btn").forEach((btn) => {
  btn.addEventListener("click", () => setView(btn.dataset.view));
});

/* ------------------------------------------------------------------ */
/* HUD wiring                                                          */
/* ------------------------------------------------------------------ */

let running = true;
let parts = 0;

const statusPill = document.getElementById("status-pill");
const statusText = document.getElementById("status-text");
const kpi = document.getElementById("kpi-parts");

function addParts(n = 1) {
  parts += n;
  kpi.textContent = String(parts).padStart(3, "0");
  kpi.animate(
    [
      { color: "#ffffff", transform: "scale(1.18)" },
      { color: "#37d67a", transform: "scale(1)" },
    ],
    { duration: 420, easing: "ease-out" }
  );
}

robot.setOnPlaced(() => addParts());

document.getElementById("toggle-labels").addEventListener("change", (ev) => {
  document.body.classList.toggle("no-labels", !ev.target.checked);
});

document.getElementById("toggle-sim").addEventListener("change", (ev) => {
  running = ev.target.checked;
  statusPill.classList.toggle("is-paused", !running);
  statusText.textContent = running ? "Linha em produção" : "Simulação pausada";
});

document.getElementById("toggle-lights").addEventListener("change", (ev) => {
  room.setLights(ev.target.checked);
});

const uiToggle = document.getElementById("ui-toggle");
function toggleUI() {
  document.body.classList.toggle("ui-hidden");
}
uiToggle.addEventListener("click", toggleUI);
document.body.addEventListener("keydown", (ev) => {
  if (studio.isOpen() || blockLab.isOpen()) return;
  if (ev.key === "h" || ev.key === "H") toggleUI();
  if (ev.key === "Escape") {
    if (isProgramOpen()) {
      closeProgramPanel();
      return;
    }
    if (walk.active) {
      walk.stop();
      syncWalkButton();
    }
    closePanel();
  }
  const views = ["overview", "line", "robot", "desks", "top"];
  if (ev.key >= "1" && ev.key <= "5") setView(views[Number(ev.key) - 1]);
});

/* ------------------------------------------------------------------ */
/* VR session + first-person walking                                   */
/* ------------------------------------------------------------------ */

const vrBtn = document.getElementById("vr-btn");
const vrBtnText = document.getElementById("vr-btn-text");
const walkBtn = document.getElementById("walk-btn");
const walkBtnText = document.getElementById("walk-btn-text");

let vrReady = false;

function syncWalkButton() {
  walkBtn.classList.toggle("is-active", walk.active);
  walkBtnText.textContent = walk.active ? "Sair do passeio" : "Caminhar";
  walkBtn.title = walk.active ? "Voltar à visão geral (Esc)" : "Andar pelo galpão com WASD";
}

/* Resume walking from wherever the camera is, so leaving a panel keeps us on the spot. */
function startWalkHere() {
  if (vr.active) return;
  const dir = camera.getWorldDirection(new THREE.Vector3());
  walk.start({
    x: camera.position.x,
    z: camera.position.z,
    yaw: Math.atan2(-dir.x, -dir.z),
    pitch: Math.asin(Math.max(-1, Math.min(1, dir.y))),
  });
  syncWalkButton();
}

function syncVRButton(on) {
  vrBtn.classList.toggle("is-active", on);
  if (on) vrBtnText.textContent = "Sair da VR";
  else vrBtnText.textContent = vrReady ? "Entrar em VR" : "VR indisponível";
}

vr.onChange((on) => {
  document.body.classList.toggle("xr-active", on);
  labelRenderer.domElement.style.display = on ? "none" : "";
  syncVRButton(on);
  if (on) {
    tween = null;
    closePanel();
    closeProgramPanel();
    studio.close();
    blockLab.close();
    if (walk.active) {
      walk.stop();
      syncWalkButton();
    }
  } else {
    setView("overview");
  }
});

vr.isSupported().then((ok) => {
  vrReady = ok;
  vrBtn.disabled = !ok;
  vrBtn.classList.toggle("is-unavailable", !ok);
  vrBtn.title = ok
    ? "Entrar no modo imersivo"
    : "Este navegador ou dispositivo não suporta WebXR imersivo";
  syncVRButton(false);
});

vrBtn.addEventListener("click", async () => {
  if (vr.active) {
    try {
      await vr.exit();
    } catch (err) {
      console.warn("Falha ao encerrar a sessão VR:", err);
    }
    return;
  }
  try {
    await vr.enter();
  } catch (err) {
    console.warn("Falha ao iniciar a sessão VR:", err);
    vrBtnText.textContent = "Falha ao iniciar VR";
    setTimeout(() => syncVRButton(false), 2200);
  }
});

walkBtn.addEventListener("click", () => {
  if (vr.active) return;
  if (walk.active) {
    walk.stop();
  } else {
    const resuming = blockLab.isOpen();
    closePanel();
    closeProgramPanel();
    blockLab.close();
    tween = null;
    if (resuming) startWalkHere();
    else walk.start();
  }
  syncWalkButton();
});

/* ------------------------------------------------------------------ */
/* robot teach pendant                                                 */
/* ------------------------------------------------------------------ */

const programPanel = document.getElementById("program-panel");
const programCloseBtn = document.getElementById("program-close");
const programStatus = document.getElementById("program-status");
const programStatusText = document.getElementById("program-status-text");
const tipReadout = document.getElementById("tip-readout");
const jogStepSelect = document.getElementById("jog-step");
const gripBtn = document.getElementById("grip-btn");
const teachBtn = document.getElementById("teach-btn");
const pointListEl = document.getElementById("point-list");
const programListEl = document.getElementById("program-list");
const programEmptyEl = document.getElementById("program-empty");
const programCountEl = document.getElementById("program-count");
const programRunBtn = document.getElementById("program-run");
const programStopBtn = document.getElementById("program-stop");
const programSpeedInput = document.getElementById("program-speed");
const speedValueEl = document.getElementById("speed-value");
const programLoopEl = document.getElementById("program-loop");
const programClearBtn = document.getElementById("program-clear");
const panelProgramBtn = document.getElementById("panel-program");
const panelBlocksBtn = document.getElementById("panel-blocks");
const pointsSaveBtn = document.getElementById("points-save");
const pointsResetBtn = document.getElementById("points-reset");
const pointsStateEl = document.getElementById("points-state");

const POINTS_KEY = "senai.robot.teach.v1";
const PRESET_POINTS = [
  { tag: "Acima do ninho", x: -2.0, y: 1.32, z: -0.66 },
  { tag: "Ninho", x: -2.0, y: 1.03, z: -0.66 },
  { tag: "Acima do pallet", x: -2.0, y: 1.3, z: 0.66 },
  { tag: "Pallet", x: -2.0, y: 1.0, z: 0.66 },
  { tag: "Início", x: -1.95, y: 1.55, z: 0.55 },
];

const teachPoints = [];
let pointSeq = 0;
let programSteps = [];
let programRunning = false;
let currentStep = -1;
let jawClosed = false;
let tipTimer = 0;
let pointsDirty = false;

const fmt = (v) => v.toFixed(2).replace(".", ",");
const isProgramOpen = () => programPanel.classList.contains("is-open");

function presetPointList() {
  return PRESET_POINTS.map((p, i) => ({
    name: `P${i + 1}`,
    tag: p.tag,
    x: p.x,
    y: p.y,
    z: p.z,
  }));
}

function recomputePointSeq() {
  pointSeq = teachPoints.reduce((max, p) => {
    const m = /^P(\d+)$/.exec(p.name || "");
    return m ? Math.max(max, Number(m[1])) : max;
  }, 0);
}

function readSavedTeach() {
  try {
    const raw = localStorage.getItem(POINTS_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || !Array.isArray(data.points)) return null;

    const points = data.points
      .filter((p) => p && [p.x, p.y, p.z].every((v) => Number.isFinite(Number(v))))
      .map((p, i) => ({
        name: typeof p.name === "string" && p.name ? p.name : `P${i + 1}`,
        tag: typeof p.tag === "string" ? p.tag : "",
        x: Number(p.x),
        y: Number(p.y),
        z: Number(p.z),
      }));
    if (points.length === 0) return null;

    const program = Array.isArray(data.program)
      ? data.program
          .filter((s) => {
            if (!s || typeof s.type !== "string") return false;
            if (s.type === "move") {
              return !!s.point && [s.point.x, s.point.y, s.point.z].every((v) => Number.isFinite(Number(v)));
            }
            return ["home", "grip", "release", "wait"].includes(s.type);
          })
          .map((s) => ({
            type: s.type,
            label: typeof s.label === "string" ? s.label : "Passo",
            seconds: Number.isFinite(Number(s.seconds)) ? Number(s.seconds) : undefined,
            point: s.point
              ? { x: Number(s.point.x), y: Number(s.point.y), z: Number(s.point.z) }
              : undefined,
          }))
      : [];

    const nextPoint = Number.isFinite(Number(data.nextPoint)) ? Number(data.nextPoint) : 0;
    return { points, program, nextPoint };
  } catch {
    return null;
  }
}

function persistTeach() {
  try {
    const payload = {
      version: 1,
      nextPoint: pointSeq,
      points: teachPoints.map(({ name, tag, x, y, z }) => ({ name, tag, x, y, z })),
      program: programSteps.map((s) => ({
        type: s.type,
        label: s.label,
        seconds: s.seconds,
        point: s.point ? { ...s.point } : undefined,
      })),
    };
    localStorage.setItem(POINTS_KEY, JSON.stringify(payload));
    pointsDirty = false;
    updatePointsState();
    return true;
  } catch {
    pointsStateEl.textContent = "Não foi possível salvar neste navegador";
    return false;
  }
}

function updatePointsState() {
  const pts = `${teachPoints.length} ${teachPoints.length === 1 ? "ponto" : "pontos"}`;
  const stp = `${programSteps.length} ${programSteps.length === 1 ? "passo" : "passos"}`;
  pointsStateEl.textContent = pointsDirty
    ? `${pts} · ${stp} · alterações não salvas`
    : `${pts} · ${stp} · salvo neste navegador`;
}

const savedTeach = readSavedTeach();
if (savedTeach) {
  teachPoints.push(...savedTeach.points);
  programSteps = savedTeach.program;
} else {
  teachPoints.push(...presetPointList());
  pointsDirty = true;
}
recomputePointSeq();
if (savedTeach) pointSeq = Math.max(pointSeq, savedTeach.nextPoint || 0);

function setProgramStatus(kind, text) {
  programStatus.className = `program-status is-${kind}`;
  programStatusText.textContent = text;
}

function syncGripButton() {
  jawClosed = robot.getGrip();
  gripBtn.textContent = jawClosed ? "Abrir garra" : "Fechar garra";
}

function updateTipReadout() {
  const p = robot.getTip();
  tipReadout.textContent = `X ${fmt(p.x)} · Y ${fmt(p.y)} · Z ${fmt(p.z)}`;
}

function renderPoints() {
  pointListEl.innerHTML = "";
  if (teachPoints.length === 0) {
    const hint = document.createElement("span");
    hint.className = "pg-hint-inline";
    hint.textContent = "Nenhum ponto ensinado ainda.";
    pointListEl.appendChild(hint);
    updatePointsState();
    return;
  }

  teachPoints.forEach((p) => {
    const row = document.createElement("div");
    row.className = "pg-point";

    const main = document.createElement("button");
    main.type = "button";
    main.className = "pg-point-main";
    main.title = `Inserir movimento até ${p.name}`;
    main.innerHTML = `<b>${p.tag ? `${p.name} · ${p.tag}` : p.name}</b><span>${fmt(p.x)} · ${fmt(
      p.y
    )} · ${fmt(p.z)}</span>`;
    main.disabled = programRunning;
    main.addEventListener("click", () => {
      pushStep({
        type: "move",
        point: { x: p.x, y: p.y, z: p.z },
        label: p.tag ? `Ir para ${p.name} · ${p.tag}` : `Ir para ${p.name}`,
      });
    });

    const del = document.createElement("button");
    del.type = "button";
    del.className = "pg-point-del";
    del.title = "Remover ponto";
    del.textContent = "×";
    del.disabled = programRunning;
    del.addEventListener("click", () => {
      if (programRunning) return;
      const at = teachPoints.indexOf(p);
      if (at >= 0) teachPoints.splice(at, 1);
      pointsDirty = true;
      renderPoints();
    });

    row.append(main, del);
    pointListEl.appendChild(row);
  });
  updatePointsState();
}

function renderProgram() {
  programListEl.innerHTML = "";
  programEmptyEl.hidden = programSteps.length > 0;
  programCountEl.textContent = `${programSteps.length} ${
    programSteps.length === 1 ? "passo" : "passos"
  }`;

  programSteps.forEach((step, i) => {
    const li = document.createElement("li");
    li.className = "pg-step" + (i === currentStep ? " is-current" : "");

    const idx = document.createElement("span");
    idx.className = "pg-step-idx";
    idx.textContent = String(i + 1).padStart(2, "0");

    const label = document.createElement("span");
    label.className = "pg-step-label";
    label.textContent = step.label;

    const del = document.createElement("button");
    del.type = "button";
    del.className = "pg-step-del";
    del.title = "Remover passo";
    del.textContent = "×";
    del.disabled = programRunning;
    del.addEventListener("click", () => {
      if (programRunning) return;
      programSteps.splice(i, 1);
      pointsDirty = true;
      renderProgram();
    });

    li.append(idx, label, del);
    programListEl.appendChild(li);
  });

  programRunBtn.disabled = programRunning || programSteps.length === 0;
  programClearBtn.disabled = programRunning || programSteps.length === 0;
  updatePointsState();
}

function pushStep(step) {
  if (programRunning || !isProgramOpen()) return;
  programSteps.push(step);
  pointsDirty = true;
  renderProgram();
  programListEl.lastElementChild?.scrollIntoView({ block: "nearest" });
}

function setProgramRunningUI(on) {
  programRunning = on;
  programPanel.classList.toggle("is-running", on);
  document
    .querySelectorAll(
      ".pg-jog, .pg-palette button, #teach-btn, #grip-btn, #points-save, #points-reset"
    )
    .forEach((b) => {
      b.disabled = on;
    });
  programStopBtn.disabled = !on;
  programLoopEl.disabled = on;
  renderPoints();
  renderProgram();
}

function openProgramPanel() {
  if (isProgramOpen() || vr.active) return;
  blockLab.close();
  if (walk.active) {
    walk.stop();
    syncWalkButton();
  }
  closePanel();
  setView("robot");
  robot.startProgramming();
  robot.hmi?.draw("MODO MANUAL", "ready");
  programPanel.classList.add("is-open");
  programPanel.setAttribute("aria-hidden", "false");
  currentStep = -1;
  setProgramRunningUI(false);
  syncGripButton();
  setProgramStatus("manual", "Manual · mova o robô e ensine os pontos");
  updateTipReadout();
}

function closeProgramPanel() {
  if (!isProgramOpen()) return;
  robot.endProgramming();
  robot.hmi?.draw("TOQUE PARA PROGRAMAR", "idle");
  programPanel.classList.remove("is-open");
  programPanel.setAttribute("aria-hidden", "true");
  currentStep = -1;
  setProgramRunningUI(false);
  setProgramStatus("manual", "Manual · mova o robô e ensine os pontos");
}

panelProgramBtn.addEventListener("click", openProgramPanel);
panelBlocksBtn.addEventListener("click", () => {
  if (selected && selected.station) openBlockLab(selected);
});
programCloseBtn.addEventListener("click", closeProgramPanel);

document.querySelectorAll(".pg-jog").forEach((btn) => {
  let timer = null;

  const doJog = () => {
    if (programRunning) return;
    const [ax, ay, az] = btn.dataset.jog.split(",").map(Number);
    const step = Number(jogStepSelect.value);
    robot.jog(ax * step, ay * step, az * step);
  };

  btn.addEventListener("pointerdown", (ev) => {
    ev.preventDefault();
    if (programRunning) return;
    doJog();
    if (timer) clearInterval(timer);
    timer = setInterval(doJog, 110);
  });

  const stopJog = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };

  btn.addEventListener("pointerup", stopJog);
  btn.addEventListener("pointerleave", stopJog);
  btn.addEventListener("pointercancel", stopJog);
  btn.addEventListener("blur", stopJog);
});

gripBtn.addEventListener("click", () => {
  if (programRunning) return;
  jawClosed = !jawClosed;
  robot.setGrip(jawClosed);
  gripBtn.textContent = jawClosed ? "Abrir garra" : "Fechar garra";
});

teachBtn.addEventListener("click", () => {
  if (programRunning) return;
  const p = robot.getTip();
  pointSeq += 1;
  teachPoints.push({ name: `P${pointSeq}`, tag: "", x: p.x, y: p.y, z: p.z });
  pointsDirty = true;
  renderPoints();
  setProgramStatus("manual", `Ponto P${pointSeq} ensinado · clique em Salvar`);
  updateTipReadout();
});

pointsSaveBtn.addEventListener("click", () => {
  if (programRunning) return;
  if (persistTeach()) setProgramStatus("done", "Pontos e sequência salvos");
});

pointsResetBtn.addEventListener("click", () => {
  if (programRunning) return;
  teachPoints.length = 0;
  teachPoints.push(...presetPointList());
  recomputePointSeq();
  pointsDirty = true;
  renderPoints();
  setProgramStatus("manual", "Pontos padrão carregados · clique em Salvar");
});

document.querySelectorAll(".pg-palette [data-step]").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (programRunning) return;
    const kind = btn.dataset.step;
    if (kind === "home") pushStep({ type: "home", label: "Ir para posição inicial" });
    else if (kind === "grip") pushStep({ type: "grip", label: "Fechar garra" });
    else if (kind === "release") pushStep({ type: "release", label: "Abrir garra" });
    else pushStep({ type: "wait", seconds: 0.5, label: "Esperar 0,5 s" });
  });
});

programSpeedInput.addEventListener("input", () => {
  const v = Number(programSpeedInput.value);
  speedValueEl.textContent = `${v.toFixed(1).replace(".", ",")}×`;
});

programRunBtn.addEventListener("click", () => {
  if (programRunning || programSteps.length === 0) return;
  if (!running) {
    const simToggle = document.getElementById("toggle-sim");
    simToggle.checked = true;
    simToggle.dispatchEvent(new Event("change"));
  }
  currentStep = -1;
  setProgramRunningUI(true);
  robot.startProgram(programSteps, {
    loop: programLoopEl.checked,
    speed: Number(programSpeedInput.value),
  });
});

programStopBtn.addEventListener("click", () => robot.stopProgram());

programClearBtn.addEventListener("click", () => {
  if (programRunning) return;
  programSteps = [];
  currentStep = -1;
  pointsDirty = true;
  renderProgram();
});

robot.onProgramEvent((ev) => {
  if (ev.type === "step") {
    currentStep = ev.index;
    renderProgram();
    robot.hmi?.draw(`PASSO ${ev.index + 1}/${ev.total}`, "running");
    setProgramStatus(
      "running",
      `Passo ${ev.index + 1}/${ev.total} · ${ev.step ? ev.step.label : ""}`
    );
  } else if (ev.type === "done") {
    currentStep = -1;
    setProgramRunningUI(false);
    syncGripButton();
    robot.hmi?.draw("PROGRAMA CONCLUÍDO", "done");
    setProgramStatus("done", "Programa concluído");
  } else if (ev.type === "stop") {
    currentStep = -1;
    setProgramRunningUI(false);
    syncGripButton();
    robot.hmi?.draw("PROGRAMA INTERROMPIDO", "error");
    setProgramStatus("manual", "Programa interrompido");
  }
});

if (!savedTeach) persistTeach();
renderPoints();
renderProgram();

/* ------------------------------------------------------------------ */
/* loop                                                                */
/* ------------------------------------------------------------------ */

const clock = new THREE.Clock();
let simTime = 0;

function updateLabels() {
  const on = !document.body.classList.contains("no-labels");
  labelRenderer.domElement.style.display = on ? "" : "none";
  if (!on) {
    for (const obj of labels) obj.element.style.opacity = "0";
    return;
  }

  const w = window.innerWidth;
  const h = window.innerHeight;
  const candidates = [];
  for (const obj of labels) {
    const dist = camera.position.distanceTo(obj.position);
    if (dist > 24) {
      obj.element.style.opacity = "0";
      continue;
    }
    const p = obj.position.clone().project(camera);
    if (p.z > 1) {
      obj.element.style.opacity = "0";
      continue;
    }
    candidates.push({
      obj,
      dist,
      x: (p.x * 0.5 + 0.5) * w,
      y: (-p.y * 0.5 + 0.5) * h,
    });
  }

  // nearest labels win; overlapping far labels fade out
  candidates.sort((a, b) => a.dist - b.dist);
  const placed = [];
  for (const c of candidates) {
    const k = Math.min(1.05, Math.max(0.8, Math.sqrt(9.5 / Math.max(c.dist, 0.001))));
    c.obj.userData.inner.style.transform = `scale(${k.toFixed(3)})`;
    const hw = 58 * k;
    const hh = 12 * k;
    const blocked = placed.some(
      (r) => Math.abs(c.x - r.x) < hw + r.hw + 4 && Math.abs(c.y - r.y) < hh + r.hh + 2
    );
    c.obj.element.style.opacity = blocked ? "0" : "1";
    if (!blocked) placed.push({ x: c.x, y: c.y, hw, hh });
  }
}

function animate() {
  const dt = Math.min(clock.getDelta(), 0.05);

  if (running) {
    simTime += dt;
    const ctx = { t: simTime, dt };
    updaters.forEach((fn) => fn(ctx));
    robot.update(ctx);
  }

  blockLab.update(dt);

  if (isProgramOpen()) {
    tipTimer += dt;
    if (tipTimer >= 0.12) {
      tipTimer = 0;
      updateTipReadout();
    }
  }

  if (vr.active) {
    vr.update(dt);
  } else {
    if (tween) {
      tween.t += dt;
      const k = easeInOut(Math.min(1, tween.t / tween.dur));
      camera.position.lerpVectors(tween.p0, tween.p1, k);
      controls.target.lerpVectors(tween.t0, tween.t1, k);
      if (k >= 1) tween = null;
    }
    walk.update(dt);
    updateAim(dt);
    if (!walk.active) controls.update();
  }

  if (selectionMarker) {
    const t = performance.now() * 0.001;
    const pulse = Math.sin(t * 3.2);
    selectionMarker.scale.setScalar(1 + pulse * 0.03);
    selectionMarker.children[0].material.opacity = 0.45 + 0.18 * (0.5 + 0.5 * pulse);
  }

  renderer.render(scene, camera);
  if (!vr.active) {
    labelRenderer.render(scene, camera);
    updateLabels();
  }
}

controls.addEventListener("start", () => {
  if (tween && tween.t > 0.15) tween = null;
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) clock.getDelta();
});

/* intro fly-in */
camera.position.set(1.3, 1.72, 12.2);
controls.target.set(0.15, 1.5, -2.5);
setTimeout(() => {
  tween = {
    p0: camera.position.clone(),
    t0: controls.target.clone(),
    p1: VIEWS.overview.pos.clone(),
    t1: VIEWS.overview.target.clone(),
    t: 0,
    dur: 2.6,
  };
}, 380);

renderer.setAnimationLoop(animate);

if (import.meta.env.DEV) {
  window.__lab = {
    scene,
    camera,
    controls,
    renderer,
    entries,
    setView,
    select,
    closePanel,
    room,
    vr,
    walk,
    labelRenderer,
    robot,
    openProgramPanel,
    closeProgramPanel,
    studio,
    openStudio,
    blockLab,
    openBlockLab,
    hmiHits,
  };
}

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    const loader = document.getElementById("loader");
    loader.classList.add("is-done");
    setTimeout(() => loader.remove(), 900);
  });
});
