const checkForWinner = (squares) => {
  // Complete in Wave 3
  // You will need to:
  // 1. Go accross each row to see if 
  //    3 squares in the same row match
  //    i.e. same value
  // 2. Go down each column to see if
  //    3 squares in each column match
  // 3. Go across each diagonal to see if 
  //    all three squares have the same value.

  // function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }