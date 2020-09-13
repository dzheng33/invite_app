import React from 'react';

import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = (props) => {
    return(
        <ul>
        {props.guests
        .filter(guest => !props.isFiltered || guest.isConfirmed)
        .map((guest, index) => {
        return <Guest name={guest.name}
                      isConfirmed={guest.isConfirmed}
                      isEditing={guest.isEditing}
                      key={index}
                      toggleConfirm={ () => props.toggleConfirm(guest.id)}
                      toggleEdit={ () => props.toggleEdit(guest.id)}
                      handleNameEdits={(event) => props.handleNameEdits(event,guest.id)}
                      handleRemove={ () => props.handleRemove(guest.id)}

               />
        })}
        <PendingGuest name={props.pendingGuest} />
      </ul>
    );
}

export default GuestList;