/**
 * Multiple Reducers
 */

import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
    return (
        <div>
            <h3>FirstCounter : {count} </h3>
            <button onClick={() => dispatch('increment')}>INCREMENT</button>
            <button onClick={() => dispatch('decrement')}>DECREMENT</button>
            <button onClick={() => dispatch('reset')}>RESET</button>
            <br />
            <h3>SecondCounter : {countTwo} </h3>
            <button onClick={() => dispatchTwo('increment')}>INCREMENT</button>
            <button onClick={() => dispatchTwo('decrement')}>DECREMENT</button>
            <button onClick={() => dispatchTwo('reset')}>RESET</button>
        </div>
    )
}

export default CounterTwo;
