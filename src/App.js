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

  // This starts state off as a 2D array of JS objects with empty value and unique ids.
    // squares is a state variable that holds the current value of state 
    // setSquaures is the function that updates the state 
  const [squares, setSquares] = useState(generateSquares());

  const [currentPlayer, setPlayer] = useState(PLAYER_1); // default player is always player_1, 'X' 

  const [currentWinner, setWinner] = useState(''); // default winner is empty 

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  //write out logic for the callback function 'onClickCallback' that is called when a square is clicked on
  //pass onClickCallback through Board to each Square component. 
  // 'onClickCallback' is the event handeler method that runs when event is triggered(user clicking on square) 

  // when square is clicked, the callback function will be called and change it to X or O DEPENDING on the PLAYER
  // - selectedSquareID is the square that was clicked on. Passed in as an argument in our square component.  
  const onClickCallback = (selectedSquareId) => {

  const updatedSquares = [...squares]; // shallow copy of squares 

    for (let row = 0; row < updatedSquares.length; row ++) {
      for (let col = 0; col < updatedSquares.length; col ++) {   
        if (updatedSquares[row][col].id === selectedSquareId && updatedSquares[row][col].value === '' && currentWinner === '') {
          updatedSquares[row][col].value = currentPlayer  // fills in value for blank square
          currentPlayer === PLAYER_1 ? setPlayer(PLAYER_2) : setPlayer(PLAYER_1);  // changes player 
        }
      } 
    setSquares(updatedSquares)
    checkForWinner();
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

    // Check diagonals
    if (squares[0][0].value !== '' && (squares[0][0].value === squares[1][1].value && squares[1][1].value === squares[2][2].value) || (squares[0][2].value === squares[1][1].value && squares[1][1].value === squares[2][0].value)) {  
      setWinner(squares[1][1].value);
    } else {
      for (let i = 0; i < 3; i ++) {
          // rows
          if (squares[i][0].value !== '' && squares[i][0].value === squares[i][1].value && squares[i][0].value === squares[i][2].value) {
            setWinner(squares[i][0].value);
          // columns
          } else if (squares[0][i].value !== '' && squares[0][i].value === squares[1][i].value && squares[0][i].value === squares[2][i].value) {
            setWinner(squares[0][i].value);
          } 
        }
      }
  }

  const resetGame = () => {
    // Complete in Wave 4
    setSquares(generateSquares())
    setWinner('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {currentWinner} </h2>
        <button onClick = {resetGame}> Reset Game </button>
      </header>
      <main>
{/* App should pass to Board a 2D array of JavaScript objects  */}
        <Board squares={squares} onClickCallback = {onClickCallback} />
        console.log(onClickCallback)
      </main>
    </div>
  );
}

export default App;
