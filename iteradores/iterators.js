// High Order Functions
// Funciones de Orden Superior
// Son funciones que reciben funciones como
// parámetros

const suma = (a, b) => a + b;

const resta = (a, b) => a - b;

const operation = (a, b, callback) => {
     const result = callback(a, b);
     console.log('El resultado es: ' + result);
}

operation(2, 5, suma);
operation(12, 5, resta);
operation(12, 5, (a, b) => a*b);

const cars = ['vocho', 'athos', 'pointer', 'tsuru', 'bmw'];
cars.forEach((car) => { console.log(car) });

let filtrados = cars.filter(car => car === 'tsuru');
console.log(filtrados);

filtrados = cars.filter(car => car.includes('o'));
console.log(filtrados);

// regresar los que comiencen con a
filtrados = cars.filter(car => car.startsWith('a'));
console.log(filtrados);

// regresar los que terminen con u
filtrados = cars.filter(car => car.endsWith('u'));
console.log(filtrados);

// regresar los que tengan menos de 5 letras
filtrados = cars.filter(car => car.length < 5);
console.log(filtrados);

// método MAP
const CARS = cars.map(car => car.toUpperCase());
console.log(cars);
console.log(CARS);

const CARS_inverso = cars.map(car => {
    return car.split('').reverse().join('').toUpperCase();
});
console.log(CARS_inverso);

// forEach, map, filter
// reduce

const numeros = [1,2,3,4,5,6,7,8,9,10];
const sumatoria = numeros.reduce((a, b) => a + b);
console.log(numeros);
console.log(sumatoria);

const factorial = numeros.reduce((a, b) => a * b);
console.log(numeros);
console.log(factorial);

// every regresa verdadero si todos cumplen
const ages = [3, 14, 37, 19, 18, 22, 27];
const olders = ages.every(age => age >= 18);
const youngers = ages.every(age => age < 18);
console.log(ages);
console.log("every olders: " + olders);
console.log("every yougers: " + youngers);
// some regresa verdadero con uno que cumpla
const olders2 = ages.some(age => age >= 18);
const youngers2 = ages.some(age => age < 18);
console.log(ages);
console.log("some olders: " + olders2);
console.log("some yougers: " + youngers2);

let numbers = [1, 2, 3, 4, 5];
let numbers2 = [...numbers];

let arrayunoaldiez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayunoaldiez);
const audcuad = arrayunoaldiez.map(audcua => audcua ** 2);
console.log(audcuad);
const audcubi = arrayunoaldiez.map(audcub => audcub ** 3);
console.log(audcubi);
const audhalf = arrayunoaldiez.map(audhal => audhal / 2);
console.log(audhalf);
const audpares = arrayunoaldiez.filter(audpar => audpar % 2 === 0);
console.log(audpares);
const audimpares = arrayunoaldiez.filter(audimp => audimp % 2 !== 0);
console.log(audimpares);
const audtresocho = arrayunoaldiez.filter(audtroc => audtroc >= 3 && audtroc <= 8);
console.log(audtresocho);