# Uso de MONGOOSE en NodeJS y MongoDB

Enlace disponible para trabajar con mongoose

https://mongoosejs.com/

---

### 1. **Configuración Básica de Mongoose**

**Objetivo:** Conectar Mongoose con MongoDB y entender la configuración inicial.

- **Instalación de Mongoose:** 
  En tu terminal, ejecuta:
  ```bash
  npm install mongoose
  ```

- **Conexión con MongoDB:**
  Con Mongoose, puedes conectar tu aplicación a MongoDB usando el siguiente código:
  ```javascript
  const mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost:27017/nombreBaseDeDatos', {
      useNewUrlParser: true,
      useUnifiedTopology: true
  })
  .then(() => console.log("Conexión a MongoDB exitosa"))
  .catch((err) => console.error("Error de conexión:", err));
  ```

- **Buenas prácticas de conexión:**
  Aprende a manejar opciones de conexión como `useNewUrlParser` y `useUnifiedTopology`. También es útil implementar una lógica de reconexión automática en caso de que se pierda la conexión.

---

### 2. **Esquemas en Mongoose**

**Objetivo:** Comprender y definir la estructura de tus datos en MongoDB usando esquemas.

- **Definición de esquemas:**
  Los esquemas en Mongoose te permiten estructurar y validar los documentos en MongoDB. Ejemplo:
  ```javascript
  const userSchema = new mongoose.Schema({
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      age: { type: Number, min: 18 },
      createdAt: { type: Date, default: Date.now }
  });
  ```

- **Tipos de datos:** Aprende los tipos básicos (`String`, `Number`, `Date`, `Boolean`, etc.) y propiedades avanzadas como `min`, `max`, `match` (para expresiones regulares), y `enum`.

- **Validación y valores predeterminados:** Usa `required`, `unique`, y `default` para asegurar la integridad de los datos y añadir valores predeterminados.

- **Configuraciones de esquema**: Opciones como `timestamps: true` para agregar automáticamente `createdAt` y `updatedAt`.

---

### 3. **Modelos en Mongoose**

**Objetivo:** Crear y utilizar modelos basados en esquemas para realizar operaciones en MongoDB.

- **Creación de un modelo:** 
  Los modelos son interfaces que te permiten interactuar con una colección en MongoDB.
  ```javascript
  const User = mongoose.model('User', userSchema);
  ```

- **Instancias del modelo:** Puedes crear un documento (registro) en tu base de datos instanciando el modelo.
  ```javascript
  const newUser = new User({ name: 'Alice', email: 'alice@example.com', age: 25 });
  await newUser.save();
  ```

---

### 4. **Operaciones CRUD en Mongoose**

**Objetivo:** Realizar operaciones de creación, lectura, actualización y eliminación en MongoDB.

- **Create (Crear):**
  ```javascript
  await User.create({ name: 'Bob', email: 'bob@example.com', age: 30 });
  ```

- **Read (Leer):** Realizar consultas en la base de datos.
  ```javascript
  const users = await User.find({ age: { $gte: 18 } });
  ```

- **Update (Actualizar):** Actualizar un documento en la base de datos.
  ```javascript
  await User.updateOne({ email: 'alice@example.com' }, { $set: { age: 26 } });
  ```

- **Delete (Eliminar):** Eliminar un documento.
  ```javascript
  await User.deleteOne({ email: 'bob@example.com' });
  ```

---

### 5. **Consultas Avanzadas y Filtrado**

**Objetivo:** Usar operadores y métodos avanzados para realizar consultas complejas.

- **Operadores de comparación** (`$gt`, `$gte`, `$lt`, `$lte`, `$ne`).
- **Operadores lógicos** (`$or`, `$and`, `$in`, `$nin`).
- **Proyección**: Seleccionar campos específicos en los resultados.
  ```javascript
  const users = await User.find({}, 'name email'); // Solo incluye `name` y `email`.
  ```
- **Paginación y ordenamiento**: Usa `limit`, `skip`, y `sort` para paginar y ordenar los resultados.

---

### 6. **Middlewares en Mongoose**

