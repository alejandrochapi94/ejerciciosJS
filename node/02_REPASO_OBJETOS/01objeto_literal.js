//Creando un objeto de forma literal
//diccionario
  /*
const miObjeto = {
    nombre: "Juan", //cadenas
    edad: 30,    //Variables (numéricos)
    saludar: function() { //Funciones
      console.log("Hola, mi nombre es " + this.nombre);
    }
  };

  console.log(miObjeto.edad);
miObjeto.saludar();


  */

const miObjetoComun = {
    
    saludar: function() { //Funciones
      console.log("Hola, mi nombre es " + this.nombre);
    }
  };

  //Función que se despide
  function Despedirse(){
    console.log("Adiós")
  }


  const miObjeto = {
  saludar: () =>  console.log("Hola"),
  despedirse: Despedirse
};

miObjeto.despedirse(); // Output: Hola
