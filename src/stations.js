import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import {
  box,
  cyl,
  hose,
  easeInOut,
  clamp01,
} from "./utils.js";
import { makePlateMaterial } from "./materials.js";
import { createPuck, createSortPuck, createTray } from "./parts.js";
import { createHmi } from "./hmi.js";

export const TOP_Y = 0.945;
export const STATION_MODULE = 1.08;

/* ------------------------------------------------------------------ */
/* shared pieces                                                       */
/* ------------------------------------------------------------------ */

function pneumaticCylinder(mats, { len = 0.14, r = 0.026, stroke = 0.06 } = {}) {
  const g = new THREE.Group();
  const body = cyl(r, r, len, mats.alu, 18, 0, len / 2, 0);
  const capA = cyl(r * 1.06, r * 1.06, 0.01, mats.graphite, 18, 0, 0.005, 0);
  const capB = cyl(r * 1.06, r * 1.06, 0.01, mats.graphite, 18, 0, len - 0.005, 0);

  const moving = new THREE.Group();
  const rodLen = stroke + 0.04;
  const rod = cyl(r * 0.33, r * 0.33, rodLen, mats.chrome, 12, 0, len - rodLen / 2 + 0.01, 0);
  const pad = cyl(r * 0.92, r * 0.92, 0.011, mats.aluDark, 16, 0, len + 0.006, 0);
  moving.add(rod, pad);

  g.add(body, capA, capB, moving);

  // air ports
  const portA = cyl(0.007, 0.007, 0.022, mats.blueTube, 8, r * 0.95, len * 0.22, 0, {
    rotZ: Math.PI / 2,
  });
  const portB = cyl(0.007, 0.007, 0.022, mats.blueTube, 8, r * 0.95, len * 0.78, 0, {
    rotZ: Math.PI / 2,
  });
  g.add(portA, portB);

  g.userData.extension = 0;
  g.setExtension = (v) => {
    const ext = clamp01(v);
    moving.position.y = ext * stroke;
  };
  return g;
}

function valveBlock(mats) {
  const g = new THREE.Group();
  g.add(box(0.13, 0.055, 0.085, mats.graphite, 0, 0.028, 0));
  for (let i = 0; i < 3; i++) {
    const x = -0.043 + i * 0.043;
    g.add(box(0.033, 0.05, 0.075, mats.darkGrey, x, 0.08, 0));
    g.add(cyl(0.0045, 0.0045, 0.006, mats.ledGreen, 6, x, 0.085, 0.042, { rotX: Math.PI / 2 }));
  }
  g.add(box(0.13, 0.014, 0.09, mats.blackPlastic, 0, 0.008, 0));
  return g;
}

function stackLight(mats) {
  const g = new THREE.Group();
  g.add(cyl(0.019, 0.024, 0.02, mats.graphite, 12, 0, 0.01, 0));
  g.add(cyl(0.007, 0.007, 0.2, mats.aluDark, 8, 0, 0.12, 0));
  const red = cyl(0.026, 0.026, 0.042, mats.ledRed, 14, 0, 0.235, 0);
  const amber = cyl(0.026, 0.026, 0.042, mats.ledAmber, 14, 0, 0.279, 0);
  const green = cyl(0.026, 0.026, 0.042, mats.ledGreen, 14, 0, 0.323, 0);
  g.add(red, amber, green);
  g.add(cyl(0.028, 0.028, 0.008, mats.blackPlastic, 14, 0, 0.348, 0));
  return { group: g, amber, green, red };
}

function tslotBase(mats, w = 0.82, d = 0.56) {
  const g = new THREE.Group();
  const h = 0.032;
  g.add(box(w, 0.016, d, mats.graphite, 0, 0.008, 0));
  g.add(box(w - 0.075, 0.02, d - 0.075, mats.benchTop, 0, 0.026, 0));
  g.add(box(w, h, 0.034, mats.alu, 0, 0.008 + h / 2, -d / 2 + 0.017));
  g.add(box(w, h, 0.034, mats.alu, 0, 0.008 + h / 2, d / 2 - 0.017));
  g.add(box(0.034, h, d, mats.alu, -w / 2 + 0.017, 0.008 + h / 2, 0));
  g.add(box(0.034, h, d, mats.alu, w / 2 - 0.017, 0.008 + h / 2, 0));
  return g;
}

function sensorBeam(mats, x, y, z, rot = 0) {
  const g = new THREE.Group();
  g.add(box(0.026, 0.05, 0.026, mats.graphite, 0, 0, 0, { rotY: rot }));
  g.add(cyl(0.0042, 0.0042, 0.008, mats.ledRed, 6, 0.014, 0, 0, { rotZ: Math.PI / 2 }));
  g.position.set(x, y, z);
  return g;
}

function nameplate(mats, renderer, code, type, x = -0.413, y = 0.052, z = 0.16) {
  const mat = makePlateMaterial(renderer, code, type);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.075), mat);
  m.position.set(x, y, z);
  m.rotation.y = -Math.PI / 2;
  return m;
}

/* ------------------------------------------------------------------ */
/* station types                                                       */
/* ------------------------------------------------------------------ */

function buildDistribution(mats, renderer, code) {
  const g = new THREE.Group();
  g.add(tslotBase(mats));
  const B = 0.036;

  const mx = -0.06;
  const PUCK_R = 0.036;
  const PUCK_H = 0.026;
  const STACK_PITCH = 0.029;
  const BASE_Y = B + 0.043;
  const TRAVEL = 0.11;
  const COUNT = 8;

  // transparent stack tube, open just above the ejector pocket
  const magazine = new THREE.Group();
  const acrylic = new THREE.MeshPhysicalMaterial({
    color: 0xd7e6ea,
    metalness: 0,
    roughness: 0.08,
    transparent: true,
    opacity: 0.3,
    envMapIntensity: 1.4,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  magazine.add(cyl(0.053, 0.053, 0.02, mats.graphite, 22, mx, B + 0.02, 0));
  const tubeBottom = BASE_Y + PUCK_H / 2 + 0.003;
  const tubeH = 0.237;
  const tube = new THREE.Mesh(
    new THREE.CylinderGeometry(0.052, 0.052, tubeH, 24, 1, true),
    acrylic
  );
  tube.position.set(mx, tubeBottom + tubeH / 2, 0);
  magazine.add(tube);
  magazine.add(cyl(0.056, 0.056, 0.014, mats.graphite, 22, mx, tubeBottom + tubeH, 0));

  const pucks = [];
  for (let i = 0; i < COUNT; i++) {
    const p = createPuck(mats, PUCK_R, PUCK_H);
    p.position.set(mx, BASE_Y + i * STACK_PITCH, 0);
    magazine.add(p);
    pucks.push(p);
  }
  g.add(magazine);

  // ejector: pad touches the bottom puck and pushes it onto the outfeed ramp
  const ejector = pneumaticCylinder(mats, { len: 0.14, r: 0.02, stroke: TRAVEL });
  ejector.rotation.z = Math.PI / 2;
  ejector.position.set(0.1275, BASE_Y, 0);
  g.add(ejector);
  g.add(box(0.06, 0.023, 0.05, mats.alu, 0.1, B + 0.0115, 0));
  g.add(cyl(0.024, 0.024, 0.024, mats.aluDark, 18, 0.075, BASE_Y, 0, { rotZ: Math.PI / 2 }));

  // outfeed ramp: accumulates all 8 pieces in a single queue along +z
  const CHUTE_X = -0.17;
  const CHUTE_W = 0.11;
  const CHUTE_Z0 = -0.08;
  const CHUTE_LEN = 0.7;
  const CHUTE_ZC = CHUTE_Z0 + CHUTE_LEN / 2;
  const CHUTE_TILT = 0.022;
  const CHUTE_TOP0 = B + 0.03;
  const PITCH = 0.08;

  const chute = new THREE.Group();
  chute.position.set(CHUTE_X, CHUTE_TOP0, 0);
  chute.rotation.x = CHUTE_TILT;
  chute.add(box(CHUTE_W, 0.012, CHUTE_LEN, mats.alu, 0, -0.006, CHUTE_ZC));
  for (const sx of [-1, 1]) {
    chute.add(
      box(0.006, 0.02, CHUTE_LEN, mats.alu, sx * (CHUTE_W / 2 + 0.003), 0.004, CHUTE_ZC)
    );
  }
  chute.add(box(CHUTE_W + 0.018, 0.032, 0.012, mats.aluDark, 0, 0.01, CHUTE_Z0 + CHUTE_LEN));
  g.add(chute);
  for (const z of [0.02, 0.35]) {
    const h = CHUTE_TOP0 - 0.012 - z * Math.sin(CHUTE_TILT) - B;
    g.add(box(0.05, h, 0.05, mats.aluDark, CHUTE_X, B + h / 2, z));
  }

  // inductive sensor at the ejector exit + reflective sensor at the end of the ramp
  const beamMatA = new THREE.MeshBasicMaterial({
    color: 0x49f08a,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
  });
  const beamMatB = new THREE.MeshBasicMaterial({
    color: 0xffb020,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
  });
  function outfeedSensor(z, y, faceMat, beamMat, onMat) {
    const head = new THREE.Group();
    head.add(box(0.028, 0.044, 0.028, mats.graphite, 0, 0, 0));
    head.add(cyl(0.009, 0.009, 0.004, faceMat, 12, 0.016, 0, 0, { rotZ: Math.PI / 2 }));
    const led = cyl(0.0045, 0.0045, 0.006, mats.ledOff, 8, 0, 0.026, 0);
    head.add(led);
    head.position.set(-0.255, y, z);
    g.add(head);
    const postH = y - 0.022 - B;
    g.add(box(0.012, postH, 0.012, mats.aluDark, -0.255, B + postH / 2, z));
    const beam = box(0.15, 0.0025, 0.0025, beamMat, -0.165, y, z, {
      cast: false,
      receive: false,
    });
    beam.visible = false;
    g.add(beam);
    return { led, beam, onMat };
  }
  const sensorOut = outfeedSensor(
    -0.02,
    BASE_Y + PUCK_H / 2,
    mats.bluePlastic,
    beamMatA,
    mats.ledBlue
  );
  const sensorEnd = outfeedSensor(
    (COUNT - 1) * PITCH,
    BASE_Y + PUCK_H / 2 - (COUNT - 1) * PITCH * Math.sin(CHUTE_TILT),
    mats.glassClear,
    beamMatB,
    mats.ledAmber
  );

  // pneumatics
  const valve = valveBlock(mats);
  valve.position.set(0.3, B, 0.18);
  g.add(valve);
  g.add(hose([0.3, B + 0.09, 0.16], [0.088, B + 0.062, 0.004], 0.0042, mats.blueTube, 0.04));
  g.add(hose([0.3, B + 0.09, 0.2], [0.01, B + 0.062, -0.004], 0.0042, mats.blueTube, 0.05, -0.02));
  g.add(hose([0.3, B + 0.05, 0.2], [0.3, B + 0.05, 0.26], 0.0055, mats.blackCable, 0.02));
  g.add(hose([0.3, B + 0.1, 0.22], [-0.255, B + 0.095, 0.56], 0.0035, mats.blackCable, 0.05, 0));
  g.add(hose([-0.255, B + 0.085, 0.55], [-0.255, B + 0.085, -0.015], 0.003, mats.blackCable, 0.02));

  const light = stackLight(mats);
  light.group.position.set(0.32, B, -0.2);
  g.add(light.group);
  g.add(nameplate(mats, renderer, code, "DISTRIBUIÇÃO"));

  let mag = pucks.slice();
  let queued = [];
  let stepAnnounced = false;
  let hmiRef = null;

  const setHmi = (h) => {
    hmiRef = h;
  };

  const landingY = (z) => BASE_Y - z * Math.sin(CHUTE_TILT);

  function refreshSensors() {
    const atExit = pucks.some((p) => p.position.x < -0.095 && Math.abs(p.position.z) < 0.05);
    const atEnd = pucks.some(
      (p) =>
        p.position.x < -0.095 &&
        Math.abs(p.position.z - (COUNT - 1) * PITCH) < 0.05
    );
    sensorOut.led.material = atExit ? sensorOut.onMat : mats.ledOff;
    sensorOut.beam.visible = atExit;
    sensorEnd.led.material = atEnd ? sensorEnd.onMat : mats.ledOff;
    sensorEnd.beam.visible = atEnd;
  }

  const ctl = {
    apply(action, p) {
      if (action !== "eject") return;
      if (mag.length === 0) {
        light.red.material = mats.ledRed;
        light.amber.material = mats.ledOff;
        light.green.material = mats.ledOff;
        hmiRef?.draw("MAGAZINE VAZIO", "error");
        return { stop: "MAGAZINE VAZIO", message: "Magazine vazio · programa interrompido" };
      }
      if (p < 0.08) stepAnnounced = false;
      const push = easeInOut(clamp01(p / 0.3));
      const drop = easeInOut(clamp01((p - 0.42) / 0.32));
      const retract = easeInOut(clamp01((p - 0.62) / 0.34));
      ejector.setExtension(push * (1 - retract));
      mag.forEach((pk, i) => {
        if (i === 0) {
          pk.position.set(mx - push * TRAVEL, BASE_Y, 0);
        } else {
          pk.position.set(mx, BASE_Y + (i - drop) * STACK_PITCH, 0);
        }
      });
      queued.forEach((q) => {
        const z = q.baseZ + push * PITCH;
        q.mesh.position.set(CHUTE_X, landingY(z), z);
      });
      refreshSensors();
      if (!stepAnnounced && push > 0.55) {
        stepAnnounced = true;
        hmiRef?.draw(`SAÍDA ${Math.min(COUNT, queued.length + 1)}/${COUNT}`, "running");
      }
    },
    commit(action) {
      if (action !== "eject" || mag.length === 0) return;
      queued.forEach((q) => {
        q.baseZ += PITCH;
        q.mesh.position.set(CHUTE_X, landingY(q.baseZ), q.baseZ);
      });
      const out = mag.shift();
      out.position.set(CHUTE_X, BASE_Y, 0);
      queued.unshift({ mesh: out, baseZ: 0 });
      refreshSensors();
      const full = queued.length >= COUNT;
      light.red.material = mats.ledOff;
      light.amber.material = full ? mats.ledOff : mats.ledAmber;
      light.green.material = full ? mats.ledGreen : mats.ledOff;
      hmiRef?.draw(
        full ? `CALHA CHEIA · ${COUNT}/${COUNT}` : `SAÍDA ${queued.length}/${COUNT}`,
        full ? "done" : "running"
      );
    },
    reset() {
      ejector.setExtension(0);
      queued = [];
      stepAnnounced = false;
      mag = pucks.slice();
      pucks.forEach((pk, i) => {
        pk.visible = true;
        pk.position.set(mx, BASE_Y + i * STACK_PITCH, 0);
      });
      refreshSensors();
      light.red.material = mats.ledRed;
      light.amber.material = mats.ledOff;
      light.green.material = mats.ledOff;
    },
    setHmi,
  };

  return { group: g, height: 0.44, ctl, light, persistResult: true };
}

let testBushingGeometry = null;
let pressureGaugeFaceTexture = null;

function createTestBushing(mats) {
  if (!testBushingGeometry) {
    const profile = [
      [0.015, 0],
      [0.044, 0],
      [0.052, 0],
      [0.052, 0.006],
      [0.049, 0.01],
      [0.04, 0.013],
      [0.04, 0.034],
      [0.037, 0.039],
      [0.015, 0.039],
      [0.015, 0],
    ].map(([x, y]) => new THREE.Vector2(x, y));
    testBushingGeometry = new THREE.LatheGeometry(profile, 40);
    testBushingGeometry.computeVertexNormals();
  }

  const part = new THREE.Group();
  part.name = "test-bushing";
  const body = new THREE.Mesh(testBushingGeometry, mats.traySteel);
  body.castShadow = true;
  body.receiveShadow = true;
  part.add(body);

  const sleeve = cyl(0.0142, 0.0146, 0.026, mats.chrome, 32, 0, 0.019, 0);
  sleeve.castShadow = true;
  sleeve.receiveShadow = true;
  part.add(sleeve);

  const boreRim = new THREE.Mesh(
    new THREE.TorusGeometry(0.0152, 0.0008, 6, 32),
    mats.aluDark
  );
  boreRim.rotation.x = Math.PI / 2;
  boreRim.position.y = 0.0391;
  part.add(boreRim);

  const witnessRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.0255, 0.0012, 6, 36),
    mats.bluePlastic
  );
  witnessRing.rotation.x = Math.PI / 2;
  witnessRing.position.y = 0.0394;
  part.add(witnessRing);

  const machinedRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.034, 0.0007, 5, 36),
    mats.chrome
  );
  machinedRing.rotation.x = Math.PI / 2;
  machinedRing.position.y = 0.0392;
  part.add(machinedRing);

  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + Math.PI / 6;
    const x = Math.cos(a) * 0.0455;
    const z = Math.sin(a) * 0.0455;
    part.add(cyl(0.0033, 0.0033, 0.0012, mats.graphite, 12, x, 0.0106, z));
    const rim = new THREE.Mesh(
      new THREE.TorusGeometry(0.0036, 0.00045, 5, 16),
      mats.chrome
    );
    rim.rotation.x = Math.PI / 2;
    rim.position.set(x, 0.0112, z);
    part.add(rim);
  }

  return part;
}

