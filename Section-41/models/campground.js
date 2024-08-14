const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    image:String,
    price:{
        type:Number,
        required:true
    },
    description:String,
    location:String
},{ timestamps:true })


module.exports = mongoose.model('Campground',CampgroundSchema)