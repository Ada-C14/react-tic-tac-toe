import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // For Wave 2 enable this 
  //  Component to alert a parent component when it's clicked on.

  const onButtonClick = () => {
    const squareClickedOn = {
      id: props.id,
      value: props.value
    }
  props.onClickCallback(squareClickedOn)
  }

  return <button
    className="square"
    onClick={onButtonClick}
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
