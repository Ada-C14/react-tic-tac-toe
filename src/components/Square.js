import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.

  // const onClickCallback = () => {
  //   id: props.id,
  //   value: props.value
  // };

  const onClickCallback = () => {
    const updatedSquare = {
      value: props.value,
      id: props.id
    }

    props.onUpdateSquare(updatedSquare);
  }

  return <button onClick={() => props.onClickCallback(props.id)}
    className="square">
    {props.value}
  </button>
}


Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
