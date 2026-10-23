const fs = require('fs');

let code = fs.readFileSync('build_premium_gradarena.js', 'utf8');

// 1. Update CSS with low-opacity diffused drop shadows and module-rect styles
const oldCardCss = `    /* Premium Tactile Card */
    .premium-card {
      background: #FFFFFF;
      border: 1px solid rgba(226, 232, 240, 0.85);
      border-radius: 20px;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 8px 24px -4px rgba(16, 122, 204, 0.04);
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .premium-card:hover {
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.03), 0 14px 32px -4px rgba(16, 122, 204, 0.08);
      border-color: rgba(189, 224, 248, 0.8);
    }`;

const newCardCss = `    /* Low-Opacity Diffused Drop Shadows for Rectangles & Cards */
    .premium-card {
      background: #FFFFFF;
      border: 1px solid rgba(226, 232, 240, 0.85);
      border-radius: 20px;
      box-shadow: 
        0 1px 2px 0 rgba(15, 23, 42, 0.02),
        0 4px 12px 0 rgba(15, 23, 42, 0.025),
        0 16px 36px -4px rgba(16, 122, 204, 0.04);
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .premium-card:hover {
      transform: translateY(-1.5px);
      box-shadow: 
        0 4px 8px 0 rgba(15, 23, 42, 0.02),
        0 12px 24px -2px rgba(15, 23, 42, 0.035),
        0 24px 48px -4px rgba(16, 122, 204, 0.07);
      border-color: rgba(189, 224, 248, 0.9);
    }

    /* Sub-panels and rectangular modules with low-opacity drop shadows */
    .module-rect {
      background: #FFFFFF;
      border: 1px solid rgba(226, 232, 240, 0.8);
      border-radius: 16px;
      box-shadow: 
        0 1px 2px 0 rgba(15, 23, 42, 0.02),
        0 4px 14px -2px rgba(16, 122, 204, 0.035);
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .module-rect:hover {
      box-shadow: 
        0 3px 6px 0 rgba(15, 23, 42, 0.02),
        0 8px 22px -2px rgba(16, 122, 204, 0.065);
      border-color: rgba(189, 224, 248, 0.85);
    }`;

code = code.replace(oldCardCss, newCardCss);

// 2. Enhance the 4 Top Metric Cards with beautiful icon containers and micro-design
const oldMetric1 = `          <!-- Metric 1: Active Hiring Drives -->
          <div class="premium-card p-5 relative overflow-hidden group">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Hiring Drives</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-50 text-[#107acc] border border-blue-200/80 flex items-center gap-1">
                <span>↑ 14%</span> vs last mo
              </span>
            </div>
            <div class="mt-3 flex items-baseline justify-between">
              <span class="text-3xl font-extrabold text-slate-900 tracking-tight font-mono">32</span>
              <!-- Mini SVG Area Sparkline -->
              <svg class="w-24 h-10" viewBox="0 0 100 40">
                <defs>
                  <linearGradient id="spark1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#107acc" stop-opacity="0.25"/>
                    <stop offset="100%" stop-color="#107acc" stop-opacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,35 Q20,30 40,25 T80,10 T100,5 L100,40 L0,40 Z" fill="url(#spark1)" />
                <path d="M0,35 Q20,30 40,25 T80,10 T100,5" fill="none" stroke="#107acc" stroke-width="2.5" stroke-linecap="round" />
              </svg>
            </div>
            <p class="text-[11px] text-slate-400 mt-1">4 new assessments created this week</p>
          </div>`;

const newMetric1 = `          <!-- Metric 1: Active Hiring Drives -->
          <div class="premium-card p-5 relative overflow-hidden group">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-50 to-blue-100/70 border border-blue-200/60 text-[#107acc] flex items-center justify-center font-bold text-xs shadow-xs">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                </div>
                <span class="text-xs font-bold text-slate-600 uppercase tracking-wider">Active Drives</span>
              </div>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-50 text-[#107acc] border border-blue-200/80 flex items-center gap-1">
                <span>↑ 14%</span> vs last mo
              </span>
            </div>
            <div class="mt-3.5 flex items-baseline justify-between">
              <span class="text-3xl font-extrabold text-slate-900 tracking-tight font-mono">32</span>
              <!-- Mini SVG Area Sparkline -->
              <svg class="w-24 h-10" viewBox="0 0 100 40">
                <defs>
                  <linearGradient id="spark1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#107acc" stop-opacity="0.25"/>
                    <stop offset="100%" stop-color="#107acc" stop-opacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,35 Q20,30 40,25 T80,10 T100,5 L100,40 L0,40 Z" fill="url(#spark1)" />
                <path d="M0,35 Q20,30 40,25 T80,10 T100,5" fill="none" stroke="#107acc" stroke-width="2.5" stroke-linecap="round" />
              </svg>
            </div>
            <p class="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 4 new assessments live this week
            </p>
          </div>`;

