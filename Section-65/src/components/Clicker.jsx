import React from 'react'


function handleClick(){
    console.log("CLICKED THE BUTTON")
}
function handleHover(){
    console.log("Hover THE BUTTON")
}
// function handleAlert(msg){
//     alert(msg)
// }
export default function Clicker({ message,buttonText}) {
    const handleClick = ()=>{
        alert(message)
    }
  return (
    <div>
        {/* <p>Click the button</p>
        <button onClick={handleClick}>Click</button>
        <p>Hover the button</p>
        <button onMouseOver={handleHover}>Click</button> */}
        {/* <button onClick={() => handleAlert(message)}>{buttonText}</button> */}
        <button onClick={handleClick}>{buttonText}</button>
    </div>
  )
}

