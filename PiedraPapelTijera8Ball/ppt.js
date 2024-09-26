var boton_jugar = document.getElementById('boton_jugar');
var boton_recargar = document.getElementById('boton_recargar');
var jugador = document.getElementById('panel_jugador');
var pc = document.getElementById('panel_pc');
var panel_resultados = document.getElementById('panel_resultados');

const partida = () => {
    jugador.innerText = 'Usuario';
    pc.innerText = 'Computadora';
    panel_resultados.innerText = 'Resultado';
            
    const options = ['💎', '📜', '✂️'];

    const tiroJugador = options[Math.floor(Math.random() * 3)];
    const tiroPc = options[Math.floor(Math.random() * 3)];

    jugador.innerText += ": " + tiroJugador;
    pc.innerText += ": " + tiroPc;

    if (tiroJugador === tiroPc) {
        panel_resultados.innerText = 'Empate';
    } else if (
        (tiroJugador === '💎' && tiroPc === '✂️') ||
        (tiroJugador === '✂️' && tiroPc === '📜') ||
        (tiroJugador === '📜' && tiroPc === '💎')
    ) {
        panel_resultados.innerText = "Ganaste";
    } else {
        panel_resultados.innerText =  "La Pc ganó";
    }
};

const recargar = () => {
    jugador.innerText = 'Usuario';
    pc.innerText = 'Computadora';
    panel_resultados.innerText = 'Resultado';
}

boton_jugar.addEventListener('click', partida);
boton_recargar.addEventListener('click', recargar);