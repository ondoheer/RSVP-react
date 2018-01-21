import React from 'react';


import AddGuestForm from './AddGuestForm';



const TopHeader = props => {

    return (
        <header>
            <h1>RSVP</h1>
            <p>A Test App</p>
            <AddGuestForm handleNameInput={props.handleNameInput}
                        pendingGuest={props.pendingGuest}
                        addGuest={props.addGuest} />
        </header>

    )
}
   

export default TopHeader;