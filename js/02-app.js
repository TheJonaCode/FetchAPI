const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleado.json';
    fetch(url)
        .then( respuesta => respuesta.json())
        .then (resultado => mostrarHTML(resultado))
}

function mostrarHTML({ empresa, id, nombre, trabajo}){
    const conotenido = document.querySelector('.contenido');

    conotenido.innerHTML = `
        <p>Empleado: ${nombre} </p>
        <p>ID: ${id} </p>
        <p>Empresa: ${empresa} </p>
        <p>Trabajo: ${trabajo} </p>`;
}