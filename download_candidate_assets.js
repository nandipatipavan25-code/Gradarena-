const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, 'assets', 'candidate');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const images = [
  { name: 'avatar-kalyani.jpg', url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80' },
  { name: 'avatar-nazeer.jpg', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80' },
  { name: 'avatar-pramod.jpg', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80' },
  { name: 'avatar-manikanta.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80' },
  
  // 8 Webcam shots
  { name: 'webcam-1.jpg', url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=320&h=200&auto=format&fit=crop&q=80' },
  { name: 'webcam-2.jpg', url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=320&h=200&auto=format&fit=crop&q=80' },
  { name: 'webcam-3.jpg', url: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=320&h=200&auto=format&fit=crop&q=80' },
  { name: 'webcam-4.jpg', url: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=320&h=200&auto=format&fit=crop&q=80' },
  { name: 'webcam-5.jpg', url: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=320&h=200&auto=format&fit=crop&q=80' },
  { name: 'webcam-6.jpg', url: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=320&h=200&auto=format&fit=crop&q=80' },
  { name: 'webcam-7.jpg', url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=320&h=200&auto=format&fit=crop&q=80' },
  { name: 'webcam-8.jpg', url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=320&h=200&auto=format&fit=crop&q=80' },

  // Room scan verification
  { name: 'room-scan.jpg', url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=480&auto=format&fit=crop&q=80' }
];

function download(item) {
  return new Promise((resolve) => {
    const dest = path.join(dir, item.name);
    const file = fs.createWriteStream(dest);
    https.get(item.url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (redirectRes) => {
          redirectRes.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log('Downloaded', item.name);
            resolve();
          });
        });
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Downloaded', item.name);
          resolve();
        });
      }
    }).on('error', (err) => {
      console.error('Error downloading', item.name, err.message);
      resolve();
    });
  });
}

async function run() {
  for (const img of images) {
    await download(img);
  }
  console.log('All images downloaded successfully!');
}

run();
