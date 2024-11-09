import React, { useState } from 'react'

const Digitalclock = () => {
    let d = new Date().toLocaleTimeString();
    const [time, settime] = useState(d);
    const alwaysondisplay = () => {
        let d = new Date().toLocaleTimeString();
        settime(d);
    }
    setInterval(alwaysondisplay, 1000);
    
    return (
        <div>
            <h1>{time}</h1>
        </div>
    )
}

export default Digitalclock