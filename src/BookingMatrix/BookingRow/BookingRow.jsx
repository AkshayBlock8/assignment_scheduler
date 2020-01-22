import React from 'react';

import BookingItem from './BookingItem/BookingItem'


const BookingRow = (props) => {
    const bookingList = Object.keys(props.timeline).map((key, index) => 
        <BookingItem key={index} timing={key} day={props.timeline[key]} />
    )
    return (
        <div>
            {bookingList}
        </div>
    )
}

export default BookingRow;