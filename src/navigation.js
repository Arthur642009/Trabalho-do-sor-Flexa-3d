import * as THREE from "three";

export const PLAYER_RADIUS = 0.3;
export const EYE_HEIGHT = 1.66;

/* Hall footprint: 16 x 30 m rectangle with 4 m chamfered corners. */
const BOUNDS = { x: 8, z: 15, chamfer: 4 };

/* footprint of every solid prop the player must walk around */
export const BLOCKERS = [
  { x1: 1.55, x2: 2.45, z1: -3.72, z2: 3.72 }, // bancada MPS direita
  { x1: -2.45, x2: -1.55, z1: -4.02, z2: 4.02 }, // bancada MPS esquerda
  { x1: 5.9, x2: 6.8, z1: -2.3, z2: 3.9 }, // mesas da parede direita
  { x1: -7.1, x2: -6.3, z1: 1.4, z2: 7.0 }, // mesa da parede esquerda
  { x1: -3.45, x2: -2.85, z1: -5.15, z2: -4.65 }, // controlador do robô
  { x1: -7.25, x2: -4.55, z1: -6.75, z2: -4.45 }, // célula com cerca
  { x1: -6.3, x2: -4.7, z1: -8.3, z2: -8.1 }, // barreira amarela
  { x1: -6.3, x2: -4.7, z1: -9.9, z2: -9.7 }, // barreira amarela
  { x1: -7.45, x2: -6.85, z1: -9.25, z2: -8.55 }, // carrinho vermelho
  { x1: -7.3, x2: -6.1, z1: 7.35, z2: 8.45 }, // pallet
  { x1: -7.65, x2: -7.05, z1: 9.85, z2: 10.95 }, // armário
  { x1: 3.1, x2: 3.8, z1: -4.6, z2: -4.1 }, // carrinho com monitor
  { x1: 3.95, x2: 4.65, z1: -9.15, z2: -8.45 }, // bobina de cabo
  { x1: 6.85, x2: 7.45, z1: -10.05, z2: -9.35 }, // baldes
];

export function isWalkable(x, z, radius = PLAYER_RADIUS) {
  const ax = Math.abs(x);
  const az = Math.abs(z);
  if (ax > BOUNDS.x - radius || az > BOUNDS.z - radius) return false;
  if (az > BOUNDS.z - BOUNDS.chamfer) {
    const limit = BOUNDS.x + BOUNDS.z - BOUNDS.chamfer - radius * Math.SQRT2;
    if (ax + az > limit) return false;
  }
  for (let i = 0; i < BLOCKERS.length; i++) {
    const b = BLOCKERS[i];
    if (
      x > b.x1 - radius &&
      x < b.x2 + radius &&
      z > b.z1 - radius &&
      z < b.z2 + radius
    ) {
      return false;
    }
  }
  return true;
}

/** Axis-separated collision so the player slides along walls and benches. */
export function moveWithCollision(position, dx, dz, radius = PLAYER_RADIUS) {
  const nx = position.x + dx;
  if (isWalkable(nx, position.z, radius)) position.x = nx;
  const nz = position.z + dz;
  if (isWalkable(position.x, nz, radius)) position.z = nz;
}

/** Rotates the rig about the player's head, keeping them in place. */
export function yawAboutHead(rig, camera, angle) {
  const head = camera.getWorldPosition(new THREE.Vector3());
  const offset = rig.position.clone().sub(head).applyAxisAngle(new THREE.Vector3(0, 1, 0), angle);
  rig.position.copy(head).add(offset);
  rig.position.y = 0;
  rig.rotation.y += angle;
}
