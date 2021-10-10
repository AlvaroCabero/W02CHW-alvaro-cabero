const { tablero } = require("./index");


describe("Given a revivir function", () => {
  describe("When creating a new gameBoard object with parameter 6", () => {
    test("Then it should return a 6*6 array with all values equal to 0", () => {
      const expected = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      const newGame = new GameBoard(3);
      const result = newGame.board;

      expect(result).toEqual(expected);
    });

    describe("When it receives an array [[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0]", () => {
    test("Then it should return an 5*5 array [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]", () => {
      const a1 = [
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

      const newGame = new GameBoard(3);
      const result = newGame.board;

      expect(result).toEqual(expected);
    });


