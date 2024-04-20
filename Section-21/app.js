// console.log("BEFORE")

// try{
//     hello.toUpperCase()
// }catch{
//     console.log("Error !")
// }

// console.log("AFTER")

function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(3))
    }catch (e){
        // console.log(e.message)
        console.log("Please pass a string next time")
    }
}
yell(34)
yell("Hamza ")