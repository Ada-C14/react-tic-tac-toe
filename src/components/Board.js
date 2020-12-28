import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // App will pass to Board a 2D array of JavaScript objects and Board will use that to render an array of Square components.
  // squares is a 2D Array, and we need to return a 1D array of square components
  // Each Square component should take 3 props. id, value and onclickcallback
  
  const flattenedSq = squares.flat()
  return flattenedSq.map((props) =>
    <Square 
      id = {props.id}
      value = {props.value}
      onClickCallback = {onClickCallback}
      key = {props.id}
    />
  );
}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  // console.log(squareList);
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
