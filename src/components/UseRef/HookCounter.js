import React, { useState, useEffect } from 'react';

function HookCounter() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useEffect();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        };
    }, [])

    return (
        <div>
            Hook Counter -
        </div>
    )
}

export default HookCounter;
