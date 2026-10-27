import { moveWithCollision, EYE_HEIGHT } from "./navigation.js";

const WALK_SPEED = 1.9;
const RUN_SPEED = 3.4;
const LOOK_SENS = 0.0032;
const PITCH_LIMIT = 1.15;
const START = { x: 0, z: 12.3 };

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

export function createWalk({ camera, dom, controls, onStop }) {
  let active = false;
  let yaw = 0;
  let pitch = 0;
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  const keys = new Set();

  function start() {
    if (active) return;
    active = true;
    controls.enabled = false;
    keys.clear();
    camera.rotation.order = "YXZ";
    camera.position.set(START.x, EYE_HEIGHT, START.z);
    yaw = 0;
    pitch = 0;
    camera.rotation.set(0, 0, 0);
    document.body.classList.add("walk-mode");
  }

  function stop() {
    if (!active) return;
    active = false;
    keys.clear();
    dragging = false;
    document.body.classList.remove("walk-mode");
    controls.enabled = true;
    onStop?.();
  }

  dom.addEventListener("pointerdown", (ev) => {
    if (!active || ev.button !== 0) return;
    dragging = true;
    lastX = ev.clientX;
    lastY = ev.clientY;
    dom.setPointerCapture?.(ev.pointerId);
  });

  dom.addEventListener("pointermove", (ev) => {
    if (!active || !dragging) return;
    const dx = ev.clientX - lastX;
    const dy = ev.clientY - lastY;
    lastX = ev.clientX;
    lastY = ev.clientY;
    yaw -= dx * LOOK_SENS;
    pitch = clamp(pitch - dy * LOOK_SENS, -PITCH_LIMIT, PITCH_LIMIT);
    camera.rotation.set(pitch, yaw, 0);
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
    get active() {
      return active;
    },
  };
}
