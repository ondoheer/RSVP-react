import React from 'react';


const GuestsCounter = props => 
<table className="counter">
<tbody>
  <tr>
    <td>Attending:</td>
    <td>{props.attending}</td>
  </tr>
  <tr>
    <td>Unconfirmed:</td>
    <td>{props.pending}</td>
  </tr>
  <tr>
    <td>Total:</td>
    <td>{props.total}</td>
  </tr>
</tbody>
</table>
;


export default GuestsCounter;