import React, { useState, useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('Mouse Event');
        setX(e.clientX);
        setY(e.clientY);
    }

    /*
    * useEffect re-renders based on it's second parameter.
    * if it is empty array [] it will mounted once
    * if it is not specified it will mount every time
    * To cleanup like unMount it return a function which do cleanup workn like removing event Listeners
     */
    useEffect(() => {
        console.log('Effect...');
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            console.log('Remove Event');
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, [])

    return (
        <div>
            X- {x} y- {y}
        </div>
    )
}

export default HookMouse;
