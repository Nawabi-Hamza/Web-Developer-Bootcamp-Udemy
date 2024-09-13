import React, { useState } from 'react'

function generateGameBoard(){
    console.log("MAKEING THE INITIAL GAME BOARD")
    return Array(5000)
}

function Dumbo() {
    const [gameBoard, setGameBoard] = useState(generateGameBoard);
  return (
    <div>
        <h1>Game Board</h1>
        <button onClick={()=> setGameBoard("Hello Bro !")}>Click me to change state</button>
    </div>
  )
}

export default Dumbo