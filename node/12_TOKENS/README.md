**¿Qué es un token?**

Un token, en el contexto de la autenticación web, es una cadena de caracteres única y aleatoria que se genera en el servidor y se entrega al cliente después de una autenticación exitosa.  Actúa como una representación temporal de la identidad del usuario y se utiliza para autorizar las solicitudes posteriores sin tener que enviar las credenciales (usuario y contraseña) en cada solicitud.

**¿Para qué se usa un token?**

* **Autenticación sin estado:**  HTTP es un protocolo sin estado, lo que significa que el servidor no recuerda al usuario entre solicitudes. Los tokens permiten mantener un estado simulado, ya que el cliente presenta el token en cada solicitud, y el servidor puede verificar su validez para identificar al usuario.
* **Seguridad:**  Evita el envío repetido de credenciales a través de la red, lo que reduce el riesgo de interceptación.  Si un atacante roba un token, el impacto es menor que si roba las credenciales reales, ya que el token puede ser invalidado o revocado.
* **Autorización:** Los tokens pueden contener información sobre los permisos y roles del usuario, lo que permite al servidor controlar el acceso a diferentes recursos o funcionalidades.
* **Escalabilidad:**  Los servidores pueden validar tokens sin tener que acceder a una base de datos de usuarios en cada solicitud, lo que mejora el rendimiento y la escalabilidad.


**Tipos de tokens comunes:**

* **JWT (JSON Web Token):** Un estándar abierto para la creación de tokens.  Son compactos, autocontenidos y pueden ser verificados por cualquier parte que tenga la clave secreta.  Contienen información en formato JSON, incluyendo la identidad del usuario, la fecha de expiración y otros datos relevantes.
* **Tokens opacos:**  Cadenas aleatorias generadas por el servidor.  Su significado solo es conocido por el servidor que los generó.  Para validarlos, el servidor generalmente necesita consultar una base de datos o un caché.


**Ejemplo de código (JWT con Node.js y Express):**

```javascript
const express = require('express');
const jwt = require('jsonwebtoken'); // Importar la biblioteca JWT

const app = express();
const SECRET_KEY = 'tu_clave_secreta'; // **IMPORTANTE:** Mantener esta clave en secreto

// ...

app.post('/login', (req, res) => {
  // ... verificar las credenciales del usuario ...

  if (credencialesValidas) {
    const payload = {
      userId: usuario.id, // Identificador del usuario
      username: usuario.nombre, // Otros datos que quieras incluir
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); // Generar el JWT

    res.cookie('token', token, {
      httpOnly: true,
      secure: true, // Si usas HTTPS
      sameSite: 'lax', // O 'strict'
    });

    res.json({ token }); // En este caso, devolvemos el token directamente en el JSON
  } else {
    // ... manejar la autenticación fallida ...
  }
});


// Ruta protegida (requiere autenticación)
app.get('/datos-protegidos', (req, res) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1]; // Obtener el token de la cookie o del header Authorization

  try {
    const decoded = jwt.verify(token, SECRET_KEY); // Verificar y decodificar el JWT

    req.user = decoded; // Asignar la información del usuario al objeto request

    // ... acceder a los datos protegidos ...
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
});

// ...
```


**Explicación del código:**

* Se usa la biblioteca `jsonwebtoken` para generar y verificar los JWT.
* En `/login`, se crea un JWT con la información del usuario y se firma con una clave secreta.  El token se envía al cliente en una cookie y/o en la respuesta JSON.
* En `/datos-protegidos`, se verifica el token.  Si es válido, se decodifica y la información del usuario se agrega al objeto `req`.
* **IMPORTANTE:**  La clave secreta (`SECRET_KEY`) debe ser larga, aleatoria y mantenerse en secreto.  No la compartas en el código cliente o en repositorios públicos.
