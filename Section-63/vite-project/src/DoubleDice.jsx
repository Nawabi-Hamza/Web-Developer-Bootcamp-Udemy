import React from 'react'

function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const isWinner = num1 !== num2;

    return (
        <div className='DoubleDice' style={ isWinner ? StyleSheet.win:StyleSheet.lose }>
            {isWinner ? <h2>You Win !</h2>:<h3>You Lose :(</h3>}
            <p>Player 1 rolled a {num1}</p>
            <p>Player 2 rolled a {num2}</p>
        </div>
    )    
}

const StyleSheet = {
    win:{
        color:"magenta"
    },
    lose: {
        color:"red"
    }
}

export default DoubleDice