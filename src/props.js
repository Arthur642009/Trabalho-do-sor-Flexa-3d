import * as THREE from "three";
import { box, cyl, addShadows } from "./utils.js";

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

function monitor(mats, w = 0.55, h = 0.33) {
  const g = new THREE.Group();
  const bezel = box(w, h, 0.025, mats.monitorBlack, 0, h / 2 + 0.28, 0);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.035, h - 0.045), mats.screen);
  screen.position.set(0, h / 2 + 0.28, 0.02);

  // larger, invisible click target so the screen is easy to hit from a distance
  const hit = new THREE.Mesh(new THREE.PlaneGeometry(w + 0.16, h + 0.14), screenHitMaterial);
  hit.position.set(0, h / 2 + 0.28, 0.03);
  hit.visible = false;
  hit.userData.devScreen = true;

  const neck = box(0.06, 0.28, 0.045, mats.monitorBlack, 0, 0.14, -0.02);
  const base = box(0.28, 0.018, 0.2, mats.monitorBlack, 0, 0.01, 0);
  g.add(bezel, screen, hit, neck, base);
  return g;
}

function keyboard(mats) {
  const g = new THREE.Group();
  g.add(box(0.42, 0.014, 0.14, mats.monitorBlack, 0, 0.007, 0));
  for (let i = 0; i < 5; i++) {
    g.add(box(0.37, 0.004, 0.012, mats.graphite, 0, 0.0165, -0.05 + i * 0.024));
  }
  return g;
}

function officeChair(mats) {
  const g = new THREE.Group();
  const seat = box(0.46, 0.07, 0.44, mats.chairBlack, 0, 0.45, 0);
  const back = box(0.42, 0.5, 0.07, mats.chairBlack, 0, 0.74, -0.2);
  back.rotation.x = -0.12;
  g.add(seat, back);

  const post = cyl(0.035, 0.035, 0.3, mats.aluDark, 12, 0, 0.27, 0);
  g.add(post);
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const arm = box(0.28, 0.03, 0.05, mats.monitorBlack, Math.cos(a) * 0.14, 0.11, Math.sin(a) * 0.14, {
      rotY: -a,
    });
    g.add(arm);
    g.add(cyl(0.035, 0.035, 0.03, mats.rubber, 10, Math.cos(a) * 0.27, 0.035, Math.sin(a) * 0.27));
  }
  return g;
}

function pcTower(mats) {
  const g = new THREE.Group();
  g.add(box(0.19, 0.42, 0.42, mats.monitorBlack, 0, 0.21, 0));
  g.add(box(0.005, 0.36, 0.36, mats.graphite, -0.098, 0.21, 0));
  g.add(cyl(0.05, 0.05, 0.01, mats.aluDark, 16, -0.1, 0.32, 0, { rotZ: Math.PI / 2 }));
  return g;
}

/* ------------------------------------------------------------------ */
/* scene props                                                         */
/* ------------------------------------------------------------------ */

export function buildProps(mats) {
  const group = new THREE.Group();
  group.name = "props";
  const monitors = [];

  /* ---- office row along the right glazed wall ---- */
  const deskRow = desk(mats, 6.0, 0.75, 0.74);
  deskRow.position.set(6.35, 0, 0.8);
  group.add(deskRow);

  const deskZ = [-1.6, -0.1, 1.4, 2.9];
  deskZ.forEach((z, i) => {
    const mon = monitor(mats);
    mon.position.set(6.32, 0.76, z);
    mon.rotation.y = -Math.PI / 2;
    group.add(mon);
    monitors.push(mon);

    const kb = keyboard(mats);
    kb.position.set(6.12, 0.761, z);
    kb.rotation.y = Math.PI / 2;
    group.add(kb);

    group.add(
      (() => {
        const m = new THREE.Mesh(
          new THREE.SphereGeometry(0.03, 10, 8),
          mats.monitorBlack
        );
        m.scale.set(0.6, 0.45, 1);
        m.position.set(6.15, 0.773, z + 0.28);
        return m;
      })()
    );

    if (i % 2 === 0) {
      group.add((() => {
        const tower = pcTower(mats);
        tower.position.set(6.32, 0, z + (i === 0 ? -0.35 : 0.35));
        return tower;
      })());
    }
  });

  const chairZs = [-1.6, 1.4];
  chairZs.forEach((z) => {
    const chair = officeChair(mats);
    chair.position.set(5.45, 0, z);
    chair.rotation.y = Math.PI / 2;
    group.add(chair);
  });

  /* ---- long desk along the left wall ---- */
  const leftDesk = desk(mats, 5.4, 0.7, 0.74);
  leftDesk.position.set(-6.7, 0, 4.2);
  group.add(leftDesk);

  for (const z of [2.4, 4.1, 5.8]) {
    const mon = monitor(mats);
    mon.position.set(-6.62, 0.76, z);
    mon.rotation.y = Math.PI / 2;
    group.add(mon);
    monitors.push(mon);

    const kb = keyboard(mats);
    kb.position.set(-6.47, 0.761, z);
    kb.rotation.y = Math.PI / 2;
    group.add(kb);

    const mouse = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), mats.monitorBlack);
    mouse.scale.set(0.6, 0.45, 1);
    mouse.position.set(-6.44, 0.773, z + 0.28);
    group.add(mouse);

    const chair = officeChair(mats);
    chair.position.set(-5.95, 0, z);
    chair.rotation.y = -Math.PI / 2;
    group.add(chair);
  }

  /* ---- backpacks / pallets ---- */
  const backpack = (x, z, color) => {
    const g = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color, roughness: 0.92 });
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.15, 0.22, 5, 14), bodyMat);
    body.scale.set(1, 1, 0.6);
    body.position.y = 0.27;
    body.castShadow = true;
    g.add(body);
    const pocket = box(0.21, 0.21, 0.06, bodyMat, 0, 0.23, 0.085);
    pocket.castShadow = true;
    g.add(pocket);
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.012, 6, 14), mats.blackFabric);
    handle.rotation.x = Math.PI / 2;
    handle.position.y = 0.555;
    g.add(handle);
    for (const sx of [-1, 1]) {
      g.add(box(0.035, 0.4, 0.02, mats.blackFabric, sx * 0.11, 0.31, -0.08));
    }
    g.position.set(x, 0, z);
    g.rotation.y = 0.5;
    g.rotation.x = 0.06;
    return g;
  };
  group.add(backpack(5.72, 0.75, 0x1e2328));
  group.add(backpack(-4.9, 7.2, 0x2c333a));

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

  return { group, monitors };
}
