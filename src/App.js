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

  /// const setSquares

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback



  const onClickCallback = (squareId) => {

    const newSquares = []
    for(const row of squares) {
      const newRow = [];
      for(const square of row) {
        if (square.id === squareId && square.value === '') {
          square.value = player;          
          setPlayer(player === PLAYER_1 ? PLAYER_2 : PLAYER_1)
        }
        newRow.push(square)
      }
      newSquares.push(newRow)
    }
    setSquares(newSquares);
    checkForWinner();
    // console.log(squareId);
  }



  const checkForWinner = () => {
  
    // Complete in Wave 3
    for (let i = 0; i < 3; i++) {
      // checking row
      if (squares[i][0].value !== '' &&
        squares[i][0].value === squares[i][1].value &&
        squares[i][0].value === squares[i][2].value) {
          setWinner(player);
          return player;
        }
      
      // checking columns
      if (squares[0][i].value !== '' &&
        squares[0][i].value === squares[1][i].value &&
        squares[0][i].value === squares[2][i].value) {
          setWinner(player);
          return player;
        }

      // checking cross(left to right) 
      if (squares[0][0].value !== '' &&
        squares[0][0].value === squares[1][1].value &&
        squares[1][1].value === squares[2][2].value) {
          setWinner(player);
          return player;
        }

      // checking cross(right to left) 
      if (squares[2][0].value !== '' &&
      squares[2][0].value === squares[1][1].value &&
      squares[2][0].value === squares[0][2].value) {
        setWinner(player);
        return player;
      }
    }
    return null;
  }

  const resetGame = () => {
    // Complete in Wave 4
    window.location.reload();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        {/* <h2>The winner is ...{winner} -- Fill in for wave 3 </h2> */}
        {winner ? <h2>The winner is ... {winner}! </h2> : <h2>Next player: {player}</h2>}
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} />
      </main>
    </div>
  );
}

export default App;
