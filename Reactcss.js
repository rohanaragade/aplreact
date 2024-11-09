import React from 'react'

const Reactcss = () => {
    const myStyle = {
        color: "yellow",
        backgroundColor: "grey",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };
    return (
        <div>
            <h1 style={myStyle}>Hello Style!</h1>
        </div>
    )
}

export default Reactcss
