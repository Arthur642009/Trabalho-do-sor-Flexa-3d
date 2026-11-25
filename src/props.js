import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { box, cyl, addShadows, mergeToMesh, boxGeometryAt } from "./utils.js";
import { isWalkable, moveWithCollision, PLAYER_RADIUS } from "./navigation.js";

/* ------------------------------------------------------------------ */
/* office furniture                                                    */
/* ------------------------------------------------------------------ */

function desk(mats, length = 4, depth = 0.75, height = 0.74) {
  const g = new THREE.Group();
  const top = box(depth, 0.04, length, mats.deskWhite, 0, height, 0);
  g.add(top);

  const legMat = mats.aluDark;
  const bays = Math.max(1, Math.round(length / 1.7));
  for (let i = 0; i <= bays; i++) {
    const z = -length / 2 + 0.12 + (i * (length - 0.24)) / bays;
    for (const sx of [-1, 1]) {
      g.add(box(0.05, height - 0.04, 0.05, legMat, sx * (depth / 2 - 0.08), (height - 0.04) / 2, z));
    }
    g.add(box(depth - 0.1, 0.04, 0.05, legMat, 0, 0.12, z));
  }
  // cable tray
  g.add(box(0.16, 0.04, length - 0.3, mats.aluDark, 0.12, height - 0.09, 0));
  return g;
}

const screenHitMaterial = new THREE.MeshBasicMaterial({ visible: false });
const chairHitMaterial = new THREE.MeshBasicMaterial({ visible: false });

function monitor(mats, w = 0.55, h = 0.33) {
  const g = new THREE.Group();
  const cy = h / 2 + 0.28;

  const housing = new THREE.Mesh(
    new RoundedBoxGeometry(w + 0.018, h + 0.018, 0.026, 3, 0.006),
    mats.monitorBlack
  );
  housing.position.set(0, cy, 0);

  const screen = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.016, h - 0.026), mats.screen);
  screen.position.set(0, cy, 0.0135);

  // larger, invisible click target so the screen is easy to hit from a distance
  const hit = new THREE.Mesh(new THREE.PlaneGeometry(w + 0.16, h + 0.14), screenHitMaterial);
  hit.position.set(0, cy, 0.02);
  hit.visible = false;
  hit.userData.devScreen = true;

  const backHousing = new THREE.Mesh(
    new RoundedBoxGeometry(w * 0.9, h * 0.86, 0.05, 2, 0.012),
    mats.monitorBlack
  );
  backHousing.position.set(0, cy, -0.035);

  const neck = box(0.055, 0.27, 0.045, mats.monitorBlack, 0, 0.135, -0.035);
  const base = new THREE.Mesh(
    new RoundedBoxGeometry(0.3, 0.016, 0.21, 2, 0.006),
    mats.monitorBlack
  );
  base.position.set(0, 0.008, -0.02);

  g.add(housing, screen, hit, backHousing, neck, base);
  return g;
}

function keyboard(mats) {
  const g = new THREE.Group();
  const base = new THREE.Mesh(
    new RoundedBoxGeometry(0.44, 0.016, 0.152, 3, 0.005),
    mats.monitorBlack
  );
  base.position.y = 0.008;
  g.add(base);

  /* 60% layout: five rows of keycaps merged into a single mesh */
  const u = 0.0281;
  const gap = 0.0032;
  const keyH = 0.008;
  const keyD = u - gap;
  const rows = [
    { z: -u * 2, widths: Array(15).fill(1) },
    { z: -u, widths: Array(15).fill(1) },
    { z: 0, widths: [1.75, ...Array(12).fill(1), 1.25] },
    { z: u, widths: [2.1, ...Array(11).fill(1), 1.9] },
    { z: u * 2, widths: [1.25, 1.25, 1.25, 6.25, 1.25, 1.25, 1.25, 1.25] },
  ];

  const parts = [];
  const startX = (-15 * u) / 2;
  for (const row of rows) {
    let x = startX;
    for (const units of row.widths) {
      const kw = units * u - gap;
      parts.push(boxGeometryAt(kw, keyH, keyD, x + kw / 2 + gap / 2, 0.02, row.z));
      x += units * u;
    }
  }
  g.add(mergeToMesh(parts, mats.graphite));
  return g;
}

