const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlFile = path.resolve(__dirname, 'manager-panel.html').replace(/\\/g, '/');
const artifactDir = 'C:\\Users\\gades\\.gemini\\antigravity\\brain\\b50abc04-b23a-4b6b-a65d-990639f2aff3';

const targets = [
  { name: 'premium-dashboard', query: 'screen=dashboard', delay: '1200' },
  { name: 'premium-creators', query: 'screen=creators', delay: '1000' },
  { name: 'premium-creator-detail', query: 'screen=creator-detail', delay: '1000' },
  { name: 'premium-test-create-step1', query: 'screen=test-create&step=1', delay: '1000' },
  { name: 'premium-test-create-step2', query: 'screen=test-create&step=2', delay: '1000' },
  { name: 'premium-test-create-step3', query: 'screen=test-create&step=3', delay: '1000' },
  { name: 'premium-tests', query: 'screen=tests', delay: '1000' },
  { name: 'premium-test-detail', query: 'screen=test-detail', delay: '1000' },
  { name: 'premium-reviews', query: 'screen=reviews', delay: '1000' },
  { name: 'premium-candidates', query: 'screen=candidates', delay: '1000' },
  { name: 'premium-candidate-detail', query: 'screen=candidate-detail', delay: '1200' },
  { name: 'premium-chat', query: 'screen=chat', delay: '1000' },
  { name: 'premium-modal-resume-scan', query: 'modal=resume-scan', delay: '1200' },
  { name: 'premium-modal-test-gen', query: 'modal=test-gen', delay: '2000' }
];

console.log('Capturing', targets.length, 'premium preview screenshots...');

targets.forEach((t) => {
  const outPath = path.join(artifactDir, `${t.name}.png`);
  const url = `file:///${htmlFile}?${t.query}`;
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--window-size=1440,960',
    `--screenshot=${outPath}`,
    `--virtual-time-budget=${t.delay}`,
    url
  ];
  try {
    execFileSync(chromePath, args);
    const size = (fs.statSync(outPath).size / 1024).toFixed(1);
    console.log(`[✓] ${t.name}.png captured (${size} KB)`);
  } catch (err) {
    console.error(`[✗] Failed to capture ${t.name}:`, err.message);
  }
});

console.log('Finished capturing premium previews!');
