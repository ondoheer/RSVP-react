import React from 'react';
import GuestsCounter from './GuestsCounter';
import GuestList from './GuestList';
import ConfirmedFilter from './ConfirmedFilter';
const MainContent = props => {
   
return (
        <div className="main">
            <ConfirmedFilter toggleFilter={props.toggleFilter}
                            isFiltered={props.isFiltered}/>
            <GuestsCounter 
                    attending={props.attending}
                    pending={props.pending}
                    total={props.total}/>

            <GuestList  guests={props.guests }
                        toggleConfirmationAt={props.toggleConfirmationAt}
                        toggleEditingAt={props.toggleEditingAt}
                        setNameAt={props.setNameAt}
                        isFiltered={props.isFiltered}
                        getAttendingGuests={props.getAttendingGuests}
                        removeGuestAt={props.removeGuestAt}
                        pendingGuest={props.pendingGuest}
            />
        </div>)
}


export default MainContent;