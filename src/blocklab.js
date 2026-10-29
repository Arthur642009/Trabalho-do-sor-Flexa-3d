/* Block Lab: programação em blocos das estações MPS, aberta pelas telas HMI. */

const STORE_KEY = "senai.blocks.v1";

const BLOCKS = {
  eject: { label: "Ejetar peça", hint: "cilindro de ejeção", dur: 2.2, tone: "blue" },
  press: { label: "Prensar peça", hint: "prensa pneumática", dur: 2.6, tone: "blue" },
  rotate: { label: "Girar mesa 90°", hint: "mesa indexada", dur: 2.6, tone: "blue" },
  assemble: { label: "Montar conjunto", hint: "prensa + alimentador", dur: 3.2, tone: "blue" },
  store: { label: "Guardar bandeja", hint: "estante de níveis", dur: 2.4, tone: "blue" },
  belt: { label: "Transportar peça", hint: "esteira + sensores", dur: 3.4, tone: "blue" },
  diverge: { label: "Desviar peça", hint: "cilindro lateral", dur: 1.6, tone: "teal" },
  piece: { label: "Contar peça", hint: "sensor de saída", dur: 0.6, tone: "green" },
  signalGreen: { label: "Sinal verde", hint: "torre luminosa", dur: 0.8, tone: "green" },
  signalAmber: { label: "Sinal amarelo", hint: "torre luminosa", dur: 0.8, tone: "amber" },
  signalOff: { label: "Apagar sinal", hint: "torre luminosa", dur: 0.6, tone: "grey" },
  wait: { label: "Aguardar 1 s", hint: "temporizador", dur: 1.0, tone: "amber" },
};

const KIND_ACTION = {
  distribution: "eject",
  test: "press",
  processing: "rotate",
  assembly: "assemble",
  storage: "store",
  conveyor: "belt",
};

const TONE_COLORS = {
  blue: "#2f6fd0",
  teal: "#2f8f8a",
  green: "#2f9e63",
  amber: "#c99a2e",
  grey: "#5a6470",
};

const ICON_CLOSE = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg>`;
const ICON_RUN = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>`;

const MAX_LOOP = 5;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function fmtDur(seconds) {
  return seconds.toFixed(1).replace(".", ",") + " s";
}

function paletteFor(kind) {
  const action = KIND_ACTION[kind];
  const ids = [action];
  if (kind === "conveyor") ids.push("diverge");
  ids.push("piece", "wait", "signalGreen", "signalAmber", "signalOff");
  return ids.filter((id) => BLOCKS[id]);
}

function defaultSteps(kind) {
  const action = KIND_ACTION[kind];
  return [action, "piece", "wait"].filter((id) => BLOCKS[id]);
}

function readStore() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    const data = raw ? JSON.parse(raw) : null;
    return data && typeof data === "object" ? data : {};
  } catch {
    return {};
  }
}

