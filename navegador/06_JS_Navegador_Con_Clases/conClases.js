// script.js
//Declaramos la clase antes del evento de escucha
class Alerta {
        constructor(mensaje) {
        this.mensaje = mensaje;
    }

    mostrar() {
        alert(this.mensaje);
    }
}

//Definismos el evento de escucha
document.getElementById("miBoton").addEventListener("click", function() {
    //Creamos una instancia de la clase
    const alerta = new Alerta("Bienvenido a este sitio web, por favor.");
    //Llamamos a la función mostrar
    alerta.mostrar();
});
