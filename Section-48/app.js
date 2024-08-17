const express = require('express')
const session = require("express-session")
const app = express()

const sessionOption = {secret:'thisisnotagoodsecret',resave:false,saveUninitialized:false}
app.use(session(sessionOption))



app.get('/viewcount',(req,res)=>{
    if(req.session.count){
        req.session.count += 1;
    }else{
        req.session.count=1;
    }
    res.send(`YOU HAVE VIEWED THIS PAGE ${req.session.count} times`) 
})


app.get('/register',(req,res)=>{
    const { username = 'Anonymous' } = req.query;
    req.session.username = username
    res.redirect('/greet')
})
app.get('/greet',(req,res)=>{
    const { username } = req.session
    res.send(`WELCOME BACK , ${username}`)
})


app.use((req,res)=>{
    res.send("WElCOME TO NOT DIRECTORY !")
})

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})