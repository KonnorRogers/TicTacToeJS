import Game from './js/game.js';

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

Game.render();

import {calculateWinner} from './js/utils.js';
