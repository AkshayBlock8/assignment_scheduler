import React from 'react'
import { Card } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

import './BookingCard.css';
const times = ["09", "10", "11", "12", "01", "02", "03", "04", "05", "06"];
const days = ["monday", "tuesday", ,"wednesday", "thrusday", "friday"];

class BookingCard extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      selectedTime: "09:00",
      selectedDay: "monday",
      selectedEventName: ""
    }
  }
  handleTimeChanged = (e) => {
    console.log(e.target.value)
    this.setState({
      selectedTime: e.target.value
    })
  }
  handleDayChanged = (e) => {
    console.log(e.target.value)
    this.setState({
      selectedDay: e.target.value
    })
  }
  handleEventNameChanged = (e) => {
    console.log(e.target.value)
    this.setState({
      selectedEventName: e.target.value
    })
  }
  render() {
    const timeList = () => {
      return (
        <datalist id="timeList">
          { 
            times.map((key) => 
              <option key={key} value={`${key}:00`} />
            )
          }
        </datalist>
      )
    }
    
    const dayList = () => {
      return (
        <datalist id="dayList">
          { 
            days.map((key) => 
              <option key={key} value={key} />
            )
          }
        </datalist>
      )
    }
    return (
      <div className="BookingCard">
        <Card fluid>
            <Card.Content>
            <Card.Header>Event Selector</Card.Header>
            </Card.Content>
            <Card.Content>
            <Input className="Input" onChange={this.handleTimeChanged} list="timeList" placeholder='Choose Time' />
            <Input className="Input" onChange={this.handleDayChanged} list="dayList" placeholder='Choose Day' />
            <Input className="Input" onChange={this.handleEventNameChanged} placeholder='Event Name' />
            <Button secondary onClick={() => this.props.handleClick(this.state.selectedTime, this.state.selectedDay, this.state.selectedEventName)}>Place Event</Button>
            {timeList()}
            {dayList()}
            </Card.Content> 
        </Card>
      </div>)
  }
}

export default BookingCard