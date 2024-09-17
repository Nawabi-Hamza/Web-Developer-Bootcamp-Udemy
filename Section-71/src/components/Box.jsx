import React from 'react'
import   Box  from '@mui/material/Box'
function BoxDemo() {
  return (
    <Box sx={{
        width:300,
        height:300,
        backgroundColor:'primary.dark',
        "&:hover":{
            backgroundColor:"primary.main",
            opacity:[.9,.8,.7],
        }
    }} 
    ></Box>
  )
}

export default BoxDemo