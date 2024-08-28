const express = require('express')
const path = require("path")
const mongoose = require("mongoose")
const Campground = require("../models/campground")
const cities = require('./cities')
const { places,descriptors } = require('./seedHelpers')

const app = express()


app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))


mongoose.connect("mongodb://localhost:27017/yelp-camp")
const db = mongoose.connection;
db.on('error',console.error.bind(console,"connection error:"))
db.once("open",()=>{
    console.log("connected to db")
})

const sample = (array)=> array[Math.floor(Math.random() * array.length)]
const seedDB = async()=>{
    await Campground.deleteMany({});
    for(let i=0; i<50; i++){
        const random1000 = Math.floor(Math.random()*1000);
        const camp = new Campground({
            author:'66c9c4c4ae8946e18ea521d1',
            title:`${sample(descriptors) } ${sample(places)}`,
            location:`${cities[random1000].city}, ${cities[random1000].state}`,
            images:[
                {
                  url: 'https://res.cloudinary.com/dskt3xxtq/image/upload/v1724825097/YelpCamp/kkamad47abmoev7inmby.jpg',
                  filename: 'YelpCamp/kkamad47abmoev7inmby',
                 
                },
                {
                  url: 'https://res.cloudinary.com/dskt3xxtq/image/upload/v1724825097/YelpCamp/bwlb1kqldyqm8sbdwkmh.jpg',
                  filename: 'YelpCamp/bwlb1kqldyqm8sbdwkmh',
                  
                },
                {
                  url: 'https://res.cloudinary.com/dskt3xxtq/image/upload/v1724825097/YelpCamp/sgwbrfwlqcqvcvlhmm8u.jpg',
                  filename: 'YelpCamp/sgwbrfwlqcqvcvlhmm8u',
                
                }
              ],
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A eaque illo quae aut non aliquid corrupti dolor voluptates, minima, enim iure quisquam praesentium, quia numquam dolore? Explicabo iure alias esse!",
            price:Math.floor(Math.random()*30)+10
        })
        await camp.save()
    }
    Campground.find()
    .then(data=>console.log(data))
    
}

seedDB()
// .then(()=>{
//     mongoose.connection.close()
// })


