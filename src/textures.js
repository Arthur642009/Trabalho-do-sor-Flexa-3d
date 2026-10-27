import * as THREE from "three";

function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeCanvas(w, h, draw) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d");
  draw(ctx, w, h);
  return c;
}

function toTexture(canvas, { srgb = true, repeat = [1, 1], aniso = 8 } = {}) {
  const t = new THREE.CanvasTexture(canvas);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat[0], repeat[1]);
  t.anisotropy = aniso;
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.needsUpdate = true;
  return t;
}

/* ------------------------------------------------------------------ */
/* Concrete / brick                                                    */
/* ------------------------------------------------------------------ */

function drawBricks(ctx, size, seed, mode) {
  const rand = rng(seed);
  const bw = 96;
  const bh = 30;
  const gap = 4;
  ctx.fillStyle = mode === "bump" ? "#3c3c3c" : "#c6bdae";
  ctx.fillRect(0, 0, size, size);

  for (let row = 0; row * bh < size + bh; row++) {
    const off = row % 2 ? (bw + gap) / 2 : 0;
    for (let col = -1; col * (bw + gap) < size + bw; col++) {
      const x = col * (bw + gap) + off;
      const y = row * bh;
      const n = rand();
      if (mode === "bump") {
        const v = 170 + Math.floor(n * 50);
        ctx.fillStyle = `rgb(${v},${v},${v})`;
      } else {
        const hue = 13 + n * 10;
        const sat = 34 + rand() * 20;
        const lig = 30 + rand() * 15;
        ctx.fillStyle = `hsl(${hue} ${sat}% ${lig}%)`;
      }
      ctx.fillRect(x, y, bw, bh - gap);

      if (mode === "color") {
        for (let i = 0; i < 14; i++) {
          const dark = rand() > 0.5;
          ctx.fillStyle = dark
            ? `rgba(40, 15, 8, ${0.03 + rand() * 0.07})`
            : `rgba(255, 225, 195, ${0.02 + rand() * 0.05})`;
          ctx.fillRect(
            x + rand() * bw,
            y + rand() * (bh - gap),
            6 + rand() * 34,
            1 + rand() * 3
          );
        }
        // subtle top highlight on each brick
        ctx.fillStyle = "rgba(255, 230, 210, 0.05)";
        ctx.fillRect(x, y, bw, 2);
      }
    }
  }

  if (mode === "color") {
    for (let i = 0; i < 5000; i++) {
      ctx.fillStyle = `rgba(0,0,0,${rand() * 0.05})`;
      ctx.fillRect(rand() * size, rand() * size, 1 + rand() * 2, 1 + rand() * 2);
    }
  }
}

export function brickTextures(aniso = 8, repeat = [1, 1]) {
  const size = 1024;
  const color = makeCanvas(size, size, (ctx) => drawBricks(ctx, size, 21, "color"));
  const bump = makeCanvas(size, size, (ctx) => drawBricks(ctx, size, 21, "bump"));
  return {
    map: toTexture(color, { repeat, aniso }),
    bumpMap: toTexture(bump, { srgb: false, repeat, aniso }),
  };
}

/* ------------------------------------------------------------------ */
/* Epoxy floor                                                         */
/* ------------------------------------------------------------------ */

