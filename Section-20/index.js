// function greet(firstname){
//     console.log(`firstname is :${firstname}`)
// }
// greet("hamza")


function greet(firstName,lastName="Nawabi"){
    console.log(`Hey there , ${firstName} ${lastName}`)
}

greet("Hamza")


repeat("Hi",8)

function repeat(repeatText,repeatTime){
    let result = ''
    for(let i=0;i<repeatTime ; i++){
        result += repeatText
    }
    console.log(result)
}


function lastElement(arr){
    if(arr.length ==0) return null;
    const lastArray = arr.length-1
    return arr[lastArray]
}
const a = lastElement([1,7])
console.log(a)

const arr = [1,2,3,4]
const sumArr = arr.reduce((pre,next)=>{
    return pre+next
})

console.log(sumArr)


function capitalize(str){
    let result = '';
    let newStr = [...str]
    newStr[0] = str[0].toUpperCase()
    for(key of newStr){
        result += key
    }
    return result
}

console.log(capitalize("mazar"))

function sumArray(totalNums){
    let sum = 0
    for(let i=0; i<totalNums.length ; i++){
        sum += totalNums[i]
    }
    console.log(`Average is: ${sum/totalNums.length}`)
    return sum;
}
console.log(sumArray([30,40,80]))
