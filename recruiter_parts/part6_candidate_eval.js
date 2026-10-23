module.exports = `
      <!-- ============================================================ -->
      <!-- SCREEN 5: RECRUITER CANDIDATE EVALUATION DOSSIER             -->
      <!-- ============================================================ -->
      <div id="screen-candidate-eval" class="screen-view hidden space-y-6">
        
        <!-- Top Back Nav -->
        <button onclick="switchScreen('candidates')" class="text-xs font-bold text-slate-500 hover:text-[#107acc] flex items-center gap-1.5 transition">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
          Back to Candidates
        </button>

        <!-- Candidate Evaluation Header Card (Modern 2026 SaaS Dossier) -->
        <div class="bg-white rounded-3xl p-7 md:p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(16,122,204,0.06)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50/50 via-emerald-50/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>
          
          <div class="flex items-center gap-5 relative z-10">
            <div class="relative">
              <img src="assets/candidate/kalyani-sundaram.jpg" class="w-20 h-20 rounded-2xl object-cover border-2 border-white shadow-md" alt="Kalyani Sundaram" />
              <span class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-[10px] shadow-xs" title="Proctor Verified">✓</span>
            </div>
            <div class="space-y-1.5">
              <div class="flex flex-wrap items-center gap-3">
                <h3 class="text-2xl font-bold text-slate-900 tracking-tight">Kalyani Sundaram</h3>
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 inline-flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Overall Score: 74%
                </span>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-sky-50 text-[#107acc] border border-sky-100">ATTEMPT #1</span>
              </div>
              <p class="text-xs text-slate-500">kalyani@gaconsulting.in • Assessment: Hardware Support (Tier 1)</p>
              <div class="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono pt-1">
                <span class="inline-flex items-center gap-1 text-slate-600">
                  <svg class="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  Oct 7, 2026, 4:03 PM
                </span>
                <span>•</span>
                <span class="text-emerald-600 font-bold">Time Taken: 20m 23s</span>
                <span>•</span>
                <span class="text-slate-400">Integrity: 98%</span>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-3 shrink-0 relative z-10">
            <button onclick="shareCandidateDossier()" class="px-4 py-2.5 rounded-2xl border border-slate-200/90 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition flex items-center gap-2 shadow-2xs cursor-pointer">
              <svg class="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
              Share
            </button>
            <button onclick="downloadCandidateDossierPdf()" class="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#107acc] to-[#1688de] hover:from-[#0c68ab] hover:to-[#107acc] text-white text-xs font-bold transition flex items-center gap-2 shadow-brand-glow cursor-pointer">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              PDF Report
            </button>
          </div>
        </div>

        <!-- Section Navigation Banner -->
        <div class="p-3.5 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-between text-xs font-semibold shadow-xs">
          <button onclick="showToast('Section Navigation', 'Already at first section', 'info')" class="text-slate-400 hover:text-slate-700 flex items-center gap-1 cursor-pointer">
            <span>‹ Previous Section</span>
          </button>
          <div class="flex items-center gap-3 text-center">
            <span class="font-bold text-slate-900">Section: Core IT Support & Hardware</span>
            <span class="text-slate-400">•</span>
            <span class="text-slate-500 font-mono">Avg Time: 7.6s</span>
            <span class="text-slate-400">•</span>
            <span class="text-slate-500 font-mono">Total Time: 76s</span>
            <span class="text-slate-400">•</span>
            <span class="text-amber-600 font-bold font-mono">Fast Answers: 6</span>
            <span class="text-slate-400">•</span>
            <span class="text-emerald-700 font-bold font-mono">Section Marks: 8 out of 10</span>
          </div>
          <button onclick="showToast('Section Navigation', 'Next: Dwaani Voice AI Scenarios', 'info')" class="text-slate-400 hover:text-slate-700 flex items-center gap-1 cursor-pointer">
            <span>Next Section ›</span>
          </button>
        </div>

        <!-- Proctoring Timeline (from Candidate evaluation - Recruiter Panel.png) -->
        <div class="premium-card p-6 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <h4 class="text-sm font-bold text-slate-900">Proctoring Timeline</h4>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#107acc]">PRIMARY CAMERA (WEBCAM) • 8 SHOTS</span>
            </div>
            <div class="flex items-center gap-4 text-xs">
              <label class="flex items-center gap-1.5 cursor-pointer text-slate-600 font-medium">
                <input type="checkbox" class="rounded text-[#107acc]" />
                <span>SELECT ALL (8)</span>
              </label>
              <div class="flex items-center gap-3">
                <span class="text-emerald-600 font-bold flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> Normal</span>
                <span class="text-amber-600 font-bold flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-amber-500"></span> Caution</span>
                <span class="text-rose-600 font-bold flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-rose-500"></span> Flagged</span>
              </div>
            </div>
          </div>

          <!-- 8 Webcam Shots Thumbnails -->
          <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
            
            <div onclick="openWebcamInspector(1, '4:23:00 PM', 'Normal', 'Face Identified (99.4%)', 'Gaze Center', '0.0dB Ambient')" class="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 text-white relative group cursor-pointer hover:border-[#107acc] transition">
              <img src="assets/candidate/kalyani-sundaram.jpg" class="w-full h-20 object-cover opacity-90 group-hover:opacity-100 transition" alt="Shot 1" />
              <div class="absolute bottom-0 inset-x-0 bg-slate-900/80 p-1 text-[9px] font-mono text-center flex items-center justify-between px-1.5">
                <span>4:23:00 PM</span>
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
            </div>

            <div onclick="openWebcamInspector(2, '4:23:08 PM', 'Normal', 'Face Identified (99.1%)', 'Gaze Center', '0.0dB Ambient')" class="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 text-white relative group cursor-pointer hover:border-[#107acc] transition">
              <img src="assets/candidate/kalyani-sundaram.jpg" class="w-full h-20 object-cover opacity-90 group-hover:opacity-100 transition" alt="Shot 2" />
              <div class="absolute bottom-0 inset-x-0 bg-slate-900/80 p-1 text-[9px] font-mono text-center flex items-center justify-between px-1.5">
                <span>4:23:08 PM</span>
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
            </div>

            <div onclick="openWebcamInspector(3, '4:23:16 PM', 'Caution', 'Looking Off Screen (3.2s)', 'Gaze Right 35°', '0.4dB Ambient')" class="rounded-xl overflow-hidden border-2 border-amber-400 bg-slate-900 text-white relative group cursor-pointer hover:scale-105 transition shadow-xs">
              <img src="assets/candidate/kalyani-sundaram.jpg" class="w-full h-20 object-cover opacity-85 group-hover:opacity-100 transition" alt="Shot 3" />
              <div class="absolute bottom-0 inset-x-0 bg-amber-950/80 p-1 text-[9px] font-mono text-center flex items-center justify-between px-1.5 text-amber-300">
                <span>4:23:16 PM</span>
                <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              </div>
            </div>

            <div onclick="openWebcamInspector(4, '4:23:24 PM', 'Normal', 'Face Identified (98.9%)', 'Gaze Center', '0.0dB Ambient')" class="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 text-white relative group cursor-pointer hover:border-[#107acc] transition">
              <img src="assets/candidate/kalyani-sundaram.jpg" class="w-full h-20 object-cover opacity-90 group-hover:opacity-100 transition" alt="Shot 4" />
              <div class="absolute bottom-0 inset-x-0 bg-slate-900/80 p-1 text-[9px] font-mono text-center flex items-center justify-between px-1.5">
                <span>4:23:24 PM</span>
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
            </div>

            <div onclick="openWebcamInspector(5, '4:23:32 PM', 'Normal', 'Face Identified (99.6%)', 'Gaze Center', '0.0dB Ambient')" class="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 text-white relative group cursor-pointer hover:border-[#107acc] transition">
              <img src="assets/candidate/kalyani-sundaram.jpg" class="w-full h-20 object-cover opacity-90 group-hover:opacity-100 transition" alt="Shot 5" />
              <div class="absolute bottom-0 inset-x-0 bg-slate-900/80 p-1 text-[9px] font-mono text-center flex items-center justify-between px-1.5">
                <span>4:23:32 PM</span>
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
            </div>

            <div onclick="openWebcamInspector(6, '4:23:40 PM', 'Normal', 'Face Identified (99.2%)', 'Gaze Center', '0.0dB Ambient')" class="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 text-white relative group cursor-pointer hover:border-[#107acc] transition">
              <img src="assets/candidate/kalyani-sundaram.jpg" class="w-full h-20 object-cover opacity-90 group-hover:opacity-100 transition" alt="Shot 6" />
              <div class="absolute bottom-0 inset-x-0 bg-slate-900/80 p-1 text-[9px] font-mono text-center flex items-center justify-between px-1.5">
                <span>4:23:40 PM</span>
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
            </div>

            <div onclick="openWebcamInspector(7, '4:23:48 PM', 'Normal', 'Face Identified (99.5%)', 'Gaze Center', '0.0dB Ambient')" class="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 text-white relative group cursor-pointer hover:border-[#107acc] transition">
              <img src="assets/candidate/kalyani-sundaram.jpg" class="w-full h-20 object-cover opacity-90 group-hover:opacity-100 transition" alt="Shot 7" />
              <div class="absolute bottom-0 inset-x-0 bg-slate-900/80 p-1 text-[9px] font-mono text-center flex items-center justify-between px-1.5">
                <span>4:23:48 PM</span>
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
            </div>

            <div onclick="openWebcamInspector(8, '4:23:56 PM', 'Normal', 'Face Identified (99.0%)', 'Gaze Center', '0.0dB Ambient')" class="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 text-white relative group cursor-pointer hover:border-[#107acc] transition">
              <img src="assets/candidate/kalyani-sundaram.jpg" class="w-full h-20 object-cover opacity-90 group-hover:opacity-100 transition" alt="Shot 8" />
              <div class="absolute bottom-0 inset-x-0 bg-slate-900/80 p-1 text-[9px] font-mono text-center flex items-center justify-between px-1.5">
                <span>4:23:56 PM</span>
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
            </div>

          </div>
        </div>

        <!-- Question Breakdown Review (from Candidate evaluation - Recruiter Panel.png) -->
        <div class="premium-card p-6 space-y-4">
          <h4 class="text-sm font-bold text-slate-900">Question Answer Audit (10 Questions)</h4>
          
          <div class="space-y-4 text-xs">
            
            <!-- Q1 -->
            <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span class="font-bold text-slate-900">Q1. Which of the following is typically the first step in troubleshooting a computer issue?</span>
                <div class="flex items-center gap-3 font-mono text-[11px] text-slate-500">
                  <span>Time Taken: 12s</span>
                  <span>Visits: 1</span>
                  <span class="font-bold text-slate-700 bg-slate-200 px-2 py-0.5 rounded">Marks: 0 / 1</span>
                </div>
              </div>
              <div class="space-y-1.5">
                <div class="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 flex items-center justify-between">
                  <span>A. Replacing hardware components</span>
                  <span class="text-[10px] font-bold uppercase bg-rose-200 text-rose-900 px-2 py-0.5 rounded">Selected</span>
                </div>
                <div class="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 flex items-center justify-between font-semibold">
                  <span>B. Gathering information about the problem</span>
                  <span class="text-[10px] font-bold uppercase bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded">Correct</span>
                </div>
              </div>
            </div>

            <!-- Q2 -->
            <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span class="font-bold text-slate-900">Q2. A user reports that their printer is not printing. What is a common initial troubleshooting step?</span>
                <div class="flex items-center gap-3 font-mono text-[11px]">
                  <span class="text-slate-500">Time Taken: 1s</span>
                  <span class="text-slate-500">Visits: 4</span>
                  <span class="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">⚠ Very Fast</span>
                  <span class="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Marks: 1 / 1</span>
                </div>
              </div>
              <div class="space-y-1.5">
                <div class="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 flex items-center justify-between font-semibold">
                  <span>B. Checking if the printer is powered on and connected</span>
                  <span class="text-[10px] font-bold uppercase bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded">Selected & Correct</span>
                </div>
              </div>
            </div>

            <!-- Q3 -->
            <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span class="font-bold text-slate-900">Q3. What is the main function of a Central Processing Unit (CPU) in a computer?</span>
                <div class="flex items-center gap-3 font-mono text-[11px]">
                  <span class="text-slate-500">Time Taken: 1s</span>
                  <span class="text-slate-500">Visits: 1</span>
                  <span class="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">⚠ Very Fast</span>
                  <span class="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Marks: 1 / 1</span>
                </div>
              </div>
              <div class="space-y-1.5">
                <div class="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 flex items-center justify-between font-semibold">
                  <span>C. Executing instructions and performing calculations</span>
                  <span class="text-[10px] font-bold uppercase bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded">Selected & Correct</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Mid Exam Verification Media (from Candidate evaluation - Recruiter Panel.png) -->
        <div class="premium-card p-6 space-y-4">
          <h4 class="text-sm font-bold text-slate-900">Mid Exam Verification Media</h4>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <!-- Video Player -->
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs font-semibold">
                <span class="text-slate-800">Room Scan Video (15s)</span>
                <span class="text-emerald-600 font-bold">✓ Verified</span>
              </div>
              <div onclick="openVideoVerificationModal()" class="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 aspect-video flex items-center justify-center group shadow-xs cursor-pointer">
                <img src="assets/candidate/kalyani-sundaram.jpg" class="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-300" alt="Video thumbnail" />
                <div class="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
                  <div class="w-12 h-12 rounded-full bg-[#107acc] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                    <svg class="w-5 h-5 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </div>
                </div>
                <div class="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] text-white font-mono bg-black/60 px-2.5 py-1 rounded-lg">
                  <span>0:00 / 0:15</span>
                  <span>1080p HD • Click to Inspect</span>
                </div>
              </div>
            </div>

            <!-- Voice Verification Audio -->
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs font-semibold">
                <span class="text-slate-800">Voice Verification Audio (10s)</span>
                <span class="text-emerald-600 font-bold">✓ Dwaani Matched</span>
              </div>
              <div class="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-3 h-[calc(100%-24px)] flex flex-col justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                  </div>
                  <div>
                    <span class="text-xs font-bold text-slate-900 block">Candidate Acoustic Sample</span>
                    <span class="text-[10px] text-slate-500 font-mono">Dwaani Voice Verification: 98.4% Confidence Match</span>
                  </div>
                </div>

                <div class="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-3">
                  <button id="audioPlayToggleBtn" onclick="toggleAudioPlayback()" class="w-8 h-8 rounded-full bg-[#107acc] text-white flex items-center justify-center shrink-0 hover:bg-[#0c68ab] transition cursor-pointer">
                    <svg id="audioPlayIcon" class="w-3.5 h-3.5 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </button>
                  <div class="flex-1 space-y-1">
                    <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div id="audioProgressBar" class="h-full bg-[#107acc] w-1/3 transition-all duration-300"></div>
                    </div>
                    <div id="audioWaveBars" class="hidden flex items-end gap-1 h-3">
                      <span class="w-1 bg-[#107acc] rounded-full audio-bar-1"></span>
                      <span class="w-1 bg-[#107acc] rounded-full audio-bar-2"></span>
                      <span class="w-1 bg-[#107acc] rounded-full audio-bar-3"></span>
                      <span class="w-1 bg-[#107acc] rounded-full audio-bar-4"></span>
                      <span class="w-1 bg-[#107acc] rounded-full audio-bar-2"></span>
                    </div>
                  </div>
                  <span id="audioTimerText" class="text-[10px] font-mono text-slate-500">0:03 / 0:10</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- AI Concept Analysis & Feedback -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div class="premium-card p-6 space-y-3">
            <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <svg class="w-4 h-4 text-[#107acc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"></path></svg>
              <span>AI Concept Analysis</span>
            </h4>
            <div class="p-4 rounded-xl bg-purple-50/60 border border-purple-200 text-xs text-purple-900 leading-relaxed font-sans">
              "Candidate demonstrates solid competence in physical hardware cabling, motherboard pinouts, and network protocols. Demonstrated high response speed on Tier-1 troubleshooting heuristics with zero proctoring infractions."
            </div>
          </div>

          <div class="premium-card p-6 space-y-3">
            <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Candidate Experience Feedback</h4>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div class="flex items-center gap-2">
                <span class="text-amber-400 text-sm">★★★★★</span>
                <span class="text-xs font-bold text-slate-800">5.0 / 5.0 Rating</span>
              </div>
              <p class="text-xs text-slate-600 italic">"The test questions were clear and directly relevant to enterprise hardware support. Smooth voice proctoring experience."</p>
            </div>
          </div>

        </div>

        <!-- Recruiter Recommendation Form (from Candidate evaluation - Recruiter Panel.png) -->
        <div class="premium-card p-6 space-y-4">
          <h4 class="text-base font-bold text-slate-900">Recruiter Evaluation & Final Recommendation</h4>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div class="space-y-1.5">
              <label class="font-bold text-slate-700">Final Candidate Score</label>
              <input type="number" value="74" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white font-mono" />
            </div>
            
            <div class="space-y-1.5">
              <label class="font-bold text-slate-700">Recommendation Status</label>
              <div class="flex items-center gap-4 pt-2">
                <label class="flex items-center gap-2 cursor-pointer font-bold text-emerald-700">
                  <input type="radio" name="recStatus" checked class="text-emerald-600" />
                  <span>Pass (Advance to Client Interview)</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer font-semibold text-rose-700">
                  <input type="radio" name="recStatus" class="text-rose-600" />
                  <span>Fail / Reject</span>
                </label>
              </div>
            </div>
          </div>

          <div class="space-y-1.5 text-xs">
            <label class="font-bold text-slate-700">Recruiter Evaluation Notes</label>
            <textarea rows="3" class="w-full p-3 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none">Recommended for Client Technical Round. Strong problem-solving aptitude and rapid troubleshooting velocity.</textarea>
          </div>

          <div class="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
            <button onclick="submitCandidateDecision()" class="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-success-glow cursor-pointer">
              Confirm & Finalize Evaluation
            </button>
          </div>
        </div>

      </div>
`;
