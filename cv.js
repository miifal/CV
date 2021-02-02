





//añadir párrafo al final

const parrafo = document.createElement('p');

const contenido = document.createTextNode('Updated: February 2021, Madrid');

parrafo.appendChild(contenido);
document.body.appendChild(parrafo);


// 


const selectButton = document.querySelector('button');
function changeColor() {
    selectButton.style.backgroundColor = '#FBB13C';
  };