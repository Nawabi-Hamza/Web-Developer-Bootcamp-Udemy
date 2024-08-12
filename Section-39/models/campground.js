const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title:String,
    price:String,
    description:String,
    location:String
},{ timestamps:true })


module.exports = mongoose.model('Campground',CampgroundSchema)