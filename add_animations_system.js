const fs = require('fs');
const path = require('path');

let content = fs.readFileSync('build_human_gradarena.js', 'utf8');

// 1. Add CSS animations into <style> block
const cssToAdd = `
    /* Laser scan animation */
    @keyframes laserSweep {
      0% { top: 6px; opacity: 0.9; }
      50% { top: calc(100% - 12px); opacity: 1; }
      100% { top: 6px; opacity: 0.9; }
    }
    .animate-laser {
      position: absolute;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, rgba(16,122,204,0) 0%, rgba(16,122,204,1) 50%, rgba(16,122,204,0) 100%);
      box-shadow: 0 0 12px rgba(16,122,204,0.8);
      animation: laserSweep 2s ease-in-out infinite;
    }
    /* Pulse glow */
    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(16, 122, 204, 0.2); }
      50% { box-shadow: 0 0 0 8px rgba(16, 122, 204, 0); }
    }
    .pulse-glow {
      animation: pulseGlow 2s infinite;
    }
    /* Stagger pop-in */
    @keyframes popIn {
      0% { opacity: 0; transform: scale(0.85) translateY(4px); }
      100% { opacity: 1; transform: scale(1) translateY(0); }
    }
    .pop-in {
      animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    /* Shimmer stream */
    @keyframes textStream {
      0% { opacity: 0.4; }
      50% { opacity: 1; }
      100% { opacity: 0.4; }
    }
    .animate-streaming {
      animation: textStream 1.4s ease-in-out infinite;
    }
`;

content = content.replace('    .card-human {', cssToAdd + '\n    .card-human {');

// 2. Add "UPLOAD & PARSE RESUMES" button in Candidates page filter bar next to EXPORT
const exportTarget = `<button class="px-4 py-1.5 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-bold hover:bg-emerald-100 transition flex items-center gap-1.5 shadow-xs">\n              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>\n              EXPORT\n            </button>`;

const exportReplacement = `<div class="flex items-center gap-2">
              <button onclick="openResumeUploadModal()" class="px-4 py-1.5 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                UPLOAD & PARSE RESUMES
              </button>
              <button class="px-4 py-1.5 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-bold hover:bg-emerald-100 transition flex items-center gap-1.5 shadow-xs">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                EXPORT
              </button>
            </div>`;

content = content.replace(exportTarget, exportReplacement);

// 3. Make "Generate Now ➔" button clickable with openTestGenerateModal()
content = content.replace(
  '<button class="px-5 py-2 rounded-xl bg-white text-[#107acc] font-bold text-xs hover:bg-blue-50 transition flex items-center gap-1.5 shadow-sm">\n                  Generate Now ➔\n                </button>',
  '<button onclick="openTestGenerateModal()" class="px-5 py-2 rounded-xl bg-white text-[#107acc] font-bold text-xs hover:bg-blue-50 transition flex items-center gap-1.5 shadow-sm">\n                  <svg class="w-4 h-4 text-[#107acc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>\n                  Generate Now ➔\n                </button>'
);

// 4. In Step 1: Add dual tabs [Auto-fill from Job Link] vs [Upload Resume / JD (AI Auto-Fill)]
const autofillTarget = `          <!-- Auto-fill from Job Link Box -->\n          <div class="p-5 rounded-2xl bg-[#F0F7FD] border border-[#CDE4F7] space-y-3">\n            <div class="flex items-center gap-2 text-xs font-bold text-[#107acc]">\n              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>\n              Auto-fill from Job Link\n            </div>\n            <p class="text-[11px] text-slate-500">Paste a job post link (LinkedIn, UdyogGenie, etc.) to automatically extract details.</p>\n            <div class="flex items-center gap-2">\n              <div class="relative flex-1">\n                <input type="text" placeholder="Paste Job URL (LinkedIn, UdyogGenie...)" class="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc]" />\n                <svg class="w-4 h-4 text-slate-400 absolute left-3 top-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>\n              </div>\n              <button class="px-5 py-2 rounded-xl bg-[#8BC7F2] hover:bg-[#68B2E8] text-white text-xs font-semibold transition shadow-xs">\n                Extract Details\n              </button>\n            </div>\n          </div>`;

