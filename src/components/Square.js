import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.

  const [value, setValue] = useState('');
  
  const onSquareClick = () => {
    console.log(props.value);
    console.log(props.id);
    console.log(props.currentPlayer);
    // If the square is blank
    if (props.value === '') {
      // Set value to current player
      const value = props.currentPlayer;
    }

    const updatedSquare = {
      id: props.id,
      value: value,
    }

    props.onClickCallback(updatedSquare);
  }

  return <button
    className="square"
    onClick={onSquareClick}
  >
    {props.value}
  </button>
};

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
