class Persona {
    constructor(nombre) {
        this.nombre = nombre;
        this.saludar = this.saludar.bind(this); // `this` siempre se referirá a la instancia
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

const persona3 = new Persona("Luis");
const saludo = persona3.saludar;
saludo(); // Salida: Hola, soy Luis
