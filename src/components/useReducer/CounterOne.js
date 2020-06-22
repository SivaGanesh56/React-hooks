/**
 * Reducers Fundamentals
 */

import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment1':
            return { ...state, firstCounter: state.firstCounter + action.value };
        case 'decrement1':
            return { ...state, firstCounter: state.firstCounter - action.value };
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value };
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h3>firstCounter : {count.firstCounter}</h3>
            <h3>secondCounter : {count.secondCounter} </h3>
            <button onClick={() => dispatch({ type: 'increment1', value: 1 })}>INCREMENT1</button>
            <button onClick={() => dispatch({ type: 'decrement1', value: 1 })}>DECREMENT1</button>
            <button onClick={() => dispatch({ type: 'increment1', value: 5 })}>INCREMENT1_BY_5</button>
            <button onClick={() => dispatch({ type: 'decrement1', value: 5 })}>DECREMENT1_BY_5</button>
            <br />
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>INCREMENT2</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>DECREMENT2</button>
            <br />
            <button onClick={() => dispatch({ type: 'reset' })}>RESET</button>
        </div>
    )
}

export default CounterOne;
