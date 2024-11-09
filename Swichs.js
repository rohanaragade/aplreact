import React,{useState} from 'react'
import { Switch, Typography } from '@mui/material';

const Swichs = () => {
    const [isOnn, setIsOff] = useState(false);

    const handleToggle = () => {
        setIsOff( !isOnn);
    };

    return (
        <div>
            <Typography variant="h6">Theme: {isOnn ? 'ON' : 'OFF'}</Typography>
            <Switch checked={isOnn} onChange={handleToggle} color="primary" />
        </div>
    )
}

export default Swichs