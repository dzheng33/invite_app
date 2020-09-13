import React from 'react';

import ConfirmedFilter from './ConfirmedFilter';
import Counter from './Counter';
import GuestList from './GuestList/GuestList';

const Main = (props) => {
    return(
        <div className="main">

        <ConfirmedFilter 
         toggleFilter={props.toggleFilter}
         isFiltered={props.isFiltered}
        />

        <Counter 
          totalGuest={props.totalGuest}
          totalAttending={props.totalAttending}
        />

        <GuestList guests={props.guests} 
                   toggleConfirm={props.toggleConfirm}
                   toggleEdit={props.toggleEdit}
                   handleNameEdits={props.handleNameEdits}
                   isFiltered={props.isFiltered}
                   handleRemove={props.handleRemove}
                   pendingGuest={props.pendingGuest}

        />
      </div>
    );
}

export default Main;