const autofillReplacement = `          <!-- Assessment Intake Selector: Link vs Resume/JD AI Extractor -->
          <div class="space-y-3">
            <div class="flex items-center gap-2 border-b border-slate-200 pb-2">
              <button id="tabBtn-jobLink" onclick="switchIntakeTab('link')" class="px-4 py-1.5 rounded-lg bg-[#107acc] text-white text-xs font-bold transition shadow-xs">
                🔗 Auto-fill from Job Link
              </button>
              <button id="tabBtn-resumeUpload" onclick="switchIntakeTab('resume')" class="px-4 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:text-[#107acc] text-xs font-bold transition">
                📄 Upload Resume / JD (AI Auto-Fill & Generate)
              </button>
            </div>

            <!-- Tab 1: Job Link -->
            <div id="tabContent-jobLink" class="p-5 rounded-2xl bg-[#F0F7FD] border border-[#CDE4F7] space-y-3">
              <div class="flex items-center gap-2 text-xs font-bold text-[#107acc]">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                Auto-fill from Job Link
              </div>
              <p class="text-[11px] text-slate-500">Paste a job post link (LinkedIn, UdyogGenie, etc.) to automatically extract details.</p>
              <div class="flex items-center gap-2">
                <div class="relative flex-1">
                  <input type="text" placeholder="Paste Job URL (LinkedIn, UdyogGenie...)" class="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc]" />
                  <svg class="w-4 h-4 text-slate-400 absolute left-3 top-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
                <button class="px-5 py-2 rounded-xl bg-[#8BC7F2] hover:bg-[#68B2E8] text-white text-xs font-semibold transition shadow-xs">
                  Extract Details
                </button>
              </div>
            </div>

            <!-- Tab 2: Resume / JD Drag & Drop with Animated Scanning -->
            <div id="tabContent-resume" class="hidden p-5 rounded-2xl bg-white border-2 border-dashed border-[#107acc]/40 hover:border-[#107acc] transition space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="text-xs font-bold text-slate-900 flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[#107acc] animate-ping"></span>
                    AI Resume & Job Description Intake Studio
                  </h4>
                  <p class="text-[11px] text-slate-500 mt-0.5">Drop candidate resume (PDF/DOCX) or JD to parse skills and synthesize assessment stages</p>
                </div>
                <button onclick="openTestGenerateModal()" class="px-4 py-1.5 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs">
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  Generate Test with AI ➔
                </button>
              </div>

              <!-- Interactive In-Page Dropzone -->
              <div id="inpageDropzone" onclick="triggerInPageResumeScan('Kalyani_Lead_IT_Support_Resume.pdf', 1.4)" class="cursor-pointer border border-slate-200 bg-slate-50/70 hover:bg-blue-50/40 rounded-xl p-5 text-center transition group">
                <div class="flex flex-col items-center gap-2">
                  <div class="w-10 h-10 rounded-xl bg-blue-100/80 text-[#107acc] flex items-center justify-center group-hover:scale-110 transition">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                  </div>
                  <div>
                    <span class="text-xs font-bold text-slate-800">Drag & drop candidate resume or JD here, or click to browse</span>
                    <span class="text-[10px] text-slate-400 block mt-0.5">Supports PDF, DOCX, TXT up to 15MB • Automated OCR & Competency Extraction</span>
                  </div>
                </div>
              </div>

              <!-- Quick Clickable Sample Resumes -->
              <div class="flex items-center gap-2 pt-1">
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Try Sample:</span>
                <button type="button" onclick="triggerInPageResumeScan('Kalyani_Lead_IT_Support.pdf', 1.4)" class="px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:border-[#107acc] text-[11px] font-semibold text-slate-700 transition flex items-center gap-1">
                  📄 Kalyani (Lead IT Support).pdf
                </button>
                <button type="button" onclick="triggerInPageResumeScan('Nazeer_DevOps_Architect.docx', 2.1)" class="px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:border-[#107acc] text-[11px] font-semibold text-slate-700 transition flex items-center gap-1">
                  📄 Nazeer (Cloud Architect).docx
                </button>
                <button type="button" onclick="triggerInPageResumeScan('Priya_Frontend_Engineer.pdf', 1.8)" class="px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:border-[#107acc] text-[11px] font-semibold text-slate-700 transition flex items-center gap-1">
                  📄 Priya (Frontend Lead).pdf
                </button>
              </div>

              <!-- In-Page Scan Progress Card (Initially Hidden) -->
              <div id="inPageScanCard" class="hidden p-4 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50/60 to-white space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-blue-100 text-[#107acc] flex items-center justify-center font-bold text-xs">
                      PDF
                    </div>
                    <div>
                      <span id="inPageFileName" class="text-xs font-bold text-slate-800 block">Kalyani_Lead_IT_Support.pdf</span>
                      <span id="inPageFileStatus" class="text-[10px] text-slate-500">Uploading & scanning with OCR engine...</span>
                    </div>
                  </div>
                  <span id="inPagePercent" class="text-xs font-mono font-bold text-[#107acc]">0%</span>
                </div>

                <!-- Progress Bar -->
                <div class="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div id="inPageProgressBar" class="bg-[#107acc] h-2 rounded-full transition-all duration-300" style="width: 0%"></div>
                </div>

                <!-- Extracted Badges (Revealed on Complete) -->
                <div id="inPageExtractedBadges" class="hidden pt-2 border-t border-blue-100 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-[11px] font-bold text-slate-700">Extracted Competencies & Auto-Filled Parameters:</span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700">✓ Parsed</span>
                  </div>
                  <div class="flex flex-wrap gap-1.5">
                    <span class="px-2 py-0.5 rounded-md bg-blue-100 text-[#107acc] text-[11px] font-semibold pop-in">Hardware Diagnostics</span>
                    <span class="px-2 py-0.5 rounded-md bg-blue-100 text-[#107acc] text-[11px] font-semibold pop-in">TCP/IP & DHCP</span>
                    <span class="px-2 py-0.5 rounded-md bg-blue-100 text-[#107acc] text-[11px] font-semibold pop-in">Windows Server</span>
                    <span class="px-2 py-0.5 rounded-md bg-blue-100 text-[#107acc] text-[11px] font-semibold pop-in">Active Directory</span>
                    <span class="px-2 py-0.5 rounded-md bg-blue-100 text-[#107acc] text-[11px] font-semibold pop-in">SLA Helpdesk</span>
                    <span class="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-semibold pop-in">5.5 Yrs Exp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

content = content.replace(autofillTarget, autofillReplacement);

// 5. In Dashboard Quick Actions: Connect "Generate Test from JD" row to openTestGenerateModal()
content = content.replace(
  '<div class="py-3 flex justify-between items-center">\n                  <div>\n                    <div class="font-semibold text-slate-800">Generate Test from JD</div>',
  '<div onclick="openTestGenerateModal()" class="py-3 flex justify-between items-center cursor-pointer hover:bg-slate-50/80 px-2 rounded-lg transition">\n                  <div>\n                    <div class="font-semibold text-slate-800 flex items-center gap-1.5">\n                      <span>Generate Test from JD</span>\n                      <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-50 text-[#107acc]">AI</span>\n                    </div>'
);

// 6. Append the Two Interactive Modals and their JavaScript before </body>
const modalsAndScript = `
  <!-- =================================================================== -->
  <!-- MODAL 1: AI RESUME UPLOAD & PARSING STUDIO (ANIMATED LIFECYCLE)     -->
  <!-- =================================================================== -->
  <div id="modal-resume-parser" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full overflow-hidden transform transition-all">
      
      <!-- Modal Header -->
      <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-blue-50 text-[#107acc] flex items-center justify-center">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </div>
          <div>
            <h3 class="text-base font-bold text-slate-900">AI Resume Upload & Skill Parsing Studio</h3>
            <p class="text-xs text-slate-500">Upload candidate resumes for automated OCR, skills extraction, and role benchmark scoring</p>
          </div>
        </div>
        <button onclick="closeResumeUploadModal()" class="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 flex items-center justify-center transition">
          ✕
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 space-y-5">
        
        <!-- Dropzone Box (Hidden during active scan) -->
        <div id="resumeDropArea" class="border-2 border-dashed border-slate-200 hover:border-[#107acc] rounded-2xl p-6 text-center bg-slate-50/60 hover:bg-blue-50/30 transition cursor-pointer" onclick="startResumeAnimation('Kalyani_Lead_IT_Support_Resume.pdf', 1.4)">
          <div class="flex flex-col items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-blue-100 text-[#107acc] flex items-center justify-center">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </div>
            <div>
              <span class="text-sm font-bold text-slate-800 block">Drag and drop resume here, or click to upload</span>
              <span class="text-xs text-slate-500 block mt-1">Supports PDF, DOCX, TXT up to 10MB</span>
            </div>
            <div class="flex items-center gap-2 pt-2">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Quick Sample:</span>
              <button type="button" onclick="event.stopPropagation(); startResumeAnimation('Kalyani_Lead_IT_Support.pdf', 1.4);" class="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#107acc]">
                📄 Kalyani.pdf
              </button>
              <button type="button" onclick="event.stopPropagation(); startResumeAnimation('Nazeer_DevOps_Architect.docx', 2.1);" class="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#107acc]">
                📄 Nazeer.docx
              </button>
              <button type="button" onclick="event.stopPropagation(); startResumeAnimation('Pramod_Senior_Dev.pdf', 1.8);" class="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#107acc]">
                📄 Pramod.pdf
              </button>
            </div>
          </div>
        </div>

        <!-- Animated Scanning Stage (Visible when scanning) -->
        <div id="resumeScanningArea" class="hidden space-y-4">
          
          <!-- File & Scanning Header -->
          <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#EBF5FC] text-[#107acc] flex items-center justify-center font-bold text-xs shadow-xs">
                PDF
              </div>
              <div>
                <span id="scanFileName" class="text-xs font-bold text-slate-900 block">Kalyani_Lead_IT_Support.pdf</span>
                <span id="scanFileSize" class="text-[11px] text-slate-500">1.4 MB • Uploaded just now</span>
              </div>
            </div>
            <span id="scanPercentage" class="text-sm font-mono font-bold text-[#107acc]">0%</span>
          </div>

          <!-- Animated Progress Bar -->
          <div class="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div id="scanProgressBar" class="bg-[#107acc] h-2.5 rounded-full transition-all duration-300" style="width: 0%"></div>
          </div>

          <!-- Laser Scanning Document Visualizer -->
          <div class="relative bg-slate-900 text-white p-4 rounded-xl overflow-hidden font-mono text-xs">
            <!-- Animated Laser Line -->
            <div id="laserBeam" class="animate-laser"></div>
            
            <div class="flex items-center justify-between border-b border-slate-800 pb-2 mb-2 text-[10px] text-slate-400">
              <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> AI NEURAL OCR & ENTITY PARSER</span>
              <span id="scanStepBadge" class="text-emerald-400 font-bold">STAGE 1: SCANNING TEXT</span>
            </div>

            <!-- Terminal logs of parsing steps -->
            <div id="scanLogArea" class="space-y-1 text-[11px] h-24 overflow-hidden text-slate-300">
              <div>[0.12s] Connecting to GradArena High-Speed OCR Pipeline...</div>
            </div>
          </div>

          <!-- Extracted Entities & AI Match Score (Fades in at stage 4) -->
          <div id="scanResultsArea" class="hidden space-y-4 pt-2">
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <!-- Score Radial -->
              <div class="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/60 flex items-center gap-3">
                <div class="relative w-12 h-12 flex items-center justify-center">
                  <svg class="w-12 h-12 transform -rotate-90">
                    <circle cx="24" cy="24" r="20" stroke="#CBD5E1" stroke-width="4" fill="transparent" />
                    <circle id="matchScoreCircle" cx="24" cy="24" r="20" stroke="#16A34A" stroke-width="4" stroke-dasharray="125.6" stroke-dashoffset="125.6" fill="transparent" class="transition-all duration-1000 ease-out" />
                  </svg>
                  <span id="matchScoreText" class="absolute text-xs font-extrabold text-emerald-700">0%</span>
                </div>
                <div>
                  <span class="text-[10px] font-bold text-emerald-800 uppercase block">ROLE BENCHMARK</span>
                  <span class="text-xs font-bold text-emerald-900">High Match Fit</span>
                </div>
              </div>

              <!-- Candidate Info -->
              <div class="p-3.5 rounded-xl border border-slate-200 bg-white">
                <span class="text-[10px] font-bold text-slate-400 uppercase block">CANDIDATE</span>
                <span class="text-xs font-bold text-slate-900 block truncate">Kalyani Sundaram</span>
                <span class="text-[11px] text-slate-500">5.5 Years Exp • Tier-1 Lead</span>
              </div>

              <!-- Recommendation -->
              <div class="p-3.5 rounded-xl border border-slate-200 bg-white">
                <span class="text-[10px] font-bold text-slate-400 uppercase block">RECOMMENDED TEST</span>
                <span class="text-xs font-bold text-[#107acc] block truncate">Hardware Support (Tier 1)</span>
                <span class="text-[11px] text-slate-500">Dwaani + GradArena Flow</span>
              </div>
            </div>

            <!-- Extracted Skills Chips -->
            <div class="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
              <span class="text-xs font-bold text-slate-800 block">Extracted Skill & Competency Tags (9 Found):</span>
              <div class="flex flex-wrap gap-1.5" id="extractedSkillsList">
                <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-[#107acc] border border-blue-200 text-xs font-semibold pop-in">Hardware Diagnostics</span>
                <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-[#107acc] border border-blue-200 text-xs font-semibold pop-in">TCP/IP Network Config</span>
                <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-[#107acc] border border-blue-200 text-xs font-semibold pop-in">Windows Server & AD</span>
                <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-[#107acc] border border-blue-200 text-xs font-semibold pop-in">Helpdesk SLA Ticketing</span>
                <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-[#107acc] border border-blue-200 text-xs font-semibold pop-in">Bash & PowerShell</span>
                <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-[#107acc] border border-blue-200 text-xs font-semibold pop-in">Peripheral Maintenance</span>
                <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-[#107acc] border border-blue-200 text-xs font-semibold pop-in">DHCP Relay</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      <!-- Modal Footer -->
      <div class="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <button onclick="resetResumeModal()" class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition">
          Reset / Upload Another
        </button>
        <div class="flex items-center gap-2">
          <button onclick="closeResumeUploadModal()" class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition">
            Close
          </button>
          <button id="btnAddToRoster" onclick="addCandidateToRosterFromResume()" class="px-5 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5">
            <span>Add Candidate to Talent Pool</span>
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>

    </div>
  </div>


  <!-- =================================================================== -->
  <!-- MODAL 2: AI TEST & QUESTION GENERATION ENGINE (ANIMATED LIFECYCLE)  -->
  <!-- =================================================================== -->
  <div id="modal-test-generator" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full overflow-hidden transform transition-all">
      
      <!-- Modal Header -->
      <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-blue-50/50 via-white to-indigo-50/30">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-[#107acc] text-white flex items-center justify-center shadow-xs">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </div>
          <div>
            <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
              AI Question Studio & Test Generator
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#EBF5FC] text-[#107acc]">GPT-4o + Dwaani Audio</span>
            </h3>
            <p class="text-xs text-slate-500">Synthesizing calibrated MCQ sections, diagnostic scenarios, and AI voice interview rubrics</p>
          </div>
        </div>
        <button onclick="closeTestGenerateModal()" class="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 flex items-center justify-center transition">
          ✕
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 space-y-5">
        
        <!-- Animated 4-Node Pipeline Tracker -->
        <div class="grid grid-cols-4 gap-2 text-center text-xs">
          
          <div id="genNode-1" class="p-2.5 rounded-xl border border-[#107acc] bg-[#EBF5FC] text-[#107acc] font-bold transition">
            <div class="w-5 h-5 mx-auto mb-1 rounded-full bg-[#107acc] text-white text-[10px] flex items-center justify-center" id="nodeIcon-1">1</div>
            <span class="text-[11px] block">Role Taxonomy</span>
          </div>

          <div id="genNode-2" class="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-400 font-semibold transition">
            <div class="w-5 h-5 mx-auto mb-1 rounded-full bg-slate-200 text-slate-600 text-[10px] flex items-center justify-center" id="nodeIcon-2">2</div>
            <span class="text-[11px] block">Section Design</span>
          </div>

          <div id="genNode-3" class="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-400 font-semibold transition">
            <div class="w-5 h-5 mx-auto mb-1 rounded-full bg-slate-200 text-slate-600 text-[10px] flex items-center justify-center" id="nodeIcon-3">3</div>
            <span class="text-[11px] block">Question Synth</span>
          </div>

          <div id="genNode-4" class="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-400 font-semibold transition">
            <div class="w-5 h-5 mx-auto mb-1 rounded-full bg-slate-200 text-slate-600 text-[10px] flex items-center justify-center" id="nodeIcon-4">4</div>
            <span class="text-[11px] block">Dwaani Voice</span>
          </div>

        </div>

        <!-- Live Question Counter & Overall Progress -->
        <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
          <div class="flex items-center justify-between">
            <span id="genStatusText" class="text-xs font-bold text-slate-800 flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-[#107acc] animate-ping"></span>
              Analyzing job description & competency weights...
            </span>
            <span id="genQuestionsCount" class="text-xs font-mono font-bold text-[#107acc]">Questions: 0 / 25</span>
          </div>
          <div class="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
            <div id="genProgressBar" class="bg-[#107acc] h-2 rounded-full transition-all duration-300" style="width: 5%"></div>
          </div>
        </div>

        <!-- Live Streaming Question Formulation Preview -->
        <div class="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
          <div class="px-4 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
            <span class="font-mono font-bold text-slate-700">LIVE GENERATION STREAM</span>
            <span id="genSectionTag" class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-[#107acc]">SECTION 1: HARDWARE SUPPORT</span>
          </div>
          <div class="p-4 space-y-3 font-mono text-xs">
            <p id="genQuestionText" class="text-slate-800 leading-relaxed font-semibold">
              Initializing neural question synthesis prompt matrix...
            </p>
            <div id="genOptionsList" class="space-y-1.5 pl-2 text-slate-600">
              <!-- Options populated dynamically -->
            </div>
          </div>
        </div>

        <!-- Generated Sections Preview Grid (Revealed at finish) -->
        <div id="genSectionsGrid" class="hidden space-y-2 pt-1">
          <span class="text-xs font-bold text-slate-800 block">Synthesized Assessment Blueprint:</span>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            
            <div class="p-3 rounded-xl border border-blue-200 bg-blue-50/50 space-y-1">
              <span class="text-[10px] font-bold text-[#107acc] uppercase block">SECTION 1</span>
              <span class="font-bold text-slate-800 block">Hardware Diagnostics</span>
              <span class="text-[11px] text-slate-500 block">10 MCQs • 20 Marks</span>
            </div>

            <div class="p-3 rounded-xl border border-blue-200 bg-blue-50/50 space-y-1">
              <span class="text-[10px] font-bold text-[#107acc] uppercase block">SECTION 2</span>
              <span class="font-bold text-slate-800 block">Network & Windows AD</span>
              <span class="text-[11px] text-slate-500 block">10 MCQs • 20 Marks</span>
            </div>

            <div class="p-3 rounded-xl border border-purple-200 bg-purple-50/50 space-y-1">
              <span class="text-[10px] font-bold text-purple-700 uppercase block">SECTION 3 (DWAANI)</span>
              <span class="font-bold text-slate-800 block">Live Voice Scenarios</span>
              <span class="text-[11px] text-slate-500 block">5 Voice Prompts • 10 Marks</span>
            </div>

          </div>
        </div>

      </div>

      <!-- Modal Footer -->
      <div class="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <button onclick="retriggerTestGenerate()" class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
          Regenerate
        </button>
        <div class="flex items-center gap-2">
          <button onclick="closeTestGenerateModal()" class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition">
            Close
          </button>
          <button id="btnApplyGeneratedTest" onclick="applyGeneratedTestBlueprint()" class="px-5 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5 opacity-50 cursor-not-allowed" disabled>
            <span>Apply Blueprint & View Questions ➔</span>
          </button>
        </div>
      </div>

    </div>
  </div>

  <!-- Client-side animation controllers -->
  <script>
    // ==========================================
    // INTAKE TAB SWITCHER (JOB LINK VS RESUME)
    // ==========================================
    function switchIntakeTab(tab) {
      const btnLink = document.getElementById('tabBtn-jobLink');
      const btnResume = document.getElementById('tabBtn-resumeUpload');
      const contentLink = document.getElementById('tabContent-jobLink');
      const contentResume = document.getElementById('tabContent-resume');

      if (tab === 'link') {
        btnLink.className = 'px-4 py-1.5 rounded-lg bg-[#107acc] text-white text-xs font-bold transition shadow-xs';
        btnResume.className = 'px-4 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:text-[#107acc] text-xs font-bold transition';
        contentLink.classList.remove('hidden');
        contentResume.classList.add('hidden');
      } else {
        btnResume.className = 'px-4 py-1.5 rounded-lg bg-[#107acc] text-white text-xs font-bold transition shadow-xs';
        btnLink.className = 'px-4 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:text-[#107acc] text-xs font-bold transition';
        contentResume.classList.remove('hidden');
        contentLink.classList.add('hidden');
      }
    }

    // ==========================================
    // IN-PAGE RESUME SCAN ANIMATION
    // ==========================================
    function triggerInPageResumeScan(filename, sizeMb) {
      const card = document.getElementById('inPageScanCard');
      const bar = document.getElementById('inPageProgressBar');
      const pct = document.getElementById('inPagePercent');
      const status = document.getElementById('inPageFileStatus');
      const badges = document.getElementById('inPageExtractedBadges');
      const nameEl = document.getElementById('inPageFileName');

      if (nameEl) nameEl.textContent = filename;
      card.classList.remove('hidden');
      badges.classList.add('hidden');
      bar.style.width = '0%';
      pct.textContent = '0%';
      status.textContent = 'Uploading ' + filename + ' (' + sizeMb + ' MB)...';

      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        if (progress > 100) progress = 100;
        bar.style.width = progress + '%';
        pct.textContent = progress + '%';

        if (progress === 30) {
          status.textContent = 'Executing Neural OCR text extraction...';
        } else if (progress === 60) {
          status.textContent = 'Identifying domain skills & years of experience...';
        } else if (progress === 90) {
          status.textContent = 'Mapping competencies to assessment blueprint...';
        } else if (progress === 100) {
          clearInterval(interval);
          status.textContent = 'Parsing complete! Auto-filled test parameters.';
          badges.classList.remove('hidden');
        }
      }, 100);
    }

    // ==========================================
    // MODAL 1: RESUME UPLOAD & PARSING MODAL
    // ==========================================
    function openResumeUploadModal() {
      const m = document.getElementById('modal-resume-parser');
      m.classList.remove('hidden');
      resetResumeModal();
    }

    function closeResumeUploadModal() {
      document.getElementById('modal-resume-parser').classList.add('hidden');
    }

    function resetResumeModal() {
      document.getElementById('resumeDropArea').classList.remove('hidden');
      document.getElementById('resumeScanningArea').classList.add('hidden');
      document.getElementById('scanResultsArea').classList.add('hidden');
      const bar = document.getElementById('scanProgressBar');
      if (bar) bar.style.width = '0%';
      const pct = document.getElementById('scanPercentage');
      if (pct) pct.textContent = '0%';
      const circle = document.getElementById('matchScoreCircle');
      if (circle) circle.style.strokeDashoffset = '125.6';
    }

    function startResumeAnimation(filename, sizeMb) {
      document.getElementById('resumeDropArea').classList.add('hidden');
      document.getElementById('resumeScanningArea').classList.remove('hidden');
      document.getElementById('scanFileName').textContent = filename;
      document.getElementById('scanFileSize').textContent = sizeMb + ' MB • Uploaded just now';
      
      const bar = document.getElementById('scanProgressBar');
      const pct = document.getElementById('scanPercentage');
      const logArea = document.getElementById('scanLogArea');
      const stepBadge = document.getElementById('scanStepBadge');
      const resultsArea = document.getElementById('scanResultsArea');
      const scoreCircle = document.getElementById('matchScoreCircle');
      const scoreText = document.getElementById('matchScoreText');

      logArea.innerHTML = '<div>[0.10s] Ingesting binary document payload (' + sizeMb + ' MB)...</div>';

      let p = 0;
      const timer = setInterval(() => {
        p += 5;
        if (p > 100) p = 100;
        bar.style.width = p + '%';
        pct.textContent = p + '%';

        if (p === 20) {
          stepBadge.textContent = 'STAGE 2: OCR TEXT ANALYSIS';
          logArea.innerHTML += '<div>[0.45s] Text layer verified: 4,120 clean characters parsed.</div>';
          logArea.scrollTop = logArea.scrollHeight;
        } else if (p === 45) {
          stepBadge.textContent = 'STAGE 3: EXTRACTING ENTITIES';
          logArea.innerHTML += '<div>[0.92s] Identified Candidate: Kalyani Sundaram (kalyani@gaconsulting.in)</div>';
          logArea.innerHTML += '<div>[1.15s] Experience confirmed: 5.5 Years @ WFM Enterprise IT</div>';
          logArea.scrollTop = logArea.scrollHeight;
        } else if (p === 75) {
          stepBadge.textContent = 'STAGE 4: BENCHMARK ROLE FIT';
          logArea.innerHTML += '<div>[1.65s] Benchmarking against "Hardware Support (Tier 1)" matrix...</div>';
          logArea.scrollTop = logArea.scrollHeight;
        } else if (p === 100) {
          clearInterval(timer);
          stepBadge.textContent = 'STAGE 5: COMPLETE';
          logArea.innerHTML += '<div>[2.10s] Fit score calibrated at 89%. Profile ready for test allocation.</div>';
          logArea.scrollTop = logArea.scrollHeight;
          resultsArea.classList.remove('hidden');

          // Animate circular match gauge (89% -> stroke-dashoffset = 125.6 * (1 - 0.89) = 13.8)
          setTimeout(() => {
            if (scoreCircle) scoreCircle.style.strokeDashoffset = '13.8';
            if (scoreText) scoreText.textContent = '89%';
          }, 150);
        }
      }, 70);
    }

    function addCandidateToRosterFromResume() {
      alert('Candidate "Kalyani Sundaram" successfully added to the candidate talent pool with an 89% benchmark fit score!');
      closeResumeUploadModal();
      switchScreen('candidates');
    }

    // ==========================================
    // MODAL 2: AI TEST GENERATOR ENGINE
    // ==========================================
    function openTestGenerateModal() {
      const m = document.getElementById('modal-test-generator');
      m.classList.remove('hidden');
      startTestGenerateAnimation();
    }

    function closeTestGenerateModal() {
      document.getElementById('modal-test-generator').classList.add('hidden');
    }

    function retriggerTestGenerate() {
      startTestGenerateAnimation();
    }

    function startTestGenerateAnimation() {
      const bar = document.getElementById('genProgressBar');
      const statusText = document.getElementById('genStatusText');
      const countEl = document.getElementById('genQuestionsCount');
      const questionText = document.getElementById('genQuestionText');
      const optionsList = document.getElementById('genOptionsList');
      const sectionTag = document.getElementById('genSectionTag');
      const sectionsGrid = document.getElementById('genSectionsGrid');
      const applyBtn = document.getElementById('btnApplyGeneratedTest');

      // Reset
      bar.style.width = '5%';
      countEl.textContent = 'Questions: 0 / 25';
      sectionsGrid.classList.add('hidden');
      applyBtn.disabled = true;
      applyBtn.className = 'px-5 py-2 rounded-xl bg-[#107acc] text-white text-xs font-bold transition shadow-xs opacity-50 cursor-not-allowed';

      // Reset node styles
      for (let n = 1; n <= 4; n++) {
        const el = document.getElementById('genNode-' + n);
        const icon = document.getElementById('nodeIcon-' + n);
        if (n === 1) {
          el.className = 'p-2.5 rounded-xl border border-[#107acc] bg-[#EBF5FC] text-[#107acc] font-bold transition';
          icon.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-[#107acc] text-white text-[10px] flex items-center justify-center';
          icon.textContent = '1';
        } else {
          el.className = 'p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-400 font-semibold transition';
          icon.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-slate-200 text-slate-600 text-[10px] flex items-center justify-center';
          icon.textContent = n;
        }
      }

      // Step 1: Role analysis
      statusText.innerHTML = '<span class="w-2.5 h-2.5 rounded-full bg-[#107acc] animate-ping"></span> Analyzing role taxonomy: "Lead IT Support Engineer"...';
      questionText.textContent = 'Extracting Bloom\\'s cognitive taxonomy standards for Hardware Tier-1 & Tier-2 competencies...';
      optionsList.innerHTML = '<div class="text-slate-400">Parsing 24 core knowledge dimensions...</div>';

      // Step 2 at 1.2s
      setTimeout(() => {
        bar.style.width = '30%';
        const n1 = document.getElementById('genNode-1');
        const i1 = document.getElementById('nodeIcon-1');
        i1.innerHTML = '✓';
        i1.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center';
        
        const n2 = document.getElementById('genNode-2');
        const i2 = document.getElementById('nodeIcon-2');
        n2.className = 'p-2.5 rounded-xl border border-[#107acc] bg-[#EBF5FC] text-[#107acc] font-bold transition';
        i2.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-[#107acc] text-white text-[10px] flex items-center justify-center';

        statusText.innerHTML = '<span class="w-2.5 h-2.5 rounded-full bg-[#107acc] animate-ping"></span> Formulating 3 section blueprints & weightages...';
        sectionTag.textContent = 'BLUEPRINT CALIBRATION';
        questionText.textContent = 'Partitioning assessment into: Section 1 (Hardware), Section 2 (Network/AD), Section 3 (Dwaani Voice Scenarios).';
        optionsList.innerHTML = 
          '<div>• Section 1 Weight: 40% (10 MCQs)</div>' +
          '<div>• Section 2 Weight: 40% (10 MCQs)</div>' +
          '<div>• Section 3 Dwaani AI Voice: 20% (5 Audio Prompts)</div>';
      }, 1200);

      // Step 3 at 2.4s: Question Synth
      setTimeout(() => {
        bar.style.width = '65%';
        const i2 = document.getElementById('nodeIcon-2');
        i2.innerHTML = '✓';
        i2.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center';
        
        const n3 = document.getElementById('genNode-3');
        const i3 = document.getElementById('nodeIcon-3');
        n3.className = 'p-2.5 rounded-xl border border-[#107acc] bg-[#EBF5FC] text-[#107acc] font-bold transition';
        i3.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-[#107acc] text-white text-[10px] flex items-center justify-center';

        statusText.innerHTML = '<span class="w-2.5 h-2.5 rounded-full bg-[#107acc] animate-ping"></span> Synthesizing adaptive question pool...';
        sectionTag.textContent = 'SECTION 1: HARDWARE DIAGNOSTICS';
        questionText.textContent = 'Q12. When a workstation experiences intermittent kernel panics accompanied by memory register parity errors, which diagnostic methodology isolates faulty DIMM banks most accurately?';
        optionsList.innerHTML = 
          '<div class="p-1 rounded bg-slate-50">[A] Run MemTest86 sequentially per single memory socket</div>' +
          '<div class="p-1 rounded bg-slate-50">[B] Re-flash motherboard CMOS firmware</div>' +
          '<div class="p-1 rounded bg-slate-50">[C] Increase thermal throttling thresholds</div>' +
          '<div class="p-1 rounded bg-slate-50">[D] Re-seat hard drive SATA connectors</div>';

        // Fast counter animation
        let q = 0;
        const qTimer = setInterval(() => {
          q += 3;
          if (q >= 20) {
            q = 20;
            clearInterval(qTimer);
          }
          countEl.textContent = 'Questions: ' + q + ' / 25';
        }, 120);
      }, 2500);

      // Step 4 at 3.8s: Dwaani Voice rubrics
      setTimeout(() => {
        bar.style.width = '90%';
        const i3 = document.getElementById('nodeIcon-3');
        i3.innerHTML = '✓';
        i3.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center';
        
        const n4 = document.getElementById('genNode-4');
        const i4 = document.getElementById('nodeIcon-4');
        n4.className = 'p-2.5 rounded-xl border border-[#107acc] bg-[#EBF5FC] text-[#107acc] font-bold transition';
        i4.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-[#107acc] text-white text-[10px] flex items-center justify-center';

        statusText.innerHTML = '<span class="w-2.5 h-2.5 rounded-full bg-purple-600 animate-ping"></span> Calibrating Dwaani AI Voice Interview scoring rubrics...';
        sectionTag.textContent = 'DWAANI AI VOICE SYNTHESIS';
        questionText.textContent = 'Voice Prompt #1: "Describe a scenario where a high-severity server outage occurred during your shift. How did you prioritize stakeholder communication vs triage?"';
        optionsList.innerHTML = 
          '<div class="text-purple-700 font-semibold">• Speech Cadence & Fluency Rubric (Weight: 30%)</div>' +
          '<div class="text-purple-700 font-semibold">• Technical Resolution Accuracy (Weight: 50%)</div>' +
          '<div class="text-purple-700 font-semibold">• Stress Resilience & Composure (Weight: 20%)</div>';
        countEl.textContent = 'Questions: 25 / 25';
      }, 3800);

      // Step 5 at 4.8s: Complete!
      setTimeout(() => {
        bar.style.width = '100%';
        const i4 = document.getElementById('nodeIcon-4');
        i4.innerHTML = '✓';
        i4.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center';

        statusText.innerHTML = '<span class="text-emerald-600 font-bold">✓ Generation Complete! 25 Questions Formulated.</span>';
        sectionsGrid.classList.remove('hidden');
        applyBtn.disabled = false;
        applyBtn.className = 'px-5 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5 cursor-pointer';
      }, 4800);
    }

    function applyGeneratedTestBlueprint() {
      closeTestGenerateModal();
      switchScreen('test-create');
      setCreationStep(2);
      alert('AI assessment blueprint successfully loaded! 3 sections and 25 questions are now populated in your test creation workspace.');
    }
`;

content = content.replace('</body>\n</html>', modalsAndScript + '\n</body>\n</html>');

fs.writeFileSync('build_human_gradarena.js', content, 'utf8');
console.log('Successfully updated build_human_gradarena.js with Resume Upload Animations and AI Test Generator Engine!');
