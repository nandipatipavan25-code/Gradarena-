const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\gades\\.gemini\\antigravity\\brain\\b50abc04-b23a-4b6b-a65d-990639f2aff3';

const recruiterScreens = [
  'dashboard',
  'create-test',
  'my-tests',
  'candidates',
  'candidate-eval',
  'import-candidates',
  'invite-candidates',
  'modifications',
  'message',
  'tickets'
];

const managerScreens = [
  'dashboard',
  'creators',
  'creator-detail',
  'test-create',
  'tests',
  'test-detail',
  'reviews',
  'candidates',
  'candidate-detail',
  'chat',
  'tickets'
];

console.log('Auditing Recruiter Screens...');
recruiterScreens.forEach((screen) => {
  const outPath = path.join(artifactDir, `audit-recruiter-${screen}.png`);
  try {
    execFileSync(chromePath, [
      '--headless=new',
      '--disable-gpu',
      '--window-size=1440,920',
      `--screenshot=${outPath}`,
      '--virtual-time-budget=2000',
      `http://localhost:3001/?screen=${screen}`
    ]);
    const size = (fs.statSync(outPath).size / 1024).toFixed(1);
    console.log(`✓ Recruiter [${screen}]: ${size} KB`);
  } catch (err) {
    console.error(`✗ Error on recruiter screen ${screen}:`, err.message);
  }
});

console.log('\nAuditing Manager Screens...');
managerScreens.forEach((screen) => {
  const outPath = path.join(artifactDir, `audit-manager-${screen}.png`);
  try {
    execFileSync(chromePath, [
      '--headless=new',
      '--disable-gpu',
      '--window-size=1440,920',
      `--screenshot=${outPath}`,
      '--virtual-time-budget=2000',
      `http://localhost:3000/?screen=${screen}`
    ]);
    const size = (fs.statSync(outPath).size / 1024).toFixed(1);
    console.log(`✓ Manager [${screen}]: ${size} KB`);
  } catch (err) {
    console.error(`✗ Error on manager screen ${screen}:`, err.message);
  }
});
