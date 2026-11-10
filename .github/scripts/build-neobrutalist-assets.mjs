import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const ASSETS_DIR = path.join(ROOT, 'assets');
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ─────────────────────────────────────────────────────────
   1. HERO BANNER (hero-banner.svg) — 960x308
   Pure Neo-Brutalism matching portfolio-one/src/styles/theme.ts:
   - Background: #F5F0E8, Surface: #FFFFFF, Border: 3px solid #000000
   - Hard shadow: 7px 7px 0px #000000, 0px border-radius
   - Accents: #FFE500 (brutal yellow), #FF689B (pink), #62D8F9 (cyan), #A6ECD3 (mint)
───────────────────────────────────────────────────────── */
const heroSvg = `<svg width="960" height="308" viewBox="0 0 960 308" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="heroTitle heroDesc">
  <title id="heroTitle">Maqhawe Thabiso Ngwenya - Full-Stack &amp; Mobile Software Engineer</title>
  <desc id="heroDesc">Neo-Brutalist engineering profile for Maqhawe Thabiso Ngwenya. Full-Stack TypeScript, React Native, Three.js, and AI systems engineer in Bulawayo, Zimbabwe.</desc>
  <style>
    .mono-tag {
      font: 700 12px 'Space Mono', 'Courier New', Consolas, monospace;
      fill: #000000;
      letter-spacing: 1.2px;
    }
    .mono-ticker {
      font: 700 11.5px 'Space Mono', 'Courier New', Consolas, monospace;
      fill: #FFE500;
      letter-spacing: 1.5px;
    }
    .display-title {
      font: 900 44px 'Space Grotesk', 'Arial Black', Impact, system-ui, sans-serif;
      fill: #000000;
      letter-spacing: -1.2px;
    }
    .body-copy {
      font: 600 15px 'Space Grotesk', 'Segoe UI', -apple-system, sans-serif;
      fill: #111111;
    }
    .stat-num {
      font: 900 30px 'Space Grotesk', 'Arial Black', sans-serif;
      fill: #000000;
      letter-spacing: -1px;
    }
    .stat-label {
      font: 700 11px 'Space Mono', 'Courier New', monospace;
      fill: #222222;
      letter-spacing: 0.8px;
    }
  </style>

  <!-- Outer Canvas (#F5F0E8 warm cream) -->
  <rect x="0" y="0" width="960" height="308" fill="#F5F0E8" />

  <!-- Structural Grid Hairlines on Cream Canvas -->
  <line x1="0" y1="40" x2="960" y2="40" stroke="#E2DBD0" stroke-width="1" />
  <line x1="0" y1="268" x2="960" y2="268" stroke="#E2DBD0" stroke-width="1" />

  <!-- Hard Offset Shadow (7px, 7px, #000000) -->
  <rect x="21" y="21" width="925" height="273" fill="#000000" />

  <!-- Main Brutalist Frame (#FFFFFF surface, 3px #000000 border, 0px radius) -->
  <rect x="14" y="14" width="925" height="273" fill="#FFFFFF" stroke="#000000" stroke-width="3" />

  <!-- Top Brutalist Status Bar (#FFE500 fill, 3px bottom border) -->
  <rect x="14" y="14" width="925" height="38" fill="#FFE500" stroke="#000000" stroke-width="3" />
  <rect x="28" y="26" width="14" height="14" fill="#00C853" stroke="#000000" stroke-width="2.5" />
  <text x="52" y="37" class="mono-tag">SYS.STATUS: ACTIVE // FULL-STACK &amp; MOBILE ENGINEER</text>
  <line x1="650" y1="14" x2="650" y2="52" stroke="#000000" stroke-width="3" />
  <text x="668" y="37" class="mono-tag">LOC: BULAWAYO, ZW [GMT+2]</text>

  <!-- Vertical Split Between Left Hero & Right Telemetry Matrix -->
  <line x1="650" y1="52" x2="650" y2="249" stroke="#000000" stroke-width="3" />

  <!-- LEFT COLUMN: Name, Marker Highlights, Thesis -->
  <g transform="translate(38, 76)">
    <!-- Greeting Stamp -->
    <rect x="4" y="4" width="246" height="28" fill="#000000" />
    <rect x="0" y="0" width="246" height="28" fill="#62D8F9" stroke="#000000" stroke-width="2.5" />
    <text x="12" y="19" class="mono-tag">PORTFOLIO // MAQHAWE.VERCEL.APP</text>

    <!-- Giant Display Name + Brutal Yellow Underline Block -->
    <rect x="0" y="74" width="575" height="14" fill="#FFE500" />
    <text x="0" y="78" class="display-title">MAQHAWE NGWENYA</text>

    <!-- Left-Bordered Thesis Block -->
    <rect x="0" y="104" width="6" height="54" fill="#FF3C2F" stroke="#000000" stroke-width="2" />
    <text x="18" y="123" class="body-copy">Building full-stack TypeScript web platforms, offline-first</text>
    <g transform="translate(18, 132)">
      <rect x="0" y="2" width="166" height="22" fill="#A6ECD3" stroke="#000000" stroke-width="2" />
      <text x="6" y="18" class="body-copy" font-weight="700">React Native apps</text>
      <text x="174" y="18" class="body-copy">, and interactive</text>
      <rect x="298" y="2" width="168" height="22" fill="#FF689B" stroke="#000000" stroke-width="2" />
      <text x="304" y="18" class="body-copy" font-weight="700">3D WebGL systems</text>
      <text x="470" y="18" class="body-copy">.</text>
    </g>
  </g>

  <!-- RIGHT COLUMN: 2x2 Brutalist Telemetry Grid -->
  <g transform="translate(650, 52)">
    <!-- Cell 1 (Top-Left): Public Repos -->
    <rect x="0" y="0" width="144" height="98.5" fill="#F5F0E8" stroke="#000000" stroke-width="3" />
    <rect x="14" y="14" width="58" height="20" fill="#FFE500" stroke="#000000" stroke-width="2" />
    <text x="20" y="28" class="mono-tag">01</text>
    <text x="14" y="64" class="stat-num">99+</text>
    <text x="14" y="84" class="stat-label">PUBLIC REPOS</text>

    <!-- Cell 2 (Top-Right): Annual Commits -->
    <rect x="144" y="0" width="145" height="98.5" fill="#FFFFFF" stroke="#000000" stroke-width="3" />
    <rect x="158" y="14" width="58" height="20" fill="#62D8F9" stroke="#000000" stroke-width="2" />
    <text x="164" y="28" class="mono-tag">02</text>
    <text x="158" y="64" class="stat-num">482</text>
    <text x="158" y="84" class="stat-label">COMMITS (1Y)</text>

    <!-- Cell 3 (Bottom-Left): Primary Stack -->
    <rect x="0" y="98.5" width="144" height="98.5" fill="#FFFFFF" stroke="#000000" stroke-width="3" />
    <rect x="14" y="112.5" width="58" height="20" fill="#FF689B" stroke="#000000" stroke-width="2" />
    <text x="20" y="126.5" class="mono-tag">03</text>
    <text x="14" y="162.5" class="stat-num">TS/RN</text>
    <text x="14" y="182.5" class="stat-label">CORE ENGINE</text>

    <!-- Cell 4 (Bottom-Right): GitHub Rank -->
    <rect x="144" y="98.5" width="145" height="98.5" fill="#A6ECD3" stroke="#000000" stroke-width="3" />
    <rect x="158" y="112.5" width="58" height="20" fill="#FFFFFF" stroke="#000000" stroke-width="2" />
    <text x="164" y="126.5" class="mono-tag">04</text>
    <text x="158" y="162.5" class="stat-num">A+</text>
    <text x="158" y="182.5" class="stat-label">GITHUB RANK</text>
  </g>

  <!-- Bottom Brutalist Marquee Strip (#000000 bar) -->
  <rect x="14" y="249" width="925" height="38" fill="#000000" stroke="#000000" stroke-width="3" />
  <text x="32" y="273" class="mono-ticker">TYPESCRIPT // REACT.JS // REACT NATIVE // EXPO // NEXT.JS // THREE.JS // NODE.JS // POSTGRESQL // SQLITE</text>
</svg>
`;

