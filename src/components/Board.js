import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
let squareComponents = [];
for(let row = 0; row < squares.length; row += 1){
  for(let column = 0; column < squares.length; column += 1){
    squareComponents.push(<Square key={squares[row][column].id} value={squares[row][column].value} id={squares[row][column].id} onClickCallback={onClickCallback} />);
  }
}
return squareComponents
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
