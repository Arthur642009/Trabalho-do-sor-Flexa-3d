import * as THREE from "three";
import {
  box,
  cyl,
  hose,
  easeInOut,
  clamp01,
} from "./utils.js";
import { makePlateMaterial } from "./materials.js";
import { createPuck, createTray } from "./parts.js";
import { createHmi } from "./hmi.js";

export const TOP_Y = 0.945;
export const STATION_MODULE = 1.08;

/* ------------------------------------------------------------------ */
/* shared pieces                                                       */
/* ------------------------------------------------------------------ */

function pulse(t, period, phase = 0) {
  const p = (((t / period + phase) % 1) + 1) % 1;
  if (p < 0.34) return easeInOut(p / 0.34);
  if (p < 0.52) return 1;
  if (p < 0.84) return 1 - easeInOut((p - 0.52) / 0.32);
  return 0;
}

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
  const PITCH = 0.032;
  const BASE_Y = B + 0.043;
  const TRAVEL = 0.08;
  const OUT_LEFT = -0.4;
  const COUNT = 8;

  // transparent stack tube, open at the bottom so the ejector can reach the puck
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
  magazine.add(cyl(0.07, 0.07, 0.02, mats.graphite, 22, mx, B + 0.02, 0));
  const tubeH = 0.266;
  const tube = new THREE.Mesh(
    new THREE.CylinderGeometry(0.052, 0.052, tubeH, 24, 1, true),
    acrylic
  );
  tube.position.set(mx, B + 0.066 + tubeH / 2, 0);
  magazine.add(tube);
  magazine.add(cyl(0.06, 0.06, 0.014, mats.graphite, 22, mx, B + 0.066 + tubeH, 0));

  const pucks = [];
  for (let i = 0; i < COUNT; i++) {
    const p = createPuck(mats, PUCK_R, PUCK_H);
    p.position.set(mx, BASE_Y + i * PITCH, 0);
    magazine.add(p);
    pucks.push(p);
  }
  g.add(magazine);

  // ejector: pad rests against the bottom puck, stroke clears it from the stack
  const ejector = pneumaticCylinder(mats, { len: 0.14, r: 0.02, stroke: 0.075 });
  ejector.rotation.z = Math.PI / 2;
  ejector.position.set(0.119, BASE_Y, 0);
  g.add(ejector);
  g.add(box(0.06, 0.023, 0.05, mats.alu, 0.1, B + 0.0115, 0));
  g.add(cyl(0.026, 0.026, 0.024, mats.aluDark, 18, 0.07, BASE_Y, 0, { rotZ: Math.PI / 2 }));

  // outfeed rail, level with the magazine base
  g.add(box(0.3, 0.03, 0.14, mats.alu, -0.25, B + 0.015, 0));
  for (const sz of [-1, 1]) {
    g.add(box(0.3, 0.05, 0.008, mats.alu, -0.25, B + 0.055, sz * 0.066));
  }

  // presence sensor on its own post
  const sensor = sensorBeam(mats, mx + 0.02, B + 0.09, 0.09);
  g.add(sensor);
  g.add(box(0.014, 0.065, 0.014, mats.aluDark, mx + 0.02, B + 0.0325, 0.09));

  // pneumatics
  const valve = valveBlock(mats);
  valve.position.set(0.3, B, 0.18);
  g.add(valve);
  g.add(hose([0.3, B + 0.09, 0.16], [0.088, B + 0.062, 0.004], 0.0042, mats.blueTube, 0.04));
  g.add(hose([0.3, B + 0.09, 0.2], [0.01, B + 0.062, -0.004], 0.0042, mats.blueTube, 0.05, -0.02));
  g.add(hose([0.3, B + 0.09, 0.18], [-0.04, B + 0.09, 0.09], 0.0042, mats.blueTube, 0.05, 0.02));
  g.add(hose([0.3, B + 0.05, 0.2], [0.3, B + 0.05, 0.26], 0.0055, mats.blackCable, 0.02));

  const light = stackLight(mats);
  light.group.position.set(0.32, B, -0.2);
  g.add(light.group);
  g.add(nameplate(mats, renderer, code, "DISTRIBUIÇÃO"));

  let mag = pucks.slice();
  let rail = [];

  const ctl = {
    apply(action, p) {
      if (action !== "eject") return;
      const push = easeInOut(clamp01(p / 0.28));
      const drop = easeInOut(clamp01((p - 0.45) / 0.3));
      const retract = easeInOut(clamp01((p - 0.58) / 0.38));
      ejector.setExtension(push * (1 - retract));
      mag.forEach((pk, i) => {
        pk.position.x = mx - (i === 0 ? push * TRAVEL : 0);
        pk.position.y = BASE_Y + i * PITCH - (i > 0 ? drop * PITCH : 0);
      });
      rail.forEach((r) => {
        r.mesh.position.x = r.baseX - push * TRAVEL;
      });
      sensor.children[1].material = p > 0.12 && p < 0.8 ? mats.ledRed : mats.ledOff;
    },
    commit(action) {
      if (action !== "eject" || mag.length === 0) return;
      rail.forEach((r) => {
        r.baseX -= TRAVEL;
        r.mesh.position.x = r.baseX;
        if (r.baseX <= OUT_LEFT) r.mesh.visible = false;
      });
      const out = mag.shift();
      out.position.set(mx - TRAVEL, BASE_Y, 0);
      rail.unshift({ mesh: out, baseX: mx - TRAVEL });
    },
    reset() {
      ejector.setExtension(0);
      rail = [];
      mag = pucks.slice();
      pucks.forEach((pk, i) => {
        pk.visible = true;
        pk.position.set(mx, BASE_Y + i * PITCH, 0);
      });
      sensor.children[1].material = mats.ledRed;
    },
  };

  return { group: g, height: 0.44, ctl, light };
}

