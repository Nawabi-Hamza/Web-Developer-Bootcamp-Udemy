import React from 'react'
import Die from './Die'
import "./Dice.css"
function Dice({ dice,color }) {
  return (
    <section className='Dice'>
        {dice.map((v,i)=>(
            <Die val={v} key={i} color={color} />
        ))}
    </section>
  ) 
}

export default Dice