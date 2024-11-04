
//Diccionario u objeto literal
  /*
const prototipo = {
    saludar: function() {
      console.log("Hola!");
    }
  };
  //Creando copias del objeto literal original
  const miObjeto = Object.create(prototipo);
  miObjeto.nombre = "Juan"; //Agregando propiedades
  miObjeto.apellido = "Perez";
  const miObjeto2 = Object.create(prototipo);
  miObjeto2.edad = 30;

  console.log(miObjeto);
  console.log(miObjeto2);
  miObjeto.saludar();
  miObjeto2.saludar();

  */

  const prototipo = {
    //Un objeto
  saludar: () => console.log("Hola")
};
//Creando una copia
const miObjeto = Object.create(prototipo);
miObjeto.saludar(); // Output: Hola
