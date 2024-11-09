import React, { useState } from 'react'
import { Tabs, Tab, Box } from '@mui/material';

const Tabss = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
        {value === 0 && <Box p={3}>in tab 1</Box>}
        {value === 1 && <Box p={3}>in tab 2</Box>}
        {value === 2 && <Box p={3}>in tab 3</Box>}
      </Box>
    </div>
  )
}

export default Tabss