function mouseProp(mats) {
  const g = new THREE.Group();
  const lower = new THREE.Mesh(
    new RoundedBoxGeometry(0.066, 0.024, 0.11, 3, 0.011),
    mats.blackPlastic
  );
  lower.position.y = 0.012;

  const upper = new THREE.Mesh(
    new RoundedBoxGeometry(0.06, 0.02, 0.098, 3, 0.014),
    mats.blackPlastic
  );
  upper.position.set(0, 0.03, -0.004);

  const seam = box(0.0016, 0.0022, 0.046, mats.rubber, 0, 0.0398, 0.022, {
    cast: false,
  });
  const wheel = cyl(0.0075, 0.0075, 0.008, mats.rubber, 14, 0, 0.039, 0.004, {
    rotZ: Math.PI / 2,
  });

  g.add(lower, upper, seam, wheel);
  return g;
}

const cushion = (w, h, d, mat, radius = 0.028) => {
  const m = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 3, radius), mat);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
};

/* flat spoke between two points, wide face kept horizontal */
function spoke(a, b, w, h, mat) {
  const A = new THREE.Vector3(...a);
  const B = new THREE.Vector3(...b);
  const dir = B.clone().sub(A);
  const len = dir.length();
  const zAxis = dir.normalize();
  const xAxis = new THREE.Vector3(0, 1, 0).cross(zAxis).normalize();
  const yAxis = zAxis.clone().cross(xAxis).normalize();
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, len), mat);
  m.matrixAutoUpdate = false;
  m.matrix.makeBasis(xAxis, yAxis, zAxis).setPosition(A.add(B).multiplyScalar(0.5));
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

function officeChair(mats) {
  const g = new THREE.Group();
  g.name = "office-chair";
  const casters = [];

  /* 5-star base: hub, sloping spokes and casters that touch the floor */
  const hubY = 0.092;
  const reach = 0.3;
  g.add(cyl(0.058, 0.058, 0.052, mats.monitorBlack, 20, 0, hubY, 0));
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 + Math.PI / 5;
    const tip = [Math.cos(a) * reach, 0.07, Math.sin(a) * reach];
    g.add(spoke([0, hubY, 0], tip, 0.052, 0.034, mats.monitorBlack));

    g.add(cyl(0.015, 0.015, 0.03, mats.aluDark, 10, tip[0], 0.055, tip[2]));
    g.add(box(0.048, 0.028, 0.036, mats.monitorBlack, tip[0], 0.04, tip[2]));

    const caster = new THREE.Group();
    caster.position.set(tip[0], 0.033, tip[2]);
    caster.rotation.y = -(a + Math.PI / 2);
    caster.userData.restRotation = caster.rotation.y;
    for (const s of [-1, 1]) {
      const wheel = cyl(0.033, 0.033, 0.014, mats.rubber, 16, s * 0.015, 0, 0, {
        rotZ: Math.PI / 2,
      });
      caster.add(wheel);
    }
    casters.push(caster);
    g.add(caster);
  }

  /* gas cylinder: black sleeve + chrome piston */
  g.add(cyl(0.032, 0.036, 0.15, mats.monitorBlack, 16, 0, 0.165, 0));
  g.add(cyl(0.019, 0.019, 0.18, mats.aluDark, 12, 0, 0.32, 0));

  /* seat: metal plate + rounded cushion */
  g.add(box(0.34, 0.03, 0.3, mats.monitorBlack, 0, 0.398, 0.01));
  const seat = cushion(0.47, 0.085, 0.45, mats.chairBlack);
  seat.position.set(0, 0.445, 0.015);
  g.add(seat);

  /* backrest: support bracket + rounded cushion tilted slightly back */
  g.add(box(0.085, 0.17, 0.05, mats.monitorBlack, 0, 0.475, -0.205, { rotX: 0.22 }));
  const back = new THREE.Group();
  back.position.set(0, 0.49, -0.215);
  back.rotation.x = -0.1;
  const backPad = cushion(0.44, 0.52, 0.085, mats.chairBlack, 0.03);
  backPad.position.set(0, 0.27, -0.005);
  back.add(backPad);
  g.add(back);

  /* armrests */
  for (const sx of [-1, 1]) {
    g.add(box(0.035, 0.16, 0.05, mats.monitorBlack, sx * 0.245, 0.52, 0.02));
    const pad = cushion(0.075, 0.032, 0.26, mats.chairBlack, 0.014);
    pad.position.set(sx * 0.245, 0.61, 0.02);
    g.add(pad);
  }

  const hit = new THREE.Mesh(new THREE.BoxGeometry(0.76, 1.12, 0.76), chairHitMaterial);
  hit.position.y = 0.56;
  hit.visible = false;
  hit.userData.chair = g;
  g.add(hit);
  g.userData.hit = hit;
  g.userData.casters = casters;
  return g;
}

