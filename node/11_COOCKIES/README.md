# COOCKIES

**Uso de Cookies en Autenticación**

Las cookies son un mecanismo fundamental en la autenticación HTTP, que es *sin estado*. Esto significa que el servidor no recuerda al usuario entre solicitudes.  Las cookies permiten "simular" un estado,  identificando al usuario en cada solicitud.  El flujo general es el siguiente:

1. **Inicio de Sesión:** El usuario introduce sus credenciales (usuario y contraseña).
2. **Verificación en el Servidor:** El servidor verifica las credenciales. Si son correctas, genera un token de sesión único.
3. **Creación de la Cookie:** El servidor envía una cookie al cliente que contiene el token de sesión.  Esta cookie se configura con las opciones adecuadas de seguridad (ver más abajo).
4. **Solicitudes Posteriores:** En cada solicitud posterior, el navegador envía automáticamente la cookie al servidor.
5. **Validación del Token:** El servidor valida el token de sesión contenido en la cookie. Si es válido, el servidor sabe que el usuario está autenticado y le permite acceder a los recursos protegidos.
6. **Cierre de Sesión:** Cuando el usuario cierra sesión, el servidor invalida el token de sesión y el cliente elimina la cookie.

**Seguridad de las Cookies**

La seguridad de las cookies es crucial, ya que un acceso no autorizado a ellas podría comprometer la cuenta del usuario.  Aquí hay algunas medidas de seguridad importantes:

* **`HttpOnly`:** Este atributo es **fundamental**. Impide que JavaScript acceda a la cookie.  Esto protege contra ataques XSS (Cross-Site Scripting), donde un atacante inyecta código JavaScript malicioso en la página web para robar las cookies.  **Siempre** configura tus cookies con `HttpOnly`.

* **`Secure`:** Este atributo indica que la cookie solo debe enviarse al servidor a través de conexiones HTTPS.  Esto previene la interceptación de la cookie en redes inseguras.  **Siempre** usa `Secure` si tu sitio usa HTTPS.

* **`SameSite`:** Este atributo ayuda a mitigar los ataques CSRF (Cross-Site Request Forgery).  Tiene tres valores posibles:
    * **`Strict`:** La cookie solo se envía si la solicitud se origina desde el mismo sitio.  Es la opción más segura, pero puede afectar la funcionalidad en algunos casos (ej. inicio de sesión desde enlaces externos).
    * **`Lax`:**  (Valor por defecto en la mayoría de navegadores modernos) La cookie se envía en las solicitudes de "primer nivel" (ej. navegación directa al sitio) y en las solicitudes POST desde otros sitios (ej. envío de formularios).  Ofrece un buen equilibrio entre seguridad y usabilidad.
    * **`None`:** La cookie se envía en todas las solicitudes, incluso desde otros sitios.  **Evita usar `None` a menos que sea absolutamente necesario**, y en ese caso, **debes** combinarlo con `Secure`.

* **`Path`:** Especifica la ruta para la cual la cookie es válida.  Úsalo para restringir el acceso a la cookie a directorios específicos de tu sitio web.

* **Fecha de Expiración Corta:**  Para los tokens de sesión, establece una fecha de expiración relativamente corta para limitar el impacto si la cookie es robada.

* **Rotación de Tokens:**  Periódicamente, regenera el token de sesión para aumentar la seguridad.


**Ejemplo de Código (Conceptual - Lado Servidor)**

Este ejemplo muestra cómo se crea una cookie segura en el lado del servidor (usando Node.js con Express como ilustración):

```javascript
const express = require('express');
const app = express();

app.post('/login', (req, res) => {
  // ... verificar las credenciales del usuario ...

  if (credencialesValidas) {
    const token = generarToken(); // Función para generar un token seguro

    res.cookie('token', token, {
      httpOnly: true,  // SIEMPRE
      secure: true,   // Si usas HTTPS
      sameSite: 'lax', // O 'strict' según tus necesidades
      maxAge: 3600000, // 1 hora (en milisegundos)
      // path: '/api',  // Si quieres restringir la cookie a una ruta
    });

    res.json({ success: true });
  } else {
    res.status(401).json({ error: 'Credenciales inválidas' });
  }
});


// Ruta protegida (requiere autenticación)
app.get('/datos-protegidos', (req, res) => {
  const token = req.cookies.token;

  if (validarToken(token)) { // Función para validar el token en el servidor
    // ... acceder a los datos protegidos ...
    res.json({ datos: '...' });
  } else {
    res.status(403).json({ error: 'No autorizado' });
  }
});

// ...
```

**Puntos Clave del Ejemplo:**

* La cookie se crea después de una autenticación exitosa.
* Se utilizan las opciones `httpOnly`, `secure` y `sameSite` para la seguridad.
* Se establece una fecha de expiración (`maxAge`).
* En las rutas protegidas, se valida el token antes de conceder acceso.


