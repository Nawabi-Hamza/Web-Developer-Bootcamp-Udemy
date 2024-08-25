const mongoose = require('mongoose')


const reviewsSchema = new mongoose.Schema({
    body:String,
    rating:Number
})

const Reviews = mongoose.model('Reviews', reviewsSchema)
module.exports = Reviews