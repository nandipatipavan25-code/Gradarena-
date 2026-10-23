const fs = require('fs');

let code = fs.readFileSync('build_premium_gradarena.js', 'utf8');

// Target existing screen-creator-detail block
const startMarker = '<div id="screen-creator-detail" class="screen-view hidden space-y-6">';
const endMarker = '<!-- ============================================================ -->\n      <!-- SCREEN 4: TEST CREATION WIZARD (CONFIGURABLE MULTI-STAGE)    -->';

const startIndex = code.indexOf(startMarker);
const endIndex = code.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find screen-creator-detail boundaries!');
  process.exit(1);
}

const newCreatorDetailHtml = `<div id="screen-creator-detail" class="screen-view hidden space-y-6">
        
        <!-- Navigation Breadcrumb -->
        <div class="flex items-center justify-between">
          <button onclick="switchScreen('creators')" class="text-xs font-bold text-slate-500 hover:text-[#107acc] flex items-center gap-1.5 transition">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            Back to All Test Creators
          </button>
          <div class="flex items-center gap-2 text-xs text-slate-400">
            <span>Creators</span>
            <span>/</span>
            <span class="text-slate-700 font-semibold">P Hemachandra</span>
            <span>/</span>
            <span class="text-[#107acc] font-bold">Created Tests & Reviews</span>
          </div>
        </div>

        <!-- Creator Profile Banner Card -->
        <div class="premium-card p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div class="flex items-start md:items-center gap-5">
            <div class="relative shrink-0">
              <img src="assets/creators/creator-hemachandra.jpg" class="w-20 h-20 rounded-2xl object-cover border-2 border-white shadow-card" alt="P Hemachandra" />
              <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-[9px] font-bold" title="Online & Active">✓</span>
            </div>
            <div class="space-y-1.5">
              <div class="flex flex-wrap items-center gap-2.5">
                <h3 class="text-xl font-bold text-slate-900">P Hemachandra</h3>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#107acc] border border-blue-200/80">SENIOR TEST CREATOR</span>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80">TOP AUTHOR</span>
              </div>
              <p class="text-xs text-slate-500">hemachandra@gadigitalsolutions.com • Senior Assessment Engineer • Team: Enterprise Engineering</p>
              <p class="text-xs text-slate-600 max-w-2xl leading-relaxed">
                Specialized in configuring automated IT Support, Hardware Diagnostics, Cloud Architecture, and multi-stage Voice/MCQ evaluation blueprints. Joined organizational assessment roster Jan 2025.
              </p>
            </div>
          </div>
          <div class="flex items-center gap-3 shrink-0 w-full lg:w-auto">
            <button onclick="switchScreen('chat')" class="flex-1 lg:flex-none px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition flex items-center justify-center gap-2 shadow-xs">
              <svg class="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              Message Creator
            </button>
            <button onclick="switchScreen('test-create')" class="flex-1 lg:flex-none px-4 py-2.5 rounded-xl bg-[#107acc] text-white text-xs font-bold hover:bg-[#0c68ab] transition flex items-center justify-center gap-2 shadow-xs">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Assign New Test
            </button>
          </div>
        </div>

        <!-- 4 Creator Key Metrics Cards ("How many tests created & review stats") -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <!-- Metric 1: Total Tests Created -->
          <div class="premium-card p-5 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">TOTAL TESTS CREATED</span>
              <div class="w-7 h-7 rounded-lg bg-blue-50 text-[#107acc] flex items-center justify-center">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
              </div>
            </div>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-bold text-slate-900 font-mono">104</span>
              <span class="text-xs text-emerald-600 font-bold">↑ 14% vs Q2</span>
            </div>
            <div class="flex items-center gap-3 text-[11px] text-slate-500 pt-1 border-t border-slate-100">
              <span class="text-emerald-700 font-semibold">86 Live</span>
              <span>•</span>
              <span class="text-amber-700 font-semibold">12 In Review</span>
              <span>•</span>
              <span class="text-slate-400">6 Archived</span>
            </div>
          </div>

          <!-- Metric 2: Review Approval Rate -->
          <div class="premium-card p-5 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">REVIEW APPROVAL RATE</span>
              <div class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
            </div>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-bold text-emerald-600 font-mono">94.2%</span>
              <span class="text-xs text-slate-400">First-pass 88%</span>
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
              <span>Average Review Turnaround</span>
              <span class="font-bold text-slate-800 font-mono">3.8 hrs</span>
            </div>
          </div>

          <!-- Metric 3: Candidates Evaluated -->
          <div class="premium-card p-5 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">CANDIDATES EVALUATED</span>
              <div class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
            </div>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-bold text-slate-900 font-mono">2,418</span>
              <span class="text-xs text-[#107acc] font-bold">18 Client Drives</span>
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
              <span>Avg Candidate Pass Rate</span>
              <span class="font-bold text-slate-800 font-mono">78.6%</span>
            </div>
          </div>

          <!-- Metric 4: Creator Quality Rating -->
          <div class="premium-card p-5 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">CREATOR QUALITY SCORE</span>
              <div class="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
            </div>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-bold text-[#107acc] font-mono">4.9</span>
              <span class="text-xs text-slate-400">/ 5.0 (186 reviews)</span>
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
              <span>Proctoring Integrity</span>
              <span class="font-bold text-emerald-600 font-mono">99.4% SLA</span>
            </div>
          </div>

        </div>

        <!-- Review Cycle Summary & Latest Audit Banner -->
        <div class="premium-card p-5 bg-gradient-to-r from-blue-50/70 via-indigo-50/30 to-white border border-blue-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="flex items-start gap-3.5">
            <div class="w-9 h-9 rounded-xl bg-white border border-blue-200 text-[#107acc] flex items-center justify-center shrink-0 shadow-2xs">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h4 class="text-xs font-bold text-slate-900">Latest Manager Review Sign-Off: Hardware Support (Tier 1)</h4>
                <span class="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800">APPROVED</span>
              </div>
              <p class="text-xs text-slate-600 mt-0.5">
                <strong class="text-slate-800">Review Note by Rajini K (Operations Manager)</strong>: "Excellent question balance between Dwaani Voice proctoring and Windows AD hardware troubleshooting. Calibrated proctoring threshold at 60%."
              </p>
            </div>
          </div>
          <div class="text-right shrink-0">
            <span class="text-[10px] text-slate-400 block">Reviewed on</span>
            <span class="text-xs font-bold text-slate-800 font-mono">Oct 19, 2026 • 14:32 IST</span>
          </div>
        </div>

        <!-- Created Tests Table with Review Stats & Created Date ("stats for the review with created date") -->
        <div class="premium-card p-6 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-100">
            <div>
              <h4 class="text-base font-bold text-slate-900">Created Assessments & Review Telemetry (104 Tests)</h4>
              <p class="text-xs text-slate-500">Track tests created by P Hemachandra, submission dates, manager review timestamps, and approval statuses.</p>
            </div>
            <div class="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
              <button class="px-3 py-1.5 rounded-lg bg-white text-slate-900 font-bold shadow-xs">All (104)</button>
              <button class="px-3 py-1.5 rounded-lg text-slate-500 hover:text-slate-800">Live (86)</button>
              <button class="px-3 py-1.5 rounded-lg text-slate-500 hover:text-slate-800">In Review (12)</button>
              <button class="px-3 py-1.5 rounded-lg text-slate-500 hover:text-slate-800">Drafts (6)</button>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50/80 text-slate-500 uppercase font-semibold border-b border-slate-100 text-[10px] tracking-wider">
                <tr>
                  <th class="p-3.5">TEST TITLE & CODE</th>
                  <th class="p-3.5">CREATED DATE</th>
                  <th class="p-3.5">CLIENT / DOMAIN</th>
                  <th class="p-3.5">REVIEW STATUS</th>
                  <th class="p-3.5">REVIEW DATE & REVIEWER</th>
                  <th class="p-3.5">ATTEMPTS & PASS RATE</th>
                  <th class="p-3.5 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                
                <!-- Row 1 -->
                <tr class="hover:bg-slate-50/70 transition">
                  <td class="p-3.5">
                    <div class="font-bold text-slate-900 hover:text-[#107acc] cursor-pointer" onclick="switchScreen('test-detail')">Hardware Support (Tier 1)</div>
                    <div class="text-[10px] text-slate-400 font-mono">TEST-HW-8821 • 3 Stages (Voice + MCQ + Practical)</div>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Oct 18, 2026</span>
                    <span class="text-[10px] text-slate-400">4 days ago (10:14 IST)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold text-[11px]">WFM Enterprise</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1 w-fit">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> APPROVED & LIVE
                    </span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Oct 19, 2026 • 14:32</span>
                    <span class="text-[10px] text-slate-500">by Rajini K (Turnaround: 4.2h)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-mono font-bold text-slate-900 block">284 attempts</span>
                    <span class="text-[10px] font-bold text-emerald-600">77% Pass Rate</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <button onclick="switchScreen('test-detail')" class="px-3 py-1.5 rounded-lg bg-blue-50 text-[#107acc] font-bold hover:bg-blue-100 transition shadow-2xs">
                      View Blueprint
                    </button>
                  </td>
                </tr>

                <!-- Row 2 -->
                <tr class="hover:bg-slate-50/70 transition">
                  <td class="p-3.5">
                    <div class="font-bold text-slate-900 hover:text-[#107acc] cursor-pointer" onclick="switchScreen('test-detail')">Cloud Solutions Architect (AWS / Azure)</div>
                    <div class="text-[10px] text-slate-400 font-mono">TEST-CSA-9042 • 2 Stages (Architecture Scenario + AI Voice)</div>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Oct 14, 2026</span>
                    <span class="text-[10px] text-slate-400">8 days ago (16:45 IST)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-semibold text-[11px]">CloudOps Infra</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1 w-fit">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> APPROVED & LIVE
                    </span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Oct 15, 2026 • 11:20</span>
                    <span class="text-[10px] text-slate-500">by Rajini K (Turnaround: 2.5h)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-mono font-bold text-slate-900 block">162 attempts</span>
                    <span class="text-[10px] font-bold text-emerald-600">81% Pass Rate</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <button onclick="switchScreen('test-detail')" class="px-3 py-1.5 rounded-lg bg-blue-50 text-[#107acc] font-bold hover:bg-blue-100 transition shadow-2xs">
                      View Blueprint
                    </button>
                  </td>
                </tr>

                <!-- Row 3: In Review -->
                <tr class="hover:bg-slate-50/70 transition bg-amber-50/20">
                  <td class="p-3.5">
                    <div class="font-bold text-slate-900 hover:text-[#107acc] cursor-pointer" onclick="switchScreen('test-detail')">Python Backend & Fast-API Lead</div>
                    <div class="text-[10px] text-slate-400 font-mono">TEST-PY-7719 • 3 Stages (Coding Sandbox + System Design)</div>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Oct 21, 2026</span>
                    <span class="text-[10px] text-amber-700 font-semibold">Yesterday (18:10 IST)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-semibold text-[11px]">Fintech Platform</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300 flex items-center gap-1 w-fit">
                      <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> IN REVIEW (QUEUE #2)
                    </span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-amber-900 block">Assigned to Rajini K</span>
                    <span class="text-[10px] text-amber-700">Estimated sign-off: Today, 15:00</span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-mono font-bold text-slate-400 block">-- attempts</span>
                    <span class="text-[10px] text-slate-400">Pre-launch testing</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <button onclick="switchScreen('reviews')" class="px-3 py-1.5 rounded-lg bg-amber-100 text-amber-800 font-bold hover:bg-amber-200 transition shadow-2xs">
                      Review Now
                    </button>
                  </td>
                </tr>

                <!-- Row 4 -->
                <tr class="hover:bg-slate-50/70 transition">
                  <td class="p-3.5">
                    <div class="font-bold text-slate-900 hover:text-[#107acc] cursor-pointer" onclick="switchScreen('test-detail')">Network Security & Enterprise VPN</div>
                    <div class="text-[10px] text-slate-400 font-mono">TEST-NET-6604 • 2 Stages (Packet Tracing + Security Policy)</div>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Oct 08, 2026</span>
                    <span class="text-[10px] text-slate-400">2 weeks ago (09:30 IST)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold text-[11px]">CyberDefense Inc</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1 w-fit">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> APPROVED & LIVE
                    </span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Oct 08, 2026 • 15:40</span>
                    <span class="text-[10px] text-slate-500">by Rajini K (Turnaround: 6.1h)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-mono font-bold text-slate-900 block">98 attempts</span>
                    <span class="text-[10px] font-bold text-emerald-600">64% Pass Rate</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <button onclick="switchScreen('test-detail')" class="px-3 py-1.5 rounded-lg bg-blue-50 text-[#107acc] font-bold hover:bg-blue-100 transition shadow-2xs">
                      View Blueprint
                    </button>
                  </td>
                </tr>

                <!-- Row 5 -->
                <tr class="hover:bg-slate-50/70 transition">
                  <td class="p-3.5">
                    <div class="font-bold text-slate-900 hover:text-[#107acc] cursor-pointer" onclick="switchScreen('test-detail')">Lead Generation & Inside Sales Executive</div>
                    <div class="text-[10px] text-slate-400 font-mono">TEST-LGE-5510 • 2 Stages (Dwaani Voice Pitch + Sales Aptitude)</div>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Sep 28, 2026</span>
                    <span class="text-[10px] text-slate-400">3 weeks ago (14:22 IST)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold text-[11px]">GrowthTech Global</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1 w-fit">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> APPROVED & LIVE
                    </span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Sep 29, 2026 • 10:15</span>
                    <span class="text-[10px] text-slate-500">by Madhuri R (Turnaround: 3.2h)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-mono font-bold text-slate-900 block">142 attempts</span>
                    <span class="text-[10px] font-bold text-emerald-600">73% Pass Rate</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <button onclick="switchScreen('test-detail')" class="px-3 py-1.5 rounded-lg bg-blue-50 text-[#107acc] font-bold hover:bg-blue-100 transition shadow-2xs">
                      View Blueprint
                    </button>
                  </td>
                </tr>

                <!-- Row 6: Revision Note -->
                <tr class="hover:bg-slate-50/70 transition">
                  <td class="p-3.5">
                    <div class="font-bold text-slate-900 hover:text-[#107acc] cursor-pointer" onclick="switchScreen('test-detail')">DevOps & Kubernetes Containerization</div>
                    <div class="text-[10px] text-slate-400 font-mono">TEST-DOK-4432 • 3 Stages (YAML Cluster + Helm + Voice)</div>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Sep 15, 2026</span>
                    <span class="text-[10px] text-slate-400">1 month ago (11:05 IST)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold text-[11px]">InfraCloud Labs</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200 flex items-center gap-1 w-fit">
                      <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span> REVISED & RE-APPROVED
                    </span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Sep 16, 2026 • 17:00</span>
                    <span class="text-[10px] text-slate-500">by Rajini K (Revision cycle resolved)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-mono font-bold text-slate-900 block">84 attempts</span>
                    <span class="text-[10px] font-bold text-emerald-600">88% Pass Rate</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <button onclick="switchScreen('test-detail')" class="px-3 py-1.5 rounded-lg bg-blue-50 text-[#107acc] font-bold hover:bg-blue-100 transition shadow-2xs">
                      View Blueprint
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <!-- Table Footer Pagination / Summary -->
          <div class="flex items-center justify-between pt-3 text-xs text-slate-500 border-t border-slate-100">
            <span>Showing 6 of 104 created assessments by P Hemachandra</span>
            <div class="flex items-center gap-2">
              <button class="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold" disabled>Previous</button>
              <button class="px-3 py-1.5 rounded-lg bg-[#107acc] text-white font-bold">1</button>
              <button class="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold">2</button>
              <button class="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold">3</button>
              <span>...</span>
              <button class="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold">18</button>
              <button class="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold">Next</button>
            </div>
          </div>
        </div>

      </div>

      `;

code = code.substring(0, startIndex) + newCreatorDetailHtml + code.substring(endIndex);

fs.writeFileSync('build_premium_gradarena.js', code, 'utf8');
console.log('Successfully enhanced screen-creator-detail with created tests count and review stats with created dates!');
