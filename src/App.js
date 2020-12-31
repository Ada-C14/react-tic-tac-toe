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
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1)
  const [winner, setWinner] = useState(null)

  const updateSquares = (id) => {

    const newSquares = [...squares]
    if (winner == null) {
      for (let row = 0; row < 3; row += 1) {
        for (let col = 0; col < 3; col += 1) {
          let currentSquare = newSquares[row][col]

          if (currentSquare.id === id && currentSquare.value === '') {
            currentSquare.value = currentPlayer;

            if (currentPlayer === PLAYER_1) {
              setCurrentPlayer(PLAYER_2)
            } else {
              setCurrentPlayer(PLAYER_1)
            }
          }
        }
      }
      setSquares(newSquares)
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
    let newWinner = null
    if (winner) {
      return;
    }
    for (let row = 0; row < 3; row++) {
      if (squares[row][0].value === squares[row][1].value && squares[row][0].value === squares[row][2].value && squares[row][0].value) {
        newWinner = squares[row][0].value
        setWinner(newWinner)
        break;

      };
    };
    
    for (let col = 0; col < 3; col++) {
      if (squares[0][col].value === squares[1][col].value && squares[0][col].value === squares[2][col].value && squares[0][col].value) {
        newWinner = squares[0][col].value
        setWinner(newWinner)
        break;
      };
    };
    


    if (squares[0][0].value === squares[1][1].value && squares[0][0].value === squares[2][2].value && squares[0][0].value) {
      setWinner(squares[0][0].value)
      

    } else if (squares[2][0].value === squares[1][1].value && squares[2][0].value === squares[0][2].value && squares[2][0].value) {
      setWinner(squares[2][0].value)
      

    };
    



  }

  const resetGame = () => {
    // Complete in Wave 4
  }
  checkForWinner()

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {winner}  </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquares} cu />
      </main>
    </div>
  );
}

export default App;
