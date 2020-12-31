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
  const [player, setCurrentPlayer] = useState(PLAYER_1);

  const updateSquare = (updatedSquare) => {
    //this function call doesn't allow to update square on click if the winner is found 
    if (checkForWinner() !== '') {
      return
    }
      
    const updateCurrentPlayer = (updatedCurrentPlayer) => {

      if (player === PLAYER_1) {
        updatedCurrentPlayer = PLAYER_2;
      } else {
        updatedCurrentPlayer = PLAYER_1;
      }
  
      setCurrentPlayer(updatedCurrentPlayer);
    };

    const squaresNew = [];
    for (let row = 0; row < 3; row += 1) {
      squaresNew.push([]);
      for (let col = 0; col < 3; col += 1) {
        if (squares[row][col].id === updatedSquare && squares[row][col].value==='') {
          squaresNew[row].push({
            id: updatedSquare,
            value: player,
          });

          setCurrentPlayer(updateCurrentPlayer);
        } else {
          squaresNew[row].push(squares[row][col]);
        };
      }
    };
    
    setSquares(squaresNew);
  }
  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

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
      for (let i = 0; i < squares.length; i++) {
        //rows 
        //added condition that checks is square not empty
        if (squares[i][0].value === squares[i][1].value && 
            squares[i][1].value === squares[i][2].value &&
            squares[i][2].value !== '') {
            return squares[i][0].value;
        } else if (squares[0][i].value === squares[1][i].value && //columns
            squares[1][i].value === squares[2][i].value && 
            squares[2][i].value !== '') {
            return squares[0][i].value;
        };
      }
      //diagonals
      if (squares[0][0].value === squares[1][1].value && 
        squares[1][1].value === squares[2][2].value) {
        return squares[0][0].value;
      } else if (squares[2][0].value === squares[1][1].value && 
        squares[1][1].value === squares[0][2].value) {
        return squares[2][0].value;
      };
      return '';
  }
  //add a function to display tie message
  const displayResult = () => {
    const winner = checkForWinner();
    if (winner !== '') {
      return <h2>Winner is {winner}</h2>
    } 
    //checking that all squares were filled
    for (let i = 0; i < squares.length; i++) {
      for (let j = 0; j < squares.length; j++) {
        if (squares[i][j].value === '') {
          return ''
        }
      }
    }
    return <h2>It's a tie!</h2>
  }

  
  const resetGame = () => {
    // Complete in Wave 4
    const squaresEmpty = []
    for (let i = 0; i < 3; i++) {
      squaresEmpty.push([]);
      for (let j = 0; j < 3; j++) {
          squaresEmpty[i].push({
            id: squares[i][j].id,
            value: ''
          })
        }
    };
    setCurrentPlayer(PLAYER_1);
    setSquares(squaresEmpty);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        {/* <h2>The winner is {checkForWinner()}</h2> */}
        {displayResult()}
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare}/>
      </main>
    </div>
  );
}

export default App;
