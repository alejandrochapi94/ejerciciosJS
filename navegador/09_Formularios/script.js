
const formulario = document.getElementById("miFormulario");
const nombreInput = document.getElementById("nombre");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // Previene el envío por defecto

  const nombre = nombreInput.value;
  const email = document.getElementById("email").value;

  console.log("Nombre:", nombre);
  console.log("Email:", email);

  // Aquí se podría
});

nombreInput.addEventListener("input", function(event) {
  console.log("Nombre (input):", this.value); // 'this' se refiere al elemento
});

nombreInput.addEventListener("change", function(event) {
  console.log("Nombre (change):", this.value);
});