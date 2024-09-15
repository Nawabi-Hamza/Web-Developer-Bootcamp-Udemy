import React from 'react'
import { useState } from 'react'
import Dice from './Dice'
import { getRolls } from './utils'
import Button from './components/Button'

function LuckyN({ title="Lucky Game",numDice=2,winCheck }) {

    const [ dice,setDice ] = useState(getRolls(numDice))
    // console.log(getRolls(4))
    
    function rollDice(){
        setDice(getRolls(numDice))
    }
    
    const isWinner = winCheck(dice) ;
  return (
    <>
        <h1>{title}  { isWinner && <mark>You Win !</mark>}</h1>
        
        <Dice dice={dice} color="teal"/>
        <Button clickFunc={rollDice} disabled={isWinner && true} label="Re-Roll" />
        {isWinner && <Button clickFunc={rollDice} label="Reset" /> }
        {/* <button onClick={rollDice} disabled={isWinner && true}>Re-Roll Dice</button> */}
        
    </>
  )
}

export default LuckyN