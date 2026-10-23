module.exports = `
      <!-- ============================================================ -->
      <!-- SCREEN 4: RECRUITER CANDIDATES POOL                          -->
      <!-- ============================================================ -->
      <div id="screen-candidates" class="screen-view hidden space-y-6">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-xl font-bold text-slate-900 tracking-tight">Candidates</h2>
            <p class="text-xs text-slate-500">Comprehensive candidate pipeline, evaluation outcomes, proctoring scores, and assessment invites.</p>
          </div>
          <div class="flex items-center gap-3">
            <button onclick="switchScreen('import-candidates')" class="px-4 py-2.5 rounded-xl bg-[#107acc] text-white text-xs font-bold hover:bg-[#0c68ab] transition flex items-center gap-2 shadow-xs cursor-pointer">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="22" y1="11" x2="16" y2="11"></line></svg>
              + Add Candidates
            </button>
            <button onclick="exportCandidatesCsv()" class="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 transition flex items-center gap-2 shadow-xs cursor-pointer">
              <svg class="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              EXPORT
            </button>
          </div>
        </div>

        <!-- Filter Bar (from Candidate list - Recruiter Panel.png) -->
        <div class="premium-card p-4 space-y-3">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            
            <div class="relative lg:col-span-2">
              <input id="searchCandidatesInput" oninput="filterCandidatesTable()" type="text" placeholder="Search candidates by name, email..." class="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:bg-white transition" />
              <svg class="w-4 h-4 text-slate-400 absolute left-3 top-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>

            <select class="px-3 py-2 text-xs bg-slate-50 rounded-xl border border-slate-200 focus:outline-none text-slate-700">
              <option>All Clients</option>
              <option>WFM Enterprise</option>
              <option>Niitaka Meru Private Limited</option>
              <option>CloudOps Infra</option>
            </select>

            <select id="filterCandidateTestSelect" onchange="filterCandidatesTable()" class="px-3 py-2 text-xs bg-slate-50 rounded-xl border border-slate-200 focus:outline-none text-slate-700">
              <option value="all">All Tests</option>
              <option value="Hardware Support (Tier 1)">Hardware Support (Tier 1)</option>
              <option value="LEAD generation Executive">LEAD generation Executive</option>
              <option value="WEB APPLICATION 1">WEB APPLICATION 1</option>
              <option value="Accountant">Accountant</option>
            </select>

          </div>

          <div class="flex flex-wrap items-center gap-3 pt-1 border-t border-slate-100 text-xs text-slate-500">
            <div class="flex items-center gap-2">
              <span class="font-bold text-slate-700">Timeline:</span>
              <input type="date" value="2026-10-01" class="px-2 py-1 rounded-lg border border-slate-200 text-xs bg-white font-mono" />
              <span class="text-slate-400">TO</span>
              <input type="date" value="2026-10-22" class="px-2 py-1 rounded-lg border border-slate-200 text-xs bg-white font-mono" />
            </div>

            <div class="flex items-center gap-1.5 pl-2 border-l border-slate-200">
              <span class="font-bold text-slate-700">Score:</span>
              <input id="filterCandidateScoreMin" oninput="filterCandidatesTable()" type="number" placeholder="Min %" class="w-16 px-2 py-1 rounded-lg border border-slate-200 text-xs bg-white font-mono" />
              <span>-</span>
              <input id="filterCandidateScoreMax" oninput="filterCandidatesTable()" type="number" placeholder="Max %" class="w-16 px-2 py-1 rounded-lg border border-slate-200 text-xs bg-white font-mono" />
            </div>

            <select class="px-2.5 py-1 text-xs bg-white rounded-lg border border-slate-200 text-slate-700">
              <option>All Recruiters</option>
              <option>gadigitalsmartbot@gmail.com</option>
            </select>
          </div>
        </div>

        <!-- 3 Top Metric Cards (Modern 2026 Pastel Squircles) -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
          
          <div class="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(16,122,204,0.05)] hover:shadow-md transition-all duration-200 flex items-center justify-between group">
            <div class="flex items-center gap-4">
              <div class="w-13 h-13 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-2xs">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
              </div>
              <div>
                <span class="text-2xl font-bold text-slate-900 tracking-tight block">285</span>
                <span class="text-xs text-slate-400 font-medium block">Total Candidates</span>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">All Drives</span>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(16,122,204,0.05)] hover:shadow-md transition-all duration-200 flex items-center justify-between group">
            <div class="flex items-center gap-4">
              <div class="w-13 h-13 rounded-2xl bg-sky-50 text-[#107acc] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-2xs">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
              </div>
              <div>
                <span class="text-2xl font-bold text-slate-900 tracking-tight block">179</span>
                <span class="text-xs text-slate-400 font-medium block">Evaluated Dossiers</span>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-sky-50 text-[#107acc] border border-sky-100">Ready to Hire</span>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(16,122,204,0.05)] hover:shadow-md transition-all duration-200 flex items-center justify-between group">
            <div class="flex items-center gap-4">
              <div class="w-13 h-13 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-2xs">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              </div>
              <div>
                <span class="text-2xl font-bold text-emerald-600 tracking-tight block">77%</span>
                <span class="text-xs text-slate-400 font-medium block">Avg. Pass Rate</span>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">60% Threshold</span>
          </div>

        </div>

        <!-- Candidates Table (from Candidate list - Recruiter Panel.png) -->
        <div class="premium-card p-6 space-y-4">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50/80 text-slate-500 uppercase font-semibold border-b border-slate-100 text-[10px] tracking-wider">
                <tr>
                  <th class="p-3.5">CANDIDATE NAME</th>
                  <th class="p-3.5">TEST NAME</th>
                  <th class="p-3.5">STATUS</th>
                  <th class="p-3.5">EMAIL ID</th>
                  <th class="p-3.5">ATTEMPT</th>
                  <th class="p-3.5">SCORE</th>
                  <th class="p-3.5 text-right">ACTIONS</th>
                </tr>
              </thead>
              <tbody id="candidatesTableBody" class="divide-y divide-slate-100">
                
                <!-- Candidate 1: Kalyani Sundaram (Top Star Candidate with portrait) -->
                <tr data-name="Kalyani Sundaram" data-email="kalyani@gaconsulting.in" data-test="Hardware Support (Tier 1)" data-score="74" class="hover:bg-slate-50/70 transition bg-blue-50/10">
                  <td class="p-3.5">
                    <div class="flex items-center gap-3">
                      <img src="assets/candidate/kalyani-sundaram.jpg" class="w-8 h-8 rounded-full object-cover border border-white shadow-xs" alt="Kalyani" />
                      <div>
                        <span class="font-bold text-slate-900 hover:text-[#107acc] cursor-pointer block" onclick="switchScreen('candidate-eval')">Kalyani Sundaram</span>
                        <span class="text-[10px] text-slate-400 font-mono">CAND-8842</span>
                      </div>
                    </div>
                  </td>
                  <td class="p-3.5 font-semibold text-slate-700">Hardware Support (Tier 1)</td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">COMPLETED</span>
                  </td>
                  <td class="p-3.5 font-mono text-slate-600">kalyani@gaconsulting.in</td>
                  <td class="p-3.5 font-mono font-bold text-slate-700">#1</td>
                  <td class="p-3.5">
                    <span class="font-bold text-emerald-600 font-mono text-sm block">74/100</span>
                    <span class="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">PASSED (SLA 60%)</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <button onclick="switchScreen('candidate-eval')" class="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#107acc] font-bold text-xs transition flex items-center gap-1.5 ml-auto shadow-2xs">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                      <span>Evaluation Dossier</span>
                    </button>
                  </td>
                </tr>

                <!-- Candidate 2: Nazeer Ahmed -->
                <tr data-name="Nazeer Ahmed" data-email="nazeer@gadigitalsolutions.com" data-test="WEB APPLICATION 1" data-score="1" class="hover:bg-slate-50/70 transition">
                  <td class="p-3.5">
                    <div class="flex items-center gap-3">
                      <img src="assets/candidate/nazeer-ahmed.jpg" class="w-8 h-8 rounded-full object-cover border border-white shadow-xs" alt="Nazeer" />
                      <div>
                        <span class="font-bold text-slate-900 hover:text-[#107acc] cursor-pointer block" onclick="switchScreen('candidate-eval')">Nazeer Ahmed</span>
                        <span class="text-[10px] text-slate-400 font-mono">CAND-8843</span>
                      </div>
                    </div>
                  </td>
                  <td class="p-3.5 font-semibold text-slate-700">WEB APPLICATION 1</td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">COMPLETED</span>
                  </td>
                  <td class="p-3.5 font-mono text-slate-600">nazeer@gadigitalsolutions.com</td>
                  <td class="p-3.5 font-mono font-bold text-slate-700">#1</td>
                  <td class="p-3.5 font-bold text-rose-600 font-mono">1.25/100</td>
                  <td class="p-3.5 text-right">
                    <button onclick="switchScreen('candidate-eval')" class="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-[#107acc] cursor-pointer">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </button>
                  </td>
                </tr>

                <!-- Candidate 3: Testing Demo User -->
                <tr data-name="Testing" data-email="testing123@gmail.com" data-test="LEAD generation Executive" data-score="0" class="hover:bg-slate-50/70 transition">
                  <td class="p-3.5">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">T</div>
                      <div>
                        <span class="font-bold text-slate-900 block">Testing</span>
                        <span class="text-[10px] text-slate-400 font-mono">CAND-9102</span>
                      </div>
                    </div>
                  </td>
                  <td class="p-3.5 font-semibold text-slate-700">LEAD generation Executive</td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">PENDING</span>
                  </td>
                  <td class="p-3.5 font-mono text-slate-600">testing123@gmail.com</td>
                  <td class="p-3.5 font-mono font-bold text-slate-700">#1</td>
                  <td class="p-3.5 font-mono text-slate-400 font-bold">N/A</td>
                  <td class="p-3.5 text-right">
                    <button onclick="resendCandidateInvite('Testing', 'testing123@gmail.com')" title="Resend Invite" class="p-2 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-[#107acc] cursor-pointer">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13"></path><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                  </td>
                </tr>

                <!-- Candidate 4: Pramod Motupalli -->
                <tr data-name="Pramod Motupalli" data-email="sunilgaconsulting@gmail.com" data-test="Accountant" data-score="32" class="hover:bg-slate-50/70 transition">
                  <td class="p-3.5">
                    <div class="flex items-center gap-3">
                      <img src="assets/candidate/pramod-motupalli.jpg" class="w-8 h-8 rounded-full object-cover border border-white shadow-xs" alt="Pramod" />
                      <div>
                        <span class="font-bold text-slate-900 hover:text-[#107acc] cursor-pointer block" onclick="switchScreen('candidate-eval')">Pramod Motupalli</span>
                        <span class="text-[10px] text-slate-400 font-mono">CAND-8844</span>
                      </div>
                    </div>
                  </td>
                  <td class="p-3.5 font-semibold text-slate-700">Accountant</td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">COMPLETED</span>
                  </td>
                  <td class="p-3.5 font-mono text-slate-600">sunilgaconsulting@gmail.com</td>
                  <td class="p-3.5 font-mono font-bold text-slate-700">#1</td>
                  <td class="p-3.5 font-bold text-amber-600 font-mono">32.14/100</td>
                  <td class="p-3.5 text-right">
                    <button onclick="switchScreen('candidate-eval')" class="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-[#107acc] cursor-pointer">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </button>
                  </td>
                </tr>

                <!-- Candidate 5: Manikanta Goud -->
                <tr data-name="Manikanta Goud" data-email="manikantagoud8@gmail.com" data-test="Hardware Support (Tier 1)" data-score="0" class="hover:bg-slate-50/70 transition">
                  <td class="p-3.5">
                    <div class="flex items-center gap-3">
                      <img src="assets/candidate/manikanta-goud.jpg" class="w-8 h-8 rounded-full object-cover border border-white shadow-xs" alt="Manikanta" />
                      <div>
                        <span class="font-bold text-slate-900 block">Manikanta Goud</span>
                        <span class="text-[10px] text-slate-400 font-mono">CAND-8845</span>
                      </div>
                    </div>
                  </td>
                  <td class="p-3.5 font-semibold text-slate-700">Hardware Support (Tier 1)</td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#107acc] border border-blue-200">INVITATION SENT</span>
                  </td>
                  <td class="p-3.5 font-mono text-slate-600">manikantagoud8@gmail.com</td>
                  <td class="p-3.5 font-mono font-bold text-slate-700">#1</td>
                  <td class="p-3.5 font-mono text-slate-400 font-bold">N/A</td>
                  <td class="p-3.5 text-right">
                    <button onclick="showToast('Invitation Valid', 'Manikanta Goud\\'s invitation token is active and valid until Oct 26.', 'info')" class="p-2 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-[#107acc] cursor-pointer">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <!-- Pagination Bar (from Candidate list - Recruiter Panel.png) -->
          <div class="flex items-center justify-between pt-3 text-xs text-slate-500 border-t border-slate-100">
            <span>Showing <strong class="text-slate-800">1 to 5</strong> of <strong class="text-slate-800">285 candidates</strong></span>
            <div class="flex items-center gap-1.5">
              <button class="px-2.5 py-1 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50" disabled>‹</button>
              <button class="px-3 py-1 rounded-lg bg-[#107acc] text-white font-bold">1</button>
              <button class="px-3 py-1 rounded-lg hover:bg-slate-100 text-slate-600">2</button>
              <button class="px-3 py-1 rounded-lg hover:bg-slate-100 text-slate-600">3</button>
              <span>...</span>
              <button class="px-3 py-1 rounded-lg hover:bg-slate-100 text-slate-600">57</button>
              <button class="px-2.5 py-1 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">›</button>
            </div>
          </div>

        </div>

      </div>
`;
