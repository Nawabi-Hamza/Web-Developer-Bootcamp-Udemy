const express = require('express')
const route = express.Router()

route.get("/",(req,res)=>{
    res.send('Shelter get method')
})
route.post('/',(req,res)=>{
    res.send("POST SHELTER page")
})
route.get("/:id",(req,res)=>{
    res.send("GET SINGLE SHELTER PAGE")
})

module.exports = route;