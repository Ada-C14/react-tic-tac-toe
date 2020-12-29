import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

const generateSquareComponents = (squares, onClickCallback, player) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components

  const squares1d = [].concat(...squares);
  const result1d = squares1d.map((square) => {
    return (
      <Square value={square.value} id={square.id} onClickCallback={onClickCallback} player={player} />
    );
  });
  return result1d;
};



const Board = ({ squares, onClickCallback, player}) => {
  const squareList = generateSquareComponents(squares, onClickCallback, player);
  // console.log(squareList);
  return <div className="grid" >
    {squareList}
  </div>
};

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
  player: PropTypes.string
};

export default Board;
