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
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [winner, setWinner] = useState('TBD');

  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());

  const changePlayer = () => {
    if (currentPlayer === PLAYER_1) {
      setCurrentPlayer(PLAYER_2);
    } else {
      setCurrentPlayer(PLAYER_1);
    }
  }

  const updateSquare = (updatedSquare) => {
    const newSquares = [];
    let i = 0
    squares.forEach((row) => {
      newSquares.push([]);
      row.forEach((square) => {
        if (square.id === updatedSquare.id && square.value === '') {
          newSquares[i].push(updatedSquare);
          changePlayer();
        } else {
          newSquares[i].push(square);
        }
      });
      i+= 1
    });
    setSquares(newSquares);
    checkForWinner(newSquares);
  }
   


  //onclick button?
  // toggle present present ? x or o 
  //event handling key presses ?
  //what square are they clicking on whose turn is it 

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback


  const checkForWinner = (newSquares) => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    for (let row = 0; row < 3; row++) {
      const rowString = newSquares[row][0].value + newSquares[row][1].value + newSquares[row][2].value;
      checkWinnerString(rowString);
    }

    // 2. Go down each column to see if
    //    3 squares in each column match
    for (let column = 0; column < 3; column++) {
      const columnString = newSquares[0][column].value + newSquares[1][column].value + newSquares[2][column].value;
      checkWinnerString(columnString);
    }

    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.
    const diagonalTopLeftToBottomRight = newSquares[0][0].value + newSquares[1][1].value + newSquares[2][2].value
    checkWinnerString(diagonalTopLeftToBottomRight);

    const diagonalTopRightToBottomLeft = newSquares[0][2].value + newSquares[1][1].value + newSquares[2][0].value
    checkWinnerString(diagonalTopRightToBottomLeft);

  }

  const checkWinnerString = (string) => {
    if(string === 'XXX' || string === 'OOO') { setWinner(currentPlayer);
    }
  }

  const resetGame = () => {
    // Complete in Wave 4
    setSquares(generateSquares());
    setCurrentPlayer(PLAYER_1);
    setWinner('TBD');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {winner} </h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare} currentPlayer={currentPlayer} />
      </main>
    </div>
  );
}

export default App;
