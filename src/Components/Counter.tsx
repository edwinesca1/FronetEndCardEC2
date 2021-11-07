import React, { useState } from 'react'

export const Counter: React.FC<any> = ({val, factor}) => {

    const [counter, setCounter] = useState(val);

    const increase = () => {
        setCounter(counter + factor);
    }

    const decrease = () => {
        setCounter(counter - factor);
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <hr/>

            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    );
};
