const fs = require('fs');

let code = fs.readFileSync('build_human_gradarena.js', 'utf8');

// 1. Update Candidate Header in Candidate Detail
const oldCandidateBanner = `        <!-- Candidate Banner (Matches Kalyani screenshot) -->
        <div class="card-human p-6 relative overflow-hidden">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-full bg-slate-200 text-slate-600 font-bold text-lg flex items-center justify-center">
                K
              </div>
              <div>
                <h3 class="text-xl font-bold text-slate-900">Kalyani</h3>
                <div class="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                  <span class="font-bold text-[#107acc]">Overall Score: 5%</span>
                  <span>•</span>
                  <span class="font-semibold text-emerald-600">ATTEMPT #1</span>
                  <span>•</span>
                  <span>Started: Oct 7, 2026, 4:03 PM</span>
                </div>
                <div class="text-[11px] text-slate-400 mt-1">
                  Completed: Oct 7, 2026, 4:23 PM • Time: 20m 23s
                </div>
              </div>
            </div>
            
            <!-- Red FAILED Stamp from screenshot -->
            <div class="border-2 border-red-500 text-red-500 font-extrabold text-sm tracking-widest px-3 py-1 rounded rotate-[-12deg] self-start sm:self-center">
              FAILED
            </div>
          </div>
        </div>`;

const newCandidateBanner = `        <!-- Candidate Banner (Matches Kalyani screenshot with authentic photo) -->
        <div class="card-human p-6 relative overflow-hidden">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-center gap-4">
              <img src="assets/candidate/avatar-kalyani.jpg" alt="Kalyani" class="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md ring-2 ring-slate-100 shrink-0" />
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="text-xl font-bold text-slate-900">Kalyani</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600">ID: CAND-8842</span>
                </div>
                <div class="text-xs text-slate-500 flex items-center gap-2 mt-1">
                  <span class="font-bold text-[#107acc]">Overall Score: 5%</span>
                  <span>•</span>
                  <span class="font-semibold text-emerald-600">ATTEMPT #1</span>
                  <span>•</span>
                  <span>Started: Oct 7, 2026, 4:03 PM</span>
                </div>
                <div class="text-[11px] text-slate-400 mt-0.5">
                  Completed: Oct 7, 2026, 4:23 PM • Time: 20m 23s • Hardware Support (Tier 1)
                </div>
              </div>
            </div>
            
            <!-- Red FAILED Stamp from screenshot -->
            <div class="border-2 border-red-500 text-red-500 font-extrabold text-sm tracking-widest px-3 py-1 rounded rotate-[-12deg] self-start sm:self-center bg-red-50/50 shadow-xs">
              FAILED
            </div>
          </div>
        </div>`;

code = code.replace(oldCandidateBanner, newCandidateBanner);

// 2. Update Proctoring Timeline with 8 Real Photos
const oldProctoringTimeline = `        <!-- Proctoring Timeline -->
        <div class="card-human p-6 space-y-4">
          <div class="flex items-center justify-between text-xs">
            <h4 class="font-bold text-slate-900">Proctoring Timeline (Webcam Snapshots)</h4>
            <div class="flex items-center gap-3 text-[11px]">
              <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> NORMAL</span>
              <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-amber-500"></span> CAUTION</span>
              <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-red-500"></span> FLAGGED</span>
            </div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            <div class="rounded-lg border border-slate-200 bg-slate-900/90 text-white p-2 text-center text-[10px]">
              <div class="w-full h-12 bg-slate-800 rounded flex items-center justify-center text-slate-500 mb-1">📷</div>
              <span>4:03:00 PM</span>
            </div>
            <div class="rounded-lg border border-slate-200 bg-slate-900/90 text-white p-2 text-center text-[10px]">
              <div class="w-full h-12 bg-slate-800 rounded flex items-center justify-center text-slate-500 mb-1">📷</div>
              <span>4:05:08 PM</span>
            </div>
            <div class="rounded-lg border border-slate-200 bg-slate-900/90 text-white p-2 text-center text-[10px]">
              <div class="w-full h-12 bg-slate-800 rounded flex items-center justify-center text-slate-500 mb-1">📷</div>
              <span>4:09:16 PM</span>
            </div>
            <div class="rounded-lg border border-slate-200 bg-slate-900/90 text-white p-2 text-center text-[10px]">
              <div class="w-full h-12 bg-slate-800 rounded flex items-center justify-center text-slate-500 mb-1">📷</div>
              <span>4:13:24 PM</span>
            </div>
            <div class="rounded-lg border border-slate-200 bg-slate-900/90 text-white p-2 text-center text-[10px]">
              <div class="w-full h-12 bg-slate-800 rounded flex items-center justify-center text-slate-500 mb-1">📷</div>
              <span>4:17:32 PM</span>
            </div>
            <div class="rounded-lg border border-slate-200 bg-slate-900/90 text-white p-2 text-center text-[10px]">
              <div class="w-full h-12 bg-slate-800 rounded flex items-center justify-center text-slate-500 mb-1">📷</div>
              <span>4:21:40 PM</span>
            </div>
            <div class="rounded-lg border border-slate-200 bg-slate-900/90 text-white p-2 text-center text-[10px]">
              <div class="w-full h-12 bg-slate-800 rounded flex items-center justify-center text-slate-500 mb-1">📷</div>
              <span>4:22:48 PM</span>
            </div>
            <div class="rounded-lg border border-slate-200 bg-slate-900/90 text-white p-2 text-center text-[10px]">
              <div class="w-full h-12 bg-slate-800 rounded flex items-center justify-center text-slate-500 mb-1">📷</div>
              <span>4:23:56 PM</span>
            </div>
          </div>
        </div>`;

