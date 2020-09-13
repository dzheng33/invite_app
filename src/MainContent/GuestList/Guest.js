import React from 'react';

import GuestName from './GuestName';

const Guest = (props) => {
    return(
        <li>
            <GuestName isEditing={props.isEditing} 
                        name={props.name}
                        handleNameEdits={(event) => props.handleNameEdits(event.target.value)}
            />
            <label>
                <input type="checkbox" 
                        checked={props.isConfirmed}
                        onChange={props.toggleConfirm}
                /> Confirmed
            </label>
            <button onClick={props.toggleEdit}>
                {props.isEditing ? "save" : "edit"}
            </button>
            <button onClick={props.handleRemove}>remove</button>
        </li>
   );
}

export default Guest;