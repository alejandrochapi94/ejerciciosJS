const ruta = 'http://localhost:3000/api/users';

document.getElementById("obtener-datos").addEventListener("click", () => {

  
  async function fetchData() {
    try {
      const response = await fetch(ruta, {cache: 'no-cache'});
      console.log(response.status);
      const data = await response.json();
        console.log(data);
        // Aquí puedes realizar otras acciones, como mostrar los datos en la página
        window.localStorage.setItem('datos', JSON.stringify(data));

      if (response.status === 201) {
        console.log('La petición fue aceptada (202 Accepted)');
        alert("Tu solicitud se está procesando.");
        window.location.href = 'contacto.html';
        return;
      } else if (response.status === 400) {
        console.error('Petición incorrecta (400 Bad Request)');
        alert("Hubo un problema con tu solicitud.");
        const errorData = await response.json();
        console.error(errorData);
        return;
      } else if (response.status === 420) {
        console.log('Error del servidor (420 Internal Server Error)');
        alert("Hubo un error en el servidor.");
        return;
      } else {
        console.log(`Código de estado no coincide: ${response.status}`);
        //Código por si no devuelve ningun estado válido
        return;
      }
    } catch (error) {
      console.error('Error en la petición:', error);
      alert("No se pudo conectar al servidor.");
      return;
    }
    
  }
  
  fetchData();
});


/*
POSIBLE ERROR

Unchecked runtime.lastError: The message port closed before a response was received.

Se deben a las extensiones del navegador.
Probar en diferentes entornos ayudará a verificar la correcta ejecución del código.


*/