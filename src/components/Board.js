import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

// Q: where do i need: import React, { useState } from 'react';

// Update the Board component to render the grid of squares. You will need to complete the generateSquareComponents function in the Board component.

// App should pass to Board a 2D array of JavaScript objects and Board should use that to render an array of Square components.

// Each Square component should take 2 props at this stage.

// id the Id of the square
// value the value being displayed in the square
// We have provided you a function generateSquares in App.js which generates a 2D array of JavaScript objects 
// with Ids and values (blank strings). These should be used to provide data to Board and Square via props.

const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components

  // before game is started, squares = [
  // 0:[0:{id: 0, value: ""}, 1: {id: 1, value: ""}, 2: {id: 2, value: ""}],
  // 1:[3:{id: 3, value: ""}, 1: {id: 4, value: ""}, 2: {id: 5, value: ""}],
  // 2:[0:{id: 6, value: ""}, 1: {id: 7, value: ""}, 2: {id: 8, value: ""}]
  // ]

  // this function should return like so:
  // [
  //   {
  //     value: 'X',
  //     id: 0,
  //   }, ...
  // ]  

  // ok, so make a {value: ..., id: ... } for each square, push this into outputArray, return the array

  // let outputArray = [];

  // squares.forEach((row) => {
  //   row.forEach((square) => {
  //     outputArray.push({value: square.value, id: square.id})
  //   });
  // });

  // return outputArray


  // NOPE try again


  // correction: loop through squares (array of PROPS tho I thought objs), return a new Square component with id set to props.id and value set to props.value

  // const flattenedArray = [].concat(...squares);

  return (
    [].concat(...squares).map(props => // TODO: need to make this a 2D mapping somehow...
    <Square 
      id={props.id} 
      value={props.value} 
      onClickCallback={onClickCallback} // I think each square needs to reference the function, so onclick gets triggered for each/any?
    />
  ));

}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback); 
  console.log(squareList);
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
