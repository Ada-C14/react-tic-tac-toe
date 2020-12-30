import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {

  const clickSquare = () => {
    if (props.value === '') {
      props.onClickCallback(props.id);
    };
  };
  return <button
    className="square"
    key={props.id}
    onClick={clickSquare}>
    {props.value}
  </button>
};

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
