import React from "react";
import './ResCard.css'

const ResCard = ({name, date, time, guests, id }) => {

  return (
    <div className="card" data-cy={id}>
      <h1>{name}</h1>
      <p>{date}</p>
      <p>{time}</p>
      <p data-cy={`guests-${id}`}>Number of guests: {guests}</p>
      <button className="cancel">CANCEL</button>
    </div>
  )
}

export default ResCard