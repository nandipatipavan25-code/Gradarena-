const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const BASE_DIR = fs.existsSync(path.join(__dirname, 'dist'))
  ? path.join(__dirname, 'dist')
  : __dirname;

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

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Normalize root path to index.html
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  // Friendly Route Aliases
  if (pathname === '/manager' || pathname === '/manager/' || pathname === '/manager-dashboard') {
    pathname = '/manager-panel.html';
  } else if (pathname === '/recruiter' || pathname === '/recruiter/' || pathname === '/recruiter-dashboard') {
    pathname = '/recruiter-panel.html';
  }

  // File resolution
  let safePath = path.normalize(path.join(BASE_DIR, pathname));

  // If file doesn't exist in BASE_DIR, check root __dirname as fallback
  if (!fs.existsSync(safePath) && BASE_DIR !== __dirname) {
    const rootFallback = path.normalize(path.join(__dirname, pathname));
    if (fs.existsSync(rootFallback)) {
      safePath = rootFallback;
    }
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
        // Fallback to index.html
        const indexPath = path.join(BASE_DIR, 'index.html');
        if (fs.existsSync(indexPath)) {
          serveFile(res, indexPath);
        } else {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
        }
      }
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`======================================================`);
  console.log(`🚀 GradArena Production Server is running on port ${PORT}`);
  console.log(`➜ Base directory: ${BASE_DIR}`);
  console.log(`➜ Manager:   http://localhost:${PORT}/manager`);
  console.log(`➜ Recruiter: http://localhost:${PORT}/recruiter`);
  console.log(`======================================================`);
});
