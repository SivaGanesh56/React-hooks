import React from 'react'

function Button({ clicked, text, children }) {
    console.log(`Rendering ${text}`)
    return (
        <div>
            <button onClick={clicked}>
                {children}
            </button>
        </div>
    )
}

export default React.memo(Button);