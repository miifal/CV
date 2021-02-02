


const element = document.querySelectorAll('.titulo');
function cambiarColor() {
    element.style.color = '#8F2D56';

};



//añadir párrafo al final

const parrafo = document.createElement('p');

const contenido = document.createTextNode('Update: Frbruary 2021');

parrafo.appendChild(contenido);
document.body.appendChild(parrafo);