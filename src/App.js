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
  const [winner, setWinner] = useState(null)
  const [filledSquares, setFilledSquares] = useState(0);
  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback


  const checkForWinner = () => {
    let i = 0;
    while (i < 3) {
      if (squares[i][0].value === squares[i][1].value &&  squares[i][1].value === squares[i][2].value && squares[i][0] !== '') {
        return squares[i][0].value;
      } else if (squares[0][i].value === squares[1][i].value &&  squares[1][i].value === squares[2][i].value && squares[0][i] !== '') {
        return squares[0][i].value;
      }
      i += 1;
    } 
    

    if (squares[0][0].value === squares[1][1].value &&  squares[1][1].value === squares[2][2].value && squares[0][0] !== '') {
      return squares[0][0].value;
    } else if (squares[0][2].value === squares[1][1].value &&  squares[1][1].value === squares[2][0].value && squares[0][0] !== '') {
      return squares[0][2].value;
    }
    return null;
  }
  
  // const updateSquares = (id) => {
  //   if (winner !== null) return;
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
  //   setFilledSquares(filledSquares + 1);
  //   setSquares(updated)
  //   setWinner(checkForWinner());
  // } 
  const changeSquareUsingSetSquares = (id) => {
    // if (winner !== null) return;
    let foundSquare = squares.flat().find(square => square.id === id);
    if (foundSquare.value !== '') return;
  
    foundSquare.value = currentPlayer;

    let nextPlayer = currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1;
    setCurrentPlayer(nextPlayer);
    setSquares(squares);
    setFilledSquares(filledSquares + 1);
    setWinner(checkForWinner());
  }

  const resetGame = () => {
    setSquares(generateSquares);
    setCurrentPlayer(PLAYER_1);
    setWinner(null);
    setFilledSquares(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner === null ? `Player ${ currentPlayer }` : `Winner is ${ winner }`}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={changeSquareUsingSetSquares}/>
      </main>
    </div>
  );
}

export default App;
