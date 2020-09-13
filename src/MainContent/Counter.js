import React from 'react';

const Counter = (props) => {
    return(
        <table className="counter">
        <tbody>
          <tr>
            <td>Attending:</td>
            <td>{props.totalAttending}</td>
          </tr>
          <tr>
            <td>Unconfirmed:</td>
            <td>{props.totalGuest - props.totalAttending}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>{props.totalGuest}</td>
          </tr>
        </tbody>
      </table>
    );

}

export default Counter;