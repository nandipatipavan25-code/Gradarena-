const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlFile = path.resolve(__dirname, 'manager-panel.html').replace(/\\/g, '/');
const artifactDir = 'C:\\Users\\gades\\.gemini\\antigravity\\brain\\b50abc04-b23a-4b6b-a65d-990639f2aff3';

// We will launch Chrome with custom scripts using data URIs or query hashes
// Better yet: we can create a tiny test harness HTML that loads manager-panel.html and triggers the modal animations at specific delays!
const harnessHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body, html { margin: 0; padding: 0; width: 100%; height: 100%; }
    iframe { border: none; width: 100vw; height: 100vh; }
  </style>
</head>
<body>
  <iframe id="appFrame" src="file:///${htmlFile}"></iframe>
  <script>
    const params = new URLSearchParams(window.location.search);
    const action = params.get('action');
    const iframe = document.getElementById('appFrame');

    iframe.onload = () => {
      const doc = iframe.contentDocument;
      const win = iframe.contentWindow;

      if (action === 'resume-modal-scan') {
        win.switchScreen('candidates');
        win.openResumeUploadModal();
        win.startResumeAnimation('Kalyani_Lead_IT_Support.pdf', 1.4);
      } else if (action === 'resume-modal-complete') {
        win.switchScreen('candidates');
        win.openResumeUploadModal();
        win.startResumeAnimation('Kalyani_Lead_IT_Support.pdf', 1.4);
        // Force complete after timeout
        setTimeout(() => {
          doc.getElementById('scanProgressBar').style.width = '100%';
          doc.getElementById('scanPercentage').textContent = '100%';
          doc.getElementById('scanStepBadge').textContent = 'STAGE 5: COMPLETE';
          doc.getElementById('scanResultsArea').classList.remove('hidden');
          doc.getElementById('matchScoreCircle').style.strokeDashoffset = '13.8';
          doc.getElementById('matchScoreText').textContent = '89%';
        }, 1600);
      } else if (action === 'test-intake-resume') {
        win.switchScreen('test-create');
        win.switchIntakeTab('resume');
        win.triggerInPageResumeScan('Kalyani_Lead_IT_Support.pdf', 1.4);
        setTimeout(() => {
          doc.getElementById('inPageProgressBar').style.width = '100%';
          doc.getElementById('inPagePercent').textContent = '100%';
          doc.getElementById('inPageExtractedBadges').classList.remove('hidden');
        }, 1200);
      } else if (action === 'test-gen-modal-stream') {
        win.switchScreen('test-create');
        win.openTestGenerateModal();
      } else if (action === 'test-gen-modal-complete') {
        win.switchScreen('test-create');
        win.openTestGenerateModal();
        setTimeout(() => {
          doc.getElementById('genProgressBar').style.width = '100%';
          doc.getElementById('genQuestionsCount').textContent = 'Questions: 25 / 25';
          doc.getElementById('genStatusText').innerHTML = '<span class="text-emerald-600 font-bold">✓ Generation Complete! 25 Questions Formulated.</span>';
          doc.getElementById('genSectionsGrid').classList.remove('hidden');
          const btn = doc.getElementById('btnApplyGeneratedTest');
          btn.disabled = false;
          btn.className = 'px-5 py-2 rounded-xl bg-[#107acc] text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5 cursor-pointer';
          for (let n = 1; n <= 4; n++) {
            const icon = doc.getElementById('nodeIcon-' + n);
            icon.innerHTML = '✓';
            icon.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center';
            doc.getElementById('genNode-' + n).className = 'p-2.5 rounded-xl border border-emerald-300 bg-emerald-50/60 text-emerald-800 font-bold transition';
          }
        }, 1800);
      }
    };
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'anim-harness.html'), harnessHtml, 'utf8');

const targets = [
  { name: 'anim-resume-scanning', action: 'resume-modal-scan', delay: '1200' },
  { name: 'anim-resume-completed', action: 'resume-modal-complete', delay: '2200' },
  { name: 'anim-test-intake-resume', action: 'test-intake-resume', delay: '1800' },
  { name: 'anim-test-gen-stream', action: 'test-gen-modal-stream', delay: '1800' },
  { name: 'anim-test-gen-complete', action: 'test-gen-modal-complete', delay: '2400' }
];

console.log('Capturing animation preview screenshots...');

targets.forEach((t) => {
  const outPath = path.join(artifactDir, `${t.name}.png`);
  const harnessUrl = `file:///${path.resolve(__dirname, 'anim-harness.html').replace(/\\/g, '/')}?action=${t.action}`;
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--window-size=1440,960',
    `--screenshot=${outPath}`,
    `--virtual-time-budget=${t.delay}`,
    harnessUrl
  ];
  try {
    execFileSync(chromePath, args);
    const size = (fs.statSync(outPath).size / 1024).toFixed(1);
    console.log(`[✓] ${t.name}.png captured (${size} KB)`);
  } catch (err) {
    console.error(`[✗] Failed to capture ${t.name}:`, err.message);
  }
});

console.log('Finished capturing animation previews!');
