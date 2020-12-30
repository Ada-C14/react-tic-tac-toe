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
  
  // const players = s
  const updateSquare = (updatedSquareId) => {
    // console.log(updatedSquareId)
    // console.log('hiiiiii!!!')
    const newSquares = [];
    
    //for of loop
    //need to make new set of tic tac toe data
    //can pass to set squares
    //want deep copies of data (2-d arration, copy square data)
    //spread operator can do copy of simple object
    //can spread object into new object
    //newSquare = {...square}
    //once you have copy, can safely make changes to copy (x's o's)
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
    setSquares(newSquares)
  }
  //   squares.forEach((square) => {
  //     if (square.id === updatedSquare.id) {
  //       squares.push(updatedSquare);
  //     } else {
  //       squares.push(square);
  //     }
  //   });
  //   setSquares(squares)
  // }
  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback


  const checkForWinner = (squares) => {
  
    //helper function to look up tiles by id
    //get tile with id 0, etc. 
    //helper = (squares, id)
    //modify winning moves to reflect 2 dimensional coordinates

    //taken from: https://reactjs.org/tutorial/tutorial.html#declaring-a-winner
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

    
    for (const row of squares) { 
      for (const square of row) {
        if (square.value === updatedSquareId && square.value === '') {
          const updatedSquare = {
            id: updatedSquareId,
            value: player
          }
    
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
//   console.log('****')
// console.log(squares)
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        
        <Board onClickCallback={updateSquare} squares={squares} />
        
      </main>
    </div>
  );
}

export default App;
