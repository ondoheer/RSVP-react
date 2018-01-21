import React from 'react';


const ConfirmedFilter = props => 
<div>
<h2>Invitees</h2>
<label>
    <input type="checkbox" 
        onChange={props.toggleFilter}
        checked={props.isFiltered}/> Hide those who haven't responded
</label>
</div>;


export default ConfirmedFilter;