document.getElementById("btnMostrar").addEventListener("click", () => {
  fetch('https://alejandrochapi94.github.io/empleados/db_empleaados.json') // URL de la API
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json(); // Convertir la respuesta a formato JSON
    })
    .then(data => {
      console.log(typeof data); 
      document.getElementById("resultado").innerHTML = "";// Trabajar con los datos recibidos
      for (let i = 0; i < data.length; i++) {
        if (data[i].gender === "male") {
          console.log(data[i]);
          
          document.getElementById("resultado").innerHTML += `<p>${data[i].name}, ${data[i].email}, ${data[i].company}, ${data[i].phone}</p>`;
          
        }
      }
    })
    .catch(error => {
      console.error('Error:', error); // Manejar cualquier error
    });
});


document.getElementById("btnfemale").addEventListener("click", () => {
  fetch('https://alejandrochapi94.github.io/empleados/db_empleaados.json') // URL de la API
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json(); // Convertir la respuesta a formato JSON
    })
    .then(data => {
      console.log(typeof data);
      document.getElementById("resultado").innerHTML = ""; // Trabajar con los datos recibidos
      for (let i = 0; i < data.length; i++) {
        if (data[i].gender === "female") {
          console.log(data[i]);
          
          document.getElementById("resultado").innerHTML += `<p>${data[i].name}, ${data[i].email}, ${data[i].company}, ${data[i].phone}</p>`;
        }
      }
    })
    .catch(error => {
      console.error('Error:', error); // Manejar cualquier error
    });
});