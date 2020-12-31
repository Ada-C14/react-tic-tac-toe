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

  // Initialize board (2D array)
  const [squares, setSquares] = useState(generateSquares());

  // This gets called when a square is clicked on
  const onClickCallback = (updatedSquare, wasUpdated) => {
    // let newSquaresArray = new Array(3);
    //   for (let i = 0; i < newSquaresArray.length; i++) {
    //     newSquaresArray[i] = new Array(3);
    // }
    let newSquaresArray = [[], [], []];

    for (let row in squares) {
      for (let column in squares[row]) {
        if (squares[row][column].id === updatedSquare.id) {
          newSquaresArray[row].push(updatedSquare)
        }
        else {
          newSquaresArray[row].push(squares[row][column])
        }
      }
    };
    if (wasUpdated) {
      switchPlayer();
    }
    setSquares(newSquaresArray);
  }

  const checkForWinner = () => {
    for (let row = 0; row < 3; row++) {
      // Check that it isn't a row of blank squares
      if (squares[row][0].value) {
        // Check that all squares are the same
        if (squares[row][0].value === squares[row][1].value && squares[row][1].value === squares[row][2].value) {
          return squares[row][0].value;
        }
      }
    }
    // 2. Go down each column to see if
    //    3 squares in each column match
    for (let col = 0; col < 3; col++) {
      if (squares[0][col].value) {
        if (squares[0][col].value === squares[1][col].value && squares[1][col].value === squares[2][col].value) {
          return squares[0][col].value;
        }
      }
    }
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.
    if (squares[0][0].value && squares[0][0].value === squares[1][1].value && squares[1][1].value === squares[2][2].value) {
      return squares[0][0].value;
    }

    if (squares[0][2].value && squares[0][2].value === squares[1][1].value && squares[1][1].value === squares[2][0].value) {
      return squares[0][2].value;
    }

    // Else return false
    return false;
  }

  // This function is called after checkForWinner()
  // It assumes there are no 3 in a row
  const checkForTie = () => {
    let isTie = true;
    squares.forEach((row) => {
      row.forEach((square) => {
        if (square.value === '') {
          isTie = false;
        }
      })

  })

  return isTie;
}

  const resetGame = () => {
    // Complete in Wave 4
  }

  // Check for wins/ties
  const winner = checkForWinner();
  let resultString;
  if (winner) {
    resultString = `${winner} has won!`;
  } else if (checkForTie() === true) {
    resultString = 'The game is a tie!';
  } else {
    resultString = '';
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{resultString}</h2>
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
