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
