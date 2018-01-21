import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';
import PendingGuest from './PendingGuest';


const GuestList = props => {
    let guests = props.isFiltered ? props.getAttendingGuests() : props.guests;

    return (<ul>
        <PendingGuest name={props.pendingGuest}/>
        {guests.map((guest, index) => 
            <Guest key={index}
                    name={guest.name} 
                    isConfirmed={guest.isConfirmed}
                    isEditing={guest.isEditing}
                    handleConfirmation={() => props.toggleConfirmationAt(index) } 
                    handleIsEditing={() => props.toggleEditingAt(index)}
                    setName={ text => props.setNameAt(text, index)}
                    handleRemove={() => props.removeGuestAt(index)} />
        )}
        </ul>)
}
    

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
}

export default GuestList;