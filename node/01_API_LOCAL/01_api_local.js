document.getElementById('download-btn').addEventListener('click', function() {
    // Ejemplo de URL de API, reemplázala por la API real
    const apiUrl = 'https://alejandrochapi94.github.io/empleados/db_empleaados.json';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Aquí manipulas los datos como desees
        const manipulatedData = data.map(item => ({
          ...item,
          title: item.eyeColor.toUpperCase(), // Ejemplo de manipulación: convertir el título a mayúsculas
        }));

        // Convertir los datos manipulados a JSON
        const dataStr = JSON.stringify(manipulatedData, null, 2);

        // Crear un Blob con los datos
        const blob = new Blob([dataStr], { type: 'application/json' });

        // Crear un enlace de descarga
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'datos.json'; // Nombre del archivo que se descargará
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a); // Eliminar el enlace después de la descarga
      })
      .catch(error => console.error('Error al obtener los datos:', error));
});