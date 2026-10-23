module.exports = `
      <!-- ============================================================ -->
      <!-- SCREEN 3: RECRUITER MY TESTS (FULL INVENTORY & EDIT REQUEST) -->
      <!-- ============================================================ -->
      <div id="screen-my-tests" class="screen-view hidden space-y-6">
        
        <!-- Header & Top Create Action -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-xl font-bold text-slate-900 tracking-tight">My Tests</h2>
            <p class="text-xs text-slate-500">Manage and oversee all assessment assets for your organization with localized data.</p>
          </div>
          <button onclick="switchScreen('create-test')" class="px-4 py-2.5 rounded-xl bg-[#107acc] text-white text-xs font-bold hover:bg-[#0c68ab] transition flex items-center gap-2 shadow-xs cursor-pointer">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            + Create New Test
          </button>
        </div>

        <!-- 3 Top Metric Cards (Modern 2026 Pastel Squircles) -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
          
          <div class="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(16,122,204,0.05)] hover:shadow-md transition-all duration-200 flex items-center justify-between group">
            <div class="flex items-center gap-4">
              <div class="w-13 h-13 rounded-2xl bg-sky-50 text-[#107acc] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-2xs">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="14" y2="12"></line><line x1="4" y1="18" x2="18" y2="18"></line></svg>
              </div>
              <div>
                <span class="text-2xl font-bold text-slate-900 tracking-tight block">30</span>
                <span class="text-xs text-slate-400 font-medium block">Active Assessments</span>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-sky-50 text-[#107acc] border border-sky-100">12 Clients</span>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(16,122,204,0.05)] hover:shadow-md transition-all duration-200 flex items-center justify-between group">
            <div class="flex items-center gap-4">
              <div class="w-13 h-13 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-2xs">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
              </div>
              <div>
                <span class="text-2xl font-bold text-slate-900 tracking-tight block">284</span>
                <span class="text-xs text-slate-400 font-medium block">Total Candidates</span>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">Live Pool</span>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(16,122,204,0.05)] hover:shadow-md transition-all duration-200 flex items-center justify-between group">
            <div class="flex items-center gap-4">
              <div class="w-13 h-13 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-2xs">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              </div>
              <div>
                <span class="text-2xl font-bold text-slate-900 tracking-tight block">26.2%</span>
                <span class="text-xs text-slate-400 font-medium block">Avg. Pass Rate</span>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-600 border border-amber-100">Calibrated</span>
          </div>

        </div>

        <!-- Filter Bar (from Test list - Recruiter Panel.png) -->
        <div class="premium-card p-4 space-y-3">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            
            <div class="relative lg:col-span-2">
              <input id="searchMyTestsInput" oninput="filterMyTestsTable()" type="text" placeholder="Search assessment..." class="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:bg-white transition" />
              <svg class="w-4 h-4 text-slate-400 absolute left-3 top-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>

            <select id="filterCreatorSelect" onchange="filterMyTestsTable()" class="px-3 py-2 text-xs bg-slate-50 rounded-xl border border-slate-200 focus:outline-none text-slate-700">
              <option value="all">All Creators</option>
              <option value="Madhuri ReddyShetty">Madhuri ReddyShetty (Manager)</option>
              <option value="P Hemachandra">P Hemachandra (Senior Creator)</option>
              <option value="Sunil Ajay">Sunil Ajay (Creator)</option>
            </select>

            <select id="filterClientSelect" onchange="filterMyTestsTable()" class="px-3 py-2 text-xs bg-slate-50 rounded-xl border border-slate-200 focus:outline-none text-slate-700">
              <option value="all">All Clients</option>
              <option value="Niitaka Meru">Niitaka Meru Private Limited</option>
              <option value="WFM">WFM Enterprise</option>
              <option value="Meha">Meha</option>
              <option value="Testing">Testing</option>
            </select>

            <select id="filterStatusSelect" onchange="filterMyTestsTable()" class="px-3 py-2 text-xs bg-slate-50 rounded-xl border border-slate-200 focus:outline-none text-slate-700">
              <option value="all">All Statuses</option>
              <option value="PUBLISHED">PUBLISHED</option>
              <option value="DRAFT">DRAFT</option>
              <option value="IN REVIEW">IN REVIEW</option>
            </select>

          </div>

          <div class="flex items-center gap-2 pt-1 border-t border-slate-100 text-xs text-slate-500">
            <span class="font-bold text-slate-700">Date Range:</span>
            <input type="date" value="2026-09-01" class="px-2.5 py-1 rounded-lg border border-slate-200 text-xs bg-white font-mono" />
            <span class="font-bold text-slate-400">TO</span>
            <input type="date" value="2026-10-22" class="px-2.5 py-1 rounded-lg border border-slate-200 text-xs bg-white font-mono" />
          </div>
        </div>

        <!-- Tests List Table with Req Edit & Actions -->
        <div class="premium-card p-6 space-y-4">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50/80 text-slate-500 uppercase font-semibold border-b border-slate-100 text-[10px] tracking-wider">
                <tr>
                  <th class="p-3 w-8"><input type="checkbox" class="rounded text-[#107acc]" /></th>
                  <th class="p-3">TEST NAME</th>
                  <th class="p-3">CLIENT NAME</th>
                  <th class="p-3">CREATED BY</th>
                  <th class="p-3">TIMELINE</th>
                  <th class="p-3">STATS</th>
                  <th class="p-3">STATUS</th>
                  <th class="p-3 text-right">ACTIONS</th>
                </tr>
              </thead>
              <tbody id="myTestsTableBody" class="divide-y divide-slate-100">
                
                <!-- Row 1: LEAD generation Executive -->
                <tr data-title="LEAD generation Executive" data-creator="Madhuri ReddyShetty" data-client="Niitaka Meru" data-status="PUBLISHED" class="hover:bg-slate-50/70 transition">
                  <td class="p-3"><input type="checkbox" class="rounded text-[#107acc]" /></td>
                  <td class="p-3 font-bold text-slate-900 hover:text-[#107acc] cursor-pointer" onclick="switchScreen('candidates')">
                    LEAD generation Executive
                  </td>
                  <td class="p-3 text-slate-600">Niitaka Meru Private Limited</td>
                  <td class="p-3">
                    <span class="font-bold text-slate-800 block">Madhuri ReddyShetty</span>
                    <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-100 text-slate-600">MANAGER</span>
                  </td>
                  <td class="p-3">
                    <span class="text-[10px] text-slate-400 block font-semibold">LAST MODIFIED</span>
                    <span class="font-bold text-slate-700 font-mono">Oct 12, 2026 • 06:11 PM</span>
                  </td>
                  <td class="p-3">
                    <span class="font-bold font-mono text-slate-900 block">0 CANDIDATES</span>
                    <span class="text-[10px] font-bold text-slate-400">0% Pass</span>
                  </td>
                  <td class="p-3">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">PUBLISHED</span>
                  </td>
                  <td class="p-3 text-right">
                    <div class="flex items-center justify-end gap-1.5">
                      <button onclick="copyTestLink('LEAD generation Executive')" title="Copy Link" class="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      </button>
                      
                      <!-- Req Edit Button (triggers Request Edit Modal) -->
                      <button onclick="openReqEditModal('LEAD generation Executive', 'GA-TEST-2024-002')" class="px-2 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-[10px] transition border border-amber-200 flex items-center gap-1 cursor-pointer">
                        <svg class="w-3 h-3 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        <span>Req Edit</span>
                      </button>

                      <button onclick="switchScreen('candidates')" title="View Candidates" class="p-1 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-[#107acc] cursor-pointer">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
                      </button>

                      <button onclick="switchScreen('import-candidates')" title="Add Candidates" class="p-1 rounded-lg hover:bg-blue-50 text-[#107acc] cursor-pointer">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="22" y1="11" x2="16" y2="11"></line></svg>
                      </button>

                      <button onclick="requestDeleteTest('LEAD generation Executive')" title="Request Delete" class="p-1 rounded-lg hover:bg-rose-50 text-slate-300 hover:text-rose-600 cursor-pointer">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                      </button>
                    </div>
                  </td>
                </tr>

                <!-- Row 2: Hardware Support (Tier 1) -->
                <tr data-title="Hardware Support (Tier 1)" data-creator="P Hemachandra" data-client="WFM" data-status="PUBLISHED" class="hover:bg-slate-50/70 transition">
                  <td class="p-3"><input type="checkbox" class="rounded text-[#107acc]" /></td>
                  <td class="p-3 font-bold text-slate-900 hover:text-[#107acc] cursor-pointer" onclick="switchScreen('candidates')">
                    Hardware Support (Tier 1)
                  </td>
                  <td class="p-3 text-slate-600">WFM Enterprise</td>
                  <td class="p-3">
                    <span class="font-bold text-slate-800 block">P Hemachandra</span>
                    <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-50 text-[#107acc]">TEST_CREATOR</span>
                  </td>
                  <td class="p-3">
                    <span class="text-[10px] text-slate-400 block font-semibold">LAST MODIFIED</span>
                    <span class="font-bold text-slate-700 font-mono">Oct 7, 2026 • 03:53 PM</span>
                  </td>
                  <td class="p-3">
                    <span class="font-bold font-mono text-slate-900 block">1 CANDIDATES</span>
                    <span class="text-[10px] font-bold text-emerald-600">74% Pass</span>
                  </td>
                  <td class="p-3">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">PUBLISHED</span>
                  </td>
                  <td class="p-3 text-right">
                    <div class="flex items-center justify-end gap-1.5">
                      <button onclick="copyTestLink('Hardware Support (Tier 1)')" title="Copy Link" class="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      </button>

                      <button onclick="openReqEditModal('Hardware Support (Tier 1)', 'GA-TEST-2024-001')" class="px-2 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-[10px] transition border border-amber-200 flex items-center gap-1 cursor-pointer">
                        <svg class="w-3 h-3 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        <span>Req Edit</span>
                      </button>

                      <button onclick="switchScreen('candidates')" title="View Candidates" class="p-1 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-[#107acc] cursor-pointer">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
                      </button>

                      <button onclick="switchScreen('import-candidates')" title="Add Candidates" class="p-1 rounded-lg hover:bg-blue-50 text-[#107acc] cursor-pointer">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="22" y1="11" x2="16" y2="11"></line></svg>
                      </button>

                      <button onclick="requestDeleteTest('Hardware Support (Tier 1)')" title="Request Delete" class="p-1 rounded-lg hover:bg-rose-50 text-slate-300 hover:text-rose-600 cursor-pointer">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                      </button>
                    </div>
                  </td>
                </tr>

                <!-- Row 3: Accountant -->
                <tr data-title="Accountant" data-creator="Sunil Ajay" data-client="Meha" data-status="PUBLISHED" class="hover:bg-slate-50/70 transition">
                  <td class="p-3"><input type="checkbox" class="rounded text-[#107acc]" /></td>
                  <td class="p-3 font-bold text-slate-900 hover:text-[#107acc] cursor-pointer" onclick="switchScreen('candidates')">
                    Accountant
                  </td>
                  <td class="p-3 text-slate-600">Meha</td>
                  <td class="p-3">
                    <span class="font-bold text-slate-800 block">Sunil Ajay</span>
                    <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-50 text-[#107acc]">TEST_CREATOR</span>
                  </td>
                  <td class="p-3">
                    <span class="text-[10px] text-slate-400 block font-semibold">LAST MODIFIED</span>
                    <span class="font-bold text-slate-700 font-mono">Sep 30, 2026 • 04:55 PM</span>
                  </td>
                  <td class="p-3">
                    <span class="font-bold font-mono text-slate-900 block">2 CANDIDATES</span>
                    <span class="text-[10px] font-bold text-amber-600">32% Pass</span>
                  </td>
                  <td class="p-3">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">PUBLISHED</span>
                  </td>
                  <td class="p-3 text-right">
                    <div class="flex items-center justify-end gap-1.5">
                      <button onclick="copyTestLink('Accountant')" title="Copy Link" class="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      </button>

                      <button onclick="openReqEditModal('Accountant', 'GA-TEST-2024-003')" class="px-2 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-[10px] transition border border-amber-200 flex items-center gap-1 cursor-pointer">
                        <svg class="w-3 h-3 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        <span>Req Edit</span>
                      </button>

                      <button onclick="switchScreen('candidates')" title="View Candidates" class="p-1 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-[#107acc] cursor-pointer">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
                      </button>

                      <button onclick="switchScreen('import-candidates')" title="Add Candidates" class="p-1 rounded-lg hover:bg-blue-50 text-[#107acc] cursor-pointer">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="22" y1="11" x2="16" y2="11"></line></svg>
                      </button>

                      <button onclick="requestDeleteTest('Accountant')" title="Request Delete" class="p-1 rounded-lg hover:bg-rose-50 text-slate-300 hover:text-rose-600 cursor-pointer">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                      </button>
                    </div>
                  </td>
                </tr>

                <!-- Row 4: Manual Tester (Draft) -->
                <tr data-title="Manual Tester" data-creator="Madhuri ReddyShetty" data-client="Testing" data-status="DRAFT" class="hover:bg-slate-50/70 transition">
                  <td class="p-3"><input type="checkbox" class="rounded text-[#107acc]" /></td>
                  <td class="p-3 font-bold text-slate-900 hover:text-[#107acc] cursor-pointer" onclick="switchScreen('create-test')">
                    Manual Tester
                  </td>
                  <td class="p-3 text-slate-600">Testing</td>
                  <td class="p-3">
                    <span class="font-bold text-slate-800 block">Madhuri ReddyShetty</span>
                    <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-100 text-slate-600">MANAGER</span>
                  </td>
                  <td class="p-3">
                    <span class="text-[10px] text-slate-400 block font-semibold">LAST MODIFIED</span>
                    <span class="font-bold text-slate-700 font-mono">Sep 30, 2026 • 04:36 PM</span>
                  </td>
                  <td class="p-3">
                    <span class="font-bold font-mono text-slate-400 block">0 CANDIDATES</span>
                    <span class="text-[10px] text-slate-400">0% Pass</span>
                  </td>
                  <td class="p-3">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">DRAFT</span>
                  </td>
                  <td class="p-3 text-right">
                    <div class="flex items-center justify-end gap-1.5">
                      <button onclick="switchScreen('create-test')" title="Edit Draft" class="p-1 rounded-lg hover:bg-slate-100 text-[#107acc]">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                      </button>
                      <button onclick="switchScreen('import-candidates')" title="Add Candidates" class="p-1 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-[#107acc]">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="22" y1="11" x2="16" y2="11"></line></svg>
                      </button>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <!-- Pagination Bar (from Test list - Recruiter Panel.png) -->
          <div class="flex items-center justify-between pt-3 text-xs text-slate-500 border-t border-slate-100">
            <span>Showing <strong class="text-slate-800">1 to 4</strong> of <strong class="text-slate-800">32 tests</strong></span>
            <div class="flex items-center gap-1.5">
              <button class="px-2.5 py-1 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50" disabled>‹</button>
              <button class="px-3 py-1 rounded-lg bg-[#107acc] text-white font-bold">1</button>
              <button class="px-3 py-1 rounded-lg hover:bg-slate-100 text-slate-600">2</button>
              <button class="px-3 py-1 rounded-lg hover:bg-slate-100 text-slate-600">3</button>
              <button class="px-3 py-1 rounded-lg hover:bg-slate-100 text-slate-600">4</button>
              <span>...</span>
              <button class="px-3 py-1 rounded-lg hover:bg-slate-100 text-slate-600">8</button>
              <button class="px-2.5 py-1 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">›</button>
            </div>
          </div>

        </div>

      </div>
`;
