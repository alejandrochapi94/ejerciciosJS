const formulario = document.getElementById("miFormulario");
const botonClick = document.getElementById("botonClick");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("Formulario enviado con submit");
  // Lógica para enviar a un servidor
});

botonClick.addEventListener("click", function() {
  console.log("Formulario 'enviado' con click");
  // Validaciones y luego...
  // Lógica para enviar a un servidor
});