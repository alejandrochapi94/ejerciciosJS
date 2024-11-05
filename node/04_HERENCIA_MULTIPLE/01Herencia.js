//Herencia
//Clase padre
class Animal{
    //Constructor
    constructor(nombre){
        this.nombre = nombre; //this
    }
    //Métodos
    hacerSonido(){
        console.log(`${this.nombre} hace un sonido.`); 
    }
}
//Herencia
//Clase hija
class Perro extends Animal{
    //Constructor
    constructor(nombre,raza){
        super(nombre); //Enviando la información a la clase padre
        this.raza = raza; //Propiedades de la clase hija
    }
    ladrar(){
        console.log("Estoy ladrando ", this.raza)
    }
}


//Instancia de la clase

const animal1 = new Animal("Animal genérico");
animal1.hacerSonido();
//Si en el constructor de la clase hija no envío todos los parámetros
//No me da error, solo se van como undefined
const perro1 = new Perro("Firulais", "Labrador"); //Herendando el constructor
perro1.hacerSonido();
perro1.ladrar();