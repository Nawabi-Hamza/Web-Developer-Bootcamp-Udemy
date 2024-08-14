const mongoose = require("mongoose")


const schema = new mongoose.Schema({
    name: String,
    price: Number,
})

const Product = mongoose.model('Products',schema)
Product.deleteMany({})
Product.insertMany([
    {name: 'Apple', price: 1.00},
    {name: 'Banana', price: 0.50},
    {name: 'Orange', price: 1.50},
    {name: 'Grapes', price: 2.00},
    {name: 'Mango', price: 3.00},
])


Product.find()
.then(data=>{
    console.log(data)
})