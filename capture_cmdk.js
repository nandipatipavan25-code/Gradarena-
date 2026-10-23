const { execFileSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\gades\\.gemini\\antigravity\\brain\\b50abc04-b23a-4b6b-a65d-990639f2aff3';

[
  { name: 'recruiter-header-no-cmdk.png', url: 'http://localhost:3001/?screen=dashboard' },
  { name: 'manager-header-no-cmdk.png', url: 'http://localhost:3000/?screen=dashboard' }
].forEach(t => {
  const outPath = path.join(artifactDir, t.name);
  execFileSync(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--window-size=1440,920',
    `--screenshot=${outPath}`,
    '--virtual-time-budget=2000',
    t.url
  ]);
  console.log('Captured', t.name);
});
