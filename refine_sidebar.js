const fs = require('fs');
const path = require('path');

let code = fs.readFileSync('build_hybrid_enterprise.js', 'utf8');

// 1. Fix header and scopeBlock
const headerRegex = /<!-- Brand Header -->[\s\S]*?<!-- Scope Context Capsule -->\s*<div class="px-3 pt-3 pb-2">/;
const newHeaderAndScope = `<!-- Brand Header -->
        <div id="sidebarHeader" class="h-16 px-4 flex items-center justify-between border-b border-[#1E2235] relative transition-all duration-300">
          <div id="brandBlock" class="flex items-center gap-2.5 cursor-pointer overflow-hidden transition-all duration-200" onclick="switchScreen('dashboard')">
            <img id="sidebarLogo" src="Grad Arena Logo-01.svg" alt="GradArena" class="h-9 w-auto shrink-0 drop-shadow-[0_2px_8px_rgba(16,122,204,0.35)] transition-all duration-200" />
            <div class="brand-text truncate transition-all duration-200">
              <div class="flex items-center gap-1.5">
                <span class="text-xs font-bold tracking-tight text-white uppercase font-mono">Platform</span>
                <span class="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-[#107acc]/20 text-[#38bdf8] border border-[#107acc]/30">AI</span>
              </div>
              <div class="text-[10px] text-[#8994A7] truncate font-mono">Hiring Intelligence</div>
            </div>
          </div>

          <button id="toggleBtn" onclick="toggleSidebar()" title="Toggle Sidebar (Collapse/Expand)" class="w-7 h-7 rounded-lg text-[#8994A7] hover:text-white hover:bg-[#22263A] flex items-center justify-center transition shrink-0 border border-transparent hover:border-white/10">
            <svg id="toggleIcon" class="w-4 h-4 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        </div>

        <!-- Scope Context Capsule -->
        <div id="scopeBlock" class="px-3 pt-3 pb-2 transition-all duration-200">`;

if (code.match(headerRegex)) {
  code = code.replace(headerRegex, newHeaderAndScope);
  console.log('Header and scopeBlock updated successfully');
} else {
  console.log('headerRegex did not match, trying alternative search');
}

// 2. Update toggleSidebar function
const oldToggleFn = `    function toggleSidebar() {
      sidebarCollapsed = !sidebarCollapsed;
      const sidebar = document.getElementById('sidebar');
      const main = document.getElementById('mainContent');
      const icon = document.getElementById('toggleIcon');
      const brandTexts = document.querySelectorAll('.brand-text');

      if (sidebarCollapsed) {
        sidebar.classList.remove('w-[250px]');
        sidebar.classList.add('w-[72px]');
        main.classList.remove('md:ml-[250px]');
        main.classList.add('md:ml-[72px]');
        if (icon) icon.style.transform = 'rotate(180deg)';
        brandTexts.forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.nav-item').forEach(el => {
          el.classList.add('justify-center', 'px-0');
          el.classList.remove('px-3.5', 'gap-3');
        });
      } else {
        sidebar.classList.remove('w-[72px]');
        sidebar.classList.add('w-[250px]');
        main.classList.remove('md:ml-[72px]');
        main.classList.add('md:ml-[250px]');
        if (icon) icon.style.transform = 'rotate(0deg)';
        brandTexts.forEach(el => el.classList.remove('hidden'));
        document.querySelectorAll('.nav-item').forEach(el => {
          el.classList.remove('justify-center', 'px-0');
          el.classList.add('px-3.5', 'gap-3');
        });
      }
    }`;

