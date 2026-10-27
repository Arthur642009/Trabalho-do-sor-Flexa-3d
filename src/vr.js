import * as THREE from "three";
import { moveWithCollision, isWalkable, PLAYER_RADIUS, EYE_HEIGHT, yawAboutHead } from "./navigation.js";

const UP = new THREE.Vector3(0, 1, 0);
const DEAD_ZONE = 0.18;
const WALK_SPEED = 1.55;
const SNAP_ANGLE = Math.PI / 6;
const START = { x: 0, z: 12.3 };

const dead = (v) => {
  const a = Math.abs(v);
  if (a < DEAD_ZONE) return 0;
  return Math.sign(v) * ((a - DEAD_ZONE) / (1 - DEAD_ZONE));
};

export function createVR({ renderer, scene, camera, room }) {
  renderer.xr.enabled = true;
  renderer.xr.setReferenceSpaceType("local-floor");

  const rig = new THREE.Group();
  rig.name = "xr-player";
  scene.add(rig);

  const controllerMat = new THREE.MeshStandardMaterial({
    color: 0x2b3138,
    roughness: 0.5,
    metalness: 0.35,
  });

  const rayMat = new THREE.LineBasicMaterial({
    color: 0x8ad4ff,
    transparent: true,
    opacity: 0.9,
  });
  const rayGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(),
    new THREE.Vector3(),
  ]);
  const ray = new THREE.Line(rayGeo, rayMat);
  ray.frustumCulled = false;
  ray.visible = false;
  scene.add(ray);

  const markerMat = new THREE.MeshBasicMaterial({
    color: 0x4bd6ff,
    transparent: true,
    opacity: 0.85,
    side: THREE.DoubleSide,
    depthTest: false,
    depthWrite: false,
  });
  const marker = new THREE.Mesh(new THREE.RingGeometry(0.16, 0.21, 44), markerMat);
  marker.rotation.x = -Math.PI / 2;
  marker.position.y = 0.015;
  marker.renderOrder = 30;
  marker.visible = false;
  scene.add(marker);

  const controllers = [];
  const rigHelpers = [];

  for (let i = 0; i < 2; i++) {
    const controller = renderer.xr.getController(i);
    const grip = renderer.xr.getControllerGrip(i);
    grip.add(
      new THREE.Mesh(new THREE.CapsuleGeometry(0.021, 0.075, 4, 10), controllerMat)
    );
    grip.children[0].rotation.x = Math.PI / 2;
    grip.children[0].position.z = -0.015;

    controller.visible = false;
    grip.visible = false;
    rig.add(controller, grip);
    controllers.push(controller);
    rigHelpers.push(controller, grip);

    controller.addEventListener("selectstart", () => beginAim(controller));
    controller.addEventListener("selectend", () => {
      if (aimController === controller) endAim();
    });
  }

  let active = false;
  let aimController = null;
  let aimValid = false;
  let snapLatch = false;
  let onChange = null;

  const _origin = new THREE.Vector3();
  const _dir = new THREE.Vector3();
  const _quat = new THREE.Quaternion();
  const _head = new THREE.Vector3();
  const _end = new THREE.Vector3();
  const _fwd = new THREE.Vector3();
  const _right = new THREE.Vector3();
  const aimPoint = new THREE.Vector3();

  function setMarker(visible) {
    marker.visible = visible;
  }

  function beginAim(controller) {
    if (!active) return;
    aimController = controller;
    ray.visible = true;
    updateAim();
  }

  function endAim() {
    if (aimController && aimValid) teleport(aimPoint);
    aimController = null;
    aimValid = false;
    ray.visible = false;
    setMarker(false);
  }

  function updateAim() {
    if (!aimController) return;

    aimController.getWorldPosition(_origin);
    aimController.getWorldQuaternion(_quat);
    _dir.set(0, 0, -1).applyQuaternion(_quat);

    aimValid = false;
    _end.copy(_origin).addScaledVector(_dir, 2.4);

    if (_dir.y < -0.08) {
      const t = -_origin.y / _dir.y;
      if (t > 0.2 && t < 9) {
        aimPoint.copy(_origin).addScaledVector(_dir, t);
        _end.copy(aimPoint);

        camera.getWorldPosition(_head);
        const ox = _head.x - rig.position.x;
        const oz = _head.z - rig.position.z;
        aimValid = isWalkable(aimPoint.x - ox, aimPoint.z - oz, PLAYER_RADIUS);
      }
    }

    const attr = ray.geometry.attributes.position;
    attr.setXYZ(0, _origin.x, _origin.y, _origin.z);
    attr.setXYZ(1, _end.x, _end.y, _end.z);
    attr.needsUpdate = true;
    ray.geometry.computeBoundingSphere();

    const show = aimValid || _end.y < 0.05;
    setMarker(show);
    marker.position.set(aimPoint.x, 0.015, aimPoint.z);
    markerMat.color.setHex(aimValid ? 0x4bd6ff : 0xff5a4a);
  }

  function teleport(target) {
    camera.getWorldPosition(_head);
    const ox = _head.x - rig.position.x;
    const oz = _head.z - rig.position.z;
    const nx = target.x - ox;
    const nz = target.z - oz;
    if (isWalkable(nx, nz, PLAYER_RADIUS)) rig.position.set(nx, 0, nz);
  }

  function stickAxes(source) {
    const gp = source?.gamepad;
    if (!gp) return null;
    const axes = gp.axes;
    if (!axes || axes.length < 2) return null;
    return axes.length >= 4
      ? { x: axes[2] || 0, y: axes[3] || 0 }
      : { x: axes[0] || 0, y: axes[1] || 0 };
  }

  function moveWithStick(source, dt) {
    const stick = stickAxes(source);
    if (!stick) return;
    const x = dead(stick.x);
    const y = dead(stick.y);
    if (!x && !y) return;

    camera.getWorldDirection(_fwd);
    _fwd.y = 0;
    if (_fwd.lengthSq() < 1e-6) return;
    _fwd.normalize();
    _right.crossVectors(_fwd, UP).normalize();

    const step = WALK_SPEED * dt;
    moveWithCollision(
      rig.position,
      (_fwd.x * -y + _right.x * x) * step,
      (_fwd.z * -y + _right.z * x) * step
    );
  }

  function turnWithStick(source) {
    const stick = stickAxes(source);
    if (!stick) return;
    const x = stick.x;
    if (!snapLatch && Math.abs(x) > 0.7) {
      yawAboutHead(rig, camera, x > 0 ? -SNAP_ANGLE : SNAP_ANGLE);
      snapLatch = true;
    }
    if (Math.abs(x) < 0.3) snapLatch = false;
  }

  function update(dt) {
    if (!active) return;
    if (aimController) updateAim();

    const session = renderer.xr.getSession();
    if (!session) return;
    const sources = session.inputSources;
    let moveSource = null;
    let turnSource = null;
    for (const s of sources) {
      if (s.handedness === "left") moveSource = s;
      else if (s.handedness === "right") turnSource = s;
    }
    if (!moveSource) moveSource = sources[0] || null;
    if (!turnSource) turnSource = sources[1] || null;

    moveWithStick(moveSource, dt);
    if (turnSource && turnSource !== moveSource) turnWithStick(turnSource);
  }

  function handleStart() {
    active = true;
    snapLatch = false;
    aimController = null;
    ray.visible = false;
    setMarker(false);

    rig.position.set(START.x, 0, START.z);
    rig.rotation.set(0, 0, 0);
    rig.add(camera);
    camera.position.set(0, 0, 0);
    camera.quaternion.identity();

    rigHelpers.forEach((h) => (h.visible = true));
    renderer.xr.setFoveation(1);
    renderer.shadowMap.enabled = false;
    room.setShadows?.(false);
    onChange?.(true);
  }

  function handleEnd() {
    active = false;
    aimController = null;
    aimValid = false;
    ray.visible = false;
    setMarker(false);
    rigHelpers.forEach((h) => (h.visible = false));

    rig.remove(camera);
    scene.add(camera);
    camera.position.set(START.x, EYE_HEIGHT, START.z);
    camera.lookAt(0.15, 1.5, -2.6);

    renderer.shadowMap.enabled = true;
    room.setShadows?.(true);
    onChange?.(false);
  }

  renderer.xr.addEventListener("sessionstart", handleStart);
  renderer.xr.addEventListener("sessionend", handleEnd);

  async function isSupported() {
    if (!navigator.xr?.isSessionSupported) return false;
    try {
      return await navigator.xr.isSessionSupported("immersive-vr");
    } catch {
      return false;
    }
  }

  async function enter() {
    if (active) return;
    if (!navigator.xr) throw new Error("WebXR não disponível neste navegador");
    const session = await navigator.xr.requestSession("immersive-vr", {
      optionalFeatures: ["local-floor", "bounded-floor"],
    });
    try {
      await renderer.xr.setSession(session);
    } catch (err) {
      await session.end().catch(() => {});
      throw err;
    }
  }

  async function exit() {
    const session = renderer.xr.getSession();
    if (session) await session.end();
  }

  return {
    enter,
    exit,
    update,
    isSupported,
    onChange(fn) {
      onChange = fn;
    },
    get active() {
      return active;
    },
  };
}
