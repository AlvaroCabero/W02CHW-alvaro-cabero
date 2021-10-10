//const { tablero } = require("./index");

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


describe("Given a revivir function and a revisar_vecinos", () => {
  describe("When it receives an array [[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0]", () => {
    test("Then it should return a 5*5 array with all values equal to 0", () => {
      const tablero = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ]
      
      const expected = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ];


      const result = revivir(tablero);

      expect(result).toEqual(expected);
    });

    describe("When it receives an array [[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0]", () => {
    test("Then it should return an 5*5 array [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]", () => {
      const tablero = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ]
      
      const expected = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      const result = revivir(tablero);

      expect(result).toEqual(expected);
    });


