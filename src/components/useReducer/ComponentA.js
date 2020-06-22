import React, { useContext } from 'react';

import { countContext } from './SampleApp';

function ComponentA() {
    const counter = useContext(countContext);
    return (
        <div>
            ComponentA:
            <button onClick={() => counter.dispatch('increment')}>INCREMENT</button>
            <button onClick={() => counter.dispatch('decrement')}>DECREMENT</button>
            <button onClick={() => counter.dispatch('reset')}>RESET</button>
        </div>
    )
}

export default ComponentA;
