const jokes = require("give-me-a-joke")
const color = require("colors")
const figlet = require("figlet")


jokes.getRandomDadJoke((joke)=>{
    // const highlight = color.black(color.bgCyan(joke))
    const highlight = color.italic(color.bgGray(joke))
    console.log(joke.bgGray)
    console.log(highlight)
    // console.log(color.red("Joke of the day:"))
})

// console.log(jokes)
// console.log(color)

figlet("HELLO WORLD",(err,data)=>{
    if(err){
        console.log("Something went wrong")
        console.log(err)
    }
    console.log(data.blue)
})