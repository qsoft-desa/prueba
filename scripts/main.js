 
const miTitulo = document.querySelector("h1");
miTitulo.textContent = "¡Hola mundo!";
 
let miImagen = document.querySelector('Img');

miImagen.onclick = function () {
    let src = miImagen.getAttribute('src');
    if (src === 'images/qsoft.png') {
        miImagen.setAttribute('src', 'images/qsoft2.png');
    } else {
        miImagen.setAttribute('src', 'images/qsoft.png');
    }
}

let miBoton = document.querySelector('button');
miBoton.onclick = function() {usuario()} ;

function usuario() {
    let miUsuario = prompt('usuario ?');
    if (!miUsuario) {
        usuario();
    } else {
        localStorage.setItem('usuario', miUsuario);
        miTitulo.textContent = miUsuario;
    }
    
}

if (!localStorage.getItem('usuario')) {
    usuario();
} else {
    miTitulo.textContent = localStorage.getItem('usuario');
}
