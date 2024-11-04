//Función constructora

//Haciendo las veces de un constructor (Clase)
  /*
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
      console.log("Hola, mi nombre es " + this.nombre);
    };
  }
  //Una instancia de la función persona
  const persona1 = new Persona("Juan", 30); //Instancia de una clase
  const persona2 = new Persona("Ana", 25);

  persona2.saludar();

  */

  function Saludo() {
    //Método
  this.saludar = () => console.log("Hola");
}

const miObjeto = new Saludo();
miObjeto.saludar(); // Output: Hola
