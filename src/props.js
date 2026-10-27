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
  for (const sz of [-1, 1]) {
    const z = sz * (length / 2 - 0.12);
    for (const sx of [-1, 1]) {
      g.add(box(0.05, height - 0.04, 0.05, legMat, sx * (depth / 2 - 0.08), (height - 0.04) / 2, z));
    }
    g.add(box(depth - 0.1, 0.04, 0.05, legMat, 0, 0.12, z));
  }
  // cable tray
  g.add(box(0.16, 0.04, length - 0.3, mats.aluDark, 0.12, height - 0.09, 0));
  return g;
}

function monitor(mats, w = 0.55, h = 0.33) {
  const g = new THREE.Group();
  const bezel = box(w, h, 0.025, mats.monitorBlack, 0, h / 2 + 0.28, 0);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.035, h - 0.045), mats.screen);
  screen.position.set(0, h / 2 + 0.28, 0.02);
  const neck = box(0.06, 0.2, 0.045, mats.monitorBlack, 0, 0.18, -0.02);
  const base = box(0.26, 0.018, 0.18, mats.monitorBlack, 0, 0.01, 0);
  g.add(bezel, screen, neck, base);
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

  /* ---- office row along the right glazed wall ---- */
  const deskRow = desk(mats, 6.0, 0.75, 0.74);
  deskRow.position.set(6.35, 0, 0.8);
  group.add(deskRow);

  const deskZ = [-1.6, -0.1, 1.4, 2.9];
  deskZ.forEach((z, i) => {
    const mon = monitor(mats);
    mon.position.set(6.32, 0.74, z);
    mon.rotation.y = -Math.PI / 2;
    group.add(mon);

    const kb = keyboard(mats);
    kb.position.set(5.99, 0.74, z);
    kb.rotation.y = 0;
    group.add(kb);

    group.add(
      (() => {
        const m = new THREE.Mesh(
          new THREE.SphereGeometry(0.03, 10, 8),
          mats.monitorBlack
        );
        m.scale.set(0.6, 0.45, 1);
        m.position.set(5.99, 0.755, z + 0.15);
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
    mon.position.set(-6.62, 0.74, z);
    mon.rotation.y = Math.PI / 2;
    group.add(mon);

    const kb = keyboard(mats);
    kb.position.set(-6.3, 0.74, z);
    kb.rotation.y = Math.PI / 2;
    group.add(kb);

    const mouse = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), mats.monitorBlack);
    mouse.scale.set(0.6, 0.45, 1);
    mouse.position.set(-6.3, 0.755, z + 0.15);
    group.add(mouse);

    const chair = officeChair(mats);
    chair.position.set(-5.95, 0, z);
    chair.rotation.y = -Math.PI / 2;
    group.add(chair);
  }

  /* ---- rolling witness monitor by the line ---- */
  const cart = new THREE.Group();
  cart.position.set(3.45, 0, -4.35);
  cart.add(box(0.55, 0.04, 0.42, mats.aluDark, 0, 0.98, 0));
  cart.add(cyl(0.03, 0.03, 0.95, mats.aluDark, 12, 0, 0.49, -0.05));
  for (const sx of [-1, 1]) {
    cart.add(
      cyl(0.035, 0.035, 0.03, mats.rubber, 10, sx * 0.19, 0.035, 0, { rotZ: Math.PI / 2 })
    );
  }
  const cartMon = monitor(mats, 0.6, 0.36);
  cartMon.position.set(0, 0.99, 0.02);
  cartMon.rotation.y = -Math.PI / 2;
  cart.add(cartMon);
  const cartKb = keyboard(mats);
  cartKb.position.set(0.05, 1.0, 0.26);
  cart.add(cartKb);
  group.add(cart);

  /* ---- backpacks / buckets / trolley / pallets ---- */
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
  group.add(backpack(-5.55, 7.15, 0x2c333a));

  const bucket = (x, z, color) => {
    const g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.6 });
    g.add(cyl(0.15, 0.12, 0.34, mat, 18, 0, 0.17, 0));
    g.add(
      new THREE.Mesh(new THREE.TorusGeometry(0.152, 0.013, 8, 20), mat).rotateX(Math.PI / 2)
    );
    g.children[1].position.y = 0.34;
    g.position.set(x, 0, z);
    return g;
  };
  group.add(bucket(7.15, -9.7, 0x2f9e63));
  group.add(bucket(6.55, -10.3, 0xe8b400));

  const trolley = new THREE.Group();
  trolley.position.set(-7.15, 0, -8.9);
  trolley.add(box(0.52, 0.92, 0.68, mats.senaiRed, 0, 0.5, 0));
  for (let i = 0; i < 5; i++) {
    trolley.add(box(0.005, 0.015, 0.6, mats.graphite, 0.262, 0.2 + i * 0.16, 0));
  }
  trolley.add(box(0.6, 0.03, 0.74, mats.blackPlastic, 0, 1.0, 0));
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      trolley.add(cyl(0.045, 0.045, 0.03, mats.rubber, 10, sx * 0.2, 0.035, sz * 0.27, {
        rotZ: Math.PI / 2,
      }));
    }
  }
  group.add(trolley);

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

  /* ---- cable reels / misc ---- */
  const reel = new THREE.Group();
  reel.position.set(4.3, 0, -8.8);
  reel.add(cyl(0.28, 0.28, 0.08, mats.aluminum || mats.alu, 20, 0, 0.28, 0, { rotZ: 0 }));
  group.add(reel);

  addShadows(group, true, true);

  return { group };
}
