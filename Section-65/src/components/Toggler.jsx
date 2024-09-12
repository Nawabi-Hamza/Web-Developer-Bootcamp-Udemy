import React,{ useState } from 'react'
import "./Toggler.css"

function Toggler() {
    const [isHappy,setIsHappy] = useState(true)
    const [count,setCount] = useState(5)
    const toggleIsHappy = ()=>{
        setIsHappy(!isHappy)
    } 
    const changeNum = ()=>{
        setCount(count + 2)
    }
  return (
    <div>
        <p className='Toggler' onClick={toggleIsHappy}>
            {isHappy ? "😀":"😥"}
        </p>
        <p className='Toggler' >The count is: {count}</p>
        <button onClick={changeNum}>Increment</button>
    </div>
  )
}

export default Toggler