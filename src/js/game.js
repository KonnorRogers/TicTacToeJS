import Player from './player.js';
import Board from './board.js';

export default (function Game() {
  const addPlayers = () => {
    const players = [];
    const player1 = Player({name: 'X', marker: 'X'});
    const player2 = Player({name: 'O', marker: 'O'});
    players[0] = player1;
    players[1] = player2;

    return players;
  };

  const _players = addPlayers();
  let _isPlayerOnesTurn = true;

  const renderStatus = () => {
    const status = document.createElement('p');
    status.id = 'status';

    let player;

    if (isPlayerOnesTurn() === true) {
      player = playerOne();
    } else {
      player = playerTwo();
    }

    status.innerText = `It is ${player.marker}'s turn.`;
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

  return {
    handleClick() {
      let player;
      if (isPlayerOnesTurn() === true) {
        _isPlayerOnesTurn = false;
        player = playerOne();
      } else {
        _isPlayerOnesTurn = true;
        player = playerTwo();
      }

      Board.setValue({index: index, value: player.marker});
      return render();
    },
    render() {
      const docFrag = document.createDocumentFragment();

      docFrag.append(renderStatus());
      docFrag.append(Board.render());
      return docFrag;
    },
  };
})();
