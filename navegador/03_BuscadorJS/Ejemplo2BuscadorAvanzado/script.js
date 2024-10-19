// Esperamos que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el input y el div para mostrar resultados
    const buscador = document.getElementById("buscador");
    const resultados = document.getElementById("resultados");
    const contenidoSitio = document.getElementById("contenido-sitio");

    // Obtener todos los títulos y párrafos del sitio
    const elementosBuscables = contenidoSitio.querySelectorAll("h2, p");

    // Agregar el evento 'input' para capturar cada cambio en el campo de búsqueda
    buscador.addEventListener("input", function() {
        // Limpiar los resultados anteriores
        resultados.innerHTML = "";

        // Obtener el valor de búsqueda
        const textoBusqueda = buscador.value.toLowerCase();

        // Si no hay texto de búsqueda, vaciar resultados y detener la función
        if (textoBusqueda === "") {
            resultados.innerHTML = "<p class='no-result'>Escribe algo para buscar...</p>";
            return;
        }

        let coincidencias = 0;

        // Recorrer cada elemento (títulos y párrafos)
        elementosBuscables.forEach(function(elemento) {
            const textoElemento = elemento.textContent.toLowerCase();

            // Si el texto del elemento incluye el valor de búsqueda, lo añadimos a los resultados
            if (textoElemento.includes(textoBusqueda)) {
                const resultadoDiv = document.createElement("div"); //Creamos un div
                resultadoDiv.classList.add("resultado");

                // Cortar el texto del elemento en un máximo de caracteres
                const textoCortado = elemento.textContent.substring(0, 50);

                // Si el texto es más largo que el máximo de caracteres, agregar puntos suspensivos
                if (elemento.textContent.length > 50) {
                    textoCortado += "...";
                }

                // Crear un enlace que redirija al contenido
                const enlace = document.createElement("a");
                enlace.href = `#${elemento.id}`; // Asignar el ID del elemento como ancla
                enlace.textContent = textoCortado;

                // Agregar el enlace al div de resultados
                resultadoDiv.appendChild(enlace);

                // Añadimos el resultado a la lista de resultados
                resultados.appendChild(resultadoDiv);
                coincidencias++;
            }
        });

        // Si no hay coincidencias, mostrar un mensaje
        if (coincidencias === 0) {
            resultados.innerHTML = "<p class='no-result'>No se encontraron resultados.</p>";
        }
    });
});