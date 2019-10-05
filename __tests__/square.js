import Square from '../src/js/square.js';

test('Should create a square with an ID of 3 when render', () => {
  const square = Square({index: 3, value: null});
  expect(square.render().id).toBe('square-3');
});

test('Should create a square with no text if value is null', () => {
  const square = Square({index: 0, value: null});
  expect(square.render().innerText).toBe('');
});

test('Should create a square with text of X if value is X', () => {
  const square = Square({index: 0, value: 'X'});
  expect(square.render().innerText).toBe('X');
});

test('Should create a square with value "" if value is undefined', () => {
  const square = Square({index: 0});
  expect(square.render().innerText).toBe('');
});

test('All squares should have a class of square', () => {
  const square = Square();
  expect(square.render().classList).toContain('square');
});
