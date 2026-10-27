import * as THREE from "three";

export const TRAY_SIZE = { w: 0.2, d: 0.112 };

const TRAY_CHAMFER = 0.026;
const TRAY_RADIUS = 0.004;
const TRAY_INNER_W = 0.66;
const TRAY_INNER_D = 0.65;

/** Elongated octagonal platter: rectangle with cut corners and softened vertices. */
function platterShape(w, d, chamfer, radius) {
  const hw = w / 2;
  const hd = d / 2;
  const c = Math.min(chamfer, hw * 0.8, hd * 0.8);
  const corners = [
    [hw, hd - c],
    [hw - c, hd],
    [-hw + c, hd],
    [-hw, hd - c],
    [-hw, -hd + c],
    [-hw + c, -hd],
    [hw - c, -hd],
    [hw, -hd + c],
  ];
  const entry = [];
  const exit = [];
  for (let i = 0; i < 8; i++) {
    const p = corners[(i + 7) % 8];
    const v = corners[i];
    const q = corners[(i + 1) % 8];
    const a = Math.hypot(p[0] - v[0], p[1] - v[1]);
    const b = Math.hypot(q[0] - v[0], q[1] - v[1]);
    const r = Math.min(radius, a / 2, b / 2);
    entry.push([v[0] + ((p[0] - v[0]) / a) * r, v[1] + ((p[1] - v[1]) / a) * r]);
    exit.push([v[0] + ((q[0] - v[0]) / b) * r, v[1] + ((q[1] - v[1]) / b) * r]);
  }

  const shape = new THREE.Shape();
  shape.moveTo(exit[0][0], exit[0][1]);
  for (let i = 1; i < 8; i++) {
    shape.lineTo(entry[i][0], entry[i][1]);
    shape.quadraticCurveTo(corners[i][0], corners[i][1], exit[i][0], exit[i][1]);
  }
  shape.lineTo(entry[0][0], entry[0][1]);
  shape.quadraticCurveTo(corners[0][0], corners[0][1], exit[0][0], exit[0][1]);
  shape.closePath();
  return shape;
}

let trayGeoCache = null;

function buildTrayGeometry() {
  const base = new THREE.ExtrudeGeometry(
    platterShape(TRAY_SIZE.w, TRAY_SIZE.d, TRAY_CHAMFER, TRAY_RADIUS),
    {
      depth: 0.0055,
      bevelEnabled: true,
      bevelThickness: 0.0008,
      bevelSize: 0.0008,
      bevelSegments: 1,
      curveSegments: 4,
    }
  );
  base.rotateX(-Math.PI / 2);
  base.translate(0, -0.0055, 0);

  const outer = platterShape(TRAY_SIZE.w, TRAY_SIZE.d, TRAY_CHAMFER, TRAY_RADIUS);
  const inner = platterShape(
    TRAY_SIZE.w * TRAY_INNER_W,
    TRAY_SIZE.d * TRAY_INNER_D,
    TRAY_CHAMFER * 0.8,
    TRAY_RADIUS * 0.75
  );
  outer.holes.push(inner);

  const rim = new THREE.ExtrudeGeometry(outer, {
    depth: 0.0075,
    bevelEnabled: true,
    bevelThickness: 0.0012,
    bevelSize: 0.003,
    bevelSegments: 3,
    curveSegments: 4,
  });
  rim.rotateX(-Math.PI / 2);
  rim.translate(0, -0.002, 0);

  return { rim, base };
}

/** Polished steel "salva": elongated octagonal platter with a wide rim and recessed centre. */
export function createTray(mats) {
  if (!trayGeoCache) trayGeoCache = buildTrayGeometry();
  const g = new THREE.Group();
  const rim = new THREE.Mesh(trayGeoCache.rim, mats.traySteel);
  rim.castShadow = true;
  rim.receiveShadow = true;
  const base = new THREE.Mesh(trayGeoCache.base, mats.traySteel);
  base.castShadow = true;
  base.receiveShadow = true;
  g.add(rim, base);
  g.userData.tray = true;
  return g;
}

