


// Function Scope
/* variable visibility the location where a variable is defined dictattes where we have access to that variable */
// let totalEggs = 0;
// function collectEggs(){
//     totalEggs = 6;
// }
// console.log(totalEggs)
// collectEggs();
// console.log(totalEggs)
let bird ="Scarlet Macaw"
function birdWatch(){
     let bird = "Great Blue Heron";
    console.log(bird);
}
birdWatch();
console.log(bird);
// Block scope
let radius = 8
if(radius>0){
    var PI = 3.14159
    let msg = "HIII"
}
console.log(PI)

// Loxical Scope
function bankRobbery(){
    const heroes = ["Spiderman",'Wolverine','Black Panther']
    function cryForHelp(){
        function inner(){
            for(let hero of heroes){
                console.log(`Please help us,  ${hero.toUpperCase()}`)
            }
        }
        inner()
    }
    cryForHelp()
}

bankRobbery()
// Function Expressions
const add = function (x,y){
    return x+y
}
const square = function(num){
    return Math.pow(num,2)
}
console.log(square(3))

console.log("----------------------------")
// Higher Order Functions
// function work with other function 
/** function that operate on/with other functions
 *  they can :
 *      accept other functions as arguments
 *      return a function
 */
let greet = function(){console.log("Hi !")}
greet()

function callTwice(func){
    func();
    func();
}

function callTenTimes(f){
    for(let i=0 ; i<10 ; i++){
        f();
    }
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6)+1
    console.log(roll)
}

callTwice(rollDie)
callTenTimes(rollDie)

console.log("------------------------------------")

function First(){
    console.log("Welcome To first Function !")
    return 0
}
function Second(){
    console.log("It's Second Function !")
    return First()
}

Second()

console.log("------------------------------------")


function makeMysteryFunc(){
    const rand = Math.random();
    if(rand>0.5){
        return function(){
            console.log("CONGRATS ,I AM A GOOD FUNCTION !")
            console.log("YOU WIN A MILLION DOLLARS")
        }
    }else{
       return function(){
           console.log("HAVE A NICE DAY")
           console.log("YOU LOSE !")
           console.log("HAHAHAHHHA !")
       }
    }
}
  
const mystery = makeMysteryFunc()

// console.log(mystery())    
mystery()
console.log("-----------------------------")

/**
 * Method & Function 
 * Methods are functions that are associated with an object
 * 
 * Functions are a set of instructions that perform a task
 * every method is function but every function is not method 
 */

const MathCal = {
    muliply:function(x,y){ return x*y },
    divid:function(x,y){ return x/y },
    square:function(x){ return x*x },
    cube:function(x){ return x*3 }
}
console.log(MathCal.cube(9))
console.log("---------------------------3")


let chooseNumber = 3;

for(let i = 1 ; i<=9 ; i++){
    console.log(`${i} * ${chooseNumber} =`,i * chooseNumber)
}
console.log("--------------------------6")
chooseNumber = 6;
for(let i = 1 ; i<=9 ; i++){
    console.log(`${i} * ${chooseNumber} =`,i * chooseNumber)
}
console.log("--------------------------9")
chooseNumber = 9;
for(let i = 1 ; i<=9 ; i++){
    console.log(`${i} * ${chooseNumber} =`,i * chooseNumber)
}


// for 3(1) = 27 -------> 9
// for 3(2) = 27 -------> 9
//-------------------------
// total for 3 sum( 9+9=18 --> 1+8 --> 9 )
// -->اگر تمام حاصل ضرب ها ره چمع کنیم 135 
// 1+3+5 -> 9
//-------------------------
// for 6(1) = 29 -------> 11 ---------> 2
// for 6(2) = 34 -------> 7
//-------------------------
// total for 6 sum( 2+7=9 ) 
// اگر تمام حاصل ضرب هارا چمع نمایم 
// 270 --> 2+7+0 -> 9
//-------------------------
// for 9(1) = 45 -------> 9
// for 9(2) = 36 -------> 9
//-------------------------
// total for 9 sum( 9+9=18 --> 1+8 --> 9 )
// اگر تمام حاصل ضرب هارا چمع نمایم 
// 405 --> 4+0+5 -> 9
//-------------------------
// sum of all 3,6,9 --------> 135+270+405 = 810 --> 8+1+0 ->9
//================================================================================
// const sumArray = [3,6,9,1,1,1,2,2,2] //this is first number in 3 total=27 2+7=9
// const sumArray = [2,5,8,1,4,7] //this is second number in 3 total=27 2+7=9
// const sumArray = [6,1,1,2,3,3,4,4,5] // this is first number in 6 total=29 2+9=11 1+1=2
// const sumArray = [2,8,4,0,6,2,8,4] // this is second number in 6 total=34 3+4=7
// const sumArray = [9,1,2,3,4,5,6,7,8] // this is first number in 9 total=45 4+5=9
// const sumArray = [8,7,6,5,4,3,2,1] // this is second number in 9 total=36 3+6=9
// const sumArray = [3,6,9,12,15,18,21,24,27] // تمام حاصل ضرب ها 3
// const sumArray = [6,12,18,24,30,36,42,48,54] // تمام حاصل ضرب ها 6
const sumArray = [9,18,27,36,45,54,63,72,81] // تمام حاصل ضرب ها 9

const sum = sumArray.reduce((prev,next)=>{
    return prev + next
})
console.log(`This is your sum: `,sum)
console.log(135+270+405)

const cat = {
    name:"Blue Steele",
    color: "Gray",
    breed:"Scottish fold",
    meow(){
        console.log(`${this.name} says MEOWWWWW`)
    }
}
cat.meow()


const hen ={
    name:'Helen',
    eggCount:0,
    layAnEgg:function(){
        this.eggCount+=1
        return 'EGG'
    }
}
console.log(hen.layAnEgg())
console.log(hen.eggCount)


console.log("---------------------")

