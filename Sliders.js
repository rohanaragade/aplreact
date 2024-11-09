import React from 'react'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

const Sliders = () => {
    return (
        <Box sx={{ width: 300,display:"block",margin:'auto'}}>
            <Slider
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
            />
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        </Box>
    )
}

export default Sliders