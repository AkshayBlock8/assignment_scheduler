import React from 'react'
import { Card } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

import './BookingCard.css';

const BookingCard = () => {
  let times = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6];
  let days = ["mon", "tues", ,"wed", "thurs", "fri", "sat", "sun"];
  const timeList = () => {
    return (
      <datalist id="timeList">
        { 
          times.map((key) => 
            <option key={key} value={`${key} : 00`} />
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
          <Input className="Input" list="timeList" placeholder='Choose Time' />
          <Input className="Input" list="dayList" placeholder='Choose Day' />
          <Input className="Input" list="dayList" placeholder='Event Name' />
          <Button secondary>Place Event</Button>
          {timeList()}
          {dayList()}

          </Card.Content> 
      </Card>
    </div>)
}

export default BookingCard