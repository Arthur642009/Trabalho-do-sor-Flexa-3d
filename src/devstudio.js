/* Dev Lab: interactive programming studio that opens from the office PCs. */

const STORE_KEY = "senai.devstudio.v1";
const RUN_TIMEOUT_MS = 4000;

const LANGUAGES = [
  { id: "python", label: "Python", folder: "python", badge: "Py", color: "#3776ab", runner: "Python 3 · simulado" },
  { id: "csharp", label: "C#", folder: "csharp", badge: "C#", color: "#8b3fa8", runner: "C# · simulado" },
  { id: "javascript", label: "JavaScript", folder: "javascript", badge: "JS", color: "#d9c34a", runner: "JavaScript · worker" },
];

const ACTIVITIES = [
  {
    id: "python-1",
    lang: "python",
    file: "01_ciclo.py",
    title: "Tempo de ciclo da salva",
    level: "Básico",
    brief:
      "A salva recebe 12 peças por rodada e cada peça leva 6,5 s no ciclo completo. Para balancear a produção, o operador precisa saber quanto tempo a rodada inteira consome.",
    goals: [
      "Multiplicar a quantidade de peças pelo tempo de cada peça.",
      "Guardar o resultado na variável total.",
      "Imprimir a linha Total: 78 no terminal.",
    ],
    concepts: ["variáveis", "multiplicação", "print"],
    hint: "total = ciclos * tempo_por_peca",
    expected: ["Total: 78"],
    starter: `# Atividade 1 - Tempo de ciclo da salva
# Cada peça leva 6,5 s e a salva recebe 12 peças.
ciclos = 12
tempo_por_peca = 6.5

# TODO: calcule total multiplicando ciclos por tempo_por_peca
total = 0

print("Total:", total)
`,
  },
  {
    id: "python-2",
    lang: "python",
    file: "02_esteira.py",
    title: "Repetição na esteira",
    level: "Básico",
    brief:
      "O lote de teste tem 3 peças. Em vez de escrever três print, use um laço para listar cada peça que passa na esteira.",
    goals: [
      "Repetir o bloco 3 vezes com range(1, 4).",
      "Imprimir Peça 1, Peça 2 e Peça 3 em linhas separadas.",
      "Observar como o valor de i muda a cada volta.",
    ],
    concepts: ["for", "range", "indentação"],
    hint: "for i in range(1, 4):",
    expected: ["Peça 1", "Peça 2", "Peça 3"],
    starter: `# Atividade 2 - Repetição: três peças na esteira

# TODO: ajuste o range para repetir 3 vezes
for i in range(1, 2):
    print("Peça", i)
`,
  },
  {
    id: "python-3",
    lang: "python",
    file: "03_qualidade.py",
    title: "Controle de qualidade",
    level: "Intermediário",
    brief:
      "A peça só é aprovada quando a medida fica a até 0,05 mm do alvo de 5,00 mm. A leitura do sensor foi 5,02 mm: use uma condição para decidir.",
    goals: [
      "Comparar a diferença entre medida e alvo usando abs().",
      "Verificar se essa diferença é menor ou igual à tolerância.",
      "Imprimir Aprovada ou Reprovada.",
    ],
    concepts: ["if/else", "abs()", "comparação"],
    hint: "if abs(medida - alvo) <= tolerancia:",
    expected: ["Aprovada"],
    starter: `# Atividade 3 - Controle de qualidade
# A peça é aprovada dentro da tolerância de 0,05 mm.
medida = 5.02
alvo = 5.00
tolerancia = 0.05

# TODO: compare abs(medida - alvo) com a tolerancia
if medida == alvo:
    print("Aprovada")
else:
    print("Reprovada")
`,
  },
  {
    id: "csharp-1",
    lang: "csharp",
    file: "01_ciclo.cs",
    title: "Tempo de ciclo da salva",
    level: "Básico",
    brief:
      "A salva recebe 12 peças por rodada e cada peça leva 6,5 s. Calcule o tempo total da rodada e mostre o resultado no console.",
    goals: [
      "Multiplicar ciclos por tempoPorPeca.",
      "Guardar o resultado em total.",
      "Escrever Total: 78 com Console.WriteLine.",
    ],
    concepts: ["int/double", "operadores", "Console.WriteLine"],
    hint: "total = ciclos * tempoPorPeca;",
    expected: ["Total: 78"],
    starter: `// Atividade 1 - Tempo de ciclo da salva
// Cada peça leva 6,5 s e a salva recebe 12 peças.

int ciclos = 12;
double tempoPorPeca = 6.5;

// TODO: calcule o total multiplicando ciclos por tempoPorPeca
double total = 0;

Console.WriteLine("Total: " + total);
`,
  },
  {
    id: "csharp-2",
    lang: "csharp",
    file: "02_esteira.cs",
    title: "Repetição na esteira",
    level: "Básico",
    brief:
      "O lote de teste tem 3 peças. Use um laço for para escrever uma linha por peça que passa na esteira.",
    goals: [
      "Ajustar o limite do for para repetir 3 vezes.",
      "Montar a mensagem com o número da peça.",
      "Escrever Peça 1, Peça 2 e Peça 3 em linhas separadas.",
    ],
    concepts: ["for", "incremento", "concatenação"],
    hint: "for (int i = 1; i <= 3; i++)",
    expected: ["Peça 1", "Peça 2", "Peça 3"],
    starter: `// Atividade 2 - Repetição: três peças na esteira

// TODO: ajuste o limite do for para imprimir 3 peças
for (int i = 1; i <= 1; i++)
{
    Console.WriteLine("Peça " + i);
}
`,
  },
  {
    id: "csharp-3",
    lang: "csharp",
    file: "03_qualidade.cs",
    title: "Controle de qualidade",
    level: "Intermediário",
    brief:
      "A peça só é aprovada quando a medida fica a até 0,05 mm do alvo de 5,00 mm. A leitura do sensor foi 5,02 mm.",
    goals: [
      "Calcular a diferença com Math.Abs(medida - alvo).",
      "Comparar com a tolerância usando if/else.",
      "Escrever Aprovada ou Reprovada.",
    ],
    concepts: ["if/else", "Math.Abs", "tolerância"],
    hint: "if (Math.Abs(medida - alvo) <= tolerancia)",
    expected: ["Aprovada"],
    starter: `// Atividade 3 - Controle de qualidade
double medida = 5.02;
double alvo = 5.00;
double tolerancia = 0.05;

// TODO: use Math.Abs(medida - alvo) <= tolerancia
if (medida == alvo)
{
    Console.WriteLine("Aprovada");
}
else
{
    Console.WriteLine("Reprovada");
}
`,
  },
  {
    id: "javascript-1",
    lang: "javascript",
    file: "01_ciclo.js",
    title: "Tempo de ciclo da salva",
    level: "Básico",
    brief:
      "A salva recebe 12 peças por rodada e cada peça leva 6,5 s. Calcule o tempo total e mostre no console do navegador.",
    goals: [
      "Multiplicar ciclos por tempoPorPeca.",
      "Guardar o resultado em total.",
      "Mostrar Total: 78 com console.log.",
    ],
    concepts: ["const/let", "operadores", "console.log"],
    hint: "const total = ciclos * tempoPorPeca;",
    expected: ["Total: 78"],
    starter: `// Atividade 1 - Tempo de ciclo da salva
// Cada peça leva 6,5 s e a salva recebe 12 peças.

const ciclos = 12;
const tempoPorPeca = 6.5;

// TODO: calcule o total multiplicando ciclos por tempoPorPeca
let total = 0;

console.log("Total:", total);
`,
  },
  {
    id: "javascript-2",
    lang: "javascript",
    file: "02_esteira.js",
    title: "Repetição na esteira",
    level: "Básico",
    brief:
      "O lote de teste tem 3 peças. Use um laço for para registrar cada peça que passa na esteira.",
    goals: [
      "Ajustar a condição do for para repetir 3 vezes.",
      "Montar a mensagem com o número da peça.",
      "Mostrar Peça 1, Peça 2 e Peça 3 em linhas separadas.",
    ],
    concepts: ["for", "template string", "console.log"],
    hint: "for (let i = 1; i <= 3; i++)",
    expected: ["Peça 1", "Peça 2", "Peça 3"],
    starter: `// Atividade 2 - Repetição: três peças na esteira

// TODO: ajuste a condição para repetir 3 vezes
for (let i = 1; i <= 1; i++) {
  console.log("Peça " + i);
}
`,
  },
  {
    id: "javascript-3",
    lang: "javascript",
    file: "03_qualidade.js",
    title: "Controle de qualidade",
    level: "Intermediário",
    brief:
      "A peça só é aprovada quando a medida fica a até 0,05 mm do alvo de 5,00 mm. A leitura do sensor foi 5,02 mm.",
    goals: [
      "Calcular a diferença com Math.abs(medida - alvo).",
      "Comparar com a tolerância usando if/else.",
      "Mostrar Aprovada ou Reprovada.",
    ],
    concepts: ["if/else", "Math.abs", "comparação"],
    hint: "if (Math.abs(medida - alvo) <= tolerancia)",
    expected: ["Aprovada"],
    starter: `// Atividade 3 - Controle de qualidade
const medida = 5.02;
const alvo = 5.0;
const tolerancia = 0.05;

// TODO: compare Math.abs(medida - alvo) com a tolerancia
if (medida === alvo) {
  console.log("Aprovada");
} else {
  console.log("Reprovada");
}
`,
  },
];

