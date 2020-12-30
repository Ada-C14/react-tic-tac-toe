import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {

  const onButtonClick = () => {
    // const updatedSquare = {
    //   id: props.id,
      // value: props.value,
      // key: props.id,
      // onClickCallback: props.onClickCallback
    // }

    props.onClickCallback(props.id);
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
