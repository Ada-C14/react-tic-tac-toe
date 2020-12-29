import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components
  const squaresArray = []
  // squares.length.times do |row| 
  //   row.length.times do |col|
  

  // const Timeline = (props) => {

  //   const timelineEvents = props.events.map((event, i) => {
  //     return (
  //         <TimelineEvent key={i} person={event.person} status={event.status} timeStamp={event.timeStamp}/>
  //     );
  //   });
  // 
  console.log(squares)

    for (const row of squares) {
      for (const column of row) {
        squaresArray.push(<Square key={column.id} id={column.id} value={column.value}/>);
      }
    }
    return squaresArray;
// squares = squaresArray


}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
  return <div className="grid" >
    {squareList}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
