// 1. Seleccionar eventos del DOM

// querySelector
let addBtnId = document.querySelector('#addBtn');
let addBtnClass = document.querySelector('.botones');
let addBtnTag = document.querySelector('div');

// getElementBy
let addBtnId2 = document.getElementById('addBtn');
let addBtnClass2 = document.getElementsByClassName('botones')
let addBtnTag2 = document.getElementsByTagName('div')

// Seleccionar el contenedor
let contenedor = document.getElementsByClassName('container')
console.log(contenedor[0])

//2. Escuchar
addBtnId.addEventListener('click', ()=>{
    // cambiado estilos
    contenedor[0].style.border = '2px solid red';
    // Agregar elementos
    contenedor[0].innerHTML += `<button>Ejemplo de bton</button>`
});