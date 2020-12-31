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
  const [winner, setWinner] = useState('')


  const callback = (updatedSquare) => {
   
    const squares = [...squareList]

    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        let currentSquare = squares[j][i]
        if (currentSquare.id === updatedSquare.id) {
          if (currentSquare.value !== '') { break; }
          if (winner !== '') {break;}
          if (playCount % 2 === 0) {
            currentSquare.value = 'x'
          } else {
            currentSquare.value = 'o'
          }
          setPlayCount(playCount + 1)
          checkForWinner()
        }
      }
    }
    setSquares(squares)
}
  


  const checkForWinner = () => {
  
    const winningConditions = [
      [squareList[0][0].value, squareList[0][1].value, squareList[0][2].value],
      [squareList[1][0].value, squareList[1][1].value, squareList[1][2].value],
      [squareList[2][0].value, squareList[2][1].value, squareList[2][2].value],
      [squareList[0][0].value, squareList[1][0].value, squareList[2][0].value],
      [squareList[0][1].value, squareList[1][1].value, squareList[2][1].value],
      [squareList[0][2].value, squareList[1][2].value, squareList[2][2].value],
      [squareList[0][0].value, squareList[1][1].value, squareList[2][2].value],
      [squareList[0][2].value, squareList[1][1].value, squareList[2][0].value]
    ]

    for (let i = 0; i < winningConditions.length; i++) {
      const [first, second, third] = winningConditions[i]
      if (first === second && first === third && first !== ''){
        setWinner(winningConditions[i][0])
      }
    }


  }

  const resetGame = () => {
    setSquares(generateSquares())
    setWinner('')
    setPlayCount(0)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{(playCount === 9 && winner === '') ? 'It\'s a TIE!' : `Winner is ${winner}`} </h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squareList} onClickCallback={callback} />
      </main>
    </div>
  );
}

export default App;
