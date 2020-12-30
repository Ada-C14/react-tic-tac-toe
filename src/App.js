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
  // Track which player's turn it is
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

  const switchPlayer = () => {
    if (currentPlayer === PLAYER_1) {
      setCurrentPlayer(PLAYER_2);
    } else {
      setCurrentPlayer(PLAYER_1);
    }
  }

  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const onClickCallback = (updatedSquare) => {
    // console.log(updatedSquare);
    // Check if square has value

    // If it has value, return without doing anything

    // Set value of square according to current player

    // Toggle current player
    //Creating 2D array
    let newSquaresArray = new Array(3);
      for (let i = 0; i < newSquaresArray.length; i++) {
        newSquaresArray[i] = new Array(3);
    }

    for (let row in squares) {
      for (let column in squares[row]) {
        if (squares[row][column].id === updatedSquare.id) {
          newSquaresArray[row].push(updatedSquare)
          switchPlayer();
        }
        else {
          newSquaresArray[row].push(squares[row][column])
        }
      }
    };
    setSquares(newSquaresArray);
  }

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

  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  console.log(squares);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board 
        squares={squares} 
        onClickCallback={onClickCallback} 
        currentPlayer={currentPlayer}/>
      </main>
    </div>
  );
}

export default App;
