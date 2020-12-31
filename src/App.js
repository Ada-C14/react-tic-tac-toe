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
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [winner, setWinner] = useState('');
  const [count, setCount] = useState(0);
  
  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const updateSquare = (id) => {

    if (winner !== '') {return;};
    const squares1D = [...squares[0], ...squares[1], ...squares[2]];
    const updatedSquares1D = []
    
    squares1D.forEach((square) => {
      if(square.value === '' && square.id === id){
        square.value = currentPlayer;
        updatedSquares1D.push(square)

        setCount(count + 1);
        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1)

      } else {
        updatedSquares1D.push(square);
      }
  
    });

    let newSquares = []; 
    for(let i=0;i < updatedSquares1D.length;i = i+3)
      {newSquares.push(updatedSquares1D.slice(i,i+3))};
      
    setSquares(newSquares);
    checkForWinner();
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


    for(let i = 0; i < squares.length; i ++){
      if (squares[i][0].value === squares[i][1].value && squares[i][1].value === squares[i][2].value && squares[i][0].value !== ''){
        setWinner(squares[i][0].value)
      }
      else if (squares[0][i].value === squares[1][i].value && squares[1][i].value === squares[2][i].value && squares[1][i].value !==''){
        setWinner(squares[0][i].value)
      }
    }
    // diaognal
    if(squares[0][0].value === squares[1][1].value && squares[1][1].value === squares[2][2].value && squares[1][1] !== ''){
      setWinner(squares[0][0].value)
    } else if(squares[2][0].value === squares[1][1].value && squares[1][1].value === squares[0][2].value && squares[1][1] !== ''){
      setWinner(squares[2][0].value)
    }

  }

  const status = () => {
    if (winner === '' && count === 9 ) {
      return `It's a tie!`
    } else if (winner !== '' ) {
      return `Winner is ${winner}`
    } else {
      return `The current player is ${currentPlayer}`
    }
  }


  const resetGame = () => {
    setSquares(generateSquares());
    setCurrentPlayer(PLAYER_1);
    setWinner('');
    setCount(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{status()}</h2>
        <button onClick={resetGame}>Reset Game </button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare} />
      </main>
    </div>
  );
}

export default App;