export function floorTextures(aniso = 8, repeat = [1, 1]) {
  const size = 1024;
  const rand = rng(31);
  const tile = size / 2;

  const color = makeCanvas(size, size, (ctx) => {
    ctx.fillStyle = "#34383c";
    ctx.fillRect(0, 0, size, size);

    for (let ty = 0; ty < 2; ty++) {
      for (let tx = 0; tx < 2; tx++) {
        const shade = 23 + rand() * 3.4;
        ctx.fillStyle = `hsl(210 5% ${shade}%)`;
        ctx.fillRect(tx * tile + 2, ty * tile + 2, tile - 4, tile - 4);

        // large soft stains
        for (let i = 0; i < 3; i++) {
          const cx = tx * tile + rand() * tile;
          const cy = ty * tile + rand() * tile;
          const r = 60 + rand() * 180;
          const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
          const light = rand() > 0.5;
          g.addColorStop(0, light ? "rgba(255,255,255,0.028)" : "rgba(0,0,0,0.05)");
          g.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = g;
          ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
        }

        // wear scratches
        ctx.strokeStyle = "rgba(255,255,255,0.035)";
        for (let i = 0; i < 26; i++) {
          ctx.lineWidth = 0.5 + rand();
          ctx.beginPath();
          const x = tx * tile + rand() * tile;
          const y = ty * tile + rand() * tile;
          ctx.moveTo(x, y);
          ctx.lineTo(x + (rand() - 0.5) * 90, y + (rand() - 0.5) * 90);
          ctx.stroke();
        }
      }
    }

    // joints between the big floor plates
    ctx.strokeStyle = "rgba(10,12,14,0.85)";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(tile, 0);
    ctx.lineTo(tile, size);
    ctx.moveTo(0, tile);
    ctx.lineTo(size, tile);
    ctx.moveTo(0.5, 0);
    ctx.lineTo(0.5, size);
    ctx.moveTo(0, 0.5);
    ctx.lineTo(size, 0.5);
    ctx.stroke();

    ctx.strokeStyle = "rgba(255,255,255,0.05)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(tile + 3, 0);
    ctx.lineTo(tile + 3, size);
    ctx.moveTo(0, tile + 3);
    ctx.lineTo(size, tile + 3);
    ctx.stroke();

    // dust / aggregate speckle
    for (let i = 0; i < 9000; i++) {
      const light = rand() > 0.55;
      ctx.fillStyle = light
        ? `rgba(220,225,230,${rand() * 0.045})`
        : `rgba(0,0,0,${rand() * 0.06})`;
      ctx.fillRect(rand() * size, rand() * size, 1 + rand() * 2, 1 + rand() * 2);
    }
  });

  const rough = makeCanvas(size, size, (ctx) => {
    ctx.fillStyle = "#a4a4a4";
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 1100; i++) {
      const v = 156 + Math.floor(rand() * 22);
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      const r = 8 + rand() * 38;
      ctx.beginPath();
      ctx.arc(rand() * size, rand() * size, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.strokeStyle = "#d8d8d8";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(tile, 0);
    ctx.lineTo(tile, size);
    ctx.moveTo(0, tile);
    ctx.lineTo(size, tile);
    ctx.stroke();
  });

  return {
    map: toTexture(color, { repeat, aniso }),
    roughnessMap: toTexture(rough, { srgb: false, repeat, aniso }),
  };
}

/* ------------------------------------------------------------------ */
/* Aluminium / brushed metal                                           */
/* ------------------------------------------------------------------ */

export function brushedTexture(aniso = 8) {
  const size = 512;
  const rand = rng(5);
  const c = makeCanvas(size, size, (ctx) => {
    ctx.fillStyle = "#b9bdc2";
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < 2600; i++) {
      const y = rand() * size;
      ctx.strokeStyle =
        rand() > 0.5
          ? `rgba(255,255,255,${rand() * 0.13})`
          : `rgba(60,66,72,${rand() * 0.12})`;
      ctx.lineWidth = 0.6 + rand() * 1.4;
      ctx.beginPath();
      const x = rand() * size;
      ctx.moveTo(x, y);
      ctx.lineTo(x + 40 + rand() * 200, y + (rand() - 0.5) * 1.2);
      ctx.stroke();
    }
  });
  return toTexture(c, { aniso, repeat: [1, 1] });
}

/* ------------------------------------------------------------------ */
/* Conveyor belt                                                       */
/* ------------------------------------------------------------------ */

export function beltTexture(aniso = 8) {
  const w = 128;
  const h = 256;
  const rand = rng(9);
  const c = makeCanvas(w, h, (ctx) => {
    ctx.fillStyle = "#15171a";
    ctx.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 32) {
      ctx.fillStyle = "rgba(90,96,104,0.5)";
      ctx.fillRect(0, y, w, 4);
      ctx.fillStyle = "rgba(0,0,0,0.55)";
      ctx.fillRect(0, y + 4, w, 3);
    }
    for (let i = 0; i < 1200; i++) {
      ctx.fillStyle = `rgba(255,255,255,${rand() * 0.04})`;
      ctx.fillRect(rand() * w, rand() * h, 1.5, 1.5);
    }
  });
  return toTexture(c, { aniso, repeat: [1, 1] });
}

