import React, { useState } from 'react'

function HookCounterTwo() {
    const initialState = 0;
    const [count, setCount] = useState(initialState);

    const incrementByFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevState => prevState + 1);
        }
    }

    return (
        <div>
            <h3>Count: {count}</h3>
            <br />
            <button onClick={() => setCount(initialState)}>RESET</button>
            <button onClick={() => setCount(prevState => prevState + 1)}>INCREMENT</button>
            <button onClick={() => setCount(prevState => prevState - 1)}>DECREMENT</button>
            <button onClick={incrementByFive}>INCREMENT 5</button>
        </div>
    );
}

export default HookCounterTwo;