/* ------------------------------------------------------------------ */
/* execution sandbox                                                   */
/* ------------------------------------------------------------------ */

const WORKER_SOURCE = String.raw`
self.onmessage = function (event) {
  var code = event.data && event.data.code ? String(event.data.code) : "";
  var lines = [];
  var partial = "";
  function fmt(v) {
    if (typeof v === "string") return v;
    if (v === null) return "null";
    if (v === undefined) return "undefined";
    if (typeof v === "number" || typeof v === "boolean" || typeof v === "bigint") return String(v);
    if (Array.isArray(v)) {
      var parts = [];
      for (var i = 0; i < v.length; i++) parts.push(fmt(v[i]));
      return "[" + parts.join(", ") + "]";
    }
    if (typeof v === "object") {
      try { return JSON.stringify(v); } catch (e) { return String(v); }
    }
    return String(v);
  }
  function log() {
    var parts = [];
    for (var i = 0; i < arguments.length; i++) parts.push(fmt(arguments[i]));
    lines.push(partial + parts.join(" "));
    partial = "";
  }
  var consoleShim = { log: log, info: log, warn: log, error: log, debug: log };
  function write(v) { partial += fmt(v); }
  var py = {
    len: function (v) { return v == null ? 0 : v.length; },
    str: fmt,
    int: function (v) { return Math.trunc(Number(v)); },
    float: function (v) { return Number(v); },
    round: function (v, d) {
      var f = Math.pow(10, d || 0);
      return Math.round(v * f) / f;
    },
    range: function () {
      var args = Array.prototype.slice.call(arguments).map(Number);
      var start = 0, stop = 0, step = 1;
      if (args.length === 1) {
        stop = args[0];
      } else if (args.length >= 2) {
        start = args[0];
        stop = args[1];
        if (args.length > 2) step = args[2];
      }
      var out = [];
      if (step === 0) return out;
      for (var v = start; step > 0 ? v < stop : v > stop; v += step) out.push(v);
      return out;
    },
    input: function () {
      throw new Error("input() não existe no sandbox: use valores fixos nesta atividade.");
    }
  };
  var cs = { write: write };
  var error = null;
  try {
    var fn = new Function("console", "__py", "__cs", code);
    fn(consoleShim, py, cs);
    if (partial) lines.push(partial);
  } catch (err) {
    error = err && err.message ? String(err.message) : String(err);
  }
  self.postMessage({ lines: lines, error: error });
};
`;

