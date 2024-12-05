El paquete `db-local` es una herramienta sencilla para simular una base de datos en memoria o como archivo local, ideal para realizar pruebas o prototipos. Aquí tienes una guía completa para usarlo:

### 1. **Instalación**
Asegúrate de haber instalado el paquete en tu proyecto:
```bash
npm install db-local
```

### 2. **Configuración Básica**
Primero, importa el módulo y crea una instancia de base de datos. Puedes optar por usarla en memoria o guardarla en un archivo JSON.

#### Ejemplo básico en memoria:
```javascript
const Database = require('db-local');
const db = new Database({ path: './db.json' }); // Define el archivo JSON (opcional)

// Si no usas un archivo, será en memoria.
```

### 3. **Crear una Tabla**
Piensa en una tabla como un conjunto de datos. Para crear una tabla:
```javascript
db.addCollection('users'); // Crear una tabla llamada 'users'
```

### 4. **Insertar Datos**
Usa el método `insert` para agregar registros:
```javascript
const users = db.collection('users'); // Selecciona la tabla
users.insert({ id: 1, name: 'Juan', age: 25 });
users.insert({ id: 2, name: 'Ana', age: 30 });
```

### 5. **Consultar Datos**
- **Obtener todos los registros:**
```javascript
const allUsers = users.find();
console.log(allUsers);
```

- **Buscar por criterio:**
```javascript
const user = users.findOne({ id: 1 }); // Busca el primer registro con id = 1
console.log(user);
```

- **Buscar con múltiples criterios:**
```javascript
const adults = users.find({ age: { $gte: 18 } }); // Usuarios mayores o iguales a 18 años
console.log(adults);
```

### 6. **Actualizar Registros**
Usa `update` para modificar registros:
```javascript
users.update({ id: 1 }, { age: 26 }); // Actualiza la edad del usuario con id = 1
```

### 7. **Eliminar Registros**
Puedes eliminar registros con `remove`:
```javascript
users.remove({ id: 2 }); // Elimina el registro con id = 2
```

### 8. **Persistencia (opcional)**
Si defines un archivo (como `db.json`), los datos se guardarán automáticamente. Si no defines un archivo, la base de datos estará solo en memoria y los datos se perderán al finalizar el programa.

#### Guardar Manualmente:
```javascript
db.save(); // Guarda los datos en el archivo JSON
```

### 9. **Ejemplo Completo**
```javascript
const Database = require('db-local');
const db = new Database({ path: './db.json' });

db.addCollection('users');
const users = db.collection('users');

// Insertar datos
users.insert({ id: 1, name: 'Juan', age: 25 });
users.insert({ id: 2, name: 'Ana', age: 30 });

// Consultar
console.log(users.find()); // Todos los usuarios

// Buscar por id
console.log(users.findOne({ id: 1 }));

// Actualizar
users.update({ id: 1 }, { age: 26 });
console.log(users.findOne({ id: 1 }));

// Eliminar
users.remove({ id: 2 });
console.log(users.find());
```

