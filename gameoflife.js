/*let tablero = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];*/
//let tablero_nuevo = [];
//console.log(tablero);

const numfilas = 3;
const numColumnas = 3;
const tablero = Array(numfilas)
  .fill(0)
  .map(() => Array(numColumnas).fill(0));
const tablero_anterior = tablero;

function revivir(tablero_anterior) {
  //let tablero_nuevo = [[], [], []];
  //console.log(tablero_anterior.length);
  let tablero_nuevo = Array(numfilas)
    .fill(0)
    .map(() => Array(numColumnas).fill(0));

  for (let i = 0; i < tablero_anterior.length; i++) {
    for (let j = 0; j < tablero_anterior[i].length; j++) {
      tablero_nuevo[i][j] = 1;
      if (tablero_anterior[i][j] === 1) {
      }
    }
  }
  console.log(tablero_nuevo);

  return tablero_nuevo;
}

revivir(tablero);