const newProctoringTimeline = `        <!-- Proctoring Timeline (Authentic 8 Webcam Snapshots from screenshot) -->
        <div class="card-human p-6 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div class="flex items-center gap-2">
              <h4 class="font-bold text-slate-900">Proctoring Timeline</h4>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EBF5FC] text-[#107acc]">PRIMARY CAMERA (WEBCAM) • 8 SHOTS</span>
            </div>
            <div class="flex items-center gap-4 text-[11px] font-medium text-slate-500">
              <label class="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" class="rounded border-slate-300 text-[#107acc] focus:ring-0" />
                <span>SELECT ALL (8)</span>
              </label>
              <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> NORMAL</span>
              <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-amber-500"></span> CAUTION</span>
              <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-red-500"></span> FLAGGED</span>
            </div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            
            <!-- Snapshot 1 -->
            <div class="rounded-xl border border-slate-200 bg-white p-1.5 shadow-2xs hover:shadow-xs transition group">
              <div class="relative rounded-lg overflow-hidden h-20 bg-slate-100">
                <img src="assets/candidate/webcam-1.jpg" alt="Webcam 4:03:00 PM" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span class="absolute top-1 left-1 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-white"></span>
                <input type="checkbox" class="absolute top-1 right-1 rounded border-white/60 bg-white/80 w-3.5 h-3.5" />
              </div>
              <div class="text-[10px] font-mono text-slate-500 text-center mt-1.5">4:03:00 PM</div>
            </div>

            <!-- Snapshot 2 -->
            <div class="rounded-xl border border-slate-200 bg-white p-1.5 shadow-2xs hover:shadow-xs transition group">
              <div class="relative rounded-lg overflow-hidden h-20 bg-slate-100">
                <img src="assets/candidate/webcam-2.jpg" alt="Webcam 4:05:08 PM" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span class="absolute top-1 left-1 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-white"></span>
                <input type="checkbox" class="absolute top-1 right-1 rounded border-white/60 bg-white/80 w-3.5 h-3.5" />
              </div>
              <div class="text-[10px] font-mono text-slate-500 text-center mt-1.5">4:05:08 PM</div>
            </div>

            <!-- Snapshot 3 -->
            <div class="rounded-xl border border-slate-200 bg-white p-1.5 shadow-2xs hover:shadow-xs transition group">
              <div class="relative rounded-lg overflow-hidden h-20 bg-slate-100">
                <img src="assets/candidate/webcam-3.jpg" alt="Webcam 4:09:16 PM" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span class="absolute top-1 left-1 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-white"></span>
                <input type="checkbox" class="absolute top-1 right-1 rounded border-white/60 bg-white/80 w-3.5 h-3.5" />
              </div>
              <div class="text-[10px] font-mono text-slate-500 text-center mt-1.5">4:09:16 PM</div>
            </div>

            <!-- Snapshot 4 (Caution) -->
            <div class="rounded-xl border border-amber-200 bg-amber-50/30 p-1.5 shadow-2xs hover:shadow-xs transition group">
              <div class="relative rounded-lg overflow-hidden h-20 bg-slate-100">
                <img src="assets/candidate/webcam-4.jpg" alt="Webcam 4:13:24 PM" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span class="absolute top-1 left-1 w-2 h-2 rounded-full bg-amber-500 ring-1 ring-white"></span>
                <input type="checkbox" class="absolute top-1 right-1 rounded border-white/60 bg-white/80 w-3.5 h-3.5" />
              </div>
              <div class="text-[10px] font-mono text-amber-700 text-center mt-1.5 font-bold">4:13:24 PM</div>
            </div>

            <!-- Snapshot 5 -->
            <div class="rounded-xl border border-slate-200 bg-white p-1.5 shadow-2xs hover:shadow-xs transition group">
              <div class="relative rounded-lg overflow-hidden h-20 bg-slate-100">
                <img src="assets/candidate/webcam-5.jpg" alt="Webcam 4:17:32 PM" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span class="absolute top-1 left-1 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-white"></span>
                <input type="checkbox" class="absolute top-1 right-1 rounded border-white/60 bg-white/80 w-3.5 h-3.5" />
              </div>
              <div class="text-[10px] font-mono text-slate-500 text-center mt-1.5">4:17:32 PM</div>
            </div>

            <!-- Snapshot 6 (Flagged) -->
            <div class="rounded-xl border border-red-200 bg-red-50/30 p-1.5 shadow-2xs hover:shadow-xs transition group">
              <div class="relative rounded-lg overflow-hidden h-20 bg-slate-100">
                <img src="assets/candidate/webcam-6.jpg" alt="Webcam 4:21:40 PM" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span class="absolute top-1 left-1 w-2 h-2 rounded-full bg-red-500 ring-1 ring-white"></span>
                <input type="checkbox" class="absolute top-1 right-1 rounded border-white/60 bg-white/80 w-3.5 h-3.5" />
              </div>
              <div class="text-[10px] font-mono text-red-700 text-center mt-1.5 font-bold">4:21:40 PM</div>
            </div>

            <!-- Snapshot 7 -->
            <div class="rounded-xl border border-slate-200 bg-white p-1.5 shadow-2xs hover:shadow-xs transition group">
              <div class="relative rounded-lg overflow-hidden h-20 bg-slate-100">
                <img src="assets/candidate/webcam-7.jpg" alt="Webcam 4:22:48 PM" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span class="absolute top-1 left-1 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-white"></span>
                <input type="checkbox" class="absolute top-1 right-1 rounded border-white/60 bg-white/80 w-3.5 h-3.5" />
              </div>
              <div class="text-[10px] font-mono text-slate-500 text-center mt-1.5">4:22:48 PM</div>
            </div>

            <!-- Snapshot 8 -->
            <div class="rounded-xl border border-slate-200 bg-white p-1.5 shadow-2xs hover:shadow-xs transition group">
              <div class="relative rounded-lg overflow-hidden h-20 bg-slate-100">
                <img src="assets/candidate/webcam-8.jpg" alt="Webcam 4:23:56 PM" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span class="absolute top-1 left-1 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-white"></span>
                <input type="checkbox" class="absolute top-1 right-1 rounded border-white/60 bg-white/80 w-3.5 h-3.5" />
              </div>
              <div class="text-[10px] font-mono text-slate-500 text-center mt-1.5">4:23:56 PM</div>
            </div>

          </div>

          <!-- Pagination Bar for Snapshots -->
          <div class="pt-2 flex items-center justify-center gap-1 text-xs text-slate-500">
            <button class="w-6 h-6 rounded bg-[#107acc] text-white font-bold flex items-center justify-center">1</button>
            <button class="w-6 h-6 rounded hover:bg-slate-100 flex items-center justify-center">2</button>
            <button class="w-6 h-6 rounded hover:bg-slate-100 flex items-center justify-center">3</button>
            <button class="w-6 h-6 rounded hover:bg-slate-100 flex items-center justify-center">4</button>
            <button class="w-6 h-6 rounded hover:bg-slate-100 flex items-center justify-center">5</button>
            <span class="px-1 text-slate-400">...</span>
            <button class="w-6 h-6 rounded hover:bg-slate-100 flex items-center justify-center">&gt;</button>
          </div>
        </div>`;

