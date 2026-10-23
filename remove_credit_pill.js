const fs = require('fs');

let code = fs.readFileSync('build_premium_gradarena.js', 'utf8');

const target = `      <!-- Credit Pulse Pill -->
      <div class="p-3.5 rounded-xl bg-gradient-to-br from-blue-50/80 via-white to-blue-50/40 border border-[#BDE0F8] flex items-center justify-between shadow-xs">
        <div class="flex items-center gap-2.5">
          <div class="w-7 h-7 rounded-lg bg-[#107ACC] text-white flex items-center justify-center font-bold text-xs shadow-xs">
            ⚡
          </div>
          <div>
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">ENTERPRISE CREDITS</span>
            <span class="text-xs font-extrabold text-[#107ACC] font-mono">222.23 Available</span>
          </div>
        </div>
        <button onclick="alert('Credit refill workflow opened. Organization balance is sufficient.')" class="text-[10px] font-bold text-[#107ACC] hover:underline">
          Refill
        </button>
      </div>`;

if (code.includes(target)) {
  code = code.replace(target, '');
  fs.writeFileSync('build_premium_gradarena.js', code, 'utf8');
  console.log('Successfully removed Credit Pulse Pill from build_premium_gradarena.js');
} else {
  console.log('Target not found, checking regex...');
  const regex = /<!-- Credit Pulse Pill -->[\s\S]*?<\/button>\s*<\/div>/;
  if (regex.test(code)) {
    code = code.replace(regex, '');
    fs.writeFileSync('build_premium_gradarena.js', code, 'utf8');
    console.log('Successfully removed using regex');
  } else {
    console.log('Regex did not match');
  }
}
