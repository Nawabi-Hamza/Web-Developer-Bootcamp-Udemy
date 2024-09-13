import React, { useState } from 'react'

function ScoreKeep({ numPlayers = 3 , target = 5 }) {
   const [ scores,setScores ] = useState(new Array(numPlayers).fill(0))
//    const [ winner,setWinner ] = useState(false)
//    const incrementScore = (idx)=>{
//         setScores(prevScores => {
//             const copy = [...prevScores]
//             copy[idx] += 1
//             if(copy[idx] >= target){
//                 setWinner(idx)
//             }
//             return copy
//         })
//    }

    const incrementScore = (idx)=>{
        setScores(prevScores => {
            return prevScores.map((score,i)=>{
                if(i===idx) return score+1;
                else return score
        })})
    }
    const reset = ()=>{
        setScores(new Array(numPlayers).fill(0))
    }
  return (
    <div>
        <h1>Score Keeper</h1>
        <ul>
            {scores.map((score,idx)=>{
                return <li key={idx}>
                        Player {idx + 1} : {score} &nbsp; &nbsp;
                        <button onClick={()=>incrementScore(idx)}>+1</button> &nbsp; &nbsp;
                        {score >= target && "winner"}
                    </li>
            })}
        </ul>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default ScoreKeep