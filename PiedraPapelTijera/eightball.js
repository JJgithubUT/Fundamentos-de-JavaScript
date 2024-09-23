const main = document.querySelector('main');
const boton = document.getElementById('botonKuni')
const h1 = document.querySelector('h1');

const eightBall = () => {
    const question = prompt('Pregunta');
    const ranDom = Math.floor(Math.random() * 11);
    const options = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10'
    ];

    h1.innerText = options[ranDom];
}
//main.addEventListener('click', eightBall);
boton.addEventListener('click', eightBall);