/**
 * useMemo() is used for performance optimization 
 * only invokes function if it's dependents are changed
 * Diff b/w __useMemo__ and __useCallBack__ is useMemo() caches function
 * invokes it and finally gives result of function
 */
import React, { useState, useMemo } from 'react';

function Counter() {
    const [one, setOne] = useState(0);
    const [two, setTwo] = useState(0);

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++;
        return one % 2 === 0;
    }, [one]);

    return (
        <div>
            {isEven ? 'Even' : 'Odd'}
            <br />
            <button onClick={() => setOne(one + 1)}>Count One = {one}</button>
            <button onClick={() => setTwo(two + 1)}>Count Two = {two}</button>
        </div>
    )
}

export default Counter;
