





//añadir párrafo al final

const parrafo = document.createElement('p');

const contenido = document.createTextNode('Updated: February 2021, Madrid');

parrafo.appendChild(contenido);
document.body.appendChild(parrafo);


// 


const element = document.querySelector(".titulo");

function changeColor() {
    element.style.backgroundColor = '#fff666';
};