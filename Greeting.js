import React from 'react';

function Greeting({ name, time }) {
    return (
        <div>
            <p>
                Hello {name}!!
            </p>
            <p>
                The current time is {time}
            </p>
        </div>
    );
}

export default Greeting;