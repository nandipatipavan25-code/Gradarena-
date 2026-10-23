const fs = require('fs');
let code = fs.readFileSync('build_premium_gradarena.js', 'utf8');

const target = `      const step = params.get('step');
      if (step) {
        setCreationStep(parseInt(step));
      }`;

const replacement = `      const step = params.get('step');
      if (step) {
        setCreationStep(parseInt(step));
      }
      const scrollY = params.get('scroll');
      if (scrollY) {
        setTimeout(() => {
          const main = document.querySelector('main');
          if (main) main.scrollTop = parseInt(scrollY);
        }, 200);
      }`;

code = code.replace(target, replacement);
fs.writeFileSync('build_premium_gradarena.js', code, 'utf8');
console.log('Added scroll param support to build_premium_gradarena.js');
