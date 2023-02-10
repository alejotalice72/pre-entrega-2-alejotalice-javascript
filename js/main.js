const products = [{id: 1, name: "El señor de los anillos", cantidad:5},{id: 2, name: "Harry Potter", cantidad: 3},{id: 3, name:"Sherlock Holmes", cantidad: 2},{id: 4, name:"Pinocho", cantidad: 1}];
class User {
    constructor(userName, age, saldo) {
        this.userNamme = userName;
        this.age = age;
        this.saldo = saldo;
    }
    comprar(monto) {
        this.saldo -= monto;
    }
    agregarSaldo(monto) {
        this.saldo += monto;
    }
}

alert("-- Creando un nuevo usuario --");
const userName = prompt("Ingrese su nombre de usuario: ");
const age = parseInt(prompt("Ingrese su edad: "));
const saldo = parseInt(prompt("Ingrese su saldo inicial: "));
const user1 = new User(userName, age, saldo);

console.log(user1);