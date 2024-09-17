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