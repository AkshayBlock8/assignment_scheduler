import React from 'react';
import './App.css';
import BookingCard from './BookingCard/BookingCard'

import BookingMatrix from './BookingMatrix/BookingMatrix';

let index = 0;
const getEvent = () => {
  let event = {
    booked: false,
    title: "",
    priority: 0,
    index: 0
  }
  event.index = index + 1;
  index++;
  return event;
}
const getDay = () => {
  let day = {
    "09:00" : getEvent(),
    "10:00" : getEvent(),
    "11:00" : getEvent(),
    "12:00" : getEvent(),
    "01:00": getEvent(),
    "02:00": getEvent(),
    "03:00": getEvent(),
    "04:00": getEvent(),
    "05:00": getEvent(),
    "06:00": getEvent(),
    "07:00": getEvent()
  };
  return day;
}

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      calendar : {
        "monday" : getDay(),
        "tuesday" : getDay(),
        "wednesday" : getDay(),
        "thrusday" : getDay(),
        "friday" : getDay()
      }
    }
  }
  handleClick = (time, day, name) => {
    console.log("sdfsdfsdfsd")
    console.log("sdfsdf",time, day, name)
    let tempCalendar = this.state.calendar;
    //console.log(tempCalendar)
    tempCalendar[day][time].booked = true
    this.setState({
      calendar: tempCalendar
    })
  }
  render() {
    return (
      <div className="App">
        <BookingCard handleClick={this.handleClick} />
        <div className="BookingMatrixContainer">
          <BookingMatrix calendar={this.state.calendar}/> 
        </div>
      </div>
    );
  }
}

export default App;
