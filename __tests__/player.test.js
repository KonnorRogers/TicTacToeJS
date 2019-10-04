import Player from '../src/js/player.js';

test('Should create a blank player', () => {
  const blank = Player();
  expect(blank.name).toBeUndefined();
  expect(blank.marker).toBeUndefined();
});

test('Should create a player with name', () => {
  const testDummy = Player({name: 'test dummy'});
  expect(testDummy.name).toBe('test dummy');
  expect(testDummy.marker).toBeUndefined();
});

test('Should update the players name', () => {
  const testDummy = Player({name: 'test dummy'});
  testDummy.name = 'not test dummy';

  expect(testDummy.name).toBe('not test dummy');
});

test('Should update the players marker', () => {
  const xMarker = Player({marker: 'x'});
  expect(xMarker.marker).toBe('x');
});
