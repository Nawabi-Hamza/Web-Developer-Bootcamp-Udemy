const mongoose = require("mongoose")
const Product = require("./models/product")

const url = "mongodb://localhost:27017/farmStand"
mongoose.connect(url)
.then(()=>{
    console.log("MongoDB IS RUNNING")
}).catch( err => {
    console.log("SOMETHING WENT WRONG")
    console.log(err)
})


const p = new Product({
    name:'Girlic',
    price:1.49,
    category:'vegetable'
})
p.save()
.then(data=>console.log(data))
.catch(err=>console.log(err))

// Product.insertMany([
//     {
//         name:"Banana",
//         price:2.3,
//         category:'fruit'
//     },
//     {
//         name:"Fairy Eggplant",
//         price:3.3,
//         category:'vegetable'
//     },
//     {
//         name:"Organic Celery",
//         price:5.41,
//         category:'vegetable'
//     },
//     {
//         name:"Milk",
//         price:7.13,
//         category:'dairy'
//     }
// ])
// .then(data=>console.log(data))
// .catch(err=>console.log(err))