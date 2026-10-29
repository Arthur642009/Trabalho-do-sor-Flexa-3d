import * as THREE from "three";
import { moveWithCollision, EYE_HEIGHT } from "./navigation.js";

const WALK_SPEED = 1.9;
const RUN_SPEED = 3.4;
const LOOK_SENS = 0.0024;
const PITCH_LIMIT = 1.2;
const START = { x: 0, z: 12.3 };

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

export function createWalk({ camera, dom, controls, onStop, onInspect }) {
  let active = false;
  let locked = false;
  let yaw = 0;
  let pitch = 0;
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  const keys = new Set();

  function requestLock() {
    try {
      const pending = dom.requestPointerLock?.();
      if (pending && typeof pending.catch === "function") pending.catch(() => {});
    } catch {
      // pointer lock unavailable: drag-to-look still works
    }
  }

  function start(pose) {
    if (active) return;
    active = true;
    controls.enabled = false;
    keys.clear();
    camera.rotation.order = "YXZ";
    if (pose) {
      camera.position.set(pose.x, EYE_HEIGHT, pose.z);
      yaw = pose.yaw;
      pitch = clamp(pose.pitch ?? 0, -PITCH_LIMIT, PITCH_LIMIT);
      camera.rotation.set(pitch, yaw, 0, "YXZ");
    } else {
      camera.position.set(START.x, EYE_HEIGHT, START.z);
      yaw = 0;
      pitch = 0;
      camera.rotation.set(0, 0, 0);
    }
    document.body.classList.add("walk-mode");
    requestLock();
  }

  function stop() {
    if (!active) return;
    active = false;
    keys.clear();
    dragging = false;
    document.body.classList.remove("walk-mode");
    document.body.classList.remove("fps-look");
    controls.enabled = true;

    // hand the camera over to the orbit controls facing where we were looking
    const dir = camera.getWorldDirection(new THREE.Vector3());
    controls.target.copy(camera.position).addScaledVector(dir, 3);
    controls.update();

    if (document.pointerLockElement === dom) document.exitPointerLock();
    onStop?.();
  }

  document.addEventListener("pointerlockchange", () => {
    locked = document.pointerLockElement === dom;
    document.body.classList.toggle("fps-look", locked);
    if (!locked && active) stop();
  });

  document.addEventListener("pointerlockerror", () => {
    locked = false;
    document.body.classList.remove("fps-look");
  });

  document.addEventListener("mousemove", (ev) => {
    if (!active) return;
    if (locked) {
      yaw -= ev.movementX * LOOK_SENS;
      pitch = clamp(pitch - ev.movementY * LOOK_SENS, -PITCH_LIMIT, PITCH_LIMIT);
      camera.rotation.set(pitch, yaw, 0, "YXZ");
      return;
    }
    if (!dragging) return;
    const dx = ev.clientX - lastX;
    const dy = ev.clientY - lastY;
    lastX = ev.clientX;
    lastY = ev.clientY;
    yaw -= dx * LOOK_SENS * 1.35;
    pitch = clamp(pitch - dy * LOOK_SENS * 1.35, -PITCH_LIMIT, PITCH_LIMIT);
    camera.rotation.set(pitch, yaw, 0, "YXZ");
  });

  dom.addEventListener("pointerdown", (ev) => {
    if (!active) return;
    if (locked) {
      if (ev.button === 0) onInspect?.();
      return;
    }
    if (ev.button !== 0) return;
    requestLock();
    dragging = true;
    lastX = ev.clientX;
    lastY = ev.clientY;
    dom.setPointerCapture?.(ev.pointerId);
  });

  const endDrag = () => {
    dragging = false;
  };
  dom.addEventListener("pointerup", endDrag);
  dom.addEventListener("pointercancel", endDrag);
  window.addEventListener("blur", () => keys.clear());

  window.addEventListener("keydown", (ev) => {
    if (!active) return;
    keys.add(ev.code);
    if (ev.code === "KeyE") {
      ev.preventDefault();
      onInspect?.();
    }
  });
  window.addEventListener("keyup", (ev) => keys.delete(ev.code));

  function update(dt) {
    if (!active) return;

    const forward =
      (keys.has("KeyW") || keys.has("ArrowUp") ? 1 : 0) -
      (keys.has("KeyS") || keys.has("ArrowDown") ? 1 : 0);
    const strafe =
      (keys.has("KeyD") || keys.has("ArrowRight") ? 1 : 0) -
      (keys.has("KeyA") || keys.has("ArrowLeft") ? 1 : 0);

    if (forward || strafe) {
      const speed = keys.has("ShiftLeft") || keys.has("ShiftRight") ? RUN_SPEED : WALK_SPEED;
      const fx = -Math.sin(yaw);
      const fz = -Math.cos(yaw);
      const rx = Math.cos(yaw);
      const rz = -Math.sin(yaw);
      const len = Math.hypot(forward, strafe) || 1;
      const dx = ((fx * forward + rx * strafe) / len) * speed * dt;
      const dz = ((fz * forward + rz * strafe) / len) * speed * dt;
      moveWithCollision(camera.position, dx, dz);
    }

    camera.position.y = EYE_HEIGHT;
    camera.rotation.set(pitch, yaw, 0, "YXZ");
  }

  return {
    start,
    stop,
    update,
    isLocked: () => locked,
    get active() {
      return active;
    },
  };
}
