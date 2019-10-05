// import Game from './js/game.js';
import Board from './js/board.js';

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

root.appendChild(Board.render());
