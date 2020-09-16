import * as UI from './interfaz.js';

class API {
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;

    }

    consultarAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        Spinner();
        fetch(url)
            .then(respuesta => respuesta.json() )
            .then( resultado => {

                if(resultado.lyrics){
                const { lyrics } = resultado;

                UI.divResultado.textContent = lyrics;
                UI.headingResultado.textContent = `Letra de la canción ${this.cancion} de ${this.artista}`;
                } else {
                    UI.divMensajes.textContent = 'La canción no existe, prueba otra busqueda';
                    UI.divMensajes.classList.add('error')

                    setTimeout(() =>{
                        UI.divMensajes.textContent = '';
                        UI.divMensajes.classList.remove('error')
                    }, 3000);
                }
            })
    }
}

export default API;


function Spinner(){
    
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-chase');

    divSpinner.innerHTML= `
    <div class="rect1"></div>
  <div class="rect2"></div>
  <div class="rect3"></div>
  <div class="rect4"></div>
  <div class="rect5"></div>
    `;

    resultado.appendChild(divSpinner);
}