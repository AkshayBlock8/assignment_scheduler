import React from 'react'
import BookingRow from './BookingRow/BookingRow'
import { Header } from 'semantic-ui-react'
import './BookingMatrix.css';
const BookingMatrix = (props) => {
    const bookingRows = Object.keys(props.calendar).map((key, index) =>
        <div className="BookingMatrix" key={index}>
            <Header className="Header" as='h3'>{key}</Header>
            <BookingRow className="BookingRow" timeline={props.calendar[key]} day={key}/>
        </div>
    )
    return (
        <div>
            {bookingRows}
        </div>
    )
}
export default BookingMatrix;