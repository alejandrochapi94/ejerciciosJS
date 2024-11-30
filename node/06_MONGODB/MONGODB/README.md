# MongoDB

MongoDB es una base de datos NoSQL muy popular, especialmente en el desarrollo de aplicaciones web y en la administración de datos que requieren flexibilidad en la estructura y escalabilidad. Aquí te doy una introducción y los conceptos esenciales para empezar a trabajar con MongoDB, junto con algunas razones por las que podrías preferirla en ciertos proyectos.

### 1. ¿Qué es MongoDB?
MongoDB es una base de datos NoSQL que almacena datos en un formato de tipo documento, es decir, en estructuras de datos similares a JSON (JavaScript Object Notation), llamados **documentos**. Estos documentos están agrupados en **colecciones**, lo que podrías ver como un equivalente de tablas en bases de datos relacionales, pero sin una estructura rígida.

### 2. Características de MongoDB
- **Modelo de Datos Flexible**: MongoDB permite que los documentos en una colección no sigan una estructura estricta, lo cual facilita la incorporación de nuevos tipos de datos sin necesidad de modificar la estructura de toda la base.
- **Escalabilidad**: MongoDB es altamente escalable. Soporta escalado horizontal (distribuir los datos en varios servidores), lo que permite manejar grandes volúmenes de datos.
- **Alto Rendimiento**: Al estar optimizada para operaciones de escritura y lectura rápidas, MongoDB es adecuada para aplicaciones que requieren respuestas rápidas, como redes sociales o aplicaciones de análisis en tiempo real.
- **Integración Natural con JavaScript**: MongoDB usa documentos de tipo BSON (Binary JSON) que son fácilmente manipulables desde JavaScript, lo que facilita su uso en aplicaciones Node.js y en entornos web.

### 3. ¿Por qué usar MongoDB?
MongoDB es útil en varios escenarios, especialmente cuando:
- **Necesitas manejar grandes volúmenes de datos**: MongoDB está diseñada para manejar cantidades masivas de información sin perder rendimiento.
- **Requieres flexibilidad**: Si los datos son diversos y la estructura puede cambiar, MongoDB permite que se almacenen sin necesidad de una estructura rígida.
- **Tienes que escalar**: La arquitectura de MongoDB permite añadir más servidores fácilmente cuando el volumen de datos crece.
- **Integración con JavaScript y Node.js**: Si estás trabajando en un proyecto que usa Node.js, MongoDB es una gran opción porque su integración es directa gracias a Mongoose, un ODM (Object Data Modeling) para MongoDB y Node.js.

### 4. Conceptos Básicos de MongoDB

1. **Documento**: Es la unidad básica de datos en MongoDB, similar a una fila en una base de datos relacional. Un documento se representa en formato JSON y puede tener campos y valores.
   ```json
   {
       "name": "Juan",
       "age": 30,
       "hobbies": ["leer", "programar", "viajar"]
   }
   ```
   
2. **Colección**: Conjunto de documentos. Sería equivalente a una tabla en bases de datos SQL, pero, a diferencia de SQL, los documentos en una colección no necesitan seguir una misma estructura.

3. **Base de Datos**: Es una colección de colecciones. Puedes crear múltiples bases de datos en MongoDB para organizar diferentes conjuntos de datos.

4. **Campo**: Similar a una columna en SQL, un campo es una clave en un documento. Cada documento puede tener campos únicos o comunes a otros documentos en la misma colección.

5. **BSON**: Es el formato binario que usa MongoDB para almacenar datos. Es similar a JSON, pero en un formato binario que permite mayor eficiencia en almacenamiento y transferencia.

### 5. Comandos Básicos de MongoDB

Para trabajar con MongoDB, necesitas manejar algunos comandos fundamentales. Aquí están algunos ejemplos básicos:

1. **Crear o Seleccionar una Base de Datos**:
   ```bash
   use nombreBaseDeDatos
   ```

2. **Insertar un Documento en una Colección**:
   ```javascript
   db.coleccion.insertOne({ name: "Ana", age: 25, city: "Madrid" })
   ```

3. **Buscar Documentos**:
   ```javascript
   db.coleccion.find({ age: { $gte: 20 } })  // Buscar todos los documentos con age >= 20
   ```

4. **Actualizar un Documento**:
   ```javascript
   db.coleccion.updateOne({ name: "Ana" }, { $set: { city: "Barcelona" } })
   ```

5. **Eliminar un Documento**:
   ```javascript
   db.coleccion.deleteOne({ name: "Ana" })
   ```

### 6. Mongoose: Integración de MongoDB en Node.js
Cuando trabajas en aplicaciones Node.js, puedes usar **Mongoose** como una capa de abstracción para facilitar la manipulación de datos en MongoDB. Mongoose te permite definir **esquemas** para tus documentos, lo que te ayuda a establecer reglas para la estructura de datos, aun cuando MongoDB es flexible.

#### Ejemplo de Esquema en Mongoose
```javascript
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

// Insertar un nuevo usuario
const nuevoUsuario = new Usuario({ name: "Carlos", age: 28, city: "Quito" });
nuevoUsuario.save();
```

### 7. Ventajas de MongoDB frente a SQL

- **Estructura Flexible**: No es necesario definir un esquema rígido como en SQL, lo cual es ideal para proyectos donde los requisitos de datos pueden cambiar.
- **Escalabilidad Horizontal**: MongoDB es ideal para arquitecturas distribuidas y puede escalarse horizontalmente al añadir nodos.
- **Integración Natural con JSON**: MongoDB usa BSON, que es muy similar a JSON, facilitando el intercambio de datos en aplicaciones modernas.

### 8. Limitaciones de MongoDB
MongoDB también tiene algunas limitaciones a considerar:
- **No soporta Transacciones Complejas**: Aunque soporta transacciones, estas no son tan sofisticadas como en SQL, lo que puede ser un inconveniente para aplicaciones que requieran alta integridad transaccional.
- **No es la mejor opción para datos relacionales estrictos**: Si tienes datos altamente relacionados y necesitas integridad referencial, SQL puede ser más adecuado.

### 9. Cómo Empezar con MongoDB

Para comenzar con MongoDB en tu entorno de desarrollo:
1. **Instala MongoDB**: Puedes descargarlo desde [MongoDB Community](https://www.mongodb.com/try/download/community) o usar MongoDB Atlas, que ofrece bases de datos en la nube.
2. **Aprende a usar MongoDB Shell**: MongoDB Shell es una interfaz de línea de comandos útil para practicar.
3. **Usa Mongoose en Node.js**: Integra MongoDB con tus proyectos en Node.js para ver cómo se trabaja con datos en una aplicación práctica.

### Resumen

MongoDB es excelente cuando:
- Necesitas una base de datos flexible y escalable.
- Trabajas en proyectos donde los datos y su estructura pueden variar.
- Estás desarrollando con JavaScript o Node.js y deseas una integración fluida.

En cambio, si tu aplicación depende de transacciones complejas o de una estructura de datos altamente relacional, una base de datos SQL podría ser más apropiada.
