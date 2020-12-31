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

  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1)
  const [winner, setWinner] = useState(null)

  // wave 3: check for winner
  const checkForWinner = () => {
    // row and col check
    for (let i = 0; i < 3; i++) {
      if (squares[i][0].value === squares[i][1].value && squares[i][1].value === squares[i][2].value && squares[i][0].value !== '') {
        return squares[i][0].value;
      } else if (squares[0][i].value === squares[1][i].value && squares[1][i].value === squares[2][i].value && squares[0][i].value !== '') {
        return squares[0][i].value;
      }
    }

    // diagonal check
    if (squares[0][0].value === squares[1][1].value && squares[1][1].value === squares[2][2].value && squares[0][0].value !== '') {
      return squares[0][0].value;
    } else if (squares[0][2].value === squares[1][1].value && squares[1][1].value === squares[2][0].value && squares[0][0].value !== '') {
      return squares[0][2].value;
    }

    return null;
  }

  // wave 2: update square
  const changeSquareUsingSetSquares = (id) => {
    if (winner === PLAYER_1 || winner === PLAYER_2) return;

    let foundSquare = squares.flat().find(square => square.id === id);
    if (foundSquare.value !== '') return;

    foundSquare.value = currentPlayer;

    let nextPlayer = currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1;
    setCurrentPlayer(nextPlayer);
    setSquares(squares);
    setWinner(checkForWinner());
  }

  // wave 4: reset game
  const resetGame = () => {
    setSquares(generateSquares);
    setCurrentPlayer(PLAYER_1);
    setWinner(null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner !== PLAYER_1 && winner !== PLAYER_2 ? `Player ${currentPlayer}` : `Winner is ${winner}`}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={changeSquareUsingSetSquares} />
      </main>
    </div>
  );
}

export default App;
