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

  const swapPlayers = () => {
    if (player === PLAYER_1) {
      setPlayer(PLAYER_2)
    }
    if (player === PLAYER_2){
      setPlayer(PLAYER_1)
    }
    };

    const checkForWinner = () => {
      // Complete in Wave 3
      // You will need to:
      // 1. Go across each row to see if 
      //    3 squares in the same row match
      //    i.e. same value
      // 2. Go down each column to see if
      //    3 squares in each column match
      // 3. Go across each diagonal to see if 
      //    all three squares have the same value.
      
      
      // for each row, 
      // if row[0] === X && row[1] === X && row[2] === X, winner = X
      //
      // rowcheck, column check, diaganol check 
      // row check for in loop inside of for each
      // col check for loop outside of for each 

      for(let i in squares){
        if (squares[i][0].value === squares[i][1].value && squares[i][1].value === squares[i][2].value &&  squares[i][0].value !== ''){
          return `Winner is player ${squares[i][0].value}`;
        }
        else if(squares[0][i].value === squares[1][i].value && squares[1][i].value === squares[2][i].value &&  squares[0][i].value !== ''){
          return `Winner is player ${squares[0][i].value}`;
        };
      }
  
      if((squares[1][1].value !== '') && ((squares[1][1].value === squares[0][0].value && squares[2][2].value === squares[0][0].value) || (squares[1][1].value === squares[0][2].value && squares[1][1].value === squares[2][0].value))){
        return `Winner is player ${squares[1][1].value}`;
      };

      const squareValues = squares.flat().map ( (square) => {
        return square.value;
      })

      if(!squareValues.includes('')) {
        return `It's a tie!`;
      };

      //
      return `Current player: ${player}`
    }

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  //if player is player 1 or 2 
  const clickCallback = (squareClickedOn) => {
    const updatedSquares = [];

    squares.forEach ((row) => {
      const updatedSquareRow = []

      row.forEach((square) => {
        if (square.id === squareClickedOn.id && square.value === '') {
          const updatedSquare = {id: squareClickedOn.id , value: player}

          updatedSquareRow.push(updatedSquare);
          swapPlayers();
        } else {
          updatedSquareRow.push(square);
        }
      });

      updatedSquares.push(updatedSquareRow)
    });
    
    if (checkForWinner() != 'Winner is x' && checkForWinner() != 'Winner is o' ){
      setSquares(updatedSquares);
    }

  }

  

  const resetGame = () => {
    // Complete in Wave 4
    const blankGrid = generateSquares();
    setSquares(blankGrid);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{checkForWinner()}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={clickCallback} />
      </main>
    </div>
  );
}

export default App;
