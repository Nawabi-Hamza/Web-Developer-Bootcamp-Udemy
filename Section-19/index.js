console.log("welcome ")



for(let i=25 ; i>=0 ; i -= 5){
    console.log(i)
}
// for(;;){
//     console.log("welcoem")
// }

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

const shortPeople = people.slice(0,3)
for(let i=0 ; i < shortPeople.length ; i++){
    console.log(shortPeople[i].toUpperCase())
}


for(let i=shortPeople.length-1 ; i>=0 ; i--)
{
    console.log(shortPeople[i])
}


// nesting loop
for(let i=0 ; i<10 ; i++){
    console.log("i is :",i)
    for(let j=0 ; j<10 ; j++){
        console.log("   J is :",j)
    }
}

const seatingChart = [
    ['Kristen','Erik',],
    ['Sandra','Sally'],
    ['Scooby','Shaggy','Fred'],
    ['Kevin','Jack','Sakura','Anonie']
    
]

let totalS = ""
for(let outer=0 ; outer<seatingChart.length ; outer ++){
    for(let inner=0 ; inner<seatingChart[outer].length ;inner++){
        totalS += seatingChart[outer][inner]+" "
        console.log(seatingChart[outer][inner])
    }
}
console.log(totalS)

// // while loop
let i=0
while(i<10){
    console.log(i)
    i++
}   
// // do while loop
// let j=0
// do{
//     console.log(j)                   
//     j++
// }while(j<10)


    
    const sub = ['Kevin','Jack','Sakura','Anonie']
    for(const key in sub){
        console.log(sub[key])
    }

    console.log("----------------------------------------")

    for(let key in seatingChart){
        // console.log(seatingChart[key])
        for(let key1 in seatingChart[key]){
            console.log(seatingChart[key][key1])
        }
    }

    console.log("----------------------------------------")

    for(let ch of seatingChart){
        for(let ch1 of ch){
            console.log(ch1)
        }
        // console.log(ch)
    }

    const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
for(let chain of numbers){
    console.log(chain*chain)
}


const test = {
    a :80,
    b :90,
    c :30,
    d :34
}
for(let key in test){
    console.log(key,": ",test[key])
}
console.log("--------------------------")

const  {data1,data }  = require('./class');
console.log(data1)
console.log(data)