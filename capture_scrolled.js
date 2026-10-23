const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlFile = path.resolve(__dirname, 'manager-panel.html').replace(/\\/g, '/');
const artifactDir = 'C:\\Users\\gades\\.gemini\\antigravity\\brain\\b50abc04-b23a-4b6b-a65d-990639f2aff3';
const outPath = path.join(artifactDir, 'fixed-nav-scrolled-test.png');

const args = [
  '--headless=new',
  '--disable-gpu',
  '--window-size=1440,960',
  '--screenshot=' + outPath,
  '--virtual-time-budget=1500',
  `file:///${htmlFile}?screen=candidate-detail&scroll=420`
];

execFileSync(chromePath, args);
console.log('Saved fixed-nav-scrolled-test.png (' + (fs.statSync(outPath).size / 1024).toFixed(1) + ' KB)');