function createPressureGaugeTexture(aniso) {
  if (pressureGaugeFaceTexture) return pressureGaugeFaceTexture;

  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#f4f4ef";
  ctx.fillRect(0, 0, 256, 256);
  ctx.beginPath();
  ctx.arc(128, 128, 116, 0, Math.PI * 2);
  ctx.fillStyle = "#fbfbf7";
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#5b6268";
  ctx.stroke();

  for (let i = 0; i <= 40; i++) {
    const a = Math.PI * 0.75 + (i / 40) * Math.PI * 1.5;
    const major = i % 5 === 0;
    const inner = major ? 86 : 96;
    ctx.beginPath();
    ctx.moveTo(128 + Math.cos(a) * inner, 128 + Math.sin(a) * inner);
    ctx.lineTo(128 + Math.cos(a) * 106, 128 + Math.sin(a) * 106);
    ctx.lineWidth = major ? 3 : 1.5;
    ctx.strokeStyle = i >= 36 ? "#c81020" : "#343a40";
    ctx.stroke();
  }

  ctx.fillStyle = "#343a40";
  ctx.font = "bold 17px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (let i = 0; i <= 4; i++) {
    const a = Math.PI * 0.75 + (i / 4) * Math.PI * 1.5;
    ctx.fillText(String(i * 2), 128 + Math.cos(a) * 70, 128 + Math.sin(a) * 70);
  }
  ctx.font = "bold 15px Arial";
  ctx.fillText("bar", 128, 171);
  ctx.font = "12px Arial";
  ctx.fillText("PRENSA", 128, 193);

  pressureGaugeFaceTexture = new THREE.CanvasTexture(canvas);
  pressureGaugeFaceTexture.colorSpace = THREE.SRGBColorSpace;
  pressureGaugeFaceTexture.anisotropy = aniso;
  return pressureGaugeFaceTexture;
}