code = code.replace(oldProctoringTimeline, newProctoringTimeline);

// 3. Add Mid Exam Verification Media (Room Scan Video Player) and AI Concept Analysis & Feedback right after Question Breakdown
const targetEndOfQuestions = `Marks Allotted: 0 / 1</div>
          </div>

        </div>

      </div>`;

const newMediaAndFeedbackSection = `Marks Allotted: 0 / 1</div>
          </div>

        </div>

        <!-- Section Navigation Buttons (Matches screenshot) -->
        <div class="flex items-center justify-center gap-3">
          <button class="px-5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition">
            Previous Section
          </button>
          <button class="px-6 py-2 rounded-xl bg-[#107acc] text-white text-xs font-bold hover:bg-[#0c68ab] transition shadow-xs">
            Next Section
          </button>
        </div>

        <!-- Mid Exam Verification Media (Room Scan Video & Voice Verification from screenshot) -->
        <div class="card-human p-6 space-y-5">
          <h4 class="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">Mid Exam Verification Media</h4>
          
          <!-- Room Scan Video (15s) with actual image and player controls -->
          <div class="space-y-2">
            <div class="flex items-center justify-between text-xs font-semibold text-slate-700">
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#107acc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
                Room Scan Video (15s)
              </span>
              <button class="text-slate-400 hover:text-red-500"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
            </div>

            <div class="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 max-w-2xl mx-auto shadow-sm">
              <img src="assets/candidate/room-scan.jpg" alt="Room Scan Video Frame" class="w-full h-80 object-cover opacity-95" />
              
              <!-- Center Play Icon -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition shadow-lg">
                  <svg class="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
              </div>

              <!-- Video Scrubber Bar Overlay (Matching screenshot) -->
              <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 text-white text-xs flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <button class="text-white hover:text-[#107acc]"><svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></button>
                  <span class="font-mono text-[11px] text-slate-200">0:00 / 0:16</span>
                  <div class="w-48 h-1 bg-white/30 rounded-full overflow-hidden hidden sm:block">
                    <div class="w-1/4 h-full bg-[#107acc]"></div>
                  </div>
                </div>
                <div class="flex items-center gap-2.5 text-slate-300">
                  <svg class="w-4 h-4 hover:text-white cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                  <svg class="w-4 h-4 hover:text-white cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                  <svg class="w-4 h-4 hover:text-white cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Voice Verification Audio (10s) -->
          <div class="space-y-2 pt-2 border-t border-slate-100">
            <div class="flex items-center justify-between text-xs font-semibold text-slate-700">
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#107acc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                Voice Verification Audio (10s)
              </span>
              <button class="text-slate-400 hover:text-red-500"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
            </div>
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between max-w-2xl mx-auto text-xs">
              <div class="flex items-center gap-3">
                <button class="w-8 h-8 rounded-full bg-[#107acc] text-white flex items-center justify-center hover:bg-[#0c68ab] shadow-xs">
                  <svg class="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </button>
                <span class="font-mono text-slate-600 text-[11px]">0:00 / 0:10</span>
                <div class="w-40 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div class="w-1/3 h-full bg-[#107acc]"></div>
                </div>
              </div>
              <svg class="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            </div>
          </div>

        </div>

        <!-- AI Concept Analysis Box (Exact JSON text from original screenshot) -->
        <div class="p-6 rounded-2xl bg-[#FAF5FF] border border-purple-200 space-y-2">
          <div class="flex items-center gap-2 text-xs font-bold text-purple-900">
            <svg class="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"></path></svg>
            AI Concept Analysis
          </div>
          <div class="text-xs text-purple-950 font-mono leading-relaxed bg-white/70 p-4 rounded-xl border border-purple-100">
            { "summary": "The candidate demonstrates significant weaknesses in fundamental IT support and troubleshooting methodologies, including initial diagnostic steps, software management, and the importance of documentation and identifying recurring issues. They also lack basic knowledge of computer hardware, networking concepts, and essential security practices like password management. Furthermore, there's a clear gap in understanding the purpose and critical aspects of specialized system integrations, such as pharmacy interfaces, and effective communication with non-technical users." }
          </div>
        </div>

        <!-- Candidate Experience Feedback & Manager Decision Box (From screenshot) -->
        <div class="card-human p-6 space-y-4">
          <div class="flex items-center gap-2 text-xs font-bold text-slate-900 border-b border-slate-100 pb-3">
            <svg class="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
            Candidate Experience Feedback
          </div>

          <div class="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span class="text-amber-500 font-bold">★★★★★</span>
              <span class="font-bold text-emerald-800">Rating: 5/5</span>
            </div>
            <span class="text-slate-500">GENERAL FEEDBACK: <strong class="text-slate-800">"good"</strong></span>
          </div>

          <!-- Manager Evaluation Input -->
          <div class="space-y-3 pt-2">
            <div>
              <label class="text-xs font-bold text-slate-800 block mb-1">Score</label>
              <input type="text" value="5" readonly class="w-24 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-800" />
            </div>

            <div>
              <label class="text-xs font-bold text-slate-800 block mb-1.5">Recommendation</label>
              <div class="flex items-center gap-6 text-xs font-medium text-slate-700">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="recommendation" class="text-emerald-600 focus:ring-0" />
                  <span>Pass</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="recommendation" checked class="text-red-600 focus:ring-0" />
                  <span>Fail</span>
                </label>
              </div>
            </div>

            <div>
              <label class="text-xs font-bold text-slate-800 block mb-1">Comment</label>
              <textarea rows="3" placeholder="Add evaluation comments..." class="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#107acc]"></textarea>
            </div>

            <div class="pt-2">
              <button onclick="alert('Decision confirmed successfully!'); switchScreen('candidates');" class="px-6 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition shadow-xs">
                Confirm
              </button>
            </div>
          </div>
        </div>

      </div>`;

