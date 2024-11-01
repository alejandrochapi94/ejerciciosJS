// script.js
//Definir la clase 
class ListaTareas {
    constructor() { //Constructor vacío
      this.tareas = []; // Array para almacenar las tareas
      this.ul = document.getElementById("listaTareas");
    }
  
    agregarTarea(tarea) {
      this.tareas.push(tarea);
      this.actualizarUI();
    }
  
    eliminarTarea(index) {
      this.tareas.splice(index, 1);
      this.actualizarUI();
    }
  
    actualizarUI() {
      this.ul.innerHTML = ""; // Limpiar la lista
  
      this.tareas.forEach((tarea, index) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item"); // Añadir la clase de Bootstrap 5
        li.textContent = tarea;
  
        // Agregar un botón para eliminar la tarea
        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add("btn", "btn-danger", "float-end"); // Añadir las clases de Bootstrap 5
        botonEliminar.textContent = "Eliminar";
        //Agregando el evento de escucha al botón eliminar
        botonEliminar.addEventListener("click", () => this.eliminarTarea(index));
  
        li.appendChild(botonEliminar); // Agregar el botón al elemento <li>
        this.ul.appendChild(li);
      });
    }
  }
  
  //Creamos una instancia de la clase ListaTareas
  const lista = new ListaTareas();
  //Lógica del programa
  document.getElementById("agregarTarea").addEventListener("click", () => {
    const nuevaTarea = document.getElementById("nuevaTarea").value;
    if (nuevaTarea.trim() !== "") { // Evitar agregar tareas vacías
      lista.agregarTarea(nuevaTarea);
      document.getElementById("nuevaTarea").value = ""; // Limpiar el input
    }
  });
