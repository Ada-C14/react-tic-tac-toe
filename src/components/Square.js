import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = ({ value, onClickCallback, id }) => (
  <button onClick={() => onClickCallback(id)}>
      {value}
  </button>
);

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
