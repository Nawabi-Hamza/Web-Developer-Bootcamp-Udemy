import React from 'react'
import Box from './Box'
import { useState } from 'react'

function BoxGrid( ) {
    const numberOfBoxes = 5;
    const [boxes,setBoxes] = useState(new Array(numberOfBoxes).fill(true))

    

    const reset = ()=>{
        setBoxes(new Array(numberOfBoxes).fill(false))
    }
    const toggleBox = (idx)=>{
        setBoxes((oldBoxes)=>{ 
        return oldBoxes.map((value,i)=>{
                if(i===idx){
                    return !value
                }else{
                    return value
                }
            })
        })
    }
  return (
    <div className='BoxGrid'>
        {boxes.map((b,idx)=>(
            <Box key={idx} isActive={b} toggle={()=>toggleBox(idx)} />
        ))}
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default BoxGrid