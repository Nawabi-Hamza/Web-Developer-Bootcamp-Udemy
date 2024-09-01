const Reviews = require("../models/review")
const Campground = require("../models/campground")


module.exports.createReview = async(req,res)=>{
    const { id } = req.params
    // res.send(id)
    // res.send(req.user)
    if(!req.user) return res.redirect("/login")
    const campground = await Campground.findById(id)
    const review = new Reviews(req.body.review)
    review.author = req.user._id
    campground.reviews.push(review)
    await review.save()
    await campground.save()
    req.flash('success','Created new review !')
    res.redirect(`/campgrounds/${campground.id}`)
    // res.send("YOu made it !")
}


module.exports.deleteReview = async(req,res)=>{ 
    const { id, reviewId } = req.params
    await Campground.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    await Reviews.findByIdAndDelete(reviewId)
    req.flash('success','Review Deleted !')
    res.redirect(`/campgrounds/${id}`)
}