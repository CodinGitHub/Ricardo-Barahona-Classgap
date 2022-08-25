let tareas = [
    {id: 10, nombre: 'Estudiar HTML', completada: true}, 
    {id: 20, nombre: 'Estudiar CSS', completada: false}, 
    {id: 30, nombre: 'Estudiar Javascript', completada: false}
]

// Declarar la variable del boton
let btn = document.getElementById('btn');

// Declarar la variable del contenedor
let contenedor = document.getElementsByClassName('taskContainer');

// Cuando se presione se haga el evento

// btn.addEventListener('click', ()=>{
//     contenedor[0].innerHTML += `
//     <div class="tarea">
//         <p>1</p>
//         <p>Estudiar HTML</p>
//         <p>true</p>
//     </div>`
// });

btn.addEventListener('click', ()=>{
    tareas.forEach(element => {
        contenedor[0].innerHTML += `
        <div class="tarea">
            <p>${element.id}</p>
            <p>${element.nombre}</p>
            <p>${element.completada}</p>
        </div>`
    })
});