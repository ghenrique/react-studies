import React from 'react';

const userInput = (props) => {

    const styles = {
        border: '1px solid red'
    };

    return (
        <div>
            <input
                style={styles}
                onChange={props.change}
                type="text" />
            <button onClick={props.reset}>Return to default</button>
        </div>
    );
}

export default userInput