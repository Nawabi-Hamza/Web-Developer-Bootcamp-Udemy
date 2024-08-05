console.log("server side")
const express = require("express")
const app = express()
const path = require("path")



app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('views',path.join(__dirname,'views'))
app.set("view engine" , 'ejs')

const comments = [ 
    {
        username:'Todd',
        comment:'Lol tha t so funny'
    },
    {
        username:'Joie',
        comment:'so cute'
    },
    {
        username:'Mike',
        comment:'fantasy'
    },
    {
        username:'Teddy',
        comment:'mmm that so crazy'
    }
]



app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new')
})

app.post('/comments',(req,res)=>{
    const {username,comment} = req.body
    comments.push({ username,comment })
    res.redirect('/comments')
    res.send("it work")
})

app.get("/tacos",(req,res)=>{
    res.send("GET /tacos respons")
})

app.post('/tacos',(req,res)=>{
    const { meat,qty } = req.body
    res.send(`ok here are your ${qty} ${meat} tacos`)
})

app.listen(3001,()=>{
    console.log("On port 3001!")
})