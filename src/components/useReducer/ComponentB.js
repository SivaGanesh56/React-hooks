import React, { useContext } from 'react';

import { countContext } from './SampleApp';

function ComponentB() {
    const counter = useContext(countContext);
    return (
        <div>
            ComponentB:
            <button onClick={() => counter.dispatch('increment')}>INCREMENT</button>
            <button onClick={() => counter.dispatch('decrement')}>DECREMENT</button>
            <button onClick={() => counter.dispatch('reset')}>RESET</button>
        </div>
    )
}

export default ComponentB;
