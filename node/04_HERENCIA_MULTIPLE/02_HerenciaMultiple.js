//Clase de herencia múltiple
//JS por defecto no soporta la herencia múltiple
//Clase padre

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
//Clase hija1 (Herencia)
class Voladores extends Animal{
    volar(){
        console.log(`${this.nombre} esta volando`)
    }
}
//Clase hija2 (Herencia)
class Nadadores extends Animal{
    nadar(){
        console.log(`${this.nombre} esta nadando`)
    }
}


//Clase hija3 -> Clase hija 1 y de la Clase hija 2 (Herencia múltiple)

//Mixin
//Clase 1 Voladores1
const Voladores1 = Animal => class extends Animal{
    volar(){
        console.log(`${this.nombre} esta volando`)
    }
}
//Clase 2 Nadadores1

const Nadadores1 = Animal => class extends Animal{
    nadar(){
        console.log(`${this.nombre} esta nadando`)
    }
}
//Herencia múltiple
class Pato extends Nadadores1(Voladores1(Animal)){
    cuack(){
        console.log(`${this.nombre} esta cuackando`)
    }
}

const pato = new Pato("Lucas");
pato.cuack();
pato.nadar();
pato.volar();