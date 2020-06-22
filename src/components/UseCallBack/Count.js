import React from 'react'

function Count({ value, text }) {
    console.log(`Rendering ${text}`)
    return (
        <div>
            {text} : {value}
        </div>
    )
}

export default React.memo(Count);
