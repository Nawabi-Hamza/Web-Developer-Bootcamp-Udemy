

let name = "Hamza Nawabi";
console.log(name)
console.log(name[0])

let animal = "Dumbo Octopus"
console.log(...animal)

console.log(animal.length)
// concatanation
console.log("lol"+"lol")
console.log('2'+3)
let year = '1999';
console.log(year + 1)

// String Methods
console.log("-------------------------")
// Length of text
console.log("hello".length)
// uppercase
let msg = "Leave me alone right now I hate you plz";
console.log(msg.toUpperCase)
console.log(msg.toUpperCase())
console.log(msg)
// trim the text
let spaceMsg = "              space a   lot             ";
console.log(spaceMsg)
console.log(spaceMsg.trim())
// Using multi string function 
console.log(spaceMsg.toUpperCase().trim())
// search for a specific 
console.log(msg.search("L"))
console.log(msg.indexOf("a"))
console.log(msg.indexOf("$"))
// slice
console.log(msg.slice(0,5))
console.log(msg.slice(5,8))
// split
console.log(msg.split(" ")[1])
// replace
console.log(msg.replace("Leave", "Don't Leave"))



// --Template Literals
let product = 'Artichoke'
let price = 3.99
price = 2.25
let qty = 5
console.log("You bought "+ qty + " " + product +". Total is: "+ price*qty)
console.log(`Hello ${1+2+9}`)
console.log(`You bought ${qty} ${product}`)