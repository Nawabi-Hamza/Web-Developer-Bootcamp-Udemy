import { Button } from '@mui/material'
import React from 'react'
import IconButton from '@mui/material/IconButton'
import AlarmIcon from "@mui/icons-material/Alarm"
import Fingerprint from '@mui/icons-material/Fingerprint';

function Buttons() {
  return (
    <div>
        <Button variant='contained' onClick={()=>alert("hi")}>Click Button</Button>
        <Button variant='text'>Click Button</Button>
        <Button variant='outlined'>Click Button</Button><br />
        <Button variant='outlined' color="success">Click Button</Button>
        <Button variant='outlined' color="error">Click Button</Button>
        <Button variant='outlined' color="secondary">Click Button</Button>
        <br />  
        <IconButton color="secondary" aria-label="add an alarm">
            <AlarmIcon />
        </IconButton>
        <IconButton aria-label="fingerprint" color="secondary">
            <Fingerprint />
      </IconButton>
    </div>
  )
}

export default Buttons