code = code.replace(targetEndOfQuestions, newMediaAndFeedbackSection);

// 4. Also add photos to candidate roster table in #screen-candidates
const oldRowNazeer = `<td class="py-4 px-6 font-bold text-slate-900">nazeer</td>`;
const newRowNazeer = `<td class="py-4 px-6 font-bold text-slate-900 flex items-center gap-2.5">
                    <img src="assets/candidate/avatar-nazeer.jpg" alt="nazeer" class="w-7 h-7 rounded-full object-cover shrink-0 border border-slate-200" />
                    <span>nazeer</span>
                  </td>`;
code = code.replace(oldRowNazeer, newRowNazeer);

const oldRowKalyani = `<td class="py-4 px-6 font-bold text-slate-900">Kalyani</td>`;
const newRowKalyani = `<td class="py-4 px-6 font-bold text-slate-900 flex items-center gap-2.5">
                    <img src="assets/candidate/avatar-kalyani.jpg" alt="Kalyani" class="w-7 h-7 rounded-full object-cover shrink-0 border border-slate-200" />
                    <span>Kalyani</span>
                  </td>`;
code = code.replace(oldRowKalyani, newRowKalyani);

const oldRowPramod = `<td class="py-4 px-6 font-bold text-slate-900">Pramod</td>`;
const newRowPramod = `<td class="py-4 px-6 font-bold text-slate-900 flex items-center gap-2.5">
                    <img src="assets/candidate/avatar-pramod.jpg" alt="Pramod" class="w-7 h-7 rounded-full object-cover shrink-0 border border-slate-200" />
                    <span>Pramod</span>
                  </td>`;
code = code.replace(oldRowPramod, newRowPramod);

const oldRowManikanta = `<td class="py-4 px-6 font-bold text-slate-900">Manikanta</td>`;
const newRowManikanta = `<td class="py-4 px-6 font-bold text-slate-900 flex items-center gap-2.5">
                    <img src="assets/candidate/avatar-manikanta.jpg" alt="Manikanta" class="w-7 h-7 rounded-full object-cover shrink-0 border border-slate-200" />
                    <span>Manikanta</span>
                  </td>`;
code = code.replace(oldRowManikanta, newRowManikanta);

fs.writeFileSync('build_human_gradarena.js', code, 'utf8');
console.log('build_human_gradarena.js updated with real candidate images and verification media!');