const CHAIR_RADIUS = 0.34;
const CHAIR_LINEAR_DAMPING = 3.1;
const CHAIR_ANGULAR_DAMPING = 4.2;
const CHAIR_MAX_SPEED = 3.2;
const CHAIR_MAX_ANGULAR_SPEED = 3.8;

const shortestAngle = (from, to) => Math.atan2(Math.sin(to - from), Math.cos(to - from));

export class ChairPhysics {
  constructor(chairs) {
    this.chairs = chairs;
    this.stateByChair = new Map();
    this.lastPlayer = null;
    this.states = chairs.map((chair) => {
      const state = {
        chair,
        velocity: new THREE.Vector2(),
        angularVelocity: 0,
        radius: CHAIR_RADIUS,
        occupied: false,
        homePosition: chair.position.clone(),
        homeRotation: chair.rotation.y,
        previousPosition: chair.position.clone(),
      };
      chair.userData.physics = state;
      this.stateByChair.set(chair, state);
      return state;
    });
  }

  getState(chair) {
    return this.stateByChair.get(chair) || null;
  }

  setOccupied(chair, occupied) {
    const state = this.getState(chair);
    if (!state) return;
    state.occupied = occupied;
    if (occupied) {
      state.velocity.set(0, 0);
      state.angularVelocity = 0;
    }
  }

  push(chair, x, z, torque = 0) {
    const state = this.getState(chair);
    if (!state || state.occupied) return false;
    state.velocity.x += x;
    state.velocity.y += z;
    if (state.velocity.length() > CHAIR_MAX_SPEED) state.velocity.setLength(CHAIR_MAX_SPEED);
    state.angularVelocity = THREE.MathUtils.clamp(
      state.angularVelocity + torque,
      -CHAIR_MAX_ANGULAR_SPEED,
      CHAIR_MAX_ANGULAR_SPEED
    );
    return true;
  }

  pushFromCamera(chair, origin, strength = 1.65, point = null) {
    const state = this.getState(chair);
    if (!state || state.occupied) return false;
    const dx = chair.position.x - origin.x;
    const dz = chair.position.z - origin.z;
    const len = Math.hypot(dx, dz);
    const nx = len > 0.001 ? dx / len : 0;
    const nz = len > 0.001 ? dz / len : -1;
    const rx = point ? point.x - chair.position.x : 0;
    const rz = point ? point.z - chair.position.z : 0;
    const torque = (rz * nx - rx * nz) * strength * 2.4;
    return this.push(chair, nx * strength, nz * strength, torque);
  }

  reset() {
    for (const state of this.states) {
      state.chair.position.copy(state.homePosition);
      state.chair.rotation.y = state.homeRotation;
      state.velocity.set(0, 0);
      state.angularVelocity = 0;
      state.occupied = false;
      state.previousPosition.copy(state.homePosition);
      for (const caster of state.chair.userData.casters) caster.rotation.y = caster.userData.restRotation;
    }
    this.lastPlayer = null;
  }

  updatePlayerContact(player, dt) {
    if (!this.lastPlayer) {
      this.lastPlayer = player.clone();
      return;
    }
    const moveX = player.x - this.lastPlayer.x;
    const moveZ = player.z - this.lastPlayer.z;
    this.lastPlayer.copy(player);
    if (Math.hypot(moveX, moveZ) > 0.75) return;
    const playerVelocityX = moveX / dt;
    const playerVelocityZ = moveZ / dt;

    for (const state of this.states) {
      if (state.occupied) continue;
      const chair = state.chair;
      const dx = chair.position.x - player.x;
      const dz = chair.position.z - player.z;
      const minDistance = PLAYER_RADIUS + state.radius + 0.015;
      const distanceSq = dx * dx + dz * dz;
      if (distanceSq >= minDistance * minDistance) continue;

      const distance = Math.sqrt(distanceSq);
      let nx = distance > 0.0001 ? dx / distance : -playerVelocityX;
      let nz = distance > 0.0001 ? dz / distance : -playerVelocityZ;
      if (Math.hypot(nx, nz) < 0.0001) {
        nx = 1;
        nz = 0;
      }
      const normalLength = Math.hypot(nx, nz);
      nx /= normalLength;
      nz /= normalLength;
      const overlap = minDistance - distance;
      moveWithCollision(chair.position, nx * overlap * 0.78, nz * overlap * 0.78, state.radius);
      moveWithCollision(player, -nx * overlap * 0.22, -nz * overlap * 0.22, PLAYER_RADIUS);

      const relativeSpeed = (playerVelocityX - state.velocity.x) * nx + (playerVelocityZ - state.velocity.y) * nz;
      if (relativeSpeed > 0.02) {
        const impulse = Math.min(1.1, relativeSpeed * 0.72 + 0.12);
        state.velocity.x += nx * impulse;
        state.velocity.y += nz * impulse;
        if (state.velocity.length() > CHAIR_MAX_SPEED) state.velocity.setLength(CHAIR_MAX_SPEED);
        const lateral = (playerVelocityX - state.velocity.x) * -nz + (playerVelocityZ - state.velocity.y) * nx;
        state.angularVelocity = THREE.MathUtils.clamp(
          state.angularVelocity + lateral * 0.16,
          -CHAIR_MAX_ANGULAR_SPEED,
          CHAIR_MAX_ANGULAR_SPEED
        );
      }
    }
  }

