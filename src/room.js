import * as THREE from "three";
import {
  box,
  cyl,
  mergeToMesh,
  boxGeometryAt,
  cylinderGeometryAt,
  tubeGeometryBetween,
} from "./utils.js";

/* Elongated octagon: 16 x 30 m rectangle with 4 m chamfered corners. */
export const ROOM = { w: 16, l: 30, h: 6.4, chamfer: 4 };

/* Brick box with world-scaled UVs so bricks keep real proportions. */
function brickBox(w, h, d, mats, x, y, z) {
  const geo = new THREE.BoxGeometry(w, h, d);
  const uv = geo.attributes.uv;
  const rx = Math.max(0.4, w / 2.4);
  const ry = Math.max(0.4, h / 1.2);
  for (let i = 0; i < uv.count; i++) {
    uv.setXY(i, uv.getX(i) * rx, uv.getY(i) * ry);
  }
  const m = new THREE.Mesh(geo, mats.brick);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

function octagonShape() {
  const hw = ROOM.w / 2;
  const hl = ROOM.l / 2;
  const c = ROOM.chamfer;
  const pts = [
    [hw, -hl + c],
    [hw, hl - c],
    [hw - c, hl],
    [-hw + c, hl],
    [-hw, hl - c],
    [-hw, -hl + c],
    [-hw + c, -hl],
    [hw - c, -hl],
  ];
  const shape = new THREE.Shape();
  shape.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]);
  shape.closePath();
  return shape;
}

/* Shape is centred on the plan, so the same outline serves floor and ceiling.
   UVs are normalised to the bounding rectangle and scaled in metres. */
function octagonGeometry() {
  const geo = new THREE.ShapeGeometry(octagonShape());
  const pos = geo.attributes.position;
  const uv = geo.attributes.uv;
  for (let i = 0; i < pos.count; i++) {
    uv.setXY(
      i,
      (pos.getX(i) + ROOM.w / 2) / ROOM.w,
      (pos.getY(i) + ROOM.l / 2) / ROOM.l
    );
  }
  uv.needsUpdate = true;
  return geo;
}

function buildFloor(group, mats) {
  const geo = octagonGeometry();
  mats.floor.map.repeat.set(ROOM.w / 6, ROOM.l / 6);
  mats.floor.roughnessMap.repeat.set(ROOM.w / 6, ROOM.l / 6);
  mats.floor.side = THREE.DoubleSide;
  const floor = new THREE.Mesh(geo, mats.floor);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  group.add(floor);

  // painted safety line along the aisle
  const lineMat = new THREE.MeshStandardMaterial({ color: 0xd8b23a, roughness: 0.8 });
  for (const x of [-3.05, 3.05]) {
    const line = new THREE.Mesh(new THREE.PlaneGeometry(0.07, 24), lineMat);
    line.rotation.x = -Math.PI / 2;
    line.position.set(x, 0.004, 0);
    line.receiveShadow = true;
    group.add(line);
  }
}

function buildCeiling(group, mats) {
  mats.ceiling.side = THREE.DoubleSide;
  const ceil = new THREE.Mesh(octagonGeometry(), mats.ceiling);
  ceil.rotation.x = Math.PI / 2;
  ceil.position.y = ROOM.h;
  group.add(ceil);

  // skylight strip
  const sky = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 22), mats.sky);
  sky.rotation.x = Math.PI / 2;
  sky.position.set(0, ROOM.h - 0.04, 0);
  group.add(sky);

  const frameGeos = [];
  for (let z = -11; z <= 11; z += 2) {
    frameGeos.push(boxGeometryAt(4.8, 0.09, 0.09, 0, ROOM.h - 0.05, z));
  }
  frameGeos.push(boxGeometryAt(0.09, 0.09, 22, -2.35, ROOM.h - 0.05, 0));
  frameGeos.push(boxGeometryAt(0.09, 0.09, 22, 2.35, ROOM.h - 0.05, 0));
  const frame = mergeToMesh(frameGeos, mats.aluDark);
  frame.castShadow = false;
  group.add(frame);
}

