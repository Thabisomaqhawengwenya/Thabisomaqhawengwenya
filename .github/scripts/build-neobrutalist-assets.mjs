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

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   1. HERO BANNER (hero-banner.svg) â€” 960x316
   Directly translated from portfolio-one (https://maqhawe-portfolio.vercel.app/):
   - Warm cream canvas (#F5F0E8), white surface (#FFFFFF), 3px solid #000000 border
   - 7px 7px 0px #000000 hard offset shadow, 0px border-radius
   - Greeting badge in #FFE500 with 3px black border
   - Stacked display name "Maqhawe Ngwenya." with thick #FFE500 underline
   - 4px solid #FFE500 left-bordered introduction as a Front-end Developer
   - Right-hand Identity & Focus Card modeled after Hero/index.tsx AvatarCard + Stickers
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const heroSvg = `<svg width="960" height="316" viewBox="0 0 960 316" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="heroTitle heroDesc">
  <title id="heroTitle">Maqhawe Thabiso Ngwenya â€” Front-end Developer</title>
  <desc id="heroDesc">Front-end Developer based in Zimbabwe building responsive web interfaces, interactive front-end applications, and practical digital products.</desc>
  <style>
    .eyebrow {
      font: 700 11.5px 'Space Mono', 'Courier New', Consolas, monospace;
      fill: #000000;
      letter-spacing: 1.1px;
    }
    .hero-name {
      font: 900 44px 'Space Grotesk', 'Arial Black', Impact, system-ui, sans-serif;
      fill: #000000;
      letter-spacing: -1.3px;
    }
    .body-copy {
      font: 500 14.5px 'Space Grotesk', 'Segoe UI', -apple-system, sans-serif;
      fill: #222222;
    }
    .body-bold {
      font: 700 14.5px 'Space Grotesk', 'Segoe UI', -apple-system, sans-serif;
      fill: #000000;
    }
    .card-hdr {
      font: 700 10.5px 'Space Mono', 'Courier New', Consolas, monospace;
      fill: #000000;
      letter-spacing: 1px;
    }
    .focus-title {
      font: 800 14px 'Space Grotesk', 'Segoe UI', sans-serif;
      fill: #000000;
    }
    .focus-sub {
      font: 600 11.5px 'Space Mono', 'Courier New', Consolas, monospace;
      fill: #222222;
    }
    .footer-bar-txt {
      font: 700 11px 'Space Mono', 'Courier New', Consolas, monospace;
      fill: #FFFFFF;
      letter-spacing: 1px;
    }
    .footer-bar-accent {
      font: 700 11px 'Space Mono', 'Courier New', Consolas, monospace;
      fill: #FFE500;
      letter-spacing: 1px;
    }
  </style>

  <!-- Warm Cream Backdrop (#F5F0E8 from theme.ts) -->
  <rect x="0" y="0" width="960" height="316" fill="#F5F0E8" />

  <!-- Hard Offset Shadow (7px 7px 0px #000000) -->
  <rect x="21" y="21" width="925" height="281" fill="#000000" />

  <!-- Outer Frame (#FFFFFF surface, 3px solid #000000) -->
  <rect x="14" y="14" width="925" height="281" fill="#FFFFFF" stroke="#000000" stroke-width="3" />

  <!-- Top Identity Strip -->
  <rect x="14" y="14" width="925" height="36" fill="#EDE8DF" stroke="#000000" stroke-width="3" />
  <rect x="28" y="25" width="12" height="12" fill="#FFE500" stroke="#000000" stroke-width="2" />
  <text x="48" y="36" class="eyebrow">// DEVELOPER PROFILE &amp; WORK ARCHIVE</text>
  <line x1="628" y1="14" x2="628" y2="50" stroke="#000000" stroke-width="3" />
  <text x="646" y="36" class="eyebrow">LOCATION: ZIMBABWE</text>

  <!-- Vertical Structural Divider -->
  <line x1="628" y1="50" x2="628" y2="257" stroke="#000000" stroke-width="3" />

  <!-- LEFT COLUMN: Portfolio Hero Adaptation -->
  <g transform="translate(38, 68)">
    <!-- Greeting Badge (Matches Hero/index.tsx Greeting) -->
    <rect x="3" y="3" width="232" height="28" fill="#000000" />
    <rect x="0" y="0" width="232" height="28" fill="#FFE500" stroke="#000000" stroke-width="2.5" />
    <text x="12" y="18.5" class="eyebrow">FRONT-END DEVELOPER</text>

    <!-- Display Name with #FFE500 Underline Accent -->
    <rect x="0" y="72" width="542" height="12" fill="#FFE500" />
    <text x="0" y="75" class="hero-name">Maqhawe Ngwenya.</text>

    <!-- Left-Bordered Introduction (Matches HeroSubtitle border-left: 4px solid #FFE500) -->
    <rect x="0" y="96" width="5" height="72" fill="#FFE500" stroke="#000000" stroke-width="1.5" />
    <text x="18" y="113" class="body-copy">I design and build responsive web interfaces and practical software</text>
    <text x="18" y="136" class="body-copy">with <tspan class="body-bold">React, JavaScript, TypeScript, and modern CSS</tspan>, paired with</text>
    <text x="18" y="159" class="body-copy">clean UI/UX architecture, Node.js APIs, and mobile experiments.</text>
  </g>

  <!-- RIGHT COLUMN: Focus & Approach Matrix -->
  <g transform="translate(628, 50)">
    <!-- Row 1: Interface Engineering -->
    <rect x="0" y="0" width="311" height="69" fill="#F5F0E8" stroke="#000000" stroke-width="3" />
    <rect x="16" y="14" width="66" height="20" fill="#FFDC26" stroke="#000000" stroke-width="2" />
    <text x="49" y="28" text-anchor="middle" class="card-hdr">FOCUS 01</text>
    <text x="94" y="29" class="focus-title">Front-End &amp; UI/UX Craft</text>
    <text x="16" y="52" class="focus-sub">Component systems, motion &amp; layouts</text>

    <!-- Row 2: Web & Mobile Applications -->
    <rect x="0" y="69" width="311" height="69" fill="#FFFFFF" stroke="#000000" stroke-width="3" />
    <rect x="16" y="83" width="66" height="20" fill="#62D8F9" stroke="#000000" stroke-width="2" />
    <text x="49" y="97" text-anchor="middle" class="card-hdr">FOCUS 02</text>
    <text x="94" y="98" class="focus-title">Web &amp; Mobile Applications</text>
    <text x="16" y="121" class="focus-sub">React, Vite, Expo &amp; local-first tools</text>

    <!-- Row 3: Practical Problem Solving -->
    <rect x="0" y="138" width="311" height="69" fill="#F5F0E8" stroke="#000000" stroke-width="3" />
    <rect x="16" y="152" width="66" height="20" fill="#A6ECD3" stroke="#000000" stroke-width="2" />
    <text x="49" y="166" text-anchor="middle" class="card-hdr">FOCUS 03</text>
    <text x="94" y="167" class="focus-title">Practical Problem Solving</text>
    <text x="16" y="190" class="focus-sub">REST APIs, SQL schemas &amp; real workflows</text>
  </g>

  <!-- Bottom Portfolio & Status Strip -->
  <rect x="14" y="257" width="925" height="38" fill="#000000" stroke="#000000" stroke-width="3" />
  <circle cx="34" cy="276" r="5" fill="#00C853" />
  <text x="48" y="280" class="footer-bar-txt">OPEN TO WORK &amp; COLLABORATIONS</text>
  <text x="918" y="280" text-anchor="end" class="footer-bar-accent">PORTFOLIO: MAQHAWE-PORTFOLIO.VERCEL.APP â†-</text>
</svg>
`;

fs.writeFileSync(path.join(ROOT, 'hero-banner.svg'), heroSvg, 'utf8');

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   2. QUICK NAVIGATION BUTTONS (assets/btn-*.svg) â€” 304x56
   Honest labels with working destinations and zero fake counts.
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function makeButtonSvg({ filename, label, sublabel, bg, width = 304 }) {
  const w = width;
  const h = 56;
  const boxW = w - 10;
  const boxH = h - 10;
  const svg = `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(label)} â€” ${esc(sublabel)}">
  <style>
    .btn-main { font: 800 13px 'Space Grotesk', 'Arial Black', sans-serif; fill: #000000; letter-spacing: 0.5px; }
    .btn-sub  { font: 700 10px 'Space Mono', 'Courier New', monospace; fill: #111111; }
  </style>
  <rect x="0" y="0" width="${w}" height="${h}" fill="#F5F0E8" />
  <rect x="8" y="8" width="${boxW}" height="${boxH}" fill="#000000" />
  <rect x="3" y="3" width="${boxW}" height="${boxH}" fill="${bg}" stroke="#000000" stroke-width="3" />
  <text x="16" y="24" class="btn-main">${esc(label)}</text>
  <text x="16" y="40" class="btn-sub">${esc(sublabel)}</text>
  <rect x="${boxW - 34}" y="14" width="24" height="24" fill="#FFFFFF" stroke="#000000" stroke-width="2.5" />
  <text x="${boxW - 27}" y="31" class="btn-main">â†-</text>
</svg>
`;
  fs.writeFileSync(path.join(ASSETS_DIR, filename), svg, 'utf8');
}

makeButtonSvg({
  filename: 'btn-portfolio.svg',
  label: 'VIEW PORTFOLIO',
  sublabel: 'MAQHAWE-PORTFOLIO.VERCEL.APP',
  bg: '#FFE500',
});
makeButtonSvg({
  filename: 'btn-repos.svg',
  label: 'BROWSE REPOSITORIES',
  sublabel: 'SOURCE CODE & EXPERIMENTS',
  bg: '#62D8F9',
});
makeButtonSvg({
  filename: 'btn-github.svg',
  label: 'GITHUB PROFILE',
  sublabel: '@THABISOMAQHAWENGWENYA',
  bg: '#A6ECD3',
});

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   3. FEATURED PROJECT CARDS (assets/card-*.svg) â€” 467x232
   Honest, specific project descriptions grounded in actual repo code.
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const PROJECTS = [
  {
    filename: 'card-portfolio.svg',
    index: '01',
    title: 'DEVELOPER PORTFOLIO',
    status: 'LIVE DEMO + REPO',
    headerBg: '#FFE500',
    tagBg: '#FFFFFF',
    tags: ['REACT', 'TYPESCRIPT', 'STYLED-COMP', 'FRAMER MOTION'],
    lines: [
      'Neo-brutalist personal portfolio built with React, Vite,',
      'and TypeScript. Features 3D book page-flip project views,',
      'scroll-linked text highlights, and a Firebase content manager.',
    ],
  },
  {
    filename: 'card-elohim.svg',
    index: '02',
    title: "ELOHIM'S LEGACY",
    status: 'LIVE DEMO + REPO',
    headerBg: '#62D8F9',
    tagBg: '#FFE500',
    tags: ['REACT', 'THREE.JS', 'TYPESCRIPT', 'STYLED-COMP'],
    lines: [
      'Interactive 3D streetwear storefront experiment using',
      'Three.js particle point clouds, scroll-driven camera stages,',
      'product size selection, and direct WhatsApp checkout links.',
    ],
  },
  {
    filename: 'card-arcane.svg',
    index: '03',
    title: 'ARCANE INTERACTIVE',
    status: 'LIVE DEMO + REPO',
    headerBg: '#FF689B',
    tagBg: '#FFFFFF',
    tags: ['HTML5', 'CSS3', 'JAVASCRIPT', 'GSAP'],
    lines: [
      'Front-end motion study inspired by Zentry and Arcane,',
      'implementing GSAP polygon clip-path transitions, timed',
      'video hero sequences, and interactive audio controls.',
    ],
  },
  {
    filename: 'card-cashflow.svg',
    index: '04',
    title: 'CASHFLOW MATE',
    status: 'REPOSITORY',
    headerBg: '#A6ECD3',
    tagBg: '#FFE500',
    tags: ['TYPESCRIPT', 'REACT NATIVE', 'EXPO', 'NODE.JS'],
    lines: [
      'Financial record and bookkeeping app for small traders,',
      'with CSV and EcoCash SMS statement parsing, multi-currency',
      'ledgers (USD/ZiG/ZAR), and an offline-first Expo mobile UI.',
    ],
  },
  {
    filename: 'card-school.svg',
    index: '05',
    title: 'SCHOOL MANAGEMENT APP',
    status: 'LIVE DEMO + REPO',
    headerBg: '#FFE500',
    tagBg: '#62D8F9',
    tags: ['NEXT.JS', 'TYPESCRIPT', 'PRISMA', 'POSTGRESQL'],
    lines: [
      'Web application for managing school records, student',
      'dashboards, and role-based access control using Next.js',
      'App Router, TypeScript, Prisma ORM, and PostgreSQL.',
    ],
  },
  {
    filename: 'card-lifeos.svg',
    index: '06',
    title: 'LIFEOS MOBILE',
    status: 'REPOSITORY',
    headerBg: '#62D8F9',
    tagBg: '#A6ECD3',
    tags: ['REACT NATIVE', 'TYPESCRIPT', 'EXPO', 'SQLITE'],
    lines: [
      'Android personal productivity application built with Expo',
      'and local SQLite storage for tracking daily tasks, habits,',
      'personal expenses, and scheduled local reminders.',
    ],
  },
];

for (const proj of PROJECTS) {
  let tagX = 24;
  const tagElements = proj.tags.map((t) => {
    const w = t.length * 7.6 + 16;
    const el = `
    <g transform="translate(${tagX.toFixed(1)}, 178)">
      <rect x="2" y="2" width="${w.toFixed(1)}" height="24" fill="#000000" />
      <rect x="0" y="0" width="${w.toFixed(1)}" height="24" fill="#F5F0E8" stroke="#000000" stroke-width="2" />
      <text x="${(w / 2).toFixed(1)}" y="16" text-anchor="middle" class="chip-text">${esc(t)}</text>
    </g>`;
    tagX += w + 8;
    return el;
  }).join('');

  const cardSvg = `<svg width="467" height="232" viewBox="0 0 467 232" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(proj.title)} â€” ${esc(proj.lines.join(' '))}">
  <style>
    .idx { font: 800 13px 'Space Mono', 'Courier New', monospace; fill: #000000; }
    .card-title { font: 900 17.5px 'Space Grotesk', 'Arial Black', sans-serif; fill: #000000; letter-spacing: -0.3px; }
    .status-pill { font: 700 9.5px 'Space Mono', 'Courier New', monospace; fill: #000000; letter-spacing: 0.4px; }
    .desc { font: 500 13.5px 'Space Grotesk', 'Segoe UI', -apple-system, sans-serif; fill: #111111; }
    .chip-text { font: 700 10px 'Space Mono', 'Courier New', monospace; fill: #000000; }
  </style>

  <!-- Cream Backdrop -->
  <rect x="0" y="0" width="467" height="232" fill="#F5F0E8" />

  <!-- Hard Offset Shadow (6px, 6px, #000000) -->
  <rect x="12" y="12" width="445" height="210" fill="#000000" />

  <!-- Card Body (#FFFFFF, 3px #000000 border, 0px radius) -->
  <rect x="6" y="6" width="445" height="210" fill="#FFFFFF" stroke="#000000" stroke-width="3" />

  <!-- Header Strip -->
  <rect x="6" y="6" width="445" height="44" fill="${proj.headerBg}" stroke="#000000" stroke-width="3" />
  <rect x="6" y="6" width="48" height="44" fill="#FFFFFF" stroke="#000000" stroke-width="3" />
  <text x="30" y="33" text-anchor="middle" class="idx">${proj.index}</text>
  <text x="66" y="34" class="card-title">${esc(proj.title)}</text>

  <!-- Status Stamp -->
  <rect x="322" y="16" width="116" height="24" fill="${proj.tagBg}" stroke="#000000" stroke-width="2" />
  <text x="380" y="32" text-anchor="middle" class="status-pill">${esc(proj.status)}</text>

  <!-- Description Copy -->
  <text x="24" y="82" class="desc">${esc(proj.lines[0])}</text>
  <text x="24" y="106" class="desc">${esc(proj.lines[1])}</text>
  <text x="24" y="130" class="desc">${esc(proj.lines[2])}</text>

  <!-- Structural Divider -->
  <line x1="24" y1="158" x2="432" y2="158" stroke="#000000" stroke-width="2" />

  <!-- Tech Stack Chips -->
  ${tagElements}
</svg>
`;
  fs.writeFileSync(path.join(ASSETS_DIR, proj.filename), cardSvg, 'utf8');
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   4. TECHNOLOGY STACK MATRIX (assets/tech-stack.svg) â€” 960x328
   Directly mirrors Skills/index.tsx from portfolio-one:
   - 3x2 bordered grid (6 categories) with hard offset shadow
   - Colored category label tags (#FFE500, #62D8F9, #FF689B, #A6ECD3)
   - Individual bordered SkillPills with 2px solid #000000 and 2px offset shadow
   - Only includes verified, demonstrable technologies from portfolio & repos
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const STACK_GROUPS = [
  {
    col: 0, row: 0,
    label: '01 // FRONT-END DEVELOPMENT',
    badgeBg: '#FFE500',
    skills: [
      ['React.js', 'HTML5', 'CSS3'],
      ['Styled Components', 'Vite', 'Framer Motion'],
    ],
  },
  {
    col: 1, row: 0,
    label: '02 // PROGRAMMING LANGUAGES',
    badgeBg: '#62D8F9',
    skills: [
      ['JavaScript (ES6+)', 'TypeScript'],
      ['Python', 'SQL'],
    ],
  },
  {
    col: 2, row: 0,
    label: '03 // BACK-END & APIS',
    badgeBg: '#FF689B',
    skills: [
      ['Node.js', 'Express.js'],
      ['REST APIs', 'Prisma ORM'],
    ],
  },
  {
    col: 0, row: 1,
    label: '04 // DATABASES & BaaS',
    badgeBg: '#A6ECD3',
    skills: [
      ['PostgreSQL', 'MySQL', 'SQLite'],
      ['Firebase', 'Supabase'],
    ],
  },
  {
    col: 1, row: 1,
    label: '05 // UI/UX & DESIGN TOOLS',
    badgeBg: '#FFE500',
    skills: [
      ['Figma', 'Canva'],
      ['Responsive Design', 'WCAG Accessibility'],
    ],
  },
  {
    col: 2, row: 1,
    label: '06 // WORKFLOW & DEPLOYMENT',
    badgeBg: '#62D8F9',
    skills: [
      ['Git', 'GitHub', 'VS Code'],
      ['Vercel', 'npm / Vite CLI'],
    ],
  },
];

const colW = 308.67;
const rowH = 148;
let groupCells = '';

for (const g of STACK_GROUPS) {
  const gx = 13 + g.col * colW;
  const gy = 13 + g.row * rowH;
  const labelW = g.label.length * 7.4 + 18;

  let pills = '';
  g.skills.forEach((rowSkills, rIdx) => {
    let px = 18;
    const py = 56 + rIdx * 40;
    rowSkills.forEach((sk) => {
      const sw = sk.length * 7.6 + 20;
      pills += `
      <g transform="translate(${px.toFixed(1)}, ${py})">
        <rect x="2" y="2" width="${sw.toFixed(1)}" height="28" fill="#000000" />
        <rect x="0" y="0" width="${sw.toFixed(1)}" height="28" fill="#F5F0E8" stroke="#000000" stroke-width="2" />
        <text x="${(sw / 2).toFixed(1)}" y="18.5" text-anchor="middle" class="skill-pill">${esc(sk)}</text>
      </g>`;
      px += sw + 8;
    });
  });

  groupCells += `
  <g transform="translate(${gx.toFixed(2)}, ${gy})">
    <rect x="0" y="0" width="${colW.toFixed(2)}" height="${rowH}" fill="#FFFFFF" stroke="#000000" stroke-width="3" />
    <rect x="18" y="16" width="${labelW.toFixed(1)}" height="24" fill="${g.badgeBg}" stroke="#000000" stroke-width="2" />
    <text x="27" y="32" class="group-label">${esc(g.label)}</text>
    ${pills}
  </g>`;
}

const techStackSvg = `<svg width="960" height="328" viewBox="0 0 960 328" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Technology Stack organized by Front-end, Languages, Back-end, Databases, Design Tools, and Workflow">
  <style>
    .group-label {
      font: 700 10.5px 'Space Mono', 'Courier New', Consolas, monospace;
      fill: #000000;
      letter-spacing: 0.6px;
    }
    .skill-pill {
      font: 700 12px 'Space Grotesk', 'Segoe UI', -apple-system, sans-serif;
      fill: #000000;
    }
  </style>

  <!-- Cream Canvas -->
  <rect x="0" y="0" width="960" height="328" fill="#F5F0E8" />

  <!-- Hard Offset Shadow (7px 7px 0px #000000) -->
  <rect x="20" y="20" width="926" height="296" fill="#000000" />

  <!-- 3x2 Neo-Brutalist Skills Grid -->
  ${groupCells}
</svg>
`;

fs.writeFileSync(path.join(ASSETS_DIR, 'tech-stack.svg'), techStackSvg, 'utf8');

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   5. SECTION HEADERS (assets/sec-*.svg) â€” 960x58
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function makeSectionHeaderSvg({ filename, index, title, rightLabel, accent }) {
  const svg = `<svg width="960" height="58" viewBox="0 0 960 58" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(title)}">
  <style>
    .s-idx { font: 800 13.5px 'Space Mono', 'Courier New', monospace; fill: #000000; }
    .s-ttl { font: 900 18px 'Space Grotesk', 'Arial Black', sans-serif; fill: #000000; letter-spacing: 0.4px; }
    .s-rgt { font: 700 11px 'Space Mono', 'Courier New', monospace; fill: #000000; letter-spacing: 0.6px; }
  </style>
  <rect x="0" y="0" width="960" height="58" fill="#F5F0E8" />
  <rect x="19" y="13" width="926" height="38" fill="#000000" />
  <rect x="13" y="7" width="926" height="38" fill="#FFFFFF" stroke="#000000" stroke-width="3" />
  <rect x="13" y="7" width="54" height="38" fill="${accent}" stroke="#000000" stroke-width="3" />
  <text x="40" y="31" text-anchor="middle" class="s-idx">${esc(index)}</text>
  <text x="84" y="32" class="s-ttl">${esc(title)}</text>
  <rect x="728" y="14" width="198" height="24" fill="#F5F0E8" stroke="#000000" stroke-width="2" />
  <text x="827" y="30" text-anchor="middle" class="s-rgt">${esc(rightLabel)}</text>
</svg>
`;
  fs.writeFileSync(path.join(ASSETS_DIR, filename), svg, 'utf8');
}

makeSectionHeaderSvg({
  filename: 'sec-projects.svg',
  index: '01',
  title: 'FEATURED PROJECTS',
  rightLabel: 'SELECTED WORK & REPOS',
  accent: '#FFE500',
});
makeSectionHeaderSvg({
  filename: 'sec-stack.svg',
  index: '02',
  title: 'TECHNOLOGY STACK & TOOLS',
  rightLabel: 'DEMONSTRATED IN PROJECTS',
  accent: '#62D8F9',
});
makeSectionHeaderSvg({
  filename: 'sec-telemetry.svg',
  index: '03',
  title: 'GITHUB ACTIVITY & LANGUAGES',
  rightLabel: 'AUTHENTIC API DATA',
  accent: '#A6ECD3',
});

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   6. MINIMAL CLOSING FOOTER (assets/footer-banner.svg) â€” 960x88
   Restrained, on-brand footer modeled after Footer/index.tsx
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const footerSvg = `<svg width="960" height="88" viewBox="0 0 960 88" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Maqhawe Thabiso Ngwenya â€” Front-end Developer â€” Visit Portfolio at maqhawe-portfolio.vercel.app">
  <style>
    .f-eyebrow { font: 700 10.5px 'Space Mono', 'Courier New', Consolas, monospace; fill: #222222; letter-spacing: 1px; }
    .f-name    { font: 900 18px 'Space Grotesk', 'Arial Black', sans-serif; fill: #000000; letter-spacing: -0.3px; }
    .f-btn     { font: 800 12px 'Space Mono', 'Courier New', Consolas, monospace; fill: #000000; letter-spacing: 0.6px; }
  </style>
  <rect x="0" y="0" width="960" height="88" fill="#F5F0E8" />
  <rect x="19" y="16" width="926" height="62" fill="#000000" />
  <rect x="13" y="10" width="926" height="62" fill="#FFFFFF" stroke="#000000" stroke-width="3" />
  <rect x="13" y="10" width="14" height="62" fill="#FFE500" stroke="#000000" stroke-width="3" />
  <text x="44" y="34" class="f-eyebrow">// FRONT-END DEVELOPER Â· ZIMBABWE</text>
  <text x="44" y="57" class="f-name">Maqhawe Thabiso Ngwenya</text>

  <!-- Right CTA Box -->
  <rect x="652" y="25" width="268" height="36" fill="#000000" />
  <rect x="649" y="22" width="268" height="36" fill="#FFE500" stroke="#000000" stroke-width="2.5" />
  <text x="783" y="45" text-anchor="middle" class="f-btn">MAQHAWE-PORTFOLIO.VERCEL.APP â†-</text>
</svg>
`;

fs.writeFileSync(path.join(ASSETS_DIR, 'footer-banner.svg'), footerSvg, 'utf8');
console.log('Generated complete Neo-Brutalist SVG asset system.');
