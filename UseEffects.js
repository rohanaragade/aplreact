import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const UseEffects = () => {
    const [title,settitle] = useState(0);

    useEffect(()=>{
        document.title = `rohan clicked me ${title} times`
    });
  return (
    <div><br/>
        <Button variant='contained' color='error' startIcon={<SendIcon />} onClick={()=>{
            settitle(title+1);
        }}>Click me Rohan {title}</Button>
    </div>
  )
}

export default UseEffects;