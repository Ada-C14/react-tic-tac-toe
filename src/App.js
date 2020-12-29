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
  const [player, setPlayer] = useState(PLAYER_1)
  const [gameover, setGameover] = useState(false);
  const [winner, setWinner] = useState('');
  const [banner,setBanner] = useState('Current player is')

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const updateSquares = (updatedSquare) => {

    if (player === PLAYER_1) {
      setPlayer(PLAYER_2);
    } else if (player === PLAYER_2) {
      setPlayer(PLAYER_1);
    }

    const newSquares = [];
    
    squares.forEach((squareRow) => {
      const newSquareRow = [];
      squareRow.forEach((square) => {
        if (square.id === updatedSquare.id) {
          newSquareRow.push(updatedSquare);
        } else {
          newSquareRow.push(square);
        }
      });
      newSquares.push(newSquareRow);
    });

    if (gameover === false) {
      setSquares(newSquares);
      checkForWinner(newSquares);
    }
  };


  const checkForWinner = (squares) => {

    squares.forEach((squareRow) => {
      if (squareRow[0].value != '' && squareRow[0].value == squareRow[1].value && squareRow[0].value === squareRow[2].value) {
        setWinner(squareRow[0].value);
        setGameover(true);
        setBanner('Winner is ');
        return;
      }
    });

    for (let c = 0; c < 3; c++) {
      if (squares[0][c].value != '' && squares[0][c].value === squares[1][c].value && squares[0][c].value === squares[2][c].value) {
        setWinner(squares[0][c].value);
        setGameover(true);
        setBanner('Winner is ');
        return;
      }
    };

    const diagonalOne = (squares[1][1].value != '' && squares[0][0].value === squares[1][1].value && squares[0][0].value === squares[2][2].value);
    const diagonalTwo = (squares[1][1].value != '' && squares[0][2].value === squares[1][1].value && squares[0][2].value === squares[2][0].value);

    if (diagonalOne || diagonalTwo) {
      setWinner(squares[1][1].value);
      setGameover(true);
      setBanner('Winner is ');
      return;
    }    

    const squares1d = ([].concat(...squares)).map((square) => { return square.value != ''});
    if (!squares1d.includes(false)) {
      setGameover(true);
      setBanner('Tie! Nobody wins.');
      return;
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        {/* different h2 while game in play */}
        <h2>{banner} {gameover? winner : player}</h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquares} player={player} />
      </main>
    </div>
  );
}

export default App;
