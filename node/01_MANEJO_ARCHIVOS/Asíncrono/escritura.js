const fs = require('fs');

// Escribir en el archivo de manera asíncrona
fs.writeFile('example.txt', 'Este es el contenido inicial.', (err) => {
  if (err) throw err;
  console.log('Archivo escrito correctamente.');
});

//código que no depende del código anterior
//Se sigue ejecutando