import React, { useState } from 'react'
import { Rating, Typography } from '@mui/material';

const Ratings = () => {
    const [rating, setRating] = useState(2);
    return (
        <div>
            <Typography variant="h6">Rating: {rating}</Typography>
            <Rating value={rating} onChange={(event, newValue) => setRating(newValue)} />
        </div>
    )
}

export default Ratings