function buildTest(mats, renderer, code) {
  const g = new THREE.Group();
  g.add(tslotBase(mats));
  const B = 0.036;
  const px = 0.02;
  const rb = (w, h, d, r, mat, x = 0, y = 0, z = 0) => {
    const mesh = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 3, r), mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  };

  for (const sz of [-1, 1]) {
    g.add(rb(0.045, 0.46, 0.045, 0.006, mats.alu, px, B + 0.23, sz * 0.17));
    g.add(box(0.008, 0.4, 0.012, mats.graphite, px - 0.023, B + 0.235, sz * 0.17));
    g.add(rb(0.11, 0.018, 0.11, 0.004, mats.aluDark, px, B + 0.018, sz * 0.17));
    g.add(
      box(0.012, 0.12, 0.034, mats.aluDark, px - 0.038, B + 0.073, sz * 0.17, {
        rotZ: -0.55,
      })
    );
    for (const dx of [-0.035, 0.035]) {
      g.add(cyl(0.005, 0.005, 0.006, mats.chrome, 6, px + dx, B + 0.03, sz * 0.17));
    }
  }

  g.add(rb(0.16, 0.052, 0.41, 0.008, mats.alu, px, B + 0.485, 0));
  g.add(rb(0.13, 0.016, 0.15, 0.003, mats.graphite, px, B + 0.454, 0));
  g.add(rb(0.09, 0.006, 0.035, 0.002, mats.hazard, px - 0.025, B + 0.514, 0.185));

  const press = pneumaticCylinder(mats, { len: 0.25, r: 0.032, stroke: 0.05 });
  press.rotation.x = Math.PI;
  press.position.set(px, B + 0.45, 0);
  g.add(press);
  g.add(cyl(0.044, 0.044, 0.018, mats.aluDark, 24, px, B + 0.443, 0));
  g.add(cyl(0.033, 0.033, 0.028, mats.bluePlastic, 24, px, B + 0.368, 0));

  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      g.add(cyl(0.0035, 0.0035, 0.215, mats.chrome, 10, px + sx * 0.043, B + 0.307, sz * 0.043));
    }
    g.add(cyl(0.007, 0.007, 0.31, mats.chrome, 18, px + sx * 0.072, B + 0.275, 0));
    g.add(cyl(0.014, 0.014, 0.024, mats.aluDark, 18, px + sx * 0.072, B + 0.43, 0));
    g.add(cyl(0.013, 0.013, 0.018, mats.aluDark, 18, px + sx * 0.072, B + 0.12, 0));
  }

  const head = new THREE.Group();
  head.name = "test-press-head";
  head.position.set(px, B + 0.19, 0);
  head.add(rb(0.19, 0.028, 0.15, 0.005, mats.aluDark, 0, 0, 0));
  head.add(rb(0.13, 0.009, 0.105, 0.002, mats.steel, 0, 0.018, 0));
  for (const sx of [-1, 1]) {
    head.add(cyl(0.015, 0.015, 0.05, mats.aluDark, 18, sx * 0.072, 0.012, 0));
    head.add(cyl(0.009, 0.009, 0.054, mats.chrome, 16, sx * 0.072, 0.012, 0));
  }
  head.add(cyl(0.027, 0.03, 0.022, mats.chrome, 28, 0, -0.027, 0));
  head.add(cyl(0.019, 0.019, 0.004, mats.rubber, 24, 0, -0.039, 0));
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      head.add(cyl(0.004, 0.004, 0.005, mats.chrome, 6, sx * 0.05, 0.025, sz * 0.04));
    }
  }
  g.add(head);

  g.add(rb(0.24, 0.018, 0.26, 0.004, mats.aluDark, px, B + 0.027, 0));
  g.add(rb(0.16, 0.014, 0.16, 0.003, mats.steel, px, B + 0.043, 0));
  g.add(cyl(0.06, 0.064, 0.012, mats.graphite, 32, px, B + 0.054, 0));
  g.add(cyl(0.0145, 0.0145, 0.003, mats.graphite, 24, px, B + 0.061, 0));
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    g.add(
      cyl(0.0035, 0.0035, 0.016, mats.chrome, 14, px + Math.cos(a) * 0.058, B + 0.068, Math.sin(a) * 0.058)
    );
  }
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      g.add(cyl(0.004, 0.004, 0.005, mats.chrome, 6, px + sx * 0.068, B + 0.053, sz * 0.068));
    }
  }

  const part = createTestBushing(mats);
  part.position.set(px, B + 0.06, 0);
  g.add(part);

  const gauge = new THREE.Group();
  gauge.position.set(px - 0.13, B + 0.355, 0.13);
  gauge.add(cyl(0.045, 0.045, 0.024, mats.offWhite, 28, 0, 0, 0, { rotZ: Math.PI / 2 }));
  const bezel = new THREE.Mesh(new THREE.TorusGeometry(0.039, 0.004, 8, 32), mats.chrome);
  bezel.rotation.y = -Math.PI / 2;
  bezel.position.x = -0.013;
  gauge.add(bezel);
  const gaugeFace = new THREE.Mesh(
    new THREE.CircleGeometry(0.0365, 40),
    new THREE.MeshStandardMaterial({
      map: createPressureGaugeTexture(mats.aniso),
      roughness: 0.52,
      metalness: 0.04,
    })
  );
  gaugeFace.rotation.y = -Math.PI / 2;
  gaugeFace.position.x = -0.0145;
  gauge.add(gaugeFace);
  const needle = box(0.0018, 0.028, 0.0028, mats.redPaint, -0.016, 0.01, 0);
  needle.name = "test-gauge-needle";
  needle.rotation.x = -2.05;
  gauge.add(needle);
  gauge.add(cyl(0.0055, 0.0055, 0.004, mats.graphite, 16, -0.018, 0, 0, { rotZ: Math.PI / 2 }));
  const gaugeGlass = new THREE.Mesh(new THREE.CircleGeometry(0.037, 36), mats.glassClear);
  gaugeGlass.rotation.y = -Math.PI / 2;
  gaugeGlass.position.x = -0.019;
  gauge.add(gaugeGlass);
  g.add(gauge);
  g.add(cyl(0.006, 0.006, 0.13, mats.aluDark, 12, px - 0.065, B + 0.355, 0.13, { rotZ: Math.PI / 2 }));

  const partSensor = sensorBeam(mats, px + 0.112, B + 0.074, 0.035);
  partSensor.children[1].material = mats.ledGreen;
  g.add(partSensor);
  g.add(box(0.014, 0.04, 0.014, mats.aluDark, px + 0.112, B + 0.055, 0.035));

  const limitSwitch = new THREE.Group();
  limitSwitch.position.set(px + 0.094, B + 0.137, -0.025);
  limitSwitch.add(box(0.024, 0.034, 0.02, mats.graphite, 0, 0, 0));
  limitSwitch.add(cyl(0.006, 0.006, 0.01, mats.steel, 12, -0.016, 0.013, 0, { rotZ: Math.PI / 2 }));
  const limitLed = cyl(0.004, 0.004, 0.005, mats.ledOff, 10, 0, 0.021, 0);
  limitSwitch.add(limitLed);
  g.add(limitSwitch);

  const frl = new THREE.Group();
  frl.position.set(0.285, B, -0.12);
  frl.add(cyl(0.026, 0.026, 0.07, mats.offWhite, 20, 0, 0.047, 0));
  frl.add(cyl(0.023, 0.023, 0.035, mats.glassClear, 20, 0, 0.013, 0));
  frl.add(cyl(0.03, 0.03, 0.012, mats.bluePlastic, 20, 0, 0.085, 0));
  frl.add(cyl(0.022, 0.022, 0.028, mats.graphite, 18, 0, 0.104, 0));
  frl.add(cyl(0.027, 0.027, 0.018, mats.blackPlastic, 18, 0, 0.126, 0));
  g.add(frl);

  const valve = valveBlock(mats);
  valve.position.set(0.3, B, 0.16);
  g.add(valve);
  g.add(rb(0.032, 0.024, 0.36, 0.003, mats.graphite, 0.265, B + 0.047, -0.01));
  g.add(hose([0.285, B + 0.126, -0.12], [0.3, B + 0.08, 0.14], 0.0042, mats.blueTube, 0.045, 0.015));
  g.add(hose([0.3, B + 0.09, 0.16], [px + 0.032, B + 0.39, 0.006], 0.0042, mats.blueTube, 0.06));
  g.add(hose([0.3, B + 0.09, 0.2], [px + 0.032, B + 0.25, -0.006], 0.0042, mats.blueTube, 0.075, -0.02));
  g.add(hose([0.04, B + 0.1, 0.22], [0.24, B + 0.08, 0.24], 0.0042, mats.blueTube, 0.035));
  g.add(hose([0.3, B + 0.05, 0.18], [0.3, B + 0.05, 0.25], 0.0055, mats.blackCable, 0.015));
  g.add(hose([px + 0.112, B + 0.09, 0.035], [0.265, B + 0.06, 0.06], 0.0028, mats.blackCable, 0.025, 0.01));

  const light = stackLight(mats);
  light.group.position.set(0.32, B, -0.2);
  g.add(light.group);
  g.add(nameplate(mats, renderer, code, "TESTE"));

  const ctl = {
    apply(action, p) {
      if (action !== "press") return;
      const k = p < 0.4 ? easeInOut(p / 0.4) : p < 0.64 ? 1 : 1 - easeInOut((p - 0.64) / 0.36);
      press.setExtension(k);
      head.position.y = B + 0.19 - k * 0.05;
      needle.rotation.x = -2.05 + k * 4.1;
      limitLed.material = p > 0.3 && p < 0.75 ? mats.ledRed : mats.ledOff;
    },
    reset() {
      press.setExtension(0);
      head.position.y = B + 0.19;
      needle.rotation.x = -2.05;
      limitLed.material = mats.ledOff;
    },
  };

  return { group: g, height: 0.55, ctl, light };
}

function buildProcessing(mats, renderer, code) {
  const g = new THREE.Group();
  g.add(tslotBase(mats));
  const B = 0.036;

  const rx = 0.0;
  g.add(cyl(0.17, 0.17, 0.055, mats.graphite, 28, rx, B + 0.0275, 0));
  const table = new THREE.Group();
  table.position.set(rx, B + 0.062, 0);
  table.add(cyl(0.16, 0.16, 0.018, mats.aluDark, 32, 0, 0.009, 0));
  table.add(cyl(0.035, 0.035, 0.03, mats.chrome, 18, 0, 0.03, 0));
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const fx = Math.cos(a) * 0.105;
    const fz = Math.sin(a) * 0.105;
    table.add(box(0.07, 0.016, 0.07, mats.alu, fx, 0.024, fz));
    table.add(box(0.02, 0.02, 0.02, mats.graphite, fx - 0.05, 0.028, fz - 0.05));
    if (i % 2 === 0) {
      const p = createPuck(mats, 0.032, 0.024);
      p.position.set(fx, 0.044, fz);
      table.add(p);
    }
  }
  g.add(table);

  // rotary actuator body, coupled to the table through a drive shaft
  g.add(box(0.1, 0.07, 0.1, mats.bluePlastic, 0.27, B + 0.035, 0.02));
  g.add(cyl(0.012, 0.012, 0.075, mats.chrome, 12, 0.1835, B + 0.06, 0.02, { rotZ: Math.PI / 2 }));
  const valve = valveBlock(mats);
  valve.position.set(0.3, B, -0.19);
  g.add(valve);
  g.add(hose([0.3, B + 0.09, -0.17], [0.3, B + 0.1, 0.02], 0.0042, mats.blueTube, 0.06, -0.03));
  g.add(hose([0.3, B + 0.09, -0.2], [0.24, B + 0.12, -0.2], 0.0042, mats.blueTube, 0.04));
  g.add(hose([0.26, B + 0.03, -0.18], [0.3, B + 0.03, -0.14], 0.0055, mats.blackCable, 0.02));

  // safety light curtain posts
  for (const sz of [-1, 1]) {
    g.add(box(0.02, 0.24, 0.02, mats.yellow, -0.33, B + 0.12, sz * 0.22));
    g.add(box(0.04, 0.012, 0.04, mats.aluDark, -0.33, B + 0.006, sz * 0.22));
    g.add(box(0.024, 0.024, 0.024, mats.ledRed, -0.33, B + 0.2, sz * 0.22));
  }

  const light = stackLight(mats);
  light.group.position.set(0.32, B, -0.2);
  g.add(light.group);
  g.add(nameplate(mats, renderer, code, "PROCESSAMENTO"));

  let index = 0;
  const ctl = {
    apply(action, p) {
      if (action !== "rotate") return;
      table.rotation.y = -index * (Math.PI / 2) - easeInOut(p) * (Math.PI / 2);
    },
    commit(action) {
      if (action === "rotate") index++;
    },
    reset() {
      index = 0;
      table.rotation.y = 0;
    },
  };

  return { group: g, height: 0.3, ctl, light };
}

function createAssemblyBase(mats) {
  const g = new THREE.Group();
  g.name = "assembly-base";
  g.add(cyl(0.041, 0.043, 0.025, mats.offWhite, 28, 0, 0.0125, 0));
  g.add(cyl(0.043, 0.043, 0.005, mats.steel, 28, 0, 0.0025, 0));
  g.add(cyl(0.034, 0.034, 0.004, mats.steel, 28, 0, 0.027, 0));
  g.add(cyl(0.024, 0.026, 0.01, mats.aluDark, 24, 0, 0.034, 0));
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.023, 0.0014, 6, 28), mats.chrome);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.039;
  g.add(ring);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    g.add(cyl(0.003, 0.003, 0.0012, mats.graphite, 12, Math.cos(a) * 0.029, 0.0294, Math.sin(a) * 0.029));
  }
  g.add(box(0.007, 0.005, 0.01, mats.pinkPlastic, 0.034, 0.029, 0));
  return g;
}

function createAssemblyCap(mats) {
  const g = new THREE.Group();
  g.name = "assembly-cap";
  g.add(cyl(0.031, 0.031, 0.016, mats.pinkPlastic, 26, 0, 0.008, 0));
  g.add(cyl(0.032, 0.032, 0.004, mats.steel, 26, 0, 0.002, 0));
  g.add(cyl(0.013, 0.014, 0.006, mats.chrome, 20, 0, 0.019, 0));
  g.add(box(0.008, 0.006, 0.012, mats.pinkPlastic, 0.028, 0.009, 0));
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.026, 0.001, 5, 26), mats.orangePlastic);
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 0.0164;
  g.add(rim);
  return g;
}