const newToggleFn = `    function toggleSidebar(forceState) {
      if (typeof forceState === 'boolean') {
        sidebarCollapsed = forceState;
      } else {
        sidebarCollapsed = !sidebarCollapsed;
      }
      const sidebar = document.getElementById('sidebar');
      const main = document.getElementById('mainContent');
      const icon = document.getElementById('toggleIcon');
      const toggleBtn = document.getElementById('toggleBtn');
      const header = document.getElementById('sidebarHeader');
      const brandBlock = document.getElementById('brandBlock');
      const sidebarLogo = document.getElementById('sidebarLogo');
      const scopeBlock = document.getElementById('scopeBlock');
      const brandTexts = document.querySelectorAll('.brand-text');

      if (sidebarCollapsed) {
        sidebar.classList.remove('w-[250px]');
        sidebar.classList.add('w-[72px]');
        main.classList.remove('md:ml-[250px]');
        main.classList.add('md:ml-[72px]');
        if (icon) icon.style.transform = 'rotate(180deg)';
        if (header) {
          header.classList.remove('px-4', 'justify-between');
          header.classList.add('px-2', 'justify-center');
        }
        if (toggleBtn) {
          toggleBtn.classList.add('absolute', '-right-3.5', 'top-5', 'w-7', 'h-7', 'rounded-full', 'bg-[#1E2235]', 'border', 'border-white/20', 'shadow-md', 'z-50');
        }
        if (brandBlock) {
          brandBlock.classList.add('justify-center');
        }
        if (sidebarLogo) {
          sidebarLogo.classList.remove('h-9', 'w-auto');
          sidebarLogo.classList.add('h-7', 'max-w-[48px]');
        }
        if (scopeBlock) {
          scopeBlock.classList.add('hidden');
        }
        brandTexts.forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.nav-item').forEach(el => {
          el.classList.add('justify-center', 'px-0');
          el.classList.remove('px-3.5', 'gap-3');
        });
      } else {
        sidebar.classList.remove('w-[72px]');
        sidebar.classList.add('w-[250px]');
        main.classList.remove('md:ml-[72px]');
        main.classList.add('md:ml-[250px]');
        if (icon) icon.style.transform = 'rotate(0deg)';
        if (header) {
          header.classList.add('px-4', 'justify-between');
          header.classList.remove('px-2', 'justify-center');
        }
        if (toggleBtn) {
          toggleBtn.classList.remove('absolute', '-right-3.5', 'top-5', 'w-7', 'h-7', 'rounded-full', 'bg-[#1E2235]', 'border', 'border-white/20', 'shadow-md', 'z-50');
        }
        if (brandBlock) {
          brandBlock.classList.remove('justify-center');
        }
        if (sidebarLogo) {
          sidebarLogo.classList.remove('h-7', 'max-w-[48px]');
          sidebarLogo.classList.add('h-9', 'w-auto');
        }
        if (scopeBlock) {
          scopeBlock.classList.remove('hidden');
        }
        brandTexts.forEach(el => el.classList.remove('hidden'));
        document.querySelectorAll('.nav-item').forEach(el => {
          el.classList.remove('justify-center', 'px-0');
          el.classList.add('px-3.5', 'gap-3');
        });
      }
    }`;

if (code.includes('function toggleSidebar() {')) {
  code = code.replace(oldToggleFn, newToggleFn);
  console.log('toggleSidebar updated successfully');
} else {
  console.log('toggleSidebar target not found');
}

// 3. Update DOMContentLoaded hash listener to handle dashboard-collapsed
const oldDomListener = `      const s = params.get('screen') || window.location.hash.replace('#', '');
      if (s) {
        if (s.startsWith('test-create-') || screenTitles[s]) {
          switchScreen(s);
        }
      }`;

const newDomListener = `      const s = params.get('screen') || window.location.hash.replace('#', '');
      if (s) {
        if (s === 'dashboard-collapsed') {
          switchScreen('dashboard');
          toggleSidebar(true);
        } else if (s.startsWith('test-create-') || screenTitles[s]) {
          switchScreen(s);
        }
      }`;

if (code.includes(oldDomListener)) {
  code = code.replace(oldDomListener, newDomListener);
  console.log('DOMContentLoaded hash routing updated for dashboard-collapsed');
} else {
  console.log('DOMContentLoaded hash target not found');
}

fs.writeFileSync('build_hybrid_enterprise.js', code, 'utf8');
console.log('build_hybrid_enterprise.js saved successfully');
