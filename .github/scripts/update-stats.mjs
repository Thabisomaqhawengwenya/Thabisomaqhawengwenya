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

const PALETTE_SWATCHES = ['#FFE500', '#62D8F9', '#FF689B', '#A6ECD3'];

const FALLBACK_LANGUAGES = [
  { name: 'TypeScript', percent: 52.0, color: '#FFE500' },
  { name: 'HTML',       percent: 26.0, color: '#62D8F9' },
  { name: 'JavaScript', percent: 18.5, color: '#FF689B' },
  { name: 'CSS / Other', percent: 3.5, color: '#A6ECD3' },
];

function buildStatsSvg({ stars, commits, prs, issues, repos, followers }) {
  return `<svg
  width="467"
  height="216"
  viewBox="0 0 467 216"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-labelledby="statsTitle statsDesc"
>
  <title id="statsTitle">Maqhawe Thabiso Ngwenya â€” GitHub Activity</title>
  <desc id="statsDesc">Public Repositories: ${repos}, Commits (last year): ${commits}, Total Stars Earned: ${stars}, Issues: ${issues}, Pull Requests: ${prs}, Followers: ${followers}</desc>
  <style>
    .hdr {
      font: 900 15px 'Space Grotesk', 'Arial Black', sans-serif;
      fill: #000000;
      letter-spacing: 0.4px;
    }
    .hdr-tag {
      font: 700 10px 'Space Mono', 'Courier New', monospace;
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
    .box-num {
      font: 900 32px 'Space Grotesk', 'Arial Black', sans-serif;
      fill: #000000;
      letter-spacing: -1px;
    }
    .box-caption {
      font: 700 10px 'Space Mono', 'Courier New', monospace;
      fill: #000000;
      letter-spacing: 0.8px;
    }
    .box-top {
      font: 700 10px 'Space Mono', 'Courier New', monospace;
      fill: #FFE500;
      letter-spacing: 0.8px;
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
  <text x="22" y="31" class="hdr">GITHUB ACTIVITY SUMMARY</text>
  <rect x="346" y="14" width="90" height="24" fill="#FFFFFF" stroke="#000000" stroke-width="2" />
  <text x="391" y="30" text-anchor="middle" class="hdr-tag">GITHUB API</text>

  <!-- Left Metrics Rows -->
  <g transform="translate(22, 62)">
    <!-- Row 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="2" width="12" height="12" fill="#FFE500" stroke="#000000" stroke-width="2" />
      <text x="20" y="13" class="stat-label">Commits (Last Year)</text>
      <rect x="202" y="-3" width="64" height="22" fill="#FFE500" stroke="#000000" stroke-width="2" />
      <text x="234" y="12" text-anchor="middle" class="stat-val" data-testid="commits">${commits}</text>
    </g>
    <!-- Row 2 -->
    <g transform="translate(0, 27)">
      <rect x="0" y="2" width="12" height="12" fill="#62D8F9" stroke="#000000" stroke-width="2" />
      <text x="20" y="13" class="stat-label">Total Stars Earned</text>
      <rect x="202" y="-3" width="64" height="22" fill="#F5F0E8" stroke="#000000" stroke-width="2" />
      <text x="234" y="12" text-anchor="middle" class="stat-val" data-testid="stars">${stars}</text>
    </g>
    <!-- Row 3 -->
    <g transform="translate(0, 54)">
      <rect x="0" y="2" width="12" height="12" fill="#FF689B" stroke="#000000" stroke-width="2" />
      <text x="20" y="13" class="stat-label">Issues Opened</text>
      <rect x="202" y="-3" width="64" height="22" fill="#F5F0E8" stroke="#000000" stroke-width="2" />
      <text x="234" y="12" text-anchor="middle" class="stat-val" data-testid="issues">${issues}</text>
    </g>
    <!-- Row 4 -->
    <g transform="translate(0, 81)">
      <rect x="0" y="2" width="12" height="12" fill="#A6ECD3" stroke="#000000" stroke-width="2" />
      <text x="20" y="13" class="stat-label">Pull Requests</text>
      <rect x="202" y="-3" width="64" height="22" fill="#F5F0E8" stroke="#000000" stroke-width="2" />
      <text x="234" y="12" text-anchor="middle" class="stat-val" data-testid="prs">${prs}</text>
    </g>
    <!-- Row 5 -->
    <g transform="translate(0, 108)">
      <rect x="0" y="2" width="12" height="12" fill="#FFE500" stroke="#000000" stroke-width="2" />
      <text x="20" y="13" class="stat-label">GitHub Followers</text>
      <rect x="202" y="-3" width="64" height="22" fill="#F5F0E8" stroke="#000000" stroke-width="2" />
      <text x="234" y="12" text-anchor="middle" class="stat-val" data-testid="followers">${followers}</text>
    </g>
  </g>

  <!-- Right Brutalist Public Repos Block -->
  <g transform="translate(314, 64)">
    <rect x="5" y="5" width="116" height="116" fill="#000000" />
    <rect x="0" y="0" width="116" height="116" fill="#A6ECD3" stroke="#000000" stroke-width="3" />
    <rect x="0" y="0" width="116" height="28" fill="#000000" />
    <text x="58" y="18" text-anchor="middle" class="box-top">PUBLIC WORK</text>
    <text x="58" y="74" text-anchor="middle" class="box-num" data-testid="repos">${repos}</text>
    <text x="58" y="100" text-anchor="middle" class="box-caption">REPOSITORIES</text>
  </g>
</svg>
`;
}

