import React from 'react'

function ScoreKeepter() {
    const [score, setScore] = React.useState({ player1: 0, player2: 0 })

    const increaseP1Score = ()=>{
        setScore(oldScore => ({ ...oldScore, player1: oldScore.player1 + 1 }))
    }

    const increaseP2Score = ()=>{
        const newScore = { ...score, player2: score.player2 + 1 }
        setScore(newScore)
    }
  return (
    <div>
        <p>Player 1: {score.player1}</p>
        <p>Player 2: {score.player2}</p>
        <button onClick={increaseP1Score}>+1 Player 1</button>
        <button onClick={increaseP2Score}>+1 Player 2</button>
    </div>
  )
}

export default ScoreKeepter