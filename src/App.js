import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row ++) {
    squares.push([]);
    for (let col = 0; col < 3; col ++) {
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
  const [turnNumber, setTurnNumber] = useState(0);
  const [winner, setWinner] = useState('');
  const [player, setPlayer] = useState(PLAYER_1);

  const onClickCallback = (id) => {
    if (winner === '') {
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        if (squares[row][col].id === id && squares[row][col].value === '') {
          squares[row][col].value = player;
          player === PLAYER_1? setPlayer(PLAYER_2) : setPlayer(PLAYER_1);
          setTurnNumber(turnNumber + 1);
        }
      }
    }
    setSquares(squares);

    if (turnNumber > 3) {
      setWinner(checkForWinner());
    }
  
  }
}

  const checkForWinner = () => {
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    const [firstRow, secondRow, thirdRow] = squares; 
    const board = [ ...firstRow, ...secondRow, ...thirdRow];
    const xOPositions = [];
    
    // board = ['','X','','O','','X','X','X' ]
    for (let i = 0; i < winCombos.length; i++) {
      
      const position1 = board[winCombos[i][0]];
      const position2 = board[winCombos[i][1]];
      const position3 = board[winCombos[i][2]]
      xOPositions.push([position1, position2, position3]);;
    }

    for (let i = 0; i < xOPositions.length; i++) {
      if (xOPositions[i][0].value === 'x' && xOPositions[i][1].value === 'x' && xOPositions[i][2].value === 'x') {
        return PLAYER_1
      }
      else if (xOPositions[i][0].value === 'o' && xOPositions[i][1].value === 'o' && xOPositions[i][2].value === 'o') {
        return PLAYER_2
      }
    }

    return '';

  }

  const resetGame = () => {
    setSquares(generateSquares());
    setTurnNumber(0);
    setWinner('');
    setPlayer(PLAYER_1); 
  }

  const onClick = () => {
    resetGame()
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>React Tic Tac Toe</h1>
      { winner != '' &&
      <h2>
        Winner is {winner}
      </h2>
       }
      {winner === '' && turnNumber === 9 && 
      <h2>
        TIE!
      </h2> 
      }
      { winner === '' && turnNumber < 9 &&
      <h2>
        Current Player {player}
      </h2>
      } 
      <button
        onClick={onClick}
        >Reset Game</button>
      </header>
      <main>
        <Board 
        squares={squares} 
        onClickCallback={onClickCallback}/>
      </main>
    </div>
  );
}

export default App;

