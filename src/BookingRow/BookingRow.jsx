import React from 'react';

import BookingItem from './BookingItem/BookingItem'


const BookingRow = (props) => {
    const something = () => {
        //let some = props.calendar.monday;
        console.log(props.calendar.monday)
        return (
            Object.keys(props.calendar.monday).map(function(key, index) {
                
                    <BookingItem day={props.calendar.monday[key]} />
                
            }) 
        ); 
    }
    return (
        <div>
            {
                something()
            }
        </div>
    )
}

export default BookingRow;