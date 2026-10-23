const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlFile = path.resolve(__dirname, 'manager-panel.html').replace(/\\/g, '/');
const artifactDir = 'C:\\Users\\gades\\.gemini\\antigravity\\brain\\b50abc04-b23a-4b6b-a65d-990639f2aff3';

const targets = [
  { name: 'human-dashboard', hash: 'dashboard' },
  { name: 'human-creators', hash: 'creators' },
  { name: 'human-creator-detail', hash: 'creator-detail' },
  { name: 'human-test-create-step1', hash: 'test-create', step: 1 },
  { name: 'human-test-create-step2', hash: 'test-create', step: 2 },
  { name: 'human-test-create-step3', hash: 'test-create', step: 3 },
  { name: 'human-tests', hash: 'tests' },
  { name: 'human-test-detail', hash: 'test-detail' },
  { name: 'human-reviews', hash: 'reviews' },
  { name: 'human-candidates', hash: 'candidates' },
  { name: 'human-candidate-detail', hash: 'candidate-detail' },
  { name: 'human-chat', hash: 'chat' }
];

console.log('Capturing', targets.length, 'human GradArena screens...');

targets.forEach((target, i) => {
  const outPath = path.join(artifactDir, `${target.name}.png`);
  let url = `file:///${htmlFile}#${target.hash}`;
  if (target.step) {
    url = `file:///${htmlFile}?screen=${target.hash}&step=${target.step}`;
  }
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--window-size=1440,920',
    `--screenshot=${outPath}`,
    '--virtual-time-budget=1200',
    url
  ];
  try {
    execFileSync(chromePath, args, { stdio: 'pipe' });
    const stats = fs.statSync(outPath);
    console.log(`[${i+1}/${targets.length}] ${target.name}.png captured (${(stats.size / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`Failed on ${target.name}:`, err.message);
  }
});

console.log('Finished capturing human previews!');
