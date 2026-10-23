const fs = require('fs');

let code = fs.readFileSync('build_premium_gradarena.js', 'utf8');

const target = `      <!-- Brand Logo Header -->
      <div class="h-20 px-6 flex items-center justify-between border-b border-slate-100">
        <div class="flex items-center gap-3 cursor-pointer" onclick="switchScreen('dashboard')">
          <img src="Grad Arena Logo-01.svg" alt="GradArena Logo" class="h-10 w-auto object-contain hover:scale-105 transition" />
          <div>
            <span class="text-[10px] font-bold tracking-widest text-[#107acc] uppercase block font-mono">ENTERPRISE</span>
            <span class="text-xs font-semibold text-slate-400">AI Assessment OS</span>
          </div>
        </div>
      </div>`;

const replacement = `      <!-- Brand Logo Header -->
      <div class="h-20 px-6 flex items-center border-b border-slate-100">
        <div class="cursor-pointer" onclick="switchScreen('dashboard')">
          <img src="Grad Arena Logo-01.svg" alt="GradArena Logo" class="h-10 w-auto object-contain hover:scale-105 transition" />
        </div>
      </div>`;

if (code.includes(target)) {
  code = code.replace(target, replacement);
  fs.writeFileSync('build_premium_gradarena.js', code, 'utf8');
  console.log('Successfully updated build_premium_gradarena.js');
} else {
  console.log('Target block not found, checking line by line...');
  // Fallback regex replacement
  const regex = /<div>\s*<span[^>]*>ENTERPRISE<\/span>\s*<span[^>]*>AI Assessment OS<\/span>\s*<\/div>/g;
  if (regex.test(code)) {
    code = code.replace(regex, '');
    fs.writeFileSync('build_premium_gradarena.js', code, 'utf8');
    console.log('Successfully replaced using regex');
  } else {
    console.log('Regex did not match');
  }
}