function buildTrusses(group, mats) {
  const members = [];
  const frames = [-11, -5.5, 0, 5.5, 11];
  const yLow = 5.45;
  const yHigh = 6.05;

  for (const z of frames) {
    members.push(tubeGeometryBetween([-8, yHigh, z], [8, yHigh, z], 0.038));
    members.push(tubeGeometryBetween([-8, yLow, z], [8, yLow, z], 0.034));
    for (let x = -8; x < 8; x += 2) {
      const up = (x + 2) % 4 === 0;
      members.push(
        tubeGeometryBetween(
          [x, up ? yLow : yHigh, z],
          [x + 2, up ? yHigh : yLow, z],
          0.024
        )
      );
    }
    for (let x = -8; x <= 8; x += 4) {
      members.push(tubeGeometryBetween([x, yLow, z], [x, yHigh, z], 0.024));
    }
  }

  for (const x of [-8, -4, 0, 4, 8]) {
    members.push(tubeGeometryBetween([x, yHigh, -11], [x, yHigh, 11], 0.032));
  }
  for (const x of [-8, 8]) {
    members.push(tubeGeometryBetween([x, yLow, -11], [x, yLow, 11], 0.03));
  }

  const truss = mergeToMesh(members, mats.lightGrey);
  truss.castShadow = false;
  truss.receiveShadow = true;
  group.add(truss);

  // hangers over the benches
  const hangers = [];
  for (const x of [-2.2, 2.2]) {
    hangers.push(boxGeometryAt(0.09, 0.09, 20, x, 4.9, 0));
    for (let z = -10; z <= 10; z += 4) {
      hangers.push(cylinderGeometryAt(0.015, 0.55, x, 5.18, z, 0, 0, 6));
    }
  }
  const hangMesh = mergeToMesh(hangers, mats.lightGrey);
  hangMesh.castShadow = false;
  group.add(hangMesh);
}

function buildFixtures(group, mats) {
  const housings = [];
  const emitters = [];
  const rows = [-5.4, -1.8, 1.8, 5.4];

  for (const x of rows) {
    for (let z = -10.5; z <= 10.5; z += 3.5) {
      housings.push(boxGeometryAt(1.42, 0.075, 0.16, x, 5.2, z));
      emitters.push(boxGeometryAt(1.3, 0.012, 0.11, x, 5.155, z));
      housings.push(cylinderGeometryAt(0.012, 0.34, x, 5.4, z, 0, 0, 6));
    }
  }

  const housingMesh = mergeToMesh(housings, mats.lightGrey);
  housingMesh.castShadow = false;
  group.add(housingMesh);

  const emitMesh = mergeToMesh(emitters, mats.lamp);
  emitMesh.castShadow = false;
  group.add(emitMesh);

  return emitMesh;
}

