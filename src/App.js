import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

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
  const [current, changeCurrent] = useState(true);

  const onClickCallback = (event) => {
    let newSquares = [];
    for (let row = 0; row < squares.length; row += 1) {
      for (let column = 0; column < squares.length; column += 1) {
        squares[row][column]['value'] = (switchPlayer() ? PLAYER_2 : PLAYER_1);
      } 
    }
    newSquares.push(squares[row]);
  }
setSquares(newSquares);
} // => change/ remove bracket
//toggle players
function switchPlayer() {
  changeCurrent(!current);
  return current;
};
  const checkForWinner = () => {
  
  

  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} />
      </main>
    </div>
  );
}

export default App;
