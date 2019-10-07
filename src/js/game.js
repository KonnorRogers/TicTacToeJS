import Player from './player.js';
import Board from './board.js';
import {calculateWinner} from './utils.js';

export default (function Game() {
  // Private variables
  let _players = [];
  let _isPlayerOnesTurn = true;
  let winner;
  let tie;
  // End private variables

  const addPlayers = ({player1, player2}) => {
    _players[0] = player1;
    _players[1] = player2;

    return _players;
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

  const handleMoveClick = i => {
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
      square.onclick = () => handleMoveClick(index);
      square.onkeydown = e => {
        if (e.keycode === 13) {
          // Enter / return key
          handleMoveClick(index);
        }
      };
    });
  };

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

  const renderResetButton = () => {
    const button = document.createElement('button');
    button.innerText = 'Reset game';
    return button;
  };
  const render = () => {
    const root = document.getElementById('root');
    root.innerHTML = '';

    const docFrag = document.createDocumentFragment();

    docFrag.append(renderStatus());
    docFrag.append(Board.render());
    docFrag.append(renderResetButton());

    addMoveListeners(docFrag);

    root.appendChild(docFrag);
  };

  const reset = () => {
    winner = null;
    tie = null;
    _isPlayerOnesTurn = true;
    players = [];
  };

  return {render, reset, addPlayers};
})();