function runInSandbox(code) {
  return new Promise((resolve) => {
    let worker;
    let url = "";
    try {
      url = URL.createObjectURL(new Blob([WORKER_SOURCE], { type: "text/javascript" }));
      worker = new Worker(url);
    } catch {
      resolve({ lines: [], error: "Não foi possível iniciar o sandbox de execução." });
      return;
    }
    URL.revokeObjectURL(url);

    let settled = false;
    const finish = (result) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      worker.terminate();
      resolve(result);
    };
    const timer = setTimeout(
      () => finish({ lines: [], error: `Tempo esgotado (${RUN_TIMEOUT_MS / 1000} s): verifique se há um laço infinito.` }),
      RUN_TIMEOUT_MS
    );
    worker.onmessage = (ev) => finish(ev.data || { lines: [], error: null });
    worker.onerror = (ev) => finish({ lines: [], error: ev.message || "Erro ao executar o código." });
    worker.postMessage({ code });
  });
}

/* ------------------------------------------------------------------ */
/* Python / C# subset -> JS                                            */
/* ------------------------------------------------------------------ */

function splitTopLevel(text, sep = ",") {
  const parts = [];
  let depth = 0;
  let quote = null;
  let current = "";
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quote) {
      current += c;
      if (c === "\\") {
        current += text[i + 1] || "";
        i++;
      } else if (c === quote) quote = null;
      continue;
    }
    if (c === '"' || c === "'") {
      quote = c;
      current += c;
    } else if ("([{".includes(c)) {
      depth++;
      current += c;
    } else if (")]}".includes(c)) {
      depth--;
      current += c;
    } else if (c === sep && depth === 0) {
      parts.push(current.trim());
      current = "";
    } else {
      current += c;
    }
  }
  if (current.trim() || parts.length) parts.push(current.trim());
  return parts;
}

function stripPyComment(line) {
  let quote = null;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (quote) {
      if (c === "\\") i++;
      else if (c === quote) quote = null;
    } else if (c === '"' || c === "'") quote = c;
    else if (c === "#") return line.slice(0, i).trimEnd();
  }
  return line.trimEnd();
}

