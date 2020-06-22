import React from 'react';

import useCounter from './hooks/useCounter';

function CounterOne() {
    const [count, increment, decrement, reset] = useCounter(10, 10);
    return (
        <div>
            <h3>Count - {count}</h3>
            <button onClick={increment}>INCREMENT</button>
            <button onClick={decrement}>DECREMENT</button>
            <button onClick={reset}>RESET</button>
        </div>
    )
}

export default CounterOne;