function buildSideWall(group, mats, sign) {
  const x = sign * 8;
  const zLen = 22;
  const piers = [-10.8, -5.5, 0, 5.5, 10.8];

  // dark backdrop suggesting adjacent rooms / corridor
  const backMat = new THREE.MeshStandardMaterial({ color: 0x141a1f, roughness: 0.95 });
  const back = new THREE.Mesh(new THREE.PlaneGeometry(zLen, ROOM.h), backMat);
  back.position.set(sign * 8.7, ROOM.h / 2, 0);
  back.rotation.y = sign > 0 ? -Math.PI / 2 : Math.PI / 2;
  group.add(back);

  // faint lit windows in the corridor
  const glowMat = new THREE.MeshStandardMaterial({
    color: 0x2b3238,
    emissive: 0x8fa7bb,
    emissiveIntensity: 0.16,
    roughness: 0.9,
  });
  for (let z = -9; z <= 9; z += 6) {
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 2.4), glowMat);
    glow.position.set(sign * 8.65, 2.2, z);
    glow.rotation.y = sign > 0 ? -Math.PI / 2 : Math.PI / 2;
    group.add(glow);
  }

  // glass wall
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(zLen, 4.28), mats.glass);
  glass.position.set(x, 2.3, 0);
  glass.rotation.y = sign > 0 ? -Math.PI / 2 : Math.PI / 2;
  glass.castShadow = false;
  group.add(glass);

  const frames = [];
  for (const z of piers) {
    frames.push(boxGeometryAt(0.42, 6.4, 0.42, x, 3.2, z));
  }

  // mullions / rails
  for (let z = -10.6; z <= 10.6; z += 1.6) {
    frames.push(boxGeometryAt(0.07, 4.3, 0.09, x, 2.3, z));
  }
  frames.push(boxGeometryAt(0.1, 0.12, zLen, x, 4.45, 0));
  frames.push(boxGeometryAt(0.1, 0.16, zLen, x, 0.16, 0));
  const frameMesh = mergeToMesh(frames, mats.alu);
  frameMesh.castShadow = false;
  group.add(frameMesh);

  // sill / lower wall
  const sill = box(0.22, 0.16, zLen, mats.whitePaint, x, 0.08, 0);
  sill.castShadow = false;
  group.add(sill);

  // frosted band along the lower glazing
  const frost = new THREE.Mesh(
    new THREE.PlaneGeometry(zLen - 0.3, 0.85),
    new THREE.MeshPhysicalMaterial({
      color: 0xdfe7ea,
      roughness: 0.78,
      metalness: 0,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
  );
  frost.position.set(sign * 7.96, 0.63, 0);
  frost.rotation.y = sign > 0 ? -Math.PI / 2 : Math.PI / 2;
  group.add(frost);

  // brick piers
  for (const z of piers) {
    group.add(brickBox(0.44, 4.42, 0.46, mats, x, 2.21, z));
  }

  // hazard sleeve on the pier by the work area
  const sleeve = box(0.47, 0.52, 0.49, mats.hazard, x, 0.26, 0);
  sleeve.castShadow = false;
  group.add(sleeve);

  // concrete fascia above the glazing
  const fascia = box(0.4, 1.95, zLen, mats.concrete, x, 5.42, 0);
  fascia.castShadow = false;
  group.add(fascia);
}

/* 45° corner walls: brick with a tall window onto the corridor. */
function buildChamferWall(group, mats, sx, sz) {
  const p1 = [sx * 8, sz * 11];
  const p2 = [sx * 4, sz * 15];
  const dx = p2[0] - p1[0];
  const dz = p2[1] - p1[1];
  const len = Math.hypot(dx, dz);

  const g = new THREE.Group();
  g.position.set((p1[0] + p2[0]) / 2, 0, (p1[1] + p2[1]) / 2);
  g.rotation.y = Math.atan2(-dz, dx);
  group.add(g);

  // local +Z points into the hall for two corners, out for the other two
  const inward = sx * sz > 0 ? 1 : -1;

  const winW = 2.5;
  const winH = 2.5;
  const winY = 1.0 + winH / 2;
  const pierW = (len - winW) / 2 - 0.02;
  const pierX = winW / 2 + pierW / 2;

  // brick masses around the opening
  g.add(brickBox(len, 1.0, 0.3, mats, 0, 0.5, 0));
  g.add(brickBox(len, ROOM.h - 3.5, 0.3, mats, 0, (ROOM.h + 3.5) / 2, 0));
  for (const s of [-1, 1]) {
    g.add(brickBox(pierW, winH, 0.3, mats, s * pierX, winY, 0));
  }

  // corridor backdrop behind the glazing
  const backMat = new THREE.MeshStandardMaterial({ color: 0x141a1f, roughness: 0.95 });
  const back = new THREE.Mesh(new THREE.PlaneGeometry(len + 1.4, ROOM.h), backMat);
  back.position.set(0, ROOM.h / 2, -inward * 1.02);
  back.rotation.y = inward > 0 ? 0 : Math.PI;
  g.add(back);

  const glowMat = new THREE.MeshStandardMaterial({
    color: 0x2b3238,
    emissive: 0x8fa7bb,
    emissiveIntensity: 0.14,
    roughness: 0.9,
  });
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(winW + 0.1, winH), glowMat);
  glow.position.set(0, winY, -inward * 0.62);
  glow.rotation.y = inward > 0 ? 0 : Math.PI;
  g.add(glow);

  // glazing + aluminium frame
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(winW, winH), mats.glass);
  glass.position.set(0, winY, inward * 0.14);
  glass.rotation.y = inward > 0 ? 0 : Math.PI;
  glass.castShadow = false;
  g.add(glass);

  const zf = inward * 0.17;
  const frame = mergeToMesh(
    [
      boxGeometryAt(0.1, winH + 0.16, 0.1, -winW / 2 - 0.03, winY, zf),
      boxGeometryAt(0.1, winH + 0.16, 0.1, winW / 2 + 0.03, winY, zf),
      boxGeometryAt(winW + 0.16, 0.1, 0.1, 0, winY + winH / 2 + 0.03, zf),
      boxGeometryAt(winW + 0.16, 0.1, 0.1, 0, winY - winH / 2 - 0.03, zf),
      boxGeometryAt(0.06, winH, 0.08, 0, winY, zf),
    ],
    mats.alu
  );
  frame.castShadow = false;
  g.add(frame);

  // white sill + skirting
  const sill = box(winW + 0.34, 0.08, 0.4, mats.whitePaint, 0, 0.99, inward * 0.15, {
    cast: false,
  });
  g.add(sill);

  const skirtMat = new THREE.MeshStandardMaterial({ color: 0x35393d, roughness: 0.8 });
  const skirt = box(len - 0.2, 0.1, 0.06, skirtMat, 0, 0.05, inward * 0.18, {
    cast: false,
  });
  g.add(skirt);
}

