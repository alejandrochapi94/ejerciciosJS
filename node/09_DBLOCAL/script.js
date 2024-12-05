//onst Database = require('db-local');
import Database from "db-local";
import express from "express";
const db = new Database({ path: './db.json' });
const PORT= 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("¡Bienvenido a mi API REST!");
}); 


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

db.addCollection('users');
const users = db.collection('users');
// Insertar datos
users.insert({ id: 1, name: 'Juan', age: 25 });
users.insert({ id: 2, name: 'Ana', age: 30 });

console.log(users.find())
// Consultar
//console.log(users.find()); // Todos los usuarios

// Buscar por id
//console.log(users.findOne({ id: 1 }));

// Actualizar
//users.update({ id: 1 }, { age: 26 });
//console.log(users.findOne({ id: 1 }));

// Eliminar
//users.remove({ id: 2 });
//console.log(users.find());

//db.save()