const fs = require('fs');

let code = fs.readFileSync('build_premium_gradarena.js', 'utf8');

// 1. Update body tag
code = code.replace(
  '<body class="bg-[#F8FAFC] text-slate-800 antialiased min-h-screen flex">',
  '<body class="bg-[#F8FAFC] text-slate-800 antialiased h-screen overflow-hidden flex">'
);

// 2. Update aside tag to h-screen
code = code.replace(
  '<aside class="w-64 bg-white/95 backdrop-blur-md border-r border-slate-200/80 flex flex-col justify-between shrink-0 min-h-screen sticky top-0 z-30 shadow-[1px_0_12px_rgba(0,0,0,0.02)]">',
  '<aside class="w-64 bg-white/95 backdrop-blur-md border-r border-slate-200/80 flex flex-col justify-between shrink-0 h-screen overflow-y-auto custom-scrollbar z-30 shadow-[1px_0_12px_rgba(0,0,0,0.02)]">'
);

// 3. Update main workspace wrapper div
code = code.replace(
  '<div class="flex-1 flex flex-col min-w-0">',
  '<div class="flex-1 flex flex-col h-screen min-w-0 overflow-hidden">'
);

// 4. Update header to shrink-0 and shadow-xs
code = code.replace(
  '<header class="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-8 flex items-center justify-between sticky top-0 z-20">',
  '<header class="h-20 shrink-0 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-8 flex items-center justify-between sticky top-0 z-20 shadow-xs">'
);

fs.writeFileSync('build_premium_gradarena.js', code, 'utf8');
console.log('Successfully updated build_premium_gradarena.js with fixed navbar layout');