function buildAssembly(mats, renderer, code) {
  const g = new THREE.Group();
  g.add(tslotBase(mats));
  const B = 0.036;
  const px = 0.02;
  const pressZ = -0.035;
  const feedZ = 0.045;
  const rb = (w, h, d, r, mat, x = 0, y = 0, z = 0) => {
    const mesh = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 3, r), mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  };

  for (const sz of [-1, 1]) {
    g.add(rb(0.045, 0.5, 0.045, 0.006, mats.alu, px, B + 0.25, sz * 0.21));
    g.add(box(0.008, 0.43, 0.012, mats.graphite, px - 0.023, B + 0.255, sz * 0.21));
    g.add(rb(0.12, 0.018, 0.12, 0.004, mats.aluDark, px, B + 0.018, sz * 0.21));
    g.add(box(0.012, 0.14, 0.036, mats.aluDark, px - 0.04, B + 0.08, sz * 0.21, { rotZ: -0.5 }));
    for (const dx of [-0.04, 0.04]) {
      g.add(cyl(0.005, 0.005, 0.006, mats.chrome, 6, px + dx, B + 0.03, sz * 0.21));
    }
  }
  g.add(rb(0.17, 0.052, 0.47, 0.008, mats.alu, px, B + 0.505, 0));
  g.add(rb(0.15, 0.014, 0.25, 0.003, mats.graphite, px, B + 0.472, 0));
  g.add(rb(0.1, 0.006, 0.035, 0.002, mats.hazard, px - 0.02, B + 0.534, 0.215));

  const press = pneumaticCylinder(mats, { len: 0.3, r: 0.028, stroke: 0.05 });
  press.rotation.x = Math.PI;
  press.position.set(px, B + 0.47, pressZ);
  g.add(press);
  g.add(cyl(0.04, 0.04, 0.016, mats.aluDark, 22, px, B + 0.463, pressZ));
  g.add(cyl(0.029, 0.029, 0.026, mats.bluePlastic, 22, px, B + 0.39, pressZ));

  const feeder = pneumaticCylinder(mats, { len: 0.27, r: 0.022, stroke: 0.07 });
  feeder.rotation.x = Math.PI;
  feeder.position.set(px, B + 0.47, feedZ);
  g.add(feeder);
  g.add(cyl(0.031, 0.031, 0.014, mats.aluDark, 20, px, B + 0.463, feedZ));
  g.add(cyl(0.023, 0.023, 0.022, mats.bluePlastic, 20, px, B + 0.4, feedZ));

  for (const z of [pressZ, feedZ]) {
    for (const sx of [-1, 1]) {
      g.add(cyl(0.006, 0.006, 0.29, mats.chrome, 16, px + sx * 0.043, B + 0.285, z));
      g.add(cyl(0.012, 0.012, 0.022, mats.aluDark, 16, px + sx * 0.043, B + 0.43, z));
      g.add(cyl(0.011, 0.011, 0.016, mats.aluDark, 16, px + sx * 0.043, B + 0.14, z));
    }
  }

  const pressHead = new THREE.Group();
  pressHead.name = "assembly-press-head";
  pressHead.position.set(px, B + 0.167, pressZ);
  pressHead.add(rb(0.14, 0.026, 0.12, 0.004, mats.aluDark, 0, 0, 0));
  pressHead.add(rb(0.09, 0.008, 0.08, 0.002, mats.steel, 0, 0.017, 0));
  for (const sx of [-1, 1]) {
    pressHead.add(cyl(0.013, 0.013, 0.046, mats.aluDark, 16, sx * 0.043, 0.008, 0));
  }
  pressHead.add(cyl(0.022, 0.025, 0.02, mats.chrome, 24, 0, -0.009, 0));
  pressHead.add(cyl(0.015, 0.015, 0.003, mats.rubber, 20, 0, -0.02, 0));
  g.add(pressHead);

  const feederHead = new THREE.Group();
  feederHead.name = "assembly-feeder-head";
  feederHead.position.set(px, B + 0.2, feedZ);
  feederHead.add(rb(0.12, 0.024, 0.1, 0.004, mats.aluDark, 0, 0, 0));
  for (const sx of [-1, 1]) {
    feederHead.add(cyl(0.011, 0.011, 0.042, mats.aluDark, 16, sx * 0.043, 0.006, 0));
  }
  feederHead.add(cyl(0.018, 0.02, 0.02, mats.chrome, 22, 0, -0.016, 0));
  feederHead.add(cyl(0.013, 0.013, 0.003, mats.rubber, 18, 0, -0.027, 0));
  g.add(feederHead);

  g.add(rb(0.23, 0.02, 0.25, 0.004, mats.aluDark, px, B + 0.022, 0));
  g.add(rb(0.15, 0.012, 0.13, 0.003, mats.steel, px, B + 0.038, pressZ));
  g.add(cyl(0.048, 0.052, 0.008, mats.graphite, 28, px, B + 0.047, pressZ));
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    g.add(cyl(0.0035, 0.0035, 0.014, mats.chrome, 14, px + Math.cos(a) * 0.055, B + 0.055, pressZ + Math.sin(a) * 0.055));
  }

  const basePart = createAssemblyBase(mats);
  basePart.position.set(px, B + 0.04, pressZ);
  g.add(basePart);

  const shuttle = new THREE.Group();
  shuttle.name = "assembly-shuttle";
  shuttle.position.set(px, B + 0.072, feedZ);
  shuttle.add(rb(0.09, 0.01, 0.12, 0.002, mats.aluDark, 0, 0, 0));
  shuttle.add(box(0.012, 0.012, 0.1, mats.chrome, -0.034, 0.008, 0));
  shuttle.add(box(0.012, 0.012, 0.1, mats.chrome, 0.034, 0.008, 0));
  g.add(shuttle);

  const shuttleCylinder = pneumaticCylinder(mats, { len: 0.1, r: 0.016, stroke: 0.07 });
  shuttleCylinder.rotation.x = -Math.PI / 2;
  shuttleCylinder.position.set(px, B + 0.064, 0.145);
  g.add(shuttleCylinder);
  g.add(rb(0.06, 0.024, 0.05, 0.003, mats.aluDark, px, B + 0.047, 0.13));

  const capPart = createAssemblyCap(mats);
  capPart.position.set(px, B + 0.14, feedZ);
  g.add(capPart);

  const magazineCaps = [capPart];
  for (let i = 1; i < 5; i++) {
    const cap = createAssemblyCap(mats);
    cap.position.set(px, B + 0.14 + i * 0.022, feedZ);
    magazineCaps.push(cap);
    g.add(cap);
  }
  g.add(box(0.09, 0.008, 0.085, mats.aluDark, px, B + 0.13, feedZ));
  g.add(box(0.004, 0.13, 0.085, mats.glassClear, px - 0.047, B + 0.2, feedZ));
  g.add(box(0.004, 0.13, 0.085, mats.glassClear, px + 0.047, B + 0.2, feedZ));
  g.add(box(0.09, 0.13, 0.004, mats.glassClear, px, B + 0.2, feedZ - 0.041));
  for (const sx of [-1, 1]) {
    g.add(cyl(0.003, 0.003, 0.14, mats.chrome, 12, px + sx * 0.047, B + 0.2, feedZ + 0.042));
  }
  g.add(rb(0.105, 0.01, 0.1, 0.003, mats.aluDark, px, B + 0.272, feedZ));
  g.add(box(0.05, 0.008, 0.004, mats.hazard, px, B + 0.279, feedZ + 0.052));

  const pusher = pneumaticCylinder(mats, { len: 0.11, r: 0.02, stroke: 0.09 });
  pusher.rotation.z = Math.PI / 2;
  pusher.position.set(0.185, B + 0.065, pressZ);
  g.add(pusher);
  g.add(rb(0.07, 0.03, 0.075, 0.004, mats.aluDark, 0.175, B + 0.035, pressZ));
  g.add(cyl(0.025, 0.025, 0.024, mats.aluDark, 16, 0.148, B + 0.065, pressZ, { rotZ: Math.PI / 2 }));
  const paddle = rb(0.012, 0.045, 0.065, 0.003, mats.offWhite, px + 0.072, B + 0.075, pressZ);
  paddle.add(box(0.006, 0.035, 0.052, mats.rubber, -0.008, 0, 0));
  g.add(paddle);

  g.add(rb(0.23, 0.012, 0.14, 0.003, mats.aluDark, -0.145, B + 0.014, pressZ));
  g.add(rb(0.21, 0.006, 0.12, 0.002, mats.rubber, -0.145, B + 0.023, pressZ));
  for (const sx of [-1, 1]) {
    g.add(box(0.21, 0.024, 0.006, mats.alu, -0.145, B + 0.033, pressZ + sx * 0.06));
  }

  const gauge = new THREE.Group();
  gauge.position.set(px - 0.135, B + 0.33, 0.12);
  gauge.add(cyl(0.043, 0.043, 0.024, mats.offWhite, 28, 0, 0, 0, { rotZ: Math.PI / 2 }));
  const bezel = new THREE.Mesh(new THREE.TorusGeometry(0.037, 0.004, 8, 32), mats.chrome);
  bezel.rotation.y = -Math.PI / 2;
  bezel.position.x = -0.013;
  gauge.add(bezel);
  const gaugeFace = new THREE.Mesh(
    new THREE.CircleGeometry(0.0345, 40),
    new THREE.MeshStandardMaterial({
      map: createPressureGaugeTexture(mats.aniso),
      roughness: 0.52,
      metalness: 0.04,
    })
  );
  gaugeFace.rotation.y = -Math.PI / 2;
  gaugeFace.position.x = -0.0145;
  gauge.add(gaugeFace);
  const needle = box(0.0018, 0.026, 0.0026, mats.redPaint, -0.016, 0.009, 0);
  needle.name = "assembly-gauge-needle";
  needle.rotation.x = -2.05;
  gauge.add(needle);
  gauge.add(cyl(0.005, 0.005, 0.004, mats.graphite, 16, -0.018, 0, 0, { rotZ: Math.PI / 2 }));
  const gaugeGlass = new THREE.Mesh(new THREE.CircleGeometry(0.035, 36), mats.glassClear);
  gaugeGlass.rotation.y = -Math.PI / 2;
  gaugeGlass.position.x = -0.019;
  gauge.add(gaugeGlass);
  g.add(gauge);
  g.add(cyl(0.006, 0.006, 0.12, mats.aluDark, 12, px - 0.065, B + 0.33, 0.12, { rotZ: Math.PI / 2 }));

  const baseSensor = sensorBeam(mats, px + 0.103, B + 0.077, pressZ);
  baseSensor.children[1].material = mats.ledGreen;
  const capSensor = sensorBeam(mats, px - 0.096, B + 0.105, feedZ);
  capSensor.children[1].material = mats.ledBlue;
  const shuttleSensor = sensorBeam(mats, px + 0.098, B + 0.091, pressZ + 0.04);
  shuttleSensor.children[1].material = mats.ledBlue;
  g.add(baseSensor, capSensor, shuttleSensor);
  g.add(box(0.018, 0.062, 0.018, mats.aluDark, px + 0.103, B + 0.057, pressZ));
  g.add(box(0.018, 0.064, 0.018, mats.aluDark, px - 0.096, B + 0.083, feedZ));
  g.add(box(0.018, 0.06, 0.018, mats.aluDark, px + 0.098, B + 0.069, pressZ + 0.04));

  const limitSwitch = new THREE.Group();
  limitSwitch.position.set(px + 0.092, B + 0.146, pressZ);
  limitSwitch.add(rb(0.028, 0.034, 0.022, 0.003, mats.graphite, 0, 0, 0));
  limitSwitch.add(cyl(0.006, 0.006, 0.012, mats.steel, 12, -0.018, 0.012, 0, { rotZ: Math.PI / 2 }));
  const limitLed = cyl(0.004, 0.004, 0.005, mats.ledOff, 10, 0, 0.022, 0);
  limitSwitch.add(limitLed);
  g.add(limitSwitch);

  const frl = new THREE.Group();
  frl.position.set(0.29, B, -0.2);
  frl.add(rb(0.09, 0.026, 0.065, 0.003, mats.aluDark, 0, 0.035, 0));
  frl.add(cyl(0.021, 0.021, 0.07, mats.offWhite, 18, -0.026, 0.078, 0));
  frl.add(cyl(0.019, 0.019, 0.055, mats.offWhite, 18, 0.01, 0.078, 0));
  frl.add(cyl(0.016, 0.016, 0.04, mats.glassClear, 20, 0.01, 0.082, 0));
  frl.add(cyl(0.022, 0.022, 0.008, mats.graphite, 18, -0.026, 0.112, 0));
  frl.add(cyl(0.022, 0.022, 0.008, mats.graphite, 18, 0.01, 0.108, 0));
  g.add(frl);

  const valve = valveBlock(mats);
  valve.position.set(0.285, B, 0.12);
  g.add(valve);
  const valve2 = valveBlock(mats);
  valve2.position.set(0.285, B, 0.22);
  g.add(valve2);
  g.add(rb(0.17, 0.035, 0.19, 0.004, mats.aluDark, 0.285, B + 0.007, 0.17));
  g.add(hose([0.26, B + 0.08, -0.2], [0.26, B + 0.08, 0.08], 0.0055, mats.blueTube, 0.04));
  g.add(hose([0.285, B + 0.1, 0.1], [px + 0.02, B + 0.42, pressZ], 0.0042, mats.blueTube, 0.07));
  g.add(hose([0.3, B + 0.11, 0.1], [px + 0.045, B + 0.29, pressZ], 0.0042, mats.blueTube, 0.07));
  g.add(hose([0.255, B + 0.1, 0.14], [px + 0.03, B + 0.42, feedZ], 0.0042, mats.blueTube, 0.06));
  g.add(hose([0.285, B + 0.11, 0.2], [px + 0.035, B + 0.09, 0.14], 0.0042, mats.blueTube, 0.06));
  g.add(hose([0.3, B + 0.11, 0.24], [0.18, B + 0.09, pressZ], 0.0042, mats.blueTube, 0.06));
  g.add(hose([0.3, B + 0.04, 0.12], [0.3, B + 0.04, -0.3], 0.0055, mats.blackCable, 0.03));
  g.add(box(0.045, 0.025, 0.23, mats.graphite, 0.34, B + 0.035, 0.02));
  g.add(hose([0.34, B + 0.05, -0.1], [0.34, B + 0.05, 0.27], 0.004, mats.blackCable, 0.02));

  const light = stackLight(mats);
  light.group.position.set(0.33, B, -0.12);
  g.add(light.group);
  g.add(nameplate(mats, renderer, code, "MONTAGEM"));

  const seg = (p, a, b) => easeInOut(clamp01((p - a) / (b - a)));
  const stages = ["ALIMENTANDO", "POSICIONANDO", "PRENSANDO", "VERIFICANDO", "EXPULSANDO"];
  const completed = [];
  let cycles = 0;
  let activeCap = null;
  let stage = -1;
  let hmiRef = null;

  const setHmi = (h) => {
    hmiRef = h;
  };

  function prepareCycle() {
    if (cycles >= magazineCaps.length) return false;
    activeCap = magazineCaps[cycles];
    activeCap.visible = true;
    activeCap.position.set(px, B + 0.14, feedZ);
    stage = -1;
    return true;
  }

  function refreshSensors(pressing = false, transferring = false) {
    baseSensor.children[1].material = mats.ledGreen;
    capSensor.children[1].material = activeCap && pForSensorActive ? mats.ledBlue : mats.ledOff;
    shuttleSensor.children[1].material = transferring ? mats.ledBlue : mats.ledOff;
    limitLed.material = pressing ? mats.ledRed : mats.ledOff;
  }

  let pForSensorActive = false;

  const ctl = {
    apply(action, p) {
      if (action !== "assemble") return;
      if (cycles >= magazineCaps.length) {
        light.red.material = mats.ledRed;
        light.amber.material = mats.ledOff;
        light.green.material = mats.ledOff;
        hmiRef?.draw("MAGAZINE VAZIO", "error");
        return { stop: "MAGAZINE VAZIO", message: "Magazine de tampas vazio · programa interrompido" };
      }
      if (!activeCap) prepareCycle();
      if (!activeCap) return;

      const feed = seg(p, 0, 0.22) * (1 - seg(p, 0.28, 0.42));
      const shuttleMove = seg(p, 0.2, 0.4) * (1 - seg(p, 0.9, 1));
      const pressMove = seg(p, 0.36, 0.56) * (1 - seg(p, 0.64, 0.76));
      const eject = seg(p, 0.76, 0.9) * (1 - seg(p, 0.94, 1));
      const capDrop = seg(p, 0, 0.22) * 0.057 + pressMove * 0.006;
      const capSlide = seg(p, 0.2, 0.4);

      feeder.setExtension(feed);
      shuttleCylinder.setExtension(shuttleMove);
      press.setExtension(pressMove);
      pusher.setExtension(eject);
      feederHead.position.y = B + 0.2 - feed * 0.07;
      pressHead.position.y = B + 0.167 - pressMove * 0.05;
      shuttle.position.z = feedZ - shuttleMove * (feedZ - pressZ);
      activeCap.position.set(px, B + 0.14 - capDrop, feedZ - capSlide * (feedZ - pressZ));
      basePart.position.x = px - eject * 0.14;
      paddle.position.x = px + 0.072 - eject * 0.13;
      needle.rotation.x = -2.05 + pressMove * 4.1;
      pForSensorActive = p > 0.08 && p < 0.42;
      refreshSensors(pressMove > 0.35, shuttleMove > 0.1 && shuttleMove < 0.95);

      let nextStage = p < 0.2 ? 0 : p < 0.36 ? 1 : p < 0.64 ? 2 : p < 0.76 ? 3 : 4;
      if (nextStage !== stage) {
        stage = nextStage;
        hmiRef?.draw(stages[stage], stage === 4 ? "done" : "running");
      }
      light.red.material = mats.ledOff;
      light.amber.material = stage < 3 ? mats.ledAmber : mats.ledOff;
      light.green.material = stage >= 3 ? mats.ledGreen : mats.ledOff;
    },
    commit(action) {
      if (action !== "assemble" || !activeCap || cycles >= magazineCaps.length) return;
      const finished = new THREE.Group();
      finished.name = `assembly-finished-${cycles + 1}`;
      const finishedBase = createAssemblyBase(mats);
      const finishedCap = createAssemblyCap(mats);
      finished.add(finishedBase, finishedCap);
      finishedCap.position.y = 0.04;
      finished.position.set(px - 0.13 - completed.length * 0.078, B + 0.025, pressZ);
      g.add(finished);
      completed.push(finished);
      activeCap.visible = false;
      activeCap = null;
      cycles += 1;
      for (let i = cycles; i < magazineCaps.length; i++) {
        magazineCaps[i].position.set(px, B + 0.14 + (i - cycles) * 0.022, feedZ);
      }
      basePart.position.set(px, B + 0.04, pressZ);
      paddle.position.x = px + 0.072;
      light.green.material = cycles < magazineCaps.length ? mats.ledGreen : mats.ledOff;
      light.amber.material = cycles < magazineCaps.length ? mats.ledAmber : mats.ledOff;
      light.red.material = cycles >= magazineCaps.length ? mats.ledRed : mats.ledOff;
      hmiRef?.draw(
        cycles >= magazineCaps.length ? "MAGAZINE VAZIO" : `MONTAGEM ${cycles}/${magazineCaps.length}`,
        cycles >= magazineCaps.length ? "error" : "done"
      );
    },
    reset() {
      for (const part of completed) g.remove(part);
      completed.length = 0;
      cycles = 0;
      activeCap = null;
      stage = -1;
      pForSensorActive = false;
      magazineCaps.forEach((cap, i) => {
        cap.visible = true;
        cap.position.set(px, B + 0.14 + i * 0.022, feedZ);
      });
      press.setExtension(0);
      feeder.setExtension(0);
      shuttleCylinder.setExtension(0);
      pusher.setExtension(0);
      pressHead.position.y = B + 0.167;
      feederHead.position.y = B + 0.2;
      shuttle.position.z = feedZ;
      basePart.position.set(px, B + 0.04, pressZ);
      paddle.position.x = px + 0.072;
      needle.rotation.x = -2.05;
      refreshSensors();
      light.red.material = mats.ledOff;
      light.amber.material = mats.ledAmber;
      light.green.material = mats.ledOff;
    },
    setHmi,
  };

  reset();

  return { group: g, height: 0.56, ctl, light, persistResult: true };
}

