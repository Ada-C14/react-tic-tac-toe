import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback, player) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components

const flattenarray = squares.flat()

const squareComponents = flattenarray.map((square) => 
  <Square 
    id={square.id} 
    value={square.value}
    onClickCallback={onClickCallback}
    key={square.id}
    player={player} />

)

return squareComponents;
}

const Board = ({ squares, onClickCallback, player }) => {
  const squareList = generateSquareComponents(squares, onClickCallback, player);
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
