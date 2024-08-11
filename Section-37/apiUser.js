const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())

// MongoDB Connection
const mongoUrl = "mongodb://localhost:27017/MERN"
mongoose.connect(mongoUrl)
.then(()=>{
    console.log("MongoDB IS RUNNING")
}).catch(err=>{
    console.log(err)
})

// Schema and Model
const userSchema = new mongoose.Schema({
    username :{
        type: String,
        maxLength:15,
        minLength:3,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        minLength:4,
        required:true
    }
},{ timestamps:true })
const Users = mongoose.model("Users",userSchema)
// const Hamza = new Users({username:'Hamza',email:'hamza@gmail.com',password:'hamza@'})
// Hamza.save();


app.get('/users',(req,res)=>{
    Users.find()
    .then( data => res.status(200).json(data))
    .catch(err => res.status(500).json({message: err.message}))
})
app.post("/users",(req,res)=>{
    const {username,email,password} = req.body
    const query = new Users({username,email,password})
    query.save()
    .then(data => res.status(201).json(data))
    .catch( err=> res.status(500).json({message:err.message}))    
})
app.patch("/users/:id",(req,res)=>{
    const id = req.params.id
    const {_id,...everything} = req.body
    // res.send(everything)
    Users.findByIdAndUpdate(id,everything,{new:true})
    .then(data => res.status(201).json(data))
    .catch( err=> res.status(500).json({message:err.message}))  
})
app.delete("/users/:id",(req,res)=>{
    const id = req.params.id
    Users.findByIdAndDelete(id)
    .then(data => res.status(200).json({message:"User deleted successfully"}))
    .catch( err=> res.status(500).json({message:err.message}))
})



// SERVER Connection
app.listen(1200, err =>{
    if(err) console.log(err)
    console.log("SERVER IS RUNNING")
})





