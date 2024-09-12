/* -- Operadores matemáticos:
+ y -, * y /, % y **
*/
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);
console.log(10 ** 3);

// Operadores String
// Concatenación
console.log("Hola" + " " + "Mundo");

// Operadores de asignación
let a = 1; // a = a +3
a += 3;
a -= 3;
a *= 3;
a /= 3;
a %= 3;
a **= 3;
console.log("Valor de 'a': " + a);

// Operadores de comparación
console.log("10 < 3: " + (10 < 3));  // "10 < 3: false"
console.log("10 > 3: " + (10 > 3));  // "10 > 3: true"
console.log("10 >= 3: " + (10 >= 3));  // "10 >= 3: true"
console.log("10 <= 3: " + (10 <= 3));  // "10 <= 3: false"
console.log("10 == 3: " + (10 == 3));  // "10 == 3: false"
console.log("10 === 3: " + (10 === 3));  // "10 === 3: false"
console.log("10 != 3: " + (10 != 3));  // "10 != 3: true"
console.log("10 !== 3: " + (10 !== 3));  // "10 !== 3: true"

// Operadores Booleanos
console.log(true && true) // And
console.log(true || false) // OR
console.log(!true) // Not