function buildStorage(mats, renderer, code) {
  const g = new THREE.Group();
  g.add(tslotBase(mats));
  const B = 0.036;

  const rx = 0.0;
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      g.add(box(0.026, 0.52, 0.026, mats.alu, rx + sx * 0.19, B + 0.26, sz * 0.19));
    }
  }
  const levels = [0.1, 0.27, 0.44];
  let storePart = null;
  let storeBaseY = 0;
  levels.forEach((y, idx) => {
    g.add(box(0.42, 0.012, 0.42, mats.alu, rx, B + y, 0));
    if (idx < 2) {
      for (let i = 0; i < 3; i++) {
        const t = createTray(mats);
        t.scale.setScalar(0.9);
        t.rotation.y = Math.PI / 2;
        t.position.set(rx - 0.12 + i * 0.12, B + y + 0.013, idx === 0 ? 0.05 : -0.03);
        g.add(t);
      }
    } else {
      const p = createPuck(mats, 0.05, 0.03);
      p.position.set(rx - 0.08, B + y + 0.021, 0);
      g.add(p);
      const p2 = createPuck(mats, 0.05, 0.03);
      p2.position.set(rx + 0.06, B + y + 0.021, 0.06);
      g.add(p2);
      storePart = p2;
      storeBaseY = B + y + 0.021;
    }
  });

  const valve = valveBlock(mats);
  valve.position.set(0.3, B, 0.16);
  g.add(valve);
  g.add(hose([0.3, B + 0.09, 0.18], [-0.19, B + 0.2, 0.19], 0.0042, mats.blueTube, 0.06));
  g.add(hose([0.3, B + 0.05, 0.2], [0.3, B + 0.05, 0.26], 0.0055, mats.blackCable, 0.02));

  const light = stackLight(mats);
  light.group.position.set(0.32, B, -0.2);
  g.add(light.group);
  g.add(nameplate(mats, renderer, code, "ARMAZENAGEM"));

  const ctl = {
    apply(action, p) {
      if (action !== "store" || !storePart) return;
      const k = easeInOut(clamp01(p / 0.72));
      storePart.position.z = 0.06 + k * 0.07;
      storePart.position.y = storeBaseY;
      light.amber.material = p < 0.75 ? mats.ledAmber : mats.ledGreen;
    },
    reset() {
      if (storePart) storePart.position.set(0.06, storeBaseY, 0.06);
      light.amber.material = mats.ledAmber;
    },
  };

  return { group: g, height: 0.5, ctl, light };
}

