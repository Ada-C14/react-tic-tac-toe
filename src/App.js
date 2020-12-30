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

  // Wave 2
  const updateSquare = (updatedSquare) => {
    const newSquares = [...squares]

    for(let row of newSquares) {
      for(let square of row) {
        if (square.id === updatedSquare.id && square.value === '' && winner === null) {
            square.value = player;          
        }
      }
    };
  
    setPlayer(player === PLAYER_1 ? PLAYER_2 : PLAYER_1)

    setSquares(newSquares);

    setWinner(checkForWinner());
    
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
        console.log('Winner is x');
        return PLAYER_1
        
      } else if (rowOfThree.every(obj => obj.value === 'o')) {
        console.log('Winner is o');
        return PLAYER_2
      } else if (allSquares.every(obj => obj.value !== '')) {
        console.log('Tie');
        return null
      }
    })

  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {winner} </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare} />
      </main>
    </div>
  );
}

export default App;
