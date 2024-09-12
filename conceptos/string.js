// String en JS
// Hola soy Juan de Huamantla
let name = "フアン様";
let city = 'ワマントラ';
let message = "おはよう。これは" + name + "です。" + city + "から来ました。";
console.log(message);
message = 'おはよう。これは\'' + name + '\'です。' + city + 'から来ました。';
console.log(message);

// Template literals
message = `おはよう。これは${ name }です。${ city }から来ました。`;
console.log(message);

// Separador
console.log("-----------------");

// Funciones métodos para strings
console.log(message.toLowerCase());
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.includes('from'));
console.log(message.startsWith('Hello'));
console.log(message.endsWith('.'));