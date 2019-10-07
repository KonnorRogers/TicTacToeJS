export const calculateWinner = board => {
  const horizontalWin = [
    //
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const verticalWin = [
    //
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  const diagonalWin = [
    //
    [0, 4, 8],
    [2, 4, 6],
  ];

  const allWins = horizontalWin.concat(verticalWin).concat(diagonalWin);

  let win = false;

  allWins.forEach(ary => {
    const [a, b, c] = ary;
    // This equates to if board[a] === 'X' && board[b] === 'X' && board[c] === 'X'
    // Return 'X';
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return (win = true);
    }
  });

  return win;
};
