const fs = require('fs');
const path = require('path');

const newStudioHtml = `
      <!-- ============================================================ -->
      <!-- SCREEN 4: ASSESSMENT & INTERVIEW ARCHITECTURE STUDIO        -->
      <!-- ============================================================ -->
      <div id="screen-test-create" class="screen-view hidden space-y-6">
        
        <!-- Studio Header & Unified Navigation Rail -->
        <div class="bg-white p-6 rounded-2xl border border-pearl-200/90 shadow-card-lux">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-pearl-200/80">
            <div>
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h2 class="text-base font-extrabold text-slate-900 tracking-tight">Assessment & Interview Architecture Studio</h2>
                  <p class="text-xs text-slate-500 mt-0.5">Orchestrate multi-modal screening funnels: proctored technical evaluations, conversational voice AI, and resume ATS calibration.</p>
                </div>
              </div>
            </div>

            <!-- Header Quick Actions -->
            <div class="flex items-center gap-2.5 self-start lg:self-auto">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/80">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Draft • Auto-saved
              </span>
              <button onclick="previewCandidatePortal()" class="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-semibold transition flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                Candidate Preview
              </button>
              <button onclick="saveAndActivateWorkflow()" class="px-4 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                Deploy Campaign
              </button>
            </div>
          </div>

          <!-- Studio Segmented Tabs (Fluid Workspace - Not rigid steps) -->
          <div class="flex items-center gap-2 pt-4 overflow-x-auto no-scrollbar">
            <button onclick="switchStudioTab('pipeline')" id="tab-nav-pipeline" class="studio-tab-btn flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition bg-slate-900 text-white shadow-xs">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              <span>1. Pipeline & Gating</span>
            </button>

            <button onclick="switchStudioTab('builder')" id="tab-nav-builder" class="studio-tab-btn flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              <span>2. GradArena Test Builder</span>
              <span class="px-1.5 py-0.2 rounded text-[10px] font-mono bg-slate-100 text-slate-600 font-bold">16 Qs</span>
            </button>

            <button onclick="switchStudioTab('resumes')" id="tab-nav-resumes" class="studio-tab-btn flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
              <span>3. Resume Screening & AI ATS</span>
              <span class="px-1.5 py-0.2 rounded text-[10px] font-mono bg-emerald-50 text-emerald-700 font-bold">12 Ingested</span>
            </button>

            <button onclick="switchStudioTab('proctor')" id="tab-nav-proctor" class="studio-tab-btn flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>4. Proctoring & Security</span>
              <span class="px-1.5 py-0.2 rounded text-[10px] font-mono bg-slate-100 text-slate-600">Dual-Cam</span>
            </button>

            <button onclick="switchStudioTab('blueprint')" id="tab-nav-blueprint" class="studio-tab-btn flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>5. Review & Deploy</span>
            </button>
          </div>
        </div>

        <!-- ============================================================ -->
        <!-- TAB 1: WORKFLOW PIPELINE & GATING                           -->
        <!-- ============================================================ -->
        <div id="studio-pane-pipeline" class="studio-pane space-y-6">
          
          <!-- Campaign Scope & Job Details -->
          <div class="bg-white p-6 rounded-2xl border border-pearl-200/90 shadow-card-lux space-y-4">
            <div class="flex items-center justify-between border-b border-pearl-200/80 pb-3">
              <div>
                <h3 class="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider">1. Assessment Requisition Scope</h3>
                <p class="text-xs text-slate-500 mt-0.5">Define campaign parameters and associated hiring entity</p>
              </div>
              <span class="text-[11px] font-mono font-medium text-slate-400">REQ-2026-CLOUD-994</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1.5">Assessment Workflow Title *</label>
                <input id="workflowTitleInput" type="text" value="Senior Java & Distributed Cloud Architect" class="w-full px-3.5 py-2 text-xs bg-slate-50/70 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-slate-400 transition font-medium text-slate-900">
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1.5">Hiring Enterprise Tenant *</label>
                <select class="w-full px-3.5 py-2 text-xs bg-slate-50/70 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-slate-400 transition text-slate-800 font-medium">
                  <option selected>Capgemini GCC - Hyderabad</option>
                  <option>Invesco Enterprise Hub</option>
                  <option>Deloitte USI Tech Practice</option>
                  <option>Standard Chartered Global Business</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1.5">Target Engineering Stream</label>
                <input type="text" value="Platform Engineering & Microservices" class="w-full px-3.5 py-2 text-xs bg-slate-50/70 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-slate-400 transition text-slate-900">
              </div>
            </div>
          </div>

          <!-- Stage Selection: Whisper-Light Refined Surfaces (No Heavy Colored Strokes!) -->
          <div class="bg-white p-6 rounded-2xl border border-pearl-200/90 shadow-card-lux space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-pearl-200/80 pb-3">
              <div>
                <h3 class="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider">2. Multi-Stage Pipeline Composition</h3>
                <p class="text-xs text-slate-500 mt-0.5">Select and configure the assessment components to execute in this hiring funnel.</p>
              </div>
              <span id="workflowTypeBadge" class="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200">
                Combined 2-Stage Funnel
              </span>
            </div>

            <!-- Two Subtle Stage Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              
              <!-- STAGE CARD 1: DWAANI AI INTERVIEW -->
              <div id="card-stage-dwaani" class="p-5 rounded-2xl border border-slate-200/90 bg-white shadow-2xs space-y-4 transition-all">
                <div class="flex items-start justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-2xs shrink-0">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/>
                      </svg>
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <h4 class="text-xs font-bold text-slate-900">Dwaani AI Voice Interview</h4>
                        <span class="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-slate-100 text-slate-700 rounded">AI Screening</span>
                      </div>
                      <p class="text-[11px] text-slate-500 mt-0.5">Real-time conversational voice interview with adaptive probing & 3D scoring</p>
                    </div>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer shrink-0">
                    <input type="checkbox" id="check-stage-dwaani" checked onchange="toggleStage('dwaani')" class="sr-only peer">
                    <div class="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-slate-900"></div>
                  </label>
                </div>

                <!-- Source Switcher -->
                <div id="dwaani-source-controls" class="p-3.5 rounded-xl bg-slate-50/60 border border-slate-200/70 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold text-slate-500 uppercase font-mono tracking-wider">Interview Source:</span>
                    <span class="text-[10px] font-mono text-slate-400">Groq Llama-3 Engine</span>
                  </div>
                  <div class="flex items-center gap-4 text-xs font-medium text-slate-800">
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="dwaani_mode" value="new" checked onchange="setStageMode('dwaani', 'new')" class="accent-slate-900">
                      <span>Create New AI Interview</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="dwaani_mode" value="existing" onchange="setStageMode('dwaani', 'existing')" class="accent-slate-900">
                      <span>Select Existing Library</span>
                    </label>
                  </div>

                  <div id="dwaani-existing-select" class="hidden pt-1">
                    <select id="dwaaniExistingId" class="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg outline-none focus:border-slate-400 text-slate-800">
                      <option value="INT-201" selected>INT-201: Distributed Systems & Saga Pattern Voice Screen (4 Questions • 25m)</option>
                      <option value="INT-204">INT-204: Senior Cloud Architect Resilience & Kafka (5 Questions • 30m)</option>
                      <option value="INT-208">INT-208: Microservices Concurrency & Security Voice Screen (4 Questions • 20m)</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- STAGE CARD 2: GRADARENA ASSESSMENT -->
              <div id="card-stage-gradarena" class="p-5 rounded-2xl border border-slate-200/90 bg-white shadow-2xs space-y-4 transition-all">
                <div class="flex items-start justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-2xs shrink-0">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5 4.5-1.35 8-6.25 8-11.5V6l-8-4z"/>
                        <circle cx="12" cy="11" r="2.5"/>
                      </svg>
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <h4 class="text-xs font-bold text-slate-900">GradArena Proctored Assessment</h4>
                        <span class="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-slate-100 text-slate-700 rounded">Proctored Code</span>
                      </div>
                      <p class="text-[11px] text-slate-500 mt-0.5">MCQs, algorithmic coding sandbox & dual-camera live proctoring</p>
                    </div>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer shrink-0">
                    <input type="checkbox" id="check-stage-gradarena" checked onchange="toggleStage('gradarena')" class="sr-only peer">
                    <div class="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-slate-900"></div>
                  </label>
                </div>

                <!-- Source Switcher -->
                <div id="gradarena-source-controls" class="p-3.5 rounded-xl bg-slate-50/60 border border-slate-200/70 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold text-slate-500 uppercase font-mono tracking-wider">Assessment Source:</span>
                    <span class="text-[10px] font-mono text-slate-400">Sandbox Sandbox & MCQ</span>
                  </div>
                  <div class="flex items-center gap-4 text-xs font-medium text-slate-800">
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="gradarena_mode" value="new" checked onchange="setStageMode('gradarena', 'new')" class="accent-slate-900">
                      <span>Create New Assessment</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="gradarena_mode" value="existing" onchange="setStageMode('gradarena', 'existing')" class="accent-slate-900">
                      <span>Select Existing Library</span>
                    </label>
                  </div>

                  <div id="gradarena-existing-select" class="hidden pt-1">
                    <select id="gradArenaExistingId" class="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg outline-none focus:border-slate-400 text-slate-800">
                      <option value="TST-8841">TST-8841: Lead Python Backend Architect (15 MCQ + 1 Coding • 60m)</option>
                      <option value="TST-8842" selected>TST-8842: Senior Java Microservices Architect (15 MCQ + 1 Coding • 60m)</option>
                      <option value="TST-8849">TST-8849: Cloud Native Kubernetes & Docker Fundamentals (20 MCQ • 45m)</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- Sequence Ordering & Flow Execution -->
          <div id="section-sequence-config" class="bg-white p-6 rounded-2xl border border-pearl-200/90 shadow-card-lux space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-pearl-200/80 pb-3">
              <div>
                <h3 class="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider">3. Execution Sequence & Ordering</h3>
                <p class="text-xs text-slate-500 mt-0.5">Determine which assessment runs first and how candidates unlock the next stage</p>
              </div>
              <button onclick="swapSequence()" class="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-semibold transition flex items-center gap-2">
                <svg class="w-3.5 h-3.5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 16V4M7 4L3 8M7 4L11 8M17 8V20M17 20L21 16M17 20L13 16"/></svg>
                ⇄ Swap Execution Sequence
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Choice A -->
              <label id="label-seq-dwaani-first" class="p-4 rounded-xl border border-slate-300 bg-slate-50/50 flex items-start gap-3.5 cursor-pointer transition">
                <input type="radio" name="flow_sequence" value="dwaani_first" checked onchange="setSequence('dwaani_first')" class="mt-1 accent-slate-900">
                <div>
                  <div class="text-xs font-bold text-slate-900 flex items-center gap-2">
                    <span>Example A: Dwaani AI Interview → GradArena Assessment</span>
                    <span class="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-slate-900 text-white">Voice Screen First</span>
                  </div>
                  <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">
                    Candidates complete the Dwaani AI conversational voice interview first. Candidates who meet the minimum passing threshold (e.g. 70%) unlock the GradArena proctored technical test.
                  </p>
                </div>
              </label>

              <!-- Choice B -->
              <label id="label-seq-gradarena-first" class="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 flex items-start gap-3.5 cursor-pointer transition">
                <input type="radio" name="flow_sequence" value="gradarena_first" onchange="setSequence('gradarena_first')" class="mt-1 accent-slate-900">
                <div>
                  <div class="text-xs font-bold text-slate-900 flex items-center gap-2">
                    <span>Example B: GradArena Assessment → Dwaani AI Interview</span>
                    <span class="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-slate-100 text-slate-700">Code Test First</span>
                  </div>
                  <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">
                    Candidates take the GradArena technical assessment (MCQ/Coding) first. Only qualifiers who pass (e.g. 60%) advance to the Dwaani conversational voice interview.
                  </p>
                </div>
              </label>
            </div>

            <!-- Architecture Diagram -->
            <div class="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80">
              <div class="text-[10px] font-mono font-bold uppercase text-slate-500 mb-2">Live Candidate Progression Pipeline:</div>
              <div id="visual-flow-diagram" class="flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
                <!-- Dynamically populated via JS -->
              </div>
            </div>
          </div>

          <!-- Pass Thresholds & Conditional Gating Rules -->
          <div class="bg-white p-6 rounded-2xl border border-pearl-200/90 shadow-card-lux space-y-4">
            <div class="flex items-center justify-between border-b border-pearl-200/80 pb-3">
              <div>
                <h3 class="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider">4. Pass Thresholds & Progression Gates</h3>
                <p class="text-xs text-slate-500 mt-0.5">Define qualification cutoffs and automated failure dropoff rules for each stage.</p>
              </div>
              <span class="text-[11px] font-mono text-slate-500">Autonomous Gate Evaluation</span>
            </div>

            <!-- Threshold Sliders Container -->
            <div id="stage-thresholds-container" class="space-y-4">
              <!-- Dynamically rendered via JS -->
            </div>
          </div>

          <!-- Tab Navigation Footer -->
          <div class="flex items-center justify-between bg-white p-5 rounded-2xl border border-pearl-200/90 shadow-card-lux">
            <button onclick="switchScreen('tests')" class="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition">Cancel</button>
            <button onclick="switchStudioTab('builder')" class="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition flex items-center gap-2">
              Next: Configure GradArena Assessment Questions →
            </button>
          </div>

        </div>

        <!-- ============================================================ -->
        <!-- TAB 2: GRADARENA TEST BUILDER (DEEP TEST & QUESTION CREATION) -->
        <!-- ============================================================ -->
        <div id="studio-pane-builder" class="studio-pane hidden space-y-6">
          
          <!-- Test Parameters & Specifications -->
          <div class="bg-white p-6 rounded-2xl border border-pearl-200/90 shadow-card-lux space-y-4">
            <div class="flex items-center justify-between border-b border-pearl-200/80 pb-3">
              <div>
                <h3 class="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider">GradArena Assessment Parameters</h3>
                <p class="text-xs text-slate-500 mt-0.5">Configure test duration, marks allocation, negative marking, and navigation modes</p>
              </div>
              <span class="px-2 py-0.5 text-[10px] font-mono font-bold bg-slate-100 text-slate-700 rounded">ID: TST-8842</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1.5">Assessment Title</label>
                <input type="text" id="builderTestTitle" value="Senior Java Microservices & Cloud Assessment" class="w-full px-3 py-2 text-xs bg-slate-50/70 border border-slate-200 rounded-lg outline-none focus:bg-white focus:border-slate-400 font-medium text-slate-900">
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1.5">Total Duration</label>
                <div class="flex items-center gap-2">
                  <input type="number" id="builderDuration" value="60" class="w-full px-3 py-2 text-xs bg-slate-50/70 border border-slate-200 rounded-lg outline-none focus:bg-white focus:border-slate-400 font-mono text-slate-900">
                  <span class="text-xs font-medium text-slate-500">Mins</span>
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1.5">Total Marks</label>
                <input type="number" id="builderTotalMarks" value="100" class="w-full px-3 py-2 text-xs bg-slate-50/70 border border-slate-200 rounded-lg outline-none focus:bg-white focus:border-slate-400 font-mono text-slate-900">
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1.5">Negative Marking</label>
                <select class="w-full px-3 py-2 text-xs bg-slate-50/70 border border-slate-200 rounded-lg outline-none focus:bg-white focus:border-slate-400 text-slate-800">
                  <option selected>Enabled (-0.5 per wrong MCQ)</option>
                  <option>Strict (-1.0 per wrong MCQ)</option>
                  <option>Disabled (0 penalty)</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Section Breakdown Manager -->
          <div class="bg-white p-6 rounded-2xl border border-pearl-200/90 shadow-card-lux space-y-4">
            <div class="flex items-center justify-between border-b border-pearl-200/80 pb-3">
              <div>
                <h3 class="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider">Test Sections & Question Breakdown</h3>
                <p class="text-xs text-slate-500 mt-0.5">Divide test into structured modules with independent time limits and question pools</p>
              </div>
              <button onclick="alert('Added Section 4: Cloud DevOps & Containers to Assessment.')" class="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-semibold transition flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                + Add Section
              </button>
            </div>

            <!-- Section Pill Selector -->
            <div class="flex items-center gap-2 border-b border-slate-100 pb-3">
              <button onclick="switchTestSection('mcq')" id="btn-sec-mcq" class="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-900 text-white shadow-2xs">
                Section 1: Architecture & Concurrency MCQs (15 Qs • 30 Marks)
              </button>
              <button onclick="switchTestSection('coding')" id="btn-sec-coding" class="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition">
                Section 2: Algorithmic Coding Challenge (1 Problem • 40 Marks)
              </button>
              <button onclick="switchTestSection('essay')" id="btn-sec-essay" class="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition">
                Section 3: System Design & Scalability (2 Qs • 30 Marks)
              </button>
            </div>

            <!-- SECTION SUBPANE 1: MCQ BUILDER -->
            <div id="subpane-sec-mcq" class="space-y-4 pt-1">
              <div class="flex items-center justify-between">
                <div class="text-xs font-bold text-slate-800 flex items-center gap-2">
                  <span>Question 1 of 15 (Single Choice MCQ)</span>
                  <span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">+2.0 / -0.5 Marks</span>
                </div>
                <div class="flex items-center gap-2">
                  <button onclick="alert('Question cloned as Q2.')" class="px-2.5 py-1 text-xs text-slate-600 hover:text-slate-900 border border-slate-200 rounded-md">Duplicate</button>
                  <button onclick="alert('Question removed.')" class="px-2.5 py-1 text-xs text-rose-600 hover:text-rose-800 border border-rose-200 rounded-md">Delete</button>
                </div>
              </div>

              <!-- Question Statement Textarea -->
              <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700">Question Prompt</label>
                <textarea rows="3" class="w-full p-3 text-xs bg-slate-50/70 border border-slate-200 rounded-lg outline-none focus:bg-white focus:border-slate-400 font-mono text-slate-800 leading-relaxed">In an Apache Kafka consumer group processing microservices events, which partition assignment strategy guarantees that existing consumers retain their partition assignments during an incremental group rebalance, avoiding full stop-the-world rebalance storms?</textarea>
              </div>

              <!-- Options Grid -->
              <div class="space-y-2.5 pt-1">
                <div class="text-xs font-semibold text-slate-700">Options (Select radio button for Correct Answer):</div>
                
                <div class="flex items-center gap-3 p-2.5 rounded-lg bg-slate-50/60 border border-slate-200">
                  <input type="radio" name="mcq_q1_correct" value="A" class="accent-slate-900">
                  <span class="text-xs font-bold font-mono text-slate-600">A</span>
                  <input type="text" value="org.apache.kafka.clients.consumer.RangeAssignor" class="flex-1 text-xs bg-transparent outline-none text-slate-800">
                </div>

                <div class="flex items-center gap-3 p-2.5 rounded-lg bg-slate-50/60 border border-slate-200">
                  <input type="radio" name="mcq_q1_correct" value="B" class="accent-slate-900">
                  <span class="text-xs font-bold font-mono text-slate-600">B</span>
                  <input type="text" value="org.apache.kafka.clients.consumer.RoundRobinAssignor" class="flex-1 text-xs bg-transparent outline-none text-slate-800">
                </div>

                <div class="flex items-center gap-3 p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-200/80">
                  <input type="radio" name="mcq_q1_correct" value="C" checked class="accent-emerald-600">
                  <span class="text-xs font-bold font-mono text-emerald-800">C (Correct)</span>
                  <input type="text" value="org.apache.kafka.clients.consumer.CooperativeStickyAssignor" class="flex-1 text-xs bg-transparent outline-none font-semibold text-emerald-950">
                </div>

                <div class="flex items-center gap-3 p-2.5 rounded-lg bg-slate-50/60 border border-slate-200">
                  <input type="radio" name="mcq_q1_correct" value="D" class="accent-slate-900">
                  <span class="text-xs font-bold font-mono text-slate-600">D</span>
                  <input type="text" value="org.apache.kafka.clients.consumer.UniformStickyAssignor" class="flex-1 text-xs bg-transparent outline-none text-slate-800">
                </div>
              </div>

              <!-- Explanation -->
              <div class="p-3 bg-slate-50/80 rounded-lg border border-slate-200/80 text-xs space-y-1">
                <span class="font-bold text-slate-700">Explanation for Evaluator:</span>
                <p class="text-slate-600 text-[11px] leading-relaxed">
                  CooperativeStickyAssignor follows the cooperative rebalance protocol (KIP-429), reassigning only partitions that must move rather than revoking all partitions across the consumer group.
                </p>
              </div>

              <div class="pt-2 flex items-center justify-between border-t border-slate-100">
                <span class="text-xs text-slate-500 font-mono">14 more MCQs configured in this section</span>
                <button onclick="alert('New MCQ draft created.')" class="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold">+ Add Next MCQ</button>
              </div>
            </div>

            <!-- SECTION SUBPANE 2: CODING CHALLENGE BUILDER -->
            <div id="subpane-sec-coding" class="hidden space-y-4 pt-1">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="text-xs font-bold text-slate-900">Problem 1: Algorithmic Sandbox Challenge</h4>
                  <p class="text-[11px] text-slate-500">Live multi-language code compilation with automated test case evaluation</p>
                </div>
                <span class="px-2 py-0.5 text-[10px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200 rounded">40 Marks • Hard</span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div class="md:col-span-2 space-y-1.5">
                  <label class="block text-xs font-semibold text-slate-700">Problem Title</label>
                  <input type="text" value="Design a High-Throughput Concurrent Task Scheduler with Exponential Backoff" class="w-full px-3 py-2 text-xs bg-slate-50/70 border border-slate-200 rounded-lg outline-none font-semibold text-slate-900">
                </div>
                <div class="space-y-1.5">
                  <label class="block text-xs font-semibold text-slate-700">Allowed Languages</label>
                  <div class="text-[11px] font-mono p-2 bg-slate-50 rounded-lg border border-slate-200 text-slate-700 flex flex-wrap gap-1">
                    <span class="px-1.5 py-0.2 bg-white rounded border border-slate-200">Java 21</span>
                    <span class="px-1.5 py-0.2 bg-white rounded border border-slate-200">Python 3.12</span>
                    <span class="px-1.5 py-0.2 bg-white rounded border border-slate-200">Go 1.22</span>
                    <span class="px-1.5 py-0.2 bg-white rounded border border-slate-200">TypeScript</span>
                  </div>
                </div>
              </div>

              <!-- Problem Description -->
              <div class="space-y-1.5">
                <label class="block text-xs font-semibold text-slate-700">Problem Description & Constraints</label>
                <textarea rows="3" class="w-full p-3 text-xs bg-slate-50/70 border border-slate-200 rounded-lg outline-none font-mono text-slate-800 leading-relaxed">Implement class 'PriorityTaskScheduler' with methods: submitTask(id, priority, taskFn), pollNextTask(), and retryFailedTask(id). Must guarantee sub-millisecond thread safety under 32 concurrent worker threads without blocking high-priority queue starvation.</textarea>
              </div>

              <!-- Test Cases Builder -->
              <div class="space-y-2 pt-1">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-slate-800">Test Cases Suite (Grading Criteria):</span>
                  <button onclick="addTestCaseRow()" class="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1">+ Add Test Case</button>
                </div>

                <div class="overflow-x-auto rounded-xl border border-slate-200">
                  <table class="w-full text-left text-xs">
                    <thead class="bg-slate-50/80 text-[10px] font-mono font-bold text-slate-500 uppercase border-b border-slate-200">
                      <tr>
                        <th class="p-2.5">Case #</th>
                        <th class="p-2.5">Standard Input</th>
                        <th class="p-2.5">Expected Output</th>
                        <th class="p-2.5">Weight</th>
                        <th class="p-2.5">Visibility</th>
                        <th class="p-2.5 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody id="testCaseRowsContainer" class="divide-y divide-slate-100 font-mono text-[11px]">
                      <tr class="hover:bg-slate-50/50">
                        <td class="p-2.5 font-bold text-slate-800">TC-01</td>
                        <td class="p-2.5 text-slate-700">5 tasks: priorities [2, 10, 4, 10, 1]</td>
                        <td class="p-2.5 text-emerald-700 font-semibold">[10, 10, 4, 2, 1]</td>
                        <td class="p-2.5 text-slate-800">10 Marks</td>
                        <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[9px] bg-slate-100 text-slate-700">Public (Sample)</span></td>
                        <td class="p-2.5 text-right"><button class="text-slate-400 hover:text-slate-700">Edit</button></td>
                      </tr>
                      <tr class="hover:bg-slate-50/50">
                        <td class="p-2.5 font-bold text-slate-800">TC-02</td>
                        <td class="p-2.5 text-slate-700">Concurrent stress: 1,000 tasks across 16 threads</td>
                        <td class="p-2.5 text-emerald-700 font-semibold">1,000 processed, 0 dropped</td>
                        <td class="p-2.5 text-slate-800">15 Marks</td>
                        <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[9px] bg-amber-50 text-amber-800 border border-amber-200">Hidden (Stress)</span></td>
                        <td class="p-2.5 text-right"><button class="text-slate-400 hover:text-slate-700">Edit</button></td>
                      </tr>
                      <tr class="hover:bg-slate-50/50">
                        <td class="p-2.5 font-bold text-slate-800">TC-03</td>
                        <td class="p-2.5 text-slate-700">Exponential backoff retry: task fail 3x then succeed</td>
                        <td class="p-2.5 text-emerald-700 font-semibold">Delays: [100ms, 200ms, 400ms]</td>
                        <td class="p-2.5 text-slate-800">15 Marks</td>
                        <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[9px] bg-amber-50 text-amber-800 border border-amber-200">Hidden (Edge Case)</span></td>
                        <td class="p-2.5 text-right"><button class="text-slate-400 hover:text-slate-700">Edit</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- SECTION SUBPANE 3: SYSTEM DESIGN ESSAY -->
            <div id="subpane-sec-essay" class="hidden space-y-4 pt-1">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <span class="font-bold text-slate-800">Section 3: Architectural Design & Trade-Off Analysis</span>
                <p class="text-slate-600 leading-relaxed">
                  Candidate provides structured technical essays evaluated by AI on architectural coherence, database sharding strategies, and CAP theorem trade-offs.
                </p>
                <div class="pt-2 text-[11px] font-mono text-slate-500">
                  2 Prompts Configured • 30 Total Marks • Manual / AI Rubric Scoring
                </div>
              </div>
            </div>

          </div>

          <!-- AI Question Studio Generator Bar -->
          <div class="bg-white p-5 rounded-2xl border border-pearl-200/90 shadow-card-lux space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold text-slate-900 font-mono uppercase tracking-wider">AI Question Studio Generator</span>
                <span class="px-2 py-0.2 rounded text-[10px] font-mono bg-purple-50 text-purple-700 border border-purple-200 font-bold">Groq Llama-3</span>
              </div>
              <span class="text-[11px] text-slate-400">Generate fresh scenario-based questions from topic or JD</span>
            </div>

            <div class="flex items-center gap-2">
              <input type="text" id="aiGenPromptInput" placeholder="E.g. Generate 3 questions on Spring Cloud Resilience4j Circuit Breakers & fallback patterns" class="flex-1 px-3.5 py-2 text-xs bg-slate-50/70 border border-slate-200 rounded-lg outline-none focus:bg-white focus:border-slate-400 font-medium text-slate-900">
              <button onclick="triggerAiQuestionGeneration()" class="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-2xs transition flex items-center gap-2 shrink-0">
                <svg class="w-3.5 h-3.5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                ✨ Generate Questions
              </button>
            </div>
          </div>

          <!-- Tab Navigation Footer -->
          <div class="flex items-center justify-between bg-white p-5 rounded-2xl border border-pearl-200/90 shadow-card-lux">
            <button onclick="switchStudioTab('pipeline')" class="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition">← Back to Pipeline</button>
            <button onclick="switchStudioTab('resumes')" class="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition flex items-center gap-2">
              Next: Candidate Resumes & AI ATS Ingestion →
            </button>
          </div>

        </div>

        <!-- ============================================================ -->
        <!-- TAB 3: RESUME SCREENING & AI ATS INGESTION ("RESUME THING")  -->
        <!-- ============================================================ -->
        <div id="studio-pane-resumes" class="studio-pane hidden space-y-6">
          
          <!-- Job Description Context for ATS Matching -->
          <div class="bg-white p-6 rounded-2xl border border-pearl-200/90 shadow-card-lux space-y-4">
            <div class="flex items-center justify-between border-b border-pearl-200/80 pb-3">
              <div>
                <h3 class="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider">Target Job Description (ATS Semantic Anchor)</h3>
                <p class="text-xs text-slate-500 mt-0.5">Resumes uploaded below will be parsed and evaluated against this requisition anchor.</p>
              </div>
              <div class="flex items-center gap-2 text-[11px] font-mono text-slate-500">
                <span class="px-2 py-0.5 bg-slate-100 rounded">Skills (40%)</span>
                <span class="px-2 py-0.5 bg-slate-100 rounded">Exp (30%)</span>
                <span class="px-2 py-0.5 bg-slate-100 rounded">Arch (20%)</span>
                <span class="px-2 py-0.5 bg-slate-100 rounded">Edu (10%)</span>
              </div>
            </div>

            <textarea rows="3" class="w-full p-3 text-xs bg-slate-50/70 border border-slate-200 rounded-lg outline-none focus:bg-white focus:border-slate-400 font-mono text-slate-800 leading-relaxed">Role: Senior Java Microservices & Cloud Architect (5-8 Years). Mandatory Skills: Java 17/21, Spring Boot, Apache Kafka, Distributed Transactions (Saga), Kubernetes, AWS/Azure, Docker, Microservices Security, Redis. Experience designing high-volume reactive systems.</textarea>
          </div>

          <!-- Resume Upload Zone (Drag & Drop) -->
          <div class="bg-white p-6 rounded-2xl border border-pearl-200/90 shadow-card-lux space-y-4">
            <div class="flex items-center justify-between border-b border-pearl-200/80 pb-3">
              <div>
                <h3 class="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider">Resume Upload & Parsing Chamber</h3>
                <p class="text-xs text-slate-500 mt-0.5">Upload individual candidate resumes or bulk zip archives for automatic OCR & AI profile extraction</p>
              </div>
              <button onclick="simulateBulkIngestion()" class="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                ⚡ Ingest 4 Candidate Resumes
              </button>
            </div>

            <!-- Whisper-Light Dashed Dropzone -->
            <div class="border-2 border-dashed border-slate-200 hover:border-slate-400 bg-slate-50/50 rounded-2xl p-8 text-center transition-all cursor-pointer">
              <div class="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-2xs mx-auto flex items-center justify-center text-slate-600 mb-3">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
                </svg>
              </div>
              <div class="text-xs font-bold text-slate-800">Drag and drop candidate resumes here, or click to browse</div>
              <div class="text-[11px] text-slate-400 mt-1">Supports PDF, DOCX, TXT, or ZIP archive (up to 50MB per file)</div>
              <div class="pt-4 flex items-center justify-center gap-3">
                <button onclick="simulateBulkIngestion()" class="px-4 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold shadow-2xs hover:bg-slate-800 transition">Choose Files</button>
                <span class="text-xs text-slate-400 font-mono">or parse from ATS requisition</span>
              </div>
            </div>

            <!-- Dynamic Question Calibration Checkbox -->
            <div class="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3">
              <input type="checkbox" id="check-resume-calibration" checked class="mt-0.5 accent-slate-900 w-4 h-4 cursor-pointer">
              <div>
                <label for="check-resume-calibration" class="text-xs font-bold text-slate-900 cursor-pointer">
                  Enable Resume-Aware AI Question Calibration
                </label>
                <p class="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                  When enabled, Dwaani AI Interview and GradArena dynamically calibrate test questions to match each candidate's extracted projects, technologies, and skill gaps — eliminating generic questions.
                </p>
              </div>
            </div>
          </div>

          <!-- Parsed Candidates Table with ATS Scores & Interview Calibration -->
          <div class="bg-white p-6 rounded-2xl border border-pearl-200/90 shadow-card-lux space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-pearl-200/80 pb-3">
              <div>
                <h3 class="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider">Ingested Candidates & ATS Scoring (4 Applicants)</h3>
                <p class="text-xs text-slate-500 mt-0.5">Semantic alignment rating and customized AI interview focus angles</p>
              </div>
              <button onclick="dispatchInvitesToAll()" class="px-4 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition flex items-center gap-2 self-start sm:self-auto">
                <svg class="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Dispatch Magic Invites to All (4)
              </button>
            </div>

            <!-- Candidate ATS Table -->
            <div class="overflow-x-auto rounded-xl border border-slate-200">
              <table class="w-full text-left text-xs">
                <thead class="bg-slate-50/80 text-[10px] font-mono font-bold text-slate-500 uppercase border-b border-slate-200">
                  <tr>
                    <th class="p-3">Candidate</th>
                    <th class="p-3">Experience & Skills</th>
                    <th class="p-3">ATS Match %</th>
                    <th class="p-3">AI Dynamic Probing Angle</th>
                    <th class="p-3">Access Token</th>
                    <th class="p-3 text-right">Status / Action</th>
                  </tr>
                </thead>
                <tbody id="resumeCandidatesTable" class="divide-y divide-slate-100 text-slate-800">
                  <!-- Row 1: Aarav -->
                  <tr class="hover:bg-slate-50/50">
                    <td class="p-3">
                      <div class="font-bold text-slate-900">Aarav Mehta</div>
                      <div class="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                        <svg class="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>
                        aarav_mehta_cv.pdf
                      </div>
                    </td>
                    <td class="p-3">
                      <div class="text-xs font-medium text-slate-800">6.2 Years • Senior Backend</div>
                      <div class="flex flex-wrap gap-1 mt-1 text-[10px] font-mono">
                        <span class="px-1.5 py-0.2 bg-slate-100 text-slate-700 rounded">Java 21</span>
                        <span class="px-1.5 py-0.2 bg-slate-100 text-slate-700 rounded">Spring</span>
                        <span class="px-1.5 py-0.2 bg-slate-100 text-slate-700 rounded">Kafka</span>
                        <span class="px-1.5 py-0.2 bg-slate-100 text-slate-700 rounded">AWS</span>
                      </div>
                    </td>
                    <td class="p-3">
                      <div class="flex items-center gap-2">
                        <span class="font-mono font-bold text-emerald-700">88%</span>
                        <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">High Fit</span>
                      </div>
                      <div class="w-24 bg-slate-100 rounded-full h-1.5 mt-1">
                        <div class="bg-emerald-500 h-1.5 rounded-full" style="width: 88%"></div>
                      </div>
                    </td>
                    <td class="p-3 text-[11px] text-slate-600 max-w-xs leading-relaxed">
                      "Probe Saga compensation transactions & partition lag under Kafka 3.6 rebalancing."
                    </td>
                    <td class="p-3 font-mono text-[11px] text-slate-500">
                      c9a4-8f2e
                    </td>
                    <td class="p-3 text-right">
                      <button onclick="inviteCandidate('Aarav Mehta', 'c9a4-8f2e')" class="px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-semibold transition">
                        Send Invite
                      </button>
                    </td>
                  </tr>

                  <!-- Row 2: Priyanka -->
                  <tr class="hover:bg-slate-50/50">
                    <td class="p-3">
                      <div class="font-bold text-slate-900">Priyanka Rao</div>
                      <div class="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                        <svg class="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>
                        priyanka_rao_resume.docx
                      </div>
                    </td>
                    <td class="p-3">
                      <div class="text-xs font-medium text-slate-800">5.8 Years • Distributed Systems</div>
                      <div class="flex flex-wrap gap-1 mt-1 text-[10px] font-mono">
                        <span class="px-1.5 py-0.2 bg-slate-100 text-slate-700 rounded">Go</span>
                        <span class="px-1.5 py-0.2 bg-slate-100 text-slate-700 rounded">Java</span>
                        <span class="px-1.5 py-0.2 bg-slate-100 text-slate-700 rounded">K8s</span>
                        <span class="px-1.5 py-0.2 bg-slate-100 text-slate-700 rounded">gRPC</span>
                      </div>
                    </td>
                    <td class="p-3">
                      <div class="flex items-center gap-2">
                        <span class="font-mono font-bold text-emerald-700">91%</span>
                        <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">Exceptional</span>
                      </div>
                      <div class="w-24 bg-slate-100 rounded-full h-1.5 mt-1">
                        <div class="bg-emerald-500 h-1.5 rounded-full" style="width: 91%"></div>
                      </div>
                    </td>
                    <td class="p-3 text-[11px] text-slate-600 max-w-xs leading-relaxed">
                      "Probe multi-region failover replication, Raft consensus, and gRPC streaming."
                    </td>
                    <td class="p-3 font-mono text-[11px] text-slate-500">
                      7b31-e01d
                    </td>
                    <td class="p-3 text-right">
                      <span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                        Invited
                      </span>
                    </td>
                  </tr>

                  <!-- Row 3: Vikramaditya -->
                  <tr class="hover:bg-slate-50/50">
                    <td class="p-3">
                      <div class="font-bold text-slate-900">Vikramaditya Sen</div>
                      <div class="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                        <svg class="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>
                        vikram_sen_profile.pdf
                      </div>
                    </td>
                    <td class="p-3">
                      <div class="text-xs font-medium text-slate-800">4.1 Years • Python & Microservices</div>
                      <div class="flex flex-wrap gap-1 mt-1 text-[10px] font-mono">
                        <span class="px-1.5 py-0.2 bg-slate-100 text-slate-700 rounded">Python</span>
                        <span class="px-1.5 py-0.2 bg-slate-100 text-slate-700 rounded">FastAPI</span>
                        <span class="px-1.5 py-0.2 bg-slate-100 text-slate-700 rounded">Docker</span>
                      </div>
                    </td>
                    <td class="p-3">
                      <div class="flex items-center gap-2">
                        <span class="font-mono font-bold text-amber-700">64%</span>
                        <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-50 text-amber-800 border border-amber-200">Borderline</span>
                      </div>
                      <div class="w-24 bg-slate-100 rounded-full h-1.5 mt-1">
                        <div class="bg-amber-500 h-1.5 rounded-full" style="width: 64%"></div>
                      </div>
                    </td>
                    <td class="p-3 text-[11px] text-slate-600 max-w-xs leading-relaxed">
                      "Calibrate baseline microservices architecture & evaluate core Java proficiency."
                    </td>
                    <td class="p-3 font-mono text-[11px] text-slate-500">
                      4e29-9a1b
                    </td>
                    <td class="p-3 text-right">
                      <button onclick="alert('Vikramaditya Sen held in Recruiter Review queue.')" class="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold transition">
                        Hold Review
                      </button>
                    </td>
                  </tr>

                  <!-- Row 4: Sneha -->
                  <tr class="hover:bg-slate-50/50">
                    <td class="p-3">
                      <div class="font-bold text-slate-900">Sneha Kulkarni</div>
                      <div class="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                        <svg class="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>
                        sneha_kulkarni_resume.pdf
                      </div>
                    </td>
                    <td class="p-3">
                      <div class="text-xs font-medium text-slate-800">7.0 Years • Enterprise Java Lead</div>
                      <div class="flex flex-wrap gap-1 mt-1 text-[10px] font-mono">
                        <span class="px-1.5 py-0.2 bg-slate-100 text-slate-700 rounded">Java 17</span>
                        <span class="px-1.5 py-0.2 bg-slate-100 text-slate-700 rounded">Kafka</span>
                        <span class="px-1.5 py-0.2 bg-slate-100 text-slate-700 rounded">CQRS</span>
                        <span class="px-1.5 py-0.2 bg-slate-100 text-slate-700 rounded">K8s</span>
                      </div>
                    </td>
                    <td class="p-3">
                      <div class="flex items-center gap-2">
                        <span class="font-mono font-bold text-emerald-700">85%</span>
                        <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">High Fit</span>
                      </div>
                      <div class="w-24 bg-slate-100 rounded-full h-1.5 mt-1">
                        <div class="bg-emerald-500 h-1.5 rounded-full" style="width: 85%"></div>
                      </div>
                    </td>
                    <td class="p-3 text-[11px] text-slate-600 max-w-xs leading-relaxed">
                      "Probe Event Sourcing, CQRS read-model consistency, and distributed tracing."
                    </td>
                    <td class="p-3 font-mono text-[11px] text-slate-500">
                      2d18-3f5c
                    </td>
                    <td class="p-3 text-right">
                      <button onclick="inviteCandidate('Sneha Kulkarni', '2d18-3f5c')" class="px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-semibold transition">
                        Send Invite
                      </button>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>

          <!-- Tab Navigation Footer -->
          <div class="flex items-center justify-between bg-white p-5 rounded-2xl border border-pearl-200/90 shadow-card-lux">
            <button onclick="switchStudioTab('builder')" class="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition">← Back to Test Builder</button>
            <button onclick="switchStudioTab('proctor')" class="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition flex items-center gap-2">
              Next: Proctoring & Exam Integrity →
            </button>
          </div>

        </div>

        <!-- ============================================================ -->
        <!-- TAB 4: PROCTORING & EXAM SECURITY MATRIX                    -->
        <!-- ============================================================ -->
        <div id="studio-pane-proctor" class="studio-pane hidden space-y-6">
          
          <div class="bg-white p-6 rounded-2xl border border-pearl-200/90 shadow-card-lux space-y-6">
            <div class="border-b border-pearl-200/80 pb-3 flex items-center justify-between">
              <div>
                <h3 class="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider">Proctoring & Exam Security Architecture</h3>
                <p class="text-xs text-slate-500 mt-0.5">Hardware integrity checks, dual-camera mobile pairing, and automated malpractice prevention</p>
              </div>
              <span class="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                Enterprise AI Shield Active
              </span>
            </div>

            <!-- 4 Security Matrix Pillars -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <!-- Pillar 1: Dual Camera Pairing -->
              <div class="p-4 rounded-xl border border-slate-200/90 bg-white space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                    </div>
                    <div>
                      <h4 class="text-xs font-bold text-slate-900">Dual-Camera Mobile QR Pairing</h4>
                      <p class="text-[11px] text-slate-500">Secondary phone stream capturing hands & room</p>
                    </div>
                  </div>
                  <input type="checkbox" checked class="accent-slate-900 w-4 h-4">
                </div>
                <p class="text-[11px] text-slate-600 leading-relaxed">
                  Candidate scans a secure dynamic QR code on their smartphone before test start. A secondary WebRTC stream monitors candidate desk, keyboard, and peripheral environment.
                </p>
              </div>

              <!-- Pillar 2: Tab-Switch Lock -->
              <div class="p-4 rounded-xl border border-slate-200/90 bg-white space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                    </div>
                    <div>
                      <h4 class="text-xs font-bold text-slate-900">Tab-Switch & Fullscreen Enforcement</h4>
                      <p class="text-[11px] text-slate-500">Listens to document.visibilitychange events</p>
                    </div>
                  </div>
                  <input type="checkbox" checked class="accent-slate-900 w-4 h-4">
                </div>
                <div class="flex items-center justify-between text-xs">
                  <span class="text-slate-600">Disqualification Threshold:</span>
                  <select class="p-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md font-mono">
                    <option selected>2 Warnings (Max Strict)</option>
                    <option>3 Warnings (Standard)</option>
                    <option>5 Warnings (Flexible)</option>
                  </select>
                </div>
              </div>

              <!-- Pillar 3: Audio Decibel Monitoring -->
              <div class="p-4 rounded-xl border border-slate-200/90 bg-white space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
                    </div>
                    <div>
                      <h4 class="text-xs font-bold text-slate-900">Audio Noise Floor & Speech Isolation</h4>
                      <p class="text-[11px] text-slate-500">Detects secondary whisperers or prompting</p>
                    </div>
                  </div>
                  <input type="checkbox" checked class="accent-slate-900 w-4 h-4">
                </div>
                <p class="text-[11px] text-slate-600 leading-relaxed">
                  Real-time Web Audio API tracks ambient noise floor. Flags secondary human voices, dictation, and background interference during both MCQ and Dwaani AI voice rounds.
                </p>
              </div>

              <!-- Pillar 4: Malpractice Disqualification -->
              <div class="p-4 rounded-xl border border-slate-200/90 bg-white space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-lg bg-rose-700 text-white flex items-center justify-center text-xs">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
                    </div>
                    <div>
                      <h4 class="text-xs font-bold text-slate-900">Malpractice Immediate Abort</h4>
                      <p class="text-[11px] text-slate-500">Auto-terminates session on critical breach</p>
                    </div>
                  </div>
                  <input type="checkbox" checked class="accent-rose-600 w-4 h-4">
                </div>
                <p class="text-[11px] text-slate-600 leading-relaxed">
                  If unauthorized devices, multiple faces, or persistent tab-switching are detected, the assessment immediately locks, awards 0 marks, and routes evidence to Manager audit.
                </p>
              </div>

            </div>
          </div>

          <!-- Tab Navigation Footer -->
          <div class="flex items-center justify-between bg-white p-5 rounded-2xl border border-pearl-200/90 shadow-card-lux">
            <button onclick="switchStudioTab('resumes')" class="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition">← Back to Resumes</button>
            <button onclick="switchStudioTab('blueprint')" class="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition flex items-center gap-2">
              Next: Review Blueprint & Launch Campaign →
            </button>
          </div>

        </div>

        <!-- ============================================================ -->
        <!-- TAB 5: BLUEPRINT & DEPLOYMENT                               -->
        <!-- ============================================================ -->
        <div id="studio-pane-blueprint" class="studio-pane hidden space-y-6">
          
          <div class="bg-white p-6 rounded-2xl border border-pearl-200/90 shadow-card-lux space-y-6">
            <div class="border-b border-pearl-200/80 pb-4 flex items-center justify-between">
              <div>
                <h3 class="text-sm font-extrabold text-slate-900">Campaign Blueprint & Deployment Summary</h3>
                <p class="text-xs text-slate-500 mt-0.5">End-to-end audit summary of the configured stages, pass criteria, and candidate cohort</p>
              </div>
              <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                Ready for Production Launch
              </span>
            </div>

            <!-- Blueprint Card -->
            <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-[10px] font-mono font-bold uppercase text-slate-400">Assessment Workflow Blueprint</span>
                  <div id="summaryWorkflowTitle" class="text-sm font-extrabold text-slate-900 mt-0.5">Senior Java & Distributed Cloud Architect</div>
                </div>
                <div id="summaryStageCountBadge" class="px-2.5 py-1 rounded-lg text-xs font-bold font-mono bg-white border border-slate-200 text-slate-800">
                  2 Sequential Stages
                </div>
              </div>

              <!-- Steps List Table -->
              <div id="summaryStepsList" class="space-y-3">
                <!-- Dynamically populated via JS -->
              </div>
            </div>

            <!-- Requisition Oversight Details -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">Supervising Test Creator</label>
                <select class="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg outline-none font-medium text-slate-800">
                  <option selected>K. Prashanti (Senior Assessment Specialist - Engineering)</option>
                  <option>P. Hemachandra (Technical Question Author - Cloud & Data)</option>
                  <option>Direct Manager Execution (Rajini Gadi)</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">Link Expiration (Candidate Token)</label>
                <input type="date" value="2026-11-30" class="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg outline-none font-mono text-slate-800">
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1">Staged Candidate Cohort</label>
                <div class="px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg font-mono text-slate-800 flex items-center justify-between">
                  <span>4 Resumes Processed</span>
                  <span class="text-emerald-700 font-bold">100% Calibrated</span>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex items-center justify-between pt-4 border-t border-slate-100">
              <button onclick="switchStudioTab('proctor')" class="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition">← Back to Proctoring</button>
              
              <div class="flex items-center gap-3">
                <button onclick="alert('Workflow saved as Draft in Tests Library.')" class="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition">Save Draft</button>
                <button onclick="saveAndActivateWorkflow()" class="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-xs transition flex items-center gap-2">
                  <svg class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  Confirm & Launch Assessment Campaign
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
`;