function templateFromInterpolation(body) {
  const tpl = body
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${")
    .replace(/\{\{/g, "\\{")
    .replace(/\}\}/g, "\\}");
  return "`" + tpl.replace(/\{([^{}]+)\}/g, (_, expr) => "${" + convertPyExpr(expr) + "}") + "`";
}

function convertPyExpr(expr) {
  let s = expr.trim();
  s = s.replace(/\bf(["'])((?:\\.|(?!\1).)*)\1/g, (_, _q, body) => templateFromInterpolation(body));
  s = s
    .replace(/\bTrue\b/g, "true")
    .replace(/\bFalse\b/g, "false")
    .replace(/\bNone\b/g, "null")
    .replace(/\band\b/g, "&&")
    .replace(/\bor\b/g, "||")
    .replace(/\bnot\s+/g, "!")
    .replace(/\blen\s*\(/g, "__py.len(")
    .replace(/\bstr\s*\(/g, "__py.str(")
    .replace(/\bint\s*\(/g, "__py.int(")
    .replace(/\bfloat\s*\(/g, "__py.float(")
    .replace(/\babs\s*\(/g, "Math.abs(")
    .replace(/\bround\s*\(/g, "__py.round(")
    .replace(/\brange\s*\(/g, "__py.range(")
    .replace(/\binput\s*\(/g, "__py.input(");
  return s;
}

function pythonToJs(source) {
  const sourceLines = source.replace(/\r/g, "").split("\n");
  const out = [];
  const blocks = [];
  const declared = new Set();
  let depth = 0;
  const pad = () => "  ".repeat(depth);

  for (const raw of sourceLines) {
    const line = raw.replace(/\t/g, "    ");
    const trimmed = line.trim();
    if (!trimmed) {
      out.push("");
      continue;
    }
    const indent = line.length - line.trimStart().length;
    if (trimmed.startsWith("#")) {
      out.push(pad() + "//" + trimmed.slice(1));
      continue;
    }

    let code = stripPyComment(trimmed);
    if (!code) continue;

    while (blocks.length && indent <= blocks[blocks.length - 1]) {
      blocks.pop();
      depth = Math.max(0, depth - 1);
      out.push(pad() + "}");
    }

    let m;
    if ((m = /^if\s+(.+):$/.exec(code))) {
      out.push(`${pad()}if (${convertPyExpr(m[1])}) {`);
      blocks.push(indent);
      depth++;
      continue;
    }
    if ((m = /^elif\s+(.+):$/.exec(code))) {
      out.push(`${pad()}else if (${convertPyExpr(m[1])}) {`);
      blocks.push(indent);
      depth++;
      continue;
    }
    if (/^else\s*:$/.test(code)) {
      out.push(`${pad()}else {`);
      blocks.push(indent);
      depth++;
      continue;
    }
    if ((m = /^while\s+(.+):$/.exec(code))) {
      out.push(`${pad()}while (${convertPyExpr(m[1])}) {`);
      blocks.push(indent);
      depth++;
      continue;
    }
    if ((m = /^def\s+([A-Za-z_]\w*)\s*\((.*)\)\s*:$/.exec(code))) {
      out.push(`${pad()}function ${m[1]}(${m[2]}) {`);
      blocks.push(indent);
      depth++;
      continue;
    }
    if ((m = /^for\s+([A-Za-z_]\w*)\s+in\s+(.+):$/.exec(code))) {
      const name = m[1];
      const iterable = m[2].trim();
      const rangeMatch = /^range\s*\((.*)\)$/.exec(iterable);
      if (rangeMatch) {
        const args = splitTopLevel(rangeMatch[1]).map((a) => convertPyExpr(a));
        let start = "0";
        let stop = "0";
        let step = null;
        if (args.length === 1) stop = args[0];
        else if (args.length === 2) [start, stop] = args;
        else [start, stop, step] = args;
        const cmp = step && /^-\s*/.test(step) ? ">" : "<";
        const advance = step ? `${name} += ${step}` : `${name}++`;
        out.push(`${pad()}for (let ${name} = ${start}; ${name} ${cmp} ${stop}; ${advance}) {`);
      } else {
        out.push(`${pad()}for (const ${name} of ${convertPyExpr(iterable)}) {`);
      }
      blocks.push(indent);
      depth++;
      continue;
    }
    if (/^pass$/.test(code)) continue;
    if ((m = /^return\b\s*(.*)$/.exec(code))) {
      out.push(`${pad()}return${m[1] ? " " + convertPyExpr(m[1]) : ""};`);
      continue;
    }
    if ((m = /^print\s*\((.*)\)$/s.exec(code))) {
      out.push(`${pad()}console.log(${convertPyExpr(m[1])});`);
      continue;
    }
    if ((m = /^([A-Za-z_]\w*)\s*\+=\s*(.+)$/.exec(code))) {
      out.push(`${pad()}${m[1]} += ${convertPyExpr(m[2])};`);
      continue;
    }
    if ((m = /^([A-Za-z_]\w*)\s*=(?!=)\s*(.+)$/.exec(code))) {
      const name = m[1];
      out.push(`${pad()}${declared.has(name) ? "" : "let "}${name} = ${convertPyExpr(m[2])};`);
      declared.add(name);
      continue;
    }
    out.push(`${pad()}${convertPyExpr(code)};`);
  }

  while (blocks.length) {
    blocks.pop();
    depth = Math.max(0, depth - 1);
    out.push(pad() + "}");
  }
  return out.join("\n");
}

function convertCsharpString(body) {
  const tpl = body
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${")
    .replace(/\{\{/g, "\\{")
    .replace(/\}\}/g, "\\}");
  return "`" + tpl.replace(/\{([^{}]+)\}/g, (_, expr) => "${" + expr.trim() + "}") + "`";
}

function csharpToJs(source) {
  let code = source.replace(/\r/g, "");
  code = code.replace(/^\s*using\s+[\w.]+\s*;\s*$/gm, "");
  code = code.replace(/\$"((?:\\.|[^"\\])*)"/g, (_, body) => convertCsharpString(body));
  code = code.replace(/Console\.WriteLine\s*\(/g, "console.log(");
  code = code.replace(/Console\.Write\s*\(/g, "__cs.write(");
  code = code.replace(/\bMath\.Abs\b/g, "Math.abs");
  code = code.replace(/\bMath\.Round\b/g, "Math.round");
  code = code.replace(/\bMath\.Max\b/g, "Math.max");
  code = code.replace(/\bMath\.Min\b/g, "Math.min");
  code = code.replace(
    /\b(int|double|float|decimal|long|string|bool|var|object)\s+([A-Za-z_]\w*)\s*=/g,
    "let $2 ="
  );
  code = code.replace(/'(\\.|[^'\\])'/g, (_, ch) => JSON.stringify(ch === "\\'" ? "'" : ch));
  return code;
}

/* ------------------------------------------------------------------ */
/* output comparison                                                   */
/* ------------------------------------------------------------------ */

function normalizeLines(lines) {
  return lines
    .map((line) => String(line).replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .map((line) =>
      line.replace(/-?\d+(?:[.,]\d+)?/g, (token) => {
        const value = Number(token.replace(",", "."));
        return Number.isFinite(value) ? String(value) : token;
      })
    );
}

function outputMatches(expected, actual) {
  const want = normalizeLines(expected);
  const got = normalizeLines(actual);
  return want.length === got.length && want.every((line, i) => line === got[i]);
}

/* ------------------------------------------------------------------ */
/* persistent progress                                                 */
/* ------------------------------------------------------------------ */

function readStore() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return {};
    const data = JSON.parse(raw);
    if (!data || typeof data !== "object") return {};
    const code = {};
    if (data.code && typeof data.code === "object") {
      for (const [id, value] of Object.entries(data.code)) {
        if (typeof value === "string") code[id] = value;
      }
    }
    return {
      lastId: typeof data.lastId === "string" ? data.lastId : null,
      completed: Array.isArray(data.completed) ? data.completed.filter((id) => typeof id === "string") : [],
      code,
    };
  } catch {
    return {};
  }
}

/* ------------------------------------------------------------------ */
/* DOM helpers                                                         */
/* ------------------------------------------------------------------ */

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function esc(value) {
  return String(value).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

const ICON_CLOSE = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg>`;
const ICON_FILES = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 16h6"/></svg>`;
const ICON_BOOK = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M20 19H6.5A2.5 2.5 0 0 0 4 21.5"/><path d="M8 7h8M8 11h6"/></svg>`;
const ICON_PLAY = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>`;

const KEYWORDS = {
  python: new Set([
    "if", "elif", "else", "for", "in", "while", "def", "return", "import", "from", "as",
    "and", "or", "not", "True", "False", "None", "break", "continue", "pass",
  ]),
  csharp: new Set([
    "if", "else", "for", "foreach", "in", "while", "return", "int", "double", "float",
    "string", "bool", "var", "decimal", "long", "object", "class", "static", "void", "new",
    "true", "false", "null", "public", "private", "using", "namespace",
  ]),
  javascript: new Set([
    "if", "else", "for", "while", "return", "const", "let", "var", "function", "new",
    "true", "false", "null", "undefined", "class", "of", "in", "typeof", "async", "await",
  ]),
};

const BUILTINS = new Set([
  "print", "Console", "Math", "console", "abs", "len", "str", "int", "float", "round",
  "range", "WriteLine", "Write",
]);

function highlightCode(source, lang) {
  if (source.length > 20000) return esc(source);
  const keywords = KEYWORDS[lang] || KEYWORDS.javascript;
  const re =
    /(#[^\n]*|\/\/[^\n]*)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)/g;
  const out = [];
  let last = 0;
  let match;
  while ((match = re.exec(source))) {
    if (match.index > last) out.push(esc(source.slice(last, match.index)));
    if (match[1]) out.push(`<span class="tk-com">${esc(match[1])}</span>`);
    else if (match[2]) out.push(`<span class="tk-str">${esc(match[2])}</span>`);
    else if (match[3]) out.push(`<span class="tk-num">${esc(match[3])}</span>`);
    else {
      const word = match[4];
      let cls = "";
      if (keywords.has(word)) cls = "tk-kw";
      else if (BUILTINS.has(word) || /^\s*\(/.test(source.slice(match.index + word.length))) cls = "tk-fn";
      out.push(cls ? `<span class="${cls}">${esc(word)}</span>` : esc(word));
    }
    last = match.index + match[0].length;
  }
  out.push(esc(source.slice(last)));
  return out.join("");
}

/* ------------------------------------------------------------------ */
/* studio                                                              */
/* ------------------------------------------------------------------ */

export function createDevStudio() {
  const saved = readStore();
  const state = {
    open: false,
    activityId: ACTIVITIES.some((a) => a.id === saved.lastId) ? saved.lastId : ACTIVITIES[0].id,
    completed: new Set((saved.completed || []).filter((id) => ACTIVITIES.some((a) => a.id === id))),
    code: saved.code || {},
    running: false,
    hintOn: false,
    guideOn: true,
    collapsed: new Set(),
  };

  let saveTimer = 0;
  let lineCount = -1;

  const layer = el("div", "studio-layer");
  layer.setAttribute("aria-hidden", "true");
  layer.innerHTML = `
    <div class="studio-backdrop"></div>
    <div class="studio-window" role="dialog" aria-modal="true" aria-label="Dev Lab — atividades de programação">
      <div class="st-titlebar">
        <span class="st-dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <span class="st-title">Dev Lab<em>atividades de programação · PC de bancada</em></span>
        <button type="button" class="st-close" title="Fechar (Esc)" aria-label="Fechar Dev Lab">${ICON_CLOSE}</button>
      </div>
      <div class="studio-body">
        <nav class="st-activitybar" aria-label="Vistas do Dev Lab">
          <button type="button" class="st-ab is-active" data-view="files" title="Atividades">${ICON_FILES}</button>
          <button type="button" class="st-ab is-active" data-view="guide" title="Enunciado">${ICON_BOOK}</button>
          <span class="st-ab-fill"></span>
          <span class="st-ab-brand">SENAI</span>
        </nav>
        <aside class="st-sidebar">
          <div class="st-side-head"><span>EXPLORADOR</span><span class="st-side-dots" aria-hidden="true">···</span></div>
          <div class="st-tree"></div>
          <div class="st-progress">
            <div class="st-progress-label"><span>Progresso</span><b class="st-progress-count">0/9</b></div>
            <div class="st-progress-track"><i></i></div>
          </div>
        </aside>
        <main class="st-main">
          <div class="st-tabs"></div>
          <div class="st-breadcrumb"></div>
          <div class="st-work">
            <section class="st-editor-col">
              <div class="st-editor">
                <div class="st-gutter"><div class="st-gutter-inner">1</div></div>
                <div class="st-code-wrap">
                  <pre class="st-highlight" aria-hidden="true"></pre>
                  <textarea class="st-code" spellcheck="false" autocomplete="off" autocapitalize="off" wrap="off" aria-label="Editor de código"></textarea>
                </div>
              </div>
              <div class="st-actions">
                <button type="button" class="st-btn st-run">${ICON_PLAY}<span>Executar</span><kbd>F5</kbd></button>
                <button type="button" class="st-btn" data-act="reset">Restaurar código</button>
                <button type="button" class="st-btn" data-act="hint">Dica</button>
                <span class="st-state" data-kind="idle"><i></i><span class="st-state-text">Pronto para executar</span></span>
              </div>
              <section class="st-terminal">
                <div class="st-term-head">
                  <div class="st-term-tabs">
                    <button type="button" class="is-active" data-term="run">TERMINAL</button>
                    <button type="button" data-term="expected">SAÍDA ESPERADA</button>
                  </div>
                  <span class="st-term-note">execução no navegador · limite 4 s</span>
                </div>
                <div class="st-term-pane" data-pane="run"><div class="st-term-body"></div></div>
                <div class="st-term-pane is-hidden" data-pane="expected"><pre class="st-term-expected"></pre></div>
              </section>
            </section>
            <aside class="st-guide"><div class="st-guide-inner"></div></aside>
          </div>
        </main>
      </div>
      <footer class="st-statusbar">
        <span class="st-sb-left"><i></i>Dev Lab · execução local no navegador</span>
        <span class="st-sb-right"><span class="st-sb-lang">Python</span> · <span class="st-sb-count">0/9</span> concluídas</span>
      </footer>
    </div>`;

  const windowEl = layer.querySelector(".studio-window");
  const treeEl = layer.querySelector(".st-tree");
  const tabsEl = layer.querySelector(".st-tabs");
  const crumbEl = layer.querySelector(".st-breadcrumb");
  const guideEl = layer.querySelector(".st-guide");
  const guideInner = layer.querySelector(".st-guide-inner");
  const codeEl = layer.querySelector(".st-code");
  const highlightEl = layer.querySelector(".st-highlight");
  const gutterInner = layer.querySelector(".st-gutter-inner");
  const stateEl = layer.querySelector(".st-state");
  const stateTextEl = layer.querySelector(".st-state-text");
  const runBtn = layer.querySelector(".st-run");
  const hintBtn = layer.querySelector('[data-act="hint"]');
  const resetBtn = layer.querySelector('[data-act="reset"]');
  const termBody = layer.querySelector(".st-term-body");
  const expectedPane = layer.querySelector(".st-term-expected");
  const progressCount = layer.querySelector(".st-progress-count");
  const progressFill = layer.querySelector(".st-progress-track i");
  const sbLang = layer.querySelector(".st-sb-lang");
  const sbCount = layer.querySelector(".st-sb-count");
  const guideBtn = layer.querySelector('[data-view="guide"]');

  function setGuide(on) {
    state.guideOn = on;
    windowEl.classList.toggle("no-guide", !on);
    guideBtn.classList.toggle("is-active", on);
  }

  const activity = () => ACTIVITIES.find((a) => a.id === state.activityId) || ACTIVITIES[0];
  const langOf = (act) => LANGUAGES.find((l) => l.id === act.lang) || LANGUAGES[0];
  const indexInLang = (act) => ACTIVITIES.filter((a) => a.lang === act.lang).indexOf(act) + 1;

  function persist() {
    try {
      localStorage.setItem(
        STORE_KEY,
        JSON.stringify({
          version: 1,
          lastId: state.activityId,
          completed: [...state.completed],
          code: state.code,
        })
      );
    } catch {
      /* storage unavailable: progress stays in memory */
    }
  }

  function schedulePersist() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(persist, 450);
  }

  function flushSave() {
    if (!saveTimer) return;
    clearTimeout(saveTimer);
    saveTimer = 0;
    persist();
  }

  function updateProgress() {
    const done = state.completed.size;
    const total = ACTIVITIES.length;
    progressCount.textContent = `${done}/${total}`;
    sbCount.textContent = `${done}/${total}`;
    progressFill.style.width = `${(done / total) * 100}%`;
  }

  function renderTree() {
    treeEl.innerHTML = "";
    for (const lang of LANGUAGES) {
      const group = el("div", "st-group");
      const head = el("button", "st-group-head");
      head.type = "button";
      const collapsed = state.collapsed.has(lang.id);
      head.innerHTML = `<span class="st-chev${collapsed ? " is-closed" : ""}" aria-hidden="true">▾</span>`;
      const chip = el("span", "st-lang-chip", lang.badge);
      chip.style.background = lang.color;
      head.append(chip, el("span", "st-group-name", lang.folder));
      head.addEventListener("click", () => {
        if (collapsed) state.collapsed.delete(lang.id);
        else state.collapsed.add(lang.id);
        renderTree();
      });
      group.appendChild(head);

      if (!collapsed) {
        const list = el("div", "st-files");
        for (const act of ACTIVITIES.filter((a) => a.lang === lang.id)) {
          const btn = el("button", "st-file" + (act.id === state.activityId ? " is-active" : ""));
          btn.type = "button";
          btn.title = act.title;
          const dot = el("span", "st-file-dot");
          dot.style.background = lang.color;
          btn.append(dot, el("span", "st-file-name", act.file));
          if (state.completed.has(act.id)) btn.appendChild(el("span", "st-file-mark", "✓"));
          btn.addEventListener("click", () => selectActivity(act.id));
          list.appendChild(btn);
        }
        group.appendChild(list);
      }
      treeEl.appendChild(group);
    }
  }

  function renderTabs() {
    const act = activity();
    const lang = langOf(act);
    tabsEl.innerHTML = "";
    const tab = el("div", "st-tab is-active");
    const chip = el("span", "st-lang-chip", lang.badge);
    chip.style.background = lang.color;
    tab.append(chip, el("span", "st-tab-name", act.file));
    tabsEl.appendChild(tab);
  }

  function renderBreadcrumb() {
    const act = activity();
    const lang = langOf(act);
    crumbEl.textContent = `atividades  ›  ${lang.folder}  ›  ${act.file}`;
  }

  function renderExpected() {
    const act = activity();
    expectedPane.textContent = act.expected.join("\n");
  }

  function setStatus(kind, text) {
    stateEl.dataset.kind = kind;
    stateTextEl.textContent = text;
    const verdict = guideInner.querySelector(".st-verdict");
    if (verdict) {
      verdict.dataset.kind = kind === "busy" ? "idle" : kind;
      const label = verdict.querySelector("span");
      if (label) label.textContent = text;
    }
  }

  function renderGuide() {
    const act = activity();
    const lang = langOf(act);
    const wasHint = state.hintOn;
    const verdictText = state.completed.has(act.id)
      ? "Atividade concluída anteriormente"
      : "Ainda não concluída";
    guideInner.innerHTML = `
      <div class="st-guide-kicker">ATIVIDADE ${String(indexInLang(act)).padStart(2, "0")} · ${esc(lang.label)}</div>
      <h2 class="st-guide-title">${esc(act.title)}</h2>
      <div class="st-guide-meta">
        <span class="st-badge-level">${esc(act.level)}</span>
        <span class="st-badge-file">${esc(act.file)}</span>
      </div>
      <p class="st-guide-brief">${esc(act.brief)}</p>
      <h3>O que fazer</h3>
      <ol class="st-goals">${act.goals.map((g) => `<li>${esc(g)}</li>`).join("")}</ol>
      <h3>Conceitos</h3>
      <div class="st-chips">${act.concepts.map((c) => `<span>${esc(c)}</span>`).join("")}</div>
      <h3>Saída esperada</h3>
      <pre class="st-expected">${esc(act.expected.join("\n"))}</pre>
      <div class="st-hint-box"${wasHint ? "" : " hidden"}>
        <span class="st-hint-label">Dica</span>
        <code>${esc(act.hint)}</code>
      </div>
      <div class="st-verdict" data-kind="${state.completed.has(act.id) ? "ok" : "idle"}"><i></i><span>${esc(verdictText)}</span></div>
      <p class="st-guide-foot">Subconjunto didático da linguagem: variáveis, laços, condições e saída de texto. A execução acontece no seu navegador, sem instalar nada.</p>
    `;
    hintBtn.classList.toggle("is-on", wasHint);
  }

  function syncGutter() {
    const count = codeEl.value.split("\n").length;
    if (count === lineCount) return;
    lineCount = count;
    let text = "";
    for (let i = 1; i <= count; i++) text += i + (i < count ? "\n" : "");
    gutterInner.textContent = text;
    syncScroll();
  }

  function syncScroll() {
    gutterInner.style.transform = `translateY(${-codeEl.scrollTop}px)`;
    highlightEl.scrollTop = codeEl.scrollTop;
    highlightEl.scrollLeft = codeEl.scrollLeft;
  }

  function renderHighlight() {
    highlightEl.innerHTML = highlightCode(codeEl.value, activity().lang);
    syncScroll();
  }

  function renderOutput(rows) {
    termBody.innerHTML = "";
    if (!rows.length) {
      termBody.appendChild(el("div", "st-term-line is-dim", "▶ Execute o código para ver a saída aqui."));
      return;
    }
    for (const row of rows) {
      termBody.appendChild(el("div", "st-term-line is-" + (row.kind || "out"), row.text));
    }
    termBody.scrollTop = termBody.scrollHeight;
  }

  function setTermTab(name) {
    layer.querySelectorAll(".st-term-tabs button").forEach((b) => {
      b.classList.toggle("is-active", b.dataset.term === name);
    });
    layer.querySelectorAll(".st-term-pane").forEach((p) => {
      p.classList.toggle("is-hidden", p.dataset.pane !== name);
    });
  }

  function selectActivity(id) {
    if (!ACTIVITIES.some((a) => a.id === id)) return;
    flushSave();
    state.activityId = id;
    state.hintOn = false;
    const act = activity();
    codeEl.value = Object.prototype.hasOwnProperty.call(state.code, id) ? state.code[id] : act.starter;
    lineCount = -1;
    syncGutter();
    renderHighlight();
    codeEl.scrollTop = 0;
    renderTabs();
    renderBreadcrumb();
    renderExpected();
    renderGuide();
    renderTree();
    updateProgress();
    setTermTab("run");
    renderOutput([]);
    setStatus("idle", state.completed.has(id) ? "Concluída · revise ou execute de novo" : "Pronto para executar");
    sbLang.textContent = langOf(act).label;
    persist();
  }

  function insertAtCursor(text) {
    const start = codeEl.selectionStart;
    const end = codeEl.selectionEnd;
    const value = codeEl.value;
    let inserted = false;
    try {
      codeEl.focus();
      codeEl.setSelectionRange(start, end);
      inserted = document.execCommand("insertText", false, text);
    } catch {
      inserted = false;
    }
    if (!inserted) {
      codeEl.value = value.slice(0, start) + text + value.slice(end);
      codeEl.selectionStart = codeEl.selectionEnd = start + text.length;
    }
    onCodeEdited();
  }

  function onCodeEdited() {
    syncGutter();
    renderHighlight();
    state.code[state.activityId] = codeEl.value;
    schedulePersist();
  }

  async function run() {
    if (state.running || !state.open) return;
    const act = activity();
    const lang = langOf(act);
    const source = codeEl.value;
    let js = source;
    if (act.lang === "python") js = pythonToJs(source);
    else if (act.lang === "csharp") js = csharpToJs(source);

    state.running = true;
    runBtn.disabled = true;
    runBtn.classList.add("is-busy");
    setTermTab("run");
    setStatus("busy", "Executando…");
    renderOutput([{ text: `▶ ${lang.runner} · ${act.file}`, kind: "meta" }]);

    const result = await runInSandbox(js);

    state.running = false;
    runBtn.disabled = false;
    runBtn.classList.remove("is-busy");

    const rows = result.lines.map((line) => ({ text: line, kind: "out" }));
    if (result.error) rows.push({ text: result.error, kind: "err" });
    if (!rows.length) rows.push({ text: "(o programa terminou sem imprimir nada)", kind: "dim" });
    renderOutput(rows);

    if (!result.error && outputMatches(act.expected, result.lines)) {
      const isNew = !state.completed.has(act.id);
      state.completed.add(act.id);
      persist();
      renderTree();
      updateProgress();
      setStatus("ok", isNew ? "Saída correta · atividade concluída" : "Saída correta · atividade já concluída");
    } else if (result.error) {
      setStatus("err", "O código parou com um erro — confira o terminal");
    } else {
      setStatus("warn", "A saída ainda não corresponde ao esperado");
    }
  }

  /* events ---------------------------------------------------------- */

  codeEl.addEventListener("input", onCodeEdited);
  codeEl.addEventListener("scroll", syncScroll);
  codeEl.addEventListener("keydown", (ev) => {
    const unit = activity().lang === "javascript" ? "  " : "    ";
    if (ev.key === "Tab") {
      ev.preventDefault();
      insertAtCursor(unit);
      return;
    }
    if (ev.key === "Enter" && !ev.shiftKey && !ev.isComposing) {
      ev.preventDefault();
      const before = codeEl.value.slice(0, codeEl.selectionStart);
      const currentLine = before.slice(before.lastIndexOf("\n") + 1);
      let indent = /^[ \t]*/.exec(currentLine)[0];
      const trimmed = currentLine.trimEnd();
      if (/[{([]\s*$/.test(trimmed) || (activity().lang === "python" && /:\s*$/.test(trimmed))) {
        indent += unit;
      }
      insertAtCursor("\n" + indent);
      codeEl.scrollTop = codeEl.scrollHeight;
    }
  });

  runBtn.addEventListener("click", run);
  resetBtn.addEventListener("click", () => {
    const act = activity();
    codeEl.value = act.starter;
    delete state.code[act.id];
    lineCount = -1;
    syncGutter();
    renderHighlight();
    persist();
    setStatus("idle", "Código restaurado — resolva os TODOs");
    renderOutput([]);
    setTermTab("run");
  });
  hintBtn.addEventListener("click", () => {
    state.hintOn = !state.hintOn;
    hintBtn.classList.toggle("is-on", state.hintOn);
    const box = guideInner.querySelector(".st-hint-box");
    if (box) {
      box.hidden = !state.hintOn;
      if (state.hintOn) box.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  });

  layer.querySelectorAll(".st-term-tabs button").forEach((btn) => {
    btn.addEventListener("click", () => setTermTab(btn.dataset.term));
  });

  layer.querySelector(".st-close").addEventListener("click", close);
  layer.querySelector(".studio-backdrop").addEventListener("click", close);
  guideBtn.addEventListener("click", () => setGuide(!state.guideOn));

  document.addEventListener("keydown", (ev) => {
    if (!state.open) return;
    if (ev.key === "Escape") {
      ev.preventDefault();
      close();
      return;
    }
    if (ev.key === "F5" || (ev.ctrlKey && ev.key === "Enter")) {
      ev.preventDefault();
      run();
    }
  });

  function open() {
    if (state.open) return;
    state.open = true;
    setGuide(window.innerWidth > 1180);
    layer.classList.add("is-open");
    layer.setAttribute("aria-hidden", "false");
    selectActivity(state.activityId);
    codeEl.focus({ preventScroll: true });
    codeEl.setSelectionRange(0, 0);
  }

  function close() {
    if (!state.open) return;
    flushSave();
    state.open = false;
    layer.classList.remove("is-open");
    layer.setAttribute("aria-hidden", "true");
    codeEl.blur();
  }

  function isOpen() {
    return state.open;
  }

  windowEl.classList.toggle("no-guide", !state.guideOn);
  document.getElementById("app").appendChild(layer);
  renderTree();
  updateProgress();
  selectActivity(state.activityId);
  renderHighlight();

  return { open, close, isOpen, run, selectActivity };
}
