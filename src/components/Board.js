import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

const generateSquareComponents = (squares, onClickCallback) => {

  const flattenedArray = [].concat(...squares);

  return (flattenedArray.map(props =>
    <Square 
      key={props.id}
      id={props.id} 
      value={props.value} 
      onClickCallback={onClickCallback}
    />
  ));

}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback); 
  return <div className="grid" > {/* component functions always return JSX */}
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
