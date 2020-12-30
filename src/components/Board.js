import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback,player) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components
  const oneDArray = [];
  for (let row = 0; row < 3; row += 1) {
    for (let col = 0; col < 3; col += 1) {
      oneDArray.push(
      <Square
        key={squares[row][col].id}  
        id={squares[row][col].id}
        value={squares[row][col].value}
        onClickCallback={onClickCallback}
        play={player}
      />)
    }
  }

  return oneDArray;
}
  

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
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