  collideChairs() {
    for (let i = 0; i < this.states.length; i++) {
      const a = this.states[i];
      for (let j = i + 1; j < this.states.length; j++) {
        const b = this.states[j];
        const dx = b.chair.position.x - a.chair.position.x;
        const dz = b.chair.position.z - a.chair.position.z;
        const minDistance = a.radius + b.radius;
        const distanceSq = dx * dx + dz * dz;
        if (distanceSq >= minDistance * minDistance) continue;

        const distance = Math.sqrt(distanceSq);
        const nx = distance > 0.0001 ? dx / distance : 1;
        const nz = distance > 0.0001 ? dz / distance : 0;
        const inverseA = a.occupied ? 0 : 1;
        const inverseB = b.occupied ? 0 : 1;
        const inverseSum = inverseA + inverseB;
        if (inverseSum === 0) continue;

        const correction = (minDistance - distance + 0.0005) / inverseSum;
        a.chair.position.x -= nx * correction * inverseA;
        a.chair.position.z -= nz * correction * inverseA;
        b.chair.position.x += nx * correction * inverseB;
        b.chair.position.z += nz * correction * inverseB;

        const relativeX = b.velocity.x - a.velocity.x;
        const relativeZ = b.velocity.y - a.velocity.y;
        const normalSpeed = relativeX * nx + relativeZ * nz;
        if (normalSpeed < 0) {
          const impulse = (-(1 + 0.2) * normalSpeed) / inverseSum;
          a.velocity.x -= nx * impulse * inverseA;
          a.velocity.y -= nz * impulse * inverseA;
          b.velocity.x += nx * impulse * inverseB;
          b.velocity.y += nz * impulse * inverseB;
        }
      }
    }
  }

  update(dt, player = null) {
    if (dt <= 0) return;
    if (player) this.updatePlayerContact(player, dt);
    else this.lastPlayer = null;

    const linearDamping = Math.exp(-CHAIR_LINEAR_DAMPING * dt);
    const angularDamping = Math.exp(-CHAIR_ANGULAR_DAMPING * dt);

    for (const state of this.states) {
      state.previousPosition.copy(state.chair.position);
      if (state.occupied) continue;

      state.velocity.multiplyScalar(linearDamping);
      state.angularVelocity *= angularDamping;
      if (state.velocity.lengthSq() < 0.000025) state.velocity.set(0, 0);
      if (Math.abs(state.angularVelocity) < 0.002) state.angularVelocity = 0;

      const dx = state.velocity.x * dt;
      const dz = state.velocity.y * dt;
      const nextX = state.chair.position.x + dx;
      if (isWalkable(nextX, state.chair.position.z, state.radius)) state.chair.position.x = nextX;
      else state.velocity.x *= -0.18;
      const nextZ = state.chair.position.z + dz;
      if (isWalkable(state.chair.position.x, nextZ, state.radius)) state.chair.position.z = nextZ;
      else state.velocity.y *= -0.18;
      state.chair.rotation.y += state.angularVelocity * dt;
    }

    this.collideChairs();

    for (const state of this.states) {
      if (!isWalkable(state.chair.position.x, state.chair.position.z, state.radius)) {
        state.chair.position.copy(state.previousPosition);
        state.velocity.multiplyScalar(0.35);
        state.angularVelocity *= 0.35;
      }
      state.chair.position.y = 0;

      const movedX = state.chair.position.x - state.previousPosition.x;
      const movedZ = state.chair.position.z - state.previousPosition.z;
      const speed = state.velocity.length();
      if (speed > 0.015) {
        const target = Math.atan2(state.velocity.x, state.velocity.y) - state.chair.rotation.y;
        for (const caster of state.chair.userData.casters) {
          caster.rotation.y += shortestAngle(caster.rotation.y, target) * Math.min(1, dt * 12);
        }
      }
      if (Math.hypot(movedX, movedZ) < 0.00001 && speed < 0.02) {
        state.velocity.set(0, 0);
        state.angularVelocity = 0;
      }
    }
  }
}

