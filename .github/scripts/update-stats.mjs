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
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3776ab',
  CSS: '#563d7c',
  HTML: '#e34c26',
  Shell: '#89e051',
};

function computeRank({ stars, commits, repos, followers }) {
  const score = stars * 3 + commits * 1.2 + repos * 1.5 + followers * 2;
  if (score >= 550) return { label: 'A+', dashoffset: 55 };
  if (score >= 380) return { label: 'A', dashoffset: 80 };
  if (score >= 220) return { label: 'B+', dashoffset: 110 };
  return { label: 'B', dashoffset: 135 };
}

function buildStatsSvg({ stars, commits, prs, issues, repos, rankLabel, dashoffset }) {
  return `<svg
  width="467"
  height="195"
  viewBox="0 0 467 195"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-labelledby="statsTitle statsDesc"
>
  <title id="statsTitle">Maqhawe Thabiso Ngwenya's GitHub Stats, Rank: ${rankLabel}</title>
  <desc id="statsDesc">Total Stars Earned: ${stars}, Total Commits (last year): ${commits}, Total PRs: ${prs}, Total Issues: ${issues}, Public Repositories: ${repos}</desc>
  <style>
    .header {
      font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
      fill: #70a5fd;
      animation: fadeInAnimation 0.8s ease-in-out forwards;
    }
    .stat {
      font: 600 13.5px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif;
      fill: #c0caf5;
    }
    .stat-value {
      font: 700 13.5px 'Space Mono', 'Fira Code', Consolas, monospace;
      fill: #38bdae;
    }
    .stagger {
      opacity: 0;
      animation: fadeInAnimation 0.3s ease-in-out forwards;
    }
    .rank-text {
      font: 800 24px 'Space Mono', 'Segoe UI', Ubuntu, Sans-Serif;
      fill: #38bdae;
      animation: scaleInAnimation 0.3s ease-in-out forwards;
    }
    .rank-sub {
      font: 600 10px 'Space Mono', Consolas, monospace;
      fill: #7aa2f7;
      letter-spacing: 1px;
    }
    .icon {
      fill: #bf91f3;
      display: block;
    }
    .rank-circle-rim {
      stroke: #70a5fd;
      fill: none;
      stroke-width: 6;
      opacity: 0.2;
    }
    .rank-circle {
      stroke: #70a5fd;
      stroke-dasharray: 250;
      fill: none;
      stroke-width: 6;
      stroke-linecap: round;
      opacity: 0.85;
      transform-origin: -10px 8px;
      transform: rotate(-90deg);
      animation: rankAnimation 1s forwards ease-in-out;
    }
    @keyframes rankAnimation {
      from { stroke-dashoffset: 251.3274; }
      to { stroke-dashoffset: ${dashoffset}; }
    }
    @keyframes scaleInAnimation {
      from { transform: translate(-5px, 5px) scale(0); }
      to { transform: translate(-5px, 5px) scale(1); }
    }
    @keyframes fadeInAnimation {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @media (prefers-reduced-motion: reduce) {
      .header, .stagger, .rank-text, .rank-circle {
        animation: none;
        opacity: 1;
      }
    }
  </style>

  <rect
    data-testid="card-bg"
    x="0.5"
    y="0.5"
    rx="8"
    height="194"
    width="466"
    fill="#1a1b27"
    stroke="#292e42"
    stroke-width="1"
  />

  <g data-testid="card-title" transform="translate(25, 34)">
    <text x="0" y="0" class="header" data-testid="header">Maqhawe Thabiso Ngwenya's GitHub Stats</text>
  </g>

  <g data-testid="main-card-body" transform="translate(0, 56)">
    <g data-testid="rank-circle" transform="translate(392, 47.5)">
      <circle class="rank-circle-rim" cx="-10" cy="8" r="40" />
      <circle class="rank-circle" cx="-10" cy="8" r="40" />
      <g class="rank-text">
        <text x="-5" y="4" alignment-baseline="central" dominant-baseline="central" text-anchor="middle" data-testid="level-rank-icon">${rankLabel}</text>
      </g>
      <text x="-10" y="64" text-anchor="middle" class="rank-sub">RANK</text>
    </g>

    <svg x="0" y="0">
      <g transform="translate(0, 0)">
        <g class="stagger" style="animation-delay: 150ms" transform="translate(25, 0)">
          <svg class="icon" viewBox="0 0 16 16" width="16" height="16">
            <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/>
          </svg>
          <text class="stat" x="25" y="12.5">Total Stars Earned:</text>
          <text class="stat-value" x="228" y="12.5" data-testid="stars">${stars}</text>
        </g>
      </g>
      <g transform="translate(0, 25)">
        <g class="stagger" style="animation-delay: 300ms" transform="translate(25, 0)">
          <svg class="icon" viewBox="0 0 16 16" width="16" height="16">
            <path fill-rule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"/>
          </svg>
          <text class="stat" x="25" y="12.5">Total Commits (last year):</text>
          <text class="stat-value" x="228" y="12.5" data-testid="commits">${commits}</text>
        </g>
      </g>
      <g transform="translate(0, 50)">
        <g class="stagger" style="animation-delay: 450ms" transform="translate(25, 0)">
          <svg class="icon" viewBox="0 0 16 16" width="16" height="16">
            <path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"/>
          </svg>
          <text class="stat" x="25" y="12.5">Total PRs:</text>
          <text class="stat-value" x="228" y="12.5" data-testid="prs">${prs}</text>
        </g>
      </g>
      <g transform="translate(0, 75)">
        <g class="stagger" style="animation-delay: 600ms" transform="translate(25, 0)">
          <svg class="icon" viewBox="0 0 16 16" width="16" height="16">
            <path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"/>
          </svg>
          <text class="stat" x="25" y="12.5">Total Issues:</text>
          <text class="stat-value" x="228" y="12.5" data-testid="issues">${issues}</text>
        </g>
      </g>
      <g transform="translate(0, 100)">
        <g class="stagger" style="animation-delay: 750ms" transform="translate(25, 0)">
          <svg class="icon" viewBox="0 0 16 16" width="16" height="16">
            <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
          </svg>
          <text class="stat" x="25" y="12.5">Public Repositories:</text>
          <text class="stat-value" x="228" y="12.5" data-testid="contribs">${repos}</text>
        </g>
      </g>
    </svg>
  </g>
</svg>
`;
}