fs.writeFileSync(path.join(ROOT, 'hero-banner.svg'), heroSvg, 'utf8');

/* ─────────────────────────────────────────────────────────
   2. NEO-BRUTALIST CTA BUTTONS (assets/btn-*.svg)
───────────────────────────────────────────────────────── */
function makeButtonSvg({ filename, label, sublabel, bg, width = 304 }) {
  const w = width;
  const h = 56;
  const boxW = w - 10;
  const boxH = h - 10;
  const svg = `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(label)} - ${esc(sublabel)}">
  <style>
    .btn-main { font: 800 13.5px 'Space Grotesk', 'Arial Black', sans-serif; fill: #000000; letter-spacing: 0.6px; }
    .btn-sub  { font: 700 10.5px 'Space Mono', 'Courier New', monospace; fill: #111111; }
  </style>
  <rect x="0" y="0" width="${w}" height="${h}" fill="#F5F0E8" />
  <rect x="8" y="8" width="${boxW}" height="${boxH}" fill="#000000" />
  <rect x="3" y="3" width="${boxW}" height="${boxH}" fill="${bg}" stroke="#000000" stroke-width="3" />
  <text x="18" y="24" class="btn-main">${esc(label)}</text>
  <text x="18" y="40" class="btn-sub">${esc(sublabel)}</text>
  <rect x="${boxW - 34}" y="14" width="24" height="24" fill="#FFFFFF" stroke="#000000" stroke-width="2.5" />
  <text x="${boxW - 27}" y="31" class="btn-main">↗</text>
</svg>
`;
  fs.writeFileSync(path.join(ASSETS_DIR, filename), svg, 'utf8');
}

