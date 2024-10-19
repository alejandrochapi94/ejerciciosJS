const fs = require('fs');

// Eliminar el archivo
fs.unlinkSync('example.txt');
console.log('Archivo eliminado correctamente.');
