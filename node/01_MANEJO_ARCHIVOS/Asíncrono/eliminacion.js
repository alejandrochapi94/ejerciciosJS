const fs = require('fs');

// Eliminar el archivo de manera asíncrona
fs.unlink('example.txt', (err) => {
  if (err) {
    return console.error('Error al eliminar el archivo:', err);
  }
  console.log('Archivo eliminado correctamente.');
});
