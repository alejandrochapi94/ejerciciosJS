
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