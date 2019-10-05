import Player from './player.js';
import Board from './board.js';
import {addPlayers, calculateWinner} from './utils.js';

export default (function Game() {
  // Private variables
  const player1 = {name: 'X', marker: 'X'};
  const player2 = {name: 'O', marker: 'O'};
  const _players = addPlayers({player1, player2});
  let _isPlayerOnesTurn = true;
  let winner;
  let tie;
  // End private variables

  const renderStatus = () => {
    const status = document.createElement('p');
    status.id = 'status';

    let player;

    if (isPlayerOnesTurn() === true) {
      player = playerOne();
    } else {
      player = playerTwo();
    }

    if (winner) {
      status.innerText = `${winner.name} has won!`;
    } else if (tie) {
      status.innerText = 'It is a tie!';
    } else {
      status.innerText = `It is ${player.marker}'s turn.`;
    }

    return status;
  };
  const playerOne = () => {
    return _players[0];
  };
  const playerTwo = () => {
    return _players[1];
  };
  const isPlayerOnesTurn = () => {
    return _isPlayerOnesTurn;
  };

  const checkWin = player => {
    if (calculateWinner(Board.getBoard())) {
      winner = player;
      return true;
    }

    return false;
  };

  const checkTie = () => {
    // if Board.getBoard.all()
    tie = Board.getBoard().every(value => {
      return value !== null;
    });
  };

  // Adds click listeners and keydown listener
  const takeTurn = () => {
    let player;

    if (isPlayerOnesTurn() === true) {
      _isPlayerOnesTurn = false;
      player = playerOne();
    } else {
      _isPlayerOnesTurn = true;
      player = playerTwo();
    }

    return player;
  };

  const handleClick = i => {
    // Return if its not a valid move
    if (!validMove(i)) {
      return;
    }
    const player = takeTurn();

    Board.setValue({index: i, value: player.marker});

    checkWin(player);
    checkTie();
    render();
  };

  const validMove = i => {
    if (Board.getValue({index: i}) !== null) {
      return false;
    }

    if (winner || tie) {
      return false;
    }

    return true;
  };

  // Adds click listeners and keydown listener
  const addMoveListeners = element => {
    element.querySelectorAll('.square').forEach((square, index) => {
      square.onclick = () => handleClick(index);
      square.onkeydown = e => {
        if (e.keycode === 13) {
          // Enter / return key
          handleClick(index);
        }
      };
    });
  };

  const render = () => {
    const root = document.getElementById('root');
    root.innerHTML = '';

    const docFrag = document.createDocumentFragment();

    docFrag.append(renderStatus());
    docFrag.append(Board.render());

    addMoveListeners(docFrag);

    root.appendChild(docFrag);
  };

  return {render};
})();
