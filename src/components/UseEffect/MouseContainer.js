import React, { useState } from 'react';
import HookMouse from './HookMouse';

function MouseContainer() {
    const [show, setShow] = useState(true);

    return (
        <div>
            <button onClick={() => setShow(!show)} >Toogle Display</button>
            {show ? <HookMouse /> : null}
        </div>
    )
}

export default MouseContainer;
