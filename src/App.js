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
  
  const updateSquare = (updatedSquareId) => {
  
    const newSquares = [];
    if (winner=== null) {
    for (const row of squares) { 
      const newRow = [];
      newSquares.push(newRow);
      for (const square of row) {
        if (square.id === updatedSquareId && square.value === '') {
          const updatedSquare = {
            id: updatedSquareId,
            value: player
          }
          newRow.push(updatedSquare);
          const newPlayer = PLAYER_1 === player ? PLAYER_2 : PLAYER_1;
          setPlayer(newPlayer);

        } else {
          newRow.push(square);
      
        }
      }
    }
  } else {
    return;
  }
  checkForWinner(newSquares)
  setSquares(newSquares)
  }
 
  const checkForWinner = (squares) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
 
    const oneDimensionalArray = [...squares[0], ...squares[1], ...squares[2]]
    
    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (oneDimensionalArray[a].value && 
        oneDimensionalArray[a].value === oneDimensionalArray[b].value && 
        oneDimensionalArray[a].value === oneDimensionalArray[c].value) {
        
         setWinner(oneDimensionalArray[a].value);
         return;
      }
    }
  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        { winner && // if winner is truthy, render the following h2 tag
        <h2>Winner is {winner} </h2> }
        <button>Reset Game</button>
      </header>
      <main>
        
        <Board onClickCallback={updateSquare} squares={squares} />
        
      </main>
    </div>
  );
}

export default App;
