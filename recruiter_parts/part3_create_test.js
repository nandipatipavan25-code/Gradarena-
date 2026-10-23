module.exports = `
      <!-- ============================================================ -->
      <!-- SCREEN 2: RECRUITER TEST CREATION WIZARD (3 STEPS)           -->
      <!-- ============================================================ -->
      <div id="screen-create-test" class="screen-view hidden space-y-6">
        
        <!-- Connected 3-Step Wizard Progress Bar -->
        <div class="premium-card p-6">
          <div class="flex items-center justify-between max-w-2xl mx-auto relative">
            
            <!-- Step 1 -->
            <div class="flex flex-col items-center gap-1.5 cursor-pointer z-10" onclick="setRecruiterStep(1)">
              <div id="rStepCircle-1" class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#107acc] to-[#38bdf8] text-white flex items-center justify-center font-bold text-sm shadow-brand-glow transition">
                1
              </div>
              <span id="rStepLabel-1" class="text-xs font-bold text-[#107acc]">1. Test Details</span>
            </div>

            <div id="rStepLine-1" class="flex-1 h-1 bg-slate-200 mx-2 -mt-5 transition-all"></div>

            <!-- Step 2 -->
            <div class="flex flex-col items-center gap-1.5 cursor-pointer z-10" onclick="setRecruiterStep(2)">
              <div id="rStepCircle-2" class="w-10 h-10 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-sm transition">
                2
              </div>
              <span id="rStepLabel-2" class="text-xs font-semibold text-slate-400">2. Set sections & questions</span>
            </div>

            <div id="rStepLine-2" class="flex-1 h-1 bg-slate-200 mx-2 -mt-5 transition-all"></div>

            <!-- Step 3 -->
            <div class="flex flex-col items-center gap-1.5 cursor-pointer z-10" onclick="setRecruiterStep(3)">
              <div id="rStepCircle-3" class="w-10 h-10 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-sm transition">
                3
              </div>
              <span id="rStepLabel-3" class="text-xs font-semibold text-slate-400">3. Preview & Submit</span>
            </div>

          </div>
        </div>

        <!-- ==================== STEP 1: TEST DETAILS ==================== -->
        <div id="rStepContent-1" class="premium-card p-8 space-y-6">
          
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <h3 class="text-lg font-bold text-slate-900">Assessment Details</h3>
              <p class="text-xs text-slate-500">Enter the basic information about your assessment or upload a saved assessment schema.</p>
            </div>
            <button onclick="openUploadJsonModal()" class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition flex items-center gap-2 shadow-xs cursor-pointer">
              <svg class="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              Upload Assessment JSON
            </button>
          </div>

          <!-- Auto-fill from Job Link Box (from Test Creation screen -1- Recruiter Panel.png) -->
          <div class="p-5 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-3">
            <div class="flex items-center gap-2 text-xs font-bold text-[#107acc]">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
              <span>Auto-fill from Job Link</span>
            </div>
            <p class="text-xs text-slate-600">Paste a job post link (LinkedIn, UdyogGenie, Indeed, etc.) to automatically extract details.</p>
            <div class="flex flex-col sm:flex-row items-center gap-3">
              <div class="relative flex-1 w-full">
                <input id="jobLinkInput" type="url" value="https://www.linkedin.com/jobs/view/tier1-hardware-support-engineer" placeholder="Paste Job URL (LinkedIn, UdyogGenie...)" class="w-full pl-9 pr-4 py-2.5 rounded-xl border border-blue-200 bg-white text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#107acc]/20" />
                <svg class="w-4 h-4 text-slate-400 absolute left-3 top-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <button onclick="extractJobDetailsDemo()" class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#107acc] to-[#38bdf8] text-white font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center justify-center gap-1.5 shrink-0">
                <span id="extractBtnText">Extract Details</span>
              </button>
            </div>
          </div>

          <div class="relative flex py-2 items-center">
            <div class="flex-grow border-t border-slate-200"></div>
            <span class="flex-shrink mx-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">OR FILL MANUALLY</span>
            <div class="flex-grow border-t border-slate-200"></div>
          </div>

          <!-- Form Fields -->
          <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="md:col-span-2 space-y-1.5">
                <label class="text-xs font-bold text-slate-700">Assessment Title <span class="text-rose-500">*</span></label>
                <input id="inputTestTitle" type="text" value="Hardware Support (Tier 1)" placeholder="e.g., History Quiz, Senior Cloud Architect" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20" />
              </div>
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-700">Level <span class="text-rose-500">*</span></label>
                <select id="selectTestLevel" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none">
                  <option value="entry">Entry Level (0-2 yrs)</option>
                  <option value="mid" selected>Mid Level (2-5 yrs)</option>
                  <option value="senior">Senior Level (5-8 yrs)</option>
                  <option value="lead">Lead / Architect (8+ yrs)</option>
                </select>
              </div>
            </div>

            <div class="space-y-1.5">
              <div class="flex items-center justify-between">
                <label class="text-xs font-bold text-slate-700">Job Description <span class="text-rose-500">*</span></label>
                <button type="button" onclick="toggleMaximizeJd()" class="text-[11px] font-bold text-[#107acc] hover:underline flex items-center gap-1 cursor-pointer">
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                  <span id="maximizeJdLabel">Maximize</span>
                </button>
              </div>
              <textarea id="inputTestJD" rows="4" placeholder="Enter job description..." class="w-full p-3.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 leading-relaxed font-sans">We are looking for a Tier 1 Hardware Support Engineer to handle desktop diagnostics, motherboard replacements, peripherals, network interface cards, and Windows Active Directory credential troubleshooting for enterprise client workforces.</textarea>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-700">Client Name</label>
                <input id="inputClientName" type="text" value="WFM Enterprise" placeholder="e.g., Acme Corp" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none" />
              </div>
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-700">Percentage to Pass <span class="text-rose-500">*</span></label>
                <input id="inputPassPercent" type="number" value="60" placeholder="e.g., 60" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none font-mono" />
              </div>
            </div>

            <div class="space-y-1.5">
              <label class="text-xs font-bold text-slate-700">Skills</label>
              <input id="inputSkills" type="text" value="Hardware Diagnostics, Motherboards, Windows AD, TCP/IP, Helpdesk SLA" placeholder="e.g. ReactJS, NodeJS, Hardware..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none" />
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button onclick="setRecruiterStep(2)" class="px-6 py-2.5 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5">
              Next ➔
            </button>
          </div>

        </div>

        <!-- ==================== STEP 2: SECTIONS & QUESTIONS ==================== -->
        <div id="rStepContent-2" class="premium-card p-8 space-y-6 hidden">
          
          <!-- AI JD Section Generation Banner (from Test Creation screen -2- Recruiter Panel.png) -->
          <div class="p-6 rounded-2xl bg-gradient-to-r from-[#107acc] to-[#2563eb] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-brand-glow">
            <div class="space-y-1">
              <h4 class="text-base font-bold flex items-center gap-2">
                Generate Sections with JD
              </h4>
              <p class="text-xs text-blue-100">Let our AI analyze the JD and suggest high-quality questions automatically.</p>
            </div>
            <button onclick="simulateAiGenerateQuestions()" class="px-5 py-2.5 rounded-xl bg-white text-[#107acc] hover:bg-blue-50 font-bold text-xs transition flex items-center gap-2 shadow-xs shrink-0">
              <svg class="w-4 h-4 text-[#107acc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"></path></svg>
              <span>Generate Now →</span>
            </button>
          </div>

          <!-- Section Tabs -->
          <div id="sectionTabsContainer" class="flex items-center gap-2 border-b border-slate-200 pb-2 text-xs">
            <button id="secTab-1" onclick="switchSectionTab(1)" class="px-4 py-2 rounded-xl bg-blue-50 text-[#107acc] font-bold border border-blue-200 cursor-pointer">
              Section 1 (Core Diagnostics)
            </button>
            <button id="addSectionBtn" onclick="addSectionTab('Section 2 (Dwaani Voice AI)')" class="px-4 py-2 rounded-xl text-slate-500 hover:text-slate-800 font-semibold flex items-center gap-1.5 hover:bg-slate-50 transition cursor-pointer">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Add Section
            </button>
          </div>

          <!-- Section Configuration Inputs -->
          <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-700">Section Name <span class="text-rose-500">*</span></label>
                <input type="text" value="Core IT Support & Hardware Troubleshooting" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none" />
              </div>
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-700">Section Type <span class="text-rose-500">*</span></label>
                <select class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none">
                  <option selected>Multiple Choice (MCQ)</option>
                  <option>Dwaani AI Voice Proctored</option>
                  <option>Coding Sandbox</option>
                  <option>Subjective / Short Answer</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-700">Time Limit (HH:MM:SS) <span class="text-rose-500">*</span></label>
                <input type="text" value="00:30:00" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white font-mono" />
              </div>
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-700">No of Questions</label>
                <input type="text" value="10" readonly class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-slate-50 text-slate-600 font-mono" />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-700">Expected No of Questions <span class="text-rose-500">*</span></label>
                <input type="number" value="10" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white font-mono" />
              </div>
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-700">Marks Per Question <span class="text-rose-500">*</span></label>
                <input type="number" value="1" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white font-mono" />
              </div>
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-700">Negative Marks Per Question <span class="text-rose-500">*</span></label>
                <input type="number" value="0.25" step="0.25" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white font-mono" />
              </div>
            </div>

            <!-- Questions List Container -->
            <div id="questionsListContainer" class="space-y-3">
              <!-- Question 1 -->
              <div id="qItem-1" class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-slate-900">Question 1 (MCQ)</span>
                  <span class="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Validated</span>
                </div>
                <p class="text-xs text-slate-700 font-medium">Which of the following is typically the first step in troubleshooting a computer issue?</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div class="p-2 rounded-lg bg-white border border-slate-200 text-slate-700">A. Replacing hardware components</div>
                  <div class="p-2 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 font-semibold">B. Gathering information about the problem (Correct)</div>
                  <div class="p-2 rounded-lg bg-white border border-slate-200 text-slate-700">C. Reinstalling the operating system</div>
                  <div class="p-2 rounded-lg bg-white border border-slate-200 text-slate-700">D. Contacting a senior technician immediately</div>
                </div>
              </div>
            </div>

            <button onclick="addQuestionItem()" class="px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700 transition flex items-center gap-1.5 shadow-xs cursor-pointer">
              <svg class="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Add Question
            </button>

          </div>

          <!-- Bottom Navigation -->
          <div class="flex items-center justify-between pt-4 border-t border-slate-100">
            <button onclick="setRecruiterStep(1)" class="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold transition">
              Back
            </button>
            <button onclick="setRecruiterStep(3)" class="px-6 py-2.5 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition shadow-xs">
              Update and Next ➔
            </button>
          </div>

        </div>

        <!-- ==================== STEP 3: PREVIEW & SUBMIT ==================== -->
        <div id="rStepContent-3" class="premium-card p-8 space-y-6 hidden">
          
          <div class="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 class="text-lg font-bold text-slate-900">Quiz Preview & Verification</h3>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
              PENDING SUBMISSION
            </span>
          </div>

          <!-- Quiz Details Card (from Test Creation screen -3 - Recruiter Panel.png) -->
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span>Quiz Details</span>
                <button onclick="setRecruiterStep(1)" title="Edit Details" class="text-slate-400 hover:text-[#107acc]">
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                </button>
              </h4>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-1">
              <div>
                <span class="text-slate-400 block font-medium">Quiz Title</span>
                <span class="font-bold text-slate-900">Hardware Support (Tier 1)</span>
              </div>
              <div>
                <span class="text-slate-400 block font-medium">Level</span>
                <span class="font-bold text-slate-900">Mid Level</span>
              </div>
              <div>
                <span class="text-slate-400 block font-medium">Duration</span>
                <span class="font-bold text-slate-900 font-mono">45 mins</span>
              </div>
              <div>
                <span class="text-slate-400 block font-medium">Passing Percentage</span>
                <span class="font-bold text-[#107acc] font-mono">60%</span>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs border-t border-slate-200/80">
              <div class="p-2.5 rounded-xl bg-white border border-slate-200/70">
                <span class="text-slate-400 block text-[10px] uppercase font-bold">CREATED DATE</span>
                <span class="font-bold text-slate-800 font-mono">Oct 23, 2026 • 11:20 AM</span>
              </div>
              <div class="p-2.5 rounded-xl bg-white border border-slate-200/70">
                <span class="text-slate-400 block text-[10px] uppercase font-bold">ORGANIZATION ASSESSMENTS</span>
                <span class="font-bold text-[#107acc] font-mono">30 Active (104 Total)</span>
              </div>
              <div class="p-2.5 rounded-xl bg-white border border-slate-200/70">
                <span class="text-slate-400 block text-[10px] uppercase font-bold">EXPECTED REVIEW SLA</span>
                <span class="font-bold text-emerald-600 font-mono">&lt; 4 Hours Turnaround</span>
              </div>
            </div>

            <div class="pt-1 text-xs">
              <span class="text-slate-400 block font-medium">Description</span>
              <p class="text-slate-600 mt-0.5">Desktop troubleshooting, hardware diagnostics, and Active Directory validation.</p>
            </div>
          </div>

          <!-- Sections Card -->
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span>Sections & Weights</span>
                <button onclick="setRecruiterStep(2)" title="Edit Sections" class="text-slate-400 hover:text-[#107acc]">
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                </button>
              </h4>
            </div>

            <div class="divide-y divide-slate-200 text-xs">
              <div class="py-2.5 flex items-center justify-between">
                <div>
                  <span class="font-bold text-slate-900 block">Section 1: Core IT Support & Hardware Troubleshooting</span>
                  <span class="text-[11px] text-slate-500">10 Questions • 1 Mark Each • 0.25 Negative</span>
                </div>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-[#107acc]">MCQ</span>
              </div>
              <div class="py-2.5 flex items-center justify-between">
                <div>
                  <span class="font-bold text-slate-900 block">Section 2: Dwaani AI Voice Proctored Scenarios</span>
                  <span class="text-[11px] text-slate-500">2 Interactive Scenarios • AI Pronunciation & Sentiment Analysis</span>
                </div>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-700">VOICE AI</span>
              </div>
            </div>
          </div>

          <!-- Bottom Actions -->
          <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
            <button onclick="setRecruiterStep(2)" class="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold transition">
              Back
            </button>
            <div class="flex items-center gap-3 w-full sm:w-auto">
              <button onclick="downloadTestJsonSchema()" class="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition flex items-center justify-center gap-2 shadow-xs cursor-pointer">
                <svg class="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download Test JSON
              </button>
              <button onclick="submitRecruiterTestForReview()" class="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition shadow-xs">
                Submit for Review
              </button>
            </div>
          </div>

        </div>

      </div>
`;
