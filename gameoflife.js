/*let tablero = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];*/
//let tablero_nuevo = [];
//console.log(tablero);

const numfilas = 6;
const numColumnas = 6;
const tablero = Array(numfilas)
  .fill(0)
  .map(() => Array(numColumnas).fill(0));
const tablero_actual = tablero;

let contador_vecinos = 0;
//configuración inicial de ejemplo básico
for (let k = 1; k < 4; k++) {
  tablero_actual[k][2] = 1;
}
console.table(tablero_actual);

function revivir(tablero_actual) {
  //let tablero_nuevo = [[], [], []];
  //console.log(tablero_anterior.length);
  let tablero_nuevo = Array(numfilas)
    .fill(0)
    .map(() => Array(numColumnas).fill(0));

  for (let i = 0; i < tablero_actual.length; i++) {
    for (let j = 0; j < tablero_actual[i].length; j++) {
      if (tablero_actual[i][j] === 1) {
        contador_vivos = revisar_vecinos(tablero_actual, i, j);
        if (contador_vivos === 2 || contador_vivos === 3) {
          tablero_nuevo[i][j] = 1;
        } else {
          tablero_nuevo[i][j] = 0;
        }
      }
      if (tablero_actual[i][j] === 0) {
        contador_vivos = revisar_vecinos(tablero_actual, i, j);

        if (contador_vivos === 3) {
          tablero_nuevo[i][j] = 1;
        } else {
          tablero_nuevo[i][j] = 0;
        }
      } else {
        tablero_nuevo[i][j] = 0;
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

  let posXAdaptadaMin = posXActual + 1;
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
