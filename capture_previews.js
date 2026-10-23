const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlFile = path.resolve(__dirname, 'manager-panel.html').replace(/\\/g, '/');
const artifactDir = 'C:\\Users\\gades\\.gemini\\antigravity\\brain\\b50abc04-b23a-4b6b-a65d-990639f2aff3';

const targets = [
  { name: 'modernized-dashboard', hash: 'dashboard' },
  { name: 'modernized-sidebar-collapsed', hash: 'dashboard-collapsed' },
  { name: 'modernized-studio-pipeline', hash: 'test-create-pipeline' },
  { name: 'modernized-studio-builder', hash: 'test-create-builder' },
  { name: 'modernized-studio-resumes', hash: 'test-create-resumes' },
  { name: 'modernized-studio-proctor', hash: 'test-create-proctor' },
  { name: 'modernized-studio-blueprint', hash: 'test-create-blueprint' },
  { name: 'modernized-creators', hash: 'creators' },
  { name: 'modernized-reviews', hash: 'reviews' },
  { name: 'modernized-candidates', hash: 'candidates' },
  { name: 'modernized-candidate-detail', hash: 'candidate-detail' },
  { name: 'modernized-live-proctoring', hash: 'live' },
  { name: 'modernized-message-hub', hash: 'chat' },
  { name: 'modernized-tests', hash: 'tests' },
  { name: 'modernized-test-detail', hash: 'test-detail' },
  { name: 'modernized-creator-detail', hash: 'creator-detail' }
];

console.log('Capturing', targets.length, 'modernized enterprise screens...');

targets.forEach((target, i) => {
  const outPath = path.join(artifactDir, `${target.name}.png`);
  const url = `file:///${htmlFile}#${target.hash}`;
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

console.log('Finished capturing previews!');
