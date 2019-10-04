import Board from '../src/js/board.js';

test('Should create a board with a length of 9', () => {
  const board = Board.getBoard();
  expect(board.length).toBe(9);
});

test('Should create a board which is filled with null', () => {
  const board = Board.getBoard();
  const nullBoard = Array(9).fill(null);

  expect(nullBoard).toEqual(expect.arrayContaining(board));
});

test('Should change the value of a square in the board', () => {
  Board.setValue({index: 3, value: 'X'});

  expect(Board.getBoard()[3]).toBe('X');
});

test('Should return a board with 3 rows and an id of board', () => {
  const board = Board.render();
  console.log(board);
  expect(board.id).toBe('board');
});