makeButtonSvg({
  filename: 'btn-portfolio.svg',
  label: 'LIVE PORTFOLIO',
  sublabel: 'MAQHAWE.VERCEL.APP',
  bg: '#FFE500',
});
makeButtonSvg({
  filename: 'btn-repos.svg',
  label: '99+ REPOSITORIES',
  sublabel: 'OPEN SOURCE ARCHIVE',
  bg: '#62D8F9',
});
makeButtonSvg({
  filename: 'btn-github.svg',
  label: 'GITHUB PROFILE',
  sublabel: '@THABISOMAQHAWENGWENYA',
  bg: '#FF689B',
});

/* ─────────────────────────────────────────────────────────
   3. NEO-BRUTALIST PROJECT CARDS (assets/card-*.svg) — 467x236
   Each card is a full clickable SVG card with 3px solid black borders,
   6px hard offset shadow, colored header strip, index tag, tech tags,
   and 3-line readable description.
───────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    filename: 'card-cashflow.svg',
    index: '01',
    title: 'CASHFLOW MATE',
    status: 'MOBILE + WEB',
    headerBg: '#FFE500',
    tagBg: '#A6ECD3',
    tags: ['TYPESCRIPT', 'EXPO / RN', 'GEMINI AI', 'M3 UI'],
    lines: [
      'Full-stack and offline-first mobile financial record',
      'assistant for Zimbabwean traders with EcoCash SMS',
      'parsing, USD/ZiG/ZAR cashboxes, and HMAC licensing.',
    ],
  },
  {
    filename: 'card-lifeos.svg',
    index: '02',
    title: 'LIFEOS ANDROID',
    status: 'LOCAL-FIRST OS',
    headerBg: '#62D8F9',
    tagBg: '#FFE500',
    tags: ['TYPESCRIPT', 'REACT NATIVE', 'SQLITE', 'EXPO'],
    lines: [
      'Personal operating system for Android engineered with',
      'local-first SQLite persistence, habit and task execution',
      'matrices, financial ledgers, and encrypted backup vaults.',
    ],
  },
  {
    filename: 'card-elohim.svg',
    index: '03',
    title: "ELOHIM'S LEGACY 3D",
    status: 'LIVE ON VERCEL',
    headerBg: '#FF689B',
    tagBg: '#62D8F9',
    tags: ['THREE.JS', 'REACT', 'TYPESCRIPT', 'GLSL'],
    lines: [
      'Interactive 3D particle streetwear e-commerce platform',
      'featuring luminance-weighted point clouds, scroll camera',
      'keyframes, custom mouse shaders, and WhatsApp checkout.',
    ],
  },
  {
    filename: 'card-school.svg',
    index: '04',
    title: 'SCHOOL MANAGEMENT SAAS',
    status: 'LIVE ON VERCEL',
    headerBg: '#A6ECD3',
    tagBg: '#FF689B',
    tags: ['NEXT.JS', 'TYPESCRIPT', 'PRISMA', 'POSTGRES'],
    lines: [
      'Multi-tenant school administration SaaS built with Next.js',
      'App Router, Prisma ORM, and PostgreSQL with Better Auth',
      'session security and granular role-based access control.',
    ],
  },
  {
    filename: 'card-arcane.svg',
    index: '05',
    title: 'ARCANE INTERACTIVE',
    status: 'LIVE ON VERCEL',
    headerBg: '#FFE500',
    tagBg: '#62D8F9',
    tags: ['GSAP', 'SVG MORPH', 'JAVASCRIPT', 'AUDIO'],
    lines: [
      'Cinematic web storytelling showcase engineered with GSAP',
      'polygon clip-path morphing, choreographed hero reveals,',
      'spatial audio controls, and frame-accurate video stages.',
    ],
  },
  {
    filename: 'card-portfolio.svg',
    index: '06',
    title: 'PORTFOLIO & ADMIN CMS',
    status: 'LIVE ON VERCEL',
    headerBg: '#62D8F9',
    tagBg: '#A6ECD3',
    tags: ['REACT', 'TYPESCRIPT', 'FRAMER', 'FIREBASE'],
    lines: [
      'Neo-Brutalist engineering portfolio featuring scroll-linked',
      'marker highlights, 3D spine-hinge book page-flip pagination,',
      'and a live Firestore Admin CMS with real-time inbox sync.',
    ],
  },
];

for (const proj of PROJECTS) {
  let tagX = 24;
  const tagElements = proj.tags.map((t) => {
    const w = t.length * 7.8 + 18;
    const el = `
    <g transform="translate(${tagX.toFixed(1)}, 174)">
      <rect x="2" y="2" width="${w.toFixed(1)}" height="24" fill="#000000" />
      <rect x="0" y="0" width="${w.toFixed(1)}" height="24" fill="#F5F0E8" stroke="#000000" stroke-width="2" />
      <text x="${(w / 2).toFixed(1)}" y="16" text-anchor="middle" class="chip-text">${esc(t)}</text>
    </g>`;
    tagX += w + 8;
    return el;
  }).join('');

  const cardSvg = `<svg width="467" height="226" viewBox="0 0 467 226" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(proj.title)}">
  <style>
    .idx { font: 800 13px 'Space Mono', 'Courier New', monospace; fill: #000000; }
    .card-title { font: 900 18px 'Space Grotesk', 'Arial Black', sans-serif; fill: #000000; letter-spacing: -0.3px; }
    .status-pill { font: 700 10px 'Space Mono', 'Courier New', monospace; fill: #000000; letter-spacing: 0.5px; }
    .desc { font: 500 13.5px 'Space Grotesk', 'Segoe UI', -apple-system, sans-serif; fill: #111111; }
    .chip-text { font: 700 10.5px 'Space Mono', 'Courier New', monospace; fill: #000000; }
  </style>

  <!-- Cream Backdrop -->
  <rect x="0" y="0" width="467" height="226" fill="#F5F0E8" />

  <!-- Hard Offset Shadow (6px, 6px, #000000) -->
  <rect x="12" y="12" width="445" height="204" fill="#000000" />

  <!-- Card Body (#FFFFFF, 3px #000000 border, 0px radius) -->
  <rect x="6" y="6" width="445" height="204" fill="#FFFFFF" stroke="#000000" stroke-width="3" />

  <!-- Header Strip -->
  <rect x="6" y="6" width="445" height="44" fill="${proj.headerBg}" stroke="#000000" stroke-width="3" />
  <rect x="6" y="6" width="48" height="44" fill="#FFFFFF" stroke="#000000" stroke-width="3" />
  <text x="30" y="33" text-anchor="middle" class="idx">${proj.index}</text>
  <text x="68" y="34" class="card-title">${esc(proj.title)}</text>

  <!-- Status Stamp -->
  <rect x="330" y="16" width="108" height="24" fill="${proj.tagBg}" stroke="#000000" stroke-width="2" />
  <text x="384" y="32" text-anchor="middle" class="status-pill">${esc(proj.status)}</text>

  <!-- Description Copy (System Sans for strict readability) -->
  <text x="24" y="82" class="desc">${esc(proj.lines[0])}</text>
  <text x="24" y="106" class="desc">${esc(proj.lines[1])}</text>
  <text x="24" y="130" class="desc">${esc(proj.lines[2])}</text>

  <!-- Divider Line -->
  <line x1="24" y1="154" x2="432" y2="154" stroke="#000000" stroke-width="2" stroke-dasharray="4 4" />

  <!-- Tech Stack Chips (Space Mono) -->
  ${tagElements}
</svg>
`;
  fs.writeFileSync(path.join(ASSETS_DIR, proj.filename), cardSvg, 'utf8');
}

/* ─────────────────────────────────────────────────────────
   4. NEO-BRUTALIST TECH STACK ARCHITECTURE BOARD (assets/tech-stack.svg)
───────────────────────────────────────────────────────── */
const techStackSvg = `<svg width="960" height="264" viewBox="0 0 960 264" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Engineering Stack &amp; Tooling Architecture">
  <style>
    .col-hdr { font: 900 14px 'Space Grotesk', 'Arial Black', sans-serif; fill: #000000; letter-spacing: 0.4px; }
    .col-idx { font: 700 11.5px 'Space Mono', 'Courier New', monospace; fill: #000000; }
    .tag-txt { font: 700 11.5px 'Space Mono', 'Courier New', monospace; fill: #000000; }
    .note-txt { font: 600 12.5px 'Space Grotesk', 'Segoe UI', sans-serif; fill: #111111; }
  </style>

  <!-- Cream Canvas -->
  <rect x="0" y="0" width="960" height="264" fill="#F5F0E8" />

  <!-- Hard Offset Shadow -->
  <rect x="20" y="20" width="926" height="232" fill="#000000" />

  <!-- Outer Frame -->
  <rect x="13" y="13" width="926" height="232" fill="#FFFFFF" stroke="#000000" stroke-width="3" />

  <!-- Column Dividers -->
  <line x1="321" y1="13" x2="321" y2="245" stroke="#000000" stroke-width="3" />
  <line x1="630" y1="13" x2="630" y2="245" stroke="#000000" stroke-width="3" />

  <!-- Column 1 Header -->
  <rect x="13" y="13" width="308" height="42" fill="#FFE500" stroke="#000000" stroke-width="3" />
  <text x="29" y="39" class="col-hdr">01 // CORE LANGUAGES &amp; RUNTIMES</text>

  <!-- Column 2 Header -->
  <rect x="321" y="13" width="309" height="42" fill="#62D8F9" stroke="#000000" stroke-width="3" />
  <text x="337" y="39" class="col-hdr">02 // FRONTEND, MOBILE &amp; 3D</text>

  <!-- Column 3 Header -->
  <rect x="630" y="13" width="309" height="42" fill="#FF689B" stroke="#000000" stroke-width="3" />
  <text x="646" y="39" class="col-hdr">03 // DATA, BACKEND &amp; AI OPS</text>

  <!-- Column 1 Chips -->
  <g transform="translate(29, 72)">
    <rect x="3" y="3" width="124" height="30" fill="#000000" /><rect x="0" y="0" width="124" height="30" fill="#FFE500" stroke="#000000" stroke-width="2.5" /><text x="62" y="20" text-anchor="middle" class="tag-txt">TYPESCRIPT</text>
    <rect x="141" y="3" width="124" height="30" fill="#000000" /><rect x="138" y="0" width="124" height="30" fill="#F5F0E8" stroke="#000000" stroke-width="2.5" /><text x="200" y="20" text-anchor="middle" class="tag-txt">JAVASCRIPT</text>

    <rect x="3" y="47" width="124" height="30" fill="#000000" /><rect x="0" y="44" width="124" height="30" fill="#F5F0E8" stroke="#000000" stroke-width="2.5" /><text x="62" y="64" text-anchor="middle" class="tag-txt">NODE.JS</text>
    <rect x="141" y="47" width="124" height="30" fill="#000000" /><rect x="138" y="44" width="124" height="30" fill="#F5F0E8" stroke="#000000" stroke-width="2.5" /><text x="200" y="64" text-anchor="middle" class="tag-txt">PYTHON</text>

    <rect x="3" y="91" width="124" height="30" fill="#000000" /><rect x="0" y="88" width="124" height="30" fill="#F5F0E8" stroke="#000000" stroke-width="2.5" /><text x="62" y="108" text-anchor="middle" class="tag-txt">SQL / PGSQL</text>
    <rect x="141" y="91" width="124" height="30" fill="#000000" /><rect x="138" y="88" width="124" height="30" fill="#A6ECD3" stroke="#000000" stroke-width="2.5" /><text x="200" y="108" text-anchor="middle" class="tag-txt">GLSL SHADERS</text>

    <line x1="0" y1="136" x2="274" y2="136" stroke="#000000" stroke-width="2" stroke-dasharray="4 4" />
    <text x="0" y="158" class="note-txt">Strict static typing, deterministic</text>
    <text x="0" y="176" class="note-txt">arithmetic &amp; modular monorepos.</text>
  </g>

  <!-- Column 2 Chips -->
  <g transform="translate(337, 72)">
    <rect x="3" y="3" width="124" height="30" fill="#000000" /><rect x="0" y="0" width="124" height="30" fill="#62D8F9" stroke="#000000" stroke-width="2.5" /><text x="62" y="20" text-anchor="middle" class="tag-txt">REACT.JS</text>
    <rect x="141" y="3" width="124" height="30" fill="#000000" /><rect x="138" y="0" width="124" height="30" fill="#FFE500" stroke="#000000" stroke-width="2.5" /><text x="200" y="20" text-anchor="middle" class="tag-txt">REACT NATIVE</text>

    <rect x="3" y="47" width="124" height="30" fill="#000000" /><rect x="0" y="44" width="124" height="30" fill="#F5F0E8" stroke="#000000" stroke-width="2.5" /><text x="62" y="64" text-anchor="middle" class="tag-txt">EXPO SDK</text>
    <rect x="141" y="47" width="124" height="30" fill="#000000" /><rect x="138" y="44" width="124" height="30" fill="#F5F0E8" stroke="#000000" stroke-width="2.5" /><text x="200" y="64" text-anchor="middle" class="tag-txt">NEXT.JS</text>

    <rect x="3" y="91" width="124" height="30" fill="#000000" /><rect x="0" y="88" width="124" height="30" fill="#FF689B" stroke="#000000" stroke-width="2.5" /><text x="62" y="108" text-anchor="middle" class="tag-txt">THREE.JS</text>
    <rect x="141" y="91" width="124" height="30" fill="#000000" /><rect x="138" y="88" width="124" height="30" fill="#F5F0E8" stroke="#000000" stroke-width="2.5" /><text x="200" y="108" text-anchor="middle" class="tag-txt">GSAP / FRAMER</text>

    <line x1="0" y1="136" x2="274" y2="136" stroke="#000000" stroke-width="2" stroke-dasharray="4 4" />
    <text x="0" y="158" class="note-txt">3D point clouds, scroll timelines,</text>
    <text x="0" y="176" class="note-txt">and offline-first mobile interfaces.</text>
  </g>

  <!-- Column 3 Chips -->
  <g transform="translate(646, 72)">
    <rect x="3" y="3" width="124" height="30" fill="#000000" /><rect x="0" y="0" width="124" height="30" fill="#A6ECD3" stroke="#000000" stroke-width="2.5" /><text x="62" y="20" text-anchor="middle" class="tag-txt">POSTGRESQL</text>
    <rect x="141" y="3" width="124" height="30" fill="#000000" /><rect x="138" y="0" width="124" height="30" fill="#F5F0E8" stroke="#000000" stroke-width="2.5" /><text x="200" y="20" text-anchor="middle" class="tag-txt">SQLITE LOCAL</text>

    <rect x="3" y="47" width="124" height="30" fill="#000000" /><rect x="0" y="44" width="124" height="30" fill="#F5F0E8" stroke="#000000" stroke-width="2.5" /><text x="62" y="64" text-anchor="middle" class="tag-txt">PRISMA ORM</text>
    <rect x="141" y="47" width="124" height="30" fill="#000000" /><rect x="138" y="44" width="124" height="30" fill="#F5F0E8" stroke="#000000" stroke-width="2.5" /><text x="200" y="64" text-anchor="middle" class="tag-txt">SUPABASE / FB</text>

    <rect x="3" y="91" width="124" height="30" fill="#000000" /><rect x="0" y="88" width="124" height="30" fill="#FFE500" stroke="#000000" stroke-width="2.5" /><text x="62" y="108" text-anchor="middle" class="tag-txt">GEMINI AI</text>
    <rect x="141" y="91" width="124" height="30" fill="#000000" /><rect x="138" y="88" width="124" height="30" fill="#F5F0E8" stroke="#000000" stroke-width="2.5" /><text x="200" y="108" text-anchor="middle" class="tag-txt">VITEST / CI</text>

    <line x1="0" y1="136" x2="274" y2="136" stroke="#000000" stroke-width="2" stroke-dasharray="4 4" />
    <text x="0" y="158" class="note-txt">Atomic SQL mutations, RBAC auth,</text>
    <text x="0" y="176" class="note-txt">and grounded LLM RAG pipelines.</text>
  </g>
</svg>
`;

