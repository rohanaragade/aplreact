import React, { useState } from 'react'

const Events = () => {
    const[color,setcolor] = useState("green");
    const[text,settext] = useState("change bg");
  return (
    <>
    <div style={{backgroundColor:color}}>
        <button onClick={()=>{
            setcolor("pink");
            settext("Color changed");
        }}
         onDoubleClick={()=>{
            setcolor("green");
            settext("change bg");
        }} className='btn btn-danger'>{text}</button>
    </div>
    </>
  )
}

export default Events