function buildFarWall(group, mats) {
  const z = -15;
  const glassX = -2.1;
  const doorX = 2.1;

  // brick bands / piers across the 8 m end wall
  group.add(brickBox(0.8, ROOM.h, 0.3, mats, 0, ROOM.h / 2, z));
  for (const s of [-1, 1]) {
    group.add(brickBox(0.24, ROOM.h, 0.34, mats, s * 3.88, ROOM.h / 2, z));
    group.add(brickBox(3.4, 2.9, 0.3, mats, s * 2.1, 4.95, z));
  }

  // glazed band with SENAI branding
  const brand = new THREE.Mesh(new THREE.PlaneGeometry(3.1, 2.05), mats.brand);
  brand.position.set(glassX, 1.85, z + 0.06);
  group.add(brand);

  const glass = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 3.5), mats.glassClear);
  glass.position.set(glassX, 1.85, z + 0.2);
  group.add(glass);

  const frameGeos = [
    boxGeometryAt(3.6, 0.12, 0.16, glassX, 3.62, z + 0.05),
    boxGeometryAt(3.6, 0.12, 0.16, glassX, 0.1, z + 0.05),
    boxGeometryAt(0.12, 3.7, 0.16, glassX - 1.75, 1.85, z + 0.05),
    boxGeometryAt(0.12, 3.7, 0.16, glassX + 1.75, 1.85, z + 0.05),
    boxGeometryAt(0.07, 3.6, 0.1, glassX, 1.85, z + 0.05),
  ];
  const frames = mergeToMesh(frameGeos, mats.alu);
  frames.castShadow = false;
  group.add(frames);

  // corridor behind the branding
  const corridor = new THREE.Mesh(
    new THREE.PlaneGeometry(4.2, 3.8),
    new THREE.MeshStandardMaterial({ color: 0x2a3138, roughness: 0.95 })
  );
  corridor.position.set(glassX, 1.9, z - 1.1);
  group.add(corridor);

  // roller door
  const doorMat = new THREE.MeshStandardMaterial({ color: 0x5b6168, roughness: 0.62, metalness: 0.4 });
  const door = box(3.4, 3.5, 0.1, doorMat, doorX, 1.78, z + 0.16);
  group.add(door);
  for (let y = 0.3; y < 3.5; y += 0.32) {
    const slat = box(3.4, 0.025, 0.02, mats.graphite, doorX, y, z + 0.23);
    slat.castShadow = false;
    group.add(slat);
  }
  const doorFrame = mergeToMesh(
    [
      boxGeometryAt(0.18, 3.8, 0.28, doorX - 1.75, 1.9, z + 0.1),
      boxGeometryAt(0.18, 3.8, 0.28, doorX + 1.75, 1.9, z + 0.1),
      boxGeometryAt(3.68, 0.2, 0.28, doorX, 3.78, z + 0.1),
    ],
    mats.aluDark
  );
  group.add(doorFrame);

  // wall-mounted TV with line dashboard
  const tv = box(1.2, 0.7, 0.06, mats.monitorBlack, 0, 4.6, -14.78);
  group.add(tv);
  const tvScreen = new THREE.Mesh(new THREE.PlaneGeometry(1.12, 0.62), mats.screen);
  tvScreen.position.set(0, 4.6, -14.74);
  group.add(tvScreen);

  // clock
  const clock = cyl(0.19, 0.19, 0.05, mats.whitePaint, 24, -3.25, 4.6, -14.75, {
    rotX: Math.PI / 2,
  });
  group.add(clock);
  const clockRim = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.012, 8, 24), mats.graphite);
  clockRim.position.set(-3.25, 4.6, -14.72);
  group.add(clockRim);
}

