const Player = require('../src/js/player.js');

test('creates a blank player', () => {
  const blank = Player();
  expect(blank.name).toBe(undefined);
});

test("Creates a player with name 'test dummy'", () => {
  const testDummy = Player({name: 'test dummy'});
  expect(testDummy.name).toBe('test dummy');
  expect(testDummy.marker).toBe(undefined);
});
