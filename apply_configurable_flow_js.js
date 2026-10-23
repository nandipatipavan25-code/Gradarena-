const fs = require('fs');

const jsAddition = `
    // ============================================================
    // CONFIGURABLE ASSESSMENT FLOW ENGINE & STATE MANAGEMENT
    // ============================================================
    const flowState = {
      includeDwaani: true,
      includeGradArena: true,
      dwaaniMode: 'new',
      dwaaniExistingId: 'INT-201',
      gradArenaMode: 'new',
      gradArenaExistingId: 'TST-8841',
      sequence: 'dwaani_first', // 'dwaani_first' or 'gradarena_first'
      currentStep: 1,
      
      dwaaniThreshold: 70,
      dwaaniFailureRule: 'stop', // 'stop', 'review', 'flag'
      dwaaniRequirePassToAdvance: true,
      
      gradArenaThreshold: 60,
      gradArenaFailureRule: 'review', // 'stop', 'review', 'flag'
      gradArenaRequirePassToAdvance: true,
      gradArenaProctorZeroFlags: true
    };

    function toggleStage(stage) {
      if (stage === 'dwaani') {
        const chk = document.getElementById('check-stage-dwaani');
        flowState.includeDwaani = chk.checked;
      } else if (stage === 'gradarena') {
        const chk = document.getElementById('check-stage-gradarena');
        flowState.includeGradArena = chk.checked;
      }

      // Ensure at least one stage is active
      if (!flowState.includeDwaani && !flowState.includeGradArena) {
        alert('Assessment must contain at least one stage (Dwaani AI Interview or GradArena Assessment).');
        if (stage === 'dwaani') {
          flowState.includeDwaani = true;
          document.getElementById('check-stage-dwaani').checked = true;
        } else {
          flowState.includeGradArena = true;
          document.getElementById('check-stage-gradarena').checked = true;
        }
      }

      // Update card visual state
      const cardDwaani = document.getElementById('card-stage-dwaani');
      if (cardDwaani) {
        if (flowState.includeDwaani) {
          cardDwaani.classList.add('border-brand-500', 'bg-brand-50/20');
          cardDwaani.classList.remove('border-pearl-200', 'bg-pearl-50/30', 'opacity-60');
        } else {
          cardDwaani.classList.remove('border-brand-500', 'bg-brand-50/20');
          cardDwaani.classList.add('border-pearl-200', 'bg-pearl-50/30', 'opacity-60');
        }
      }

      const cardGrad = document.getElementById('card-stage-gradarena');
      if (cardGrad) {
        if (flowState.includeGradArena) {
          cardGrad.classList.add('border-purple-500', 'bg-purple-50/20');
          cardGrad.classList.remove('border-pearl-200', 'bg-pearl-50/30', 'opacity-60');
        } else {
          cardGrad.classList.remove('border-purple-500', 'bg-purple-50/20');
          cardGrad.classList.add('border-pearl-200', 'bg-pearl-50/30', 'opacity-60');
        }
      }

      // Update sequence container visibility
      const seqSection = document.getElementById('section-sequence-config');
      const badge = document.getElementById('workflowTypeBadge');
      if (flowState.includeDwaani && flowState.includeGradArena) {
        if (seqSection) seqSection.classList.remove('hidden');
        if (badge) {
          badge.textContent = 'Combined Multi-Stage Assessment (2 Stages)';
          badge.className = 'px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-brand-700 border border-brand-200';
        }
      } else {
        if (seqSection) seqSection.classList.add('hidden');
        if (badge) {
          badge.textContent = flowState.includeDwaani ? 'Single-Stage Dwaani AI Voice Interview' : 'Single-Stage GradArena Assessment';
          badge.className = 'px-2.5 py-1 rounded-full text-xs font-bold bg-pearl-100 text-pearl-700 border border-pearl-200';
        }
      }

      updateFlowUI();
    }

    function setStageMode(stage, mode) {
      if (stage === 'dwaani') {
        flowState.dwaaniMode = mode;
        const sel = document.getElementById('dwaani-existing-select');
        if (sel) {
          if (mode === 'existing') sel.classList.remove('hidden');
          else sel.classList.add('hidden');
        }
      } else if (stage === 'gradarena') {
        flowState.gradArenaMode = mode;
        const sel = document.getElementById('gradarena-existing-select');
        if (sel) {
          if (mode === 'existing') sel.classList.remove('hidden');
          else sel.classList.add('hidden');
        }
      }
      updateFlowUI();
    }

    function setSequence(seq) {
      flowState.sequence = seq;
      const labelDwaaniFirst = document.getElementById('label-seq-dwaani-first');
      const labelGradFirst = document.getElementById('label-seq-gradarena-first');

      if (seq === 'dwaani_first') {
        if (labelDwaaniFirst) {
          labelDwaaniFirst.classList.add('border-2', 'border-brand-500', 'bg-brand-50/30');
          labelDwaaniFirst.classList.remove('border-pearl-200', 'bg-white');
        }
        if (labelGradFirst) {
          labelGradFirst.classList.remove('border-2', 'border-brand-500', 'bg-brand-50/30');
          labelGradFirst.classList.add('border-pearl-200', 'bg-white');
        }
      } else {
        if (labelGradFirst) {
          labelGradFirst.classList.add('border-2', 'border-brand-500', 'bg-brand-50/30');
          labelGradFirst.classList.remove('border-pearl-200', 'bg-white');
        }
        if (labelDwaaniFirst) {
          labelDwaaniFirst.classList.remove('border-2', 'border-brand-500', 'bg-brand-50/30');
          labelDwaaniFirst.classList.add('border-pearl-200', 'bg-white');
        }
      }

      // Check radio
      const rDwaani = document.querySelector('input[name="flow_sequence"][value="dwaani_first"]');
      const rGrad = document.querySelector('input[name="flow_sequence"][value="gradarena_first"]');
      if (rDwaani) rDwaani.checked = (seq === 'dwaani_first');
      if (rGrad) rGrad.checked = (seq === 'gradarena_first');

      updateFlowUI();
    }

    function swapSequence() {
      const nextSeq = (flowState.sequence === 'dwaani_first') ? 'gradarena_first' : 'dwaani_first';
      setSequence(nextSeq);
    }

    function updateThreshold(stage, val) {
      val = parseInt(val) || 0;
      if (val > 100) val = 100;
      if (val < 0) val = 0;

      if (stage === 'dwaani') {
        flowState.dwaaniThreshold = val;
        const txt = document.getElementById('dwaani-thresh-num');
        const sld = document.getElementById('dwaani-thresh-range');
        if (txt) txt.value = val;
        if (sld) sld.value = val;
      } else if (stage === 'gradarena') {
        flowState.gradArenaThreshold = val;
        const txt = document.getElementById('gradarena-thresh-num');
        const sld = document.getElementById('gradarena-thresh-range');
        if (txt) txt.value = val;
        if (sld) sld.value = val;
      }
      updateFlowUI();
    }

    function updateFailureRule(stage, rule) {
      if (stage === 'dwaani') flowState.dwaaniFailureRule = rule;
      else if (stage === 'gradarena') flowState.gradArenaFailureRule = rule;
      updateFlowUI();
    }

    function updateFlowUI() {
      // 1. Render Visual Flow Diagram in Step 1
      const diag = document.getElementById('visual-flow-diagram');
      if (diag) {
        if (flowState.includeDwaani && flowState.includeGradArena) {
          if (flowState.sequence === 'dwaani_first') {
            diag.innerHTML = \`
              <div class="flex-1 p-3.5 rounded-xl bg-white border border-brand-300 shadow-2xs flex items-center gap-3">
                <span class="w-6 h-6 rounded-lg bg-brand text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">1</span>
                <div>
                  <div class="font-extrabold text-pearl-900 flex items-center gap-1.5">
                    <span>Dwaani AI Voice Interview</span>
                    <span class="text-[9px] font-mono px-1 bg-brand-50 text-brand-700 rounded border border-brand-200">Stage 1</span>
                  </div>
                  <div class="text-[11px] text-pearl-500 font-mono mt-0.5">Pass Gate: ≥ \${flowState.dwaaniThreshold}% Score Required</div>
                </div>
              </div>

              <div class="flex flex-col items-center justify-center px-1 shrink-0 text-pearl-400">
                <span class="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shadow-2xs">If Score ≥ \${flowState.dwaaniThreshold}%</span>
                <svg class="w-6 h-6 text-emerald-500 mt-0.5 rotate-90 md:rotate-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                <span class="text-[9px] text-rose-600 font-medium">Fail: \${flowState.dwaaniFailureRule === 'stop' ? 'Stop' : 'Review'}</span>
              </div>

              <div class="flex-1 p-3.5 rounded-xl bg-white border border-purple-300 shadow-2xs flex items-center gap-3">
                <span class="w-6 h-6 rounded-lg bg-purple-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">2</span>
                <div>
                  <div class="font-extrabold text-pearl-900 flex items-center gap-1.5">
                    <span>GradArena Assessment</span>
                    <span class="text-[9px] font-mono px-1 bg-purple-50 text-purple-700 rounded border border-purple-200">Stage 2</span>
                  </div>
                  <div class="text-[11px] text-pearl-500 font-mono mt-0.5">Pass Gate: ≥ \${flowState.gradArenaThreshold}% Score (MCQ + Code)</div>
                </div>
              </div>

              <div class="flex flex-col items-center justify-center px-1 shrink-0 text-pearl-400">
                <span class="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shadow-2xs">If Passed Both</span>
                <svg class="w-6 h-6 text-emerald-500 mt-0.5 rotate-90 md:rotate-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </div>

              <div class="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 shrink-0">
                <div class="font-bold text-xs flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Qualified Pool
                </div>
                <div class="text-[10px] text-emerald-700 font-mono">Hiring Manager Review</div>
              </div>
            \`;
          } else {
            diag.innerHTML = \`
              <div class="flex-1 p-3.5 rounded-xl bg-white border border-purple-300 shadow-2xs flex items-center gap-3">
                <span class="w-6 h-6 rounded-lg bg-purple-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">1</span>
                <div>
                  <div class="font-extrabold text-pearl-900 flex items-center gap-1.5">
                    <span>GradArena Assessment</span>
                    <span class="text-[9px] font-mono px-1 bg-purple-50 text-purple-700 rounded border border-purple-200">Stage 1</span>
                  </div>
                  <div class="text-[11px] text-pearl-500 font-mono mt-0.5">Pass Gate: ≥ \${flowState.gradArenaThreshold}% Score Required</div>
                </div>
              </div>

              <div class="flex flex-col items-center justify-center px-1 shrink-0 text-pearl-400">
                <span class="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shadow-2xs">If Score ≥ \${flowState.gradArenaThreshold}%</span>
                <svg class="w-6 h-6 text-emerald-500 mt-0.5 rotate-90 md:rotate-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                <span class="text-[9px] text-rose-600 font-medium">Fail: \${flowState.gradArenaFailureRule === 'stop' ? 'Stop' : 'Review'}</span>
              </div>

              <div class="flex-1 p-3.5 rounded-xl bg-white border border-brand-300 shadow-2xs flex items-center gap-3">
                <span class="w-6 h-6 rounded-lg bg-brand text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">2</span>
                <div>
                  <div class="font-extrabold text-pearl-900 flex items-center gap-1.5">
                    <span>Dwaani AI Voice Interview</span>
                    <span class="text-[9px] font-mono px-1 bg-brand-50 text-brand-700 rounded border border-brand-200">Stage 2</span>
                  </div>
                  <div class="text-[11px] text-pearl-500 font-mono mt-0.5">Pass Gate: ≥ \${flowState.dwaaniThreshold}% Score Required</div>
                </div>
              </div>

              <div class="flex flex-col items-center justify-center px-1 shrink-0 text-pearl-400">
                <span class="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shadow-2xs">If Passed Both</span>
                <svg class="w-6 h-6 text-emerald-500 mt-0.5 rotate-90 md:rotate-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </div>

              <div class="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 shrink-0">
                <div class="font-bold text-xs flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Qualified Pool
                </div>
                <div class="text-[10px] text-emerald-700 font-mono">Hiring Manager Review</div>
              </div>
            \`;
          }
        } else {
          // Single stage view
          const singleTitle = flowState.includeDwaani ? 'Dwaani AI Voice Interview' : 'GradArena Assessment';
          const singleThresh = flowState.includeDwaani ? flowState.dwaaniThreshold : flowState.gradArenaThreshold;
          diag.innerHTML = \`
            <div class="flex-1 p-4 rounded-xl bg-white border border-pearl-200 shadow-2xs flex items-center justify-between">
              <div>
                <span class="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-pearl-100 text-pearl-700 uppercase">Single-Stage Workflow</span>
                <div class="text-xs font-bold text-pearl-900 mt-1">\${singleTitle}</div>
                <div class="text-[11px] text-pearl-400">Pass Threshold: ≥ \${singleThresh}%</div>
              </div>
              <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                Direct Evaluation
              </span>
            </div>
          \`;
        }
      }

      // 2. Render Step 2: Stage Thresholds and Question Panels
      const orderBanner = document.getElementById('step2-order-banner');
      if (orderBanner) {
        if (flowState.includeDwaani && flowState.includeGradArena) {
          if (flowState.sequence === 'dwaani_first') {
            orderBanner.innerHTML = \`
              <span class="px-2 py-0.5 rounded bg-brand text-white font-mono text-xs">Stage 1: Dwaani AI Voice</span>
              <span class="text-pearl-400">→</span>
              <span class="text-xs font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Gate: ≥ \${flowState.dwaaniThreshold}%</span>
              <span class="text-pearl-400">→</span>
              <span class="px-2 py-0.5 rounded bg-purple-600 text-white font-mono text-xs">Stage 2: GradArena Assessment</span>
            \`;
          } else {
            orderBanner.innerHTML = \`
              <span class="px-2 py-0.5 rounded bg-purple-600 text-white font-mono text-xs">Stage 1: GradArena Assessment</span>
              <span class="text-pearl-400">→</span>
              <span class="text-xs font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Gate: ≥ \${flowState.gradArenaThreshold}%</span>
              <span class="text-pearl-400">→</span>
              <span class="px-2 py-0.5 rounded bg-brand text-white font-mono text-xs">Stage 2: Dwaani AI Voice</span>
            \`;
          }
        } else {
          orderBanner.innerHTML = \`
            <span class="px-2 py-0.5 rounded bg-brand-50 text-brand-800 border border-brand-200 font-mono text-xs">
              \${flowState.includeDwaani ? 'Single Stage: Dwaani AI Interview' : 'Single Stage: GradArena Assessment'}
            </span>
          \`;
        }
      }

      // Populate stage-thresholds-container dynamically
      const threshContainer = document.getElementById('stage-thresholds-container');
      if (threshContainer) {
        let cardsHtml = '';

        const dwaaniCard = \`
          <!-- DWAANI AI THRESHOLD & QUESTION CONFIG CARD -->
          <div class="bg-white p-6 rounded-2xl border-2 border-brand-400 shadow-card-lux space-y-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-pearl-200/80 pb-4">
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-xl bg-brand text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">AI</span>
                <div>
                  <h3 class="text-sm font-extrabold text-pearl-900">Dwaani AI Voice Interview Stage</h3>
                  <div class="text-[11px] text-pearl-500 font-mono mt-0.5">
                    Source: \${flowState.dwaaniMode === 'new' ? 'Newly Authored Interview' : 'Linked Existing: ' + flowState.dwaaniExistingId}
                  </div>
                </div>
              </div>
              <span class="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-brand-50 text-brand-700 border border-brand-200">
                \${flowState.sequence === 'dwaani_first' ? 'STAGE 1 (INITIAL SCREENING)' : 'STAGE 2 (FINAL INTERVIEW)'}
              </span>
            </div>

            <!-- Pass Threshold Controls (Step 3 Requirement) -->
            <div class="p-5 rounded-xl bg-brand-50/30 border border-brand-200 space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div class="text-xs font-bold text-pearl-900 flex items-center gap-2">
                    <span>Minimum Passing Threshold (%)</span>
                    <span class="text-[10px] text-brand-600 font-mono">(User-Defined)</span>
                  </div>
                  <p class="text-[11px] text-pearl-500 mt-0.5">Candidates must score at or above this percentage to pass this stage</p>
                </div>
                <div class="flex items-center gap-3">
                  <input type="range" id="dwaani-thresh-range" min="0" max="100" value="\${flowState.dwaaniThreshold}" oninput="updateThreshold('dwaani', this.value)" class="w-32 accent-brand">
                  <div class="flex items-center">
                    <input type="number" id="dwaani-thresh-num" min="0" max="100" value="\${flowState.dwaaniThreshold}" onchange="updateThreshold('dwaani', this.value)" class="w-16 px-2.5 py-1 text-center font-mono font-bold text-sm bg-white border border-brand-300 rounded-lg text-brand-700 outline-none">
                    <span class="text-xs font-bold text-pearl-500 ml-1.5">%</span>
                  </div>
                </div>
              </div>

              <!-- Progression Gating & Failure Routing Rule (Step 3 & 4) -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-brand-200/70">
                <div>
                  <label class="block text-xs font-semibold text-pearl-800 mb-1.5">Progression Gate Condition:</label>
                  <label class="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-brand-200 text-xs cursor-pointer">
                    <input type="checkbox" checked class="mt-0.5 accent-brand" onchange="flowState.dwaaniRequirePassToAdvance = this.checked; updateFlowUI()">
                    <div>
                      <span class="font-bold text-pearl-900">Require Passing Score (≥ \${flowState.dwaaniThreshold}%) to Advance</span>
                      <p class="text-[11px] text-pearl-500 mt-0.5">Stage 2 invitation is conditionally sent only after passing.</p>
                    </div>
                  </label>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-pearl-800 mb-1.5">When Candidate Fails This Stage:</label>
                  <select onchange="updateFailureRule('dwaani', this.value)" class="w-full p-2.5 text-xs bg-white border border-brand-200 rounded-xl outline-none font-medium text-pearl-800">
                    <option value="stop" \${flowState.dwaaniFailureRule === 'stop' ? 'selected' : ''}>Stop Workflow Immediately (Auto-Regret Email)</option>
                    <option value="review" \${flowState.dwaaniFailureRule === 'review' ? 'selected' : ''}>Route to Recruiter Manual Review Queue (Hold)</option>
                    <option value="flag" \${flowState.dwaaniFailureRule === 'flag' ? 'selected' : ''}>Allow Next Stage but Tag as Unqualified (Informational)</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Voice Interview Questions / Prompts -->
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-pearl-800 uppercase font-mono tracking-wider">3D Metric Weights & Persona</span>
                <span class="text-[11px] text-pearl-500 font-mono">4 Adaptive Voice Questions Configured</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div class="p-3 rounded-xl bg-pearl-50 border border-pearl-200">
                  <div class="text-pearl-500 text-[11px]">Relevance Weight</div>
                  <div class="font-mono font-bold text-brand mt-0.5">40% Minimum</div>
                </div>
                <div class="p-3 rounded-xl bg-pearl-50 border border-pearl-200">
                  <div class="text-pearl-500 text-[11px]">Technical Accuracy</div>
                  <div class="font-mono font-bold text-emerald-700 mt-0.5">40% Minimum</div>
                </div>
                <div class="p-3 rounded-xl bg-pearl-50 border border-pearl-200">
                  <div class="text-pearl-500 text-[11px]">Communication Clarity</div>
                  <div class="font-mono font-bold text-purple-700 mt-0.5">20% Minimum</div>
                </div>
              </div>
            </div>
          </div>
        \`;

        const gradCard = \`
          <!-- GRADARENA ASSESSMENT THRESHOLD & QUESTION CONFIG CARD -->
          <div class="bg-white p-6 rounded-2xl border-2 border-purple-400 shadow-card-lux space-y-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-pearl-200/80 pb-4">
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-xl bg-purple-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">GA</span>
                <div>
                  <h3 class="text-sm font-extrabold text-pearl-900">GradArena Proctored Assessment Stage</h3>
                  <div class="text-[11px] text-pearl-500 font-mono mt-0.5">
                    Source: \${flowState.gradArenaMode === 'new' ? 'Newly Authored Technical Test' : 'Linked Existing: ' + flowState.gradArenaExistingId}
                  </div>
                </div>
              </div>
              <span class="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-purple-50 text-purple-700 border border-purple-200">
                \${flowState.sequence === 'gradarena_first' ? 'STAGE 1 (INITIAL SCREENING)' : 'STAGE 2 (TECHNICAL EVALUATION)'}
              </span>
            </div>

            <!-- Pass Threshold Controls (Step 3 Requirement) -->
            <div class="p-5 rounded-xl bg-purple-50/30 border border-purple-200 space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div class="text-xs font-bold text-pearl-900 flex items-center gap-2">
                    <span>Minimum Passing Threshold (%)</span>
                    <span class="text-[10px] text-purple-600 font-mono">(User-Defined)</span>
                  </div>
                  <p class="text-[11px] text-pearl-500 mt-0.5">Candidates must score at or above this percentage across MCQs & Coding sandbox</p>
                </div>
                <div class="flex items-center gap-3">
                  <input type="range" id="gradarena-thresh-range" min="0" max="100" value="\${flowState.gradArenaThreshold}" oninput="updateThreshold('gradarena', this.value)" class="w-32 accent-purple-600">
                  <div class="flex items-center">
                    <input type="number" id="gradarena-thresh-num" min="0" max="100" value="\${flowState.gradArenaThreshold}" onchange="updateThreshold('gradarena', this.value)" class="w-16 px-2.5 py-1 text-center font-mono font-bold text-sm bg-white border border-purple-300 rounded-lg text-purple-700 outline-none">
                    <span class="text-xs font-bold text-pearl-500 ml-1.5">%</span>
                  </div>
                </div>
              </div>

              <!-- Progression Gating & Failure Routing Rule (Step 3 & 4) -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-purple-200/70">
                <div>
                  <label class="block text-xs font-semibold text-pearl-800 mb-1.5">Proctor & Progression Conditions:</label>
                  <div class="space-y-2">
                    <label class="flex items-center gap-2 text-xs text-pearl-800 cursor-pointer">
                      <input type="checkbox" checked class="accent-purple-600">
                      <span>Require Passing Score (≥ \${flowState.gradArenaThreshold}%)</span>
                    </label>
                    <label class="flex items-center gap-2 text-xs text-pearl-800 cursor-pointer">
                      <input type="checkbox" checked class="accent-purple-600" onchange="flowState.gradArenaProctorZeroFlags = this.checked">
                      <span>Require 0 Critical Proctor Flags (Dual-Cam QR Verified)</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-pearl-800 mb-1.5">When Candidate Fails This Stage:</label>
                  <select onchange="updateFailureRule('gradarena', this.value)" class="w-full p-2.5 text-xs bg-white border border-purple-200 rounded-xl outline-none font-medium text-pearl-800">
                    <option value="review" \${flowState.gradArenaFailureRule === 'review' ? 'selected' : ''}>Route to Recruiter Manual Review Pool (Hold)</option>
                    <option value="stop" \${flowState.gradArenaFailureRule === 'stop' ? 'selected' : ''}>Stop Workflow Immediately (Auto-Regret Email)</option>
                    <option value="flag" \${flowState.gradArenaFailureRule === 'flag' ? 'selected' : ''}>Tag as Review & Notify Assigned Recruiter</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Test Content Breakdown -->
            <div class="space-y-2 text-xs">
              <div class="p-3 bg-pearl-50 rounded-xl border border-pearl-200 flex justify-between items-center">
                <span class="font-bold text-pearl-900">Section 1: 15 Multiple Choice Questions (System Architecture)</span>
                <span class="text-pearl-500 font-mono">30 Marks</span>
              </div>
              <div class="p-3 bg-pearl-50 rounded-xl border border-pearl-200 flex justify-between items-center">
                <span class="font-bold text-pearl-900">Section 2: Live Algorithmic Coding Challenge (Task Queue)</span>
                <span class="text-pearl-500 font-mono">30 Marks</span>
              </div>
            </div>
          </div>
        \`;

        if (flowState.includeDwaani && flowState.includeGradArena) {
          if (flowState.sequence === 'dwaani_first') {
            cardsHtml = dwaaniCard + gradCard;
          } else {
            cardsHtml = gradCard + dwaaniCard;
          }
        } else if (flowState.includeDwaani) {
          cardsHtml = dwaaniCard;
        } else {
          cardsHtml = gradCard;
        }

        threshContainer.innerHTML = cardsHtml;
      }

      // 3. Render Step 3: Blueprint Summary
      const summaryTitle = document.getElementById('summaryWorkflowTitle');
      const titleInput = document.getElementById('workflowTitleInput');
      if (summaryTitle && titleInput) {
        summaryTitle.textContent = titleInput.value || 'Senior Java Microservices Architect';
      }

      const summaryList = document.getElementById('summaryStepsList');
      if (summaryList) {
        if (flowState.includeDwaani && flowState.includeGradArena) {
          const isDwaaniFirst = (flowState.sequence === 'dwaani_first');
          const stage1Name = isDwaaniFirst ? 'Dwaani AI Voice Interview' : 'GradArena Assessment';
          const stage1Source = isDwaaniFirst ? (flowState.dwaaniMode === 'new' ? 'New AI Interview' : 'Existing: ' + flowState.dwaaniExistingId) : (flowState.gradArenaMode === 'new' ? 'New Assessment' : 'Existing: ' + flowState.gradArenaExistingId);
          const stage1Thresh = isDwaaniFirst ? flowState.dwaaniThreshold : flowState.gradArenaThreshold;
          const stage1Fail = isDwaaniFirst ? (flowState.dwaaniFailureRule === 'stop' ? 'Stop Workflow & Send Regret' : 'Route to Manual Review') : (flowState.gradArenaFailureRule === 'stop' ? 'Stop Workflow' : 'Route to Manual Review');

          const stage2Name = isDwaaniFirst ? 'GradArena Assessment' : 'Dwaani AI Voice Interview';
          const stage2Source = isDwaaniFirst ? (flowState.gradArenaMode === 'new' ? 'New Assessment' : 'Existing: ' + flowState.gradArenaExistingId) : (flowState.dwaaniMode === 'new' ? 'New AI Interview' : 'Existing: ' + flowState.dwaaniExistingId);
          const stage2Thresh = isDwaaniFirst ? flowState.gradArenaThreshold : flowState.dwaaniThreshold;
          const stage2Fail = isDwaaniFirst ? (flowState.gradArenaFailureRule === 'stop' ? 'Stop Workflow' : 'Route to Manual Review') : (flowState.dwaaniFailureRule === 'stop' ? 'Stop Workflow' : 'Route to Manual Review');

          summaryList.innerHTML = \`
            <div class="p-4 rounded-xl bg-white border border-pearl-200 space-y-2">
              <div class="flex items-center justify-between text-xs font-bold text-pearl-900">
                <span class="flex items-center gap-2">
                  <span class="w-5 h-5 rounded-full bg-brand text-white font-mono text-[10px] flex items-center justify-center">1</span>
                  <span>Step 1: \${stage1Name}</span>
                </span>
                <span class="text-brand font-mono">Passing Threshold: ≥ \${stage1Thresh}%</span>
              </div>
              <div class="text-[11px] text-pearl-500 pl-7 space-y-1">
                <div>Source: <span class="font-semibold text-pearl-700">\${stage1Source}</span></div>
                <div>Gating Rule: <span class="font-bold text-emerald-700">Candidates must score ≥ \${stage1Thresh}% to unlock Step 2.</span></div>
                <div>On Failure Rule: <span class="font-semibold text-rose-700">\${stage1Fail}</span></div>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-white border border-pearl-200 space-y-2">
              <div class="flex items-center justify-between text-xs font-bold text-pearl-900">
                <span class="flex items-center gap-2">
                  <span class="w-5 h-5 rounded-full bg-purple-600 text-white font-mono text-[10px] flex items-center justify-center">2</span>
                  <span>Step 2: \${stage2Name}</span>
                </span>
                <span class="text-purple-700 font-mono">Passing Threshold: ≥ \${stage2Thresh}%</span>
              </div>
              <div class="text-[11px] text-pearl-500 pl-7 space-y-1">
                <div>Source: <span class="font-semibold text-pearl-700">\${stage2Source}</span></div>
                <div>Integrity Rule: <span class="font-bold text-pearl-700">Dual-Camera QR Live Proctoring required (0 critical flags).</span></div>
                <div>On Passing Both: <span class="font-bold text-emerald-700">Automatically Shortlist Candidate for Hiring Manager Round.</span></div>
              </div>
            </div>
          \`;
        } else {
          const sName = flowState.includeDwaani ? 'Dwaani AI Voice Interview' : 'GradArena Assessment';
          const sThresh = flowState.includeDwaani ? flowState.dwaaniThreshold : flowState.gradArenaThreshold;
          summaryList.innerHTML = \`
            <div class="p-4 rounded-xl bg-white border border-pearl-200 space-y-2">
              <div class="flex items-center justify-between text-xs font-bold text-pearl-900">
                <span>Single Stage: \${sName}</span>
                <span class="font-mono text-brand">Passing Threshold: ≥ \${sThresh}%</span>
              </div>
              <div class="text-[11px] text-pearl-500">
                Candidates complete a single assessment. Qualifiers (≥ \${sThresh}%) are placed in the Shortlisted Talent Pool.
              </div>
            </div>
          \`;
        }
      }
    }

    // Step Switcher for Test Studio Wizard
    function setTestStudioStep(stepNum) {
      flowState.currentStep = stepNum;

      document.querySelectorAll('.studio-step-content').forEach(el => el.classList.add('hidden'));
      const activeStep = document.getElementById(\`studio-step-\${stepNum}\`);
      if (activeStep) activeStep.classList.remove('hidden');

      const ind = document.getElementById('studioStepIndicator');
      if (ind) ind.textContent = \`Step \${stepNum} of 3\`;

      for (let i = 1; i <= 3; i++) {
        const tab = document.getElementById(\`studio-tab-\${i}\`);
        if (!tab) continue;
        if (i === stepNum) {
          tab.classList.add('bg-brand-50', 'border-brand-200');
          tab.classList.remove('bg-pearl-50', 'border-pearl-200');
        } else {
          tab.classList.remove('bg-brand-50', 'border-brand-200');
          tab.classList.add('bg-pearl-50', 'border-pearl-200');
        }
      }

      updateFlowUI();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Save and Activate Workflow with Confirmation
    function saveAndActivateWorkflow() {
      try {
        localStorage.setItem('gradarena_configured_workflow', JSON.stringify(flowState));
      } catch (e) {}

      const summaryText = (flowState.includeDwaani && flowState.includeGradArena)
        ? (flowState.sequence === 'dwaani_first'
            ? \`Workflow Created!\\n\\n1. Step 1: Dwaani AI Voice Interview (Pass Gate: ≥ \${flowState.dwaaniThreshold}%)\\n2. Step 2: GradArena Assessment (Pass Gate: ≥ \${flowState.gradArenaThreshold}%)\\n\\nCandidates who fail Step 1 are blocked from Step 2 as configured.\`
            : \`Workflow Created!\\n\\n1. Step 1: GradArena Assessment (Pass Gate: ≥ \${flowState.gradArenaThreshold}%)\\n2. Step 2: Dwaani AI Voice Interview (Pass Gate: ≥ \${flowState.dwaaniThreshold}%)\\n\\nCandidates who fail Step 1 are blocked from Step 2 as configured.\`)
        : \`Single-stage assessment workflow created successfully!\`;

      alert(summaryText);
      switchScreen('tests');
    }
`;

// Insert jsAddition before the closing </script> in manager-panel.html and manager-dashboard.html
const files = ['manager-panel.html', 'manager-dashboard.html'];
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Find </script>
  const scriptClosePos = content.lastIndexOf('</script>');
  if (scriptClosePos !== -1) {
    const newContent = content.substring(0, scriptClosePos) + '\n' + jsAddition + '\n  ' + content.substring(scriptClosePos);
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated JavaScript in ${file}`);
  }
}
