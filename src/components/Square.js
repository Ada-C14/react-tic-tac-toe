import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

  // When you click, the event listener will go back to App.js
const Square = (props) => {
  return <button 
    className="square"
    onClick={() => {props.onClickCallback(props.id)}} // Event handler
  // Callback function is called here on Square then cascades up    
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
