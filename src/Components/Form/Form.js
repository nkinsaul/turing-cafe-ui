import React, { Component } from "react";
import './Form.css'

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

  render() {
    return (
      <form className="res-form">
        <input 
          className="form-component"
          type='text'
          placeholder="Name"
          name='name'
          value={this.state.name}
          onChange={event => {this.handleChange(event)}}
        />  

        <input
          className="form-component"
          type='text'
          placeholder="Date(mm/dd)"
          name='date'
          value={this.state.date}
          onChange={event => {this.handleChange(event)}}
        />

        <input
          className="form-component"
          type='text'
          placeholder="Time"
          name='time'
          value={this.state.time}
          onChange={event => {this.handleChange(event)}}
        />

        <input
          className="form-component"  
          type='text'
          placeholder="Number of Guests"
          name='guests'
          value={this.state.guests}
          onChange={event => {this.handleChange(event)}}
        />

        <button className="form-component">Make Reservation</button>

      </form>
    )
  }
}

export default Form