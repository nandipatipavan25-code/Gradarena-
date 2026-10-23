const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlFile = path.resolve(__dirname, 'manager-panel.html').replace(/\\/g, '/');
const artifactDir = 'C:\\Users\\gades\\.gemini\\antigravity\\brain\\b50abc04-b23a-4b6b-a65d-990639f2aff3';

const targets = [
  { name: 'anim-1-candidates-button', query: 'screen=candidates', delay: '1200' },
  { name: 'anim-2-resume-scanning', query: 'modal=resume-scan', delay: '1500' },
  { name: 'anim-3-resume-complete', query: 'modal=resume-complete', delay: '1500' },
  { name: 'anim-4-test-intake-resume', query: 'intake=resume', delay: '1500' },
  { name: 'anim-5-test-gen-streaming', query: 'modal=test-gen', delay: '2500' },
  { name: 'anim-6-test-gen-complete', query: 'modal=test-gen-complete', delay: '1500' }
];

console.log('Capturing animation direct screenshots...');

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

console.log('All animation screenshots captured successfully!');
