//Polimorfismo

//Clases y herencia
class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }
    //Método
    hablar(){
        console.log(`${this.nombre} hace un sonido del padre.`);
    }
}

class Perro extends Animal{
    //Nuevo método hablar que SOBRESCRIBE AL MÉTODO DE LA CLASE PADRE
    hablar(){
        console.log(`${this.nombre} hace un grito del hijo.`);
    }
}



//Duck typing
//Si camina como un pato y habla como un pato,
//entonces es un pato

class Pato{
    volar(){
        console.log("El pato vuela")
    }
    cuack(){
        console.log("El pato cuacka")
    }
}

class Avion{
    volar(){
        console.log("El avión vuela")
    }
}

class Pajaro{
    
    picotea(){
        console.log("el pájaro picotea")
    }
}

function hacerVolar(instanciaDeClase){
    if(typeof instanciaDeClase.volar === "function"){
        instanciaDeClase.volar();
    }else{
        console.log("Esta clase no puede volar")
    }
}


//Instancias de estas clases
const pato = new Pato(); //1ra instancia de clase
const avion = new Avion();
const pajaro = new Pajaro();

hacerVolar(pajaro);