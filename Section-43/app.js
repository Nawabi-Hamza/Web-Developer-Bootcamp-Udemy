const express = require('express')
const path = require("path")
const mongoose = require("mongoose")
const Campground = require("./models/campground")
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')
const AppError = require('./AppError')
const validateCampground = require("./Schema")
const app = express()

app.engine('ejs',ejsMate)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

mongoose.connect("mongodb://localhost:27017/yelp-camp")
const db = mongoose.connection;
db.on('error',console.error.bind(console,"connection error:"))
db.once("open",()=>{
    console.log("connected to db")
})

//check id is valid in mongoDB algorithem
const isValidId = (id)=> mongoose.Types.ObjectId.isValid(id)



app.get("/",(req,res)=>{
    res.render('home')
})
app.get('/campgrounds',async(req,res)=>{
    const campgrounds = await Campground.find({})
    res.render('campgrounds/index',{campgrounds})
})
app.get('/campgrounds/new',(req,res)=>{
    // throw new AppError("Not Allowed",404)
    res.render('campgrounds/new')
})

function wrapAsync(fn){
    return function(req,res,next){
        fn(req,res,next).catch(e => next(e))
    }
}

app.get('/campgrounds/:id',wrapAsync(async(req,res,next)=>{
        const { id } = req.params
        if(!isValidId(id)) throw new AppError("Not Valid ID !",401)

        const campground = await Campground.findById(id)
        if(!campground) throw new AppError("This record not found !",404)
        
        res.render('campgrounds/show',{campground})
}))
app.get('/campgrounds/:id/edit',wrapAsync(async(req,res,next)=>{
  
        const { id } = req.params
        if(!isValidId(id)) throw new AppError("Not Valid ID to update !",401)
        
        const campground = await Campground.findById(id)
        if(!campground) throw new AppError("Not Found Record for update!",404)
        
        res.render('campgrounds/edit',{campground})
}))


// app.post('/campgrounds',wrapAsync(async(req,res)=>{
//         const campground = new Campground(req.body.campground)
//         await campground.save()
//         res.redirect(`/campgrounds/${campground.id}`)
// }))



app.post('/campgrounds',validateCampground, wrapAsync(async(req,res)=>{
    
    const campground = new Campground(req.body.campground)
    await campground.save()
    res.redirect(`/campgrounds/${campground.id}`)
}))

app.put("/campgrounds/:id",validateCampground,wrapAsync(async(req,res,next)=>{
    
        const { id } = req.params
        await Campground.findByIdAndUpdate(id,{...req.body.campground},{new:true,runValidators:true})
        res.redirect(`/campgrounds/${id}`)
    
}))
app.delete("/campgrounds/:id",wrapAsync(async(req,res)=>{
    
        const { id } = req.params
        await Campground.findByIdAndDelete(id)
        res.redirect(`/campgrounds`)

}))


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
    res.status(status).render('error',{err})
})












app.listen(3000,()=>{
    console.log("SERVER IS RUNNING IN PORT 3000")
})