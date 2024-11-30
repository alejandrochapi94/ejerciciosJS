  // Escuchamos el evento 'load' en la ventana
  window.addEventListener('load', function() {
    console.log("Todos los recursos cargados (load)");

    // 1. Obtener las dimensiones de la imagen (ahora sí está cargada)
    const imagen = document.getElementById('miImagen');
    const ancho = imagen.offsetWidth;
    const alto = imagen.offsetHeight;

    // 2. Mostrar las dimensiones en el DOM
    document.getElementById('anchoImagen').textContent = ancho + "px";
    document.getElementById('altoImagen').textContent = alto + "px";

    // 3. Mostrar la imagen
    imagen.style.display = 'block';


  });

  // Este código se ejecutará *antes* del evento load
  console.log("Script ejecutado (antes de load)");
