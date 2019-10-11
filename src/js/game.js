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

  const renderAddPlayersForm = () => {
    const form = document.createElement('form');
    form.id = 'add-players-form';

    form.onsubmit = event => handleFormSubmit(event);
    // Create both players
    for (let i = 0; i < 2; i++) {
      const field = document.createElement('div');
      field.className = 'field';

      const player = `player-${i + 1}`;
      const label = document.createElement('label');
      label.htmlFor = player;
      label.innerText = `Player ${i + 1}:`;
      const input = document.createElement('input');
      input.name = player;
      input.id = player;
      field.appendChild(label);
      field.appendChild(input);
      form.appendChild(field);
    }

    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Add players';

    form.appendChild(submit);

    return form;
  };

  const handleFormSubmit = event => {
    // Prevent submitting the form
    event.preventDefault();

    const form = document.getElementById('add-players-form');
    const formData = new FormData(form);

    const players = [];

    // Read the data, make sure nothing is blank
    for (const data of formData) {
      const field = data[0];
      const value = data[1];

      if (value === undefined || value === '') {
        return null;
      }

      const player = Player({name: value});
      players.push(player);
    }

    players[0].marker = 'X';
    players[1].marker = 'O';

    // Check to make sure players array is valid
    if (players.length !== 2) {
      return null;
    }

    addPlayers({player1: players[0], player2: players[1]});
    render();
  };

  const handleFormData = form => {};

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

  const renderKey = () => {
    const key = document.createElement('ul');
    key.id = 'key';

    const liPlayerOne = document.createElement('li');
    liPlayerOne.innerText = `${playerOne().name} is ${playerOne().marker}`;

    const liPlayerTwo = document.createElement('li');
    liPlayerTwo.innerText = `${playerTwo().name} is ${playerTwo().marker}`;

    key.appendChild(liPlayerOne);
    key.appendChild(liPlayerTwo);

    return key;
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
      status.innerText = `It is ${player.name}'s turn.`;
    }

    return status;
  };

  const renderResetButton = () => {
    const button = document.createElement('button');
    button.id = 'reset';
    button.onclick = () => reset();

    button.innerText = 'Reset game';
    return button;
  };

  const render = () => {
    const root = document.getElementById('root');
    root.innerHTML = '';

    const docFrag = document.createDocumentFragment();

    if (Array.isArray(_players) && _players.length > 0) {
      docFrag.append(renderKey());
      docFrag.append(renderStatus());
      docFrag.append(Board.render());
      docFrag.append(renderResetButton());
    } else {
      docFrag.append(renderAddPlayersForm());
    }

    addMoveListeners(docFrag);

    root.appendChild(docFrag);
  };

  const reset = () => {
    winner = null;
    tie = null;
    _isPlayerOnesTurn = true;
    Board.reset();

    // _players = [];
    render();
  };

  return {render};
})();
