if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
}

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
const cors = require("cors")
const mongoSanitize = require("express-mongo-sanitize")
const helmet = require("helmet")
const MongoDBStore = require("connect-mongo")(session)


const app = express()


const dbUrl = process.env.MONGO_CONNECTION

mongoose.connect(dbUrl)
const db = mongoose.connection;
db.on('error',console.error.bind(console,"connection error:"))
db.once("open",()=>{
    console.log(`CONNECTED TO \u001B[36m${dbUrl.split('/')[3].toUpperCase()}\u001B[0m`)
    // console.log(`CONNECTED TO \u001B[36m${dbUrl.split('=')[3].toUpperCase()}\u001B[0m`)
})


app.engine('ejs',ejsMate)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(cors())
app.use(express.json())
// Mongo injection
app.use(mongoSanitize({ replaceWith:'_' }))
// XSS (Cross Site Scripting) we use in schema sanitize-html
app.use(helmet())
const scriptSrcUrls = [
    "https://stackpath.bootstrapcdn.com/",
    "https://kit.fontawesome.com/",
    "https://cdnjs.cloudflare.com/",
    "https://cdn.jsdelivr.net",
    "https://api.maptiler.com/", // add this
    "https://cdn.maptiler.com/", // add this
];
const styleSrcUrls = [
    "https://kit-free.fontawesome.com/",
    "https://stackpath.bootstrapcdn.com/",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
    "https://fonts.googleapis.com/",
    "https://use.fontawesome.com/",
    "https://cdn.jsdelivr.net",
    "https://api.maptiler.com/", // add this
    "https://cdn.maptiler.com/", // add this
];
const connectSrcUrls = [
    "https://api.maptiler.com/", // add this
];
const fontSrcUrl = []
app.use( helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        connectSrc: ["'self'",...connectSrcUrls],
        scriptSrc: ["'unsafe-inline'","'self'","'unsafe-eval'",...scriptSrcUrls],
        styleSrc: ["'self'","'unsafe-inline'",...styleSrcUrls],
        workerSrc:["'self'",`blob`],
        objectSrc: [],
        imgSrc: [
            "'self'",
            "blob:",
            "data:", // add this
            // "https://cdn.maptiler.com/", // add this
            "https://api.maptiler.com/",
            "https://res.cloudinary.com/dskt3xxtq/", // add this
            "https://images.unsplash.com/",
            ],
        fontSrc:["'self'",...fontSrcUrl]
        },
}) );
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname,'public')))
const store = new MongoDBStore({
    url:dbUrl,
    secret:process.env.SESSION_SECRET,
    touchAfter:24*60*60
})
store.on('error',function(e){
    console.log("SESSION STORE ERROR: "+e)
})
const sessionConfig = {
    store,
    name:'session',
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:true,
    cookie: {
        httpOnly: true,
        secret:false,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())




passport.use( new LocalStrategy(User.authenticate()) )
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use((req,res,next)=>{
    // console.log(req.session)
    // console.log(req.query)
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

app.listen(process.env.SERVER_PORT,()=>{
    console.log(`SERVER IS RUNNING IN PORT \u001B[36m${process.env.SERVER_PORT}\u001B[0m`)
    // console.log(process.env.CLOUDINARY_URL)
})