function buildTest(mats, renderer, code) {
  const g = new THREE.Group();
  g.add(tslotBase(mats));
  const B = 0.036;

  // press frame
  const px = 0.02;
  for (const sz of [-1, 1]) {
    g.add(box(0.035, 0.46, 0.035, mats.alu, px, B + 0.23, sz * 0.15));
  }
  g.add(box(0.04, 0.04, 0.36, mats.alu, px, B + 0.47, 0));
  g.add(box(0.13, 0.012, 0.1, mats.graphite, px, B + 0.5, 0));

  const press = pneumaticCylinder(mats, { len: 0.27, r: 0.03, stroke: 0.1 });
  press.rotation.x = Math.PI;
  press.position.set(px, B + 0.45, 0);
  g.add(press);
  g.add(cyl(0.045, 0.045, 0.012, mats.aluDark, 20, px, B + 0.443, 0));

  // test nest + part
  g.add(box(0.14, 0.03, 0.14, mats.aluDark, px, B + 0.015, 0));
  const part = createPuck(mats, 0.045, 0.03);
  part.position.set(px, B + 0.045, 0);
  g.add(part);

  // pressure gauge
  const gauge = new THREE.Group();
  gauge.add(cyl(0.046, 0.046, 0.022, mats.offWhite, 20, 0, 0, 0, { rotZ: Math.PI / 2 }));
  gauge.add(cyl(0.008, 0.008, 0.03, mats.aluDark, 8, 0.02, 0, 0, { rotZ: Math.PI / 2 }));
  const face = new THREE.Mesh(new THREE.CircleGeometry(0.038, 20), mats.whitePaint);
  face.rotation.y = -Math.PI / 2;
  face.position.x = -0.012;
  const needle = box(0.003, 0.028, 0.005, mats.redPaint, -0.016, 0.007, 0);
  needle.rotation.x = 0.5;
  gauge.add(face, needle);
  gauge.position.set(px - 0.06, B + 0.37, 0.155);
  gauge.rotation.y = Math.PI / 2;
  g.add(gauge);
  g.add(box(0.018, 0.09, 0.018, mats.aluDark, px - 0.06, B + 0.405, 0.19));
  g.add(box(0.018, 0.018, 0.04, mats.aluDark, px - 0.06, B + 0.39, 0.172));

  const valve = valveBlock(mats);
  valve.position.set(0.3, B, 0.16);
  g.add(valve);
  g.add(hose([0.3, B + 0.09, 0.16], [0.06, B + 0.39, 0.006], 0.0042, mats.blueTube, 0.06));
  g.add(hose([0.3, B + 0.09, 0.2], [0.06, B + 0.24, -0.006], 0.0042, mats.blueTube, 0.075, -0.02));
  g.add(hose([0.04, B + 0.1, 0.22], [0.24, B + 0.08, 0.24], 0.0042, mats.blueTube, 0.035));
  g.add(hose([0.3, B + 0.05, 0.18], [0.3, B + 0.05, 0.25], 0.0055, mats.blackCable, 0.015));

  const sensor = sensorBeam(mats, px + 0.09, B + 0.07, 0.08);
  g.add(sensor);
  g.add(box(0.014, 0.045, 0.014, mats.aluDark, px + 0.09, B + 0.0225, 0.08));

  const light = stackLight(mats);
  light.group.position.set(0.32, B, -0.2);
  g.add(light.group);
  g.add(nameplate(mats, renderer, code, "TESTE"));

  const ctl = {
    apply(action, p) {
      if (action !== "press") return;
      const k = p < 0.4 ? easeInOut(p / 0.4) : p < 0.64 ? 1 : 1 - easeInOut((p - 0.64) / 0.36);
      press.setExtension(k);
      sensor.children[1].material =
        p > 0.3 && p < 0.75 ? mats.ledRed : mats.ledOff;
    },
    reset() {
      press.setExtension(0);
      sensor.children[1].material = mats.ledRed;
    },
  };

  return { group: g, height: 0.52, ctl, light };
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

function buildAssembly(mats, renderer, code) {
  const g = new THREE.Group();
  g.add(tslotBase(mats));
  const B = 0.036;

  // gantry
  for (const sz of [-1, 1]) {
    g.add(box(0.035, 0.5, 0.035, mats.alu, 0.02, B + 0.25, sz * 0.22));
  }
  g.add(box(0.045, 0.045, 0.48, mats.alu, 0.02, B + 0.51, 0));

  // press over the base part, feeder over the insert
  const press = pneumaticCylinder(mats, { len: 0.31, r: 0.028, stroke: 0.12 });
  press.rotation.x = Math.PI;
  press.position.set(0.02, B + 0.478, -0.03);
  g.add(press);
  g.add(cyl(0.04, 0.04, 0.012, mats.aluDark, 20, 0.02, B + 0.483, -0.03));

  const feeder = pneumaticCylinder(mats, { len: 0.31, r: 0.022, stroke: 0.097 });
  feeder.rotation.x = Math.PI;
  feeder.position.set(0.02, B + 0.478, 0.04);
  g.add(feeder);
  g.add(cyl(0.03, 0.03, 0.012, mats.aluDark, 20, 0.02, B + 0.483, 0.04));

  // base nest with two parts
  g.add(box(0.18, 0.02, 0.16, mats.aluDark, 0.02, B + 0.01, 0));
  const p1 = createPuck(mats, 0.04, 0.022);
  p1.position.set(0.02, B + 0.03, -0.03);
  g.add(p1);
  const p2 = createPuck(mats, 0.026, 0.04);
  p2.position.set(0.02, B + 0.045, 0.04);
  g.add(p2);

  // cap magazine
  g.add(box(0.08, 0.09, 0.07, mats.alu, -0.2, B + 0.045, -0.14));
  for (let i = 0; i < 4; i++) {
    g.add(cyl(0.026, 0.026, 0.008, mats.steel, 14, -0.2, B + 0.094 + i * 0.008, -0.14));
  }

  // side pusher, pad level with the insert and clear of the nest
  const pusher = pneumaticCylinder(mats, { len: 0.11, r: 0.02, stroke: 0.05 });
  pusher.rotation.z = Math.PI / 2;
  pusher.position.set(0.16, B + 0.045, 0.04);
  g.add(pusher);
  g.add(box(0.04, 0.025, 0.05, mats.aluDark, 0.14, B + 0.0125, 0.04));
  g.add(cyl(0.024, 0.024, 0.02, mats.aluDark, 16, 0.12, B + 0.045, 0.04, { rotZ: Math.PI / 2 }));

  const valve = valveBlock(mats);
  valve.position.set(0.3, B, -0.2);
  g.add(valve);
  g.add(hose([0.3, B + 0.09, -0.18], [0.06, B + 0.41, -0.03], 0.0042, mats.blueTube, 0.06));
  g.add(hose([0.3, B + 0.09, -0.22], [0.06, B + 0.236, -0.03], 0.0042, mats.blueTube, 0.08, -0.03));
  g.add(hose([0.3, B + 0.1, -0.2], [0.12, B + 0.064, 0.04], 0.0042, mats.blueTube, 0.07, 0.02));
  g.add(hose([0.3, B + 0.05, -0.24], [0.3, B + 0.05, -0.3], 0.0055, mats.blackCable, 0.02));

  const light = stackLight(mats);
  light.group.position.set(0.32, B, 0.2);
  g.add(light.group);
  g.add(nameplate(mats, renderer, code, "MONTAGEM"));

  const seg = (p, a, b) => easeInOut(clamp01((p - a) / (b - a)));
  const ctl = {
    apply(action, p) {
      if (action !== "assemble") return;
      press.setExtension(seg(p, 0, 0.24) * (1 - seg(p, 0.46, 0.62)));
      feeder.setExtension(seg(p, 0.18, 0.4) * (1 - seg(p, 0.5, 0.64)));
      pusher.setExtension(seg(p, 0.64, 0.8) * (1 - seg(p, 0.84, 0.97)));
    },
    reset() {
      press.setExtension(0);
      feeder.setExtension(0);
      pusher.setExtension(0);
    },
  };

  return { group: g, updaters, height: 0.54, ctl, light };
}

function buildStorage(mats, renderer, code) {
  const g = new THREE.Group();
  const updaters = [];
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
      p.position.set(rx - 0.08, B + y + 0.026, 0);
      g.add(p);
      const p2 = createPuck(mats, 0.05, 0.03);
      p2.position.set(rx + 0.06, B + y + 0.026, 0.06);
      g.add(p2);
      storePart = p2;
      storeBaseY = B + y + 0.026;
    }
  });

  const valve = valveBlock(mats);
  valve.position.set(0.3, B, 0.16);
  g.add(valve);
  g.add(hose([0.3, B + 0.09, 0.18], [-0.1, B + 0.2, 0.2], 0.0042, mats.blueTube, 0.06));
  g.add(hose([0.3, B + 0.05, 0.2], [0.3, B + 0.05, 0.26], 0.0055, mats.blackCable, 0.02));

  const light = stackLight(mats);
  light.group.position.set(0.32, B, -0.2);
  g.add(light.group);
  g.add(nameplate(mats, renderer, code, "ARMAZENAGEM"));

  updaters.push((ctx) => {
    light.amber.material = Math.floor(ctx.t * 1.2) % 2 === 0 ? mats.ledAmber : mats.ledOff;
  });

  const ctl = {
    apply(action, p) {
      if (action !== "store" || !storePart) return;
      const k = easeInOut(clamp01(p / 0.72));
      storePart.position.z = 0.28 - k * 0.22;
      storePart.position.y = storeBaseY + Math.sin(k * Math.PI) * 0.06;
      light.amber.material = p < 0.75 ? mats.ledAmber : mats.ledGreen;
    },
    reset() {
      if (storePart) storePart.position.set(0.06, storeBaseY, 0.06);
      light.amber.material = mats.ledAmber;
    },
  };

  return { group: g, updaters, height: 0.5, ctl, light };
}

