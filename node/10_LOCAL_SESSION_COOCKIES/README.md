# LOCAL STORAGE, SESSION STORAGE Y COOCKIES

LocalStorage, sessionStorage y las cookies son mecanismos para almacenar datos en el navegador del cliente, pero tienen diferencias importantes en cuanto a su duración, alcance y tamaño. Aquí te presento una explicación detallada de cada uno:

**1. Local Storage:**

* **Duración:** Persistente. Los datos almacenados en localStorage permanecen incluso después de cerrar el navegador, reiniciar el ordenador o actualizar la página. Se mantienen hasta que se eliminan manualmente mediante JavaScript, se borran los datos de navegación del navegador o se desinstala la aplicación web (si es una PWA).

* **Alcance:**  Limitado al origen (protocolo, dominio y puerto).  Si guardas datos en `localStorage` desde `https://www.ejemplo.com`, no podrás acceder a ellos desde `http://www.ejemplo.com` ni desde `https://otroejemplo.com`.

* **Tamaño:**  Aproximadamente 5MB (puede variar ligeramente según el navegador).  Es significativamente mayor que el de las cookies.

* **Uso común:**  Almacenar datos que no son sensibles y que necesitan persistir entre sesiones, como preferencias del usuario, estado de la aplicación, datos de juegos guardados, etc.

* **Ejemplo (JavaScript):**

```javascript
// Guardar un dato
localStorage.setItem('nombre', 'Juan');

// Obtener un dato
let nombre = localStorage.getItem('nombre');
console.log(nombre); // Output: Juan

// Eliminar un dato
localStorage.removeItem('nombre');

// Eliminar todos los datos
localStorage.clear();
```


**2. Session Storage:**

* **Duración:** Temporal. Los datos almacenados en sessionStorage solo persisten durante la sesión del navegador.  Se eliminan automáticamente al cerrar la pestaña o ventana del navegador.

* **Alcance:** Limitado al origen (protocolo, dominio y puerto) y a la sesión del navegador. Al igual que localStorage, está restringido al origen, pero además, los datos no son compartidos entre diferentes pestañas o ventanas, incluso del mismo origen.

* **Tamaño:** Aproximadamente 5MB (puede variar ligeramente según el navegador).

* **Uso común:** Almacenar información temporal específica de la sesión actual, como el estado de un formulario multi-página, datos que se necesitan solo mientras el usuario interactúa con una determinada funcionalidad, etc.

* **Ejemplo (JavaScript):**

```javascript
// Guardar un dato
sessionStorage.setItem('producto', 'Camiseta');

// Obtener un dato
let producto = sessionStorage.getItem('producto');
console.log(producto); // Output: Camiseta

// Eliminar un dato
sessionStorage.removeItem('producto');

// Eliminar todos los datos
sessionStorage.clear();
```


**3. Cookies:**

* **Duración:**  Configurable. Puedes especificar una fecha de expiración para que la cookie persista incluso después de cerrar el navegador. Si no se especifica, la cookie se considera una "cookie de sesión" y se elimina al cerrar el navegador.

* **Alcance:**  Configurable.  Puedes especificar el dominio y la ruta para los que la cookie es válida.  Esto permite compartir cookies entre subdominios o directorios específicos.

* **Tamaño:**  Limitado a 4KB aproximadamente.  Mucho más pequeño que localStorage y sessionStorage.

* **Uso común:**  Autenticación (almacenar tokens de sesión), seguimiento del usuario (aunque con las nuevas regulaciones de privacidad esto está cambiando), personalización de la experiencia del usuario (recordar preferencias), etc.  Se envían con cada solicitud HTTP al servidor, lo que puede afectar el rendimiento si se abusa de ellas.

* **Ejemplo (JavaScript):**

```javascript
// Crear una cookie
document.cookie = "color=azul; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/";

// Obtener una cookie (requiere una función auxiliar)
function getCookie(nombre) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${nombre}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

let color = getCookie('color');
console.log(color); // Output: azul

// Eliminar una cookie (estableciendo la fecha de expiración en el pasado)
document.cookie = "color=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```

**Resumen de diferencias clave:**

| Característica | Local Storage | Session Storage | Cookies |
|---|---|---|---|
| Duración | Persistente | Sesión | Configurable |
| Alcance | Origen | Origen y sesión | Configurable (dominio y ruta) |
| Tamaño | ~5MB | ~5MB | ~4KB |
| Enviado al servidor | No | No | Sí |


**Recomendaciones:**

* Usa `localStorage` para datos persistentes que no son sensibles y que no necesitan ser enviados al servidor.
* Usa `sessionStorage` para datos temporales específicos de la sesión.
* Usa cookies con precaución, especialmente para datos sensibles.  Considera las implicaciones de privacidad y el impacto en el rendimiento.