/* ------------------------------------------------------------------ */
/* Branded glass partition (as seen in the lab window)                 */
/* ------------------------------------------------------------------ */

export function brandGlassTexture(aniso = 8) {
  const w = 1600;
  const h = 900;
  const rand = rng(77);
  const c = makeCanvas(w, h, (ctx) => {
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, "#3d2a77");
    g.addColorStop(0.45, "#4a3184");
    g.addColorStop(0.75, "#5a3a92");
    g.addColorStop(1, "#35255f");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    // geometric line pattern
    ctx.strokeStyle = "rgba(255,255,255,0.16)";
    ctx.lineWidth = 2;
    for (let i = 0; i < 26; i++) {
      ctx.beginPath();
      ctx.moveTo(rand() * w, 0);
      ctx.lineTo(rand() * w, h);
      ctx.stroke();
    }
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.moveTo(0, rand() * h);
      ctx.lineTo(w, rand() * h);
      ctx.stroke();
    }

    // brand color accent block
    const accent = ctx.createLinearGradient(0, 0, w * 0.4, h);
    accent.addColorStop(0, "rgba(255,255,255,0.10)");
    accent.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = accent;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(w * 0.58, 0);
    ctx.lineTo(w * 0.2, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();

    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";
    ctx.font = "600 74px 'Segoe UI', Arial, sans-serif";
    try {
      ctx.letterSpacing = "10px";
    } catch (e) {
      /* older browsers */
    }
    ctx.fillText("APRENDIZADO PROFISSIONAL", w / 2, h * 0.44);

    ctx.font = "italic 96px Georgia, 'Times New Roman', serif";
    try {
      ctx.letterSpacing = "0px";
    } catch (e) {
      /* ignore */
    }
    ctx.fillStyle = "rgba(255,255,255,0.95)";
    ctx.fillText("que faz a diferença", w / 2, h * 0.62);

    ctx.strokeStyle = "rgba(255,255,255,0.5)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.3, h * 0.72);
    ctx.lineTo(w * 0.7, h * 0.72);
    ctx.stroke();

    // glass grime / reflections
    const sheen = ctx.createLinearGradient(0, h * 0.1, w, h * 0.9);
    sheen.addColorStop(0, "rgba(255,255,255,0)");
    sheen.addColorStop(0.48, "rgba(255,255,255,0.07)");
    sheen.addColorStop(0.52, "rgba(255,255,255,0.02)");
    sheen.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = sheen;
    ctx.fillRect(0, 0, w, h);
  });
  return toTexture(c, { aniso });
}

/* ------------------------------------------------------------------ */
/* Small panels: LCD, monitor, labels                                  */
/* ------------------------------------------------------------------ */

export function lcdTexture(lines = ["FESTO", "MPS 01", "AUTO"], aniso = 4) {
  const w = 256;
  const h = 160;
  const c = makeCanvas(w, h, (ctx) => {
    ctx.fillStyle = "#07100d";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "rgba(90,255,190,0.16)";
    ctx.lineWidth = 2;
    ctx.strokeRect(5, 5, w - 10, h - 10);
    ctx.fillStyle = "#5ff2c0";
    ctx.font = "600 26px Consolas, 'Courier New', monospace";
    lines.forEach((line, i) => {
      ctx.fillText(line, 18, 48 + i * 36);
    });
    ctx.fillStyle = "rgba(95,242,192,0.35)";
    ctx.font = "500 13px Consolas, monospace";
    ctx.fillText("RUN", w - 62, h - 18);
    ctx.beginPath();
    ctx.arc(w - 78, h - 23, 4, 0, Math.PI * 2);
    ctx.fill();
  });
  return toTexture(c, { aniso });
}