function buildConveyorStation(mats, renderer, code) {
  const g = new THREE.Group();
  g.add(tslotBase(mats));
  const B = 0.036;

  const length = 0.84;
  const width = 0.27;
  const conveyor = new THREE.Group();
  conveyor.position.set(0, B, 0);

  conveyor.add(box(width + 0.06, 0.024, length, mats.graphite, 0, 0.012, 0));
  for (const sx of [-1, 1]) {
    conveyor.add(box(0.035, 0.03, length, mats.alu, (sx * (width + 0.055)) / 2, 0.045, 0));
    conveyor.add(box(0.01, 0.05, length, mats.aluDark, (sx * (width + 0.02)) / 2, 0.075, 0));
  }

  const tex = mats.textures.belt.clone();
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(1, length / 0.14);
  tex.needsUpdate = true;
  const beltMat = new THREE.MeshStandardMaterial({
    map: tex,
    roughness: 0.88,
    metalness: 0.04,
    color: 0x2f8b57,
  });
  const belt = new THREE.Mesh(new THREE.PlaneGeometry(width, length), beltMat);
  belt.rotation.x = -Math.PI / 2;
  belt.position.y = 0.06;
  belt.receiveShadow = true;
  conveyor.add(belt);

  for (const z of [-length / 2, length / 2]) {
    conveyor.add(
      cyl(0.03, 0.03, width, mats.steel, 16, 0, 0.06, z, { rotZ: Math.PI / 2 })
    );
  }
  g.add(conveyor);

  const SENSOR_Z = 0.32;
  const ENTRY_Z = 0.4;
  const SENSOR_HALF = 0.05;
  const FEED_GAP = 0.14;
  const MAX_PIECES = 5;
  const BIN_CAP = 3;
  const LOT_SIZE = 3 * BIN_CAP; // one full set of ramps: 3 pieces per type
  const BELT_MIN = -length / 2;
  const BELT_LOOP = ENTRY_Z - BELT_MIN;
  const PIECE_Y = 0.071;
  const BIN_X = 0.32;
  const BIN_Y = 0.05;

  const TYPES = ["metal", "colored", "black"];
  const TYPE_LABEL = { metal: "METÁLICA", colored: "PLÁSTICA COLORIDA", black: "PLÁSTICA PRETA" };
  const RAMP_LABEL = { metal: "RAMPA 1", colored: "RAMPA 2", black: "RAMPA 3" };
  const RAMP = {
    metal: { z: 0.12, color: mats.bluePlastic, label: "METÁLICAS", sub: "RAMPA 1" },
    colored: { z: -0.04, color: mats.orangePlastic, label: "COLORIDAS", sub: "RAMPA 2" },
    black: { z: -0.2, color: mats.blackPlastic, label: "PRETAS", sub: "RAMPA 3" },
  };
  const RAMP_ANGLE = -0.18;

  // three lateral ramps, each with a colour code and an end stop
  for (const type of TYPES) {
    const ramp = RAMP[type];
    const z = ramp.z;
    g.add(box(0.22, 0.006, 0.08, mats.alu, 0.245, B + 0.052, z, { rotZ: RAMP_ANGLE }));
    for (const sz of [-1, 1]) {
      g.add(
        box(0.22, 0.018, 0.004, mats.alu, 0.245, B + 0.062, z + sz * 0.042, {
          rotZ: RAMP_ANGLE,
        })
      );
    }
    g.add(
      box(0.2, 0.004, 0.005, ramp.color, 0.245, B + 0.072, z - 0.043, { rotZ: RAMP_ANGLE })
    );
    g.add(box(0.04, 0.08, 0.09, mats.aluDark, 0.375, B + 0.04, z));
  }

  // diverter gantry shared by the three pushers
  g.add(box(0.05, 0.018, 0.52, mats.alu, 0.3, B + 0.18, 0));
  for (const sz of [-1, 1]) {
    g.add(box(0.03, 0.18, 0.03, mats.aluDark, 0.375, B + 0.09, sz * 0.24));
    g.add(box(0.08, 0.02, 0.03, mats.aluDark, 0.34, B + 0.171, sz * 0.24));
  }

  const pushers = {};
  for (const type of TYPES) {
    const z = RAMP[type].z;
    const piston = pneumaticCylinder(mats, { len: 0.1, r: 0.018, stroke: 0.12 });
    piston.rotation.z = Math.PI / 2;
    piston.position.set(0.23, B + 0.16, z);
    g.add(piston);
    g.add(box(0.05, 0.02, 0.03, mats.aluDark, 0.265, B + 0.17, z));
    const paddle = box(0.012, 0.11, 0.06, mats.yellow, 0.124, B + 0.115, z);
    g.add(paddle);
    pushers[type] = { piston, paddle };
  }

  // ramp nameplates above each pusher
  for (const type of TYPES) {
    const ramp = RAMP[type];
    g.add(box(0.004, 0.05, 0.1, mats.aluDark, 0.302, B + 0.215, ramp.z));
    const plate = new THREE.Mesh(
      new THREE.PlaneGeometry(0.2, 0.075),
      makePlateMaterial(renderer, ramp.label, ramp.sub)
    );
    plate.scale.setScalar(0.42);
    plate.position.set(0.2995, B + 0.222, ramp.z);
    plate.rotation.y = -Math.PI / 2;
    g.add(plate);
  }

  // sensor gate at the infeed: inductive (metal) and reflective (colour) heads
  const gate = { leds: {}, beam: null };
  for (const [kind, sx] of [
    ["metal", -1],
    ["color", 1],
  ]) {
    const head = new THREE.Group();
    head.add(box(0.03, 0.05, 0.03, mats.graphite, 0, 0, 0));
    const faceMat = kind === "metal" ? mats.bluePlastic : mats.glassClear;
    head.add(
      cyl(0.009, 0.009, 0.004, faceMat, 12, -sx * 0.017, 0, 0, { rotZ: Math.PI / 2 })
    );
    const led = cyl(0.0045, 0.0045, 0.006, mats.ledOff, 8, 0, 0.028, 0);
    head.add(led);
    head.position.set(sx * 0.19, B + 0.115, SENSOR_Z);
    g.add(head);
    g.add(box(0.014, 0.11, 0.014, mats.aluDark, sx * 0.19, B + 0.055, SENSOR_Z));
    g.add(box(0.05, 0.012, 0.05, mats.aluDark, sx * 0.19, B + 0.006, SENSOR_Z));
    gate.leds[kind] = led;
  }

  const beamMat = new THREE.MeshBasicMaterial({
    color: 0x49f08a,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
  });
  const beam = box(0.34, 0.0025, 0.0025, beamMat, 0, B + 0.082, SENSOR_Z, {
    cast: false,
    receive: false,
  });
  beam.visible = false;
  g.add(beam);
  gate.beam = beam;

  const sensorLabel = (text, sub, sx) => {
    g.add(box(0.01, 0.03, 0.01, mats.aluDark, sx * 0.19, B + 0.16, SENSOR_Z));
    const plate = new THREE.Mesh(
      new THREE.PlaneGeometry(0.2, 0.075),
      makePlateMaterial(renderer, text, sub)
    );
    plate.scale.setScalar(0.34);
    plate.position.set(sx * 0.199, B + 0.185, SENSOR_Z);
    plate.rotation.y = (sx * Math.PI) / 2;
    g.add(plate);
  };
  sensorLabel("INDUTIVO", "METAL", -1);
  sensorLabel("ÓPTICO", "COR", 1);

  const valve = valveBlock(mats);
  valve.position.set(0.31, B, 0.32);
  g.add(valve);
  g.add(hose([0.31, B + 0.09, 0.3], [0.3, B + 0.18, 0.24], 0.0042, mats.blueTube, 0.04, 0.01));
  g.add(hose([0.31, B + 0.09, 0.34], [0.23, B + 0.16, 0.12], 0.0042, mats.blueTube, 0.06, 0.02));
  g.add(hose([0.31, B + 0.05, 0.36], [0.36, B + 0.01, 0.24], 0.0055, mats.blackCable, 0.02));

  const light = stackLight(mats);
  light.group.position.set(-0.32, B, -0.2);
  g.add(light.group);
  g.add(nameplate(mats, renderer, code, "TRANSFERÊNCIA"));

  // pucks are pooled: continuous infeed reuses them instead of allocating geometry
  const pool = [];
  for (let i = 0; i < 16; i++) {
    const mesh = createSortPuck(mats, 0.032, 0.022);
    mesh.visible = false;
    mesh.userData.inUse = false;
    conveyor.add(mesh);
    pool.push(mesh);
  }

  let pieces = [];
  let bins = { metal: [], colored: [], black: [] };
  let feedIndex = 0;
  let fed = 0;
  let sinceFeed = 0;
  let beltOffset = 0;
  let sort = null;
  let beltStep = null;
  let scanKey = "";
  let hmiRef = null;

  const SORT_TYPE = { sortMetal: "metal", sortColor: "colored", sortBlack: "black" };
  const isSort = (action) => Object.prototype.hasOwnProperty.call(SORT_TYPE, action);
  // reach of the paddle around the ramp centre: piece radius + half paddle depth
  const SORT_WINDOW = 0.06;

  const setHmi = (h) => {
    hmiRef = h;
  };

  function spawn(type, z) {
    const mesh = pool.find((m) => !m.userData.inUse);
    if (!mesh) return null;
    mesh.userData.inUse = true;
    mesh.visible = true;
    mesh.userData.setType(type);
    mesh.position.set(0, PIECE_Y, z);
    const piece = { mesh, type, z, classified: false };
    pieces.push(piece);
    return piece;
  }

  function feed() {
    if (fed >= LOT_SIZE) return;
    if (pieces.length >= MAX_PIECES) return;
    if (pieces.some((p) => p.z > ENTRY_Z - 0.12)) return;
    spawn(TYPES[feedIndex % TYPES.length], ENTRY_Z);
    feedIndex += 1;
    fed += 1;
    sinceFeed = 0;
  }

  const lotDone = () => fed >= LOT_SIZE && pieces.length === 0;

  function updateSensor() {
    const active =
      pieces.find((p) => Math.abs(p.z - SENSOR_Z) <= SENSOR_HALF) || null;
    const metalOn = !!active && active.type === "metal";
    const reflectOn = !!active && active.type !== "black";
    gate.leds.metal.material = metalOn ? mats.ledBlue : mats.ledOff;
    gate.leds.color.material = reflectOn ? mats.ledGreen : mats.ledOff;
    gate.beam.visible = !!active;
    gate.beam.material.color.set(reflectOn ? 0x49f08a : 0xff5a4a);
    if (active) {
      if (active.type !== scanKey) {
        scanKey = active.type;
        active.classified = true;
        hmiRef?.draw(`${TYPE_LABEL[active.type]} · ${RAMP_LABEL[active.type]}`, "running");
      }
    } else if (scanKey) {
      scanKey = "";
    }
  }

  function moveBelt(delta) {
    if (!delta) return;
    beltOffset += delta;
    sinceFeed = Math.max(0, sinceFeed + delta);
    for (let i = pieces.length - 1; i >= 0; i--) {
      const p = pieces[i];
      p.z -= delta;
      if (p.z > ENTRY_Z) p.z = ENTRY_Z;
      if (p.z < BELT_MIN) {
        // closed-loop belt: pieces that were not diverted keep running and return at the infeed
        p.z += BELT_LOOP;
      }
      p.mesh.position.z = p.z;
    }
    if (sinceFeed >= FEED_GAP) feed();
    updateSensor();
    tex.offset.y = -(beltOffset / 0.14) % 1;
  }

  function divert(piece, type) {
    const bin = bins[type];
    bin.push(piece);
    piece.mesh.position.set(BIN_X, BIN_Y + (bin.length - 1) * 0.022, RAMP[type].z);
    if (bin.length > BIN_CAP) {
      const old = bin.shift();
      old.mesh.visible = false;
      old.mesh.userData.inUse = false;
    }
    bin.forEach((p, i) => {
      p.mesh.position.set(BIN_X, BIN_Y + i * 0.022, RAMP[type].z);
    });
    const idx = pieces.indexOf(piece);
    if (idx >= 0) pieces.splice(idx, 1);
  }

  function findSortTarget(type) {
    const zRamp = RAMP[type].z;
    let target = null;
    let best = SORT_WINDOW;
    // a piece already within the paddle's reach is caught even if slightly past the ramp
    for (const p of pieces) {
      if (p.type !== type) continue;
      const d = Math.abs(p.z - zRamp);
      if (d <= best) {
        best = d;
        target = p;
      }
    }
    if (target) return target;
    best = Infinity;
    for (const p of pieces) {
      if (p.type !== type) continue;
      const d = p.z - zRamp;
      if (d > SORT_WINDOW && d < best) {
        best = d;
        target = p;
      }
    }
    return target;
  }

  function beginSort(action) {
    const type = SORT_TYPE[action];
    const target = findSortTarget(type);
    sort = {
      action,
      type,
      target,
      gap: target ? target.z - RAMP[type].z : 0,
      lockP: 0,
      moved: 0,
      movedAtLock: 0,
      lastP: 0,
    };
  }

  function endSort() {
    if (!sort) return;
    const { target, type } = sort;
    if (target && target.mesh.userData.inUse && Math.abs(target.z - RAMP[type].z) < 0.012) {
      divert(target, type);
    }
    sort = null;
  }

  function applySort(action, p) {
    if (!sort || sort.action !== action) beginSort(action);
    const zRamp = RAMP[sort.type].z;
    const ap = Math.min(p, 0.68);

    if (!sort.target) {
      // search at a steady pace; pieces fed during the block are acquired on the fly
      const step = (0.45 * Math.max(0, ap - sort.lastP)) / 0.68;
      if (step > 0) {
        sort.moved += step;
        moveBelt(step);
      }
      const found = findSortTarget(sort.type);
      if (found) {
        sort.target = found;
        sort.gap = found.z - zRamp;
        sort.lockP = ap;
        sort.movedAtLock = sort.moved;
      }
    } else {
      const span = Math.max(1e-3, 0.68 - sort.lockP);
      const q = easeInOut(clamp01((ap - sort.lockP) / span));
      const delta = sort.gap * q - (sort.moved - sort.movedAtLock);
      if (Math.abs(delta) > 1e-6) {
        sort.moved += delta;
        moveBelt(delta);
      }
    }
    sort.lastP = ap;

    const pushP = clamp01((p - 0.68) / 0.32);
    const k =
      pushP < 0.28
        ? easeInOut(pushP / 0.28)
        : pushP < 0.72
          ? 1
          : 1 - easeInOut((pushP - 0.72) / 0.28);
    const rig = pushers[sort.type];
    rig.piston.setExtension(k);
    rig.paddle.position.x = 0.124 - k * 0.12;

    const target = sort.target;
    if (target) {
      const slide = clamp01((pushP - 0.36) / 0.36);
      if (slide > 0) {
        const e = easeInOut(slide);
        target.mesh.position.x = 0.12 + e * (BIN_X - 0.12);
        target.mesh.position.y = PIECE_Y - e * (PIECE_Y - BIN_Y);
        target.mesh.position.z = RAMP[sort.type].z;
        target.z = RAMP[sort.type].z;
      } else {
        target.mesh.position.x = k * 0.12;
      }
    }
  }

  function reset() {
    for (const type of TYPES) {
      pushers[type].piston.setExtension(0);
      pushers[type].paddle.position.x = 0.124;
      bins[type].forEach((p) => {
        p.mesh.visible = false;
        p.mesh.userData.inUse = false;
      });
    }
    pieces.forEach((p) => {
      p.mesh.visible = false;
      p.mesh.userData.inUse = false;
    });
    pieces = [];
    bins = { metal: [], colored: [], black: [] };
    beltOffset = 0;
    sinceFeed = 0;
    feedIndex = 1;
    fed = 1;
    sort = null;
    beltStep = null;
    scanKey = "";
    tex.offset.y = 0;
    gate.leds.metal.material = mats.ledOff;
    gate.leds.color.material = mats.ledOff;
    gate.beam.visible = false;
    spawn("metal", ENTRY_Z);
    updateSensor();
  }

  const ctl = {
    apply(action, p) {
      if (action === "belt" || isSort(action)) {
        if (lotDone()) {
          return {
            stop: "LOTE CONCLUÍDO",
            message: "Lote concluído · todas as peças separadas",
            kind: "done",
          };
        }
      }
      if (action === "belt") {
        if (!beltStep) beltStep = { action: "belt", last: 0 };
        const target = p * 0.5;
        const delta = target - beltStep.last;
        beltStep.last = target;
        if (delta > 0) moveBelt(delta);
      } else if (isSort(action)) {
        applySort(action, p);
      }
    },
    commit(action) {
      if (action === "belt") {
        beltStep = null;
      } else if (isSort(action)) {
        endSort();
      }
    },
    reset,
    setHmi,
  };

  reset();

  return { group: g, height: 0.27, ctl, light, persistResult: true };
}

