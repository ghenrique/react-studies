import React from 'react';

const userOutput = (props) => {
    return(
        <div style={props.style}>
            <p>{props.username}</p>
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
    );
}

export default userOutput