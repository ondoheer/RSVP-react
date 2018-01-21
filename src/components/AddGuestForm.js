import React from 'react';

const AddGuestForm = props => 
    <form onSubmit={props.addGuest}>
        <input type="text" 
                value={props.pendingGuest}
                placeholder="Invite Someone"
                onChange={props.handleNameInput} />
        <button type="submit" name="submit" value="submit"
                    >Submit</button>
    </form>
;


export default AddGuestForm;