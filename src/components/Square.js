import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.
  const onButtonClick = () => props.onClickCallback(props.id)  // event handeler 

  return <button
    className="square"
    onClick = {onButtonClick}  // event listener 

    // -- REFACTOR OPTION: can also define the function directly in the JSX with an anonymous function
    // onClick = {() => {props.onClickCallback(props.id)}}
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


// Notes
// - onClick is an event listener that references the onButtonClick function, 
//onButtonClick will then call the onClickCallback function  

// or if function is defined directly, it will call the onClickCallback function DIRECTLY when clicked 


