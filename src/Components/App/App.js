import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations';
import getReservations from '../apiCalls';
import Form from '../Form/Form';

import './App.css';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      reservations: []
    }
  }

  addReservation = (newReservation) => {
    this.setState({reservations: [...this.state.reservations, newReservation]})
  }

  componentDidMount() {
    getReservations()
    .then(data => this.setState({reservations: data}))
  }

    render() {
      return  (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
      )
    }
  }

export default App;