code = code.replace(oldMetric1, newMetric1);

const oldMetric2 = `          <!-- Metric 2: Total Candidates -->
          <div class="premium-card p-5 relative overflow-hidden group">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Candidates</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200/80 flex items-center gap-1">
                <span>↑ 8.2%</span> pace
              </span>
            </div>
            <div class="mt-3 flex items-baseline justify-between">
              <span class="text-3xl font-extrabold text-slate-900 tracking-tight font-mono">284</span>
              <!-- Mini SVG Area Sparkline -->
              <svg class="w-24 h-10" viewBox="0 0 100 40">
                <defs>
                  <linearGradient id="spark2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
                    <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,38 Q30,28 50,30 T80,14 T100,6 L100,40 L0,40 Z" fill="url(#spark2)" />
                <path d="M0,38 Q30,28 50,30 T80,14 T100,6" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" />
              </svg>
            </div>
            <p class="text-[11px] text-slate-400 mt-1">Across 18 enterprise test pipelines</p>
          </div>`;

const newMetric2 = `          <!-- Metric 2: Total Candidates -->
          <div class="premium-card p-5 relative overflow-hidden group">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-50 to-emerald-100/70 border border-emerald-200/60 text-emerald-600 flex items-center justify-center font-bold text-xs shadow-xs">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <span class="text-xs font-bold text-slate-600 uppercase tracking-wider">Candidates</span>
              </div>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200/80 flex items-center gap-1">
                <span>↑ 8.2%</span> pace
              </span>
            </div>
            <div class="mt-3.5 flex items-baseline justify-between">
              <span class="text-3xl font-extrabold text-slate-900 tracking-tight font-mono">284</span>
              <!-- Mini SVG Area Sparkline -->
              <svg class="w-24 h-10" viewBox="0 0 100 40">
                <defs>
                  <linearGradient id="spark2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
                    <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,38 Q30,28 50,30 T80,14 T100,6 L100,40 L0,40 Z" fill="url(#spark2)" />
                <path d="M0,38 Q30,28 50,30 T80,14 T100,6" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" />
              </svg>
            </div>
            <p class="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Across 18 active organization pipelines
            </p>
          </div>`;

code = code.replace(oldMetric2, newMetric2);

// 3. Add Filter Segment Tabs to Bar Chart Card
const oldBarChartHeader = `              <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
                    Weekly Assessment Velocity & Candidate Volume
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#107acc]">Bar Chart</span>
                  </h3>
                  <p class="text-xs text-slate-400 mt-0.5">Daily candidate invitations vs successfully evaluated candidates</p>
                </div>
                <div class="flex items-center gap-3 text-xs">
                  <span class="flex items-center gap-1.5 text-slate-500 font-medium">
                    <span class="w-2.5 h-2.5 rounded-sm bg-slate-200"></span> Invited
                  </span>
                  <span class="flex items-center gap-1.5 text-[#107acc] font-bold">
                    <span class="w-2.5 h-2.5 rounded-sm bg-gradient-to-t from-[#107acc] to-[#38bdf8]"></span> Qualified
                  </span>
                </div>
              </div>`;

const newBarChartHeader = `              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
                    Weekly Assessment Velocity & Candidate Volume
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#107acc] border border-blue-200/60">Live Bar Chart</span>
                  </h3>
                  <p class="text-xs text-slate-400 mt-0.5">Daily candidate invitations vs successfully qualified candidates</p>
                </div>
                <div class="flex items-center gap-2.5">
                  <div class="flex items-center p-1 rounded-xl bg-slate-100/80 border border-slate-200/60 text-[11px] font-semibold text-slate-600">
                    <button class="px-2.5 py-1 rounded-lg bg-white text-[#107acc] font-bold shadow-xs">7 Days</button>
                    <button class="px-2.5 py-1 rounded-lg hover:text-slate-900 transition">30 Days</button>
                    <button class="px-2.5 py-1 rounded-lg hover:text-slate-900 transition">Quarter</button>
                  </div>
                  <div class="flex items-center gap-3 text-xs pl-2 border-l border-slate-200">
                    <span class="flex items-center gap-1.5 text-slate-500 font-medium">
                      <span class="w-2.5 h-2.5 rounded-sm bg-slate-200"></span> Invited
                    </span>
                    <span class="flex items-center gap-1.5 text-[#107acc] font-bold">
                      <span class="w-2.5 h-2.5 rounded-sm bg-gradient-to-t from-[#107acc] to-[#38bdf8]"></span> Qualified
                    </span>
                  </div>
                </div>
              </div>`;

code = code.replace(oldBarChartHeader, newBarChartHeader);