/* ------------------------------------------------------------------ */
/* bench                                                               */
/* ------------------------------------------------------------------ */

function buildBench(mats, renderer, { length, stationZs, codes, types }) {
  const g = new THREE.Group();
  const bodyW = 0.8;

  // plinth + top band
  g.add(box(bodyW, 0.1, length, mats.whitePaint, 0, 0.1, 0));
  g.add(box(bodyW, 0.3, length, mats.whitePaint, 0, 0.75, 0));
  g.add(box(bodyW - 0.06, 0.03, length - 0.06, mats.graphite, 0, 0.17, 0));
  g.add(box(0.06, 0.84, length, mats.whitePaint, 0.36, 0.48, 0));
  g.add(box(bodyW, 0.84, 0.035, mats.whitePaint, 0, 0.48, -length / 2 + 0.0175));
  g.add(box(bodyW, 0.84, 0.035, mats.whitePaint, 0, 0.48, length / 2 - 0.0175));

  if (stationZs.length > 0) {
    for (let i = 1; i < stationZs.length; i++) {
      const z = (stationZs[i - 1] + stationZs[i]) / 2;
      g.add(box(bodyW - 0.08, 0.44, 0.03, mats.offWhite, 0, 0.39, z));
    }
  }

  // closed cabinet doors on the aisle side, one per station module
  const doorZ = [-length / 2 + 0.03];
  for (let i = 1; i < stationZs.length; i++) {
    doorZ.push((stationZs[i - 1] + stationZs[i]) / 2);
  }
  doorZ.push(length / 2 - 0.03);
  for (let i = 1; i < doorZ.length; i++) {
    const z0 = doorZ[i - 1] + 0.014;
    const z1 = doorZ[i] - 0.014;
    if (z1 - z0 < 0.05) continue;
    g.add(box(0.03, 0.41, z1 - z0, mats.whitePaint, -0.385, 0.395, (z0 + z1) / 2));
  }

  for (const z of stationZs) {
    // drives leaning inside the open compartment
    for (const dz of [-0.19, 0.19]) {
      const d = box(0.2, 0.16, 0.12, mats.lightGrey, 0.12, 0.3, z + dz);
      d.rotation.x = -0.32;
      g.add(d);
      const front = box(0.16, 0.1, 0.01, mats.darkGrey, 0.02, 0.31, z + dz);
      front.rotation.x = -0.32;
      g.add(front);
      const cable = hose(
        [0.0, 0.24, z + dz],
        [-0.16, 0.03, z + dz + 0.02],
        0.006,
        mats.blackCable,
        0.05
      );
      g.add(cable);
    }
  }

  // worktop
  g.add(box(0.86, 0.045, length, mats.benchTop, 0, 0.9225, 0));
  for (const sx of [-1, 1]) {
    g.add(box(0.035, 0.05, length, mats.alu, sx * 0.43, 0.9, 0));
  }

  // feet
  for (let i = 0; i <= Math.round(length / 1.8); i++) {
    const z = -length / 2 + 0.12 + (i * (length - 0.24)) / Math.max(1, Math.round(length / 1.8));
    for (const sx of [-1, 1]) {
      g.add(box(0.07, 0.05, 0.07, mats.blackPlastic, sx * 0.3, 0.025, z));
    }
  }

  // control panels + status
  const hmis = [];
  stationZs.forEach((z, i) => {
    const panel = new THREE.Group();
    panel.position.set(-0.41, 0.72, z);
    panel.add(box(0.03, 0.32, 0.3, mats.offWhite, 0, 0, 0));

    const buttons = [
      [mats.greenPlastic, -0.1],
      [mats.senaiRed, -0.035],
      [mats.yellow, 0.03],
      [mats.blackPlastic, 0.095],
    ];
    for (const [mat, dz] of buttons) {
      const b = cyl(0.016, 0.016, 0.012, mat, 14, -0.02, -0.055, dz, {
        rotZ: Math.PI / 2,
      });
      panel.add(b);
    }

    // mode selector
    const selector = cyl(0.017, 0.017, 0.012, mats.lightGrey, 14, -0.02, 0.0, -0.11, {
      rotZ: Math.PI / 2,
    });
    panel.add(selector);

    // emergency stop
    const estopBase = box(0.02, 0.07, 0.07, mats.yellow, -0.018, 0.0, 0.12);
    panel.add(estopBase);
    const estop = cyl(0.028, 0.024, 0.02, mats.redPaint, 16, -0.04, 0.0, 0.12, {
      rotZ: Math.PI / 2,
    });
    panel.add(estop);

    // station plate
    g.add(panel);

    const hmi = createHmi(mats, renderer, codes[i], types[i], z);
    g.add(hmi.root);
    hmis.push(hmi);
  });

  // air preparation unit on the back of the bench
  const frl = new THREE.Group();
  frl.position.set(0.3, 0.0, length / 2 - 0.4);
  frl.add(box(0.09, 0.1, 0.06, mats.graphite, 0, 1.02, 0));
  frl.add(cyl(0.035, 0.035, 0.14, mats.offWhite, 16, 0, 0.88, 0));
  frl.add(cyl(0.032, 0.032, 0.02, mats.bluePlastic, 16, 0, 0.79, 0));
  frl.add(cyl(0.04, 0.04, 0.02, mats.offWhite, 16, 0, 1.1, 0, { rotX: Math.PI / 2 }));
  const frlPipe = hose(
    [0.3, 1.11, length / 2 - 0.4],
    [0.22, 4.9, length / 2 - 0.9],
    0.012,
    mats.blueTube,
    0
  );
  g.add(frl, frlPipe);

  // power cables dropping to the floor
  for (const z of [-length / 3, length / 3]) {
    const cable = hose(
      [0.12, 0.15, z],
      [0.32, 0.02, z + 0.4],
      0.009,
      mats.blackCable,
      0.06
    );
    g.add(cable);
  }

  return { group: g, hmis };
}

