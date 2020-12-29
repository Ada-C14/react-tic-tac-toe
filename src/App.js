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
  const [winner, setWinner] = useState('')

  const onClickCallback = (squareID) => {
    if (squareID < 3) {
      squares[0][squareID].value = player;
    } else if (squareID < 6) {
      squares[1][squareID - 3].value = player;
    } else {
      squares[2][squareID - 6].value = player;
    };

    (player === PLAYER_1) ? setPlayer(PLAYER_2) : setPlayer(PLAYER_1);

    setSquares(squares);
    checkForWinner();
  };


  const checkForWinner = () => {
    const checkForThree = (first, second, third) => {
      if(first.value === second.value && second.value === third.value) {
        if(first.value === PLAYER_1) {
          setWinner(PLAYER_1);
        } else if (first.value === PLAYER_2) {
          setWinner(PLAYER_2);
        } 
      }
    }

    for (let i = 0; i < squares.length; i++) {
      checkForThree(...squares[i])
    };
    
    for(let i = 0; i < squares.length; i ++) {
      const column = [squares[0][i], squares[1][i], squares[2][i]]
      checkForThree(...column)
    };

    let diagonal = [squares[0][0], squares[1][1], squares[2][2]]
    checkForThree(...diagonal);

    diagonal = [squares[0][2], squares[1][1], squares[2][0]]
    checkForThree(...diagonal);

    if(squares.flat().every((element) => element.value !== '')) {
      setWinner('TIE')
    }
  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {winner}</h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} />
      </main>
    </div>
  );
}

export default App;
