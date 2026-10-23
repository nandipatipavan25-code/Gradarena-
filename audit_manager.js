const fs = require('fs');
const html = fs.readFileSync('manager-panel.html', 'utf8');

console.log('Manager HTML size:', html.length, 'bytes');

// Check screens
const screens = html.match(/id="(screen-[^"]+)"/g) || [];
console.log('Manager screens found:', screens);

// Check button alerts
const btnMatches = html.match(/<button\b[^>]*onclick="([^"]*)"[^>]*>/gi) || [];
const alertClicks = btnMatches.filter(b => b.includes('alert('));
console.log('Total button onclicks:', btnMatches.length);
console.log('Buttons with alert():', alertClicks.length);
