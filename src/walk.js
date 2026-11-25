import * as THREE from "three";
import { moveWithCollision, EYE_HEIGHT } from "./navigation.js";

const WALK_SPEED = 1.9;
const RUN_SPEED = 3.4;
const LOOK_SENS = 0.0024;
const PITCH_LIMIT = 1.2;
const START = { x: 0, z: 12.3 };

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

export function createWalk({ camera, dom, controls, onStop, onInspect }) {
  const touchLayout = matchMedia("(pointer: coarse), (max-width: 820px)");
  let touchMode = touchLayout.matches;
  const touchRoot = document.getElementById("touch-controls");
  const touchStick = document.getElementById("touch-stick");
  const touchKnob = document.getElementById("touch-knob");
  const touchRun = document.getElementById("touch-run");
  const touchInteract = document.getElementById("touch-interact");
  let stickPointer = null;
  let stickX = 0;
  let stickY = 0;
  let touchRunning = false;
  let active = false;
  let locked = false;
  let yaw = 0;
  let pitch = 0;
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  let downX = 0;
  let downY = 0;
  const keys = new Set();

  function resetTouch() {
    stickPointer = null;
    stickX = 0;
    stickY = 0;
    touchRunning = false;
    touchKnob?.style.removeProperty("transform");
    touchRun?.setAttribute("aria-pressed", "false");
  }

  function syncTouchMode() {
    if (!touchMode || !active) return;
    touchRoot?.setAttribute("aria-hidden", "false");
    document.body.classList.add("touch-walk");
  }

  touchLayout.addEventListener("change", (ev) => {
    const wasTouch = touchMode;
    touchMode = ev.matches;
    document.body.classList.toggle("touch-device", touchMode);
    if (active && wasTouch !== touchMode) stop();
    if (active && touchMode) syncTouchMode();
  });

  function requestLock() {
    if (touchMode || !dom.requestPointerLock) return;
    try {
      const pending = dom.requestPointerLock();
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
    resetTouch();
    syncTouchMode();
    requestLock();
  }

  function stop() {
    if (!active) return;
    active = false;
    keys.clear();
    resetTouch();
    dragging = false;
    touchRoot?.setAttribute("aria-hidden", "true");
    document.body.classList.remove("walk-mode");
    document.body.classList.remove("fps-look");
    document.body.classList.remove("touch-walk");
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
    document.body.classList.toggle("touch-walk", active && touchMode);
    if (!locked && active && !touchMode) stop();
  });

  document.addEventListener("pointerlockerror", () => {
    locked = false;
    document.body.classList.remove("fps-look");
  });

  document.addEventListener("pointermove", (ev) => {
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
    const sensitivity = LOOK_SENS * (touchMode ? 1.7 : 1.35);
    yaw -= dx * sensitivity;
    pitch = clamp(pitch - dy * sensitivity, -PITCH_LIMIT, PITCH_LIMIT);
    camera.rotation.set(pitch, yaw, 0, "YXZ");
  });

  dom.addEventListener("pointerdown", (ev) => {
    if (!active) return;
    if (locked) {
      if (ev.button === 0) onInspect?.(ev);
      return;
    }
    if (ev.button !== 0) return;
    dragging = true;
    downX = ev.clientX;
    downY = ev.clientY;
    lastX = ev.clientX;
    lastY = ev.clientY;
    dom.setPointerCapture?.(ev.pointerId);
  });

  dom.addEventListener("pointerup", (ev) => {
    // Pointer lock may be unavailable: treat a click (no drag) as an inspect.
    if (active && !locked && dragging && ev.button === 0) {
      if (Math.hypot(ev.clientX - downX, ev.clientY - downY) < 6) onInspect?.(ev);
    }
    dragging = false;
  });
  dom.addEventListener("pointercancel", () => {
    dragging = false;
  });

  function updateStick(ev) {
    const rect = touchStick.getBoundingClientRect();
    const radius = rect.width * 0.34;
    const dx = ev.clientX - (rect.left + rect.width / 2);
    const dy = ev.clientY - (rect.top + rect.height / 2);
    const length = Math.hypot(dx, dy);
    const scale = length > radius ? radius / length : 1;
    const x = dx * scale;
    const y = dy * scale;
    stickX = x / radius;
    stickY = y / radius;
    touchKnob.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  }

  touchStick?.addEventListener("pointerdown", (ev) => {
    if (!active || stickPointer !== null) return;
    ev.preventDefault();
    stickPointer = ev.pointerId;
    if (touchStick.setPointerCapture) {
      try {
        touchStick.setPointerCapture(ev.pointerId);
      } catch {
        // Synthetic pointer events may not have an active browser capture target.
      }
    }
    updateStick(ev);
  });

  touchStick?.addEventListener("pointermove", (ev) => {
    if (ev.pointerId !== stickPointer) return;
    ev.preventDefault();
    updateStick(ev);
  });

  function releaseStick(ev) {
    if (ev.pointerId !== stickPointer) return;
    stickPointer = null;
    stickX = 0;
    stickY = 0;
    touchKnob.style.removeProperty("transform");
  }

  touchStick?.addEventListener("pointerup", releaseStick);
  touchStick?.addEventListener("pointercancel", releaseStick);

  touchRun?.addEventListener("pointerdown", (ev) => {
    if (!active) return;
    ev.preventDefault();
    touchRunning = true;
    if (touchRun.setPointerCapture) {
      try {
        touchRun.setPointerCapture(ev.pointerId);
      } catch {
        // Press-and-hold still works when pointer capture is unavailable.
      }
    }
    touchRun.setAttribute("aria-pressed", "true");
  });

  function releaseRun() {
    if (!active) return;
    touchRunning = false;
    touchRun.setAttribute("aria-pressed", "false");
  }

  touchRun?.addEventListener("pointerup", releaseRun);
  touchRun?.addEventListener("pointercancel", releaseRun);
  touchRun?.addEventListener("lostpointercapture", releaseRun);
  touchInteract?.addEventListener("click", () => {
    if (active) onInspect?.();
  });

  window.addEventListener("blur", () => {
    keys.clear();
    resetTouch();
  });

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

    const forward = clamp(
      (keys.has("KeyW") || keys.has("ArrowUp") ? 1 : 0) -
        (keys.has("KeyS") || keys.has("ArrowDown") ? 1 : 0) -
        stickY,
      -1,
      1
    );
    const strafe = clamp(
      (keys.has("KeyD") || keys.has("ArrowRight") ? 1 : 0) -
        (keys.has("KeyA") || keys.has("ArrowLeft") ? 1 : 0) +
        stickX,
      -1,
      1
    );

    if (Math.abs(forward) > 0.001 || Math.abs(strafe) > 0.001) {
      const speed = keys.has("ShiftLeft") || keys.has("ShiftRight") || touchRunning
        ? RUN_SPEED
        : WALK_SPEED;
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
    isTouch: () => touchMode,
    get active() {
      return active;
    },
  };
}
