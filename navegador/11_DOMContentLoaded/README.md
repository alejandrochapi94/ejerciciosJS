# El evento DOMContentLoaded

El evento `DOMContentLoaded` es un disparador crucial en JavaScript que indica que el HTML ha sido completamente parseado y el árbol DOM (Document Object Model) está construido, **pero sin esperar a que recursos externos como imágenes, hojas de estilo y scripts se carguen completamente**.  Es el momento ideal para comenzar a manipular el DOM de forma segura.

**¿Qué hace `DOMContentLoaded`?**

Este evento se activa cuando el navegador ha:

1. **Parseado completamente el HTML:**  El documento HTML ha sido leído e interpretado.
2. **Construido el árbol DOM:** Se ha creado la representación jerárquica del documento en memoria, permitiendo acceder a los elementos HTML mediante JavaScript.
3. **No ha esperado la carga completa de recursos externos:**  Imágenes, hojas de estilo, scripts enlazados externamente pueden seguir cargándose en segundo plano.

**¿Para qué usarlo?**

`DOMContentLoaded` es esencial para ejecutar JavaScript que interactúa con el DOM de manera confiable.  Usarlo te asegura que los elementos HTML a los que te refieres en tu código ya existen y están disponibles para ser manipulados.

Algunos ejemplos comunes de uso incluyen:

* **Manipulación de elementos HTML:**  Añadir, eliminar, modificar o acceder a elementos del DOM.
* **Adjuntar manejadores de eventos:**  Configurar eventos como clics, envíos de formularios, etc.
* **Modificación de estilos:** Cambiar la apariencia de los elementos dinámicamente.
* **Inicialización de bibliotecas o frameworks:** Configurar y arrancar frameworks que dependen del DOM (ej. React, Vue, etc.).

**Ejemplo:**

```javascript
document.addEventListener('DOMContentLoaded', function() {
  // Código que se ejecutará una vez que el DOM esté listo

  const titulo = document.getElementById('miTitulo');
  titulo.textContent = '¡DOM cargado!';

  const boton = document.querySelector('.miBoton');
  boton.addEventListener('click', function() {
    alert('¡Botón clickeado!');
  });
});
```

**Diferencia con `load`:**

Es importante distinguir `DOMContentLoaded` del evento `load`. Mientras que `DOMContentLoaded` se dispara cuando el DOM está listo, `load` espera a que *todos* los recursos, incluyendo imágenes, hojas de estilo y scripts, se hayan cargado completamente.  Si tu código no necesita esperar a estos recursos, usar `DOMContentLoaded` es más eficiente, ya que permite que la página se vuelva interactiva más rápidamente.

# Uso del evento load

El evento `load` en JavaScript se dispara cuando **todos** los recursos de una página web se han cargado completamente. Esto incluye:

* **HTML:** El documento HTML ha sido parseado y el DOM está construido.
* **CSS:** Todas las hojas de estilo se han cargado y aplicado.
* **Imágenes:** Todas las imágenes se han descargado completamente.
* **Scripts:** Todos los scripts (tanto internos como externos) se han cargado y ejecutado.
* **Frames/Iframes:** Si la página contiene frames o iframes, el evento `load` espera a que todos ellos también hayan cargado completamente.

**¿Para qué usarlo?**

El evento `load` es útil cuando necesitas asegurarte de que todos los recursos de la página estén disponibles antes de ejecutar tu código. Algunos ejemplos comunes de uso incluyen:

* **Manipulación de imágenes:** Obtener dimensiones de imágenes, aplicar filtros, etc.
* **Animaciones que dependen de recursos:** Iniciar animaciones que requieren que las imágenes o otros recursos estén completamente cargados.
* **Medir el tiempo de carga:** Calcular cuánto tiempo tarda la página en cargar completamente.
* **Operaciones que dependen de scripts externos:** Ejecutar código que utiliza funciones o variables definidas en scripts externos.

**Ejemplo:**

```javascript
window.addEventListener('load', function() {
  // Código que se ejecutará una vez que todos los recursos hayan cargado

  const imagen = document.getElementById('miImagen');
  const ancho = imagen.offsetWidth; // Obtener el ancho real de la imagen
  console.log('Ancho de la imagen:', ancho);

  // Iniciar una animación
  startAnimation();
});
```

