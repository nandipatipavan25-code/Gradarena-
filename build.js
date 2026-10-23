const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const DIST_DIR = path.join(ROOT_DIR, 'dist');

console.log('🚀 Starting GradArena build process for Render / static hosting...');

// 1. Ensure dist directory exists
if (fs.existsSync(DIST_DIR)) {
  console.log('🧹 Cleaning existing dist directory...');
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DIST_DIR, { recursive: true });

// 2. Helper to copy file
function copyFile(src, dest) {
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(src, dest);
  console.log(`  ✓ Copied: ${path.basename(src)}`);
}

// 3. Helper to copy folder recursively
function copyFolder(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyFolder(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 4. Copy primary HTML files and SVGs
const filesToCopy = [
  'index.html',
  'manager-panel.html',
  'manager-dashboard.html',
  'recruiter-panel.html',
  'recruiter-dashboard.html',
  'Grad Arena Logo-01.svg'
];

for (const file of filesToCopy) {
  const fullSrc = path.join(ROOT_DIR, file);
  if (fs.existsSync(fullSrc)) {
    copyFile(fullSrc, path.join(DIST_DIR, file));
  }
}

// 5. Copy assets folder recursively
const assetsSrc = path.join(ROOT_DIR, 'assets');
if (fs.existsSync(assetsSrc)) {
  console.log('📦 Copying assets folder...');
  copyFolder(assetsSrc, path.join(DIST_DIR, 'assets'));
  console.log('  ✓ Assets copied successfully');
}

// 6. Write Render _redirects file for clean URL rewrites
const redirectsContent = `# Render Static Site Redirects & Route Rewrites
/manager        /manager-panel.html       200
/manager/       /manager-panel.html       200
/recruiter      /recruiter-panel.html     200
/recruiter/     /recruiter-panel.html     200
/dossier        /recruiter-panel.html?screen=candidate-eval  200
`;

fs.writeFileSync(path.join(DIST_DIR, '_redirects'), redirectsContent, 'utf8');
console.log('  ✓ Generated dist/_redirects for Render routing');

console.log('✨ GradArena build completed successfully in ./dist!');
