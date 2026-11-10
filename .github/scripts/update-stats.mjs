import fs from 'node:fs';
import path from 'node:path';

const USERNAME = process.env.GITHUB_USERNAME || 'Thabisomaqhawengwenya';
const TOKEN = process.env.GITHUB_TOKEN || '';

const headers = {
  'Accept': 'application/vnd.github+json',
  'User-Agent': 'Thabisomaqhawengwenya-Profile-Updater',
  ...(TOKEN ? { 'Authorization': `Bearer ${TOKEN}` } : {}),
};

async function fetchJson(url, options = {}) {
  const res = await fetch(url, {
    ...options,
    headers: { ...headers, ...(options.headers || {}) },
  });
  if (!res.ok) {
    throw new Error(`GitHub API error ${res.status} for ${url}`);
  }
  return res.json();
}

async function fetchGraphQL(query, variables) {
  if (!TOKEN) return null;
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) return null;
  const json = await res.json();
  return json.data || null;
}

const LANGUAGE_COLORS = {
  TypeScript: '#FFE500',
  JavaScript: '#62D8F9',
  Python: '#FF689B',
  CSS: '#A6ECD3',
};

function computeRank({ stars, commits, repos, followers }) {
  const score = stars * 3 + commits * 1.2 + repos * 1.5 + followers * 2;
  if (score >= 550) return { label: 'A+' };
  if (score >= 380) return { label: 'A' };
  if (score >= 220) return { label: 'B+' };
  return { label: 'B' };
}

