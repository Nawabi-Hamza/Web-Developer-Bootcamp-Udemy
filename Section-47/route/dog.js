const express = require('express')
const route = express.Router()

route.use((req,res,next)=>{
    if(req.query.admin){
        next()
    }else{
        res.status(401).send("Unauthorized")    
    }
})

route.get('/',(req,res)=>{
    res.send('Hello World get dog')
})
route.post('/',(req,res)=>{
    res.send("POST in dog")
})
route.get("/:id",(req,res)=>{
    res.send("Single Dog ")
})

module.exports = route;
