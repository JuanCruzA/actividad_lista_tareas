//funcion para aagregar tarea
function agregarTarea() {
    const nuevaTareaInput = document.getElementById('nuevaTarea');
    const listaTareas = document.getElementById('listaTareas');
    const nuevaTareaTexto = nuevaTareaInput.value.trim();

    if (nuevaTareaTexto !== "") {
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = nuevaTareaTexto;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'delete';
        botonEliminar.onclick = function() {
            listaTareas.removeChild(nuevaTarea);
        };
       nuevaTarea.appendChild(botonEliminar);
       listaTareas.appendChild(nuevaTarea);
       nuevaTareaInput.value = '';
    }
}

//funcion pra marcar una tarea como completada
function marcarCompletada(tarea) {
    tarea.classList.toggle('completed');
}


//agregar evento de clcic a las tareas para marcarlas como completadas
document.getElementById('listaTareas').addEventListener('click', 
function(event) {
    if (event.target.tagName === 'LI') {
        marcarCompletada(event.target);
    }
});

//agregar evento de clicc al boton agregar
document.getElementById('agregar').addEventListener('click', agregarTarea);

//funcion para mostrar tareas completadas
function mostrarCompletadas() {
    const tareas = document.querySelectorAll('li');
    tareas.forEach(tarea => {
        if (tarea.classList.contains('completed')) {
            tarea.style.display = 'flex';
        } else {
            tarea.style.display = 'none';
        }
    });
}

//funcion para mostrar tareas pendientes
function mostrarPendientes() {
    const tareas = document.querySelectorAll('li');
    tareas.forEach(tarea => {
        if (!tarea.classList.contains('completed')) {
            tarea.style.display = 'flex';
        } else {
            tarea.style.display = 'none';
        }
    });
}

//gregar evento de clic al boton "mostrar completadas"
document.getElementById('mostrarCompletadas').addEventListener('click', mostrarCompletadas);
//agregar evento de click al boton "mostrar pendientes"
document.getElementById('mostrarPendientes').addEventListener('click', mostrarPendientes);