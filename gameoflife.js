/*let tablero = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];*/
//let tablero_nuevo = [];
//console.log(tablero);

const numfilas = 5;
const numColumnas = 5;
const tablero = Array(numfilas)
  .fill(0)
  .map(() => Array(numColumnas).fill(0));
const tablero_anterior = tablero;

//configuración inicial de ejemplo básico
for (let k = 1; k < 4; k++) {
  tablero_anterior[k][2] = 1;
}
console.table(tablero_anterior);

function revivir(tablero_anterior) {
  //let tablero_nuevo = [[], [], []];
  //console.log(tablero_anterior.length);
  let tablero_nuevo = Array(numfilas)
    .fill(0)
    .map(() => Array(numColumnas).fill(0));

  for (let i = 0; i < tablero_anterior.length; i++) {
    for (let j = 0; j < tablero_anterior[i].length; j++) {
      //tablero_nuevo[i][j] = 1;
      if (tablero_anterior[i][j] === 1) {
        revisar_vecinos(tablero_anterior, i, j);
        tablero_nuevo = tablero_anterior;
      }
    }
  }
  console.table(tablero_nuevo);

  return tablero_nuevo;
}

function revisar_vecinos(tablero_revisado, posXActual, posYActual) {
  for (let l = i - 1; l <= i + 1; l++) {
    tablero_revisado[l] = 2;
    //.......
  }
}

revivir(tablero);
