const fs = require('fs');
const path = require('path');

// Read existing build_hybrid_enterprise.js or replace the color tokens
let code = fs.readFileSync('build_hybrid_enterprise.js', 'utf8');

// Replace brand colors:
// #7657E8 -> #107acc
// #5B44D9 -> #0c68ab
// #6344D4 -> #0d62a4
// #F5F3FF -> #EBF5FC
// #DDD6FE -> #BCE0F7
// rgba(118, 87, 232 -> rgba(16, 122, 204
// selection:bg-purple-100 selection:text-[#7657E8] -> selection:bg-sky-100 selection:text-[#107acc]

code = code.replace(/#7657E8/gi, '#107acc');
code = code.replace(/#5B44D9/gi, '#0c68ab');
code = code.replace(/#6344D4/gi, '#0d62a4');
code = code.replace(/#F5F3FF/gi, '#EBF5FC');
code = code.replace(/#DDD6FE/gi, '#BCE0F7');
code = code.replace(/rgba\(118,\s*87,\s*232/g, 'rgba(16, 122, 204');
code = code.replace(/selection:bg-purple-100 selection:text-\[#7657E8\]/g, 'selection:bg-sky-100 selection:text-[#107acc]');

// Update brandBlock in sidebar header with Grad Arena Logo-01.svg
const oldBrandBlock = `<div id="brandBlock" class="flex items-center gap-3 cursor-pointer overflow-hidden" onclick="switchScreen('dashboard')">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#107acc] to-[#0c68ab] text-white flex items-center justify-center shrink-0 shadow-[0_2px_10px_rgba(16,122,204,0.45)] border border-white/20">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5 4.5-1.35 8-6.25 8-11.5V6l-8-4z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          </div>
          <div class="brand-text truncate transition-all duration-200">
            <div class="flex items-center gap-1.5">
              <span class="text-sm font-bold tracking-tight text-white">GradArena</span>
              <span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#107acc]/20 text-[#BCE0F7] border border-[#107acc]/30">AI</span>
            </div>
            <div class="text-[11px] text-[#8994A7] truncate">Hiring Intelligence</div>
          </div>
        </div>`;

const newBrandBlock = `<div id="brandBlock" class="flex items-center gap-2.5 cursor-pointer overflow-hidden" onclick="switchScreen('dashboard')">
          <img src="Grad Arena Logo-01.svg" alt="GradArena" class="h-9 w-auto shrink-0 drop-shadow-[0_2px_8px_rgba(16,122,204,0.35)]" />
          <div class="brand-text truncate transition-all duration-200">
            <div class="flex items-center gap-1.5">
              <span class="text-xs font-bold tracking-tight text-white uppercase font-mono">Platform</span>
              <span class="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-[#107acc]/20 text-[#38bdf8] border border-[#107acc]/30">AI</span>
            </div>
            <div class="text-[10px] text-[#8994A7] truncate font-mono">Hiring Intelligence</div>
          </div>
        </div>`;

if (code.includes('M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5')) {
  // Replace the old SVG icon in brand block
  const brandRegex = /<div id="brandBlock"[\s\S]*?<\/div>\s*<\/div>/;
  code = code.replace(brandRegex, newBrandBlock);
}

fs.writeFileSync('build_hybrid_enterprise.js', code, 'utf8');
console.log('build_hybrid_enterprise.js updated with logo and #107acc brand color.');
