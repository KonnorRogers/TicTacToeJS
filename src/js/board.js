import Square from './square.js';

// Module function pattern
export default (function Board() {
  // Private variables
  const _rows = 3;
  const _columns = 3;
  const _size = _columns * _rows;
  let _board;

  const reset = () => {
    _board = Array(_size).fill(null);
    return _board;
  };

  _board = reset();

  // Public Functions
  const getBoard = () => _board;

  const setValue = ({index, value}) => {
    if (_board[index] !== null) {
      return;
    }
    _board[index] = value;
  };

  const getValue = ({index}) => {
    return _board[index];
  };

  const render = () => {
    const boardDiv = document.createElement('div');
    boardDiv.id = 'board';

    let row = 0;
    const divs = [];

    const board = getBoard().map((value, index) => {
      // 0 % 3 = 0, 3 % 3 = 0, etc
      const currentRow = index % _rows;

      if (currentRow === 0) {
        divs.push(newRow());
        row += 1;
      }

      const square = Square({index, value}).render();

      divs[row - 1].appendChild(square);
    });

    // Append the rows to the board div
    divs.forEach(d => boardDiv.appendChild(d));
    return boardDiv;
  };

  // Private functions
  const newRow = () => {
    const div = document.createElement('div');
    div.classList.add('board-row');
    return div;
  };

  return {
    getBoard,
    getValue,
    setValue,
    render,
    reset,
  };
})();