function buildNearWall(group, mats) {
  const z = 15;
  group.add(brickBox(2.7, ROOM.h, 0.3, mats, -2.65, ROOM.h / 2, z));
  group.add(brickBox(2.7, ROOM.h, 0.3, mats, 2.65, ROOM.h / 2, z));
  group.add(brickBox(2.8, 2.9, 0.3, mats, 0, 4.95, z));

  // whiteboard + electrical panels on the left brick mass
  const board = box(1.4, 1.0, 0.03, mats.whitePaint, -3.1, 1.75, z - 0.17);
  board.castShadow = false;
  group.add(board);
  const boardFrame = [
    boxGeometryAt(1.48, 0.04, 0.045, -3.1, 2.26, z - 0.17),
    boxGeometryAt(1.48, 0.04, 0.045, -3.1, 1.24, z - 0.17),
    boxGeometryAt(0.04, 1.02, 0.045, -3.82, 1.75, z - 0.17),
    boxGeometryAt(0.04, 1.02, 0.045, -2.38, 1.75, z - 0.17),
  ];
  const boardMesh = mergeToMesh(boardFrame, mats.alu);
  boardMesh.castShadow = false;
  group.add(boardMesh);
  group.add(box(0.45, 0.03, 0.06, mats.alu, -3.1, 1.22, z - 0.2));

  for (const px of [-2.0, -1.55]) {
    group.add(box(0.38, 0.5, 0.09, mats.lightGrey, px, 1.85, z - 0.19));
    group.add(box(0.3, 0.4, 0.012, mats.darkGrey, px, 1.86, z - 0.245));
    group.add(box(0.03, 0.03, 0.012, mats.ledGreen, px + 0.12, 1.7, z - 0.252));
  }

  // glazed entrance doors
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.7), mats.glassClear);
  glass.position.set(0, 1.35, z - 0.02);
  group.add(glass);

  const frames = mergeToMesh(
    [
      boxGeometryAt(0.13, 2.9, 0.2, -1.34, 1.45, z - 0.05),
      boxGeometryAt(0.13, 2.9, 0.2, 1.34, 1.45, z - 0.05),
      boxGeometryAt(0.09, 2.85, 0.16, 0, 1.43, z - 0.05),
      boxGeometryAt(2.8, 0.13, 0.2, 0, 2.9, z - 0.05),
      boxGeometryAt(2.7, 0.08, 0.1, 0, 0.04, z - 0.05),
      boxGeometryAt(0.9, 0.06, 0.06, -0.38, 1.05, z - 0.12),
      boxGeometryAt(0.9, 0.06, 0.06, 0.38, 1.05, z - 0.12),
    ],
    mats.alu
  );
  frames.castShadow = false;
  group.add(frames);

  const sign = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 0.38), mats.exit);
  sign.position.set(0, 3.15, z - 0.18);
  sign.rotation.y = Math.PI;
  group.add(sign);

  const exterior = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 4),
    new THREE.MeshStandardMaterial({ color: 0x9db6c4, roughness: 1 })
  );
  exterior.position.set(0, 2, z + 1.4);
  exterior.rotation.y = Math.PI;
  group.add(exterior);
}

