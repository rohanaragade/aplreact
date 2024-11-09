import React, { useState } from 'react'

const UsestateTime = () => {
    let d = new Date().toLocaleTimeString();
    const [time,settime] = useState(d);
  return (
    <div>
        <h1>{time}</h1>
        <button onClick={()=>{
            d = new Date().toLocaleTimeString();
            settime(d);
        }}>Click here</button>
    </div>
  )
}

export default UsestateTime