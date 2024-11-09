import React,{useState} from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

const Snackbars = () => {
    const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <div>
            <Button onClick={handleClick} variant='contained'>Open Snackbar</Button>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="This is snakbar note"
            />
        </div>
    )
}

export default Snackbars