import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {

  const onClickCallback = () => {
    const updatedSquare = {
      value: props.value,
      id: props.id,
      onClickCallback: props.onClickCallback
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
