module.exports = `
      <!-- ============================================================ -->
      <!-- SCREEN 6: IMPORT & ASSIGN CANDIDATES                         -->
      <!-- ============================================================ -->
      <div id="screen-import-candidates" class="screen-view hidden space-y-6">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-xl font-bold text-slate-900 tracking-tight">Import Candidates</h2>
            <p class="text-xs text-slate-500">Upload candidate rosters, calculate JD-fit scores, or assign talent from previous test drives.</p>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#107acc] border border-blue-200">
            Target Test: Hardware Support (Tier 1)
          </span>
        </div>

        <!-- Action Buttons Bar (Modern 2026 SaaS Controls) -->
        <div class="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(16,122,204,0.05)] space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex flex-wrap items-center gap-3">
              <button onclick="openCsvUploadModal()" class="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#107acc] to-[#1688de] hover:from-[#0c68ab] hover:to-[#107acc] text-white text-xs font-bold transition flex items-center gap-2 shadow-brand-glow cursor-pointer">
                <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                Upload CSV
              </button>

              <button onclick="calculateJdFitScores()" class="px-5 py-2.5 rounded-2xl border border-indigo-200/80 bg-indigo-50/80 hover:bg-indigo-100/90 text-xs font-bold text-indigo-700 transition flex items-center gap-2 shadow-2xs cursor-pointer">
                <svg class="w-4 h-4 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                Calculate JD-Resume Fit Scores
              </button>

              <button onclick="openImportPreviousModal()" class="px-5 py-2.5 rounded-2xl border border-slate-200/90 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 transition flex items-center gap-2 shadow-2xs cursor-pointer">
                <svg class="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>
                Import from Previous Test
              </button>
            </div>

            <div class="relative w-full sm:w-64">
              <input type="text" placeholder="Search candidates by name, email..." class="w-full pl-9 pr-4 py-2.5 text-xs bg-slate-50/70 rounded-2xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:bg-white transition" />
              <svg class="w-4 h-4 text-slate-400 absolute left-3 top-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
          </div>
        </div>

        <!-- Assigned Candidates Table (from Assigning candidate .png) -->
        <div class="premium-card p-6 space-y-4">
          <div class="flex items-center justify-between">
            <h4 class="text-sm font-bold text-slate-900">Candidates Selected for Assignment (3 Candidates)</h4>
            <span class="text-xs text-emerald-600 font-bold flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Candidate created and assigned successfully
            </span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50/80 text-slate-500 uppercase font-semibold border-b border-slate-100 text-[10px] tracking-wider">
                <tr>
                  <th class="p-3 w-8"><input type="checkbox" checked class="rounded text-[#107acc]" /></th>
                  <th class="p-3">NAME</th>
                  <th class="p-3">EMAIL</th>
                  <th class="p-3">PHONE NUMBER</th>
                  <th class="p-3">ATTEMPTS</th>
                  <th class="p-3 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody id="assignedCandidatesTableBody" class="divide-y divide-slate-100">
                
                <tr id="assignedRow-1" class="hover:bg-slate-50/70 transition">
                  <td class="p-3"><input type="checkbox" checked class="rounded text-[#107acc]" /></td>
                  <td class="p-3 font-bold text-slate-900">Testing</td>
                  <td class="p-3 font-mono text-slate-600">testing123@gmail.com</td>
                  <td class="p-3 font-mono text-slate-600">+91 7878789602</td>
                  <td class="p-3">
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#107acc]">Attempt #1</span>
                  </td>
                  <td class="p-3 text-right">
                    <button onclick="openCandidateEditModal('Testing', 'testing123@gmail.com', '+91 7878789602')" class="text-[#107acc] font-bold hover:underline flex items-center gap-1 ml-auto cursor-pointer">
                      <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                      Edit
                    </button>
                  </td>
                </tr>

                <tr id="assignedRow-2" class="hover:bg-slate-50/70 transition">
                  <td class="p-3"><input type="checkbox" checked class="rounded text-[#107acc]" /></td>
                  <td class="p-3 font-bold text-slate-900">Kalyani Sundaram</td>
                  <td class="p-3 font-mono text-slate-600">kalyani@gaconsulting.in</td>
                  <td class="p-3 font-mono text-slate-600">+91 9848022338</td>
                  <td class="p-3">
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#107acc]">Attempt #1</span>
                  </td>
                  <td class="p-3 text-right">
                    <button onclick="openCandidateEditModal('Kalyani Sundaram', 'kalyani@gaconsulting.in', '+91 9848022338')" class="text-[#107acc] font-bold hover:underline flex items-center gap-1 ml-auto cursor-pointer">
                      <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                      Edit
                    </button>
                  </td>
                </tr>

                <tr id="assignedRow-3" class="hover:bg-slate-50/70 transition">
                  <td class="p-3"><input type="checkbox" checked class="rounded text-[#107acc]" /></td>
                  <td class="p-3 font-bold text-slate-900">Manikanta Goud</td>
                  <td class="p-3 font-mono text-slate-600">manikantagoud8@gmail.com</td>
                  <td class="p-3 font-mono text-slate-600">+91 9440112345</td>
                  <td class="p-3">
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#107acc]">Attempt #1</span>
                  </td>
                  <td class="p-3 text-right">
                    <button onclick="openCandidateEditModal('Manikanta Goud', 'manikantagoud8@gmail.com', '+91 9440112345')" class="text-[#107acc] font-bold hover:underline flex items-center gap-1 ml-auto cursor-pointer">
                      <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                      Edit
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <!-- Bottom Actions -->
          <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
            <div class="flex items-center gap-3">
              <button onclick="openAddCandidateModal()" class="px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700 transition flex items-center gap-1.5 shadow-xs cursor-pointer">
                <svg class="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                + Add Candidate Manually
              </button>
              <button onclick="handleUnassignCandidate()" class="px-4 py-2 rounded-xl bg-rose-50 text-rose-700 hover:bg-rose-100 text-xs font-bold transition cursor-pointer">
                Unassign Selected (1)
              </button>
            </div>

            <div class="flex items-center gap-3">
              <button onclick="switchScreen('dashboard')" class="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold transition">
                Back
              </button>
              <button onclick="switchScreen('send-invitations')" class="px-6 py-2.5 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition shadow-xs">
                Next: Configure Invitations ➔
              </button>
            </div>
          </div>

        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 7: SEND INVITATIONS (EMAIL DISPATCH SCHEDULER)        -->
      <!-- ============================================================ -->
      <div id="screen-send-invitations" class="screen-view hidden space-y-6">
        
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold text-slate-900 tracking-tight">Send Invitations</h2>
            <p class="text-xs text-slate-500">Configure delivery schedule, company overview, role details, and dispatch test links to candidates.</p>
          </div>
          <button onclick="switchScreen('import-candidates')" class="text-xs font-bold text-slate-500 hover:text-[#107acc] flex items-center gap-1">
            ← Back to Candidate Assignment
          </button>
        </div>

        <!-- Invitation Configuration Form (from Sending invitation - Recruiter Panel.png) -->
        <div class="premium-card p-8 space-y-6">
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="space-y-1.5">
              <label class="text-xs font-bold text-slate-700">Test Start Date & Time <span class="text-rose-500">*</span></label>
              <input type="datetime-local" value="2026-10-23T09:00" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white font-mono focus:outline-none focus:ring-2 focus:ring-[#107acc]/20" />
            </div>
            <div class="space-y-1.5">
              <label class="text-xs font-bold text-slate-700">Test Expiry Date & Time <span class="text-rose-500">*</span></label>
              <input type="datetime-local" value="2026-10-26T23:59" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white font-mono focus:outline-none focus:ring-2 focus:ring-[#107acc]/20" />
            </div>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs font-bold text-slate-700">About Company (will appear in invitation email)</label>
            <textarea rows="4" class="w-full p-3.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none leading-relaxed font-sans">Brief description of your organization, its domain, and core expertise.
Website: https://www.gadigitalsolutions.com
Partner / Associate Company (if any): WFM Enterprise
Additional Information:
• 24/7 IT Infrastructure and Remote Diagnostics
• Global enterprise client network
• Rapid evaluation and hiring turnaround</textarea>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs font-bold text-slate-700">Job Title (optional)</label>
            <input type="text" value="Hardware Support Specialist (Tier 1)" placeholder="e.g. Software Engineer" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none" />
          </div>

          <div class="space-y-1.5">
            <label class="text-xs font-bold text-slate-700">Roles and Responsibilities (optional)</label>
            <textarea rows="3" placeholder="Briefly describe the roles and responsibilities" class="w-full p-3 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none">Provide technical support for enterprise hardware, resolve desktop connectivity, manage Windows AD user policies, and participate in proctored voice escalation simulations.</textarea>
          </div>

          <div class="space-y-1.5">
            <label class="text-xs font-bold text-slate-700">What's Next On Clearing This Round (optional)</label>
            <input type="text" value="Technical Panel Interview with Senior Operations Manager Rajini K" placeholder="e.g. Technical Interview with the team" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none" />
          </div>

          <!-- Recipient Candidate List -->
          <div class="space-y-3 pt-2">
            <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Candidate Invitation Recipients</h4>
            <div class="overflow-x-auto rounded-xl border border-slate-200">
              <table class="w-full text-left text-xs">
                <thead class="bg-slate-50 text-slate-500 uppercase font-semibold text-[10px]">
                  <tr>
                    <th class="p-3 w-8"><input type="checkbox" checked class="rounded text-[#107acc]" /></th>
                    <th class="p-3">NAME</th>
                    <th class="p-3">EMAIL</th>
                    <th class="p-3">PHONE NUMBER</th>
                    <th class="p-3">STATUS</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr>
                    <td class="p-3"><input type="checkbox" checked class="rounded text-[#107acc]" /></td>
                    <td class="p-3 font-bold text-slate-900">Testing</td>
                    <td class="p-3 font-mono text-slate-600">testing123@gmail.com</td>
                    <td class="p-3 font-mono text-slate-600">+91 7878789602</td>
                    <td class="p-3"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800">READY TO SEND</span></td>
                  </tr>
                  <tr>
                    <td class="p-3"><input type="checkbox" checked class="rounded text-[#107acc]" /></td>
                    <td class="p-3 font-bold text-slate-900">Kalyani Sundaram</td>
                    <td class="p-3 font-mono text-slate-600">kalyani@gaconsulting.in</td>
                    <td class="p-3 font-mono text-slate-600">+91 9848022338</td>
                    <td class="p-3"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800">READY TO SEND</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Bottom Buttons -->
          <div class="flex items-center justify-between pt-4 border-t border-slate-100">
            <button onclick="switchScreen('import-candidates')" class="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold transition">
              Back
            </button>
            <button onclick="handleSendInvitations()" class="px-6 py-2.5 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition shadow-brand-glow flex items-center gap-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13"></path><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              <span>Send Invitations (2)</span>
            </button>
          </div>

        </div>

      </div>
`;
