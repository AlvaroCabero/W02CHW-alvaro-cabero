/*let tablero = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];*/
//let tablero_nuevo = [];
//console.log(tablero);

const numfilas = 25;
const numColumnas = 25;
const tablero = Array(numfilas)
  .fill(0)
  .map(() => Array(numColumnas).fill(0));

for (let o = 0; o < tablero.length; o++) {
  for (let p = 0; p < tablero[o].length; p++) {
    document.querySelectorAll(".board").insertAdjacentHtml(
      "beforeend",
      `<div class="board__cell">
    </div>`
    );
  }
}
//configuración inicial de ejemplo básico
for (let k = 0; k < 12; k++) {
  tablero[k][4] = 1;
}
for (let k = 6; k < 20; k++) {
  tablero[k][3] = 1;
}
for (let k = 15; k < 24; k++) {
  tablero[k][5] = 1;
}

console.table(tablero);

function revivir(tablero_actual) {
  //let tablero_nuevo = [[], [], []];
  //console.log(tablero_anterior.length);
  let tablero_nuevo = Array(numfilas)
    .fill(0)
    .map(() => Array(numColumnas).fill(0));

  let contador_vivos = 0;

  for (let i = 0; i < tablero_actual.length; i++) {
    for (let j = 0; j < tablero_actual[i].length; j++) {
      if (tablero_actual[i][j] === 1) {
        contador_vivos = revisar_vecinos(tablero_actual, i, j);
        if (contador_vivos === 2 || contador_vivos === 3) {
          tablero_nuevo[i][j] = 1;
          //console.log("Bien = " + contador_vivos);
        } else {
          tablero_nuevo[i][j] = 0;
          // console.log(contador_vivos);
        }
      }
      if (tablero_actual[i][j] === 0) {
        contador_vivos = revisar_vecinos(tablero_actual, i, j);

        if (contador_vivos === 3) {
          tablero_nuevo[i][j] = 1;
        } else {
          tablero_nuevo[i][j] = 0;
        }
      }
    }
  }
  console.table(tablero_nuevo);

  return tablero_nuevo;
}

function revisar_vecinos(tablero_revisado, posXActual, posYActual) {
  /*console.log(tablero_revisado);
  console.log(posXActual);
  console.log(posYActual);*/
  let contador_vecinos = 0;

  let posXAdaptadaMin = posXActual - 1;
  let posXAdaptadaMax = posXActual + 1;
  let posYAdaptadaMin = posYActual - 1;
  let posYAdaptadaMax = posYActual + 1;

  if (posXActual === 0) {
    posXAdaptadaMin = posXActual;
  }
  if (posYActual === 0) {
    posYAdaptadaMin = posYActual;
  }
  if (posXActual === tablero_revisado.length - 1) {
    posXAdaptadaMax = posXActual;
  }
  if (posYActual === tablero_revisado[posXActual].length - 1) {
    posYAdaptadaMax = posYActual;
  }
  //console.log(posXAdaptadaMin);
  for (let l = posXAdaptadaMin; l <= posXAdaptadaMax; l++) {
    for (let m = posYAdaptadaMin; m <= posYAdaptadaMax; m++) {
      if (tablero_revisado[l][m] === 1) {
        if (l !== posXActual || m !== posYActual) {
          contador_vecinos++;
        }
      } //.......
    }
  }
  return contador_vecinos;
}

revivir(tablero);

/* module.exports = {
  revivir,
  revisar_vecinos,
}; */
