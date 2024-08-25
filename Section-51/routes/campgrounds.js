const express = require("express")
const route = express.Router()
const AppError = require("../AppError")
const mongoose = require("mongoose")
const Campground = require("../models/campground")
const { validateCampground } = require('../Schema')
const {isLoggedIn} = require("../middleware")

const isValidId = (id)=> mongoose.Types.ObjectId.isValid(id)

function catchAsync(fn){
    return function(req,res,next){
        fn(req,res,next).catch(e => next(e))
    }
}

route.get('/',async(req,res)=>{
    const campgrounds = await Campground.find({})
    campgrounds.sort()
    res.render('campgrounds/index',{campgrounds})
})
route.get('/new',isLoggedIn,(req,res)=>{
    // throw new AppError("Not Allowed",404)
    res.render('campgrounds/new')
})
route.get('/:id',catchAsync(async(req,res,next)=>{
        const { id } = req.params
        if(!isValidId(id)) throw new AppError("Not Valid ID !",401)

        const campground = await Campground.findById(id).populate('reviews')
        // console.log(campground)
        if(!campground) {
            req.flash('error','Can not find that campground')
            res.redirect('/campgrounds')
        }
        
        res.render('campgrounds/show',{campground})
}))
route.get('/:id/edit',isLoggedIn,catchAsync(async(req,res,next)=>{
  
        const { id } = req.params
        if(!isValidId(id)) throw new AppError("Not Valid ID to update !",401)
        
        const campground = await Campground.findById(id)
        if(!campground) throw new AppError("Not Found Record for update!",404)
        
        res.render('campgrounds/edit',{campground})
}))
// route.post('/',catchAsync(async(req,res)=>{
//         const campground = new Campground(req.body.campground)
//         await campground.save()
//         res.redirect(`/campgrounds/${campground.id}`)
// }))
route.post('/',isLoggedIn,validateCampground, catchAsync(async(req,res)=>{
    const campground = new Campground(req.body.campground)
    await campground.save()
    req.flash('success',"New Campground created !")
    res.redirect(`/campgrounds/${campground.id}`)
}))
route.put("/:id",isLoggedIn,validateCampground,catchAsync(async(req,res,next)=>{
    const { id } = req.params
    await Campground.findByIdAndUpdate(id,{...req.body.campground},{new:true,runValidators:true})
    req.flash('success',"Campground updated !")
    res.redirect(`/campgrounds/${id}`)
}))
route.delete("/:id",isLoggedIn,catchAsync(async(req,res)=>{
        const { id } = req.params
        await Campground.findByIdAndDelete(id)
        req.flash('success',"Campground deleted !")
        res.redirect(`/campgrounds`)
}))



module.exports = route