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
    for (let column = 0; column < 3; column += 1) {
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
  const [current, changeCurrent] = useState(true);

  const onClickCallback = (event) => {
    let newSquares = [];
    for (let row = 0; row < squares.length; row += 1) {
      for (let column = 0; column < squares.length; column += 1) {
        squares[row][column]['value'] = (switchPlayer() ? PLAYER_2 : PLAYER_1);
      } 
    }
    newSquares.push(squares[row]);
  }
setSquares(newSquares);
// => change/ remove bracket
//toggle players
  function switchPlayer() {
    changeCurrent(!current);
    return current;
  };
const checkForWinner = () => {
  if(squares[0][0].value === squares[1][1].value  && squares[0][0].value === squares[2][2].value && squares[0][0].value !== '' ){
  return squares[0][0].value;
  }else if(squares[0][2].value === squares[1][1].value && squares[0][2].value === squares[2][0].value && squares[0][2].value !== ''){
  return squares[0][2].value;
  }else{
    for(let row = 0; row < squares.length; row += 1){
      for(let column = 0; column < squares.length; column += 1){
        if(squares[row][0].value === squares[row][1].value && squares[row][0].value === squares[row][2].value && squares[row][0].value !== '' ){
          return squares[row][0].value
        }else if(squares[0][column].value === squares[1][column].value && squares[0][column].value === squares[2][column].value && squares[0][column].value !== ''){
          return squares[0][column].value;
        }
      }
    }
  }
  return -1;
};


const resetGame = () => {
setSquares(generateSquares());
}
let winner = checkForWinner();
  if(winner !== -1){
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Tic Tac Toe</h1>
          <h2>The winner is {winner} </h2>
          <button>Reset Game</button>
        </header>
        <main>
          <p>WoHOO!!!</p>
        </main>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Game is still on... </h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback}/>
      </main>
    </div>
  );
} 
export default App;
