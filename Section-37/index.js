const color = require("./Colors")
console.log(color.cyan+"-----------------------------------------"+color.reset)

// Start Project
const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/MERN', { useNewUrlParser: true, useUnifiedTopology:true})

// ---------Connect to mongoDB database-----------
mongoose.connect('mongodb://localhost:27017/MERN')
.then(() => {
    console.log(color.cyan+"MongoDB CONNECTION OPEN ('_')"+color.reset)
})
.catch(err => {
    console.log(color.error+"OH NO ERROR !")
    console.log(err)
})




// ----Create Model and Defube Schema----
const movieSchema = new mongoose.Schema({
    title: String, // title:"Amdeus",
    year: Number, //  year:1980,
    score:Number, //  score:9.2,
    rating:String //  rating:'R'
})

const Movie = mongoose.model("Movies",movieSchema)

// -------------------------------Insert Method-------------------------------
// const amadues = new Movie({title:"Amadeus",year:1986,score:9.2,rating:'R'})
// amadues.score = 9.6
// amadues.save()

// Movie.insertMany([
//     {title:"Big Man",year:1946,score:9.9,rating:'B'},
//     {title:"Raw",year:1956,score:6.2,rating:'C'},
//     {title:"Shaf",year:1926,score:4.7,rating:'A'},
//     {title:"Khan",year:1986,score:3.2,rating:'E'},
//     {title:"Pawol",year:1996,score:1.1,rating:'O'},
//     {title:"Caros",year:1906,score:8.3,rating:'W'},
// ]).then(data=>{
//     console.log("It work")
//     console.log(data)
// })
// ----------------------------Find Method-------------------------
// Movie.findOne({title:"Caros"})
// .then( data=>{
//     console.log(color.error+"/- Find One Record -/"+color.reset)
//     console.log(data)
// })

// Movie.findById('66b7363a766770f9aadc2dac')
// .then( data=> {
//     console.log(color.error+"/- Find One Record By ID -/"+color.reset)
//     console.log(data)
// })

// Movie.find({score:{$gt:5}})
// .then( data=>{
//     console.log(color.error+"/- Find One Record -/"+color.reset)
//     console.log(data)
// })

// Movie.find()
// .then(data=>{
//     console.log(color.error+"/- Find ALL RECORDS -/"+color.reset)
//     console.log(data)
// })
// ----------------------------Update Method-------------------------
// console.
// Movie.updateOne({title:"Caros"},{year:2013,score:5})
// .then( data=>{
//     console.log(color.error+"/- Update One Record -/"+color.reset)
//     // console.log(data)
// })
// .then(()=>{
//     Movie.findOne({title:"Caros"})
//     .then( data => console.log(data) )
// })

// Movie.updateMany({title:{$in:["Big Man","Amadeus","Raw"]}},{year:2015,score:8})
// .then( data=>{
//     console.log(color.error+"/- Update One Record -/"+color.reset)
//     // console.log(data)
// })
// .then(()=>{
//     Movie.find({title:{$in:["Big Man","Amadeus","Raw"]}})
//     .then( data => console.log(data) )
// })

// Movie.findOneAndUpdate({title:"Caros"},{score:15},{new:true}) // the 3rd parameter new:true for get data after update if we don't set it to true it will get data after that it will update
// .then( data=>{
//     console.log(color.error+"/- Update One Record -/"+color.reset)
//     console.log(data)
// })

// ----------------------------Delete Method-------------------------
// Movie.deleteOne({title:"Raw"})
// .then( data=>{
//         console.log(color.error+"/- Delete One Record -/"+color.reset)
//         console.log(data)
//     })
// .then(()=>{
//         Movie.findOne({title:"Raw"})
//         .then( data => console.log(data) )
//     })

// Movie.deleteMany({title:"Big Man"})
// .then( msg => console.log(msg))
 
// Movie.findOneAndDelete({title:"Shaf"})
// .then( msg=> console.log(msg))
