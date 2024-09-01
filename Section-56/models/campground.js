const mongoose = require("mongoose");
const Reviews = require("./review");

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url:String,
    filename:String
})
ImageSchema.virtual('thumbnail').get(function(){
    return this.url.replace('/upload','/upload/w_300')
})


const opts = { toJSON:{ virtuals:true } }

const CampgroundSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    images:[ImageSchema],
    geometry:{
        type:{
            type:String,
            enum: ['Point'],
            required:true
        },
        coordinates:{
            type:[Number],
            required:true
        }
    },
    lat:Number,
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
    author:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    reviews:[{
        type:Schema.Types.ObjectId,
        ref:"Reviews"
    }],
},opts)

CampgroundSchema.post("findOneAndDelete",async(doc)=>{
    if(doc){
        await Reviews.deleteMany({_id:{$in:doc.reviews}})
    }
})

CampgroundSchema.virtual('properties.popUpMarkup').get(function(){
    return `
            <strong>
                <a href="/campgrounds/${this.id}">${this.title}</a>
            </strong>
            <p>${this.description.substring(0,30)}...</p>
            `
})


module.exports = mongoose.model('Campground',CampgroundSchema)