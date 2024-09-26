const kuruma = {
    model:2022,
    color: '緑',
    mileage: 200000,
    engine: '2.02 turbo'
}

console.log(kuruma);
console.log(kuruma.model);
console.log(kuruma.color);
console.log(kuruma.mileage);
console.log(kuruma.engine);

kuruma.engine = '4.0 Supotsu';
console.log(kuruma.engine);

kuruma.collitions = 5;
console.log(kuruma);

kuruma['placas'] = 'XD 666 SEX';
console.log(kuruma);

kuruma.services = [2005, 2007, 2010, 2016, 1945];
console.log(kuruma['services']);

kuruma.status = 'apagado';

kuruma.start = function() {
    console.log('Revisión de sistema');
    console.log('ÑYUUUUU');
    console.log('Fin de revisión de sistema');
    console.log('!R');
    console.log('!R');
    console.log('!R');
    this.status = 'encendido';
    console.log(this.status);
}

kuruma['turn off'] = function() {
    console.log('\nApagandose...');
    this.status = 'apagado';
    console.log(this.status);
}

kuruma.start();
kuruma['turn off']();

console.log(kuruma);
delete kuruma['placas'];
console.log(kuruma);