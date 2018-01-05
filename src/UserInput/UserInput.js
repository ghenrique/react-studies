import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <input onChange={props.change} type="text"/>
            <button onClick={props.reset}>Return to default</button>
        </div>
    );
}

export default userInput