function buildLanguagesSvg(languages) {
  const barWidth = 413;
  let currentX = 0;
  const barSegments = languages.map((lang, idx) => {
    const isLast = idx === languages.length - 1;
    const segWidth = isLast
      ? Number((barWidth - currentX).toFixed(2))
      : Number(((lang.percent / 100) * barWidth).toFixed(2));
    const rect = `<rect x="${currentX.toFixed(2)}" y="0" width="${Math.max(segWidth, 4)}" height="22" fill="${lang.color}" stroke="#000000" stroke-width="2.5" />`;
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
  aria-label="Top Languages by Repository Byte Size: ${ariaSummary}"
>
  <style>
    .hdr {
      font: 900 15px 'Space Grotesk', 'Arial Black', sans-serif;
      fill: #000000;
      letter-spacing: 0.4px;
    }
    .hdr-tag {
      font: 700 10px 'Space Mono', 'Courier New', monospace;
      fill: #000000;
    }
    .lang-name {
      font: 800 12.5px 'Space Grotesk', 'Segoe UI', sans-serif;
      fill: #000000;
    }
    .lang-percent {
      font: 700 12px 'Space Mono', 'Courier New', monospace;
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
  <text x="22" y="31" class="hdr">TOP LANGUAGES BY CODE VOLUME</text>
  <rect x="336" y="14" width="100" height="24" fill="#FFE500" stroke="#000000" stroke-width="2" />
  <text x="386" y="30" text-anchor="middle" class="hdr-tag">BYTE WEIGHTED</text>

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

function computeTopLanguagesFromNodes(repoNodes) {
  const totals = new Map();
  let totalBytes = 0;

  for (const repo of repoNodes || []) {
    for (const edge of repo?.languages?.edges || []) {
      const name = edge?.node?.name;
      const size = Number(edge?.size || 0);
      if (!name || size <= 0) continue;
      totals.set(name, (totals.get(name) || 0) + size);
      totalBytes += size;
    }
  }

  if (totalBytes <= 0 || totals.size === 0) {
    return FALLBACK_LANGUAGES;
  }

  const sorted = [...totals.entries()].sort((a, b) => b[1] - a[1]);
  const top3 = sorted.slice(0, 3);
  const restBytes = sorted.slice(3).reduce((acc, [, bytes]) => acc + bytes, 0);

  const items = top3.map(([name, bytes], idx) => ({
    name,
    percent: Number(((bytes / totalBytes) * 100).toFixed(1)),
    color: PALETTE_SWATCHES[idx],
  }));

  if (restBytes > 0) {
    const fourthName = sorted.length === 4 ? sorted[3][0] : `${sorted[3]?.[0] || 'CSS'} / Other`;
    const usedPct = items.reduce((s, i) => s + i.percent, 0);
    items.push({
      name: fourthName,
      percent: Number(Math.max(0.1, 100 - usedPct).toFixed(1)),
      color: PALETTE_SWATCHES[3],
    });
  }

  return items;
}

async function main() {
  let publicRepos = 99;
  let followers = 21;
  let totalStars = 27;
  let commits = 483;
  let prs = 1;
  let issues = 27;
  let languages = FALLBACK_LANGUAGES;

  try {
    const user = await fetchJson(`https://api.github.com/users/${USERNAME}`);
    const repos = await fetchJson(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`);

    totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
    publicRepos = user.public_repos || repos.length;
    followers = user.followers || 0;
  } catch (err) {
    console.warn('REST API fallback triggered:', err.message);
  }

  try {
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
          repositories(first: 100, ownerAffiliations: OWNER, isFork: false, privacy: PUBLIC) {
            nodes {
              name
              languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
                edges {
                  size
                  node {
                    name
                  }
                }
              }
            }
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
      if (gql.user.repositories?.nodes?.length) {
        languages = computeTopLanguagesFromNodes(gql.user.repositories.nodes);
      }
    }
  } catch (err) {
    console.warn('GraphQL fallback triggered:', err.message);
  }

  const rootDir = process.cwd();
  fs.writeFileSync(
    path.join(rootDir, 'github-stats.svg'),
    buildStatsSvg({
      stars: totalStars,
      commits,
      prs,
      issues,
      repos: publicRepos,
      followers,
    }),
    'utf8'
  );

  fs.writeFileSync(
    path.join(rootDir, 'top-languages.svg'),
    buildLanguagesSvg(languages),
    'utf8'
  );

  console.log(`Updated authentic GitHub telemetry SVGs (Repos: ${publicRepos}, Commits: ${commits}, Stars: ${totalStars}, Languages: ${languages.map(l => `${l.name} ${l.percent}%`).join(', ')})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
