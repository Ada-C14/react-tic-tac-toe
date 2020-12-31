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
    for (let i = 0; i < squares.length; i += 1) {
      for (let j = 0; j < squares.length; j += 1) {
        if(event === squares[i][j].id){
        squares[i][j]['value'] = (switchPlayer() ? PLAYER_2 : PLAYER_1);
        }
      }
      newSquares.push(squares[i]);
    }
    setSquares(newSquares);
  }
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
      for(let i = 0; i < squares.length; i++){
        for(let j = 0; j < squares.length; j++){
          if(squares[i][0].value === squares[i][1].value && squares[i][0].value === squares[i][2].value && squares[i][0].value !== '' ){
            return squares[i][0].value
          }else if(squares[0][j].value === squares[1][j].value && squares[0][j].value === squares[2][j].value && squares[0][j].value !== ''){
            return squares[0][j].value;
          }
        }
      }
    }
    return -1;
  }


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
