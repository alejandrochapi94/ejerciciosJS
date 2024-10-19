const fs = require('fs');

// Añadir contenido al archivo
fs.appendFileSync('example.txt', '\nEste es contenido adicional.');
console.log('Contenido añadido correctamente.');
