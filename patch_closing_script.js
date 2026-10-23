const fs = require('fs');
let code = fs.readFileSync('build_human_gradarena.js', 'utf8');

const targetStr = `    function applyGeneratedTestBlueprint() {
      closeTestGenerateModal();
      switchScreen('test-create');
      setCreationStep(2);
      alert('AI assessment blueprint successfully loaded! 3 sections and 25 questions are now populated in your test creation workspace.');
    }

</body>
</html>`;

const replacementStr = `    function applyGeneratedTestBlueprint() {
      closeTestGenerateModal();
      switchScreen('test-create');
      setCreationStep(2);
      alert('AI assessment blueprint successfully loaded! 3 sections and 25 questions are now populated in your test creation workspace.');
    }

    // Auto-execute query actions
    window.addEventListener('DOMContentLoaded', () => {
      const params = new URLSearchParams(window.location.search);
      const modal = params.get('modal');
      const intake = params.get('intake');
      if (modal === 'resume-scan') {
        switchScreen('candidates');
        openResumeUploadModal();
        startResumeAnimation('Kalyani_Lead_IT_Support.pdf', 1.4);
      } else if (modal === 'resume-complete') {
        switchScreen('candidates');
        openResumeUploadModal();
        startResumeAnimation('Kalyani_Lead_IT_Support.pdf', 1.4);
        setTimeout(() => {
          const bar = document.getElementById('scanProgressBar');
          if (bar) bar.style.width = '100%';
          const pct = document.getElementById('scanPercentage');
          if (pct) pct.textContent = '100%';
          const badge = document.getElementById('scanStepBadge');
          if (badge) badge.textContent = 'STAGE 5: COMPLETE';
          const res = document.getElementById('scanResultsArea');
          if (res) res.classList.remove('hidden');
          const circle = document.getElementById('matchScoreCircle');
          if (circle) circle.style.strokeDashoffset = '13.8';
          const text = document.getElementById('matchScoreText');
          if (text) text.textContent = '89%';
        }, 150);
      } else if (modal === 'test-gen') {
        switchScreen('test-create');
        openTestGenerateModal();
      } else if (modal === 'test-gen-complete') {
        switchScreen('test-create');
        openTestGenerateModal();
        setTimeout(() => {
          const bar = document.getElementById('genProgressBar');
          if (bar) bar.style.width = '100%';
          const count = document.getElementById('genQuestionsCount');
          if (count) count.textContent = 'Questions: 25 / 25';
          const stat = document.getElementById('genStatusText');
          if (stat) stat.innerHTML = '<span class="text-emerald-600 font-bold">✓ Generation Complete! 25 Questions Formulated.</span>';
          const grid = document.getElementById('genSectionsGrid');
          if (grid) grid.classList.remove('hidden');
          const apply = document.getElementById('btnApplyGeneratedTest');
          if (apply) {
            apply.disabled = false;
            apply.className = 'px-5 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5 cursor-pointer';
          }
          for (let n = 1; n <= 4; n++) {
            const icon = document.getElementById('nodeIcon-' + n);
            if (icon) {
              icon.innerHTML = '✓';
              icon.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center';
            }
            const node = document.getElementById('genNode-' + n);
            if (node) node.className = 'p-2.5 rounded-xl border border-emerald-300 bg-emerald-50/60 text-emerald-800 font-bold transition';
          }
        }, 150);
      }
      if (intake === 'resume') {
        switchScreen('test-create');
        switchIntakeTab('resume');
        triggerInPageResumeScan('Kalyani_Lead_IT_Support.pdf', 1.4);
      }
    });
  </script>
</body>
</html>`;

if (code.includes(targetStr)) {
  code = code.replace(targetStr, replacementStr);
  fs.writeFileSync('build_human_gradarena.js', code, 'utf8');
  console.log('Successfully patched build_human_gradarena.js with closing script and query controller!');
} else {
  console.log('Target string not found in build_human_gradarena.js');
}
