const mongoose = require('mongoose')


const reviewsSchema = new mongoose.Schema({
    body:String,
    rating:Number,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

const Reviews = mongoose.model('Reviews', reviewsSchema)
module.exports = Reviews