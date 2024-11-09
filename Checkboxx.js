import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Checkboxx = () => {
    return (
        <div>
            <FormControlLabel control={<Checkbox defaultChecked />} label="python" />
            <FormControlLabel required control={<Checkbox />} label="react" />
            
        </div>
    )
}

export default Checkboxx