function pcTower(mats) {
  const g = new THREE.Group();

  const body = new THREE.Mesh(
    new RoundedBoxGeometry(0.21, 0.43, 0.44, 3, 0.008),
    mats.blackPlastic
  );
  body.position.y = 0.227;

  const fascia = new THREE.Mesh(
    new RoundedBoxGeometry(0.014, 0.4, 0.4, 2, 0.005),
    mats.monitorBlack
  );
  fascia.position.set(-0.104, 0.227, 0);
  g.add(body, fascia);

  // front mesh grille
  for (let i = 0; i < 7; i++) {
    g.add(
      box(0.004, 0.24, 0.016, mats.rubber, -0.112, 0.19, -0.15 + i * 0.05, {
        cast: false,
      })
    );
  }

  g.add(cyl(0.011, 0.011, 0.006, mats.darkGrey, 16, -0.112, 0.38, 0.15, { rotZ: Math.PI / 2 }));
  g.add(cyl(0.004, 0.004, 0.007, mats.ledBlue, 10, -0.113, 0.345, 0.15, { rotZ: Math.PI / 2 }));

  // top exhaust + rubber feet
  for (let i = 0; i < 6; i++) {
    g.add(box(0.15, 0.004, 0.008, mats.rubber, 0, 0.443, -0.13 + i * 0.052, { cast: false }));
  }
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      g.add(cyl(0.012, 0.012, 0.012, mats.rubber, 8, sx * 0.075, 0.006, sz * 0.16));
    }
  }
  return g;
}

/* ------------------------------------------------------------------ */
/* scene props                                                         */
/* ------------------------------------------------------------------ */

