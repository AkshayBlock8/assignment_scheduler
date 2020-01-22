import React from 'react';
import {Button} from 'semantic-ui-react'
const BookingItem = (props) => {
    const getColor = () => props.day.booked ? "blue" : "grey";
    
    return (
        //<div className="Button">
        <Button className="Button" color={getColor()}>{`${props.timing}`}</Button>
        //{something()}
        //</div>
    )
}
export default BookingItem
