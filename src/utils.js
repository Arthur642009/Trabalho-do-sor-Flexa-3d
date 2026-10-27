import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

const GEO = {
  box: new THREE.BoxGeometry(1, 1, 1),
};

export function box(w, h, d, mat, x = 0, y = 0, z = 0, opts = {}) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  m.castShadow = opts.cast ?? true;
  m.receiveShadow = opts.receive ?? true;
  if (opts.rotY) m.rotation.y = opts.rotY;
  if (opts.rotX) m.rotation.x = opts.rotX;
  if (opts.rotZ) m.rotation.z = opts.rotZ;
  return m;
}

export function cyl(rt, rb, h, mat, seg = 20, x = 0, y = 0, z = 0, opts = {}) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat);
  m.position.set(x, y, z);
  m.castShadow = opts.cast ?? true;
  m.receiveShadow = opts.receive ?? true;
  if (opts.rotX) m.rotation.x = opts.rotX;
  if (opts.rotY) m.rotation.y = opts.rotY;
  if (opts.rotZ) m.rotation.z = opts.rotZ;
  return m;
}

export function tube(points, radius, mat, tubularSegments = 26, radialSegments = 8) {
  const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)));
  const geo = new THREE.TubeGeometry(curve, tubularSegments, radius, radialSegments, false);
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = false;
  m.receiveShadow = false;
  return m;
}

/** Pneumatic hose with a natural sag between two points. */
export function hose(a, b, radius = 0.0042, mat, sag = 0.06, bulge = 0.03) {
  const A = new THREE.Vector3(...a);
  const B = new THREE.Vector3(...b);
  const mid = A.clone().add(B).multiplyScalar(0.5);
  mid.y -= sag;
  mid.x += bulge;
  const curve = new THREE.QuadraticBezierCurve3(A, mid, B);
  const geo = new THREE.TubeGeometry(curve, 22, radius, 7, false);
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = false;
  return m;
}

export function beamBetween(a, b, radius, mat, seg = 8) {
  const A = new THREE.Vector3(...a);
  const B = new THREE.Vector3(...b);
  const dir = B.clone().sub(A);
  const len = dir.length();
  const m = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, len, seg), mat);
  m.position.copy(A).add(dir.clone().multiplyScalar(0.5));
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

export function addShadows(obj, cast = true, receive = true) {
  obj.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = cast;
      o.receiveShadow = receive;
    }
  });
  return obj;
}

export function mergeToMesh(geometries, material) {
  const merged = mergeGeometries(geometries, false);
  const m = new THREE.Mesh(merged, material);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

export function boxGeometryAt(w, h, d, x, y, z, rotY = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (rotY) g.rotateY(rotY);
  g.translate(x, y, z);
  return g;
}

export function cylinderGeometryAt(r, h, x, y, z, rotX = 0, rotZ = 0, seg = 8) {
  const g = new THREE.CylinderGeometry(r, r, h, seg);
  if (rotX) g.rotateX(rotX);
  if (rotZ) g.rotateZ(rotZ);
  g.translate(x, y, z);
  return g;
}

export function tubeGeometryBetween(a, b, radius, radialSeg = 6) {
  const A = new THREE.Vector3(...a);
  const B = new THREE.Vector3(...b);
  const dir = B.clone().sub(A);
  const len = dir.length();
  const g = new THREE.CylinderGeometry(radius, radius, len, radialSeg);
  const q = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    dir.clone().normalize()
  );
  const m = new THREE.Matrix4().makeRotationFromQuaternion(q);
  m.setPosition(A.clone().add(dir.multiplyScalar(0.5)));
  g.applyMatrix4(m);
  return g;
}

/** Flat L-shaped aluminium profile with two T-slot grooves drawn on the top. */
export function profileBar(len, size, mats, axis = "z") {
  const g = new THREE.Group();
  const body = box(size, size, len, mats.alu);
  g.add(body);
  if (axis === "x") body.rotation.y = Math.PI / 2;

  const slotMat = mats.graphite;
  for (const off of [-0.29, 0.29]) {
    const slot = box(size * 0.36, 0.004, len, slotMat, 0, 0, 0);
    slot.position.set(off * size, size / 2, 0);
    if (axis === "x") {
      slot.rotation.y = Math.PI / 2;
      slot.position.set(0, size / 2, off * size);
    }
    slot.castShadow = false;
    g.add(slot);
  }
  return g;
}

export function roundedRectShape(w, h, r) {
  const s = new THREE.Shape();
  s.moveTo(-w / 2 + r, -h / 2);
  s.lineTo(w / 2 - r, -h / 2);
  s.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
  s.lineTo(w / 2, h / 2 - r);
  s.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
  s.lineTo(-w / 2 + r, h / 2);
  s.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
  s.lineTo(-w / 2, -h / 2 + r);
  s.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
  return s;
}

export const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const easeOut = (t) => 1 - Math.pow(1 - t, 3);
export const clamp01 = (t) => Math.max(0, Math.min(1, t));
export const lerp = (a, b, t) => a + (b - a) * t;

export { GEO };