// 4. Update Donut Chart Legend to use .module-rect with low-opacity drop shadows
const oldDonutLegend = `                <!-- Interactive Legend -->
                <div class="space-y-3 w-full sm:w-auto text-xs">
                  
                  <div class="flex items-center justify-between gap-4 p-2 rounded-xl bg-blue-50/50 border border-blue-100">
                    <div class="flex items-center gap-2">
                      <span class="w-3 h-3 rounded-full bg-gradient-to-tr from-[#107acc] to-[#38bdf8]"></span>
                      <span class="font-bold text-slate-800">Qualified</span>
                    </div>
                    <span class="font-mono font-bold text-[#107acc]">193 (68%)</span>
                  </div>

                  <div class="flex items-center justify-between gap-4 p-2 rounded-xl bg-amber-50/50 border border-amber-100">
                    <div class="flex items-center gap-2">
                      <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                      <span class="font-bold text-slate-800">In Review</span>
                    </div>
                    <span class="font-mono font-bold text-amber-700">62 (22%)</span>
                  </div>

                  <div class="flex items-center justify-between gap-4 p-2 rounded-xl bg-rose-50/50 border border-rose-100">
                    <div class="flex items-center gap-2">
                      <span class="w-3 h-3 rounded-full bg-rose-500"></span>
                      <span class="font-bold text-slate-800">Failed / Exit</span>
                    </div>
                    <span class="font-mono font-bold text-rose-700">29 (10%)</span>
                  </div>

                </div>`;

const newDonutLegend = `                <!-- Interactive Legend with Low-Opacity Drop Shadows -->
                <div class="space-y-2.5 w-full sm:w-auto text-xs">
                  
                  <div class="module-rect flex items-center justify-between gap-5 p-2.5 px-3 bg-gradient-to-r from-blue-50/70 to-white">
                    <div class="flex items-center gap-2.5">
                      <span class="w-3 h-3 rounded-full bg-gradient-to-tr from-[#107acc] to-[#38bdf8] shadow-xs"></span>
                      <span class="font-bold text-slate-800">Qualified</span>
                    </div>
                    <span class="font-mono font-bold text-[#107acc]">193 (68%)</span>
                  </div>

                  <div class="module-rect flex items-center justify-between gap-5 p-2.5 px-3 bg-gradient-to-r from-amber-50/70 to-white">
                    <div class="flex items-center gap-2.5">
                      <span class="w-3 h-3 rounded-full bg-amber-500 shadow-xs"></span>
                      <span class="font-bold text-slate-800">In Review</span>
                    </div>
                    <span class="font-mono font-bold text-amber-700">62 (22%)</span>
                  </div>

                  <div class="module-rect flex items-center justify-between gap-5 p-2.5 px-3 bg-gradient-to-r from-rose-50/70 to-white">
                    <div class="flex items-center gap-2.5">
                      <span class="w-3 h-3 rounded-full bg-rose-500 shadow-xs"></span>
                      <span class="font-bold text-slate-800">Failed / Exit</span>
                    </div>
                    <span class="font-mono font-bold text-rose-700">29 (10%)</span>
                  </div>

                </div>`;

code = code.replace(oldDonutLegend, newDonutLegend);

// 5. Update Active Assessment Rows to use module-rect with low-opacity drop shadows
const oldAssessRow1 = `            <!-- Assessment Row 1 -->
            <div class="p-4 rounded-xl border border-slate-200/90 hover:border-[#107acc] bg-white transition space-y-2.5 group cursor-pointer" onclick="switchScreen('test-detail')">`;

const newAssessRow1 = `            <!-- Assessment Row 1 with Low-Opacity Drop Shadow -->
            <div class="module-rect p-4.5 space-y-2.5 group cursor-pointer hover:border-[#107acc]" onclick="switchScreen('test-detail')">`;

code = code.replace(oldAssessRow1, newAssessRow1);

const oldAssessRow2 = `            <!-- Assessment Row 2 -->
            <div class="p-4 rounded-xl border border-slate-200/90 hover:border-[#107acc] bg-white transition space-y-2.5 group cursor-pointer" onclick="switchScreen('test-detail')">`;

const newAssessRow2 = `            <!-- Assessment Row 2 with Low-Opacity Drop Shadow -->
            <div class="module-rect p-4.5 space-y-2.5 group cursor-pointer hover:border-[#107acc]" onclick="switchScreen('test-detail')">`;

code = code.replace(oldAssessRow2, newAssessRow2);

// 6. Update Creator Leaders rows to use module-rect with rank medals
const oldLeader1 = `              <div class="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition cursor-pointer" onclick="switchScreen('creator-detail')">
                <div class="flex items-center gap-3">
                  <img src="assets/creators/creator-hemachandra.jpg" class="w-10 h-10 rounded-xl object-cover border border-slate-200" alt="P Hemachandra" />
                  <div>
                    <span class="text-xs font-bold text-slate-800 block">P Hemachandra</span>
                    <span class="text-[10px] font-semibold text-slate-400">104 Reviews • Tier-1 Lead</span>
                  </div>
                </div>
                <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-emerald-50 text-emerald-700">
                  4.9 ★
                </span>
              </div>`;

