const Square = require('./square.js');

const Board = (() => {
  // Private variables
  const _rows = 3;
  const _columns = 3;
  const _size = _columns * _rows;
  const _board = Array(_size).fill(null);

  // Public Functions
  const getBoard = () => _board;

  const setValue = ({index, value}) => {
    if (_board[index] !== null) {
      return;
    }
    _board[index] = value;
  };

  const render = () => {
    const docFrag = document.createDocumentFragment();

    let row;
    const divs = [];

    const board = _board.map((value, index) => {
      row = index % (_rows + 1);

      if (row === 0) {
        div = document.createElement('div');
        div.classList.add('board-row');
        divs.push(div);
      }

      divs[row].appendChild(renderSquare({index: index, value: value}));
    });

    r;
  };

  // Private functions

  return {
    getBoard,
    setValue,
    render,
  };
})();

module.exports = Board;
