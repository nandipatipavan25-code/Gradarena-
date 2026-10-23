const fs = require('fs');
let code = fs.readFileSync('build_human_gradarena.js', 'utf8');

// Replace Bloom's with Blooms
code = code.replace("Extracting Bloom's cognitive taxonomy", "Extracting Blooms cognitive taxonomy");
code = code.replace("Extracting Bloom\\'s cognitive taxonomy", "Extracting Blooms cognitive taxonomy");

fs.writeFileSync('build_human_gradarena.js', code, 'utf8');
console.log('Fixed syntax in build_human_gradarena.js');
