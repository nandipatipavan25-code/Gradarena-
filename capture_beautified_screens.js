const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\gades\\.gemini\\antigravity\\brain\\b50abc04-b23a-4b6b-a65d-990639f2aff3';

const targets = [
  { name: 'beautified-recruiter-header-nobadge', url: 'http://localhost:3001/?screen=dashboard' },
  { name: 'beautified-recruiter-my-tests', url: 'http://localhost:3001/?screen=my-tests' },
  { name: 'beautified-recruiter-candidates', url: 'http://localhost:3001/?screen=candidates' },
  { name: 'beautified-recruiter-candidate-eval', url: 'http://localhost:3001/?screen=candidate-eval' },
  { name: 'beautified-manager-creators', url: 'http://localhost:3000/?screen=creators' }
];

targets.forEach((target, i) => {
  const outPath = path.join(artifactDir, `${target.name}.png`);
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--window-size=1440,920',
    `--screenshot=${outPath}`,
    '--virtual-time-budget=2000',
    target.url
  ];
  try {
    execFileSync(chromePath, args, { stdio: 'pipe' });
    const stats = fs.statSync(outPath);
    console.log(`[${i+1}/${targets.length}] ${target.name}.png captured (${(stats.size / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`Failed on ${target.name}:`, err.message);
  }
});