**Diferencia clave con `DOMContentLoaded`:**

La principal diferencia entre `load` y `DOMContentLoaded` radica en **cuándo se disparan**. `DOMContentLoaded` se dispara tan pronto como el DOM está listo, sin esperar a que se carguen imágenes, hojas de estilo externas u otros recursos.  `load`, por otro lado, espera a que **todo** esté completamente cargado.

**¿Cuál usar?**

* **`DOMContentLoaded`:**  Si tu código solo necesita interactuar con el DOM y no depende de recursos externos, usar `DOMContentLoaded` es más eficiente, ya que permite que la página se vuelva interactiva más rápidamente.
* **`load`:**  Si tu código necesita acceder a recursos externos como imágenes o scripts, o si necesitas asegurarte de que todo esté cargado antes de ejecutar tu código, utiliza el evento `load`.

# Más eventos de escucha

**Eventos de la interfaz de usuario:**

* **`load`:** Se dispara cuando la ventana del navegador ha terminado de cargar todos los recursos.
* **`DOMContentLoaded`:** Se dispara cuando el DOM está listo, sin esperar a imágenes, hojas de estilo, etc.
* **`unload` / `beforeunload`:** Se disparan cuando la ventana del navegador está a punto de cerrarse o el usuario navega a otra página. `beforeunload` permite preguntar al usuario si realmente desea salir.
* **`resize`:** Se dispara cuando la ventana del navegador cambia de tamaño.
* **`scroll`:** Se dispara cuando el usuario se desplaza por la página.
* **`focus` / `blur`:** Se disparan cuando un elemento obtiene o pierde el foco. Útil para validación de formularios y accesibilidad.

**Eventos del ratón:**

* **`click`:** Se dispara cuando el usuario hace clic en un elemento.
* **`dblclick`:** Se dispara cuando el usuario hace doble clic en un elemento.
* **`mousedown` / `mouseup`:** Se disparan cuando el usuario presiona o suelta el botón del ratón sobre un elemento.
* **`mouseover` / `mouseout`:** Se disparan cuando el cursor del ratón entra o sale de un elemento.
* **`mousemove`:** Se dispara cuando el cursor del ratón se mueve sobre un elemento.
* **`contextmenu`:** Se dispara cuando el usuario hace clic derecho en un elemento.

**Eventos del teclado:**

* **`keydown`:** Se dispara cuando el usuario presiona una tecla.
* **`keyup`:** Se dispara cuando el usuario suelta una tecla.
* **`keypress`:** Se dispara cuando el usuario presiona y suelta una tecla que produce un carácter.

**Eventos del formulario:**

* **`submit`:** Se dispara cuando se envía un formulario.
* **`change`:** Se dispara cuando el valor de un elemento del formulario cambia (ej. input, select, textarea).
* **`input`:** Se dispara cada vez que el usuario modifica el valor de un elemento `<input>` o `<textarea>`.
* **`focus` / `blur`:**  Útiles para validación en tiempo real y para proporcionar ayuda contextual.
* **`invalid`:** Se dispara cuando un elemento del formulario no pasa la validación.

**Eventos de medios (audio/video):**

* **`play` / `pause`:** Se disparan cuando se inicia o pausa la reproducción de un medio.
* **`ended`:** Se dispara cuando la reproducción de un medio ha terminado.
* **`timeupdate`:** Se dispara periódicamente durante la reproducción de un medio.
* **`volumechange`:** Se dispara cuando cambia el volumen de un medio.

**Eventos de progreso:**

* **`progress`:** Se dispara periódicamente a medida que se descarga un recurso (ej. imagen, vídeo).
* **`loadstart` / `loadend`:** Se disparan al inicio y al final de la carga de un recurso.
* **`abort`:** Se dispara si se cancela la carga de un recurso.
* **`error`:** Se dispara si se produce un error durante la carga de un recurso.


**Eventos táctiles (para dispositivos móviles):**

* **`touchstart` / `touchend` / `touchmove` / `touchcancel`:** Equivalentes a los eventos del ratón para pantallas táctiles.
