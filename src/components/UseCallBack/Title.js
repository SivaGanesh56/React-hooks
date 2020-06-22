import React from 'react'

function Title() {
    console.log(`Rendering Title`)
    return (
        <div>
            Use CallBack
        </div>
    )
}

export default React.memo(Title);