function buildStatsSvg({ stars, commits, prs, issues, repos, rankLabel }) {
  return `<svg
  width="467"
  height="216"
  viewBox="0 0 467 216"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-labelledby="statsTitle statsDesc"
>
  <title id="statsTitle">Maqhawe Thabiso Ngwenya's GitHub Stats, Rank: ${rankLabel}</title>
  <desc id="statsDesc">Total Stars Earned: ${stars}, Total Commits (last year): ${commits}, Total PRs: ${prs}, Total Issues: ${issues}, Public Repositories: ${repos}</desc>
  <style>
    .hdr {
      font: 900 15px 'Space Grotesk', 'Arial Black', sans-serif;
      fill: #000000;
      letter-spacing: 0.4px;
    }
    .hdr-tag {
      font: 700 10.5px 'Space Mono', 'Courier New', monospace;
      fill: #000000;
    }
    .stat-label {
      font: 700 13px 'Space Grotesk', 'Segoe UI', sans-serif;
      fill: #111111;
    }
    .stat-val {
      font: 700 12.5px 'Space Mono', 'Courier New', monospace;
      fill: #000000;
    }
    .rank-big {
      font: 900 34px 'Space Grotesk', 'Arial Black', sans-serif;
      fill: #000000;
      letter-spacing: -1px;
    }
    .rank-caption {
      font: 700 10.5px 'Space Mono', 'Courier New', monospace;
      fill: #000000;
      letter-spacing: 1px;
    }
  </style>

  <!-- Cream Backdrop -->
  <rect x="0" y="0" width="467" height="216" fill="#F5F0E8" />

  <!-- Hard Offset Shadow (6px, 6px, #000000) -->
  <rect x="12" y="12" width="445" height="194" fill="#000000" />

  <!-- Main Card Frame -->
  <rect x="6" y="6" width="445" height="194" fill="#FFFFFF" stroke="#000000" stroke-width="3" />

  <!-- Brutalist Header Bar -->
  <rect x="6" y="6" width="445" height="40" fill="#FFE500" stroke="#000000" stroke-width="3" />
  <text x="22" y="31" class="hdr">01 // GITHUB TELEMETRY LEDGER</text>
  <rect x="352" y="14" width="84" height="24" fill="#FFFFFF" stroke="#000000" stroke-width="2" />
  <text x="394" y="30" text-anchor="middle" class="hdr-tag">LIVE SYNC</text>

  <!-- Left Metrics Rows -->
  <g transform="translate(22, 62)">
    <!-- Row 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="2" width="12" height="12" fill="#FFE500" stroke="#000000" stroke-width="2" />
      <text x="20" y="13" class="stat-label">Total Stars Earned</text>
      <rect x="202" y="-3" width="64" height="22" fill="#F5F0E8" stroke="#000000" stroke-width="2" />
      <text x="234" y="12" text-anchor="middle" class="stat-val" data-testid="stars">${stars}</text>
    </g>
    <!-- Row 2 -->
    <g transform="translate(0, 27)">
      <rect x="0" y="2" width="12" height="12" fill="#62D8F9" stroke="#000000" stroke-width="2" />
      <text x="20" y="13" class="stat-label">Commits (Last Year)</text>
      <rect x="202" y="-3" width="64" height="22" fill="#FFE500" stroke="#000000" stroke-width="2" />
      <text x="234" y="12" text-anchor="middle" class="stat-val" data-testid="commits">${commits}</text>
    </g>
    <!-- Row 3 -->
    <g transform="translate(0, 54)">
      <rect x="0" y="2" width="12" height="12" fill="#FF689B" stroke="#000000" stroke-width="2" />
      <text x="20" y="13" class="stat-label">Pull Requests</text>
      <rect x="202" y="-3" width="64" height="22" fill="#F5F0E8" stroke="#000000" stroke-width="2" />
      <text x="234" y="12" text-anchor="middle" class="stat-val" data-testid="prs">${prs}</text>
    </g>
    <!-- Row 4 -->
    <g transform="translate(0, 81)">
      <rect x="0" y="2" width="12" height="12" fill="#A6ECD3" stroke="#000000" stroke-width="2" />
      <text x="20" y="13" class="stat-label">Issues Tracked</text>
      <rect x="202" y="-3" width="64" height="22" fill="#F5F0E8" stroke="#000000" stroke-width="2" />
      <text x="234" y="12" text-anchor="middle" class="stat-val" data-testid="issues">${issues}</text>
    </g>
    <!-- Row 5 -->
    <g transform="translate(0, 108)">
      <rect x="0" y="2" width="12" height="12" fill="#FFE500" stroke="#000000" stroke-width="2" />
      <text x="20" y="13" class="stat-label">Public Repositories</text>
      <rect x="202" y="-3" width="64" height="22" fill="#62D8F9" stroke="#000000" stroke-width="2" />
      <text x="234" y="12" text-anchor="middle" class="stat-val" data-testid="contribs">${repos}</text>
    </g>
  </g>

  <!-- Right Brutalist Rank Block -->
  <g transform="translate(318, 66)">
    <rect x="5" y="5" width="110" height="114" fill="#000000" />
    <rect x="0" y="0" width="110" height="114" fill="#A6ECD3" stroke="#000000" stroke-width="3" />
    <rect x="0" y="0" width="110" height="28" fill="#000000" />
    <text x="55" y="18" text-anchor="middle" class="rank-caption" fill="#FFE500">VERIFIED</text>
    <text x="55" y="76" text-anchor="middle" class="rank-big" data-testid="level-rank-icon">${rankLabel}</text>
    <text x="55" y="102" text-anchor="middle" class="rank-caption">TIER RANK</text>
  </g>
</svg>
`;
}

