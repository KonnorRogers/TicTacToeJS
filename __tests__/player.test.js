// import Player from '../src/js/player.js';
const Player = require('../src/js/players.js');

test('Should create a blank player', () => {
  const blank = Player();
  expect(blank.name).toBeUndefined();
  expect(blank.marker).toBeUndefined();
});

test('Shoudl create a player with name', () => {
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
