import React, { useReducer } from 'react';

import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';


export const countContext = React.createContext();

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

function SampleApp() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h3>Count : {count}</h3>
            <countContext.Provider value={{ count, dispatch }}>
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </countContext.Provider>
        </div>
    )
}

export default SampleApp;
