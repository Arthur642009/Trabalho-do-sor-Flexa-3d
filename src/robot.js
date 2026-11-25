import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { box, cyl, hose, tube } from "./utils.js";
import { createTray, createPallet } from "./parts.js";
import { createHmi } from "./hmi.js";
import { makePlateMaterial } from "./materials.js";

const L1 = 0.5; // shoulder -> elbow
const L2 = 0.46; // elbow -> wrist
const GRIP_LEN = 0.16;
const BASE_Y = 0.965; // top of the cell platform
const SHOULDER_Y = 0.3; // relative to turret
const TURRET_Y = 0.135;
const SHOULDER_WORLD_Y = BASE_Y + TURRET_Y + SHOULDER_Y;
const CYCLE = 6.8;

const HOME = new THREE.Vector3(-1.3, 1.55, 0);
const CLEAR_BASE = new THREE.Vector3(-1.3, 1.34, 0);
const MIN_BASE_CLEARANCE = 0.4;
const ABOVE_PICK_Y = 1.32;
const PICK_Z = -0.66;
const PLACE_Y = 1.0;
const ABOVE_PLACE_Y = 1.3;

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const smooth = (t) => {
  const u = clamp(t, 0, 1);
  const ramp = 0.2;
  if (u < ramp) return (u * u) / (2 * ramp * (1 - ramp));
  if (u > 1 - ramp) return 1 - ((1 - u) * (1 - u)) / (2 * ramp * (1 - ramp));
  return (u - ramp / 2) / (1 - ramp);
};

function roundedMesh(w, h, d, mat, radius = 0.008) {
  const r = Math.max(0.001, Math.min(radius, w * 0.45, h * 0.45, d * 0.45));
  const mesh = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 3, r), mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function castLink(length, rootWidth, tipWidth, depth, mat) {
  const shape = new THREE.Shape();
  const rootRadius = rootWidth * 0.2;
  shape.moveTo(0, -rootWidth / 2 + rootRadius);
  shape.quadraticCurveTo(0, -rootWidth / 2, rootRadius, -rootWidth / 2);
  shape.lineTo(length * 0.12, -rootWidth / 2);
  shape.lineTo(length * 0.82, -tipWidth / 2);
  shape.quadraticCurveTo(length, -tipWidth / 2, length, 0);
  shape.quadraticCurveTo(length, tipWidth / 2, length * 0.82, tipWidth / 2);
  shape.lineTo(length * 0.12, rootWidth / 2);
  shape.quadraticCurveTo(0, rootWidth / 2, 0, rootWidth / 2 - rootRadius);
  shape.quadraticCurveTo(0, -rootWidth / 2, 0, -rootWidth / 2 + rootRadius);
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    steps: 1,
    bevelEnabled: true,
    bevelThickness: 0.005,
    bevelSize: 0.005,
    bevelSegments: 2,
    curveSegments: 8,
  });
  geometry.translate(0, 0, -depth / 2);
  const mesh = new THREE.Mesh(geometry, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function addBoltCircle(parent, radius, count, z, mat, size = 0.005) {
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    parent.add(
      cyl(size, size, 0.009, mat, 6, Math.cos(a) * radius, Math.sin(a) * radius, z, {
        rotX: Math.PI / 2,
      })
    );
  }
}

function makeJoint(mats, radius, width) {
  const joint = new THREE.Group();
  joint.add(cyl(radius * 0.8, radius * 0.8, width * 1.08, mats.graphite, 32, 0, 0, 0, { rotX: Math.PI / 2 }));
  joint.add(cyl(radius, radius, width * 0.72, mats.whitePaint, 36, 0, 0, 0, { rotX: Math.PI / 2 }));
  for (const side of [-1, 1]) {
    joint.add(
      cyl(radius * 1.025, radius * 1.025, 0.014, mats.bluePlastic, 36, 0, 0, side * width * 0.38, {
        rotX: Math.PI / 2,
      })
    );
    joint.add(
      cyl(radius * 0.73, radius * 0.73, 0.014, mats.graphite, 32, 0, 0, side * width * 0.44, {
        rotX: Math.PI / 2,
      })
    );
  }
  joint.add(cyl(radius * 0.48, radius * 0.48, 0.012, mats.steel, 28, 0, 0, width * 0.51, { rotX: Math.PI / 2 }));
  addBoltCircle(joint, radius * 0.61, 6, width * 0.53, mats.steel, radius * 0.075);
  joint.add(
    cyl(radius * 0.62, radius * 0.62, 0.042, mats.blackPlastic, 28, 0, 0, -width * 0.56, {
      rotX: Math.PI / 2,
    })
  );
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const vent = roundedMesh(radius * 0.12, radius * 0.28, 0.006, mats.graphite, 0.002);
    vent.position.set(Math.cos(a) * radius * 0.43, Math.sin(a) * radius * 0.43, -width * 0.59);
    vent.rotation.z = a;
    joint.add(vent);
  }
  return joint;
}

