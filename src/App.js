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

  const [squares, setSquares] = useState(generateSquares()); // squares is created here
  const [player, setPlayer] = useState(PLAYER_1);
  const [winner, setWinner] = useState(`...`);

  // until the new render has occurred, the squares reported in onClickCallback are the same squares set up by the previous render
  const onClickCallback = (id) => {
    const updatedSquares = generateSquares();

    if (winner !== '...') return; // Don't continue updating after winner is declared
    
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        if (updatedSquares[row][col].id === id && squares[row][col].value === '') {
        updatedSquares[row][col].value = player;
        setPlayer(player === PLAYER_1 ? PLAYER_2 : PLAYER_1);
        }
        else {
          updatedSquares[row][col].value = squares[row][col].value
        }
      }
    }

    setSquares(updatedSquares);
    checkForWinner(updatedSquares);
  }

  const checkForWinner = (squares) => {

    const flattenedArray = [].concat(...squares);

    if (flattenedArray[0].value === flattenedArray[1].value && flattenedArray[1].value === flattenedArray[2].value && flattenedArray[0].value !== '') {
      setWinner(flattenedArray[0].value);
    }
    else if (flattenedArray[3].value === flattenedArray[4].value && flattenedArray[4].value === flattenedArray[5].value && flattenedArray[3].value !== '') {
      setWinner(flattenedArray[3].value);
    }
    else if (flattenedArray[6].value === flattenedArray[7].value && flattenedArray[7].value === flattenedArray[8].value && flattenedArray[6].value !== '') {
      setWinner(flattenedArray[6].value);
    }
    else if (flattenedArray[0].value === flattenedArray[3].value && flattenedArray[3].value === flattenedArray[6].value && flattenedArray[0].value !== '') {
      setWinner(flattenedArray[0].value);
    }
    else if (flattenedArray[1].value === flattenedArray[4].value && flattenedArray[4].value === flattenedArray[7].value && flattenedArray[1].value !== '') {
      setWinner(flattenedArray[1].value);
    }
    else if (flattenedArray[2].value === flattenedArray[5].value && flattenedArray[5].value === flattenedArray[8].value && flattenedArray[2].value !== '') {
      setWinner(flattenedArray[2].value);
    }
    else if (flattenedArray[0].value === flattenedArray[4].value && flattenedArray[4].value === flattenedArray[8].value && flattenedArray[0].value !== '') {
      setWinner(flattenedArray[0].value);
    }
    else if (flattenedArray[2].value === flattenedArray[4].value && flattenedArray[4].value === flattenedArray[6].value && flattenedArray[2].value !== '') {
      setWinner(flattenedArray[2].value);
    }
  }

  const resetGame = () => {
    setPlayer(PLAYER_1);
    setSquares(generateSquares());
    setWinner(`...`);
  }

  // squares is updated here. You could also call checkForWinner here right before rendering, passing squares instead of updatedSquares
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {winner} </h2>
        <button onClick={() => {resetGame()}}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback}/> 
        {/* Prop name that is being passed down to board={the function that is defined above bc this is JS within JSX} */}
        {/* Beginning of the chain reaction where we hand the updateSquare method in as a prop to Board */}
      </main>
    </div>
  );
}

export default App;
