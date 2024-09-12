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