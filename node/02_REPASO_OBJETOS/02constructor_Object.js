//Constructor -> Clases
//Cómo crear un constructor sin la necesidad de crear una clase
/*
const miObjeto = new Object(); //Clase object es propia de javascript
miObjeto.nombre = "Juan";
miObjeto.edad = 30;

console.log(miObjeto);

*/

const miObjeto = new Object(); //Objeto vacío

miObjeto.saludar = () => console.log("Hola");

miObjeto.saludar(); // Output: Hola
