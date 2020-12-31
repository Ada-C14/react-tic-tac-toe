import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';



const generateSquareComponents = (squares, onClickCallback, currentPlayer) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components
  let squareArray = [];

  squares.forEach((row) => {
    row.forEach((square) => {
      squareArray.push(
      <Square
        id={square.id}
        value={square.value}
        onClickCallback={onClickCallback}
        currentPlayer={currentPlayer}
      />)
    })
  });
    return squareArray;

}

const Board = ({ squares, onClickCallback, currentPlayer }) => {
  const squareList = generateSquareComponents(squares, onClickCallback, currentPlayer);
  return <div className="grid" >
    {squareList}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
