console.log("welcome")

const p1 = {
    score: 0,
    button: document.querySelector("#p1b"),
    display: document.querySelector("#p1s")
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2b"),
    display: document.querySelector("#p2s")
}



// const p1Display = document.querySelector("#p1s")
// const p2Display = document.querySelector("#p2s")
// const p1b = document.querySelector("#p1b")
// const p2b = document.querySelector("#p2b")
// let p1s = 0
// let p2s = 0

const select = document.querySelector("#selectWin")
const reset = document.querySelector("#reset")
let winnerScore = 3
let gameOver = false


select.addEventListener("change",(e)=>{
    resetGame()
    winnerScore = parseInt(select.value)
    console.log(winnerScore)
})

function updateScores(player,opponent){
    if(!gameOver){
        player.score += 1
        if(player.score >= winnerScore){
            gameOver = true
            player.display.classList.add("has-text-success")
            opponent.display.classList.add("has-text-danger")
            player.button.disabled= true
            opponent.button.disabled= true
        }
        player.display.innerText = player.score
    }
}

p1.button.addEventListener("click",()=>{
    updateScores(p1,p2)
})

p2.button.addEventListener("click",()=>{
    updateScores(p2,p1)
})

reset.addEventListener("click",resetGame)



function resetGame(){
    gameOver = false

    for(let p of [p1,p2]){
        p.score = 0
        p.display.innerText = p.score
        p.display.classList.remove("has-text-success","has-text-danger")
        p.button.disabled = false
    }
    // p1.score = 0
    // p2.score = 0

    // p1.display.innerText = p1.score
    // p2.display.innerText = p2.score 

    // p1.display.classList.remove("has-text-success","has-text-danger")
    // p2.display.classList.remove("has-text-success","has-text-danger")

    // p1.button.disabled= false
    // p2.button.disabled= false
}