import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  const onSquareClick = () => {
    const updatedSquare = {
      id: props.id,
      value: 'x'
    }
    props.onClickCallback(updatedSquare);
    console.log(updatedSquare.value);
  }
 


  return (
  <button className="square" onClick={onSquareClick}>

    {props.value}
  </button>
  )}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
