import React, { useEffect, useState } from 'react'
import TextField from "@mui/material/TextField"
import { Box, Slider } from '@mui/material'
function Forms() {
    const [ field, setField ] = useState("")
    const [ volume, setVolume ] = useState(50)

    const handleChange = (evt)=>{
        setField(evt.target.value)
    } 
    const changeVolume = (e,newVal)=>{
        setVolume(newVal)
    }
  return (
    <Box sx={{ border:"1px solid black", p:3}}>
        <h3>Name is: {field}</h3>
        <TextField id="outlined-basic" placeholder='Puppy name' label="Username" variant='outlined' onChange={handleChange} />
        <h3>Volume {volume}</h3>
        <Slider aria-label='Volume' value={volume} onChange={changeVolume} />
    </Box>
  )
}

export default Forms