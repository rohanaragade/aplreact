import React, { useState } from 'react'

const Usestatesimple = () => {
    const [setcolor,updatecolor] = useState("red");
  return (
    <div>
        <h1> my fav color is {setcolor}</h1>
        <button onClick={()=>{
            updatecolor("pink");
        }}>Click Here</button>
    </div>
  )
}

export default Usestatesimple
