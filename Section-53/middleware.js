
const Campground = require("./models/campground")
const Reviews = require("./models/review")



const isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl
        // console.log(req.originalUrl)
        req.flash("error",'you must be signed in')
        return res.redirect("/login")
    }
    next()
}
const storeReturnTo = (req, res, next) => {
    // console.log(req.session)
    if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}
const isReviewAuthor = async(req,res,next)=>{
    const {id,reviewId } = req.params
    const review = await Reviews.findById(reviewId)
    if(!review.author.equals(req.user._id)){
        req.flash("error",'You do not have permission to do this')
        return res.redirect(`/campgrounds/${id}`)
    }
    next()
}

const isAuthor = async(req,res,next)=>{
    const {id} = req.params
    const campground = await Campground.findById(id)
    if(!campground.author.equals(req.user._id)){
        req.flash("error",'You do not have permission to do this')
        return res.redirect(`/campgrounds/${id}`)
    }
    next()
}
module.exports = { isLoggedIn,storeReturnTo,isAuthor,isReviewAuthor }