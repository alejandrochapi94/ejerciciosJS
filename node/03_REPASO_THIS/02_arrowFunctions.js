class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludarConRetardo() {
        setTimeout(() => {
            console.log(`Hola, soy ${this.nombre}`);
        }, 1000);
    }
}

const persona1 = new Persona("Alejandro");
persona1.saludarConRetardo(); // Salida después de 1 segundo: Hola, soy Ana


//Comparación con una función normal

class Persona2 {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludarConRetardo() {
        setTimeout(function () {
            console.log(`Hola que tal, soy ${this.nombre}`);
        }.bind(this), 1000);
    }
}

const persona2 = new Persona2("Carlos");
persona2.saludarConRetardo(); // Salida: Hola, soy undefined

//Cómo solucionarlo?

//.bind(this) en el método

//Otra solución

class Persona3 {
    constructor(nombre) {
        this.nombre = nombre;
        this.saludar = this.saludar.bind(this); // Ligamos `saludar` al contexto de la instancia
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

const persona3 = new Persona3("José");
persona3.saludar(); // Salida: Hola, soy Carlos
