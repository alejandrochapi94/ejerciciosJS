const fs = require('fs');

// Leer el archivo
const data = fs.readFileSync('example.txt', 'utf-8');
console.log('Contenido del archivo:', data);

