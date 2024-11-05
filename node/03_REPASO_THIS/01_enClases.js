class Persona {
    constructor(nombre, edad) {
        //this.nombre = nombre; // `this` se refiere a la instancia de `Persona`
        //this.edad = edad;
        this.nombreUsuario = nombre; //Variable interna del constructor
        this.edadUsuario = edad;
        this.apodo = "Carlitos"
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }

    saludar2(){
        console.log(`Hola, mi nombre es ${this.apodo} y tengo ${this.edadUsuario} años.`);
    }
}
//Creamos un objeto persona1 instancia de la clase Persona
const persona1 = new Persona("Carlos", 30);
persona1.saludar2(); // Salida: Hola, mi nombre es Carlos y tengo 30 años.
