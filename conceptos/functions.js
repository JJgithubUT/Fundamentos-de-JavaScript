// Funciones  y funciones de flecha

// function nameFunction(params){
//     body
//     return
// }

// Arrow function
// const nameFunction = (params) => {
//     body
//     return
// }

function sayHello(){
    console.log('Hello');
}
sayHello();

const sayHelloSpanish = () => console.log('Hola');
sayHelloSpanish();

function sayHelloTol(name) {
    console.log('Hello ' + name);
}
sayHelloTol('Batman');

const sayHelloTo = name => console.log(`Hello ${ name }`);

sayHelloTo('Spiderman');

function fullName(Name, lastName) {
    console.log(`Hola, mi nombre es: ${ Name } ${ lastName }.`);
}

fullName('Hoxy', 'Punto');

const fullName2 = (name, lastName) => console.log(`Mi name es ${ name } ${ lastName}.`);

fullName2('Andrés', 'Obrador');

function duplicateNumber(number) {
    return number * 2;
}

let duplicate = duplicateNumber(5);
console.log(duplicate);

const halfNumber = number => number / 2;
let half = halfNumber(10);

console.log(half);

// Parametros opcionales
function greetings(name = 'invitado'){
    console.log(`Hola ${ name }.`);
}

greetings('Batman');
greetings();

const greetings2 = (name = 'Invitado') => console.log(`Hola ${ name }.`);
greetings2('Spiderman');
greetings2();