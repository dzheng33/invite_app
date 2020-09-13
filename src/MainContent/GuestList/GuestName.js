import React from 'react';

const GuestName = (props) => {

    if(props.isEditing) {
        return(<input type="text"
                      value={props.name}  
                      onChange={props.handleNameEdits}             
              />);
    }else {
        return <span>{props.name}</span>;
    }
   
}

export default GuestName;