**Objetivo:** Ejecutar lógica personalizada antes o después de ciertas acciones.

- **Tipos de middleware:** 
  - **Pre-middleware:** Funciona antes de guardar, validar o eliminar un documento. Útil para tareas como encriptación de contraseñas.
  - **Post-middleware:** Se ejecuta después de la operación.

  ```javascript
  userSchema.pre('save', function(next) {
      console.log("Guardando usuario...");
      next();
  });
  ```

---

### 7. **Virtuals (Propiedades Virtuales)**

**Objetivo:** Crear propiedades en los esquemas que no se almacenan en la base de datos, pero se calculan al solicitar el documento.

- **Definición de propiedades virtuales:**
  ```javascript
  userSchema.virtual('fullName').get(function() {
      return `${this.firstName} ${this.lastName}`;
  });
  ```
  Esto es útil para mostrar datos calculados sin almacenarlos en la base de datos.

---

### 8. **Población (Population)**

**Objetivo:** Establecer relaciones entre documentos de diferentes colecciones.

- **Uso de `ref` y `populate`**:
  ```javascript
  const postSchema = new mongoose.Schema({
      title: String,
      author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  });

  const Post = mongoose.model('Post', postSchema);
  ```

  La función `populate` permite traer el documento completo de una referencia en otra colección.
  ```javascript
  const post = await Post.find().populate('author');
  ```

---

### 9. **Manejo de Errores**

**Objetivo:** Aprender a gestionar errores de Mongoose y MongoDB.

- **Errores de conexión**: Utiliza bloques `try...catch` y detecta errores de conexión.
- **Validación de errores**: Mongoose proporciona validaciones integradas y también permite crear validaciones personalizadas.

---

### 10. **Mongoose Plugins y Extensibilidad**

**Objetivo:** Aprovechar la extensibilidad de Mongoose mediante plugins.

- **Uso de plugins**: Los plugins permiten agregar funcionalidades reutilizables a los esquemas, como el cifrado de datos o el manejo de versiones.
- **Ejemplo de plugin**:
  ```javascript
  const mongoosePaginate = require('mongoose-paginate-v2');
  userSchema.plugin(mongoosePaginate);
  ```

---

### 11. **Indices en Mongoose**

**Objetivo:** Mejorar la velocidad de las consultas creando índices en los campos clave.

- **Índices únicos y compuestos:**
  ```javascript
  userSchema.index({ email: 1 }, { unique: true });
  ```
  Los índices te ayudan a realizar búsquedas rápidas y eficientes en MongoDB. Los índices compuestos son útiles para consultas en múltiples campos, como `{firstName: 1, lastName: 1}`.

- **Índices de texto**: Permiten realizar búsquedas de texto (por palabras o frases) en campos específicos.
  ```javascript
  userSchema.index({ bio: 'text', interests: 'text' });
  ```

---

### 12. **Transacciones en Mongoose**

**Objetivo:** Garantizar la integridad de las operaciones cuando se manejan múltiples documentos.

- **Uso de transacciones**: Las transacciones en MongoDB te permiten realizar operaciones que se confirman o se revierten en bloque, útil para operaciones en múltiples documentos o colecciones.
  ```javascript
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
      await User.create([{ name: "Jane Doe" }], { session });
      await Order.create([{ userId: userId }], { session });
      await session.commitTransaction();
  } catch (error) {
      await session.abortTransaction();
  } finally {
      session.endSession();
  }
  ```

---

### 13. **Agregaciones en Mongoose**

**Objetivo:** Realizar operaciones avanzadas de agregación y manipulación de datos en MongoDB.

- **Pipelines de agregación**: MongoDB permite procesar datos en varias etapas (como `$match`, `$group`, `$sort`, `$project`).
  ```javascript
  const result = await User.aggregate([
      { $match: { age: { $gte: 18 } } },
      { $group: { _id: "$country", count: { $sum: 1 } } },
      { $sort: { count: -1 } }
  ]);
  ```

- **Funciones de agregación avanzadas**: como `$lookup` (para combinar colecciones), `$unwind` (para trabajar con arreglos), y `$facet` (para obtener múltiples resultados).

