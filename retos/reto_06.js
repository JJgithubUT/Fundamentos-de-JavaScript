function createCube(size) {
  let cubo = '';

  for (let i = 1; i <= size; i++) {
    linea = '';
    let pinzas = '/\\'.repeat(i);
    let otroLado = '_\\'.repeat(size);
    let espaciado = ' '.repeat(size - i);
    linea = espaciado + pinzas + otroLado;
    cubo = cubo + linea + '\n'
  }

  for (let i = size; i >= 1; i--){
    linea = '';
    let pinzas = '\\/'.repeat(i);
    let otroLado = '_/'.repeat(size);
    let espaciado = ' '.repeat(size - i);
    linea = espaciado + pinzas + otroLado;
    cubo = cubo + linea + '\n'
  }

  return cubo;
}

const cubeOfOne = createCube(10);
console.log(cubeOfOne);