function dressLink(group, length, rootWidth, tipWidth, depth, mats, plateMat = null) {
  const link = castLink(length, rootWidth, tipWidth, depth, mats.whitePaint);
  link.position.x = 0.035;
  group.add(link);

  for (const side of [-1, 1]) {
    const panel = roundedMesh(length * 0.62, rootWidth * 0.42, 0.008, mats.lightGrey, 0.003);
    panel.position.set(0.035 + length * 0.52, 0, side * (depth / 2 + 0.006));
    group.add(panel);
  }

  const stripe = roundedMesh(length * 0.56, 0.016, 0.009, mats.bluePlastic, 0.003);
  stripe.position.set(0.035 + length * 0.5, rootWidth * 0.27, depth / 2 + 0.011);
  group.add(stripe);

  for (const x of [0.09, 0.035 + length - 0.07]) {
    for (const y of [-rootWidth * 0.24, rootWidth * 0.24]) {
      group.add(cyl(0.005, 0.005, 0.009, mats.steel, 6, x, y, depth / 2 + 0.012, { rotX: Math.PI / 2 }));
    }
  }

  const cablePoints = [
    [0.06, rootWidth / 2 + 0.018, -depth * 0.2],
    [length * 0.35, rootWidth / 2 + 0.032, -depth * 0.2],
    [length * 0.7, tipWidth / 2 + 0.024, -depth * 0.2],
    [0.035 + length - 0.035, tipWidth / 2 + 0.012, -depth * 0.2],
  ];
  group.add(tube(cablePoints, 0.007, mats.blackCable, 24, 7));
  group.add(tube(cablePoints.map(([x, y, z]) => [x, y + 0.009, z + 0.014]), 0.0045, mats.blueTube, 24, 6));
  for (const x of [length * 0.32, length * 0.68]) {
    const clip = roundedMesh(0.028, 0.018, 0.045, mats.graphite, 0.003);
    clip.position.set(0.035 + x, rootWidth / 2 + 0.023, -depth * 0.2);
    group.add(clip);
  }

  if (plateMat) {
    const plate = new THREE.Mesh(new THREE.PlaneGeometry(length * 0.42, rootWidth * 0.34), plateMat);
    plate.position.set(0.035 + length * 0.52, -rootWidth * 0.03, depth / 2 + 0.011);
    group.add(plate);
  }
}