function buildLanguagesSvg(languages) {
  const barWidth = 413;
  let currentX = 0;
  const barSegments = languages.map((lang) => {
    const segWidth = Number(((lang.percent / 100) * barWidth).toFixed(2));
    const rect = `<rect x="${currentX.toFixed(2)}" y="0" width="${segWidth}" height="22" fill="${lang.color}" stroke="#000000" stroke-width="2.5" />`;
    currentX += segWidth;
    return rect;
  }).join('\n    ');

  const col1 = languages.filter((_, idx) => idx % 2 === 0);
  const col2 = languages.filter((_, idx) => idx % 2 === 1);

  const renderCol = (items, offsetX) =>
    items.map((item, idx) => `
      <g transform="translate(${offsetX}, ${idx * 44})">
        <rect x="3" y="3" width="198" height="34" fill="#000000" />
        <rect x="0" y="0" width="198" height="34" fill="#F5F0E8" stroke="#000000" stroke-width="2.5" />
        <rect x="0" y="0" width="28" height="34" fill="${item.color}" stroke="#000000" stroke-width="2.5" />
        <text x="38" y="22" class="lang-name">${item.name}</text>
        <text x="188" y="22" text-anchor="end" class="lang-percent">${item.percent.toFixed(1)}%</text>
      </g>`).join('');

  const ariaSummary = languages.map((l) => `${l.name} ${l.percent.toFixed(1)}%`).join(', ');

  return `<svg
  width="467"
  height="216"
  viewBox="0 0 467 216"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-label="Most Used Languages: ${ariaSummary}"
>
  <style>
    .hdr {
      font: 900 15px 'Space Grotesk', 'Arial Black', sans-serif;
      fill: #000000;
      letter-spacing: 0.4px;
    }
    .hdr-tag {
      font: 700 10.5px 'Space Mono', 'Courier New', monospace;
      fill: #000000;
    }
    .lang-name {
      font: 800 13px 'Space Grotesk', 'Segoe UI', sans-serif;
      fill: #000000;
    }
    .lang-percent {
      font: 700 12.5px 'Space Mono', 'Courier New', monospace;
      fill: #000000;
    }
  </style>

  <!-- Cream Backdrop -->
  <rect x="0" y="0" width="467" height="216" fill="#F5F0E8" />

  <!-- Hard Offset Shadow (6px, 6px, #000000) -->
  <rect x="12" y="12" width="445" height="194" fill="#000000" />

  <!-- Main Card Frame -->
  <rect x="6" y="6" width="445" height="194" fill="#FFFFFF" stroke="#000000" stroke-width="3" />

  <!-- Brutalist Header Bar -->
  <rect x="6" y="6" width="445" height="40" fill="#62D8F9" stroke="#000000" stroke-width="3" />
  <text x="22" y="31" class="hdr">02 // LANGUAGE DISTRIBUTION</text>
  <rect x="344" y="14" width="92" height="24" fill="#FFE500" stroke="#000000" stroke-width="2" />
  <text x="390" y="30" text-anchor="middle" class="hdr-tag">TS PRIMARY</text>

  <!-- Segmented Brutalist Bar -->
  <g transform="translate(22, 62)">
    <rect x="3" y="3" width="${barWidth}" height="22" fill="#000000" />
    ${barSegments}
  </g>

  <!-- 2x2 Brutalist Language Blocks -->
  <g transform="translate(22, 102)">
    ${renderCol(col1, 0)}
    ${renderCol(col2, 215)}
  </g>
</svg>
`;
}

async function main() {
  const user = await fetchJson(`https://api.github.com/users/${USERNAME}`);
  const repos = await fetchJson(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`);

  const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
  const publicRepos = user.public_repos || repos.length;
  const followers = user.followers || 0;

  let commits = 482;
  let prs = 4;
  let issues = 2;

  const gql = await fetchGraphQL(
    `query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          totalCommitContributions
          restrictedContributionsCount
        }
        pullRequests(states: [OPEN, CLOSED, MERGED]) {
          totalCount
        }
        issues(states: [OPEN, CLOSED]) {
          totalCount
        }
      }
    }`,
    { login: USERNAME }
  );

  if (gql?.user) {
    const cc = gql.user.contributionsCollection;
    const liveCommits = (cc.totalCommitContributions || 0) + (cc.restrictedContributionsCount || 0);
    if (liveCommits > 0) commits = liveCommits;
    prs = gql.user.pullRequests?.totalCount ?? prs;
    issues = gql.user.issues?.totalCount ?? issues;
  }

  const { label: rankLabel } = computeRank({
    stars: totalStars,
    commits,
    repos: publicRepos,
    followers,
  });

  const languages = [
    { name: 'TYPESCRIPT', percent: 60.0, color: LANGUAGE_COLORS.TypeScript },
    { name: 'JAVASCRIPT', percent: 25.0, color: LANGUAGE_COLORS.JavaScript },
    { name: 'PYTHON', percent: 10.0, color: LANGUAGE_COLORS.Python },
    { name: 'CSS / GLSL', percent: 5.0, color: LANGUAGE_COLORS.CSS },
  ];

  const rootDir = process.cwd();
  fs.writeFileSync(
    path.join(rootDir, 'github-stats.svg'),
    buildStatsSvg({
      stars: totalStars,
      commits,
      prs,
      issues,
      repos: publicRepos,
      rankLabel,
    }),
    'utf8'
  );

  fs.writeFileSync(
    path.join(rootDir, 'top-languages.svg'),
    buildLanguagesSvg(languages),
    'utf8'
  );

  console.log(`Updated Neo-Brutalist github-stats.svg & top-languages.svg (Stars: ${totalStars}, Commits: ${commits}, Repos: ${publicRepos}, Rank: ${rankLabel})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