fs.writeFileSync(path.join(ASSETS_DIR, 'tech-stack.svg'), techStackSvg, 'utf8');

/* ─────────────────────────────────────────────────────────
   5. NEO-BRUTALIST SECTION DIVIDERS (assets/sec-*.svg)
───────────────────────────────────────────────────────── */
function makeSectionHeaderSvg({ filename, index, title, rightLabel, accent }) {
  const svg = `<svg width="960" height="58" viewBox="0 0 960 58" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(title)}">
  <style>
    .s-idx { font: 800 13.5px 'Space Mono', 'Courier New', monospace; fill: #000000; }
    .s-ttl { font: 900 18px 'Space Grotesk', 'Arial Black', sans-serif; fill: #000000; letter-spacing: 0.5px; }
    .s-rgt { font: 700 11.5px 'Space Mono', 'Courier New', monospace; fill: #000000; letter-spacing: 0.8px; }
  </style>
  <rect x="0" y="0" width="960" height="58" fill="#F5F0E8" />
  <rect x="19" y="13" width="926" height="38" fill="#000000" />
  <rect x="13" y="7" width="926" height="38" fill="#FFFFFF" stroke="#000000" stroke-width="3" />
  <rect x="13" y="7" width="54" height="38" fill="${accent}" stroke="#000000" stroke-width="3" />
  <text x="40" y="31" text-anchor="middle" class="s-idx">${esc(index)}</text>
  <text x="84" y="32" class="s-ttl">${esc(title)}</text>
  <rect x="748" y="14" width="178" height="24" fill="#F5F0E8" stroke="#000000" stroke-width="2" />
  <text x="837" y="30" text-anchor="middle" class="s-rgt">${esc(rightLabel)}</text>
</svg>
`;
  fs.writeFileSync(path.join(ASSETS_DIR, filename), svg, 'utf8');
}

makeSectionHeaderSvg({
  filename: 'sec-projects.svg',
  index: '01',
  title: 'FEATURED PRODUCTION SYSTEMS',
  rightLabel: 'CLICK CARD TO INSPECT',
  accent: '#FFE500',
});
makeSectionHeaderSvg({
  filename: 'sec-stack.svg',
  index: '02',
  title: 'ENGINEERING STACK & ARCHITECTURE',
  rightLabel: 'FULL-STACK & MOBILE',
  accent: '#62D8F9',
});
makeSectionHeaderSvg({
  filename: 'sec-telemetry.svg',
  index: '03',
  title: 'LIVE GITHUB TELEMETRY',
  rightLabel: 'AUTO-SYNC // 6H CRON',
  accent: '#FF689B',
});

console.log('Generated Neo-Brutalist SVG suite (hero-banner.svg, 3 CTA buttons, 3 section headers, 6 project cards, tech-stack.svg)');

