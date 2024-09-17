import { Rating } from '@mui/material';
import React, { useState } from 'react'

function RatingDemo() {
    const [ value,setValue ] = useState(3)
    console.log(value)
  return (
    <div>
        <h3>Rating Demo - Current Score: {value}</h3>
        <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            />
    </div>
  )
}

export default RatingDemo