---

### 14. **Hooks de Validación Avanzada**

**Objetivo:** Crear reglas de validación personalizadas y secuencias de validación en el esquema.

- **Validación personalizada**: Define tus propias reglas de validación y mensajes de error para campos específicos.
  ```javascript
  userSchema.path('email').validate({
      validator: function(v) {
          return /.+@.+\..+/.test(v);
      },
      message: props => `${props.value} no es un correo electrónico válido`
  });
  ```

---

### 15. **Optimización de Consultas**

**Objetivo:** Aprender técnicas para reducir el tiempo de respuesta de las consultas.

- **Limitación de resultados y proyección**:
  - **Limit** y **skip** te ayudan a trabajar con paginación.
  - Usa **projection** para incluir solo los campos necesarios y reducir la carga de la base de datos.
  
  ```javascript
  const users = await User.find().select('name email').limit(10).skip(10);
  ```

- **Population select**: Al usar `populate`, selecciona solo los campos necesarios.
  ```javascript
  const posts = await Post.find().populate('author', 'name');
  ```

---

### 16. **Manejo de Archivos con GridFS**

**Objetivo:** Almacenar y recuperar archivos grandes (como imágenes o videos) directamente desde MongoDB.

- **Integración de GridFS**: GridFS es un sistema de almacenamiento de archivos en MongoDB. Puedes usar el módulo `mongoose-gridfs` para manejar archivos de gran tamaño.
  - **Configuración básica**:
    ```javascript
    const Grid = require('gridfs-stream');
    const conn = mongoose.connection;
    const gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
    ```

- **Almacenamiento y recuperación de archivos**: Aprende a subir y recuperar archivos grandes mediante streams.

---

### 17. **Migración de Datos**

**Objetivo:** Mover o actualizar datos sin afectar la integridad ni perder datos previos.

- **Migraciones con Mongoose**: Usa herramientas como `migrate-mongoose` o scripts personalizados para agregar, modificar o eliminar campos, y actualizar documentos masivamente.
  ```javascript
  User.updateMany({}, { $set: { active: true } });
  ```

---

### 18. **Unit Testing (Pruebas Unitarias)**

**Objetivo:** Verificar que los modelos y operaciones en Mongoose funcionen correctamente.

- **Herramientas de testing**: Usa herramientas como **Jest** o **Mocha** para crear pruebas unitarias de modelos.
  ```javascript
  const mongoose = require('mongoose');
  const User = require('./models/user');

  describe('User Model Test', () => {
      it('Create and save user', async () => {
          const validUser = new User({ name: 'Alice', email: 'alice@example.com' });
          const savedUser = await validUser.save();
          expect(savedUser._id).toBeDefined();
      });
  });
  ```

---

### 19. **Optimización y Buenas Prácticas de Mongoose**

**Objetivo:** Adoptar buenas prácticas para mantener el rendimiento y legibilidad del código.

- **Limitación de conexiones**: Usa un `poolSize` adecuado y reutiliza las conexiones en lugar de abrir una nueva cada vez.
- **Logs de depuración**: Usa `mongoose.set('debug', true);` para verificar las consultas generadas por Mongoose.
- **Manejo de errores centralizado**: Implementa un sistema de manejo de errores centralizado para las operaciones de Mongoose.
- **Uso de promesas y async/await**: Evita el callback hell y asegúrate de que las operaciones de Mongoose sean `async/await`.

---

### 20. **Autenticación y Seguridad**

**Objetivo:** Manejar la seguridad de los datos y la autenticación de usuarios en la base de datos.

- **Hashing de contraseñas**: Usa bcrypt para encriptar contraseñas antes de almacenarlas.
  ```javascript
  const bcrypt = require('bcrypt');
  userSchema.pre('save', async function(next) {
      if (!this.isModified('password')) return next();
      this.password = await bcrypt.hash(this.password, 12);
      next();
  });
  ```

- **Tokens de autenticación**: Implementa tokens JWT para autenticar a los usuarios sin comprometer la seguridad de la base de datos.
  
---
