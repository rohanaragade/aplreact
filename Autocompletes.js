import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const Autocompletes = () => {
    const options = ['iphone 13', 'iphone 14', 'iphone 15', 'iphone 16'];
  return (
    <div>
         <Autocomplete
      disablePortal
      options={options}
      sx={{ width: 300,display:"block",margin:"auto" }}
      renderInput={(params) => <TextField {...params} label="mobile" />}
    />
    </div>
  )
}

export default Autocompletes