function buildMachineCell(group, mats) {
  // fenced automation cell, echoing the plexiglass enclosure in the photos
  const cx = -5.9;
  const cz = -5.6;
  const W = 2.6;
  const D = 2.2;
  const H = 2.25;

  const posts = [];
  const rails = [];
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      posts.push(boxGeometryAt(0.09, H, 0.09, cx + (sx * W) / 2, H / 2, cz + (sz * D) / 2));
    }
  }
  for (const y of [0.12, H - 0.08]) {
    rails.push(boxGeometryAt(W, 0.08, 0.08, cx, y, cz - D / 2));
    rails.push(boxGeometryAt(W, 0.08, 0.08, cx, y, cz + D / 2));
    rails.push(boxGeometryAt(0.08, 0.08, D, cx - W / 2, y, cz));
    rails.push(boxGeometryAt(0.08, 0.08, D, cx + W / 2, y, cz));
  }
  const frame = mergeToMesh([...posts, ...rails], mats.whitePaint);
  group.add(frame);

  const glassMat = mats.glassClear;
  const panels = [
    [W - 0.06, H - 0.2, 0, H / 2, -D / 2],
    [W - 0.06, H - 0.2, 0, H / 2, D / 2],
    [D - 0.06, H - 0.2, -W / 2, H / 2, 0],
    [D - 0.06, H - 0.2, W / 2, H / 2, 0],
  ];
  panels.forEach(([pw, ph, px, py, pz], i) => {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(pw, ph), glassMat);
    p.position.set(cx + px, py, cz + pz);
    if (i < 2) p.rotation.y = 0;
    else p.rotation.y = Math.PI / 2;
    group.add(p);
  });

  // machine inside
  const base = box(1.5, 0.75, 1.0, mats.offWhite, cx, 0.375, cz);
  group.add(base);
  const body = box(1.25, 0.55, 0.8, mats.lightGrey, cx, 1.02, cz + 0.06);
  group.add(body);
  const head = box(0.7, 0.4, 0.5, mats.graphite, cx - 0.1, 1.42, cz + 0.1);
  group.add(head);
  const cover = box(0.72, 0.02, 0.52, mats.bluePlastic, cx - 0.1, 1.63, cz + 0.1);
  group.add(cover);
  const hmi = box(0.22, 0.16, 0.05, mats.monitorBlack, cx + 0.45, 1.2, cz + 0.47);
  group.add(hmi);
  const hmiScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.19, 0.13), mats.screen);
  hmiScreen.position.set(cx + 0.45, 1.2, cz + 0.5);
  group.add(hmiScreen);
  const stack = cyl(0.035, 0.035, 0.16, mats.ledGreen, 12, cx + 0.6, 1.5, cz - 0.3);
  group.add(stack);

  // yellow safety barriers near the cell
  const fenceMat = mats.yellow;
  [cz - 2.6, cz - 4.2].forEach((z) => {
    const fx = cx + 0.4;
    const postA = box(0.08, 1.35, 0.08, fenceMat, fx - 0.75, 0.675, z);
    const postB = box(0.08, 1.35, 0.08, fenceMat, fx + 0.75, 0.675, z);
    group.add(postA, postB);
    for (const y of [0.55, 1.05]) {
      group.add(box(1.5, 0.06, 0.05, fenceMat, fx, y, z));
    }
    const hazardStrip = box(1.5, 0.22, 0.03, mats.hazard, fx, 0.28, z);
    hazardStrip.castShadow = false;
    group.add(hazardStrip);
  });
}

