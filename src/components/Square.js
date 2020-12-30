import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  const onSquareClick = () => {
    console.log(props.value);
    console.log(props.id);
    console.log(props.currentPlayer);

    const updatedSquare = {
      id: props.id,
      value: props.value === '' ? props.currentPlayer : props.value
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
