/**
 * React.memo(component) prevents unnecessary rendering if it's props are not changed
 * But Every re-rendering function reference will be created newly
 * which treats as new props to __memo__ 
 * inorder to prevent unnecessary renders __useCallBack__ comes into picture
 * which caches functions only changes when it's dependencies are changed
 */

import React, { useState, useCallback } from 'react';

import Title from './Title';
import Count from './Count';
import Button from './Button';



function ParentComponent() {
    const [age, setAge] = useState(20);
    const [salary, setSalary] = useState(60000);

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000);
    }, [salary]);

    return (
        <div>
            <Title />
            <Count text="Age" value={age} />
            <Button text="Age Button" clicked={incrementAge}>increment_AGE</Button>
            <Count text="Salary" value={salary} />
            <Button text="Salary Button" clicked={incrementSalary}>increment_SALARY</Button>
        </div>
    )
}

export default ParentComponent;
