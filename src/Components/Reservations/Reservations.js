import React from "react";
import ResCard from '../ResCard/ResCard'
import './Reservations.css'

const Reservations = ({reservations}) => {

  const allReservations = reservations.map(reservation => {
    return (
      <ResCard 
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        guests={reservation.number}
        id={reservation.id}
        key={reservation.id}
        data-cy={reservation.id}
      />
    )
  })

  return (
    <div className="reservation-container">
      {allReservations}
    </div>
  )
}

export default Reservations