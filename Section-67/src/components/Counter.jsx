import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    const addOne = ()=>{
        setCount(count + 1)
    }
    const setToTen = ()=>{
        setCount(10)
    }
    const addThree = ()=>{
        // setCount(count + 3)
        // console.log(count)
        setCount(currentCount => currentCount + 1)
        setCount(currentCount => currentCount + 1)
        setCount(currentCount => currentCount + 1)
        // console.log(count)
        // setCount(count + 1)
        // console.log(count)
        // setCount(count + 1)
    }
    
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={addOne}>+1</button>
        <button onClick={addThree}>+3</button>
        <button onClick={setToTen}>Set to 10</button>
    </div>
  )
}

export default Counter