export function buildRobot(scene, mats, renderer) {
  const root = new THREE.Group();
  root.name = "robot-cell";
  root.position.set(-2.0, BASE_Y, 0);

  /* ---------------- pedestal ---------------- */
  const robotPlate = makePlateMaterial(renderer, "6X", "ROBÔ 6 EIXOS");
  root.add(cyl(0.23, 0.24, 0.035, mats.graphite, 48, 0, 0.018, 0));
  root.add(cyl(0.175, 0.195, 0.115, mats.whitePaint, 44, 0, 0.09, 0));
  root.add(cyl(0.178, 0.178, 0.018, mats.bluePlastic, 44, 0, 0.15, 0));
  root.add(cyl(0.163, 0.163, 0.018, mats.graphite, 44, 0, 0.169, 0));
  root.add(cyl(0.153, 0.153, 0.012, mats.steel, 44, 0, 0.184, 0));
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    root.add(cyl(0.009, 0.009, 0.012, mats.steel, 6, Math.cos(a) * 0.202, 0.041, Math.sin(a) * 0.202));
  }
  const basePlate = new THREE.Mesh(new THREE.PlaneGeometry(0.13, 0.048), robotPlate);
  basePlate.position.set(0, 0.092, 0.178);
  root.add(basePlate);
  const baseStatus = new THREE.Mesh(new THREE.SphereGeometry(0.007, 12, 8), mats.ledGreen);
  baseStatus.position.set(0.088, 0.095, 0.171);
  root.add(baseStatus);

  const turret = new THREE.Group();
  turret.name = "robot-axis-1";
  turret.position.y = TURRET_Y;
  root.add(turret);

  turret.add(cyl(0.112, 0.122, 0.17, mats.whitePaint, 36, 0, 0.085, 0));
  turret.add(cyl(0.124, 0.124, 0.014, mats.bluePlastic, 36, 0, 0.126, 0));
  turret.add(cyl(0.12, 0.12, 0.02, mats.graphite, 36, 0, 0.175, 0));
  turret.add(cyl(0.102, 0.106, 0.03, mats.whitePaint, 36, 0, 0.2, 0));
  const cableEntry = roundedMesh(0.07, 0.09, 0.035, mats.blackPlastic, 0.008);
  cableEntry.position.set(-0.09, 0.06, -0.085);
  turret.add(cableEntry);

  /* ---------------- arm ---------------- */
  const shoulder = new THREE.Group();
  shoulder.name = "robot-axis-2";
  shoulder.position.set(0, SHOULDER_Y, 0);
  turret.add(shoulder);
  shoulder.add(makeJoint(mats, 0.092, 0.2));

  const shoulderLoop = new THREE.Mesh(
    new THREE.TorusGeometry(0.106, 0.008, 7, 34, Math.PI * 1.45),
    mats.blueTube
  );
  shoulderLoop.position.z = -0.116;
  shoulderLoop.rotation.z = -0.25;
  shoulder.add(shoulderLoop);

  const upperArm = new THREE.Group();
  upperArm.name = "robot-upper-arm";
  shoulder.add(upperArm);
  dressLink(upperArm, 0.44, 0.15, 0.115, 0.12, mats, robotPlate);

  const elbow = new THREE.Group();
  elbow.name = "robot-axis-3";
  elbow.position.set(L1, 0, 0);
  upperArm.add(elbow);
  elbow.add(makeJoint(mats, 0.079, 0.17));

  const elbowLoop = new THREE.Mesh(
    new THREE.TorusGeometry(0.089, 0.007, 7, 30, Math.PI * 1.4),
    mats.blackCable
  );
  elbowLoop.position.z = -0.101;
  elbowLoop.rotation.z = 0.35;
  elbow.add(elbowLoop);

  const forearm = new THREE.Group();
  forearm.name = "robot-forearm";
  elbow.add(forearm);
  dressLink(forearm, 0.4, 0.112, 0.078, 0.1, mats);

  const wrist = new THREE.Group();
  wrist.name = "robot-axis-4";
  wrist.position.set(L2, 0, 0);
  forearm.add(wrist);
  wrist.add(makeJoint(mats, 0.055, 0.115));

  const wristRoll = new THREE.Group();
  wristRoll.name = "robot-axis-5";
  wrist.add(wristRoll);
  wristRoll.add(cyl(0.047, 0.047, 0.052, mats.graphite, 28, 0.018, 0, 0, { rotZ: -Math.PI / 2 }));
  wristRoll.add(cyl(0.048, 0.048, 0.01, mats.bluePlastic, 28, 0.046, 0, 0, { rotZ: -Math.PI / 2 }));

  const toolRoll = new THREE.Group();
  toolRoll.name = "robot-axis-6";
  wristRoll.add(toolRoll);
  toolRoll.add(cyl(0.039, 0.039, 0.032, mats.steel, 24, 0.058, 0, 0, { rotZ: -Math.PI / 2 }));
  toolRoll.add(cyl(0.041, 0.041, 0.012, mats.graphite, 24, 0.076, 0, 0, { rotZ: -Math.PI / 2 }));

  const gripper = new THREE.Group();
  gripper.name = "robot-parallel-gripper";
  toolRoll.add(gripper);
  const gripperBody = roundedMesh(0.09, 0.072, 0.15, mats.blackPlastic, 0.012);
  gripperBody.position.set(0.105, 0, 0);
  gripper.add(gripperBody);
  const gripperBand = roundedMesh(0.018, 0.05, 0.154, mats.bluePlastic, 0.004);
  gripperBand.position.set(0.074, 0, 0);
  gripper.add(gripperBand);
  const gripperTop = roundedMesh(0.07, 0.018, 0.09, mats.aluDark, 0.005);
  gripperTop.position.set(0.108, 0.043, 0);
  gripper.add(gripperTop);

  const fingers = [];
  for (const sz of [-1, 1]) {
    const carrier = new THREE.Group();
    carrier.position.set(0.115, 0, sz * 0.073);
    const carrierBody = roundedMesh(0.072, 0.058, 0.022, mats.aluDark, 0.005);
    carrier.add(carrierBody);
    carrier.add(cyl(0.005, 0.005, 0.026, mats.steel, 6, -0.018, 0, 0, { rotX: Math.PI / 2 }));
    gripper.add(carrier);

    const f = new THREE.Group();
    f.position.set(0.15, 0, sz * 0.08);
    const fingerBody = roundedMesh(0.072, 0.046, 0.018, mats.steel, 0.004);
    fingerBody.position.x = 0.012;
    f.add(fingerBody);
    const pad = roundedMesh(0.034, 0.04, 0.008, mats.rubber, 0.002);
    pad.position.set(0.047, 0, -sz * 0.013);
    f.add(pad);
    gripper.add(f);
    fingers.push({ group: f, carrier, dir: sz });
  }

  gripper.add(hose([0.09, 0.052, -0.035], [0.145, 0.04, -0.068], 0.004, mats.blueTube, 0.008));
  gripper.add(hose([0.09, 0.052, 0.035], [0.145, 0.04, 0.068], 0.004, mats.blueTube, 0.008));
  const gripLed = roundedMesh(0.008, 0.012, 0.012, mats.ledGreen, 0.002);
  gripLed.position.set(0.12, 0.043, 0.06);
  gripper.add(gripLed);

  const tip = new THREE.Object3D();
  tip.name = "robot-tool-tip";
  tip.position.set(GRIP_LEN, 0, 0);
  toolRoll.add(tip);

  /* ---------------- feed nest + pallet ---------------- */
  const nest = new THREE.Group();
  nest.name = "robot-feed-nest";
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
    t.name = `robot-feed-tray-${i + 1}`;
    t.position.set(0, 0.021 + i * 0.017, 0);
    nest.add(t);
    stack.push(t);
  }
  root.add(nest);

  const pallet = createPallet(mats);
  pallet.group.name = "robot-pallet";
  pallet.group.position.set(0, 0.982 - BASE_Y, 0.66);
  root.add(pallet.group);

  // pallet locating block
  root.add(box(0.1, 0.02, 0.1, mats.graphite, 0, 0.006, 0.66));

  /* ---------------- cell frame ---------------- */
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
  for (const x of [-0.34, 0.34]) {
    for (const z of [-1.12, 1.18]) {
      frame.add(box(0.12, 0.014, 0.12, mats.aluDark, x, 0.007, z));
      for (const sx of [-1, 1]) {
        for (const sz of [-1, 1]) {
          frame.add(cyl(0.006, 0.006, 0.012, mats.steel, 6, x + sx * 0.043, 0.019, z + sz * 0.043));
        }
      }
    }
  }

  const beacon = new THREE.Group();
  beacon.name = "robot-status-beacon";
  beacon.position.set(0.34, 1.58, -1.12);
  beacon.add(cyl(0.028, 0.032, 0.025, mats.graphite, 16, 0, 0.012, 0));
  beacon.add(cyl(0.012, 0.012, 0.05, mats.graphite, 12, 0, 0.048, 0));
  const beaconRed = cyl(0.021, 0.021, 0.036, mats.ledOff, 18, 0, 0.087, 0);
  const beaconAmber = cyl(0.021, 0.021, 0.036, mats.ledOff, 18, 0, 0.125, 0);
  const beaconGreen = cyl(0.021, 0.021, 0.036, mats.ledOff, 18, 0, 0.163, 0);
  beacon.add(beaconRed, beaconAmber, beaconGreen);
  beacon.add(cyl(0.023, 0.023, 0.008, mats.graphite, 18, 0, 0.185, 0));
  frame.add(beacon);
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

  /* ---------------- teach pendant touchscreen ---------------- */
  const hmi = createHmi(mats, renderer, "CÉLULA", "ROBÔ 6 EIXOS", 1.18, {
    x: 0.452,
    y: 0.07,
    rotY: Math.PI / 2,
    tag: "HMI · PENDANT",
    rows: [
      ["#2f6fd0", "ensinar pontos", 1],
      ["#2f9e63", "executar sequência", 0.95],
      ["#c99a2e", "jog manual", 0.8],
    ],
  });
  root.add(hmi.root);
  root.add(box(0.14, 0.035, 0.05, mats.aluDark, 0.39, -0.102, 1.18));
  root.add(box(0.05, 0.12, 0.06, mats.aluDark, 0.34, -0.102, 1.18));

  const serviceCablePath = [
    [-0.43, 5.25, -1.12],
    [-0.43, 3.2, -1.12],
    [-0.43, 1.8, -1.12],
    [-0.43, 0.78, -1.12],
    [-0.4, 0.42, -1.06],
    [-0.3, 0.2, -0.82],
    [-0.16, 0.12, -0.42],
    [0, 0.1, -0.18],
  ];
  const umbilical = tube(serviceCablePath, 0.014, mats.blackCable, 72, 8);
  umbilical.name = "robot-service-umbilical";
  umbilical.userData.path = serviceCablePath;
  root.add(umbilical);
  const serviceAirLine = tube(
    serviceCablePath.map(([x, y, z]) => [x + 0.022, y, z]),
    0.005,
    mats.blueTube,
    72,
    6
  );
  serviceAirLine.name = "robot-service-air-line";
  root.add(serviceAirLine);
  root.add(box(0.18, 0.035, 0.12, mats.aluDark, -0.41, 5.28, -1.12));
  root.add(cyl(0.024, 0.024, 0.06, mats.graphite, 16, -0.41, 5.23, -1.12));
  for (const y of [0.55, 1.0, 1.45]) {
    root.add(box(0.12, 0.026, 0.04, mats.graphite, -0.385, y, -1.12));
  }
  root.add(cyl(0.025, 0.025, 0.05, mats.blackPlastic, 16, 0, 0.1, -0.18, { rotX: Math.PI / 2 }));
  turret.add(hose([0, -0.035, -0.18], [-0.09, 0.06, -0.085], 0.008, mats.blackCable, 0.025, -0.015));
  turret.add(hose([0.018, -0.035, -0.18], [-0.072, 0.06, -0.085], 0.004, mats.blueTube, 0.02, -0.01));
  root.userData.serviceCablePath = serviceCablePath;

  scene.add(root);

  /* ---------------- animation ---------------- */
  const phases = [
    { dur: 1.0, key: "home" },
    { dur: 0.85, key: "abovePick" },
    { dur: 0.4, key: "pick" },
    { dur: 0.25, key: "grab" },
    { dur: 0.8, key: "abovePick" },
    { dur: 0.8, key: "clearBase" },
    { dur: 0.8, key: "abovePlace" },
    { dur: 0.4, key: "place" },
    { dur: 0.25, key: "release" },
    { dur: 0.8, key: "abovePlace" },
    { dur: 0.85, key: "home" },
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

  function setBaseYaw(yaw) {
    const current = turret.rotation.y;
    const delta = Math.atan2(Math.sin(yaw - current), Math.cos(yaw - current));
    turret.rotation.y = current + delta;
  }

  function distanceToBase(from, to) {
    const vx = to.x - from.x;
    const vz = to.z - from.z;
    const length2 = vx * vx + vz * vz;
    const t = length2 > 1e-8 ? clamp(-((from.x + 2) * vx + from.z * vz) / length2, 0, 1) : 0;
    return Math.hypot(from.x + 2 + vx * t, from.z + vz * t);
  }

  function planMovePath(from, to) {
    const path = [from.clone()];
    if (distanceToBase(from, to) < MIN_BASE_CLEARANCE) path.push(CLEAR_BASE.clone());
    path.push(to.clone());
    return path;
  }

  function pointOnPath(path, lengths, distance, out) {
    let remaining = distance;
    for (let i = 0; i < lengths.length; i++) {
      const length = lengths[i];
      if (length < 1e-6) continue;
      if (remaining <= length || i === lengths.length - 1) {
        return out.lerpVectors(path[i], path[i + 1], clamp(remaining / length, 0, 1));
      }
      remaining -= length;
    }
    return out.copy(path[path.length - 1]);
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

    setBaseYaw(yaw);
    shoulder.rotation.z = phi1;
    elbow.rotation.z = phi2;
    wrist.rotation.z = phi3;
    wristRoll.rotation.x = 0;
    toolRoll.rotation.x = 0;
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
      case "clearBase":
        return CLEAR_BASE.clone();
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
      f.carrier.position.z = f.dir * (spread + 0.008);
    });
    gripLed.material = grip > 0.6 ? mats.ledGreen : mats.ledOff;
  }

  function updateBeacon(t) {
    beaconRed.material = clearing >= 0 ? mats.ledRed : mats.ledOff;
    beaconAmber.material = mode === "program" && programActive && Math.sin(t * 8) > 0 ? mats.ledAmber : mats.ledOff;
    beaconGreen.material = mode === "auto" && clearing < 0 ? mats.ledGreen : mats.ledOff;
    baseStatus.material = beaconGreen.material;
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
        slotIndex++;
        if (slotIndex >= pallet.usable.length) {
          clearing = 0;
        }
      }

      const { i, local } = currentPhase(cycleT);
      const key = phases[i].key;

      if (i !== prevPhase) {
        if (key === "grab") {
          gripTarget = 1;
          held = createTray(mats);
          scene.add(held);
          if (pickIndex < stack.length) stack[pickIndex].visible = false;
          pickIndex++;
        }
        if (key === "release") {
          gripTarget = 0;
          if (held) {
            held.position.copy(slotWorld(slotIndex));
            held.scale.setScalar(1);
            placed.push(held);
            held = null;
            onPlaced(placed.length);
          }
        }
        prevPhase = i;
      }

      const nextKey = phases[Math.min(i + 1, phases.length - 1)].key;
      from.copy(targetFor(key));
      const holdStill = key === "grab" || key === "release";
      to.copy(holdStill ? from : targetFor(nextKey));
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
      const path = planMovePath(programFrom, dest);
      const lengths = [];
      let dist = 0;
      for (let j = 1; j < path.length; j++) {
        const length = path[j - 1].distanceTo(path[j]);
        lengths.push(length);
        dist += length;
      }
      programStep = {
        kind: "move",
        to: dest,
        path,
        lengths,
        totalDist: dist,
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
      pointOnPath(programStep.path, programStep.lengths, smooth(k) * programStep.totalDist, target);
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
    solveIK(HOME);
    root.updateMatrixWorld(true);
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
    updateBeacon(ctx.t || 0);
  }

  const hitbox = new THREE.Mesh(
    new THREE.BoxGeometry(0.75, 1.75, 2.4),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })
  );
  hitbox.position.set(-2.0, BASE_Y + 0.85, 0.03);
  scene.add(hitbox);

  solveIK(HOME);
  root.updateMatrixWorld(true);

  const info = {
    name: "Célula Robótica",
    type: "Robótica",
    desc: "Robô industrial de 6 eixos com elos fundidos, garra paralela e feixe de serviços externo. Retira as bandejas octogonais da pilha de alimentação e as acomoda no pallet 2×4, alimentando o fluxo de montagem da linha.",
    tech: ["Robô 6 eixos", "Garra paralela", "Pallet 2×4", "Pendant IHM", "Barreira de luz"],
  };

  return {
    group: root,
    hitbox,
    info,
    hmi,
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
    getAxisState() {
      return [
        turret.rotation.y,
        shoulder.rotation.z,
        elbow.rotation.z,
        wrist.rotation.z,
        wristRoll.rotation.x,
        toolRoll.rotation.x,
      ];
    },
    getCablePath() {
      root.updateMatrixWorld(true);
      return root.userData.serviceCablePath.map((point) =>
        new THREE.Vector3(...point).applyMatrix4(root.matrixWorld).toArray()
      );
    },
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
