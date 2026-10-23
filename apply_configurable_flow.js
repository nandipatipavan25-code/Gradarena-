const fs = require('fs');

const testCreateHtml = `
      <!-- ============================================================ -->
      <!-- SCREEN 4: TEST CREATION STUDIO (CONFIGURABLE ASSESSMENT FLOW) -->
      <!-- ============================================================ -->
      <div id="screen-test-create" class="screen-view hidden space-y-6">
        
        <!-- Wizard Header & Step Nav -->
        <div class="bg-white p-6 rounded-2xl border border-pearl-200/90 shadow-card-lux">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <div class="flex items-center gap-2">
                <h2 class="text-lg font-extrabold text-pearl-900">Test Creation & Assessment Studio</h2>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-brand-50 text-brand-700 border border-brand-200 uppercase">Configurable Flow</span>
              </div>
              <p class="text-xs text-pearl-400 mt-0.5">Select assessment stages, arrange execution sequence, and define passing thresholds & gating rules</p>
            </div>
            <div class="flex items-center gap-2">
              <span id="studioStepIndicator" class="text-xs font-mono font-bold text-brand bg-brand-50 px-3 py-1 rounded-lg border border-brand-200">Step 1 of 3</span>
            </div>
          </div>

          <!-- Clickable Step Progress Tabs -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <button onclick="setTestStudioStep(1)" id="studio-tab-1" class="studio-tab text-left p-3.5 rounded-xl bg-brand-50 border border-brand-200 transition">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-mono font-bold uppercase text-brand-600">Step 1</span>
                <span class="w-2 h-2 rounded-full bg-brand"></span>
              </div>
              <div class="text-xs font-bold text-brand-900 mt-1">Stages & Sequence Flow</div>
              <div class="text-[11px] text-brand-700/80 mt-0.5">Select stages & execution order</div>
            </button>

            <button onclick="setTestStudioStep(2)" id="studio-tab-2" class="studio-tab text-left p-3.5 rounded-xl bg-pearl-50 border border-pearl-200 transition hover:bg-pearl-100/70">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-mono font-bold uppercase text-pearl-400">Step 2</span>
                <span class="text-[10px] font-mono text-pearl-400">Rules</span>
              </div>
              <div class="text-xs font-bold text-pearl-700 mt-1">Questions & Pass Thresholds</div>
              <div class="text-[11px] text-pearl-400 mt-0.5">Define passing % & progression gates</div>
            </button>

            <button onclick="setTestStudioStep(3)" id="studio-tab-3" class="studio-tab text-left p-3.5 rounded-xl bg-pearl-50 border border-pearl-200 transition hover:bg-pearl-100/70">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-mono font-bold uppercase text-pearl-400">Step 3</span>
                <span class="text-[10px] font-mono text-pearl-400">Launch</span>
              </div>
              <div class="text-xs font-bold text-pearl-700 mt-1">Review & Create Assessment</div>
              <div class="text-[11px] text-pearl-400 mt-0.5">Pipeline blueprint & final confirmation</div>
            </button>
          </div>
        </div>

        <!-- ============================================================ -->
        <!-- STEP 1: SELECT OR CREATE ASSESSMENT STAGES & SEQUENCE FLOW   -->
        <!-- ============================================================ -->
        <div id="studio-step-1" class="studio-step-content space-y-6">
          
          <!-- Top Row: General Test Metadata -->
          <div class="bg-white p-6 rounded-2xl border border-pearl-200/90 shadow-card-lux space-y-4">
            <h3 class="text-sm font-bold text-pearl-900 border-b border-pearl-200/80 pb-3 flex items-center justify-between">
              <span>1. General Assessment Information</span>
              <span class="text-[11px] font-normal text-pearl-400">Basic metadata for candidate tracking</span>
            </h3>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label class="block text-xs font-semibold text-pearl-700 mb-1">Assessment Workflow Name *</label>
                <input id="workflowTitleInput" type="text" value="Senior Java Microservices Architect (GCC Drive)" class="w-full px-3.5 py-2 text-xs bg-pearl-50 border border-pearl-200 rounded-xl outline-none focus:border-brand-500 font-medium">
              </div>
              <div>
                <label class="block text-xs font-semibold text-pearl-700 mb-1">Hiring Client / Entity *</label>
                <select class="w-full px-3.5 py-2 text-xs bg-pearl-50 border border-pearl-200 rounded-xl outline-none focus:border-brand-500 text-pearl-800">
                  <option selected>Capgemini GCC - Hyderabad</option>
                  <option>Invesco Enterprise Hub</option>
                  <option>Deloitte USI</option>
                  <option>Standard Chartered Global</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-semibold text-pearl-700 mb-1">Target Department & Role</label>
                <input type="text" value="Cloud Platform Engineering" class="w-full px-3.5 py-2 text-xs bg-pearl-50 border border-pearl-200 rounded-xl outline-none focus:border-brand-500">
              </div>
            </div>
          </div>

          <!-- Core Step 1: Select or Create Assessment Stages (Two Cards) -->
          <div class="bg-white p-6 rounded-2xl border border-pearl-200/90 shadow-card-lux space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-pearl-200/80 pb-3">
              <div>
                <h3 class="text-sm font-bold text-pearl-900">2. Select or Create Assessment Stages</h3>
                <p class="text-xs text-pearl-400 mt-0.5">Choose which assessment engines to include. Combine both into a multi-stage funnel or select a single stage.</p>
              </div>
              <span id="workflowTypeBadge" class="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-brand-700 border border-brand-200 self-start sm:self-auto">
                Combined Multi-Stage Assessment
              </span>
            </div>

            <!-- Two Interactive Stage Selection Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              
              <!-- STAGE CARD 1: DWAANI AI INTERVIEW -->
              <div id="card-stage-dwaani" class="p-5 rounded-2xl border-2 border-brand-500 bg-brand-50/20 shadow-2xs space-y-4 transition-all">
                <div class="flex items-start justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center shadow-xs">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" fill="white" fill-opacity="0.3" stroke="white" stroke-width="1.8"/>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <h4 class="text-sm font-extrabold text-pearl-900">Dwaani AI Interview</h4>
                        <span class="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-brand-100 text-brand-800 rounded">Voice AI</span>
                      </div>
                      <p class="text-[11px] text-pearl-500 mt-0.5">Conversational voice screening with adaptive probing & 3D scoring</p>
                    </div>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="check-stage-dwaani" checked onchange="toggleStage('dwaani')" class="sr-only peer">
                    <div class="w-9 h-5 bg-pearl-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-pearl-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand-600"></div>
                  </label>
                </div>

                <!-- Create New vs Select Existing for Dwaani -->
                <div id="dwaani-source-controls" class="p-3.5 rounded-xl bg-white border border-pearl-200 space-y-3">
                  <div class="text-[11px] font-bold text-pearl-700 uppercase font-mono tracking-wider">Interview Source:</div>
                  <div class="flex items-center gap-4 text-xs font-semibold text-pearl-800">
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="dwaani_mode" value="new" checked onchange="setStageMode('dwaani', 'new')" class="accent-brand">
                      <span>Create New AI Interview</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="dwaani_mode" value="existing" onchange="setStageMode('dwaani', 'existing')" class="accent-brand">
                      <span>Select Existing Interview</span>
                    </label>
                  </div>

                  <!-- Existing Dropdown (Hidden by default) -->
                  <div id="dwaani-existing-select" class="hidden pt-1">
                    <select id="dwaaniExistingId" class="w-full px-3 py-2 text-xs bg-pearl-50 border border-pearl-200 rounded-xl outline-none focus:border-brand-500 text-pearl-800">
                      <option value="INT-201" selected>INT-201: Distributed Systems & Saga Pattern Voice Screen (4 Questions • 25m)</option>
                      <option value="INT-204">INT-204: Senior Cloud Architect Resilience & Kafka (5 Questions • 30m)</option>
                      <option value="INT-208">INT-208: Microservices Concurrency & Security Voice Screen (4 Questions • 20m)</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- STAGE CARD 2: GRADARENA ASSESSMENT -->
              <div id="card-stage-gradarena" class="p-5 rounded-2xl border-2 border-brand-500 bg-brand-50/20 shadow-2xs space-y-4 transition-all">
                <div class="flex items-start justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-xs">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5 4.5-1.35 8-6.25 8-11.5V6l-8-4z" fill="white" fill-opacity="0.3" stroke="white" stroke-width="1.8"/>
                        <circle cx="12" cy="11" r="2.5" fill="white"/>
                      </svg>
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <h4 class="text-sm font-extrabold text-pearl-900">GradArena Assessment</h4>
                        <span class="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-purple-100 text-purple-800 rounded">Proctored Test</span>
                      </div>
                      <p class="text-[11px] text-pearl-500 mt-0.5">MCQ questions, algorithmic coding sandbox & dual-camera proctoring</p>
                    </div>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="check-stage-gradarena" checked onchange="toggleStage('gradarena')" class="sr-only peer">
                    <div class="w-9 h-5 bg-pearl-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-pearl-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                <!-- Create New vs Select Existing for GradArena -->
                <div id="gradarena-source-controls" class="p-3.5 rounded-xl bg-white border border-pearl-200 space-y-3">
                  <div class="text-[11px] font-bold text-pearl-700 uppercase font-mono tracking-wider">Assessment Source:</div>
                  <div class="flex items-center gap-4 text-xs font-semibold text-pearl-800">
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="gradarena_mode" value="new" checked onchange="setStageMode('gradarena', 'new')" class="accent-purple-600">
                      <span>Create New Assessment</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="gradarena_mode" value="existing" onchange="setStageMode('gradarena', 'existing')" class="accent-purple-600">
                      <span>Select Existing Assessment</span>
                    </label>
                  </div>

                  <!-- Existing Dropdown (Hidden by default) -->
                  <div id="gradarena-existing-select" class="hidden pt-1">
                    <select id="gradArenaExistingId" class="w-full px-3 py-2 text-xs bg-pearl-50 border border-pearl-200 rounded-xl outline-none focus:border-brand-500 text-pearl-800">
                      <option value="TST-8841" selected>TST-8841: Lead Python Backend Architect (15 MCQ + 1 Coding • 60m)</option>
                      <option value="TST-8842">TST-8842: Senior Java Microservices Architect (15 MCQ + 1 Coding • 60m)</option>
                      <option value="TST-8849">TST-8849: Cloud Native Kubernetes & Docker Fundamentals (20 MCQ • 45m)</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- Core Step 2: Configure Assessment Sequence (When Combined) -->
          <div id="section-sequence-config" class="bg-white p-6 rounded-2xl border border-pearl-200/90 shadow-card-lux space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-pearl-200/80 pb-3">
              <div>
                <h3 class="text-sm font-bold text-pearl-900">3. Configure Assessment Sequence</h3>
                <p class="text-xs text-pearl-400 mt-0.5">Determine which assessment runs first and how candidates unlock the next stage</p>
              </div>
              <button onclick="swapSequence()" class="px-3.5 py-1.5 rounded-xl bg-pearl-100 hover:bg-brand-50 hover:text-brand-700 text-pearl-700 text-xs font-bold transition flex items-center gap-2">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 16V4M7 4L3 8M7 4L11 8M17 8V20M17 20L21 16M17 20L13 16"/></svg>
                ⇄ Swap Stage Order
              </button>
            </div>

            <!-- Sequence Choice Radios -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <!-- Choice A: Dwaani First -->
              <label id="label-seq-dwaani-first" class="p-4 rounded-xl border-2 border-brand-500 bg-brand-50/30 flex items-start gap-3 cursor-pointer transition">
                <input type="radio" name="flow_sequence" value="dwaani_first" checked onchange="setSequence('dwaani_first')" class="mt-1 accent-brand">
                <div>
                  <div class="text-xs font-extrabold text-pearl-900 flex items-center gap-2">
                    <span>Example A: Dwaani AI → GradArena</span>
                    <span class="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-brand text-white">VOICE FIRST</span>
                  </div>
                  <p class="text-[11px] text-pearl-600 mt-1 leading-relaxed">
                    Candidates complete the Dwaani AI voice interview first. Candidates who meet the passing threshold (e.g. 70%) advance to the GradArena proctored technical test.
                  </p>
                </div>
              </label>

              <!-- Choice B: GradArena First -->
              <label id="label-seq-gradarena-first" class="p-4 rounded-xl border border-pearl-200 bg-white hover:border-pearl-300 flex items-start gap-3 cursor-pointer transition">
                <input type="radio" name="flow_sequence" value="gradarena_first" onchange="setSequence('gradarena_first')" class="mt-1 accent-brand">
                <div>
                  <div class="text-xs font-extrabold text-pearl-900 flex items-center gap-2">
                    <span>Example B: GradArena → Dwaani AI</span>
                    <span class="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-purple-100 text-purple-800">TECH FIRST</span>
                  </div>
                  <p class="text-[11px] text-pearl-600 mt-1 leading-relaxed">
                    Candidates take the GradArena technical assessment (MCQ/Coding) first. Only those who pass (e.g. 60%) unlock the Dwaani AI conversational voice interview.
                  </p>
                </div>
              </label>

            </div>

            <!-- Visual Flow Diagram Preview -->
            <div class="p-4 rounded-xl bg-pearl-50/70 border border-pearl-200">
              <div class="text-[10px] font-mono font-bold uppercase text-pearl-400 mb-2">Live Candidate Progression Architecture:</div>
              <div id="visual-flow-diagram" class="flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
                <!-- Dynamically rendered via JS -->
              </div>
            </div>
          </div>

          <!-- Navigation Footer -->
          <div class="flex items-center justify-between bg-white p-5 rounded-2xl border border-pearl-200/90 shadow-card-lux">
            <button onclick="switchScreen('tests')" class="px-4 py-2 rounded-xl bg-pearl-100 text-pearl-700 text-xs font-bold hover:bg-pearl-200 transition">Cancel</button>
            <button onclick="setTestStudioStep(2)" class="px-5 py-2.5 rounded-xl bg-brand hover:bg-brand-600 text-white text-xs font-bold shadow-xs transition flex items-center gap-2">
              Continue to Step 2: Pass Thresholds & Rules →
            </button>
          </div>

        </div>

        <!-- ============================================================ -->
        <!-- STEP 2: CONFIGURE PASS THRESHOLDS, GATING & QUESTIONS        -->
        <!-- ============================================================ -->
        <div id="studio-step-2" class="studio-step-content hidden space-y-6">
          
          <!-- Banner showing configured order -->
          <div class="p-4 rounded-2xl bg-white border border-pearl-200/90 shadow-card-lux flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div class="text-[10px] font-mono font-bold uppercase text-pearl-400">Configured Progression Funnel:</div>
              <div id="step2-order-banner" class="text-sm font-extrabold text-pearl-900 mt-0.5 flex items-center gap-2">
                <!-- Dynamically populated -->
              </div>
            </div>
            <button onclick="setTestStudioStep(1)" class="text-xs font-bold text-brand hover:underline self-start sm:self-auto">Modify Sequence in Step 1</button>
          </div>

          <!-- Dynamic Stages Thresholds Container -->
          <div id="stage-thresholds-container" class="space-y-6">
            <!-- Dynamically populated based on sequence order -->
          </div>

          <!-- Navigation Footer -->
          <div class="flex items-center justify-between bg-white p-5 rounded-2xl border border-pearl-200/90 shadow-card-lux">
            <button onclick="setTestStudioStep(1)" class="px-4 py-2 rounded-xl bg-pearl-100 text-pearl-700 text-xs font-bold hover:bg-pearl-200 transition">← Back to Stages</button>
            <button onclick="setTestStudioStep(3)" class="px-5 py-2.5 rounded-xl bg-brand hover:bg-brand-600 text-white text-xs font-bold shadow-xs transition flex items-center gap-2">
              Continue to Step 3: Review & Create Assessment →
            </button>
          </div>

        </div>

        <!-- ============================================================ -->
        <!-- STEP 3: REVIEW BLUEPRINT & CREATE ASSESSMENT WORKFLOW        -->
        <!-- ============================================================ -->
        <div id="studio-step-3" class="studio-step-content hidden space-y-6">
          
          <div class="bg-white p-6 rounded-2xl border border-pearl-200/90 shadow-card-lux space-y-6">
            <div class="border-b border-pearl-200/80 pb-4 flex items-center justify-between">
              <div>
                <h3 class="text-base font-extrabold text-pearl-900">Review & Create Assessment Workflow</h3>
                <p class="text-xs text-pearl-400 mt-0.5">Verify stage ordering, pass thresholds, failure routing, and candidate link settings</p>
              </div>
              <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                Ready for Activation
              </span>
            </div>

            <!-- Dynamic Workflow Summary Card -->
            <div class="p-5 rounded-2xl bg-pearl-50 border border-pearl-200 space-y-5">
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-[10px] font-mono font-bold uppercase text-pearl-400">Workflow Blueprint</span>
                  <div id="summaryWorkflowTitle" class="text-sm font-extrabold text-pearl-900 mt-0.5">Senior Java Microservices Architect</div>
                </div>
                <div id="summaryStageCountBadge" class="px-2.5 py-1 rounded-lg text-xs font-bold font-mono bg-white border border-pearl-200 text-pearl-800">
                  2 Sequential Stages
                </div>
              </div>

              <!-- Flow Step-by-Step Breakdown Table -->
              <div id="summaryStepsList" class="space-y-3">
                <!-- Dynamically rendered via JS -->
              </div>
            </div>

            <!-- Author Assignment & Expiry Controls -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div class="space-y-2">
                <label class="block text-xs font-semibold text-pearl-700">Assign Supervising Test Creator</label>
                <select class="w-full px-3.5 py-2 text-xs bg-pearl-50 border border-pearl-200 rounded-xl outline-none focus:border-brand-500 text-pearl-800">
                  <option selected>K. Prashanti (Senior Assessment Specialist - Engineering)</option>
                  <option>P. Hemachandra (Technical Question Author - Cloud & Data)</option>
                  <option>Direct Manager Execution (Rajini Gadi)</option>
                </select>
                <p class="text-[11px] text-pearl-400">Assigned creator monitors candidate progression and handles review requests.</p>
              </div>

              <div class="space-y-2">
                <label class="block text-xs font-semibold text-pearl-700">Assessment Link Expiration Date</label>
                <input type="date" value="2026-11-30" class="w-full px-3.5 py-2 text-xs bg-pearl-50 border border-pearl-200 rounded-xl outline-none focus:border-brand-500 font-mono">
                <p class="text-[11px] text-pearl-400">Assessment link closes automatically after this date.</p>
              </div>
            </div>

            <!-- Final Publish CTA -->
            <div class="flex items-center justify-between pt-4 border-t border-pearl-200/80">
              <button onclick="setTestStudioStep(2)" class="px-4 py-2 rounded-xl bg-pearl-100 text-pearl-700 text-xs font-bold hover:bg-pearl-200 transition">← Back to Thresholds</button>
              
              <div class="flex items-center gap-3">
                <button onclick="alert('Workflow saved as Draft in Tests Library.')" class="px-4 py-2 rounded-xl bg-pearl-100 text-pearl-700 text-xs font-bold hover:bg-pearl-200 transition">Save Draft</button>
                <button onclick="saveAndActivateWorkflow()" class="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition flex items-center gap-2">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  Confirm & Create Assessment Workflow
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
`;

