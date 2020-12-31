import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';
let count = 0
let winner = ''

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

  // Wave 2
  const updateSquare = (updatedSquare) => {
    const newSquares = [...squares]

    for(let row of newSquares) {
      for(let square of row) {
        if (square.id === updatedSquare.id && square.value === '') {
          count++
          square.value = player;          
        }
      }
    };
  
    setPlayer(player === PLAYER_1 ? PLAYER_2 : PLAYER_1)

    setSquares(newSquares);

    if (count > 4) {
    checkForWinner();
    }
    
  }

  const checkForWinner = () => {
    // Complete in Wave 3

    const winPossibilities = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    let allSquares = squares.flat()

    winPossibilities.forEach((possibility) => {
      let rowOfThree = []
      possibility.forEach((i) => {
        rowOfThree.push(allSquares[i])
      })
      if (rowOfThree.every(obj => obj.value === 'x')) {
        winner = PLAYER_1
      } else if (rowOfThree.every(obj => obj.value === 'o')) {
        console.log('Winner is o');
        winner = PLAYER_2
      } else if (allSquares.every(obj => obj.value !== '')) {
        winner = 'tie'
      }
    })
      return winner;
  }

  const resetGame = () => {
    // Complete in Wave 4
    setSquares(generateSquares());
    setPlayer(PLAYER_1);
    winner = '';

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {winner}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare} />
      </main>
    </div>
  );
}

export default App;