const newLeader1 = `              <div class="module-rect flex items-center justify-between p-3 cursor-pointer group" onclick="switchScreen('creator-detail')">
                <div class="flex items-center gap-3">
                  <span class="w-6 h-6 rounded-lg bg-amber-50 text-amber-700 border border-amber-200/80 font-mono font-bold text-[11px] flex items-center justify-center shadow-xs">#1</span>
                  <img src="assets/creators/creator-hemachandra.jpg" class="w-10 h-10 rounded-xl object-cover border border-slate-200 group-hover:scale-105 transition" alt="P Hemachandra" />
                  <div>
                    <span class="text-xs font-bold text-slate-800 group-hover:text-[#107acc] transition block">P Hemachandra</span>
                    <span class="text-[10px] font-semibold text-slate-400">104 Reviews • Tier-1 Lead</span>
                  </div>
                </div>
                <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/70 shadow-xs">
                  4.9 ★
                </span>
              </div>`;

code = code.replace(oldLeader1, newLeader1);

const oldLeader2 = `              <div class="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition cursor-pointer" onclick="switchScreen('creator-detail')">
                <div class="flex items-center gap-3">
                  <img src="assets/creators/creator-madhuri.jpg" class="w-10 h-10 rounded-xl object-cover border border-slate-200" alt="Madhuri" />
                  <div>
                    <span class="text-xs font-bold text-slate-800 block">Madhuri ReddyShetty</span>
                    <span class="text-[10px] font-semibold text-[#107acc]">MANAGER • 48 Reviews</span>
                  </div>
                </div>
                <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-blue-50 text-[#107acc]">
                  4.8 ★
                </span>
              </div>`;

const newLeader2 = `              <div class="module-rect flex items-center justify-between p-3 cursor-pointer group" onclick="switchScreen('creator-detail')">
                <div class="flex items-center gap-3">
                  <span class="w-6 h-6 rounded-lg bg-slate-100 text-slate-600 border border-slate-200 font-mono font-bold text-[11px] flex items-center justify-center shadow-xs">#2</span>
                  <img src="assets/creators/creator-madhuri.jpg" class="w-10 h-10 rounded-xl object-cover border border-slate-200 group-hover:scale-105 transition" alt="Madhuri" />
                  <div>
                    <span class="text-xs font-bold text-slate-800 group-hover:text-[#107acc] transition block">Madhuri ReddyShetty</span>
                    <span class="text-[10px] font-semibold text-[#107acc]">MANAGER • 48 Reviews</span>
                  </div>
                </div>
                <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-blue-50 text-[#107acc] border border-blue-200/70 shadow-xs">
                  4.8 ★
                </span>
              </div>`;

code = code.replace(oldLeader2, newLeader2);

const oldLeader3 = `              <div class="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition cursor-pointer" onclick="switchScreen('creator-detail')">
                <div class="flex items-center gap-3">
                  <img src="assets/creators/creator-prashanti.jpg" class="w-10 h-10 rounded-xl object-cover border border-slate-200" alt="Prashanti" />
                  <div>
                    <span class="text-xs font-bold text-slate-800 block">K Prashanti</span>
                    <span class="text-[10px] font-semibold text-slate-400">4 Reviews • Reviewer</span>
                  </div>
                </div>
                <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-slate-100 text-slate-600">
                  4.7 ★
                </span>
              </div>`;

const newLeader3 = `              <div class="module-rect flex items-center justify-between p-3 cursor-pointer group" onclick="switchScreen('creator-detail')">
                <div class="flex items-center gap-3">
                  <span class="w-6 h-6 rounded-lg bg-slate-100 text-slate-500 border border-slate-200 font-mono font-bold text-[11px] flex items-center justify-center shadow-xs">#3</span>
                  <img src="assets/creators/creator-prashanti.jpg" class="w-10 h-10 rounded-xl object-cover border border-slate-200 group-hover:scale-105 transition" alt="Prashanti" />
                  <div>
                    <span class="text-xs font-bold text-slate-800 group-hover:text-[#107acc] transition block">K Prashanti</span>
                    <span class="text-[10px] font-semibold text-slate-400">4 Reviews • Reviewer</span>
                  </div>
                </div>
                <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-slate-100 text-slate-600 border border-slate-200/70 shadow-xs">
                  4.7 ★
                </span>
              </div>`;

code = code.replace(oldLeader3, newLeader3);

fs.writeFileSync('build_premium_gradarena.js', code, 'utf8');
console.log('Successfully enhanced build_premium_gradarena.js with low-opacity drop shadows and elevated design!');