const newStudioJs = `
    // ============================================================
    // CONFIGURABLE ASSESSMENT FLOW & STUDIO STATE ENGINE
    // ============================================================
    const studioState = {
      activeTab: 'pipeline',
      activeSection: 'mcq',
      includeDwaani: true,
      includeGradArena: true,
      dwaaniMode: 'new',
      dwaaniExistingId: 'INT-201',
      gradArenaMode: 'new',
      gradArenaExistingId: 'TST-8842',
      sequence: 'dwaani_first', // 'dwaani_first' or 'gradarena_first'
      
      dwaaniThreshold: 70,
      dwaaniFailureRule: 'stop', // 'stop', 'review', 'flag'
      dwaaniRequirePassToAdvance: true,
      
      gradArenaThreshold: 60,
      gradArenaFailureRule: 'review', // 'stop', 'review', 'flag'
      gradArenaRequirePassToAdvance: true,
      gradArenaProctorZeroFlags: true,

      resumeCalibrationEnabled: true,
      ingestedCandidatesCount: 4
    };

    // Alias for backward compatibility
    const flowState = studioState;

    function switchStudioTab(tabId) {
      studioState.activeTab = tabId;

      // Hide all panes
      document.querySelectorAll('.studio-pane').forEach(el => el.classList.add('hidden'));
      const targetPane = document.getElementById('studio-pane-' + tabId);
      if (targetPane) targetPane.classList.remove('hidden');

      // Update Tab Buttons (Sleek minimalist contrast, no heavy borders)
      document.querySelectorAll('.studio-tab-btn').forEach(btn => {
        btn.classList.remove('bg-slate-900', 'text-white', 'shadow-xs', 'font-bold');
        btn.classList.add('text-slate-600', 'font-medium');
      });

      const activeBtn = document.getElementById('tab-nav-' + tabId);
      if (activeBtn) {
        activeBtn.classList.remove('text-slate-600', 'font-medium');
        activeBtn.classList.add('bg-slate-900', 'text-white', 'shadow-xs', 'font-bold');
      }

      updateFlowUI();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Alias for old setTestStudioStep
    function setTestStudioStep(num) {
      const map = { 1: 'pipeline', 2: 'builder', 3: 'resumes', 4: 'proctor', 5: 'blueprint' };
      switchStudioTab(map[num] || 'pipeline');
    }

    function switchTestSection(secId) {
      studioState.activeSection = secId;
      document.getElementById('subpane-sec-mcq').classList.add('hidden');
      document.getElementById('subpane-sec-coding').classList.add('hidden');
      document.getElementById('subpane-sec-essay').classList.add('hidden');

      document.getElementById('btn-sec-mcq').className = 'px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition';
      document.getElementById('btn-sec-coding').className = 'px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition';
      document.getElementById('btn-sec-essay').className = 'px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition';

      const targetSub = document.getElementById('subpane-sec-' + secId);
      const targetBtn = document.getElementById('btn-sec-' + secId);
      if (targetSub) targetSub.classList.remove('hidden');
      if (targetBtn) {
        targetBtn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-900 text-white shadow-2xs';
      }
    }

    function toggleStage(stage) {
      if (stage === 'dwaani') {
        const chk = document.getElementById('check-stage-dwaani');
        studioState.includeDwaani = chk.checked;
      } else if (stage === 'gradarena') {
        const chk = document.getElementById('check-stage-gradarena');
        studioState.includeGradArena = chk.checked;
      }

      if (!studioState.includeDwaani && !studioState.includeGradArena) {
        alert('Assessment must contain at least one stage (Dwaani AI Voice Interview or GradArena Assessment).');
        if (stage === 'dwaani') {
          studioState.includeDwaani = true;
          document.getElementById('check-stage-dwaani').checked = true;
        } else {
          studioState.includeGradArena = true;
          document.getElementById('check-stage-gradarena').checked = true;
        }
      }

      // Update card visual state with whisper-light opacity (no harsh thick borders)
      const cardDwaani = document.getElementById('card-stage-dwaani');
      if (cardDwaani) {
        if (studioState.includeDwaani) {
          cardDwaani.classList.remove('opacity-50', 'bg-slate-50/50');
          cardDwaani.classList.add('bg-white');
        } else {
          cardDwaani.classList.add('opacity-50', 'bg-slate-50/50');
          cardDwaani.classList.remove('bg-white');
        }
      }

      const cardGrad = document.getElementById('card-stage-gradarena');
      if (cardGrad) {
        if (studioState.includeGradArena) {
          cardGrad.classList.remove('opacity-50', 'bg-slate-50/50');
          cardGrad.classList.add('bg-white');
        } else {
          cardGrad.classList.add('opacity-50', 'bg-slate-50/50');
          cardGrad.classList.remove('bg-white');
        }
      }

      updateFlowUI();
    }

    function setStageMode(stage, mode) {
      if (stage === 'dwaani') {
        studioState.dwaaniMode = mode;
        const sel = document.getElementById('dwaani-existing-select');
        if (sel) sel.classList.toggle('hidden', mode !== 'existing');
      } else if (stage === 'gradarena') {
        studioState.gradArenaMode = mode;
        const sel = document.getElementById('gradarena-existing-select');
        if (sel) sel.classList.toggle('hidden', mode !== 'existing');
      }
      updateFlowUI();
    }

    function setSequence(seq) {
      studioState.sequence = seq;
      const labelDwaani = document.getElementById('label-seq-dwaani-first');
      const labelGrad = document.getElementById('label-seq-gradarena-first');

      if (seq === 'dwaani_first') {
        if (labelDwaani) {
          labelDwaani.className = 'p-4 rounded-xl border border-slate-300 bg-slate-50/50 flex items-start gap-3.5 cursor-pointer transition';
        }
        if (labelGrad) {
          labelGrad.className = 'p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 flex items-start gap-3.5 cursor-pointer transition';
        }
      } else {
        if (labelDwaani) {
          labelDwaani.className = 'p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 flex items-start gap-3.5 cursor-pointer transition';
        }
        if (labelGrad) {
          labelGrad.className = 'p-4 rounded-xl border border-slate-300 bg-slate-50/50 flex items-start gap-3.5 cursor-pointer transition';
        }
      }
      updateFlowUI();
    }

    function swapSequence() {
      const newSeq = (studioState.sequence === 'dwaani_first') ? 'gradarena_first' : 'dwaani_first';
      const radios = document.getElementsByName('flow_sequence');
      radios.forEach(r => {
        if (r.value === newSeq) r.checked = true;
      });
      setSequence(newSeq);
    }

    function updateThreshold(stage, val) {
      const numVal = parseInt(val) || 0;
      if (stage === 'dwaani') {
        studioState.dwaaniThreshold = numVal;
        const range = document.getElementById('dwaaniThreshRange');
        const num = document.getElementById('dwaaniThreshNum');
        if (range && range.value != numVal) range.value = numVal;
        if (num && num.value != numVal) num.value = numVal;
      } else if (stage === 'gradarena') {
        studioState.gradArenaThreshold = numVal;
        const range = document.getElementById('gradArenaThreshRange');
        const num = document.getElementById('gradArenaThreshNum');
        if (range && range.value != numVal) range.value = numVal;
        if (num && num.value != numVal) num.value = numVal;
      }
      updateFlowUI();
    }

    function updateFailureRule(stage, rule) {
      if (stage === 'dwaani') {
        studioState.dwaaniFailureRule = rule;
      } else if (stage === 'gradarena') {
        studioState.gradArenaFailureRule = rule;
      }
      updateFlowUI();
    }

    function updateFlowUI() {
      const badge = document.getElementById('workflowTypeBadge');
      const seqSection = document.getElementById('section-sequence-config');
      const diagram = document.getElementById('visual-flow-diagram');

      if (studioState.includeDwaani && studioState.includeGradArena) {
        if (badge) badge.textContent = 'Combined 2-Stage Funnel';
        if (seqSection) seqSection.classList.remove('hidden');

        if (diagram) {
          if (studioState.sequence === 'dwaani_first') {
            diagram.innerHTML = \`
              <div class="flex-1 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div class="text-[10px] font-mono font-bold text-slate-500 uppercase">Step 1 (First Screen)</div>
                <div class="font-bold text-slate-900 mt-0.5">Dwaani AI Voice Interview</div>
                <div class="text-[11px] text-slate-500 mt-1 font-mono">Pass Gate: ≥ \${studioState.dwaaniThreshold}%</div>
              </div>
              <div class="text-slate-400 font-bold shrink-0 flex flex-col items-center">
                <span>→ [Gating Rule: ≥ \${studioState.dwaaniThreshold}%] →</span>
                <span class="text-[9px] text-rose-600 font-mono">Fail: \${studioState.dwaaniFailureRule === 'stop' ? 'Stop' : 'Hold Review'}</span>
              </div>
              <div class="flex-1 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div class="text-[10px] font-mono font-bold text-slate-500 uppercase">Step 2 (Technical Test)</div>
                <div class="font-bold text-slate-900 mt-0.5">GradArena Assessment</div>
                <div class="text-[11px] text-slate-500 mt-1 font-mono">Pass Gate: ≥ \${studioState.gradArenaThreshold}%</div>
              </div>
              <div class="text-emerald-700 font-bold shrink-0">→ Shortlist</div>
            \`;
          } else {
            diagram.innerHTML = \`
              <div class="flex-1 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div class="text-[10px] font-mono font-bold text-slate-500 uppercase">Step 1 (First Screen)</div>
                <div class="font-bold text-slate-900 mt-0.5">GradArena Assessment</div>
                <div class="text-[11px] text-slate-500 mt-1 font-mono">Pass Gate: ≥ \${studioState.gradArenaThreshold}%</div>
              </div>
              <div class="text-slate-400 font-bold shrink-0 flex flex-col items-center">
                <span>→ [Gating Rule: ≥ \${studioState.gradArenaThreshold}%] →</span>
                <span class="text-[9px] text-rose-600 font-mono">Fail: \${studioState.gradArenaFailureRule === 'stop' ? 'Stop' : 'Hold Review'}</span>
              </div>
              <div class="flex-1 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div class="text-[10px] font-mono font-bold text-slate-500 uppercase">Step 2 (Voice Screen)</div>
                <div class="font-bold text-slate-900 mt-0.5">Dwaani AI Voice Interview</div>
                <div class="text-[11px] text-slate-500 mt-1 font-mono">Pass Gate: ≥ \${studioState.dwaaniThreshold}%</div>
              </div>
              <div class="text-emerald-700 font-bold shrink-0">→ Shortlist</div>
            \`;
          }
        }
      } else {
        const sName = studioState.includeDwaani ? 'Single Stage: Dwaani AI Voice' : 'Single Stage: GradArena Assessment';
        if (badge) badge.textContent = sName;
        if (seqSection) seqSection.classList.add('hidden');
        if (diagram) {
          diagram.innerHTML = \`
            <div class="flex-1 p-3 rounded-xl bg-white border border-slate-200">
              <div class="font-bold text-slate-900">\${sName}</div>
              <div class="text-[11px] text-slate-500">Single stage evaluation funnel</div>
            </div>
          \`;
        }
      }

      // Populate Threshold Container
      const threshContainer = document.getElementById('stage-thresholds-container');
      if (threshContainer) {
        let cardsHtml = '';

        const dwaaniCard = \`
          <div class="p-4 rounded-xl border border-slate-200 bg-white space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-slate-900"></span>
                <span class="text-xs font-bold text-slate-900">Dwaani AI Interview Threshold Configuration</span>
                <span class="px-1.5 py-0.2 rounded text-[10px] font-mono bg-slate-100 text-slate-700 font-bold">Voice Screen</span>
              </div>
              <span class="text-xs font-mono font-bold text-slate-900">\${studioState.dwaaniThreshold}% Minimum</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div class="md:col-span-2 space-y-1">
                <div class="flex justify-between text-xs text-slate-500">
                  <span>Pass Threshold:</span>
                  <span class="font-mono font-bold text-slate-900">\${studioState.dwaaniThreshold}%</span>
                </div>
                <input id="dwaaniThreshRange" type="range" min="40" max="95" value="\${studioState.dwaaniThreshold}" oninput="updateThreshold('dwaani', this.value)" class="w-full accent-slate-900">
              </div>
              <div>
                <label class="block text-[11px] font-semibold text-slate-600 mb-1">Exact Cutoff %</label>
                <input id="dwaaniThreshNum" type="number" min="40" max="95" value="\${studioState.dwaaniThreshold}" onchange="updateThreshold('dwaani', this.value)" class="w-full p-2 text-xs bg-slate-50 border border-slate-200 rounded-lg outline-none font-mono font-bold text-slate-900">
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
              <div>
                <label class="block text-[11px] font-semibold text-slate-700 mb-1">Gating Requirement:</label>
                <label class="flex items-center gap-2 text-xs text-slate-800 cursor-pointer">
                  <input type="checkbox" checked class="accent-slate-900">
                  <span>Require Passing Score (≥ \${studioState.dwaaniThreshold}%) to unlock next round</span>
                </label>
              </div>
              <div>
                <label class="block text-[11px] font-semibold text-slate-700 mb-1">When Candidate Fails This Stage:</label>
                <select onchange="updateFailureRule('dwaani', this.value)" class="w-full p-2 text-xs bg-slate-50 border border-slate-200 rounded-lg outline-none text-slate-800">
                  <option value="stop" \${studioState.dwaaniFailureRule === 'stop' ? 'selected' : ''}>Stop Workflow Immediately (Auto-Regret Email)</option>
                  <option value="review" \${studioState.dwaaniFailureRule === 'review' ? 'selected' : ''}>Route to Recruiter Manual Review Pool (Hold)</option>
                  <option value="flag" \${studioState.dwaaniFailureRule === 'flag' ? 'selected' : ''}>Allow Next Stage with Conditional Review Tag</option>
                </select>
              </div>
            </div>
          </div>
        \`;

        const gradCard = \`
          <div class="p-4 rounded-xl border border-slate-200 bg-white space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-slate-900"></span>
                <span class="text-xs font-bold text-slate-900">GradArena Proctored Assessment Threshold Configuration</span>
                <span class="px-1.5 py-0.2 rounded text-[10px] font-mono bg-slate-100 text-slate-700 font-bold">Proctored Code</span>
              </div>
              <span class="text-xs font-mono font-bold text-slate-900">\${studioState.gradArenaThreshold}% Minimum</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div class="md:col-span-2 space-y-1">
                <div class="flex justify-between text-xs text-slate-500">
                  <span>Pass Threshold:</span>
                  <span class="font-mono font-bold text-slate-900">\${studioState.gradArenaThreshold}%</span>
                </div>
                <input id="gradArenaThreshRange" type="range" min="40" max="95" value="\${studioState.gradArenaThreshold}" oninput="updateThreshold('gradarena', this.value)" class="w-full accent-slate-900">
              </div>
              <div>
                <label class="block text-[11px] font-semibold text-slate-600 mb-1">Exact Cutoff %</label>
                <input id="gradArenaThreshNum" type="number" min="40" max="95" value="\${studioState.gradArenaThreshold}" onchange="updateThreshold('gradarena', this.value)" class="w-full p-2 text-xs bg-slate-50 border border-slate-200 rounded-lg outline-none font-mono font-bold text-slate-900">
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
              <div>
                <label class="block text-[11px] font-semibold text-slate-700 mb-1">Gating Requirement:</label>
                <label class="flex items-center gap-2 text-xs text-slate-800 cursor-pointer">
                  <input type="checkbox" checked class="accent-slate-900">
                  <span>Require Passing Score (≥ \${studioState.gradArenaThreshold}%) to Shortlist</span>
                </label>
              </div>
              <div>
                <label class="block text-[11px] font-semibold text-slate-700 mb-1">When Candidate Fails This Stage:</label>
                <select onchange="updateFailureRule('gradarena', this.value)" class="w-full p-2 text-xs bg-slate-50 border border-slate-200 rounded-lg outline-none text-slate-800">
                  <option value="review" \${studioState.gradArenaFailureRule === 'review' ? 'selected' : ''}>Route to Recruiter Manual Review Pool (Hold)</option>
                  <option value="stop" \${studioState.gradArenaFailureRule === 'stop' ? 'selected' : ''}>Stop Workflow Immediately (Auto-Regret Email)</option>
                  <option value="flag" \${studioState.gradArenaFailureRule === 'flag' ? 'selected' : ''}>Allow Next Stage with Conditional Review Tag</option>
                </select>
              </div>
            </div>
          </div>
        \`;

        if (studioState.includeDwaani && studioState.includeGradArena) {
          cardsHtml = (studioState.sequence === 'dwaani_first') ? (dwaaniCard + gradCard) : (gradCard + dwaaniCard);
        } else if (studioState.includeDwaani) {
          cardsHtml = dwaaniCard;
        } else {
          cardsHtml = gradCard;
        }

        threshContainer.innerHTML = cardsHtml;
      }

      // Populate Blueprint Summary
      const summaryTitle = document.getElementById('summaryWorkflowTitle');
      const titleInput = document.getElementById('workflowTitleInput');
      if (summaryTitle && titleInput) {
        summaryTitle.textContent = titleInput.value || 'Senior Java & Distributed Cloud Architect';
      }

      const summaryList = document.getElementById('summaryStepsList');
      if (summaryList) {
        if (studioState.includeDwaani && studioState.includeGradArena) {
          const isDwaaniFirst = (studioState.sequence === 'dwaani_first');
          const stage1Name = isDwaaniFirst ? 'Dwaani AI Voice Interview' : 'GradArena Assessment';
          const stage1Thresh = isDwaaniFirst ? studioState.dwaaniThreshold : studioState.gradArenaThreshold;
          const stage2Name = isDwaaniFirst ? 'GradArena Assessment' : 'Dwaani AI Voice Interview';
          const stage2Thresh = isDwaaniFirst ? studioState.gradArenaThreshold : studioState.dwaaniThreshold;

          summaryList.innerHTML = \`
            <div class="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2">
              <div class="flex items-center justify-between text-xs font-bold text-slate-900">
                <span class="flex items-center gap-2">
                  <span class="w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-[10px] flex items-center justify-center">1</span>
                  <span>Step 1: \${stage1Name}</span>
                </span>
                <span class="font-mono text-slate-900">Pass Cutoff: ≥ \${stage1Thresh}%</span>
              </div>
              <div class="text-[11px] text-slate-500 pl-7">
                Candidates must achieve ≥ \${stage1Thresh}% to unlock Step 2. Failure triggers: \${isDwaaniFirst ? studioState.dwaaniFailureRule : studioState.gradArenaFailureRule}.
              </div>
            </div>

            <div class="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2">
              <div class="flex items-center justify-between text-xs font-bold text-slate-900">
                <span class="flex items-center gap-2">
                  <span class="w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-[10px] flex items-center justify-center">2</span>
                  <span>Step 2: \${stage2Name}</span>
                </span>
                <span class="font-mono text-slate-900">Pass Cutoff: ≥ \${stage2Thresh}%</span>
              </div>
              <div class="text-[11px] text-slate-500 pl-7">
                Dual-Camera QR Live Proctoring required (0 critical malpractice flags). Qualifiers automatically shortlisted for Hiring Manager Round.
              </div>
            </div>
          \`;
        }
      }
    }

    // Helper Action Functions for Testing Experience
    function previewCandidatePortal() {
      alert('Opening Candidate Proctored Examination Sandbox in separate test view...');
    }

    function addTestCaseRow() {
      const tbody = document.getElementById('testCaseRowsContainer');
      if (!tbody) return;
      const count = tbody.children.length + 1;
      const tr = document.createElement('tr');
      tr.className = 'hover:bg-slate-50/50';
      tr.innerHTML = \`
        <td class="p-2.5 font-bold text-slate-800">TC-0\${count}</td>
        <td class="p-2.5 text-slate-700">Custom input vector</td>
        <td class="p-2.5 text-emerald-700 font-semibold">Expected validation response</td>
        <td class="p-2.5 text-slate-800">10 Marks</td>
        <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[9px] bg-slate-100 text-slate-700">Public Sample</span></td>
        <td class="p-2.5 text-right"><button onclick="this.closest('tr').remove()" class="text-rose-600 hover:text-rose-800">Delete</button></td>
      \`;
      tbody.appendChild(tr);
    }

    function triggerAiQuestionGeneration() {
      const input = document.getElementById('aiGenPromptInput');
      const topic = (input && input.value) ? input.value : 'Distributed Transactions & Resilience';
      alert('✨ Groq Llama-3 AI Question Studio generated 3 new high-quality questions for "' + topic + '". Added to Section 1 MCQs and Section 2 Sandbox!');
      if (input) input.value = '';
    }

    function simulateBulkIngestion() {
      alert('⚡ Groq ATS Engine successfully parsed 4 resumes from archive! Extracted skills, experience, and computed ATS match scores.');
      switchStudioTab('resumes');
    }

    function inviteCandidate(name, token) {
      alert('✉️ Magic link and temporary 12-char credentials dispatched via email to ' + name + ' (Token: ' + token + '). Valid for 48 hours.');
    }

    function dispatchInvitesToAll() {
      alert('✉️ Magic examination links dispatched to all 4 candidates with active 48-hour expiration tokens!');
    }

    function saveAndActivateWorkflow() {
      try {
        localStorage.setItem('gradarena_configured_workflow', JSON.stringify(studioState));
      } catch (e) {}

      alert('Assessment Campaign Successfully Deployed! Requisition: Senior Java & Distributed Cloud Architect. Staged Candidates: 4 Applicants Invited. Security Level: Dual-Camera QR Pairing + Tab-Lock Enforced.');
      switchScreen('tests');
    }

    // Auto-switch screen and tab on startup via URL param (?screen=...&tab=...) or hash (#...)
    window.addEventListener('DOMContentLoaded', () => {
      if (typeof updateFlowUI === 'function') updateFlowUI();
      const params = new URLSearchParams(window.location.search);
      const s = params.get('screen') || window.location.hash.replace('#', '');
      if (s) {
        if (s.startsWith('test-create-') || screenTitles[s]) {
          switchScreen(s);
        }
      }
      const step = params.get('step');
      if (step && typeof setTestStudioStep === 'function') {
        setTestStudioStep(parseInt(step));
      }
      const tab = params.get('tab');
      if (tab && typeof switchStudioTab === 'function') {
        switchStudioTab(tab);
      }
    });
`;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Replace screen-test-create
  const startTag = '<div id="screen-test-create"';
  const endTag = '<div id="screen-tests"';
  const startIndex = content.indexOf(startTag);
  const endIndex = content.indexOf(endTag);

  if (startIndex === -1 || endIndex === -1) {
    console.error('Could not find screen-test-create boundaries in ' + filePath);
    return;
  }

  content = content.substring(0, startIndex) + newStudioHtml.trim() + '\n\n      <!-- ============================================================ -->\n      <!-- SCREEN 5: TESTS LIBRARY / ASSIGNMENTS REPOSITORY             -->\n      <!-- ============================================================ -->\n      ' + content.substring(endIndex);

  // 2. Replace JS Engine
  const jsStartTag = '// ============================================================';
  const jsSecondLine = '// CONFIGURABLE ASSESSMENT FLOW';
  let jsStartIndex = content.indexOf('// CONFIGURABLE ASSESSMENT FLOW');
  if (jsStartIndex !== -1) {
    // find the previous line
    const lastBar = content.lastIndexOf('// ============================================================', jsStartIndex);
    if (lastBar !== -1) {
      jsStartIndex = lastBar;
    }
  }

  const jsEndTag = '</script>';
  const jsEndIndex = content.lastIndexOf(jsEndTag);

  if (jsStartIndex !== -1 && jsEndIndex !== -1 && jsStartIndex < jsEndIndex) {
    content = content.substring(0, jsStartIndex) + newStudioJs.trim() + '\n  ' + content.substring(jsEndIndex);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated: ' + filePath);
}

processFile(path.join(__dirname, 'manager-panel.html'));
processFile(path.join(__dirname, 'manager-dashboard.html'));
