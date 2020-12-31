import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // For Wave 2 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.

// const onSquareClick = (props) => {
  // const updatedSquare = {
  //   value: props.value,
  //   onClickCallback: props.onClickCallback,
  //   id: props.id
  // }

  // // It will go back to App & hand it an updated square. (calls the function passed from App.js
  // props.onClickCallback(updatedSquare);
  // // onClickCallback(updatedSquare);
// }
  // When you click, that event listener will go back to App
  return <button 
    className="square"
    onClick={() => {props.onClickCallback(props.id)}} 
  // Callback function is called here on Squre then cascades up
  // Anonymous function prevents it from being executed immediately
  // anon function does the same as onsquareclick
    
  >
    {props.value}
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
