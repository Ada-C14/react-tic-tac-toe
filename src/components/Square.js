import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'


const Square = ({ value, onClickCallback, id }) => (
  <button className="square" onClick={() => onClickCallback(id)}>
      {value}

// const Square = ({value, onClickCallback, id}) => {

//   return <button
//     className="square" onClick={()=> onClickCallback(id)}
//   >
//     {value}
// >>>>>>> stacy_wave2-3
  </button>
);

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