// Now let's read manager-panel.html and replace screen-test-create
const filePath = 'manager-panel.html';
let html = fs.readFileSync(filePath, 'utf8');

// Find start and end of screen-test-create
const startComment = '<!-- ============================================================ -->\n      <!-- SCREEN 4: TEST CREATION STUDIO';
const endComment = '<!-- ============================================================ -->\n      <!-- SCREEN 5: TESTS LIBRARY / ASSIGNMENTS REPOSITORY';

const startPos = html.indexOf('<!-- SCREEN 4: TEST CREATION STUDIO');
if (startPos === -1) {
  console.error('Could not find start of screen-test-create');
  process.exit(1);
}

// Find preceding comment line
const blockStart = html.lastIndexOf('<!-- ============================================================ -->', startPos);
const blockEnd = html.indexOf(endComment);

if (blockStart === -1 || blockEnd === -1) {
  console.error('Could not find block boundaries');
  process.exit(1);
}

const updatedHtml = html.substring(0, blockStart) + testCreateHtml + '\n\n      ' + html.substring(blockEnd);

fs.writeFileSync('manager-panel.html', updatedHtml, 'utf8');
fs.writeFileSync('manager-dashboard.html', updatedHtml, 'utf8');
console.log('Successfully updated manager-panel.html and manager-dashboard.html with Configurable Assessment Flow markup!');
