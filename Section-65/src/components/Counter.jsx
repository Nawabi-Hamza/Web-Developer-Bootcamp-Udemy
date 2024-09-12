import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(5)
    const changeNum = ()=>{
        setCount( count + 1 )
    } 
    console.log(count)
    return(
        <div>
            <p>The count is : {count}</p>
            <button onClick={changeNum}>Increment</button>
        </div>
    )
}   