# Evento Click vs Evento Submit

## Para qué se usa cada uno y qué se recomienda.

Tanto `submit` como `click` son eventos importantes en JavaScript, pero se aplican a diferentes contextos y tienen comportamientos distintos, especialmente cuando se trata de formularios.

**Diferencias detalladas:**

* **`submit`:**
    * **Objetivo:** Específico para formularios. Se dispara cuando se *envía* un formulario, ya sea haciendo clic en un botón de tipo `submit` o presionando Enter mientras un elemento del formulario tiene el foco.
    * **Elemento de activación:** El evento se asocia al `<form>`, no a un botón específico. Aunque un botón de tipo `submit` lo *dispara*, el evento en sí ocurre en el formulario.
    * **Comportamiento por defecto:** Envía los datos del formulario al servidor, generalmente recargando la página. Este comportamiento se puede prevenir con `event.preventDefault()`.
    * **Propagación:** El evento `submit` "burbujea" (se propaga) desde el formulario hacia arriba en el árbol DOM.


* **`click`:**
    * **Objetivo:** Evento genérico que se dispara al hacer clic en un elemento. Puede usarse en cualquier elemento HTML, incluyendo botones, enlaces, divs, etc.
    * **Elemento de activación:** El evento se asocia al elemento específico en el que se hizo clic.
    * **Comportamiento por defecto:** Depende del elemento en el que se hizo clic.  En un enlace (`<a>`), navega a la URL especificada. En un botón, no tiene un comportamiento por defecto a menos que se le asigne uno.
    * **Propagación:** El evento `click` también "burbujea" desde el elemento clicado hacia arriba en el árbol DOM.



**Cuándo usar uno u otro:**

* **`submit`:** Úsalo cuando quieras controlar el *proceso de envío* del formulario. Esto incluye:
    * Validar los datos del formulario antes del envío.
    * Enviar los datos mediante AJAX sin recargar la página.
    * Realizar otras acciones antes o después del envío, como mostrar un mensaje de confirmación.

* **`click`:** Úsalo cuando quieras realizar una acción al hacer clic en un elemento *dentro* del formulario, pero que no esté directamente relacionado con el envío del formulario, o en cualquier otro elemento que no sea un formulario.  Por ejemplo:
    * Mostrar u ocultar una sección del formulario.
    * Realizar cálculos basados en los valores de los campos.
    * Agregar o eliminar campos dinámicamente.




**Ventajas y desventajas:**

| Característica | `submit` | `click` |
|---|---|---|
| **Ventajas** | Específico para el envío de formularios, control total sobre el proceso de envío. | Genérico, se puede usar en cualquier elemento, flexible. |
| **Desventajas** | Solo se aplica a formularios. |  No controla directamente el envío del formulario, se requiere lógica adicional si se quiere usar para enviar un formulario. |



**Ejemplo comparativo:**

```html
<form id="miFormulario">
  <input type="text" name="nombre">
  <button type="submit">Enviar con submit</button>
  <button type="button" id="botonClick">Enviar con click</button>
</form>

<script>
  const formulario = document.getElementById("miFormulario");
  const botonClick = document.getElementById("botonClick");

  formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Formulario enviado con submit");
    // Lógica para enviar a un servidor
  });

  botonClick.addEventListener("click", function() {
    console.log("Formulario 'enviado' con click");
    // Validaciones y luego...
    formulario.submit(); // Envía el formulario manualmente
    // O bien, enviar con un servidor
  });
</script>

```
