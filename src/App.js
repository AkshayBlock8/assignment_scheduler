import React from 'react';
import './App.css';
import BookingCard from './BookingCard/BookingCard'

import BookingRow from './BookingRow/BookingRow'
import BookingItem from './BookingRow/BookingItem/BookingItem'

let event = {
  booked: false,
  title: "",
  priority: 0
}
let day = {
  nine : event,
  ten : event,
  eleven : event,
  twelve : event,
  one: event,
  two: event,
  three: event,
  four: event,
  five: event,
  six: event,
  seven: event
};
class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      calendar : {
        monday : day,
        tuesday : day,
        wednesday : day,
        thrusday : day,
        friday : day
      }
    }
  }
  render() {
    return (
      <div className="App">
        <BookingCard />
        <BookingRow calendar={this.state.calendar}/> 
      </div>
    );
  }
}

export default App;
