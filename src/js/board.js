import Square from './square.js';

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
    const boardDiv = document.createElement('div');
    boardDiv.classList.add('board');
    docFrag.appendChild(boardDiv);

    // Make it -1 to account for the fact rows start at 0
    let row = -1;
    const divs = [];

    const board = _board.map((value, index) => {
      // 0 % 3 = 0, 3 % 3 = 0, etc
      const newRow = index % _rows;

      if (newRow === 0) {
        row += 1;
        const div = document.createElement('div');
        div.classList.add('board-row');
        divs.push(div);
      }

      // divs[row].appendChild(Square({index: index, value: value}).render());
      divs[row].appendChild(Square({index}).render());
    });

    divs.forEach(d => docFrag.appendChild(d));
    return docFrag;
  };

  // Private functions

  return {
    getBoard,
    setValue,
    render,
  };
})();

export default Board;
