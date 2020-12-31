import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  const squaresArray = []
  console.log(squares)
  
  for (const row of squares) {
    for (const column of row) {
      squaresArray.push( 
      < Square 
          key={column.id} 
          id={column.id} 
          value={column.value}
          // onClickCallback={() => onClickCallback} />);
          onClickCallback={onClickCallback} />);
    }
  }
  return squaresArray;
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
