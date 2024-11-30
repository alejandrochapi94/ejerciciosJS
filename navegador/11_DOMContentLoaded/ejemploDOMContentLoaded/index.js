document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM cargado!");

    // 1. Modificar el texto de un párrafo
    const parrafo = document.getElementById('miParrafo');
    parrafo.textContent = "¡DOMContentLoaded funciona!";

    // 2. Añadir un manejador de eventos a un botón
    const boton = document.getElementById('miBoton');
    boton.addEventListener('click', function() {
      parrafo.textContent = "¡Botón clickeado!";
    });

    // 3. Mostrar la imagen (aunque no haya cargado completamente)
    const imagen = document.getElementById('miImagen');
    imagen.style.display = 'block';

    // Nota: Si necesitas obtener el ancho/alto REAL de la imagen
    // debes usar el evento 'load', ya que aquí la imagen
    // podría no estar completamente cargada todavía.

  });

  // Este código se ejecutará *antes* que el DOMContentLoaded
  // porque está antes de la etiqueta </body>
  console.log("Script ejecutado (antes de DOMContentLoaded)");


  // Ejemplo con evento load (para comparar)
  window.addEventListener('load', function() {
    console.log("Todos los recursos cargados (load)");
      const imagen = document.getElementById('miImagen');
      console.log("Ancho de la imagen (evento load):", imagen.offsetWidth);
  });

