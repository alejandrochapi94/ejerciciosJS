const ruta = 'http://localhost:3000/api/users';
fetch(ruta, {cache: 'no-cache'})
  .then(response => {
      console.log(response.status);
    if (response.status === 202) {
      console.log('La petición fue aceptada (202 Accepted)');
      alert("Tu solicitud se está procesando.");
      window.location.href = 'contacto.html';

      //redirigimos a la página contacto.html en seguida de la petición

      // Aquí puedes realizar otras acciones, como mostrar un mensaje al usuario
    } else if (response.status === 400) {
      console.error('Petición incorrecta (400 Bad Request)');
      // Manejar el error 400
      alert("Hubo un problema con tu solicitud.");
      return response.json().then(errorData => {  // Obtener detalles del error en formato JSON
        console.error(errorData);
      });

    } else if (response.status === 203) {
      console.log('Error del servidor (500 Internal Server Error)');
      // Manejar el error 500
      alert("Hubo un error en el servidor.");

    } else {
      console.log(`Código de estado: ${response.status}`);
      // Manejar otros códigos de estado o la respuesta exitosa por defecto.
      return response.json().then(data => {  // Procesa la respuesta como JSON
        console.log(data); // O muestra los datos al usuario
      });
    }
  })
  .catch(error => {
    console.error('Error en la petición:', error);
    // Manejar errores de red u otros errores que impidan que la petición se complete
    alert("No se pudo conectar al servidor.");
  });