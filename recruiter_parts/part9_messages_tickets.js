module.exports = `
      <!-- ============================================================ -->
      <!-- SCREEN 9: RECRUITER MESSAGES & TEAM CHAT                     -->
      <!-- ============================================================ -->
      <div id="screen-message" class="screen-view hidden space-y-6">
        
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold text-slate-900 tracking-tight">Team & Candidate Messages</h2>
            <p class="text-xs text-slate-500">Collaborate with Operations Manager Rajini K, test creators, and candidate inquiries in real-time.</p>
          </div>
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Online (gadigitalsmartbot@gmail.com)
          </span>
        </div>

        <div class="bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(16,122,204,0.06)] grid grid-cols-1 md:grid-cols-3 h-[620px] overflow-hidden">
          
          <!-- Conversations List -->
          <div class="border-r border-slate-100 flex flex-col h-full bg-slate-50/40">
            <div class="p-4 border-b border-slate-100">
              <div class="relative">
                <input type="text" placeholder="Search conversations..." class="w-full pl-9 pr-4 py-2 text-xs bg-white rounded-2xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-[#107acc]/20" />
                <svg class="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
            </div>
            
            <div class="flex-1 overflow-y-auto divide-y divide-slate-100 custom-scrollbar">
              
              <!-- Contact 1: Rajini K -->
              <div class="p-4 bg-white border-l-4 border-[#107acc] cursor-pointer space-y-1.5 transition-all">
                <div class="flex items-center gap-3">
                  <div class="relative shrink-0">
                    <img src="assets/creators/creator-madhuri.jpg" class="w-10 h-10 rounded-2xl object-cover border border-slate-200 shadow-2xs" alt="Rajini K" />
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white absolute -bottom-0.5 -right-0.5"></span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold text-slate-900 truncate">Rajini K (Operations)</span>
                      <span class="text-[10px] font-mono text-slate-400">11:15 AM</span>
                    </div>
                    <p class="text-[11px] text-slate-600 truncate font-semibold">"I saw your modification request for WFM Tier 1. Approving now."</p>
                  </div>
                </div>
              </div>

              <!-- Contact 2: P Hemachandra -->
              <div class="p-4 hover:bg-white/80 cursor-pointer space-y-1.5 transition-all">
                <div class="flex items-center gap-3">
                  <div class="relative shrink-0">
                    <img src="assets/creators/creator-hemachandra.jpg" class="w-10 h-10 rounded-2xl object-cover border border-slate-200" alt="P Hemachandra" />
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white absolute -bottom-0.5 -right-0.5"></span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold text-slate-900 truncate">P Hemachandra</span>
                      <span class="text-[10px] font-mono text-slate-400">Yesterday</span>
                    </div>
                    <p class="text-[11px] text-slate-500 truncate">"All 10 questions for Section 1 are verified with answer keys."</p>
                  </div>
                </div>
              </div>

              <!-- Contact 3: Candidate Kalyani Sundaram -->
              <div class="p-4 hover:bg-white/80 cursor-pointer space-y-1.5 transition-all">
                <div class="flex items-center gap-3">
                  <div class="relative shrink-0">
                    <img src="assets/candidate/kalyani-sundaram.jpg" class="w-10 h-10 rounded-2xl object-cover border border-slate-200" alt="Kalyani Sundaram" />
                    <span class="w-2.5 h-2.5 rounded-full bg-slate-400 border-2 border-white absolute -bottom-0.5 -right-0.5"></span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold text-slate-900 truncate">Kalyani Sundaram</span>
                      <span class="text-[10px] font-mono text-slate-400">Oct 07</span>
                    </div>
                    <p class="text-[11px] text-slate-500 truncate">"Thank you! Assessment submission was confirmed."</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- Active Chat Window -->
          <div class="md:col-span-2 flex flex-col h-full bg-white">
            
            <!-- Chat Header -->
            <div class="p-4.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/40">
              <div class="flex items-center gap-3">
                <div class="relative">
                  <img src="assets/creators/creator-madhuri.jpg" class="w-10 h-10 rounded-2xl object-cover border border-slate-200 shadow-2xs" alt="Rajini K" />
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white absolute -bottom-0.5 -right-0.5"></span>
                </div>
                <div>
                  <h4 class="text-xs font-bold text-slate-900">Rajini K</h4>
                  <span class="text-[10px] text-emerald-600 font-semibold">● Operations Manager • Active Now</span>
                </div>
              </div>
              <a href="http://localhost:3000" target="_blank" class="text-xs font-bold text-[#107acc] hover:underline bg-blue-50/80 px-3 py-1.5 rounded-xl border border-blue-100 transition flex items-center gap-1.5">
                <span>View Manager Portal</span>
                <span class="text-xs">➔</span>
              </a>
            </div>

            <!-- Messages Thread -->
            <div id="recruiterChatMessages" class="flex-1 p-6 overflow-y-auto space-y-4 custom-scrollbar text-xs">
              
              <div class="flex gap-3 max-w-lg">
                <img src="assets/creators/creator-madhuri.jpg" class="w-8 h-8 rounded-xl object-cover shrink-0 mt-0.5 border border-slate-200" alt="Rajini" />
                <div>
                  <div class="p-3.5 rounded-2xl rounded-tl-sm bg-slate-100/90 text-slate-800 leading-relaxed shadow-2xs">
                    Hi Team! How are the candidate completions looking for the WFM Enterprise hardware drive?
                  </div>
                  <span class="text-[10px] text-slate-400 mt-1 block">11:10 AM</span>
                </div>
              </div>

              <div class="flex gap-3 flex-row-reverse max-w-lg ml-auto">
                <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#107acc] to-[#2590e8] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-2xs">G</div>
                <div class="text-right">
                  <div class="p-3.5 rounded-2xl rounded-tr-sm bg-gradient-to-r from-[#107acc] to-[#1688de] text-white leading-relaxed text-left shadow-brand-glow">
                    Hey Rajini! Kalyani Sundaram completed Attempt #1 with a 74% score. Proctoring analysis shows zero infractions. I submitted a modification request to bump the passing percentage to 65%.
                  </div>
                  <span class="text-[10px] text-slate-400 mt-1 block">11:14 AM • Delivered</span>
                </div>
              </div>

              <div class="flex gap-3 max-w-lg">
                <img src="assets/creators/creator-madhuri.jpg" class="w-8 h-8 rounded-xl object-cover shrink-0 mt-0.5 border border-slate-200" alt="Rajini" />
                <div>
                  <div class="p-3.5 rounded-2xl rounded-tl-sm bg-slate-100/90 text-slate-800 leading-relaxed shadow-2xs">
                    I saw your modification request for WFM Tier 1. Approving now so you can dispatch the updated invitations to the remaining candidates.
                  </div>
                  <span class="text-[10px] text-slate-400 mt-1 block">11:15 AM</span>
                </div>
              </div>

            </div>

            <!-- Message Input Bar -->
            <div class="p-4 border-t border-slate-100 flex items-center gap-2 bg-slate-50/30">
              <button title="Attach file" onclick="showToast('Attach Asset', 'Attach assessment schema, PDF score report, or candidate CSV.', 'info')" class="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
              </button>
              <input id="recruiterChatInput" type="text" placeholder="Type a message to Rajini K..." onkeypress="if(event.key==='Enter') handleRecruiterSendMessage()" class="flex-1 px-4 py-2.5 text-xs bg-white rounded-2xl border border-slate-200/90 focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc] transition" />
              <button onclick="handleRecruiterSendMessage()" class="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#107acc] to-[#1688de] hover:from-[#0c68ab] hover:to-[#107acc] text-white text-xs font-bold transition shadow-brand-glow flex items-center gap-1.5 cursor-pointer">
                <span>Send</span>
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>

          </div>

        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 10: RECRUITER SUPPORT TICKETS                         -->
      <!-- ============================================================ -->
      <div id="screen-tickets" class="screen-view hidden space-y-6">
        
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-xl font-bold text-slate-900 tracking-tight">Support & Assessment Appeals</h2>
            <p class="text-xs text-slate-500">Manage candidate queries, proctoring appeals, invitation renewals, and platform support.</p>
          </div>
          <button onclick="openNewTicketModal()" class="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#107acc] to-[#1688de] hover:from-[#0c68ab] hover:to-[#107acc] text-white text-xs font-bold transition shadow-brand-glow flex items-center gap-2 cursor-pointer">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            <span>New Ticket</span>
          </button>
        </div>

        <!-- 3 KPI Cards (Modern Pastel Squircles) -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div class="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(16,122,204,0.05)] hover:shadow-md transition-all duration-200 flex items-center justify-between group">
            <div class="flex items-center gap-4">
              <div class="w-13 h-13 rounded-2xl bg-blue-50 text-[#107acc] flex items-center justify-center shrink-0 group-hover:scale-105 transition shadow-2xs">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
              </div>
              <div>
                <span class="text-2xl font-bold text-slate-900 tracking-tight block">14</span>
                <span class="text-xs text-slate-400 font-medium block">Total Tickets Logged</span>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-sky-50 text-[#107acc] border border-sky-100">2 Active</span>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(16,122,204,0.05)] hover:shadow-md transition-all duration-200 flex items-center justify-between group">
            <div class="flex items-center gap-4">
              <div class="w-13 h-13 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition shadow-2xs">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
              </div>
              <div>
                <span class="text-2xl font-bold text-emerald-600 tracking-tight block">2h 15m</span>
                <span class="text-xs text-slate-400 font-medium block">Avg Resolution Time</span>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">98.4% SLA</span>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(16,122,204,0.05)] hover:shadow-md transition-all duration-200 flex items-center justify-between group">
            <div class="flex items-center gap-4">
              <div class="w-13 h-13 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition shadow-2xs">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
              </div>
              <div>
                <span class="text-2xl font-bold text-purple-600 tracking-tight block">5</span>
                <span class="text-xs text-slate-400 font-medium block">Proctoring Appeals</span>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-purple-50 text-purple-600 border border-purple-100">4 Approved</span>
          </div>
        </div>

        <!-- Filter Bar -->
        <div class="bg-white rounded-3xl p-5 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(16,122,204,0.05)] flex flex-wrap items-center justify-between gap-3">
          <div class="relative flex-1 min-w-[240px]">
            <input type="text" placeholder="Search tickets by ID, candidate, topic..." class="w-full pl-9 pr-4 py-2.5 text-xs bg-slate-50/70 rounded-2xl border border-slate-200/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 transition" />
            <svg class="w-4 h-4 text-slate-400 absolute left-3 top-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
          <div class="flex items-center gap-2.5">
            <select class="px-3.5 py-2 text-xs bg-slate-50/70 rounded-2xl border border-slate-200/80 focus:outline-none text-slate-700">
              <option>All Statuses</option>
              <option>Open</option>
              <option>In Progress</option>
              <option>Resolved</option>
            </select>
            <select class="px-3.5 py-2 text-xs bg-slate-50/70 rounded-2xl border border-slate-200/80 focus:outline-none text-slate-700">
              <option>All Priorities</option>
              <option>High</option>
              <option>Normal</option>
              <option>Low</option>
            </select>
          </div>
        </div>

        <!-- Tickets Table Container -->
        <div class="bg-white rounded-3xl p-7 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(16,122,204,0.05)] space-y-4">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50/80 text-slate-400 uppercase font-bold text-[11px] tracking-wider border-b border-slate-100">
                <tr>
                  <th class="p-3.5">TICKET ID</th>
                  <th class="p-3.5">SUBJECT</th>
                  <th class="p-3.5">CANDIDATE / USER</th>
                  <th class="p-3.5">STATUS</th>
                  <th class="p-3.5">PRIORITY</th>
                  <th class="p-3.5 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50/70 transition">
                  <td class="p-3.5 font-mono font-bold text-slate-900">TICK-1092</td>
                  <td class="p-3.5 font-semibold text-slate-800">Candidate appeal for webcam disconnect during Section 1</td>
                  <td class="p-3.5 text-slate-600">kalyani@gaconsulting.in</td>
                  <td class="p-3.5">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> RESOLVED
                    </span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-rose-50 text-rose-700 border border-rose-200/80">HIGH</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <button onclick="openTicketDetailModal('TICK-1092')" class="px-3 py-1 rounded-xl bg-blue-50 text-[#107acc] font-bold text-xs hover:bg-[#107acc] hover:text-white transition cursor-pointer">View ➔</button>
                  </td>
                </tr>

                <tr class="hover:bg-slate-50/70 transition">
                  <td class="p-3.5 font-mono font-bold text-slate-900">TICK-1094</td>
                  <td class="p-3.5 font-semibold text-slate-800">Expired invitation link request for Cloud Solutions Architect</td>
                  <td class="p-3.5 text-slate-600">testing123@gmail.com</td>
                  <td class="p-3.5">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-[#107acc] border border-sky-200/80">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#107acc] animate-pulse"></span> IN PROGRESS
                    </span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200/80">NORMAL</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <button onclick="openTicketDetailModal('TICK-1094')" class="px-3 py-1 rounded-xl bg-blue-50 text-[#107acc] font-bold text-xs hover:bg-[#107acc] hover:text-white transition cursor-pointer">View ➔</button>
                  </td>
                </tr>

                <tr class="hover:bg-slate-50/70 transition">
                  <td class="p-3.5 font-mono font-bold text-slate-900">TICK-1095</td>
                  <td class="p-3.5 font-semibold text-slate-800">Microphone permission blocked on macOS Safari during Voice AI section</td>
                  <td class="p-3.5 text-slate-600">nazeer@gadigitalsolutions.com</td>
                  <td class="p-3.5">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200/80">
                      <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> OPEN
                    </span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-rose-50 text-rose-700 border border-rose-200/80">HIGH</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <button onclick="openTicketDetailModal('TICK-1095')" class="px-3 py-1 rounded-xl bg-blue-50 text-[#107acc] font-bold text-xs hover:bg-[#107acc] hover:text-white transition cursor-pointer">View ➔</button>
                  </td>
                </tr>

                <tr class="hover:bg-slate-50/70 transition">
                  <td class="p-3.5 font-mono font-bold text-slate-900">TICK-1091</td>
                  <td class="p-3.5 font-semibold text-slate-800">Request 48h extension for medical leave on Lead Generation Exam</td>
                  <td class="p-3.5 text-slate-600">manikantagoud8@gmail.com</td>
                  <td class="p-3.5">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> RESOLVED
                    </span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200/80">NORMAL</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <button onclick="openTicketDetailModal('TICK-1091')" class="px-3 py-1 rounded-xl bg-blue-50 text-[#107acc] font-bold text-xs hover:bg-[#107acc] hover:text-white transition cursor-pointer">View ➔</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
`;
