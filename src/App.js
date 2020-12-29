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
};

const App = () => {

  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  const [player, setPlayer] = useState(true);
  const [winner, setWinner] = useState();

  const onClickCallback = (updatedSquare) => {
    let updatedBoard = [];
    for (let row = 0; row < squares.length; row++) {
      for (let col = 0; col < squares.length; col++) {
        if (updatedSquare === squares[row][col].id) {
          squares[row][col]['value'] = (swapPlayer() ? PLAYER_1 : PLAYER_2);
        }
      }
      updatedBoard.push(squares[row]);
    }
    setSquares(updatedBoard);
    checkForWinner();
  };

  function swapPlayer() {
    setPlayer(!player);
    return player;
  };

  const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.

  };

  const resetGame = () => {
    // Complete in Wave 4
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {winner}</h2>
        <button onClick={resetGame}> Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} winner={winner} />
      </main>
    </div>
  );
}

export default App;
