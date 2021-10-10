const { SkylabArray } = require("./index");


describe("Given a gameBoard class", () => {
  describe("When creating a new gameBoard object with parameter 3", () => {
    test("Then it should return a 3*3 array with all values equal to 0", () => {
      const expected = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      const newGame = new GameBoard(3);
      const result = newGame.board;

      expect(result).toEqual(expected);
    });

