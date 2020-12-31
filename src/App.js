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
  }



  const checkForWinner = (squares) => {
    for (let row = 0; row < 3; row += 1){
      const rowVals = [];
      const colVals = [];
      for (let col = 0; col < 3; col += 1){
        rowVals.push(squares[row][col].value);
        colVals.push(squares[col][row].value);
        if (winnerHelper(rowVals)) {
          return winnerHelper(rowVals);
        }
        if (winnerHelper(colVals)) {
          return winnerHelper(colVals);
        }
      }
    }

    if (squares[0][0].value === squares[1][1].value && squares[1][1].value === squares[2][2].value && squares[0][0].value !== 
    '') {
      return squares[0][0].value;
    }

    if (squares[0][2].value === squares[1][1].value && squares[1][1].value === squares[2][0].value && squares[0][2].value !== 
    '') {
      return squares[0][2].value;
    }
    return null
  }

  const winnerHelper = (array) => {
    if (array.length === 3) {
      if (array.every(v => v !== '')) {
        if (array.every(v => v === array[0])){
          return array[0];
        }
      }
    }
    return null
  }



  const resetGame = () => {
    setSquares(generateSquares());
    setPlayer(PLAYER_1);
    setWinner(null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner === null ? `Current Player ${ player }` : `Winner is ${ winner }`}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare} />
      </main>
    </div>
  );
}

export default App;
