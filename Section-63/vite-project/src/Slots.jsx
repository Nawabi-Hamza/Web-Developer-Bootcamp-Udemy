import React from 'react'

function Slots({ val1,val2,val3 }) {
    const isWinner = val1 === val2 && val1 === val3 ;
  return (
    <div>
        <h2 style={{color: isWinner?"magenta":"red"}}>{isWinner? "You Win !":"You Lose :("}</h2>
        <h1>{val1 +" "+ val2 +" "+ val3}</h1>
        {isWinner && <h4>Congrats...</h4>}
    </div>
  )
}

export default Slots