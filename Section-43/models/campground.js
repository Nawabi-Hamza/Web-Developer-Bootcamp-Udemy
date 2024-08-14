const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:[true,'need image link']
    },
    price:{
        type:Number,
        min:[0,'price should be grather then 0'],
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
},{ timestamps:true })


module.exports = mongoose.model('Campground',CampgroundSchema)