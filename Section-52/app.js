const express = require('express')
const path = require("path")
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')
const AppError = require('./AppError')
const session = require("express-session")
const flash = require('connect-flash')
const passport = require("passport")
const LocalStrategy = require('passport-local')
const User = require("./models/user")

const app = express()

app.engine('ejs',ejsMate)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname,'public')))
const sessionConfig = {
    secret: 'keyboard secret for session',
    resave:false,
    saveUninitialized:true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())


mongoose.connect("mongodb://localhost:27017/yelp-camp")
const db = mongoose.connection;
db.on('error',console.error.bind(console,"connection error:"))
db.once("open",()=>{
    console.log("connected to db")
})


passport.use( new LocalStrategy(User.authenticate()) )
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use((req,res,next)=>{
    // console.log(req.session)
    res.locals.currentUser = req.user;
    // console.log(req.user)
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next()
})


const campgroundRoute = require("./routes/campgrounds")
const reviewRoute = require("./routes/reviews")
const userRoute = require("./routes/users")

app.get("/fakeuser",async(req,res)=>{
    const user = new User({email:'hamza@gmail.com',username:"hamza nawabi"})
    const newuser = await User.register(user,'chiken')
    res.send(newuser)
})

app.use('/',userRoute)
app.use('/campgrounds',campgroundRoute)
app.use('/campgrounds/:id/reviews',reviewRoute)

app.get("/",(req,res)=>{
    res.render('home')
})
app.all("*",(req,res,next)=>{
    next(new AppError("Page Not Found",404))
})
app.use((err,req,res,next)=>{
    console.log(err.name)
    next(err)
})


app.use((err,req,res,next)=>{
    // const { status=500,message='Something went wrong' } = err
    const { status=500 } = err
    if(!err.message) message='OH NO ,Something went wrong !'
    req.flash('error',err.message)
    res.status(status).render('error',{err})
})

app.listen(3000,()=>{
    console.log("SERVER IS RUNNING IN PORT 3000")
})