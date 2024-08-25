const express = require('express')
const Reviews = require("../models/review")
const Campground = require("../models/campground")
const { validateReview } =  require("../Schema")
const {isLoggedIn} = require('../middleware')
//  the mergeParams it true because the id pass in app.js and we merge that in this route
const route = express.Router({ mergeParams:true })

function catchAsync(fn){
    return function(req,res,next){
        fn(req,res,next).catch(e => next(e))
    }
}

route.post('/',validateReview,catchAsync(async(req,res)=>{
    const { id } = req.params
    // res.send(id)
    const campground = await Campground.findById(id)
    const review = new Reviews(req.body.review)
    campground.reviews.push(review)
    await review.save()
    await campground.save()
    req.flash('success','Created new review !')
    res.redirect(`/campgrounds/${campground.id}`)
    // res.send("YOu made it !")
}))
route.delete('/:reviewId',isLoggedIn,catchAsync(async(req,res)=>{ 
    const { id, reviewId } = req.params
    await Campground.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    await Reviews.findByIdAndDelete(reviewId)
    req.flash('success','Review Deleted !')
    res.redirect(`/campgrounds/${id}`)
}))


module.exports = route