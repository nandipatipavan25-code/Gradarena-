module.exports = `
      <!-- ============================================================ -->
      <!-- SCREEN 8: RECRUITER MODIFICATION REQUESTS                    -->
      <!-- ============================================================ -->
      <div id="screen-modifications" class="screen-view hidden space-y-6">
        
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-xl font-bold text-slate-900 tracking-tight">Modification Requests</h2>
            <p class="text-xs text-slate-500">Please review and update the following tests based on feedback from Operations Manager Rajini K.</p>
          </div>
          <button onclick="switchScreen('my-tests')" class="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700 transition flex items-center gap-1.5 shadow-xs">
            <svg class="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
            Select Test to Modify
          </button>
        </div>

        <!-- Filter Tabs (Modern 2026 Pill Bar) -->
        <div class="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-slate-100 shadow-2xs text-xs">
          <button id="modTab-all" onclick="filterModifications('all')" class="px-4 py-2 rounded-xl bg-blue-50 text-[#107acc] font-bold border border-blue-200/80 transition cursor-pointer">
            All Requests (2)
          </button>
          <button id="modTab-pending" onclick="filterModifications('pending')" class="px-4 py-2 rounded-xl text-slate-500 hover:text-slate-800 font-semibold hover:bg-slate-50 transition cursor-pointer">
            Pending Manager Review (1)
          </button>
          <button id="modTab-approved" onclick="filterModifications('approved')" class="px-4 py-2 rounded-xl text-slate-500 hover:text-slate-800 font-semibold hover:bg-slate-50 transition cursor-pointer">
            Approved & Unlocked (1)
          </button>
          <button id="modTab-empty" onclick="filterModifications('empty')" class="px-4 py-2 rounded-xl text-slate-400 hover:text-slate-600 font-medium transition cursor-pointer">
            Empty State View
          </button>
        </div>

        <!-- Request Card 1: Pending Manager Review -->
        <div id="modCard-1" class="bg-white rounded-3xl p-7 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(16,122,204,0.05)] hover:shadow-md transition-all duration-200 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <h4 class="text-base font-bold text-slate-900">Hardware Support (Tier 1)</h4>
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 inline-flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> PENDING MANAGER REVIEW
                </span>
              </div>
              <p class="text-xs text-slate-500">Client: WFM Enterprise • Created by: P Hemachandra</p>
            </div>
            <div class="text-right text-xs">
              <span class="text-slate-400 block font-medium">Submitted</span>
              <span class="font-bold text-slate-700 font-mono">Oct 21, 2026 • 11:20 AM</span>
            </div>
          </div>

          <div class="space-y-2 text-xs">
            <span class="font-bold text-slate-700 block">Recruiter Modification Justification:</span>
            <div class="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-slate-700 leading-relaxed font-sans">
              "Need to update the passing percentage threshold from 60% to 65% as per updated hiring rubric received from WFM Enterprise. Also adjusting Section 1 duration to 35 minutes."
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 text-xs">
            <div class="flex items-center gap-2 text-slate-500">
              <div class="w-7 h-7 rounded-xl bg-blue-50 text-[#107acc] flex items-center justify-center font-bold text-xs">R</div>
              <span>Assigned Reviewer: <strong class="text-slate-800">Rajini K (Operations Manager)</strong></span>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="withdrawModificationRequest(1)" class="px-4 py-2 rounded-2xl border border-slate-200/90 text-slate-600 hover:bg-slate-50 font-semibold transition cursor-pointer">
                Withdraw Request
              </button>
              <button onclick="nudgeManagerForModification('Hardware Support (Tier 1)')" class="px-4 py-2 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 font-bold hover:bg-amber-100 transition shadow-2xs cursor-pointer">
                Nudge Manager
              </button>
            </div>
          </div>
        </div>

        <!-- Request Card 2: Approved & Unlocked -->
        <div id="modCard-2" class="bg-white rounded-3xl p-7 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(16,122,204,0.05)] hover:shadow-md transition-all duration-200 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <h4 class="text-base font-bold text-slate-900">Cloud Solutions Architect (AWS / Azure)</h4>
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 inline-flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> APPROVED & UNLOCKED
                </span>
              </div>
              <p class="text-xs text-slate-500">Client: CloudOps Infra • Created by: P Hemachandra</p>
            </div>
            <div class="text-right text-xs">
              <span class="text-slate-400 block font-medium">Approved on</span>
              <span class="font-bold text-emerald-700 font-mono">Oct 20, 2026 • 16:45</span>
            </div>
          </div>

          <div class="space-y-2 text-xs">
            <span class="font-bold text-emerald-800 block">Manager Sign-Off & Review Note:</span>
            <div class="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-emerald-900 leading-relaxed font-sans">
              "Approved by Rajini K (Operations Manager). Test blueprint has been unlocked for 48 hours. Please update the AWS Well-Architected questions in Section 2 and re-publish."
            </div>
          </div>

          <div class="flex items-center justify-end gap-3 pt-2">
            <button onclick="switchScreen('create-test')" class="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#107acc] to-[#1688de] hover:from-[#0c68ab] hover:to-[#107acc] text-white text-xs font-bold transition shadow-brand-glow flex items-center gap-1.5">
              <span>Edit Test Blueprint Now ➔</span>
            </button>
          </div>
        </div>

        <!-- Empty State (matching Modifcation requests - Recruiter Panel.png) -->
        <div id="modCard-empty" class="premium-card p-16 text-center space-y-3 hidden border-dashed border-2 border-slate-200">
          <div class="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto text-xl font-bold">
            ✓
          </div>
          <h3 class="text-base font-bold text-slate-900">All caught up</h3>
          <p class="text-xs text-slate-500 max-w-sm mx-auto">No modification requests pending. Published assessments are executing normally.</p>
        </div>

      </div>
`;
