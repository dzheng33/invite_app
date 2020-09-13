import React from 'react';

const GuestInputForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <input 
            type="text" 
            value={props.pendingGuest} 
            placeholder="Invite Someone" 
            onChange={props.handleName}
            />
            <button 
            type="submit" 
            name="submit" 
            value="submit">Submit</button>
        </form>
    );
}

export default GuestInputForm;