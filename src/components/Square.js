import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = ({ onClickCallback, id, value }) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.

  return <button
    id={props.id}
    className="square"
<<<<<<< HEAD
    onClick={() => onClickCallback(id)}
=======
    onClick={() => props.onClickCallback(props.id)}
>>>>>>> 1879c912760e764ee1109e0e187c1d4b2bc59b94
  >
    {value}
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
