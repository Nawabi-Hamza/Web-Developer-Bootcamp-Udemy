import React, { useEffect, useState } from 'react'

function Effects() {
    const [ count,setCount ] = useState(0)
    const [ name,setName ] = useState("")


    useEffect(function myUseEffect(){
        console.log("MY USE EFFECT WAS CALLED")
    },[name])

    const increment = ()=>{
        console.log("Increment Count:"+count)
        setCount(count + 1)
    }
    const decrement = ()=>{
        console.log("Decrement Count:"+count)
        setCount(count + 1)
    }

    const handleChange = (e)=>{
        setName(e.target.value)
    }
  return (
    <div>
        <h1>Effects</h1>
        <p>This is a paragraph of text.</p>
        <p>Count: {count}</p>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button><br />
        <h3>Name: { name }</h3>
        <input type="text" value={name} onChange={handleChange} />
    </div>
  )
}

export default Effects