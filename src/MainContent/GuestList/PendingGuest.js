import React from 'react';



const PendingGuest = (props) => {
    if(props.name){
        return(
            <li className="pending">
                <span>
                {props.name}
                </span>
            </li>
       );
    }else {
        return null;
    }

}

export default PendingGuest;