function buildLanguagesSvg(languages) {
  const barWidth = 417;
  let currentX = 0;
  const barSegments = languages.map((lang) => {
    const segWidth = Number(((lang.percent / 100) * barWidth).toFixed(2));
    const rect = `<rect mask="url(#rect-mask)" x="${currentX.toFixed(2)}" y="0" width="${segWidth}" height="10" fill="${lang.color}" />`;
    currentX += segWidth;
    return rect;
  }).join('\n    ');

  const col1 = languages.filter((_, idx) => idx % 2 === 0);
  const col2 = languages.filter((_, idx) => idx % 2 === 1);

  const renderCol = (items, offsetX) =>
    items.map((item, idx) => `
      <g transform="translate(${offsetX}, ${idx * 32})">
        <circle cx="6" cy="6" r="5.5" fill="${item.color}" />
        <text x="20" y="10" class="lang-name">${item.name}</text>
        <text x="185" y="10" text-anchor="end" class="lang-percent">${item.percent.toFixed(1)}%</text>
      </g>`).join('');

  const ariaSummary = languages.map((l) => `${l.name} ${l.percent.toFixed(1)}%`).join(', ');

  return `<svg
  width="467"
  height="195"
  viewBox="0 0 467 195"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-label="Most Used Languages: ${ariaSummary}"
>
  <style>
    .header {
      font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
      fill: #70a5fd;
    }
    .sub-label {
      font: 500 11px 'Space Mono', 'Fira Code', Consolas, monospace;
      fill: #7aa2f7;
    }
    .lang-name {
      font: 600 13px 'Segoe UI', Ubuntu, Sans-Serif;
      fill: #c0caf5;
    }
    .lang-percent {
      font: 700 12.5px 'Space Mono', 'Fira Code', Consolas, monospace;
      fill: #38bdae;
    }
  </style>

  <rect
    x="0.5"
    y="0.5"
    rx="8"
    height="194"
    width="466"
    fill="#1a1b27"
    stroke="#292e42"
    stroke-width="1"
  />

  <g transform="translate(25, 34)">
    <text x="0" y="0" class="header">Most Used Languages</text>
    <text x="417" y="0" text-anchor="end" class="sub-label">CORE TELEMETRY</text>
  </g>

  <!-- Progress Bar -->
  <g transform="translate(25, 56)">
    <mask id="rect-mask">
      <rect x="0" y="0" width="${barWidth}" height="10" rx="5" fill="white" />
    </mask>
    <rect x="0" y="0" width="${barWidth}" height="10" rx="5" fill="#24283b" />
    ${barSegments}
  </g>

  <!-- 2-Column Language Matrix -->
  <g transform="translate(25, 92)">
    ${renderCol(col1, 0)}
    ${renderCol(col2, 224)}
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

  let commits = 248;
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

  const { label: rankLabel, dashoffset } = computeRank({
    stars: totalStars,
    commits,
    repos: publicRepos,
    followers,
  });

  const languages = [
    { name: 'TypeScript', percent: 60.0, color: LANGUAGE_COLORS.TypeScript },
    { name: 'JavaScript', percent: 25.0, color: LANGUAGE_COLORS.JavaScript },
    { name: 'Python', percent: 10.0, color: LANGUAGE_COLORS.Python },
    { name: 'CSS', percent: 5.0, color: LANGUAGE_COLORS.CSS },
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
      dashoffset,
    }),
    'utf8'
  );

  fs.writeFileSync(
    path.join(rootDir, 'top-languages.svg'),
    buildLanguagesSvg(languages),
    'utf8'
  );

  console.log(`Updated github-stats.svg & top-languages.svg (Stars: ${totalStars}, Commits: ${commits}, Repos: ${publicRepos}, Rank: ${rankLabel})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
