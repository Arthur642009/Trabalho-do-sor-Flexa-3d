import * as THREE from "three";
import { box, cyl, hose } from "./utils.js";
import { createTray, createPallet } from "./parts.js";

const L1 = 0.5; // shoulder -> elbow
const L2 = 0.46; // elbow -> wrist
const GRIP_LEN = 0.16;
const BASE_Y = 0.965; // top of the cell platform
const SHOULDER_Y = 0.3; // relative to turret
const TURRET_Y = 0.135;
const SHOULDER_WORLD_Y = BASE_Y + TURRET_Y + SHOULDER_Y;
const CYCLE = 6.8;

const HOME = new THREE.Vector3(-1.95, 1.55, 0.55);
const ABOVE_PICK_Y = 1.32;
const PICK_Z = -0.66;
const PLACE_Y = 1.0;
const ABOVE_PLACE_Y = 1.3;

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const smooth = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export function buildRobot(scene, mats) {
  const root = new THREE.Group();
  root.name = "robot-cell";
  root.position.set(-2.0, BASE_Y, 0);

  /* ---------------- pedestal ---------------- */
  root.add(cyl(0.17, 0.19, 0.03, mats.aluDark, 28, 0, 0.015, 0));
  root.add(cyl(0.15, 0.15, 0.1, mats.whitePaint, 28, 0, 0.08, 0));
  root.add(cyl(0.155, 0.155, 0.012, mats.graphite, 28, 0, 0.132, 0));

  const turret = new THREE.Group();
  turret.position.y = TURRET_Y;
  root.add(turret);

  turret.add(cyl(0.112, 0.118, 0.17, mats.whitePaint, 26, 0, 0.085, 0));
  turret.add(cyl(0.121, 0.121, 0.014, mats.bluePlastic, 26, 0, 0.126, 0));
  turret.add(cyl(0.118, 0.118, 0.02, mats.graphite, 26, 0, 0.175, 0));
  turret.add(cyl(0.1, 0.1, 0.03, mats.whitePaint, 26, 0, 0.2, 0));

  // cable entry at the back of the base
  turret.add(box(0.07, 0.09, 0.08, mats.blackPlastic, -0.09, 0.06, -0.07));

  /* ---------------- arm ---------------- */
  const shoulder = new THREE.Group();
  shoulder.position.set(0, SHOULDER_Y, 0);
  turret.add(shoulder);

  shoulder.add(cyl(0.092, 0.092, 0.2, mats.whitePaint, 24, 0, 0, 0, { rotX: Math.PI / 2 }));
  shoulder.add(cyl(0.075, 0.075, 0.205, mats.graphite, 24, 0, 0, 0, { rotX: Math.PI / 2 }));
  shoulder.add(cyl(0.093, 0.093, 0.03, mats.whitePaint, 24, 0, 0, 0.1, { rotX: Math.PI / 2 }));
  shoulder.add(cyl(0.093, 0.093, 0.03, mats.whitePaint, 24, 0, 0, -0.1, { rotX: Math.PI / 2 }));
  shoulder.add(cyl(0.094, 0.094, 0.012, mats.bluePlastic, 24, 0, 0, 0.118, { rotX: Math.PI / 2 }));
  shoulder.add(cyl(0.094, 0.094, 0.012, mats.bluePlastic, 24, 0, 0, -0.118, { rotX: Math.PI / 2 }));

  const upperArm = new THREE.Group();
  shoulder.add(upperArm);
  upperArm.add(box(0.42, 0.105, 0.115, mats.whitePaint, 0.24, 0, 0));
  upperArm.add(box(0.43, 0.03, 0.12, mats.lightGrey, 0.23, 0.045, 0));
  upperArm.add(box(0.09, 0.07, 0.12, mats.graphite, 0.06, 0, 0));

  const elbow = new THREE.Group();
  elbow.position.set(L1, 0, 0);
  upperArm.add(elbow);
  elbow.add(cyl(0.079, 0.079, 0.17, mats.whitePaint, 22, 0, 0, 0, { rotX: Math.PI / 2 }));
  elbow.add(cyl(0.062, 0.062, 0.175, mats.graphite, 22, 0, 0, 0, { rotX: Math.PI / 2 }));
  elbow.add(cyl(0.08, 0.08, 0.03, mats.whitePaint, 22, 0, 0, 0.085, { rotX: Math.PI / 2 }));
  elbow.add(cyl(0.08, 0.08, 0.03, mats.whitePaint, 22, 0, 0, -0.085, { rotX: Math.PI / 2 }));
  elbow.add(cyl(0.081, 0.081, 0.011, mats.bluePlastic, 22, 0, 0, 0.103, { rotX: Math.PI / 2 }));
  elbow.add(cyl(0.081, 0.081, 0.011, mats.bluePlastic, 22, 0, 0, -0.103, { rotX: Math.PI / 2 }));

  const forearm = new THREE.Group();
  elbow.add(forearm);
  forearm.add(box(0.36, 0.085, 0.095, mats.whitePaint, 0.2, 0, 0));
  forearm.add(box(0.37, 0.025, 0.1, mats.lightGrey, 0.2, 0.04, 0));
  forearm.add(box(0.08, 0.06, 0.1, mats.graphite, 0.05, 0, 0));

  const wrist = new THREE.Group();
  wrist.position.set(L2, 0, 0);
  forearm.add(wrist);
  wrist.add(cyl(0.058, 0.058, 0.11, mats.whitePaint, 20, 0, 0, 0, { rotX: Math.PI / 2 }));
  wrist.add(cyl(0.06, 0.06, 0.01, mats.bluePlastic, 20, 0, 0, 0.058, { rotX: Math.PI / 2 }));
  wrist.add(cyl(0.06, 0.06, 0.01, mats.bluePlastic, 20, 0, 0, -0.058, { rotX: Math.PI / 2 }));
  wrist.add(cyl(0.05, 0.05, 0.02, mats.graphite, 20, 0.01, 0, 0.055, { rotX: Math.PI / 2 }));

  // flange + parallel gripper
  const gripper = new THREE.Group();
  wrist.add(gripper);
  gripper.add(cyl(0.042, 0.042, 0.045, mats.aluDark, 20, 0.045, 0, 0, { rotZ: Math.PI / 2 }));
  gripper.add(box(0.075, 0.075, 0.15, mats.blackPlastic, 0.1, 0, 0));
  gripper.add(box(0.02, 0.05, 0.155, mats.bluePlastic, 0.075, 0, 0));

  const fingers = [];
  for (const sz of [-1, 1]) {
    const f = new THREE.Group();
    f.position.set(0.14, 0, sz * 0.08);
    f.add(box(0.09, 0.055, 0.016, mats.aluDark, 0, 0, 0));
    f.add(box(0.03, 0.05, 0.02, mats.rubber, 0.055, 0, 0));
    gripper.add(f);
    fingers.push({ group: f, dir: sz });
  }

  const gripLed = box(0.008, 0.012, 0.012, mats.ledGreen, 0.11, 0.042, 0.06);
  gripper.add(gripLed);

  const tip = new THREE.Object3D();
  tip.position.set(GRIP_LEN, 0, 0);
  wrist.add(tip);

  /* ---------------- feed nest + pallet ---------------- */
  const nest = new THREE.Group();
  nest.position.set(0, 0, PICK_Z);
  nest.add(box(0.34, 0.012, 0.34, mats.aluDark, 0, 0.006, 0));
  for (const a of [0, 2.1, 4.2]) {
    nest.add(
      cyl(0.008, 0.008, 0.11, mats.alu, 8, Math.cos(a) * 0.13, 0.062, Math.sin(a) * 0.13)
    );
  }
  const stack = [];
  for (let i = 0; i < 6; i++) {
    const t = createTray(mats);
    t.position.set(0, 0.021 + i * 0.017, 0);
    nest.add(t);
    stack.push(t);
  }
  root.add(nest);

  const pallet = createPallet(mats);
  pallet.group.position.set(0, 0.982 - BASE_Y, 0.66);
  root.add(pallet.group);

  // pallet locating block
  root.add(box(0.1, 0.02, 0.1, mats.graphite, 0, 0.006, 0.66));

  /* ---------------- cell frame & controller ---------------- */
  const frame = new THREE.Group();
  frame.position.set(0, 0, 0);
  frame.add(box(0.04, 1.55, 0.04, mats.aluDark, -0.34, 0.78, -1.12));
  frame.add(box(0.04, 1.55, 0.04, mats.aluDark, 0.34, 0.78, -1.12));
  frame.add(box(0.04, 1.55, 0.04, mats.aluDark, -0.34, 0.78, 1.18));
  frame.add(box(0.04, 1.55, 0.04, mats.aluDark, 0.34, 0.78, 1.18));
  frame.add(box(0.72, 0.04, 0.04, mats.aluDark, 0, 1.55, -1.12));
  frame.add(box(0.72, 0.04, 0.04, mats.aluDark, 0, 1.55, 1.18));
  frame.add(box(0.04, 0.04, 2.3, mats.aluDark, -0.34, 1.55, 0.03));
  frame.add(box(0.04, 0.04, 2.3, mats.aluDark, 0.34, 1.55, 0.03));
  const curtain = new THREE.Mesh(
    new THREE.PlaneGeometry(2.25, 1.35),
    new THREE.MeshPhysicalMaterial({
      color: 0x9fd4de,
      transparent: true,
      opacity: 0.075,
      roughness: 0.06,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
  );
  curtain.rotation.y = Math.PI / 2;
  curtain.position.set(-0.34, 0.86, 0.03);
  frame.add(curtain);
  root.add(frame);

  // suspended cable from the ceiling
  root.add(hose([-0.2, 3.6, -0.4], [0.0, 0.35, -0.12], 0.012, mats.blueTube, 0.15, 0.05));

  // controller cabinet next to the bench
  const controller = new THREE.Group();
  controller.position.set(-1.15, -BASE_Y, -4.9);
  controller.add(box(0.55, 1.1, 0.45, mats.whitePaint, 0, 0.55, 0));
  controller.add(box(0.56, 0.06, 0.46, mats.graphite, 0, 1.1, 0));
  controller.add(box(0.3, 0.2, 0.02, mats.monitorBlack, -0.2, 0.82, 0.23));
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.17), mats.screen);
  screen.rotation.y = 0;
  screen.position.set(-0.2, 0.82, 0.245);
  controller.add(screen);
  const estop = cyl(0.03, 0.03, 0.025, mats.redPaint, 14, 0.12, 0.78, 0.235, {
    rotX: Math.PI / 2,
  });
  controller.add(estop);
  controller.add(cyl(0.032, 0.032, 0.012, mats.yellow, 14, 0.12, 0.78, 0.222, { rotX: Math.PI / 2 }));
  root.add(controller);

  scene.add(root);

  /* ---------------- animation ---------------- */
  const phases = [
    { dur: 1.0, key: "home" },
    { dur: 0.9, key: "abovePick" },
    { dur: 0.5, key: "pick" },
    { dur: 0.35, key: "grab" },
    { dur: 0.5, key: "abovePick" },
    { dur: 1.1, key: "abovePlace" },
    { dur: 0.5, key: "place" },
    { dur: 0.35, key: "release" },
    { dur: 0.55, key: "abovePlace" },
    { dur: 1.05, key: "home" },
  ];
  const total = phases.reduce((a, p) => a + p.dur, 0);

  let mode = "auto"; // auto | manual | program
  let cycleT = 0;
  let slotIndex = 0;
  let pickIndex = 0;
  let pickY = 0.981;
  let gripTarget = 0;
  let grip = 0;
  let held = null;
  const placed = [];
  let clearing = -1;
  let onPlaced = () => {};

  const manualTarget = HOME.clone();
  const smoothTarget = HOME.clone();
  const programFrom = new THREE.Vector3();
  const deltaV = new THREE.Vector3();
  const MAX_REACH = 0.9;

  let program = [];
  let programIndex = 0;
  let programLoop = false;
  let programSpeed = 1;
  let programActive = false;
  let programStep = null;
  let programTimer = 0;
  let onProgram = () => {};

  const tipWorld = new THREE.Vector3();
  const target = new THREE.Vector3();
  const from = new THREE.Vector3();
  const to = new THREE.Vector3();

  function slotWorld(i) {
    const s = pallet.usable[i % pallet.usable.length];
    return new THREE.Vector3(-2.0 + s.x, 0.997, 0.66 + s.z);
  }

  function resetStack() {
    stack.forEach((t) => (t.visible = true));
    pickIndex = 0;
    pickY = 0.981;
  }

  function clearPallet() {
    for (const t of placed) {
      scene.remove(t);
    }
    placed.length = 0;
    slotIndex = 0;
    resetStack();
  }

  function solveIK(tipTarget) {
    const dx = tipTarget.x + 2.0;
    const dz = tipTarget.z;
    const d = Math.max(0.05, Math.hypot(dx, dz));
    const yaw = Math.atan2(-dz, dx);

    const wristY = tipTarget.y + GRIP_LEN;
    const dy = wristY - SHOULDER_WORLD_Y;
    let r = Math.hypot(d, dy);
    r = clamp(r, 0.12, L1 + L2 - 0.004);

    const theta = Math.atan2(dy, d);
    const cosA = clamp((r * r + L1 * L1 - L2 * L2) / (2 * r * L1), -1, 1);
    const alpha = Math.acos(cosA);
    const cosB = clamp((L1 * L1 + L2 * L2 - r * r) / (2 * L1 * L2), -1, 1);
    const beta = Math.acos(cosB);

    const phi1 = theta + alpha; // elbow-up
    const phi2 = beta - Math.PI;
    const phi3 = -Math.PI / 2 - (phi1 + phi2);

    turret.rotation.y = yaw;
    shoulder.rotation.z = phi1;
    elbow.rotation.z = phi2;
    wrist.rotation.z = phi3;
  }

  function currentPhase(t) {
    let acc = 0;
    for (let i = 0; i < phases.length; i++) {
      if (t < acc + phases[i].dur) return { i, local: (t - acc) / phases[i].dur, phase: phases[i] };
      acc += phases[i].dur;
    }
    return { i: phases.length - 1, local: 1, phase: phases[phases.length - 1] };
  }

  function targetFor(key) {
    const slot = slotWorld(slotIndex);
    switch (key) {
      case "home":
        return HOME.clone();
      case "abovePick":
        return new THREE.Vector3(-2.0, ABOVE_PICK_Y, PICK_Z);
      case "pick":
      case "grab":
        return new THREE.Vector3(-2.0, pickY, PICK_Z);
      case "abovePlace":
        return new THREE.Vector3(slot.x, ABOVE_PLACE_Y, slot.z);
      case "place":
      case "release":
        return new THREE.Vector3(slot.x, PLACE_Y, slot.z);
      default:
        return HOME.clone();
    }
  }

  let prevPhase = -1;

  function updateGripper(dt) {
    grip += (gripTarget - grip) * Math.min(1, dt * 14);
    const spread = 0.066 + (1 - grip) * 0.036;
    fingers.forEach((f) => {
      f.group.position.z = f.dir * spread;
    });
    gripLed.material = grip > 0.6 ? mats.ledGreen : mats.ledOff;
  }

  function updateAuto(dt) {
    if (clearing >= 0) {
      clearing += dt;
      const k = clamp(clearing / 0.9, 0, 1);
      placed.forEach((t) => t.scale.setScalar(1 - k));
      if (clearing > 1.05) {
        clearPallet();
        clearing = -1;
        cycleT = 0;
        prevPhase = -1;
      }
      solveIK(HOME);
      gripTarget = 0;
    } else {
      cycleT += dt;
      if (cycleT >= total) {
        cycleT -= total;
        prevPhase = -1;
        pickY = 0.981 + pickIndex * 0.017;
        if (slotIndex >= pallet.usable.length) {
          clearing = 0;
        }
      }

      const { i, local } = currentPhase(cycleT);

      if (i !== prevPhase) {
        if (i === 3) {
          // grab
          gripTarget = 1;
          held = createTray(mats);
          scene.add(held);
          if (pickIndex < stack.length) stack[pickIndex].visible = false;
          pickIndex++;
        }
        if (i === 7) {
          gripTarget = 0;
          if (held) {
            held.position.copy(slotWorld(slotIndex));
            held.scale.setScalar(1);
            placed.push(held);
            held = null;
            slotIndex++;
            onPlaced(slotIndex);
          }
        }
        prevPhase = i;
      }

      const key = phases[i].key;
      const next = phases[Math.min(i + 1, phases.length - 1)];
      from.copy(targetFor(key));
      const holdStill = key === "grab" || key === "release";
      to.copy(holdStill ? from : targetFor(next.key));
      const t = smooth(clamp(local, 0, 1));
      target.lerpVectors(from, to, t);

      solveIK(target);
    }
    updateGripper(dt);
  }

  /* ---- manual jog / teach ---- */

  function updateManual(dt) {
    deltaV.subVectors(manualTarget, smoothTarget);
    const dist = deltaV.length();
    if (dist > 1e-5) {
      const step = 1.4 * dt;
      if (dist <= step) smoothTarget.copy(manualTarget);
      else smoothTarget.addScaledVector(deltaV, step / dist);
    }
    solveIK(smoothTarget);
    updateGripper(dt);
  }

  function clampTip(v) {
    v.y = clamp(v.y, 0.995, 2.05);
    const dx = v.x + 2.0;
    const dz = v.z;
    const d = Math.hypot(dx, dz);
    const dy = v.y + GRIP_LEN - SHOULDER_WORLD_Y;
    const r = Math.hypot(d, dy);
    if (r > MAX_REACH) {
      const s = MAX_REACH / r;
      v.x = -2.0 + dx * s;
      v.z = dz * s;
      v.y = clamp(SHOULDER_WORLD_Y - GRIP_LEN + dy * s, 0.995, 2.05);
    }
    return v;
  }

  function jog(dx, dy, dz) {
    if (mode === "program") return;
    mode = "manual";
    manualTarget.x += dx;
    manualTarget.y += dy;
    manualTarget.z += dz;
    clampTip(manualTarget);
  }

  function attachNearbyTray() {
    if (held) return false;
    root.updateMatrixWorld(true);
    tip.getWorldPosition(tipWorld);
    if (Math.hypot(tipWorld.x + 2.0, tipWorld.z + 0.66) > 0.24 || tipWorld.y > 1.28) {
      return false;
    }
    let next = null;
    for (let i = stack.length - 1; i >= 0; i--) {
      if (stack[i].visible) {
        next = stack[i];
        break;
      }
    }
    if (!next) return false;
    next.visible = false;
    held = createTray(mats);
    scene.add(held);
    return true;
  }

  function releaseHeldTray() {
    if (!held) return false;
    root.updateMatrixWorld(true);
    tip.getWorldPosition(tipWorld);
    const overPallet = Math.abs(tipWorld.x + 2.0) < 0.3 && Math.abs(tipWorld.z - 0.66) < 0.34;
    held.position.set(tipWorld.x, overPallet ? 0.997 : 0.022, tipWorld.z);
    held.rotation.set(0, 0, 0);
    held.scale.setScalar(1);
    placed.push(held);
    held = null;
    if (overPallet) onPlaced(placed.length);
    return true;
  }

  /* ---- program sequencer ---- */

  function emitProgram(type) {
    onProgram({
      type,
      index: programIndex,
      total: program.length,
      step: program[programIndex],
    });
  }

  function finishProgram() {
    if (!programActive) return;
    programActive = false;
    programStep = null;
    mode = "manual";
    root.updateMatrixWorld(true);
    tip.getWorldPosition(manualTarget);
    smoothTarget.copy(manualTarget);
    emitProgram("done");
  }

  function beginProgramStep(i) {
    programIndex = i;
    programTimer = 0;
    const step = program[i];
    if (!step) {
      finishProgram();
      return;
    }
    root.updateMatrixWorld(true);
    tip.getWorldPosition(programFrom);

    if (step.type === "move" || step.type === "home") {
      const dest =
        step.type === "home"
          ? HOME.clone()
          : new THREE.Vector3(step.point.x, step.point.y, step.point.z);
      const dist = programFrom.distanceTo(dest);
      programStep = {
        kind: "move",
        from: programFrom.clone(),
        to: dest,
        dur: clamp(dist / (0.6 * programSpeed), 0.28, 3.0),
      };
    } else if (step.type === "grip") {
      gripTarget = 1;
      programStep = { kind: "grip", dur: 0.36 / programSpeed };
    } else if (step.type === "release") {
      gripTarget = 0;
      programStep = { kind: "release", dur: 0.32 / programSpeed };
    } else {
      programStep = { kind: "wait", dur: Math.max(0.05, (step.seconds ?? 0.5) / programSpeed) };
    }

    emitProgram("step");
  }

  function advanceProgram() {
    if (programIndex + 1 < program.length) {
      beginProgramStep(programIndex + 1);
    } else if (programLoop) {
      beginProgramStep(0);
    } else {
      finishProgram();
    }
  }

  function updateProgram(dt) {
    if (!programActive || !programStep) return;
    programTimer += dt;
    const k = clamp(programTimer / programStep.dur, 0, 1);

    if (programStep.kind === "move") {
      target.lerpVectors(programStep.from, programStep.to, smooth(k));
      solveIK(target);
      if (k >= 1) {
        target.copy(programStep.to);
        solveIK(target);
        advanceProgram();
      }
    } else if (k >= 1) {
      if (programStep.kind === "grip") attachNearbyTray();
      else if (programStep.kind === "release") releaseHeldTray();
      advanceProgram();
    }

    updateGripper(dt);
  }

  function startProgramming() {
    programActive = false;
    programStep = null;
    mode = "manual";
    gripTarget = 0;
    clearing = -1;
    if (held) {
      scene.remove(held);
      held = null;
    }
    clearPallet();
    resetStack();
    root.updateMatrixWorld(true);
    tip.getWorldPosition(manualTarget);
    smoothTarget.copy(manualTarget);
    return manualTarget.clone();
  }

  function endProgramming() {
    programActive = false;
    programStep = null;
    if (held) {
      scene.remove(held);
      held = null;
    }
    clearPallet();
    resetStack();
    gripTarget = 0;
    clearing = -1;
    cycleT = 0;
    prevPhase = -1;
    pickY = 0.981;
    pickIndex = 0;
    mode = "auto";
  }

  function startProgram(steps, opts = {}) {
    if (!steps || !steps.length) return false;
    program = steps.map((s) => ({ ...s, point: s.point ? { ...s.point } : undefined }));
    programLoop = !!opts.loop;
    programSpeed = clamp(opts.speed ?? 1, 0.3, 2);
    programActive = true;
    mode = "program";
    beginProgramStep(0);
    return true;
  }

  function stopProgram() {
    if (!programActive) return;
    programActive = false;
    programStep = null;
    mode = "manual";
    root.updateMatrixWorld(true);
    tip.getWorldPosition(manualTarget);
    smoothTarget.copy(manualTarget);
    emitProgram("stop");
  }

  function setGrip(closed) {
    if (mode === "program") return;
    gripTarget = closed ? 1 : 0;
    if (closed) attachNearbyTray();
    else releaseHeldTray();
  }

  function getTip(out = new THREE.Vector3()) {
    root.updateMatrixWorld(true);
    return tip.getWorldPosition(out);
  }

  function update(ctx) {
    const dt = Math.min(ctx.dt, 0.05);
    if (mode === "auto") updateAuto(dt);
    else if (mode === "program") updateProgram(dt);
    else updateManual(dt);

    root.updateMatrixWorld(true);
    if (held) {
      tip.getWorldPosition(tipWorld);
      held.position.copy(tipWorld);
      held.rotation.set(0, 0, 0);
    }
  }

  const hitbox = new THREE.Mesh(
    new THREE.BoxGeometry(0.75, 1.75, 2.4),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })
  );
  hitbox.position.set(-2.0, BASE_Y + 0.85, 0.03);
  scene.add(hitbox);

  const info = {
    name: "Célula Robótica",
    type: "Robótica",
    desc: "Robô de 6 eixos com garra paralela. Retira as bandejas octogonais da pilha de alimentação e as acomoda no pallet 2×4, alimentando o fluxo de montagem da linha.",
    tech: ["Robô 6 eixos", "Garra paralela", "Pallet 2×4", "Controlador + IHM", "Barreira de luz"],
  };

  return {
    group: root,
    hitbox,
    info,
    update,
    cycle: CYCLE,
    labelPos: new THREE.Vector3(-2.0, 2.55, 0.1),
    focus: {
      pos: new THREE.Vector3(-0.15, 1.95, 1.25),
      target: new THREE.Vector3(-2.0, 1.35, 0.2),
    },
    setOnPlaced(fn) {
      onPlaced = fn;
    },
    /* teach pendant API */
    startProgramming,
    endProgramming,
    startProgram,
    stopProgram,
    jog,
    setGrip,
    getTip,
    getGrip() {
      return gripTarget > 0.5;
    },
    onProgramEvent(fn) {
      onProgram = fn;
    },
    getProgramState() {
      return { mode, running: programActive, index: programIndex, total: program.length };
    },
  };
}