export function buildProps(mats) {
  const group = new THREE.Group();
  group.name = "props";
  const monitors = [];
  const chairs = [];

  /* ---- office row along the right glazed wall ---- */
  const deskRow = desk(mats, 6.0, 0.75, 0.74);
  deskRow.position.set(6.35, 0, 0.8);
  group.add(deskRow);

  const deskZ = [-1.6, -0.1, 1.4, 2.9];
  deskZ.forEach((z, i) => {
    const mon = monitor(mats);
    mon.position.set(6.32, 0.76, z);
    mon.rotation.y = -Math.PI / 2;
    // camera poses for the first-person sit-down animation
    mon.userData.seat = {
      stand: new THREE.Vector3(5.08, 1.58, z),
      eye: new THREE.Vector3(5.58, 1.16, z),
      look: new THREE.Vector3(6.32, 1.19, z),
    };
    group.add(mon);
    monitors.push(mon);

    const kb = keyboard(mats);
    kb.position.set(6.12, 0.768, z);
    // spacebar must face the operator (chair side), not the monitor
    kb.rotation.y = -Math.PI / 2;
    group.add(kb);

    const ms = mouseProp(mats);
    ms.position.set(6.16, 0.76, z + 0.29);
    ms.rotation.y = Math.PI / 2;
    group.add(ms);

    if (i % 2 === 0) {
      group.add((() => {
        const tower = pcTower(mats);
        tower.position.set(6.32, 0, z + (i === 0 ? -0.35 : 0.35));
        return tower;
      })());
    }
  });

  deskZ.forEach((z, i) => {
    const chair = officeChair(mats);
    chair.name = `office-chair-right-${i + 1}`;
    chair.position.set(5.45, 0, z);
    chair.rotation.y = Math.PI / 2 + (i % 2 ? -0.13 : 0.09);
    group.add(chair);
    chairs.push(chair);
  });

  /* ---- long desk along the left wall ---- */
  const leftDesk = desk(mats, 5.4, 0.7, 0.74);
  leftDesk.position.set(-6.7, 0, 4.2);
  group.add(leftDesk);

  for (const [i, z] of [2.4, 4.1, 5.8].entries()) {
    const mon = monitor(mats);
    mon.position.set(-6.62, 0.76, z);
    mon.rotation.y = Math.PI / 2;
    mon.userData.seat = {
      stand: new THREE.Vector3(-5.55, 1.58, z),
      eye: new THREE.Vector3(-6.08, 1.16, z),
      look: new THREE.Vector3(-6.62, 1.19, z),
    };
    group.add(mon);
    monitors.push(mon);

    const kb = keyboard(mats);
    kb.position.set(-6.47, 0.768, z);
    kb.rotation.y = Math.PI / 2;
    group.add(kb);

    const ms = mouseProp(mats);
    ms.position.set(-6.45, 0.76, z + 0.29);
    ms.rotation.y = -Math.PI / 2;
    group.add(ms);

    const chair = officeChair(mats);
    chair.name = `office-chair-left-${i + 1}`;
    chair.position.set(-5.95, 0, z);
    chair.rotation.y = -Math.PI / 2 + (i % 2 ? 0.12 : -0.09);
    group.add(chair);
    chairs.push(chair);
  }

  /* ---- pallets ---- */
  const pallet = new THREE.Group();
  pallet.position.set(-6.7, 0, 7.9);
  for (let i = 0; i < 3; i++) {
    pallet.add(box(1.1, 0.02, 0.12, mats.cardboard, 0, 0.08 + i * 0.14, -0.4 + i * 0.4 - 0.4));
  }
  pallet.add(box(1.15, 0.02, 1.0, mats.cardboard, 0, 0.03, 0));
  for (let i = 0; i < 4; i++) {
    pallet.add(box(0.09, 0.06, 1.0, mats.graphite, -0.45 + i * 0.3, 0.0, 0));
  }
  for (let i = 0; i < 3; i++) {
    const crate = box(0.5, 0.34, 0.44, mats.cardboard, (i % 2) * 0.52 - 0.26, 0.22 + Math.floor(i / 2) * 0.36, (i % 2) * 0.1);
    pallet.add(crate);
  }
  group.add(pallet);

  const cabinet = new THREE.Group();
  cabinet.position.set(-7.35, 0, 10.4);
  cabinet.add(box(0.5, 1.9, 1.0, mats.offWhite, 0, 0.95, 0));
  cabinet.add(box(0.01, 0.02, 0.44, mats.graphite, 0.255, 1.2, -0.24));
  cabinet.add(box(0.01, 0.02, 0.44, mats.graphite, 0.255, 1.2, 0.24));
  group.add(cabinet);

  /* ---- course display in the automation corner ---- */
  const display = new THREE.Group();
  display.position.set(-5.7, 0, -6.7);
  display.rotation.y = 0.35;

  const boardW = 2.5;
  const boardH = 1.4;
  const boardBottom = 0.92;
  const boardCY = boardBottom + boardH / 2;

  const frameMat = mats.graphite.clone();
  frameMat.roughness = 0.88;
  frameMat.metalness = 0.08;

  display.add(box(2.15, 0.06, 0.46, mats.graphite, 0, 0.03, 0.06));
  for (const sx of [-1, 1]) {
    display.add(box(0.07, boardBottom - 0.06, 0.07, mats.aluDark, sx * 1.02, 0.06 + (boardBottom - 0.06) / 2, -0.1));
  }
  display.add(box(2.04, 0.05, 0.05, mats.aluDark, 0, 0.24, -0.1));

  display.add(box(boardW, boardH + 0.12, 0.035, frameMat, 0, boardCY, -0.035));
  display.add(box(boardW, 0.06, 0.1, frameMat, 0, boardBottom + boardH + 0.03, 0));
  display.add(box(boardW, 0.06, 0.1, frameMat, 0, boardBottom - 0.03, 0));
  for (const sx of [-1, 1]) {
    display.add(box(0.06, boardH + 0.12, 0.1, frameMat, sx * (boardW / 2 - 0.03), boardCY, 0));
  }
  display.add(box(2.42, 0.022, 0.012, mats.senaiRed, 0, boardBottom + boardH + 0.062, 0.052));

  const poster = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.3), mats.courseBoard);
  poster.position.set(0, boardCY, 0.023);
  display.add(poster);
  group.add(display);

  addShadows(group, true, true);

  return { group, monitors, chairs };
}
