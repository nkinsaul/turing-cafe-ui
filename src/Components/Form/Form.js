import React, { Component } from "react";
import './Form.css'
import postReservation from "../apiPost";

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitReservation = (event) => {
    event.preventDefault();
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation)
    postReservation(newReservation.id, this.state.name, this.state.date, this.state.time, this.state.guests)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({name: '', date: '', time: '', guests: ''})
  }

  render() {
    return (
      <form className="res-form">
        <input 
          data-cy="name-input"
          className="form-component"
          type='text'
          placeholder="Name"
          name='name'
          value={this.state.name}
          onChange={event => {this.handleChange(event)}}
        />  

        <input
          data-cy="date-input"
          className="form-component"
          type='text'
          placeholder="Date(mm/dd)"
          name='date'
          value={this.state.date}
          onChange={event => {this.handleChange(event)}}
        />

        <input
          data-cy="time-input"
          className="form-component"
          type='text'
          placeholder="Time"
          name='time'
          value={this.state.time}
          onChange={event => {this.handleChange(event)}}
        />

        <input
          data-cy="guests-input"
          className="form-component"  
          type='number'
          placeholder="Number of Guests"
          name='guests'
          value={this.state.guests}
          onChange={event => {this.handleChange(event)}}
        />

        <button onClick={event => this.submitReservation(event)}data-cy="submit-reservation" className="form-component">Make Reservation</button>

      </form>
    )
  }
}

export default Form