/* ------------------------------------------------------------------ */
/* assembly                                                            */
/* ------------------------------------------------------------------ */

const INFO = {
  distribution: {
    name: "Estação de Distribuição",
    type: "Pneumática",
    desc: "Retira a peça do magazine de coluna com cilindro de ejeção e a deposita na rampa acumuladora. Um sensor indutivo confirma cada peça liberada e um sensor óptico no fim da rampa indica quando a calha está cheia.",
    tech: [
      "Cilindro duplo efeito",
      "Válvula 5/2",
      "Sensor indutivo",
      "Sensor óptico reflexivo",
      "Magazine tubular transparente",
      "Rampa acumuladora",
    ],
    tip: "Cada comando de ejeção libera uma peça do magazine e empurra a fila na rampa, que acumula as 8 peças. O sensor indutivo acende a cada peça na saída e o óptico no fim da rampa indica calha cheia. Quando o magazine esvazia, o programa para e as peças permanecem na rampa.",
  },
  test: {
    name: "Estação de Teste",
    type: "Pneumática",
    desc: "Prensa pneumática que verifica a montagem da peça. O cilindro desce sob pressão controlada e a altura final é conferida por sensores, com leitura no manômetro.",
    tech: ["Prensa pneumática", "Manômetro", "Válvula reguladora", "Sensores de posição"],
    tip: "A prensa desce até encostar na peça do ninho. Observe o manômetro: a leitura indica a pressão aplicada durante o teste.",
  },
  processing: {
    name: "Estação de Processamento",
    type: "Eletropneumática",
    desc: "Mesa rotativa indexada em quatro posições. O atuador gira a mesa em 90° a cada ciclo, permitindo usinar ou inspecionar a peça em pontos distintos.",
    tech: ["Atuador rotativo", "Mesa indexada 4 posições", "Sensores de fim de curso"],
    tip: "A mesa gira 90° a cada comando, levando as peças apoiadas nos dispositivos para a próxima posição. A cortina de luz protege o acesso.",
  },
  assembly: {
    name: "Estação de Montagem",
    type: "Eletropneumática",
    desc: "Célula de montagem com alimentador, shuttle de posicionamento, prensa e expulsor lateral. Sensores confirmam cada etapa e um magazine transparente fornece cinco tampas por ciclo.",
    tech: ["Magazine de 5 tampas", "Shuttle linear", "Prensa pneumática", "Sensores de posição", "Expulsor lateral"],
    tip: "O alimentador captura a tampa, o shuttle a leva até a base, a prensa assenta o conjunto e o expulsor o envia para a bandeja. Ao usar as cinco tampas, o programa é interrompido até a reposição.",
  },
  storage: {
    name: "Estação de Armazenagem",
    type: "Pneumática",
    desc: "Estante de três níveis que recebe e organiza as bandejas produzidas. O fluxo é controlado por sensores de nível e pelo CLP da bancada.",
    tech: ["Estante 3 níveis", "Sensores de nível", "Bandejas octogonais"],
    tip: "As peças ficam apoiadas nas prateleiras; o comando apenas desloca a peça para a posição de armazenagem, sem tirá-la do nível.",
  },
  conveyor: {
    name: "Estação de Transferência",
    type: "Sensoriamento",
    desc: "Esteira com triagem por material. Um sensor indutivo identifica peças metálicas e um sensor óptico reflexivo distingue o plástico colorido do preto (sem reflexão). Três desviadores laterais encaminham cada peça para a rampa correspondente.",
    tech: ["Esteira transportadora", "Sensor indutivo", "Sensor óptico reflexivo", "3 cilindros de desvio", "3 rampas de triagem"],
    tip: "A leitura é: indutivo ligado = metálica; indutivo desligado e óptico ligado = plástico colorido; os dois desligados = plástico preto. Cada bloco de separação alinha a peça com o cilindro e a desvia. O lote tem 9 peças (3 de cada tipo) e é finito: as peças que não são desviadas voltam para o início da esteira e continuam rodando. Quando todas forem separadas, o programa para com LOTE CONCLUÍDO.",
  },
};

function makeStationEntry({ code, kind, lineX, facing, z, group, height, sizeZ = 0.9 }) {
  const info = INFO[kind];
  const hitbox = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 1.0, sizeZ),
    new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 0,
      depthWrite: false,
    })
  );
  hitbox.position.set(0, 0.42, 0);
  group.add(hitbox);

  return {
    code,
    kind,
    name: info.name,
    type: info.type,
    desc: info.desc,
    tech: info.tech,
    tip: info.tip,
    group,
    labelHeight: height + 0.32,
    hitbox,
    lineX,
    facing,
    z,
    station: true,
  };
}

export function buildLines(mats, renderer) {
  const root = new THREE.Group();
  root.name = "production-lines";
  const stations = [];
  const updaters = [];

  function attachProgram(entry, built, hmi) {
    const state = { programMode: false };
    entry.hmi = hmi;
    entry.state = state;
    built.ctl?.setHmi?.(hmi);

    const setSignal = (name) => {
      const lt = built.light;
      if (!lt) return;
      lt.red.material = name === "all" || name === "red" ? mats.ledRed : mats.ledOff;
      lt.amber.material = name === "all" || name === "amber" ? mats.ledAmber : mats.ledOff;
      lt.green.material = name === "all" || name === "green" ? mats.ledGreen : mats.ledOff;
    };

    entry.setProgramMode = (on, keepState = false) => {
      state.programMode = on;
      if (on) {
        if (built.persistResult) built.ctl?.reset?.();
        hmi?.draw("MODO PROGRAMA", "ready");
      } else {
        if (!keepState || !built.persistResult) built.ctl?.reset?.();
        setSignal("all");
        hmi?.draw("TOQUE PARA PROGRAMAR", "idle");
      }
    };

    entry.programStep = (action, p) => {
      if (action === "signalGreen") setSignal("green");
      else if (action === "signalAmber") setSignal("amber");
      else if (action === "signalOff") setSignal("off");
      else if (action === "piece" && built.light) {
        built.light.green.material =
          Math.floor(p * 5) % 2 === 0 ? mats.ledGreen : mats.ledOff;
      } else {
        return built.ctl?.apply?.(action, p);
      }
    };

    entry.programCommit = (action) => {
      built.ctl?.commit?.(action);
      if (action === "piece") setSignal("green");
    };

    return entry;
  }

  /* ---------------- right line ---------------- */
  const rightZ = [-2.7, -1.62, -0.54, 0.54, 1.62, 2.7];
  const rightCodes = ["MPS-01", "MPS-02", "MPS-03", "MPS-04", "MPS-05", "MPS-06"];
  const rightTypes = ["DISTRIBUIÇÃO", "TESTE", "PROCESSAMENTO", "MONTAGEM", "TESTE", "TRANSFERÊNCIA"];
  const rightKinds = ["distribution", "test", "processing", "assembly", "test", "conveyor"];

  const rightBench = new THREE.Group();
  rightBench.position.set(2.0, 0, 0);
  const rightHmis = buildBench(mats, renderer, {
    length: 7.2,
    stationZs: rightZ,
    codes: rightCodes,
    types: rightTypes,
  });
  rightBench.add(rightHmis.group);

  const rightBuilders = [
    buildDistribution,
    buildTest,
    buildProcessing,
    buildAssembly,
    buildTest,
    buildConveyorStation,
  ];

  rightZ.forEach((z, i) => {
    const built = rightBuilders[i](mats, renderer, rightCodes[i]);
    built.group.position.set(0, TOP_Y, z);
    rightBench.add(built.group);
    const stationState = makeStationEntry({
      code: rightCodes[i],
      kind: rightKinds[i],
      lineX: 2.0,
      facing: -1,
      z,
      group: built.group,
      height: built.height,
    });
    attachProgram(stationState, built, rightHmis.hmis[i]);
    stations.push(stationState);
  });
  root.add(rightBench);

  /* ---------------- left line ---------------- */
  const leftZ = [-3.0, -1.9, 1.9, 3.0];
  const leftWorldZ = [3.0, 1.9, -1.9, -3.0];
  const leftCodes = ["MPS-07", "MPS-08", "MPS-09", "MPS-10"];
  const leftTypes = ["DISTRIBUIÇÃO", "TESTE", "MONTAGEM", "TRANSFERÊNCIA"];
  const leftKinds = ["distribution", "test", "assembly", "conveyor"];
  const leftBuilders = [buildDistribution, buildTest, buildAssembly, buildConveyorStation];

  const leftBench = new THREE.Group();
  leftBench.position.set(-2.0, 0, 0);
  leftBench.rotation.y = Math.PI;
  const leftHmis = buildBench(mats, renderer, {
    length: 7.8,
    stationZs: leftZ,
    codes: leftCodes,
    types: leftTypes,
  });
  leftBench.add(leftHmis.group);

  leftZ.forEach((z, i) => {
    const built = leftBuilders[i](mats, renderer, leftCodes[i]);
    built.group.position.set(0, TOP_Y, z);
    leftBench.add(built.group);
    const stationState = makeStationEntry({
      code: leftCodes[i],
      kind: leftKinds[i],
      lineX: -2.0,
      facing: 1,
      z: leftWorldZ[i],
      group: built.group,
      height: built.height,
    });
    attachProgram(stationState, built, leftHmis.hmis[i]);
    stations.push(stationState);
  });
  root.add(leftBench);

  // robot area platform on the left bench (pallet + feed nest)
  const cellBase = new THREE.Group();
  cellBase.position.set(-2.0, TOP_Y, 0);
  const platform = box(0.72, 0.02, 2.35, mats.aluDark, 0, 0.01, 0.05);
  cellBase.add(platform);
  const guideMat = mats.graphite;
  for (const z of [-1.0, 1.05]) {
    cellBase.add(box(0.72, 0.03, 0.04, guideMat, 0, 0.03, z));
  }
  root.add(cellBase);

  root.updateMatrixWorld(true);

  // world-space metadata used by camera presets / labels
  const v = new THREE.Vector3();
  for (const s of stations) {
    s.group.getWorldPosition(v);
    s.world = v.clone();
    s.labelPos = new THREE.Vector3(v.x, TOP_Y + s.labelHeight, v.z);
    s.focus = {
      pos: new THREE.Vector3(v.x - Math.sign(v.x) * 1.6, 1.82, v.z + 0.75),
      target: new THREE.Vector3(v.x, 1.15, v.z),
    };
  }

  return { root, stations, updaters };
}
