function isEven(num){
    if(num % 2 == 0){
        console.log("even")
    }
}


isEven(14)
// const a = prompt("your name")
if(true && true){
    console.log("&& and operator")
}

if(false || true){
    console.log("|| or oprator")
}

if(!null){
    console.log("! not oprator")
}

const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
planets.shift() // remove from begining
planets.unshift("Sun") // add from begining
planets.push("Saturn") // add at the end
planets.unshift("Mercury") // add at first 


console.log(planets)


