import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback, currentPlayer) => {
  const oneRow = squares.map ((row) => {
    return row.map ((square) => {
      return (
        <Square id={square.id} value={square.value} onClickCallback={onClickCallback} currentPlayer={currentPlayer} />
      );
    });
  });

  return (oneRow);
}

const Board = ({ squares, onClickCallback, currentPlayer }) => {
  const squareList = generateSquareComponents(squares, onClickCallback, currentPlayer);
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
  currentPlayer: PropTypes.string.isRequired,
};

export default Board;
