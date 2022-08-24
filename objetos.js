let fruta = 'manzada';
let nombres = ['David', 'Ricardo'];

console.log(nombres[1])

let usuario1 = {
    name: 'Ricardo',
    email: 'ricardo@gmail.com',
    age: 25,
    student: true,
    hobbies: ['escribir', 'leer', 'programar'],
    address: {
        street1: 'calle1',
        street2: 'calle2',
        number: 1145
    } 
};

let usuario2 = {
    name: 'David',
    email: 'david@gmail.com',
    age: 38
};

console.log(usuario1.address.street1);

/*---------CLASES - PLANTILLA PARA CREAR OBJETOS--------------------------*/

class User{
    constructor(name, secondName, email, age){
        this.nombre = name;
        this.apellido = secondName;
        this.correo = email;
        this.edad = age;
    }
    printFullName(){
        return this.nombre + " " + this.apellido;
    }
}

let usuario3 = new User('Maria', 'Perez', 'maria@gmail.com', 15);

console.log(usuario3)
console.log(usuario3.printFullName())

/* Objetos carro de compras */

let item = {
    img: './images/picture1.jpg',
    name: 'Beanie with logo',
    price: 18,
    quantity: 3,
    total(){
        return this.quantity * this.price;
    }
}