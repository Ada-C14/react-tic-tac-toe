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

  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squareList, setSquares] = useState(generateSquares());
  const [playCount, setPlayCount] = useState(0)

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const callback = (updatedSquare) => {
   
    // const squares = [];

    // squareList.forEach((square) => {
    //   // if (square.id === updatedStudent.id) {
    //   //   students.push(updatedStudent);
    //   // } else {
    //   //   students.push(student);
    //   // }

    //   if (playCount % 2 === 0) {
    //     square.value = 'X'
    //   } else {
    //     square.value = 'O'
    //   }

    //   if (square.id === )


    // });

    // setSquares(squares);
    const squares = [...squareList]

  //   if (updatedSquare.id === 0) {
  //     if (playCount % 2 === 0 ) {
  //       squares[0][0].value = 'X'
  //     } else {
  //       squares[0][0].value = 'O'
  //     }
  //     setPlayCount(playCount + 1)
  //   } else if (updatedSquare.id === 1) {
  //     if (playCount % 2 === 0 ) {
  //       squares[0][1].value = 'X'
  //     } else {
  //       squares[0][1].value = 'O'
  //     }
  //     setPlayCount(playCount + 1)
  //   } else if (updatedSquare.id === 2) {
  //     if (playCount % 2 === 0 ) {
  //       squares[0][2].value = 'X'
  //     } else {
  //       squares[0][2].value = 'O'
  //     }
  //     setPlayCount(playCount + 1)
  //   } else if (updatedSquare.id === 3) {
  //     if (playCount % 2 === 0 ) {
  //       squares[1][0].value = 'X'
  //     } else {
  //       squares[1][0].value = 'O'
  //     }
  //     setPlayCount(playCount + 1)
  // }
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let currentSquare = squares[j][i]
      if (currentSquare.id === updatedSquare.id) {
        if (playCount % 2 === 0 ) {
          currentSquare.value = 'X'
        } else {
          currentSquare.value = 'O'
        }
        setPlayCount(playCount + 1)
      }
    }
  }
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squareList} onClickCallback={callback} />
      </main>
    </div>
  );
}

export default App;
