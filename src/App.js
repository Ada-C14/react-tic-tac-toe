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

  const updateSquare = (clickedOnSquare) => {
    // return exits function
    if (winner) {
      return;
    }

    const newSquares = [];

    squares.forEach(row => {
      const newRow = [];
      row.forEach(square => {
        if (square.id === clickedOnSquare.id && square.value === '') {
          newRow.push({
            value: player,
            id: clickedOnSquare.id
          });
          setPlayer((player === PLAYER_1) ? PLAYER_2 : PLAYER_1);
        } else {
          newRow.push(square);
        }
      });
      newSquares.push(newRow);
    });

    // won't render until this function call finishes
    setSquares(newSquares);
    checkForWinner(newSquares);
  }


  // shadowing the closure variable
  const checkForWinner = (squares) => {
    let newWinner = null;
    for (let i = 0; i < 3; i++) {
      // check each row
      // empty string in JS is falsy
      if (squares[i][0].value && 
        squares[i][0].value === squares[i][1].value && 
        squares[i][0].value === squares[i][2].value) {
          
        newWinner = squares[i][0].value;
        break;
      // check each column
      } else if (squares[0][i].value && 
        squares[0][i].value === squares[1][i].value && 
        squares[0][i].value === squares[2][i].value) {

        newWinner = squares[0][i].value;
        break;
      }
    }

    // check diagonals
    if (squares[1][1].value && 
      ((squares[0][0].value === squares[1][1].value && 
        squares[0][0].value === squares[2][2].value) || 
      (squares[0][2].value === squares[1][1].value && 
        squares[0][2].value === squares[2][0].value))) {
      
      newWinner = squares[1][1].value;
    }

    setWinner(newWinner);
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
        <h2>{winner ? `Winner is ${winner}` : `Current player ${player}`}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare} />
      </main>
    </div>
  );
}

export default App;
