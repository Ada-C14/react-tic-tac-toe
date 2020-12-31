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


  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const updateSquares = (updatedSquare) => {
    
  const newSquares = [];

    for (const row of squares) {
      const newRow = [];
      newSquares.push(newRow);
      for (const square of row) {
        if (square.id === updatedSquare.id && square.value === '') {
          newRow.push({id: square.id, value: player});
        } else {
          newRow.push(square);
        }
      }
    }
    
    setSquares(newSquares);

    checkForWinner(newSquares);

    if (player === PLAYER_1) {
      setPlayer(PLAYER_2);
    } else {
      setPlayer(PLAYER_1);
    }
  }


  const checkForWinner = (squares) => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    for (const row of squares) {
      if (row[0].value===row[1].value && row[2].value === row[0].value && row[0].value !== ''){
      
        setWinner(row[0].value);
      }
    }
    // 2. Go down each column to see if
    //    3 squares in each column match
    if (squares[0][0].value===squares[1][0].value && squares[2][0].value === squares[0][0].value && squares[0][0].value !== ''){
      
      setWinner(squares[0][0].value);
    
    }
    if (squares[0][1].value===squares[1][1].value && squares[2][1].value === squares[0][1].value && squares[0][1].value !== '' ){
      
      setWinner(squares[0][1].value);
    }
    if (squares[0][2].value===squares[1][2].value && squares[2][2].value === squares[0][2].value && squares[0][2].value !== ''){
      
      setWinner(squares[0][2].value);
    }

    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.

    if (squares[0][0].value===squares[1][1].value && squares[2][2].value === squares[0][0].value && squares[0][0].value !== ''){
      
      setWinner(squares[0][0].value);
    }
    if (squares[0][2].value===squares[1][1].value && squares[2][0].value === squares[0][2].value && squares[0][2].value !== ''){
      
      setWinner(squares[0][2].value);
    }
  } 

  // const resetGame = () => {
    // Complete in Wave 4
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {winner}</h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board 
        squares={squares}
        onClickCallback={updateSquares}
        />
      </main>
    </div>
  );
}

export default App;
