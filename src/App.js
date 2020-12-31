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

    // This starts state off as a 2D array of JS objects with
    // empty value and unique ids.
    const [squares, setSquares] = useState(generateSquares());
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
    const [numSquaresFilled, setNumSquaresFilled] = useState(0);
    const [winner, setWinner] = useState(null);

    let updatedNumSquaresFilled = numSquaresFilled

    // Wave 2
    const onClickCallback = (squareID) => {
      if (winner !== null) return;

      const squaresList = [...squares];
      let row = 0;
      let col = 0;
      let found = false;

      while (row < 3 && !found) {
        while (col < 3 && !found) {
          let currentSquare = squaresList[row][col];
          if (currentSquare.id === squareID) {
            if (currentSquare.value !== '') return;
            found = true;
            currentSquare.value = currentPlayer;
            updatedNumSquaresFilled = numSquaresFilled + 1
            setNumSquaresFilled(updatedNumSquaresFilled);
            if (currentPlayer === PLAYER_1) {
              setCurrentPlayer(PLAYER_2)
            } else {
              setCurrentPlayer(PLAYER_1);
            }
          }
          col += 1;
        }
        row += 1;
        col = 0
      }
      checkForWinner();
      setSquares(squaresList);
    }


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
      // let i = 0;

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
      const resetGame = () => {
        // Complete in Wave 4
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