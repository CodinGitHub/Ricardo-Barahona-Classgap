// ARREGLOS

let numero = true;
let arreglo = ['uno', 'dos', 15, false];

// Acceder a los elementos
console.log( arreglo[2] );

/* ----------------METODOS DE LOS ARREGLOS-------------------- */

//Agregar un elemento al final
arreglo.push('casa');
console.log(arreglo);

//Quitar un elemento del final
arreglo.pop();
console.log(arreglo);

//Agregar elementos al inicio
arreglo.unshift(true);
console.log(arreglo);

//Quitar elementos al inicio
arreglo.shift();
console.log(arreglo);

//REDUCE - reduce un arreglo a un valor
let array2 = [1, 15 ,10, 3];

let suma = array2.reduce(
    (sum, valorActual)=> sum + valorActual,
    0
)

console.log(suma);

//FOREACH

let array3 = ['David', 'Ricardo', 'Maria', 'Jose'];

array3.forEach( elementoActual=>{
    console.log(elementoActual + ' Perez')
});