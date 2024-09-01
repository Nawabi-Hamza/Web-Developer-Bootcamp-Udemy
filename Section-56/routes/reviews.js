const express = require('express')

const { validateReview } =  require("../Schema")
const {isLoggedIn, isReviewAuthor} = require('../middleware')
//  the mergeParams it true because the id pass in app.js and we merge that in this route
const route = express.Router({ mergeParams:true })
const reviews = require("../controllers/reviews")
const catchAsync = require("../utils/catchAsync")



route.post('/',validateReview,catchAsync(reviews.createReview))

route.delete('/:reviewId',isLoggedIn,isReviewAuthor,catchAsync(reviews.deleteReview))



module.exports = route