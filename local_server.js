const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const MANAGER_PORT = 3000;
const RECRUITER_PORT = 3001;
const BASE_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

function serveFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found: ' + path.basename(filePath));
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(data);
  });
}

function handleRequest(req, res, defaultApp) {
  const parsedUrl = url.parse(req.url);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Normalize root path based on port default
  if (pathname === '/' || pathname === '') {
    if (defaultApp === 'manager') {
      pathname = '/manager-panel.html';
    } else if (defaultApp === 'recruiter') {
      pathname = '/recruiter-panel.html';
    }
  }

  // Friendly Route Aliases
  if (pathname === '/manager' || pathname === '/manager/' || pathname === '/manager-dashboard') {
    pathname = '/manager-panel.html';
  } else if (pathname === '/recruiter' || pathname === '/recruiter/' || pathname === '/recruiter-dashboard') {
    pathname = '/recruiter-panel.html';
  }

  // File resolution
  const safePath = path.normalize(path.join(BASE_DIR, pathname));

  // Security check: ensure path is within BASE_DIR
  if (!safePath.startsWith(BASE_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(safePath, (err, stats) => {
    if (!err && stats.isFile()) {
      serveFile(res, safePath);
    } else {
      // Fallback: If requesting HTML without .html
      const fallbackHtml = safePath + '.html';
      if (fs.existsSync(fallbackHtml) && fs.statSync(fallbackHtml).isFile()) {
        serveFile(res, fallbackHtml);
      } else {
        // Fallback to default portal
        const targetHtml = defaultApp === 'recruiter' ? 'recruiter-panel.html' : 'manager-panel.html';
        serveFile(res, path.join(BASE_DIR, targetHtml));
      }
    }
  });
}

// 1. Manager Dedicated Server (Port 3000)
const managerServer = http.createServer((req, res) => {
  handleRequest(req, res, 'manager');
});

// 2. Recruiter Dedicated Server (Port 3001)
const recruiterServer = http.createServer((req, res) => {
  handleRequest(req, res, 'recruiter');
});

managerServer.listen(MANAGER_PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 [GRADARENA] LOCAL DEVELOPMENT SERVERS ARE LIVE!`);
  console.log(`======================================================`);
  console.log(`👔 MANAGER PORTAL (Dedicated Port ${MANAGER_PORT}):`);
  console.log(`   ➜ Local:   http://localhost:${MANAGER_PORT}`);
  console.log(`   ➜ Direct:  http://localhost:${MANAGER_PORT}/manager`);
  console.log(`------------------------------------------------------`);
});

recruiterServer.listen(RECRUITER_PORT, () => {
  console.log(`🎯 RECRUITER PORTAL (Dedicated Port ${RECRUITER_PORT}):`);
  console.log(`   ➜ Local:   http://localhost:${RECRUITER_PORT}`);
  console.log(`   ➜ Direct:  http://localhost:${RECRUITER_PORT}/recruiter`);
  console.log(`======================================================\n`);
});
