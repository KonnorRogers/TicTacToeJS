import Game from './js/game.js';

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

const player1 = {name: 'X', marker: 'X'};
const player2 = {name: 'O', marker: 'O'};
Game.addPlayers({player1, player2});
Game.render();
