const fs = require('fs');

// Leer el archivo de manera asíncrona
fs.readFile('example.txt', 'utf-8', (err, data) => {
  if (err) {
    return console.error('Error al leer el archivo:', err);
  }
  console.log('Contenido del archivo:', data);
});