function buildProps(group, roof, mats) {
  // compressed-air main lines along the ceiling
  for (const x of [-6.6, 6.9]) {
    const pipe = cyl(0.032, 0.032, 22, mats.blueTube, 12, x, 4.92, 0, {
      rotX: Math.PI / 2,
    });
    pipe.castShadow = false;
    roof.add(pipe);
    for (let z = -9; z <= 9; z += 6) {
      roof.add(cyl(0.055, 0.055, 0.06, mats.aluDark, 12, x, 4.92, z, { rotX: Math.PI / 2 }));
    }
  }

  // cable trays over the lines
  for (const x of [-2.2, 2.2]) {
    const tray = box(0.32, 0.07, 25, mats.aluDark, x, 4.55, 0);
    tray.castShadow = false;
    roof.add(tray);
    roof.add(box(0.34, 0.02, 25, mats.blackCable, x, 4.585, 0, { cast: false }));
  }

  // wall-mounted fire extinguisher on the right glazed wall
  const ext = cyl(0.075, 0.075, 0.5, mats.senaiRed, 14, 7.8, 1.0, -6.4);
  group.add(ext);
  group.add(box(0.12, 0.55, 0.22, mats.redPaint, 7.94, 1.15, -6.4));

  // notice boards / signage on the right wall
  const greenSign = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.3), mats.exit);
  greenSign.position.set(7.94, 2.9, -8.5);
  greenSign.rotation.y = -Math.PI / 2;
  group.add(greenSign);

  // skirting along the glazed walls
  const skirtMat = new THREE.MeshStandardMaterial({ color: 0x35393d, roughness: 0.8 });
  group.add(box(0.06, 0.1, 21.4, skirtMat, -7.94, 0.05, 0, { cast: false }));
  group.add(box(0.06, 0.1, 21.4, skirtMat, 7.94, 0.05, 0, { cast: false }));
}

export function buildRoom(scene, mats) {
  const group = new THREE.Group();
  group.name = "hall";

  const roof = new THREE.Group();
  roof.name = "roof";
  group.add(roof);

  buildFloor(group, mats);
  buildCeiling(roof, mats);
  buildTrusses(roof, mats);
  const fixtures = buildFixtures(roof, mats);
  buildSideWall(group, mats, -1);
  buildSideWall(group, mats, 1);
  buildChamferWall(group, mats, 1, 1);
  buildChamferWall(group, mats, 1, -1);
  buildChamferWall(group, mats, -1, 1);
  buildChamferWall(group, mats, -1, -1);
  buildFarWall(group, mats);
  buildNearWall(group, mats);
  buildMachineCell(group, mats);
  buildProps(group, roof, mats);

  scene.add(group);

  /* lighting rig -------------------------------------------------- */
  const hemi = new THREE.HemisphereLight(0xd9e6ff, 0x22262a, 0.75);
  scene.add(hemi);

  const ambient = new THREE.AmbientLight(0xffffff, 0.28);
  scene.add(ambient);

  const sun = new THREE.DirectionalLight(0xfff4e2, 2.5);
  sun.position.set(5, 16, 7);
  sun.target.position.set(0, 0, 0);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -13;
  sun.shadow.camera.right = 13;
  sun.shadow.camera.top = 17;
  sun.shadow.camera.bottom = -17;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 45;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.035;
  scene.add(sun);
  scene.add(sun.target);

  const fill1 = new THREE.DirectionalLight(0xbfd7ff, 0.45);
  fill1.position.set(-9, 8, -6);
  scene.add(fill1);

  const points = [];
  const pointSpecs = [
    [0, 4.7, -3, 0xfff1dd, 55, 22],
    [0, 4.7, 6, 0xeaf2ff, 45, 20],
    [-6.4, 3.6, -7.5, 0xffd7a3, 18, 10],
    [6.5, 3.6, -2, 0xdfeeff, 26, 12],
  ];
  for (const [x, y, z, color, intensity, distance] of pointSpecs) {
    const p = new THREE.PointLight(color, intensity, distance, 2);
    p.position.set(x, y, z);
    scene.add(p);
    points.push(p);
  }

  const lampMats = [mats.lamp, mats.lampCool];

  return {
    group,
    roof,
    fixtures,
    setRoofVisible(on) {
      roof.visible = on;
    },
    setShadows(on) {
      sun.castShadow = on;
    },
    setLights(on) {
      sun.intensity = on ? 2.5 : 0.45;
      hemi.intensity = on ? 0.75 : 0.22;
      ambient.intensity = on ? 0.28 : 0.12;
      fill1.intensity = on ? 0.45 : 0.12;
      points.forEach((p) => {
        p.userData.base = p.userData.base ?? p.intensity;
        p.intensity = on ? p.userData.base : p.userData.base * 0.2;
      });
      lampMats.forEach((m) => {
        m.userData.base = m.userData.base ?? m.emissiveIntensity;
        m.emissiveIntensity = on ? m.userData.base : 0.15;
      });
    },
  };
}
