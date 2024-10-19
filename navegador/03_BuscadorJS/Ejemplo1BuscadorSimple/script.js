// Esperamos que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el input y la lista
    const buscador = document.getElementById("buscador");
    const lista = document.getElementById("lista");
    const items = lista.getElementsByTagName("li");

    // Agregar el evento 'input' para capturar cada cambio en el campo de búsqueda
    buscador.addEventListener("input", function() {
        // Obtener el valor de búsqueda, convertido a minúsculas para que no sea sensible a mayúsculas/minúsculas
        const textoBusqueda = buscador.value.toLowerCase();

        // Recorrer cada elemento de la lista
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const textoItem = item.textContent.toLowerCase();

            // Si el texto del elemento incluye el valor de búsqueda, se muestra
            if (textoItem.includes(textoBusqueda)) {
                item.style.display = ""; // Mostrar el elemento
            } else {
                item.style.display = "none"; // Ocultar el elemento
            }
        }
    });
});
