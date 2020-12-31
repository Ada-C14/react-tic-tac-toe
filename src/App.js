import React, {
  useState
} from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';
const NO_WINNER = 'Nobody...';


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
  
    const [squares, setSquares] = useState(generateSquares());
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
    const [numSquaresFilled, setNumSquaresFilled] = useState(0);
    const [winner, setWinner] = useState(null);

    let updatedNumSquaresFilled = numSquaresFilled

    // Wave 2: Play game
  
    const onClickCallback = (id) => {
    if (winner !== null) return;

    const newSquares = [...squares];

    for (const row of newSquares) {
      for (const square of row) {
        if (square.id === id && square.value === '') {
          square.value = currentPlayer;
          updatedNumSquaresFilled = numSquaresFilled + 1
          setNumSquaresFilled(updatedNumSquaresFilled);
          currentPlayer === PLAYER_1 ? setCurrentPlayer(PLAYER_2) : setCurrentPlayer(PLAYER_1);
        }
      }
    }
    checkForWinner();
    setSquares(newSquares);
  }

    // Wave 3: Check for winner

    const checkForWinner = () => {

      const score = squares.flat()
      const winners = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];

      winners.forEach((check) => {
        if (score[check[0]].value !== '' 
        && score[check[0]].value === score[check[1]].value 
        && score[check[0]].value === score[check[2]].value) {
          setWinner(score[check[0]].value);
          return;
        }
      })

      if (updatedNumSquaresFilled === 9) {
        setWinner(NO_WINNER);
        return;
      }
      return null;
    }

      //  Wave 4: Reset
      
      const resetGame = () => {
            setSquares(generateSquares());
            setCurrentPlayer(PLAYER_1);
            setNumSquaresFilled(0);
            setWinner(null);
      }

      return ( 
        <div className = "App" >
          <header className = "App-header" >
            <h1> React Tic Tac Toe </h1> 
            <h2> {winner === null ? `${currentPlayer}, You're up` : `Winner is ${ winner}`} </h2> 
            <h2> {winner === NO_WINNER ? `It's a TIE!` : '' } </h2>
            <button onClick={resetGame}> Reset Game </button> 
          </header> 
          <main>
            <Board squares = {squares} onClickCallback = {onClickCallback}/> 
          </main> 
        </div>
      );
    }

    export default App;
