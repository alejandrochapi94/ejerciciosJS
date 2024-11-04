//ES6 (Azúcar sintáctico)
  /*
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log("Hola, mi nombre es " + this.nombre);
    }
  }
  
  const persona1 = new Persona("Juan", 30);
  const persona2 = new Persona("Ana", 25);

  */

  class Saludo {
  constructor() {
    this.saludar = () => console.log("Hola");
  }
  // No necesitas el 'function' keyword aquí. Es implícito.
}

const miObjeto = new Saludo();
miObjeto.saludar(); // Output: Hola
