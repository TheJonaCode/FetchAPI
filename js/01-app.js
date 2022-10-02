const cargarTextBtn = document.querySelector('#cargarTxt');
cargarTextBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    /* DECLARAR FECTH FORMA 1
    fetch('data/datos.txt' */
    //FORMA 2
    const url = 'data/datos.txt';
    fetch(url)
        .then(respuesta => {
            console.log(respuesta);
            console.log(respuesta.status);
            console.log(respuesta.statusText);
            console.log(respuesta.url);
            console.log(respuesta.type);
            console.log(Hola);

            return respuesta.text()
        })
        .then(datos => {
            console.log(datos)
        })
        .catch(error => {
            console.log(error);
        })
}