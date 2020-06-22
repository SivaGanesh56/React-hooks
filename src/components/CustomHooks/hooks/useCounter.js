import { useState } from 'react'

function useCounter(initialCount = 0, value) {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + value);
    const decrement = () => setCount(count - value);
    const reset = () => setCount(initialCount);
    return [count, increment, decrement, reset];
}

export default useCounter
