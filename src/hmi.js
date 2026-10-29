import * as THREE from "three";
import { box } from "./utils.js";
import { hmiScreenTexture } from "./textures.js";

/** Operator touchscreen on a short arm, default: bench panel facing the aisle. */
export function createHmi(mats, renderer, code, label, z = 0, opts = {}) {
  const { x = -0.452, y = 1.035, rotY = -Math.PI / 2, tag = "HMI · BLOCOS", rows } = opts;

  const root = new THREE.Group();
  root.position.set(x, y, z);
  root.rotation.y = rotY;

  const tilt = new THREE.Group();
  tilt.rotation.x = -0.24;
  root.add(tilt);

  root.add(box(0.026, 0.1, 0.026, mats.blackPlastic, 0, -0.128, -0.024));
  root.add(box(0.05, 0.05, 0.014, mats.aluDark, 0, -0.172, -0.016));

  tilt.add(box(0.3, 0.215, 0.024, mats.graphite, 0, 0, -0.002));
  tilt.add(box(0.262, 0.178, 0.008, mats.blackPlastic, 0, 0, 0.007));

  const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const { texture, draw } = hmiScreenTexture(aniso, code, label, { tag, rows });
  const screenMat = new THREE.MeshStandardMaterial({
    map: texture,
    emissive: 0xffffff,
    emissiveMap: texture,
    emissiveIntensity: 0.9,
    roughness: 0.28,
    metalness: 0.08,
  });
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.25, 0.157), screenMat);
  screen.position.z = 0.0115;
  tilt.add(screen);

  const hit = new THREE.Mesh(
    new THREE.PlaneGeometry(0.33, 0.25),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })
  );
  hit.position.z = 0.03;
  tilt.add(hit);

  // status LED strip under the screen
  const led = new THREE.Mesh(
    new THREE.PlaneGeometry(0.06, 0.008),
    new THREE.MeshStandardMaterial({ color: 0x1d2126, emissive: 0x4b93ff, emissiveIntensity: 1.6 })
  );
  led.position.set(0.108, -0.096, 0.014);
  tilt.add(led);

  return { root, screen, hit, draw, code };
}
