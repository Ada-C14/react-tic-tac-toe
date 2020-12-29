import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.

const onClickChangeValue = () => {
  const updatedSquare = {
    id: props.id,
    value: props.player,
  }

  props.onClickCallback(updatedSquare);
};


  return <button onClick={onClickChangeValue}
    className="square" 
  >
    {props.value}
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  player: PropTypes.string
};

export default Square
