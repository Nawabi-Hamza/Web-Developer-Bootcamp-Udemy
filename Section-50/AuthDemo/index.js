const express = require('express')
const mongoose = require("mongoose")
const User = require("./models/user")
const bcrypt = require('bcrypt')
const session = require("express-session")

const app = express()
mongoose.connect("mongodb://localhost:27017/authentication")

app.set('view engine','ejs')
app.set('views','views')

app.use(express.urlencoded({ extended:true }))
app.use(session({ secret:'notgoodsecret',resave:false,saveUninitialized:true }))

const requireLogin = (req,res,next)=>{
    if(!req.session.user_id){
        return res.redirect('/login')
    }
    next()
}

app.get('/',(req,res)=>{
    res.send("THIS IS HOME PAGE !")
})

app.get("/login",(req,res)=>{
    res.render('login')
})
app.post('/login',async(req,res)=>{
    const { username,password } = req.body;
    // User.findByUsernameAndValidate(username,password)
    // const user = await User.findOne({ username })
    const foundUser = await User.findAndValidate( username,password )
    // if (!foundUser) return res.status(401).send("Invalid username or password")

    // const validPassword =await bcrypt.compare( password,user.password )
    if(foundUser){
        req.session.user_id = foundUser._id
        res.redirect('/secret')
    }else{
        res.redirect("/login")
    }
})

app.get('/register',(req,res)=>{
    res.render('register')
})
app.post('/register',async(req,res)=>{
    const { username,password } = req.body
    // const hash = await bcrypt.hash(password,12)
    const user = new User({ username,password })
    await user.save()
    req.session.user_id = user._id
    res.redirect("/secret")
})

app.post('/logout',(req,res)=>{
    // req.session.user_id = null
    req.session.destroy() // we can use instede of setting user_id = null
    res.redirect('/login')
})

app.get('/secret',requireLogin,async(req,res)=>{
    const user = await User.findById(req.session.user_id) 
    if(user){
        res.render('secret',{user})
    }else{
        res.send("THIS IS SECRET ! YOU CANNOT SEE ME UNLESS YOU ARE LOGGED IN ")
    }
})
app.get('/topsecret',requireLogin,(req,res)=>{
    res.send("THIS IS TOP SECRET ! YOU CANNOT SEE ME UNLESS YOU ARE LOGGED")
})

app.listen(3000,()=>{
    console.log("SERVER IS CONNECTED ON 3000")
})