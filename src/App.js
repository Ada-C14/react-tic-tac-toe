import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
}

const App = () => {

  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  const [player, setPlayer] = useState(PLAYER_1); 
  const [winner, setWinner] = useState(null);

  const updateSquare = (squareId) => {
    if (winner !== null) return;
    const squaresNew = generateSquares();
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        const square = squares[row][col];
        if (square.id === squareId && square.value === ''){
          squaresNew[row][col] = {id: squareId, value: player}
        } else {
          squaresNew[row][col] = {...square};
        }
      }
    }
    setPlayer(player === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    setSquares(squaresNew);
    setWinner(checkForWinner(squaresNew));
    console.log(`winner is ${winner}`)
  }



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
    for (let row = 0; row < 3; row += 1){
      const rowVals = []
      const colVals = []
      for (let col = 0; col < 3; col += 1){
        rowVals.push(squares[row][col].value)
        console.log(`rowVals is ${rowVals}`)
        colVals.push(squares[col][row].value)
        console.log(`colVals is ${colVals}`)
        if (winnerHelper(rowVals)) {
          console.log(`winner from helper: ${winnerHelper(rowVals)}`)
          return winnerHelper(rowVals)
        }
        if (winnerHelper(colVals)) {
          return winnerHelper(colVals)
        }
        // if length of rowVals is 3 and there are no empty values and all values are the same, there's a winner
        // if squares[row][col] nonempty
        // rowVals.push(squares[row][col])
        // squares[0][0], squares[0][1], squares[0][2]
        // squares[col][row]
        // squares[0][0], squares[1][0], squares[2][0]
        // squares[0][1], squares[1][1], squares[2][1]
        // winner if length of unique vlaues of val is 1
        // if unique vals == x, winner = player 1 else if unique vals == o winner = player 2
        
      }
    }
    return null
  }

  const winnerHelper = (array) => {
    if (array.length === 3) {
      // if no empty values
      if (array.every(v => v !== '')) {
        // if all values are same
        if (array.every(v => v === array[0])){
          console.log(array)
          // return the winner
          return array[0]
        }
      }
    }
    return null
  }



  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner === null ? `Current Player ${ player }` : `Winner is ${ winner }`}</h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare} />
      </main>
    </div>
  );
}

export default App;