export function createBlockLab({ onParts, onClose } = {}) {
  const store = readStore();
  const state = {
    open: false,
    station: null,
    steps: [],
    loop: 1,
    running: false,
    index: 0,
    elapsed: 0,
    cycles: 0,
    pieces: 0,
  };

  const layer = el("div", "bl-layer");
  layer.setAttribute("aria-hidden", "true");
  layer.innerHTML = `
    <section class="bl-window" role="dialog" aria-label="Programação em blocos">
      <header class="bl-head">
        <div class="bl-head-text">
          <span class="bl-kicker"></span>
          <h2>Programação em blocos</h2>
          <p>Arraste os blocos e acompanhe a bancada funcionando ao lado.</p>
        </div>
        <button type="button" class="bl-close" aria-label="Fechar programação">${ICON_CLOSE}</button>
      </header>
      <div class="bl-status" data-kind="idle">
        <span class="bl-dot"></span>
        <span class="bl-status-text">Pronto para programar</span>
      </div>
      <div class="bl-body">
        <aside class="bl-palette">
          <div class="bl-col-head"><span>BLOCOS DISPONÍVEIS</span></div>
          <div class="bl-blocks"></div>
          <p class="bl-note">Toque para adicionar ou arraste até a posição desejada no programa.</p>
        </aside>
        <main class="bl-canvas">
          <div class="bl-col-head"><span>PROGRAMA DA ESTAÇÃO</span><span class="bl-count">0 blocos</span></div>
          <div class="bl-loopbar">
            <span class="bl-loop-label">repetir programa</span>
            <button type="button" class="bl-mini" data-loop="-1" aria-label="Menos repetições">−</button>
            <b class="bl-loop-value">1×</b>
            <button type="button" class="bl-mini" data-loop="1" aria-label="Mais repetições">+</button>
            <span class="bl-loop-note">de 1 a ${MAX_LOOP} vezes</span>
          </div>
          <div class="bl-list-wrap">
            <div class="bl-list"></div>
            <p class="bl-empty">Arraste um bloco para começar o programa.</p>
          </div>
          <footer class="bl-actions">
            <button type="button" class="bl-run">${ICON_RUN}<span>Executar programa</span></button>
            <button type="button" class="bl-stop" disabled>Parar</button>
            <button type="button" class="bl-clear">Limpar</button>
            <span class="bl-parts">Peças <b>0</b></span>
            <span class="bl-save"></span>
          </footer>
        </main>
      </div>
    </section>`;

  document.getElementById("app").appendChild(layer);

  const kickerEl = layer.querySelector(".bl-kicker");
  const titleEl = layer.querySelector(".bl-head-text h2");
  const statusEl = layer.querySelector(".bl-status");
  const statusTextEl = layer.querySelector(".bl-status-text");
  const blocksEl = layer.querySelector(".bl-blocks");
  const listWrap = layer.querySelector(".bl-list-wrap");
  const listEl = layer.querySelector(".bl-list");
  const emptyEl = layer.querySelector(".bl-empty");
  const countEl = layer.querySelector(".bl-count");
  const loopValueEl = layer.querySelector(".bl-loop-value");
  const runBtn = layer.querySelector(".bl-run");
  const stopBtn = layer.querySelector(".bl-stop");
  const clearBtn = layer.querySelector(".bl-clear");
  const partsEl = layer.querySelector(".bl-parts b");
  const saveEl = layer.querySelector(".bl-save");

  let drag = null;
  let justDragged = false;

  const rows = () => Array.from(listEl.querySelectorAll(".bl-step"));

  function setStatus(kind, text) {
    statusEl.dataset.kind = kind;
    statusTextEl.textContent = text;
  }

  function updateParts() {
    partsEl.textContent = String(state.pieces);
    partsEl.animate(
      [
        { color: "#ffffff", transform: "scale(1.2)" },
        { color: "#37d67a", transform: "scale(1)" },
      ],
      { duration: 320, easing: "ease-out" }
    );
  }

  function updateControls() {
    runBtn.disabled = state.running || state.steps.length === 0;
    stopBtn.disabled = !state.running;
    clearBtn.disabled = state.running || state.steps.length === 0;
    layer.querySelectorAll(".bl-mini").forEach((b) => (b.disabled = state.running));
    layer.classList.toggle("is-running", state.running);
  }

  function markDirty() {
    if (!state.station) return;
    store[state.station.code] = { loop: state.loop, steps: state.steps.slice() };
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(store));
      saveEl.textContent = "salvo neste navegador";
    } catch {
      saveEl.textContent = "não foi possível salvar";
    }
  }

  function renderPalette() {
    blocksEl.innerHTML = "";
    if (!state.station) return;
    for (const id of paletteFor(state.station.kind)) {
      const def = BLOCKS[id];
      const btn = el("button", "bl-pal");
      btn.type = "button";
      btn.dataset.id = id;
      btn.style.setProperty("--blk", TONE_COLORS[def.tone] || TONE_COLORS.blue);
      btn.innerHTML = `<span class="bl-pal-text"><b>${def.label}</b><em>${def.hint}</em></span><span class="bl-pal-dur">${fmtDur(
        def.dur
      )}</span>`;
      blocksEl.appendChild(btn);
    }
  }

  function renderList() {
    listEl.innerHTML = "";
    emptyEl.hidden = state.steps.length > 0;
    countEl.textContent = `${state.steps.length} ${state.steps.length === 1 ? "bloco" : "blocos"}`;

    state.steps.forEach((id, i) => {
      const def = BLOCKS[id];
      const row = el("div", "bl-step");
      row.dataset.i = String(i);
      row.style.setProperty("--blk", TONE_COLORS[def.tone] || TONE_COLORS.blue);
      row.innerHTML = `
        <span class="bl-step-fill"></span>
        <span class="bl-step-idx">${String(i + 1).padStart(2, "0")}</span>
        <span class="bl-step-label">${def.label}</span>
        <span class="bl-step-dur">${fmtDur(def.dur)}</span>`;
      const del = el("button", "bl-step-del", "×");
      del.type = "button";
      del.setAttribute("aria-label", `Remover ${def.label}`);
      del.disabled = state.running;
      del.addEventListener("click", () => {
        if (state.running) return;
        state.steps.splice(i, 1);
        markDirty();
        renderList();
        updateControls();
        setStatus("idle", "Programa alterado · execute para testar");
      });
      row.appendChild(del);
      listEl.appendChild(row);
    });
    updateControls();
  }

  function updateLoop() {
    loopValueEl.textContent = `${state.loop}×`;
    layer.querySelectorAll(".bl-mini").forEach((b) => {
      const dir = Number(b.dataset.loop);
      b.disabled = state.running || (dir < 0 ? state.loop <= 1 : state.loop >= MAX_LOOP);
    });
  }

  function addBlock(id, index) {
    if (state.running || !state.station) return;
    if (!BLOCKS[id] || !paletteFor(state.station.kind).includes(id)) return;
    const at = index === undefined ? state.steps.length : Math.max(0, Math.min(index, state.steps.length));
    state.steps.splice(at, 0, id);
    markDirty();
    renderList();
    setStatus("idle", "Programa alterado · execute para testar");
    listEl.children[at]?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  /* drag and drop ---------------------------------------------------- */

  function inCanvas(x, y) {
    const r = listWrap.getBoundingClientRect();
    return x >= r.left - 48 && x <= r.right + 48 && y >= r.top - 46 && y <= r.bottom + 46;
  }

  function insertIndex(y) {
    const all = rows();
    for (let i = 0; i < all.length; i++) {
      const r = all[i].getBoundingClientRect();
      if (y < r.top + r.height / 2) return i;
    }
    return state.steps.length;
  }

  function clearInsertMarks() {
    rows().forEach((r) => r.classList.remove("is-insert"));
    listEl.classList.remove("is-insert-end", "is-target");
  }

  function markInsert(index) {
    rows().forEach((r, i) => r.classList.toggle("is-insert", i === index));
    listEl.classList.toggle("is-insert-end", index >= state.steps.length);
  }

  function onDragMove(ev) {
    if (!drag) return;
    if (!drag.moved && Math.hypot(ev.clientX - drag.x0, ev.clientY - drag.y0) < 5) return;
    drag.moved = true;
    drag.ghost.classList.add("is-dragging");
    drag.ghost.style.left = `${ev.clientX}px`;
    drag.ghost.style.top = `${ev.clientY}px`;
    const inside = inCanvas(ev.clientX, ev.clientY);
    listEl.classList.toggle("is-target", inside);
    if (!inside) {
      clearInsertMarks();
      listEl.classList.toggle("is-target", false);
      drag.index = state.steps.length;
      return;
    }
    drag.index = insertIndex(ev.clientY);
    markInsert(drag.index);
  }

  function onDragEnd(ev) {
    window.removeEventListener("pointermove", onDragMove);
    const d = drag;
    drag = null;
    if (!d) return;
    d.ghost.remove();
    const inside = inCanvas(ev.clientX, ev.clientY);
    clearInsertMarks();
    if (d.moved) {
      justDragged = true;
      setTimeout(() => {
        justDragged = false;
      }, 0);
      if (inside) addBlock(d.id, d.index);
    }
  }

  blocksEl.addEventListener("pointerdown", (ev) => {
    const btn = ev.target.closest(".bl-pal");
    if (!btn || state.running || ev.button !== 0) return;
    const id = btn.dataset.id;
    const def = BLOCKS[id];
    if (!def) return;
    const ghost = el("div", "bl-ghost", def.label);
    ghost.style.setProperty("--blk", TONE_COLORS[def.tone] || TONE_COLORS.blue);
    ghost.style.left = `${ev.clientX}px`;
    ghost.style.top = `${ev.clientY}px`;
    document.body.appendChild(ghost);
    drag = { id, ghost, x0: ev.clientX, y0: ev.clientY, moved: false, index: state.steps.length };
    window.addEventListener("pointermove", onDragMove);
    window.addEventListener("pointerup", onDragEnd, { once: true });
  });

  blocksEl.addEventListener("click", (ev) => {
    const btn = ev.target.closest(".bl-pal");
    if (!btn) return;
    if (justDragged) {
      justDragged = false;
      return;
    }
    addBlock(btn.dataset.id);
  });

  /* run -------------------------------------------------------------- */

  function highlight(index) {
    rows().forEach((row, i) => {
      row.classList.toggle("is-current", i === index);
      if (i !== index) row.style.setProperty("--p", "0%");
    });
    const def = BLOCKS[state.steps[index]];
    if (def) {
      const cycle = state.loop > 1 ? ` · volta ${state.cycles + 1}/${state.loop}` : "";
      setStatus("running", `Passo ${index + 1}/${state.steps.length} · ${def.label}${cycle}`);
      state.station?.hmi?.draw(`ETAPA ${index + 1}/${state.steps.length}`, "running");
    }
  }

  function clearHighlight() {
    rows().forEach((row) => {
      row.classList.remove("is-current");
      row.style.setProperty("--p", "0%");
    });
  }

  function run() {
    if (state.running || !state.station || state.steps.length === 0) return;
    state.running = true;
    state.index = 0;
    state.elapsed = 0;
    state.cycles = 0;
    state.pieces = 0;
    state.station.setProgramMode?.(true);
    renderList();
    updateLoop();
    updateControls();
    updateParts();
    highlight(0);
  }

  function finish() {
    state.running = false;
    state.station?.setProgramMode?.(false);
    state.station?.hmi?.draw("PROGRAMA CONCLUÍDO", "done");
    setStatus(
      "done",
      `Programa concluído · ${state.pieces} ${state.pieces === 1 ? "peça contada" : "peças contadas"}`
    );
    clearHighlight();
    updateLoop();
    updateControls();
  }

  function stop() {
    if (!state.running) return;
    state.running = false;
    state.station?.setProgramMode?.(false);
    state.station?.hmi?.draw("PROGRAMA INTERROMPIDO", "error");
    setStatus("error", "Programa interrompido");
    clearHighlight();
    updateLoop();
    updateControls();
  }

  function update(dt) {
    if (!state.running || !state.station) return;
    const id = state.steps[state.index];
    const def = BLOCKS[id];
    if (!def) {
      stop();
      return;
    }
    state.elapsed += dt;
    const p = Math.min(1, state.elapsed / def.dur);
    state.station.programStep?.(id, p);
    const row = rows()[state.index];
    if (row) row.style.setProperty("--p", `${(p * 100).toFixed(1)}%`);

    if (p < 1) return;

    state.station.programCommit?.(id);
    if (id === "piece") {
      state.pieces += 1;
      updateParts();
      onParts?.(1);
    }
    state.elapsed = 0;
    state.index += 1;
    if (state.index >= state.steps.length) {
      state.cycles += 1;
      if (state.cycles < state.loop) {
        state.index = 0;
      } else {
        finish();
        return;
      }
    }
    highlight(state.index);
  }

  /* public ----------------------------------------------------------- */

  function open(station) {
    if (state.open || !station) return;
    if (state.running) stop();
    state.station = station;
    state.running = false;
    state.index = 0;
    state.elapsed = 0;
    state.cycles = 0;
    state.pieces = 0;

    const saved = store[station.code];
    const allowed = paletteFor(station.kind);
    const savedSteps = Array.isArray(saved?.steps)
      ? saved.steps.filter((id) => allowed.includes(id))
      : [];
    state.steps = savedSteps.length > 0 ? savedSteps : defaultSteps(station.kind);
    state.loop = Math.max(1, Math.min(MAX_LOOP, Number(saved?.loop) || 1));

    kickerEl.textContent = `${station.code} · ${station.type.toUpperCase()}`;
    titleEl.textContent = `${station.name} · blocos`;
    saveEl.textContent = saved ? "programa salvo neste navegador" : "programa de exemplo";

    renderPalette();
    renderList();
    updateLoop();
    updateControls();
    updateParts();
    setStatus("idle", "Pronto para programar");
    state.open = true;
    layer.classList.add("is-open");
    layer.setAttribute("aria-hidden", "false");
    station.hmi?.draw("EM PROGRAMAÇÃO", "ready");
  }

  function close() {
    if (!state.open) return;
    if (state.running) stop();
    state.open = false;
    state.station?.setProgramMode?.(false);
    state.station?.hmi?.draw("TOQUE PARA PROGRAMAR", "idle");
    layer.classList.remove("is-open");
    layer.setAttribute("aria-hidden", "true");
    state.station = null;
  }

  function closeByUser() {
    if (!state.open) return;
    close();
    onClose?.();
  }

  const isOpen = () => state.open;

  runBtn.addEventListener("click", run);
  stopBtn.addEventListener("click", stop);
  clearBtn.addEventListener("click", () => {
    if (state.running) return;
    state.steps = [];
    markDirty();
    renderList();
    setStatus("idle", "Programa vazio · adicione blocos");
  });

  layer.querySelectorAll(".bl-mini").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (state.running) return;
      const next = state.loop + Number(btn.dataset.loop);
      state.loop = Math.max(1, Math.min(MAX_LOOP, next));
      markDirty();
      updateLoop();
    });
  });

  layer.querySelector(".bl-close").addEventListener("click", closeByUser);

  document.addEventListener("keydown", (ev) => {
    if (!state.open) return;
    if (ev.key === "Escape") {
      ev.preventDefault();
      ev.stopImmediatePropagation();
      closeByUser();
    }
  });

  updateControls();

  return { open, close, isOpen, update };
}
