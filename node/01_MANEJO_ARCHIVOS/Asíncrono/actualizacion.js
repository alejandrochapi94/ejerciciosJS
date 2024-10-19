const fs = require('fs');

// Agregar contenido al archivo de manera asíncrona
fs.appendFile('example.txt', '\nBienvenidos al curso de node', (err) => {
  if (err) {
    return console.error('Error al agregar contenido al archivo:', err);
  }
  console.log('Contenido añadido correctamente.');
});
