import React from "react";
import './ResCard.css'

const ResCard = ({name, date, time, guests }) => {

  return (
    <div className="card">
      <h1>{name}</h1>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {guests}</p>
      <button className="cancel">CANCEL</button>
    </div>
  )
}

export default ResCard