console.log("welcome")


function message(){
    alert("your clicked me")
    alert("stop clicking")
}

const btn = document.querySelector("#v2")
// console.dir(btn)
btn.onclick = function()
{
    console.log("You clicked me !")
    console.log("I hope It worked")
}
btn.onmouseenter = function(){
    console.log("You touhed me !")
    console.log("stop touching !")
}


const btn3 = document.querySelector("#v3")

btn3.addEventListener("click",function(){
    alert("Clicked")
})


function twist(){
    console.log("TWIST")
}
function shout(){
    console.log("SHOUT")
}

const tasButton = document.querySelector("#tas")
tasButton.addEventListener("click",twist , { once:true })
tasButton.addEventListener("click",shout)


const btnColor = document.getElementById("btn-color")

btnColor.addEventListener("mousemove",()=>{
    const color = randomColor()
    document.body.style.backgroundColor = color ;
    document.getElementById('rgb').innerText = color ; 
})

const randomColor = ()=>{
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})` ;
}


const buttons = document.querySelectorAll('button')
for(let button of buttons){
    button.addEventListener("click",colorize)
}

const h1 = document.querySelectorAll('h1')
for(let h of h1){
    h.addEventListener("click",colorize)
}

function colorize(){
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}

document.querySelector('.b1')
.addEventListener("click",function(evt){
    console.log(evt)
})


const input = document.querySelector('input');
const car = document.querySelector(".car")
let numLeft = 20;
let numTop = 20;
let jumpNum = 20

car.addEventListener("keydown",function(e){
    // console.log(document.body)
    console.log(e.code)
    // console.log(e.key)
    // console.log(e)
    switch(e.code){
        case 'ArrowUp':
            this.style.top = `${numTop -= jumpNum}px`;
            console.log("UP !"); 
            break;
        case 'ArrowDown':
            this.style.top = `${numTop += jumpNum}px`;
            console.log("DOWN !");
            break;
        case 'ArrowLeft':
            this.style.left = `${numLeft -= jumpNum}px`;
            console.log("LEFT !");
            break;
        case 'ArrowRight':
            this.style.left = `${numLeft += jumpNum}px`;
            console.log("RIGHT !");
            break;
        default:
            console.log("IGNORE !");
    }
    if(numLeft < 40){
        console.log("FAILED !")
        return numLeft = 40
        // return alert("You fail be careful")
    }
    else if(numLeft > document.body.clientWidth-150){
        console.log("FAILED !")
        return numLeft = document.body.clientWidth-150
    }

    if(numTop <40 ) {
        console.log("FAILED !")
        return numTop = 40
        // return alert("You fail be careful")
    }else if( numTop > document.body.clientHeight-150){
        console.log("FAILED !")
        return numTop = document.body.clientHeight-150
    }
})
// input.addEventListener("keyup",function(evt){
//     console.log("KEYUP")
// })


const shel = document.querySelector("#shelter")
const ul = document.querySelector(".list")
const inp = document.getElementById("text")
shel.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    const createLi = document.createElement("li")
    createLi.innerText = inp.value
    ul.appendChild(createLi)
    inp.value = ""
    console.log("SUBMITED !!!!!")
})

// create a tweet
const tweetForm = document.querySelector("#tweet")
const tweetUl = document.querySelector(".tweets")

tweetForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const usernameInput = tweetForm.elements.username
    const twtInput = tweetForm.elements.twt

    addTweet(usernameInput.value,twtInput.value);
    
    usernameInput.value = ""
    twtInput.value = ""
})


const addTweet = (username,twt)=>{
    const newTwt = document.createElement("li")
    const bTag = document.createElement("b")

    bTag.append(username)
    newTwt.append(bTag)
    newTwt.append(`- ${twt}`)

    tweetUl.append(newTwt)
}
tweetUl.addEventListener("click",(e)=>{
    e.target.nodeName === 'LI' && e.target.remove()
})



const inputEvent = document.querySelector("#input-event")
inputEvent.addEventListener("input",(e)=>{
    console.log(e)
})