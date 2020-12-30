import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components
  const array = []
  for (let row=0; row < squares.length; row++) {
    for (let column=0; column < squares[0].length; column++) {
      const square = squares[row][column]
      array.push(square)
  }

  
  }
  return (array.map((squareObject, i) => {
    return (
      
    < Square id={squareObject.id} value={squareObject.value}
    key ={i} onClickCallback={onClickCallback}/>
    )
  }));

};

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
