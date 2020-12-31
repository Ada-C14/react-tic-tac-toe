import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {

  const onButtonClick = () => {
    const id = props.id
    props.onClickCallback(id)
  }

  return <button
    className="square"
    key={props.id}
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
