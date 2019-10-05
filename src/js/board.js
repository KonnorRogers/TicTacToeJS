import Square from './square.js';

// Module function pattern
export default (function Board() {
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

  const getValue = ({index}) => {
    return _board[index];
  };

  const render = () => {
    const boardDiv = document.createElement('div');
    boardDiv.id = 'board';

    // Make it -1 to account for the fact rows start at 0
    let row = -1;
    const divs = [];

    const board = getBoard().map((value, index) => {
      // 0 % 3 = 0, 3 % 3 = 0, etc
      const newRow = index % _rows;

      if (newRow === 0) {
        row += 1;
        const div = document.createElement('div');
        div.classList.add('board-row');
        divs.push(div);
      }

      const square = Square({index, value}).render();

      divs[row].appendChild(square);
    });

    // Append the rows to the board div
    divs.forEach(d => boardDiv.appendChild(d));
    return boardDiv;
  };

  return {
    getBoard,
    getValue,
    setValue,
    render,
  };
})();
