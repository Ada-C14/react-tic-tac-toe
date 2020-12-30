import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  const onSquareClick = () => {
    let value;
    let wasUpdated = false;

    if (props.value === '') {
      value = props.currentPlayer;
      wasUpdated = true;
    } else {
      value = props.value
    }

    const updatedSquare = {
      id: props.id,
      value: value
    }

    props.onClickCallback(updatedSquare, wasUpdated);
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
