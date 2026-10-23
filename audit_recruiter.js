const fs = require('fs');
const html = fs.readFileSync('recruiter-panel.html', 'utf8');

console.log('HTML size:', html.length, 'bytes');

// Check clock
const hasClock = html.includes('10:20:48 AM');
console.log('Has static clock text:', hasClock);

// Check animations
const keyframes = html.match(/@keyframes\s+([a-zA-Z0-9_-]+)/g) || [];
console.log('Keyframes found:', keyframes);

// Check all buttons and their onclicks
const btnMatches = html.match(/<button\b[^>]*onclick="([^"]*)"[^>]*>/gi) || [];
console.log('Total button onclicks:', btnMatches.length);

const alertClicks = btnMatches.filter(b => b.includes('alert('));
console.log('Buttons with alert():', alertClicks.length);
alertClicks.forEach(a => console.log('  ->', a));

// Check screens
const screens = html.match(/id="(screen-[^"]+)"/g) || [];
console.log('Screens found:', screens);
