import React, { useState } from 'react'

const Usestateobj = () => {
    const [car,setcar] = useState(
        {
            name: "fortuner",
            brand:"toyota",
            price: 5000000
        }
    );
    const updation = () =>{
        setcar((prevesstate)=>{
            return {...prevesstate,name:"LC"}
        });
    }

  return (
    <div>
        <h1>Its {car.name} manufuctured by {car.brand} which cost is {car.price}</h1>
        <button onClick={updation}>Click Here For LC</button>
    </div>
  )
}

export default Usestateobj