
// ============Using call back function==========
// function delayChangeBackground(color, delay, nextDo) {
//   setTimeout(() => {
//     document.body.style.backgroundColor = color;
//     nextDo && nextDo();
//   }, delay);
// }

// delayChangeBackground("blue", 2000, () => {
//   delayChangeBackground("red", 2000, () => {
//     delayChangeBackground("green", 2000, () => {
//       delayChangeBackground("yellow", 2000, () => {
//         delayChangeBackground("orange", 2000, () => {
//           delayChangeBackground("pink", 2000, () => {
//             delayChangeBackground("purple", 2000, () => {
//               console.log("FINISHED !!!!");
//             });
//           });
//         });
//       });
//     });
//   });
// });

// ============Using promise==========
// const fakeRequestPromise = (url)=>{
//     return new Promise((resolve,reject)=>{
//         const delay = Math.floor(Math.random() * 4500) + 500
//         setTimeout(()=>{
//             if(delay > 4000){
//                 reject("Connection timeout :(")
//             }else{
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         },delay)
//     })
// }



// const request = fakeRequestPromise("yelp.com/api/coffe");
// request
//   .then((r) => {
//     console.log(r)
//     console.log("IT Worked !");
//   })
//   .catch((e) => {
//     console.log(e)
//     console.log("OH NO ....");
//   });


// const callBack = (name,age,next)=>{
//     console.log(`Hello ${name} you are ${age} years old`)
//     next()
// }

// callBack("Hamza",22,()=>{
//     console.log("Printed")
// })



// =========Custom Promise=========
// const changeColor = (color,delay)=>{
//    return new Promise((resolve,reject)=>{
//     if(!color||!delay){
//         reject("Please provide a color OR delay".toUpperCase())
//     }
//     setTimeout(()=>{
//         document.body.style.backgroundColor = color
//         resolve()
//     },delay)
//    })
// }

// changeColor("red",1000)
// .then(()=> changeColor("blue",1000))
// .then(()=> changeColor("yellow",1000))
// .then(()=> changeColor("green",1000))
// .then(()=> changeColor("indigo",1000))
// .then(()=> changeColor("orange",1000))
// .then(()=> changeColor("black",1000))
// .then(()=> changeColor("purple",1000))
// .then(()=> changeColor())
// .catch((error)=> console.warn(error))


// ---------------------Async / Await---------------------
// async function hello(){
// }

// const sing = async ()=>{
//     throw "OU OH"
//     return "LALALALALA"
// }

// sing()
// .then((data)=>{
//     console.log("PROMISE RESOLVE WITH : "+data)
// })


// function Hello(){
//     setTimeout(()=>{
//     },2000)
//     const text = "Hello , How are you";
//     return text
// }

// function chackAwait(delay){
//     console.log("BEFORE")
//     setTimeout(async()=>{
//         try{
//             const res = Hello()
//             console.log(res)
//             console.log("AFTER")
//         }catch(err){
//             console.log("ERROR : "+err)
//         }
//     },delay)
// }

// chackAwait(2000)


const changeColor = (color,delay)=>{
   return new Promise((resolve,reject)=>{
    if(!color||!delay){
        reject("Please provide a color OR delay".toUpperCase())
    }
    setTimeout(()=>{
        document.body.style.backgroundColor = color
        resolve()
    },delay)
   })
}

async function rainbow(){
    console.log("START")
     await changeColor("red",2000)
    console.log("1")
     await changeColor("blue",2000)
    console.log("2")
     await changeColor("orange",2000)
    console.log("3")
     await changeColor("yellow",2000)
    console.log("4")
     await changeColor("gray",2000)
    console.log("5")
     await changeColor("purple",2000)
    console.log("FINISHED !")
    return "FUNCTION ASYNC/AWAIT COMPLETED SUCCESSFULY !"
}

rainbow()
.then( data => console.log(data))



function s(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("SUCCESS REACHED TO YOUR DATA")
        },2000)
    })
}
function f(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("FAILED REACH TO DATA")
        },2000)
    })
}

async function check(){
    try{
        const data1 = await f()
        console.log(data1)
        const data = await s()
        console.log(data)
    }catch(err){
        console.error("ERROR : "+err)
    }
}
check()