export function screenTexture(aniso = 8) {
  const w = 640;
  const h = 400;
  const rand = rng(3);
  const c = makeCanvas(w, h, (ctx) => {
    ctx.fillStyle = "#14161c";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#1b1e26";
    ctx.fillRect(0, 0, w, 26);
    ctx.fillStyle = "#2a2e38";
    ctx.fillRect(0, 26, 130, h - 26);
    const colors = ["#6fb3ff", "#c792ea", "#8bd17c", "#f2b233", "#e9edf2"];
    let y = 48;
    while (y < h - 20) {
      const indent = 12 + Math.floor(rand() * 3) * 14;
      ctx.fillStyle = colors[Math.floor(rand() * colors.length)];
      ctx.fillRect(150 + indent, y, 40 + rand() * (w - 260), 4);
      if (rand() > 0.72) {
        ctx.fillStyle = "#5a6270";
        ctx.fillRect(150 + indent, y + 10, 30 + rand() * 120, 3);
        y += 13;
      }
      y += 12;
    }
    ctx.fillStyle = "#4c5563";
    ctx.fillRect(8, 40, 110, 4);
    for (let i = 0; i < 12; i++) {
      ctx.fillRect(8, 58 + i * 16, 40 + rand() * 70, 3);
    }
    ctx.fillStyle = "#0d0f13";
    ctx.fillRect(0, h - 18, w, 18);
    ctx.fillStyle = "#5f6b7c";
    ctx.font = "11px Consolas, monospace";
    ctx.fillText("mps_line.py  ·  build ok", 10, h - 5);
  });
  return toTexture(c, { aniso });
}

export function stationPlateTexture(text = "MPS", sub = "E1", aniso = 8) {
  const w = 256;
  const h = 96;
  const c = makeCanvas(w, h, (ctx) => {
    ctx.fillStyle = "#e9ebee";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#c81020";
    ctx.fillRect(0, 0, 8, h);
    ctx.fillStyle = "#1c2126";
    let size = 34;
    ctx.font = `700 ${size}px 'Segoe UI', Arial, sans-serif`;
    while (ctx.measureText(text).width > w - 44 && size > 14) {
      size -= 2;
      ctx.font = `700 ${size}px 'Segoe UI', Arial, sans-serif`;
    }
    ctx.fillText(text, 24, 46);
    ctx.fillStyle = "#6c757f";
    size = 20;
    ctx.font = `600 ${size}px 'Segoe UI', Arial, sans-serif`;
    while (ctx.measureText(sub).width > w - 44 && size > 10) {
      size -= 1;
      ctx.font = `600 ${size}px 'Segoe UI', Arial, sans-serif`;
    }
    ctx.fillText(sub, 24, 76);
    ctx.strokeStyle = "#b9bec5";
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, w - 2, h - 2);
  });
  return toTexture(c, { aniso });
}

export function hazardTexture(aniso = 8) {
  const w = 256;
  const h = 64;
  const c = makeCanvas(w, h, (ctx) => {
    ctx.fillStyle = "#e8b400";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#151515";
    for (let x = -h; x < w + h; x += 48) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + 24, 0);
      ctx.lineTo(x + 24 - h, h);
      ctx.lineTo(x - h, h);
      ctx.closePath();
      ctx.fill();
    }
    ctx.globalAlpha = 0.18;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h * 0.3);
  });
  return toTexture(c, { aniso, repeat: [3, 1] });
}

export function exitSignTexture(aniso = 8) {
  const w = 256;
  const h = 128;
  const c = makeCanvas(w, h, (ctx) => {
    ctx.fillStyle = "#0c8a3f";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(26, 40, 8, 48);
    ctx.beginPath();
    ctx.arc(60, 34, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(52, 48);
    ctx.lineTo(78, 62);
    ctx.lineTo(66, 78);
    ctx.lineTo(86, 82);
    ctx.lineTo(70, 96);
    ctx.lineTo(56, 78);
    ctx.lineTo(46, 90);
    ctx.closePath();
    ctx.fill();
    ctx.font = "700 40px 'Segoe UI', Arial, sans-serif";
    ctx.fillText("SAÍDA", 110, 82);
  });
  return toTexture(c, { aniso });
}

export function skyTexture(aniso = 8) {
  const w = 512;
  const h = 512;
  const rand = rng(19);
  const c = makeCanvas(w, h, (ctx) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, "#dce9f5");
    g.addColorStop(0.6, "#c2d6e8");
    g.addColorStop(1, "#aebfce");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    for (let i = 0; i < 22; i++) {
      const cx = rand() * w;
      const cy = rand() * h;
      const r = 20 + rand() * 80;
      const gg = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      gg.addColorStop(0, "rgba(255,255,255,0.35)");
      gg.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gg;
      ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
    }
  });
  return toTexture(c, { aniso });
}