function buildConveyorStation(mats, renderer, code) {
  const g = new THREE.Group();
  const updaters = [];
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

  const pucks = [];
  for (let i = 0; i < 3; i++) {
    const p = createPuck(mats, 0.032, 0.022);
    p.position.set(0, 0.071, 0);
    conveyor.add(p);
    pucks.push(p);
  }

  g.add(conveyor);

  // sensors / pusher
  const sIn = sensorBeam(mats, -0.19, B + 0.12, -0.3);
  const sOut = sensorBeam(mats, 0.19, B + 0.12, 0.3);
  g.add(sIn, sOut);

  const pusher = pneumaticCylinder(mats, { len: 0.1, r: 0.018, stroke: 0.05 });
  pusher.rotation.z = Math.PI / 2;
  pusher.position.set(0.36, B + 0.09, 0.12);
  g.add(pusher);

  const valve = valveBlock(mats);
  valve.position.set(0.3, B, -0.22);
  g.add(valve);
  g.add(hose([0.3, B + 0.09, -0.2], [0.2, B + 0.1, 0.16], 0.0042, mats.blueTube, 0.06, 0.02));
  g.add(hose([0.3, B + 0.05, -0.24], [0.3, B + 0.05, -0.3], 0.0055, mats.blackCable, 0.02));

  const light = stackLight(mats);
  light.group.position.set(-0.32, B, -0.2);
  g.add(light.group);
  g.add(nameplate(mats, renderer, code, "TRANSFERÊNCIA"));

  updaters.push((ctx) => {
    tex.offset.y = -((ctx.t * 0.55) % 1);
    pucks.forEach((p, i) => {
      const cycle = ((ctx.t * 0.09 + i * 0.33) % 1 + 1) % 1;
      p.position.z = length / 2 - cycle * length;
      p.position.y = 0.071;
    });
    pusher.setExtension(pulse(ctx.t, 4.2, 0.3));
    const blink = Math.floor(ctx.t * 2.4) % 2 === 0;
    sIn.children[1].material = blink ? mats.ledRed : mats.ledOff;
    sOut.children[1].material = !blink ? mats.ledRed : mats.ledOff;
  });

  const ctl = {
    apply(action, p) {
      if (action === "belt") {
        tex.offset.y = -((p * 3.2) % 1);
        pucks.forEach((pk, i) => {
          const cycle = (p * 1.15 + i * 0.33) % 1;
          pk.position.z = length / 2 - cycle * length;
          pk.position.y = 0.071;
        });
        sIn.children[1].material = p > 0.04 ? mats.ledRed : mats.ledOff;
        sOut.children[1].material = p > 0.82 ? mats.ledRed : mats.ledOff;
      } else if (action === "diverge") {
        const k = p < 0.42 ? easeInOut(p / 0.42) : p < 0.66 ? 1 : 1 - easeInOut((p - 0.66) / 0.34);
        pusher.setExtension(k);
      }
    },
    reset() {
      pusher.setExtension(0);
      tex.offset.y = 0;
      sIn.children[1].material = mats.ledRed;
      sOut.children[1].material = mats.ledRed;
    },
  };

  return { group: g, updaters, height: 0.22, ctl, light };
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
    desc: "Retira a peça do magazine de coluna com cilindro de ejeção e a posiciona na saída da estação. Um sensor indutivo confirma a presença do item antes da liberação.",
    tech: ["Cilindro duplo efeito", "Válvula 5/2", "Sensor indutivo", "Magazine tubular transparente"],
  },
  test: {
    name: "Estação de Teste",
    type: "Pneumática",
    desc: "Prensa pneumática que verifica a montagem da peça. O cilindro desce sob pressão controlada e a altura final é conferida por sensores, com leitura no manômetro.",
    tech: ["Prensa pneumática", "Manômetro", "Válvula reguladora", "Sensores de posição"],
  },
  processing: {
    name: "Estação de Processamento",
    type: "Eletropneumática",
    desc: "Mesa rotativa indexada em quatro posições. O atuador gira a mesa em 90° a cada ciclo, permitindo usinar ou inspecionar a peça em pontos distintos.",
    tech: ["Atuador rotativo", "Mesa indexada 4 posições", "Sensores de fim de curso"],
  },
  assembly: {
    name: "Estação de Montagem",
    type: "Eletropneumática",
    desc: "Dois cilindros verticais executam a montagem: um posiciona o inserto e o outro prensa o conjunto, enquanto um terceiro cilindro lateral faz o travamento.",
    tech: ["Cilindros verticais", "Cilindro lateral", "Magazine de insertos"],
  },
  storage: {
    name: "Estação de Armazenagem",
    type: "Pneumática",
    desc: "Estante de três níveis que recebe e organiza as bandejas produzidas. O fluxo é controlado por sensores de nível e pelo CLP da bancada.",
    tech: ["Estante 3 níveis", "Sensores de nível", "Bandejas octogonais"],
  },
  conveyor: {
    name: "Estação de Transferência",
    type: "Sensoriamento",
    desc: "Esteira transportadora que liga as estações da linha. Sensores fotoelétricos detectam a peça na entrada e na saída e acionam o cilindro de desvio.",
    tech: ["Esteira transportadora", "Sensor fotoelétrico", "Cilindro de desvio", "CLP"],
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

    const setSignal = (name) => {
      const lt = built.light;
      if (!lt) return;
      lt.red.material = name === "all" || name === "red" ? mats.ledRed : mats.ledOff;
      lt.amber.material = name === "all" || name === "amber" ? mats.ledAmber : mats.ledOff;
      lt.green.material = name === "all" || name === "green" ? mats.ledGreen : mats.ledOff;
    };

    entry.setProgramMode = (on) => {
      state.programMode = on;
      if (on) {
        hmi?.draw("MODO PROGRAMA", "ready");
      } else {
        built.ctl?.reset?.();
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
        built.ctl?.apply?.(action, p);
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
  const rightTypes = ["DISTRIBUIÇÃO", "TESTE", "PROCESSAMENTO", "MONTAGEM", "ARMAZENAGEM", "TRANSFERÊNCIA"];
  const rightKinds = ["distribution", "test", "processing", "assembly", "storage", "conveyor"];

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
    buildStorage,
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
    built.updaters.forEach((fn) =>
      updaters.push((ctx) => {
        if (!stationState.state.programMode) fn(ctx);
      })
    );
    stations.push(stationState);
  });
  root.add(rightBench);

  /* ---------------- left line ---------------- */
  const leftZ = [-3.0, -1.9, 1.9, 3.0];
  const leftWorldZ = [3.0, 1.9, -1.9, -3.0];
  const leftCodes = ["MPS-07", "MPS-08", "MPS-09", "MPS-10"];
  const leftTypes = ["DISTRIBUIÇÃO", "TESTE", "MONTAGEM", "ARMAZENAGEM"];
  const leftKinds = ["distribution", "test", "assembly", "storage"];
  const leftBuilders = [buildDistribution, buildTest, buildAssembly, buildStorage];

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
    built.updaters.forEach((fn) =>
      updaters.push((ctx) => {
        if (!stationState.state.programMode) fn(ctx);
      })
    );
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