let palletGeoCache = null;

function buildPalletGeometry() {
  const W = 0.6;
  const D = 0.64;
  const holeR = 0.036;
  const shape = new THREE.Shape();
  const r = 0.02;
  shape.moveTo(-W / 2 + r, -D / 2);
  shape.lineTo(W / 2 - r, -D / 2);
  shape.quadraticCurveTo(W / 2, -D / 2, W / 2, -D / 2 + r);
  shape.lineTo(W / 2, D / 2 - r);
  shape.quadraticCurveTo(W / 2, D / 2, W / 2 - r, D / 2);
  shape.lineTo(-W / 2 + r, D / 2);
  shape.quadraticCurveTo(-W / 2, D / 2, -W / 2, D / 2 - r);
  shape.lineTo(-W / 2, -D / 2 + r);
  shape.quadraticCurveTo(-W / 2, -D / 2, -W / 2 + r, -D / 2);

  const slots = [];
  for (const x of [-0.115, 0.115]) {
    for (const z of [-0.18, -0.06, 0.06, 0.18]) {
      const hole = new THREE.Path();
      hole.absarc(x, z, holeR, 0, Math.PI * 2, true);
      shape.holes.push(hole);
      slots.push(new THREE.Vector3(x, 0, z));
    }
  }

  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: 0.016,
    bevelEnabled: true,
    bevelThickness: 0.0015,
    bevelSize: 0.0015,
    bevelSegments: 1,
    curveSegments: 20,
  });
  geo.translate(0, 0, -0.008);
  geo.rotateX(-Math.PI / 2);

  return { geo, slots };
}

/** White 2x4 pallet board with two pink locating pegs. */
export function createPallet(mats) {
  if (!palletGeoCache) palletGeoCache = buildPalletGeometry();
  const { geo, slots } = palletGeoCache;

  const group = new THREE.Group();
  const board = new THREE.Mesh(geo, mats.offWhite);
  board.castShadow = true;
  board.receiveShadow = true;
  group.add(board);

  const holeMat = new THREE.MeshStandardMaterial({ color: 0x23262a, roughness: 0.9 });
  for (const s of slots) {
    const disc = new THREE.Mesh(new THREE.CircleGeometry(0.035, 20), holeMat);
    disc.rotation.x = -Math.PI / 2;
    disc.position.set(s.x, 0.0005, s.z);
    group.add(disc);
  }

  // steel base feet
  for (const sx of [-0.2, 0.2]) {
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.006, 0.58), mats.aluDark);
    foot.position.set(sx, -0.014, 0);
    group.add(foot);
  }

  const pegSlots = [slots[0], slots[7]];
  for (const s of pegSlots) {
    const peg = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.026, 0.13, 14), mats.pinkPlastic);
    peg.position.set(s.x, 0.072, s.z);
    peg.castShadow = true;
    group.add(peg);
    const tip = new THREE.Mesh(
      new THREE.CylinderGeometry(0.027, 0.027, 0.012, 14),
      mats.pinkPlastic
    );
    tip.position.set(s.x, 0.142, s.z);
    group.add(tip);
  }

  const usable = slots.filter((s) => !pegSlots.includes(s));
  return { group, slots, usable };
}

/** Small steel puck, used along the line. */
export function createPuck(mats, r = 0.028, h = 0.018) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 20), mats.steel);
  body.castShadow = true;
  body.receiveShadow = true;
  g.add(body);
  const top = new THREE.Mesh(
    new THREE.CylinderGeometry(r * 0.62, r * 0.55, 0.006, 16),
    mats.pinkPlastic
  );
  top.position.y = h / 2 + 0.003;
  g.add(top);
  return g;
}

export function createTrayStack(mats, count = 5, spacing = 0.017) {
  const group = new THREE.Group();
  const trays = [];
  for (let i = 0; i < count; i++) {
    const t = createTray(mats);
    t.position.y = i * spacing;
    group.add(t);
    trays.push(t);
  }
  return { group, trays, spacing };
}
