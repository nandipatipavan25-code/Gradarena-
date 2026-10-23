module.exports = `
      <!-- ============================================================ -->
      <!-- SCREEN 1: RECRUITER DASHBOARD (MODERN 2026 SAAS REDESIGN)    -->
      <!-- ============================================================ -->
      <div id="screen-dashboard" class="screen-view space-y-6">
        
        <!-- Live Clock & Status Strip -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-dot shrink-0"></span>
            <span id="liveClock" class="font-bold text-slate-800 text-sm tracking-tight font-mono">10:50:00 AM • IST (GMT+5:30)</span>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              Systems Optimal
            </span>
          </div>
          <button onclick="switchScreen('create-test')" class="px-4 py-2 rounded-2xl bg-gradient-to-r from-[#107acc] to-[#2590e8] hover:from-[#0c68ab] hover:to-[#107acc] text-white text-xs font-bold shadow-brand-glow flex items-center gap-2 transition transform hover:-translate-y-0.5 cursor-pointer">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            <span>+ Create Assessment</span>
          </button>
        </div>

        <!-- ========================================================== -->
        <!-- ROW 1: 4 TOP STAT CARDS (DIRECTLY MATCHING REFERENCE IMAGE 1) -->
        <!-- ========================================================== -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <!-- Card 1: Total Candidates -->
          <div class="premium-card p-5 flex items-center justify-between cursor-pointer group" onclick="switchScreen('candidates')">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-2xl bg-purple-50 text-[#7c3aed] flex items-center justify-center shrink-0 group-hover:scale-105 transition shadow-2xs">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div>
                <span class="text-2xl font-bold text-slate-900 tracking-tight block">3,284</span>
                <span class="text-xs text-slate-400 font-medium block">Total Candidates</span>
              </div>
            </div>
            <button class="text-slate-300 hover:text-slate-500 font-bold text-base px-1">•••</button>
          </div>

          <!-- Card 2: Active Tests -->
          <div class="premium-card p-5 flex items-center justify-between cursor-pointer group" onclick="switchScreen('my-tests')">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-2xl bg-sky-50 text-[#107acc] flex items-center justify-center shrink-0 group-hover:scale-105 transition shadow-2xs">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
              </div>
              <div>
                <span class="text-2xl font-bold text-slate-900 tracking-tight block">30</span>
                <span class="text-xs text-slate-400 font-medium block">Active Assessments</span>
              </div>
            </div>
            <button class="text-slate-300 hover:text-slate-500 font-bold text-base px-1">•••</button>
          </div>

          <!-- Card 3: Avg Integrity Score -->
          <div class="premium-card p-5 flex items-center justify-between cursor-pointer group" onclick="switchScreen('candidates')">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-2xl bg-orange-50 text-[#ff754c] flex items-center justify-center shrink-0 group-hover:scale-105 transition shadow-2xs">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div>
                <span class="text-2xl font-bold text-slate-900 tracking-tight block">86.4%</span>
                <span class="text-xs text-slate-400 font-medium block">Avg Integrity Index</span>
              </div>
            </div>
            <button class="text-slate-300 hover:text-slate-500 font-bold text-base px-1">•••</button>
          </div>

          <!-- Card 4: Enterprise Credits -->
          <div class="premium-card p-5 flex items-center justify-between cursor-pointer group" onclick="toggleCreditsPopover()">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-2xl bg-rose-50 text-[#f43f5e] flex items-center justify-center shrink-0 group-hover:scale-105 transition shadow-2xs">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </div>
              <div>
                <span class="text-2xl font-bold text-slate-900 tracking-tight block">222.25</span>
                <span class="text-xs text-slate-400 font-medium block">Enterprise Credits</span>
              </div>
            </div>
            <button class="text-slate-300 hover:text-slate-500 font-bold text-base px-1">•••</button>
          </div>

        </div>


        <!-- ========================================================== -->
        <!-- ROW 2: DUAL MAIN CHARTS (DIRECTLY MATCHING REFERENCE IMAGE 1) -->
        <!-- ========================================================== -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          <!-- Card 1: Completions vs. Shortlisted Trend (2 cols wide) -->
          <div class="lg:col-span-2 premium-card p-6 flex flex-col justify-between">
            <div class="flex items-center justify-between mb-6">
              <div>
                <h3 class="text-sm font-bold text-slate-900 tracking-tight">Candidate Completions vs. Shortlisted Trend</h3>
                <p class="text-[11px] text-slate-400">Monthly applicant intake and shortlisting ratio across all assessments</p>
              </div>
              <div class="flex items-center gap-2">
                <select class="text-xs text-slate-600 font-semibold bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-1.5 focus:outline-none cursor-pointer">
                  <option>Show by months</option>
                  <option>Show by weeks</option>
                  <option>Show by quarters</option>
                </select>
              </div>
            </div>

            <!-- Chart Body: Dual Slender Pill Bars on Left + Circular Donut on Right -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              
              <!-- Slender Vertical Pill Bar Chart (2 cols) -->
              <div class="md:col-span-2">
                <div class="relative h-48 w-full">
                  <svg class="w-full h-full" viewBox="0 0 460 170" preserveAspectRatio="none">
                    <!-- Dashed horizontal guide lines -->
                    <line x1="35" y1="20" x2="455" y2="20" stroke="#E2E8F0" stroke-dasharray="3 3" />
                    <line x1="35" y1="65" x2="455" y2="65" stroke="#E2E8F0" stroke-dasharray="3 3" />
                    <line x1="35" y1="110" x2="455" y2="110" stroke="#E2E8F0" stroke-dasharray="3 3" />
                    <line x1="35" y1="145" x2="455" y2="145" stroke="#CBD5E1" />

                    <!-- Y-axis scale numbers -->
                    <text x="5" y="24" font-size="9" fill="#94A3B8" font-family="'Lato', sans-serif">4,500</text>
                    <text x="5" y="69" font-size="9" fill="#94A3B8" font-family="'Lato', sans-serif">3,000</text>
                    <text x="5" y="114" font-size="9" fill="#94A3B8" font-family="'Lato', sans-serif">1,500</text>
                    <text x="18" y="149" font-size="9" fill="#94A3B8" font-family="'Lato', sans-serif">0</text>

                    <!-- Month 1: Oct 2025 -->
                    <rect x="75" y="90" width="8" height="55" rx="4" fill="#00D284" class="hover:opacity-80 transition cursor-pointer" />
                    <rect x="87" y="45" width="8" height="100" rx="4" fill="#7C3AED" class="hover:opacity-80 transition cursor-pointer" />
                    <text x="70" y="162" font-size="9" fill="#64748B" font-family="'Lato', sans-serif">Oct 2025</text>

                    <!-- Month 2: Nov 2025 -->
                    <rect x="140" y="70" width="8" height="75" rx="4" fill="#00D284" class="hover:opacity-80 transition cursor-pointer" />
                    <rect x="152" y="35" width="8" height="110" rx="4" fill="#7C3AED" class="hover:opacity-80 transition cursor-pointer" />
                    <text x="135" y="162" font-size="9" fill="#64748B" font-family="'Lato', sans-serif">Nov 2025</text>

                    <!-- Month 3: Dec 2025 -->
                    <rect x="205" y="105" width="8" height="40" rx="4" fill="#00D284" class="hover:opacity-80 transition cursor-pointer" />
                    <rect x="217" y="20" width="8" height="125" rx="4" fill="#7C3AED" class="hover:opacity-80 transition cursor-pointer" />
                    <text x="200" y="162" font-size="9" fill="#64748B" font-family="'Lato', sans-serif">Dec 2025</text>

                    <!-- Month 4: Jan 2026 -->
                    <rect x="270" y="95" width="8" height="50" rx="4" fill="#00D284" class="hover:opacity-80 transition cursor-pointer" />
                    <rect x="282" y="55" width="8" height="90" rx="4" fill="#7C3AED" class="hover:opacity-80 transition cursor-pointer" />
                    <text x="265" y="162" font-size="9" fill="#64748B" font-family="'Lato', sans-serif">Jan 2026</text>

                    <!-- Month 5: Feb 2026 -->
                    <rect x="335" y="85" width="8" height="60" rx="4" fill="#00D284" class="hover:opacity-80 transition cursor-pointer" />
                    <rect x="347" y="48" width="8" height="97" rx="4" fill="#7C3AED" class="hover:opacity-80 transition cursor-pointer" />
                    <text x="330" y="162" font-size="9" fill="#64748B" font-family="'Lato', sans-serif">Feb 2026</text>

                    <!-- Month 6: Mar 2026 -->
                    <rect x="400" y="78" width="8" height="67" rx="4" fill="#00D284" class="hover:opacity-80 transition cursor-pointer" />
                    <rect x="412" y="30" width="8" height="115" rx="4" fill="#7C3AED" class="hover:opacity-80 transition cursor-pointer" />
                    <text x="395" y="162" font-size="9" fill="#64748B" font-family="'Lato', sans-serif">Mar 2026</text>
                  </svg>
                </div>
              </div>

              <!-- Donut Ring on Right Side with 28% pill badge (as in Image 1) -->
              <div class="flex flex-col items-center justify-center">
                <div class="relative w-36 h-36 flex items-center justify-center">
                  <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#F1F5F9" stroke-width="12" fill="transparent" />
                    <circle cx="50" cy="50" r="40" stroke="#7C3AED" stroke-width="12" stroke-linecap="round" fill="transparent" stroke-dasharray="251.2" stroke-dashoffset="65" />
                    <circle cx="50" cy="50" r="40" stroke="#00D284" stroke-width="12" stroke-linecap="round" fill="transparent" stroke-dasharray="251.2" stroke-dashoffset="200" />
                  </svg>
                  <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <svg class="w-5 h-5 text-slate-400 mb-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
                    <span class="text-xs font-bold text-slate-800">74%</span>
                  </div>
                  <!-- Floating Badge -->
                  <span class="absolute top-1 -left-2 bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-lg shadow-md">
                    74%
                  </span>
                </div>
                <span class="text-[11px] text-slate-400 font-semibold mt-2">Conversion Yield</span>
              </div>

            </div>

            <!-- Legend Footer -->
            <div class="flex items-center justify-center gap-6 pt-4 border-t border-slate-100 text-xs font-semibold">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#7C3AED]"></span>
                <span class="text-slate-600">Total Completed</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#00D284]"></span>
                <span class="text-slate-600">Shortlisted Candidates</span>
              </div>
            </div>
          </div>

          <!-- Card 2: Proctoring Modality & Integrity Donut (1 col wide, directly matching Image 1) -->
          <div class="premium-card p-6 flex flex-col justify-between">
            <div class="flex items-center justify-between mb-2">
              <div>
                <h3 class="text-sm font-bold text-slate-900 tracking-tight">Proctoring by Modality</h3>
                <p class="text-[11px] text-slate-400">Webcam vs. Voice AI Verification</p>
              </div>
              <button class="text-slate-300 hover:text-slate-500 font-bold text-base px-1">•••</button>
            </div>

            <!-- Two-Tone Donut Ring (Coral + Purple matching Image 1) -->
            <div class="relative w-44 h-44 mx-auto flex items-center justify-center my-4">
              <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" stroke="#F1F5F9" stroke-width="13" fill="transparent" />
                <circle cx="50" cy="50" r="38" stroke="#FF754C" stroke-width="13" stroke-linecap="round" fill="transparent" stroke-dasharray="238.76" stroke-dashoffset="95" />
                <circle cx="50" cy="50" r="38" stroke="#7C3AED" stroke-width="13" stroke-linecap="round" fill="transparent" stroke-dasharray="238.76" stroke-dashoffset="190" />
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <svg class="w-7 h-7 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
            </div>

            <div class="flex items-center justify-center gap-6 pt-3 border-t border-slate-100 text-xs font-semibold">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#FF754C]"></span>
                <span class="text-slate-600">Video (68%)</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#7C3AED]"></span>
                <span class="text-slate-600">Voice AI (32%)</span>
              </div>
            </div>
          </div>

        </div>


        <!-- ========================================================== -->
        <!-- ROW 3: TRIPLE INSIGHT WIDGETS (DIRECTLY MATCHING REFERENCE IMAGE 1) -->
        <!-- ========================================================== -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          <!-- Widget 1: Time Admitted Smooth Wave Spline Chart with Tooltip Badge 113 -->
          <div class="premium-card p-6 flex flex-col justify-between">
            <div class="flex items-center justify-between mb-1">
              <div>
                <h3 class="text-sm font-bold text-slate-900 tracking-tight">Time Admitted</h3>
                <p class="text-[11px] text-slate-400">Hourly candidate test check-ins</p>
              </div>
              <select class="text-xs text-slate-600 font-semibold bg-slate-50 border border-slate-200/80 rounded-xl px-2.5 py-1 focus:outline-none cursor-pointer">
                <option>Today</option>
                <option>Yesterday</option>
              </select>
            </div>

            <!-- Smooth Bezier Spline Area Chart with Tooltip 113 -->
            <div class="relative h-36 w-full mt-2">
              <svg class="w-full h-full" viewBox="0 0 280 130" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="coralWaveGradRecruiter" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#FF754C" stop-opacity="0.28" />
                    <stop offset="100%" stop-color="#FF754C" stop-opacity="0.0" />
                  </linearGradient>
                </defs>
                <line x1="20" y1="30" x2="275" y2="30" stroke="#F1F5F9" />
                <line x1="20" y1="65" x2="275" y2="65" stroke="#F1F5F9" />
                <line x1="20" y1="100" x2="275" y2="100" stroke="#F1F5F9" />
                <text x="2" y="33" font-size="8" fill="#94A3B8" font-family="'Lato', sans-serif">150</text>
                <text x="2" y="68" font-size="8" fill="#94A3B8" font-family="'Lato', sans-serif">100</text>
                <text x="5" y="103" font-size="8" fill="#94A3B8" font-family="'Lato', sans-serif">50</text>

                <!-- Area Fill -->
                <path d="M 25 105 C 50 100, 65 70, 85 60 C 105 50, 120 90, 145 95 C 170 100, 185 45, 210 50 C 235 55, 255 60, 275 58 L 275 115 L 25 115 Z" fill="url(#coralWaveGradRecruiter)" />
                <!-- Bezier Stroke -->
                <path d="M 25 105 C 50 100, 65 70, 85 60 C 105 50, 120 90, 145 95 C 170 100, 185 45, 210 50 C 235 55, 255 60, 275 58" fill="none" stroke="#FF754C" stroke-width="2.5" stroke-linecap="round" />
                <!-- Active Dot -->
                <circle cx="85" cy="60" r="5" fill="#FF754C" stroke="#FFFFFF" stroke-width="2.5" />
              </svg>
              <!-- Floating Dark Tooltip Badge 113 -->
              <div class="absolute top-5 left-[30%] -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-lg shadow-md">
                113
              </div>
            </div>

            <!-- Time Labels -->
            <div class="flex items-center justify-between text-[10px] font-medium text-slate-400 px-3 pt-2 border-t border-slate-100">
              <span>07 am</span>
              <span class="text-[#FF754C] font-bold">08 am</span>
              <span>09 am</span>
              <span>10 am</span>
              <span>11 am</span>
              <span>12 pm</span>
            </div>
          </div>

          <!-- Widget 2: Candidates By Division List (Directly matching Image 1 "Patients By Division") -->
          <div class="premium-card p-6 flex flex-col justify-between">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-sm font-bold text-slate-900 tracking-tight">Candidates By Division</h3>
              <button class="text-slate-300 hover:text-slate-500 font-bold text-base px-1">•••</button>
            </div>

            <div class="space-y-3 my-auto">
              <div class="flex items-center justify-between text-[10px] uppercase font-bold text-slate-400 tracking-wider pb-1 border-b border-slate-100">
                <span>DIVISION</span>
                <span>PT.</span>
              </div>

              <div class="flex items-center justify-between py-1 hover:bg-slate-50/70 rounded-xl px-2 transition">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-xl bg-blue-50 text-[#107acc] flex items-center justify-center shrink-0">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line></svg>
                  </div>
                  <span class="text-xs font-bold text-slate-800">Hardware Tier 1</span>
                </div>
                <span class="text-xs font-bold text-slate-900">247</span>
              </div>

              <div class="flex items-center justify-between py-1 hover:bg-slate-50/70 rounded-xl px-2 transition">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-xl bg-purple-50 text-[#7c3aed] flex items-center justify-center shrink-0">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path></svg>
                  </div>
                  <span class="text-xs font-bold text-slate-800">Cloud Architect</span>
                </div>
                <span class="text-xs font-bold text-slate-900">164</span>
              </div>

              <div class="flex items-center justify-between py-1 hover:bg-slate-50/70 rounded-xl px-2 transition">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                  </div>
                  <span class="text-xs font-bold text-slate-800">LEAD Executive</span>
                </div>
                <span class="text-xs font-bold text-slate-900">86</span>
              </div>
            </div>

            <div class="pt-2 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-semibold">
              <span>WFM Enterprise & 3 others</span>
              <button onclick="switchScreen('my-tests')" class="text-[#107acc] font-bold hover:underline">View All ➔</button>
            </div>
          </div>

          <!-- Widget 3: Hero Vibrant Gradient Card (Directly matching Image 1 "3,240 Patients this month" & Image 2) -->
          <div class="rounded-3xl p-6 bg-gradient-to-br from-[#107acc] via-[#1d4ed8] to-[#4338ca] text-white flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div class="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none group-hover:scale-110 transition duration-500"></div>

            <div class="space-y-1 relative z-10">
              <span class="text-3xl font-bold tracking-tight block">3,240</span>
              <p class="text-xs text-blue-100 font-medium">Candidates Screened This Month</p>
            </div>

            <!-- Glowing Spline Wave Sparkline with Active Point Badge 232 (Directly matching Image 1!) -->
            <div class="relative h-24 w-full my-2">
              <svg class="w-full h-full" viewBox="0 0 240 80" preserveAspectRatio="none">
                <path d="M 10 50 C 40 45, 55 65, 80 50 C 105 35, 125 55, 150 48 C 175 40, 190 70, 205 45 C 220 20, 230 60, 240 50" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" />
                <circle cx="205" cy="45" r="4.5" fill="#FFFFFF" stroke="#4338ca" stroke-width="2.5" />
              </svg>
              <span class="absolute top-2 right-6 bg-slate-900/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-md shadow-lg">
                232
              </span>
            </div>

            <!-- Date Numbers Row across bottom (Matching Image 1: 14, 15, 16, 17, 18, 19) -->
            <div class="flex items-center justify-between text-[11px] font-bold text-blue-200/80 pt-2 border-t border-white/10 relative z-10">
              <span>14</span>
              <span>15</span>
              <span>16</span>
              <span>17</span>
              <span class="text-white underline underline-offset-4 font-bold">18</span>
              <span>19</span>
            </div>
          </div>

        </div>


        <!-- ========================================================== -->
        <!-- ROW 4: RECENT ASSESSMENTS PIPELINE (MATCHING REFERENCE IMAGE 2) -->
        <!-- ========================================================== -->
        <div class="premium-card p-6 space-y-4">
          
          <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-2 border-b border-slate-100">
            <div class="flex items-center gap-3">
              <h3 class="text-sm font-bold text-slate-900 tracking-tight">Active Assessments Pipeline</h3>
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#107acc]">30 Tests</span>
            </div>
            
            <div class="flex items-center gap-2">
              <div class="relative">
                <input id="dashboardSearchInput" type="text" oninput="filterDashboardRecentTests(this.value)" placeholder="Search assessments..." class="pl-8 pr-4 py-1.5 text-xs bg-slate-50 rounded-xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:bg-white transition" />
                <svg class="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <button onclick="switchScreen('my-tests')" class="px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#107acc] font-bold text-xs transition">
                View All ➔
              </button>
            </div>
          </div>

          <!-- Card-Style Test Activity Rows (Matching Reference Image 2!) -->
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50/70 text-slate-400 uppercase font-semibold text-[10px] tracking-wider">
                <tr>
                  <th class="p-3.5 rounded-l-xl">ASSESSMENT / ROLE</th>
                  <th class="p-3.5">CLIENT</th>
                  <th class="p-3.5">CANDIDATES</th>
                  <th class="p-3.5">INTEGRITY</th>
                  <th class="p-3.5">STATUS</th>
                  <th class="p-3.5 text-right rounded-r-xl">ACTION</th>
                </tr>
              </thead>
              <tbody id="dashboardTestsTableBody" class="divide-y divide-slate-100">
                
                <!-- Test 1: LEAD generation Executive -->
                <tr class="hover:bg-slate-50/70 transition group">
                  <td class="p-3.5">
                    <div class="flex items-center gap-3">
                      <div class="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                        LD
                      </div>
                      <div>
                        <span class="font-bold text-slate-900 hover:text-[#107acc] cursor-pointer block" onclick="switchScreen('my-tests')">LEAD generation Executive</span>
                        <span class="text-[10px] text-slate-400">Created by Madhuri ReddyShetty • 10/12/2026</span>
                      </div>
                    </div>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-slate-100 text-slate-700">Commercial</span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 font-mono">86</span>
                    <span class="text-[10px] text-emerald-600 font-semibold ml-1">↑ 8%</span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-mono text-emerald-600 font-bold">92%</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">PUBLISHED</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <div class="flex items-center justify-end gap-1.5">
                      <button onclick="copyTestLink('LEAD generation Executive')" title="Copy Link" class="p-1.5 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-[#107acc] transition">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                      </button>
                      <button onclick="switchScreen('my-tests')" class="text-slate-300 hover:text-slate-600 font-bold px-1">•••</button>
                    </div>
                  </td>
                </tr>

                <!-- Test 2: Hardware Support (Tier 1) -->
                <tr class="hover:bg-slate-50/70 transition group">
                  <td class="p-3.5">
                    <div class="flex items-center gap-3">
                      <div class="w-9 h-9 rounded-xl bg-blue-50 text-[#107acc] flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                        HW
                      </div>
                      <div>
                        <span class="font-bold text-slate-900 hover:text-[#107acc] cursor-pointer block" onclick="switchScreen('my-tests')">Hardware Support (Tier 1)</span>
                        <span class="text-[10px] text-slate-400">Created by P Hemachandra • 10/7/2026</span>
                      </div>
                    </div>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-blue-50 text-[#107acc]">WFM Enterprise</span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 font-mono">247</span>
                    <span class="text-[10px] text-emerald-600 font-semibold ml-1">↑ 14%</span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-mono text-emerald-600 font-bold">96%</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">PUBLISHED</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <div class="flex items-center justify-end gap-1.5">
                      <button onclick="copyTestLink('Hardware Support (Tier 1)')" title="Copy Link" class="p-1.5 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-[#107acc] transition">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                      </button>
                      <button onclick="openReqEditModal('Hardware Support (Tier 1)', 'GA-TEST-2024-001')" class="text-slate-300 hover:text-slate-600 font-bold px-1">•••</button>
                    </div>
                  </td>
                </tr>

                <!-- Test 3: Accountant -->
                <tr class="hover:bg-slate-50/70 transition group">
                  <td class="p-3.5">
                    <div class="flex items-center gap-3">
                      <div class="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                        AC
                      </div>
                      <div>
                        <span class="font-bold text-slate-900 hover:text-[#107acc] cursor-pointer block" onclick="switchScreen('my-tests')">Accountant</span>
                        <span class="text-[10px] text-slate-400">Created by Sunil Ajay • 9/30/2026</span>
                      </div>
                    </div>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-slate-100 text-slate-700">FinCorp</span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 font-mono">64</span>
                    <span class="text-[10px] text-emerald-600 font-semibold ml-1">↑ 5%</span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-mono text-emerald-600 font-bold">88%</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">PUBLISHED</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <div class="flex items-center justify-end gap-1.5">
                      <button onclick="copyTestLink('Accountant')" title="Copy Link" class="p-1.5 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-[#107acc] transition">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                      </button>
                      <button onclick="switchScreen('my-tests')" class="text-slate-300 hover:text-slate-600 font-bold px-1">•••</button>
                    </div>
                  </td>
                </tr>

                <!-- Test 4: Senior Cloud Architect -->
                <tr class="hover:bg-slate-50/70 transition group">
                  <td class="p-3.5">
                    <div class="flex items-center gap-3">
                      <div class="w-9 h-9 rounded-xl bg-purple-50 text-[#7c3aed] flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                        CA
                      </div>
                      <div>
                        <span class="font-bold text-slate-900 hover:text-[#107acc] cursor-pointer block" onclick="switchScreen('my-tests')">Senior Cloud Architect</span>
                        <span class="text-[10px] text-slate-400">Created by Rajini K • 10/1/2026</span>
                      </div>
                    </div>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-purple-50 text-[#7c3aed]">GA Cloud</span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 font-mono">164</span>
                    <span class="text-[10px] text-emerald-600 font-semibold ml-1">↑ 18%</span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-mono text-emerald-600 font-bold">94%</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">PUBLISHED</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <div class="flex items-center justify-end gap-1.5">
                      <button onclick="copyTestLink('Senior Cloud Architect')" title="Copy Link" class="p-1.5 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-[#107acc] transition">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                      </button>
                      <button onclick="switchScreen('my-tests')" class="text-slate-300 hover:text-slate-600 font-bold px-1">•••</button>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <div class="flex items-center justify-between pt-3 text-xs text-slate-500 border-t border-slate-100">
            <span>Showing 4 of 30 organization tests</span>
            <button onclick="switchScreen('my-tests')" class="text-[#107acc] font-bold hover:underline">
              View Complete Test Inventory (30) ➔
            </button>
          </div>

        </div>

      </div>
`;
