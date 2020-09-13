import React from 'react';

import GuestInputForm from './GuestInputForm';

const Header = (props) => {
    return(
        <header>
        <h1>Invitees</h1>
        <p>Invitation App</p>
        <GuestInputForm 
         handleSubmit={props.handleSubmit}
         pendingGuest={props.pendingGuest} 
         handleName={props.handleName}
        />
      </header>
    );
}

export default Header;