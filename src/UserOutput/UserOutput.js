import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>Username: {props.username}</p>
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
    );
}

export default userOutput;