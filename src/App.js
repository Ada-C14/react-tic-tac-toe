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
  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1)

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  // const updateSquares = (id) => {
  //   const updated = [...squares]
  //   let r = 0;
  //   let c = 0;
  //   do {
  //     do {
  //       if (squares[r][c].id === id && squares[r][c].value === '') {
  //         // set square to value of currentPlayer
  //         squares[r][c].value = currentPlayer
  //         if (currentPlayer === PLAYER_1) {
  //           setCurrentPlayer(PLAYER_2)
  //         } else {
  //           setCurrentPlayer(PLAYER_1)
  //         }
  //       } else if (squares[r][c].id === id && squares[r][c].value !== '') {
  //         return;
  //       }
  //       c += 1
  //     } while (c < 3)
  //     r += 1
  //     c = 0
  //   } while (r < 3)
  //   setSquares(updated)
  // } 
 
  const changeSquareUsingSetSquares = (id) => {
    let foundSquare = squares.flat().find(square => square.id === id);
    if (foundSquare.value === '') {
      foundSquare.value = currentPlayer;
    } else {
      return;
    }
    setSquares(squares);

    let nextPlayer = currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1;
    setCurrentPlayer(nextPlayer);
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
    setSquares(generateSquares);
    setCurrentPlayer(PLAYER_1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        {/* <h2>The winner is ... -- Fill in for wave 3 </h2> */}
        <h2>{currentPlayer}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={changeSquareUsingSetSquares}/>
      </main>
    </div>
  );
}

export default App;
