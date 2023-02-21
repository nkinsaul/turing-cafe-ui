const postReservation = (id, name, date, time, number) => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      id: id,
      name: name,
      date: date,
      time: time, 
      number: number 
    })
  })
  .then(response => response.json())
  .then(data => console.log('success', data))
}

export default postReservation