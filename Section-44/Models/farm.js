const mongoose = require("mongoose")
const { Schema } = mongoose

/**
 * //////////////////////////////////////////////////////
 * ////////////// ONE TO MANY RELATIONSHIP //////////////
 * //////////////////////////////////////////////////////
 */

mongoose.connect("mongodb://localhost:27017/relationshipDemo")
.then(()=>{
    console.log("Connected to MongoDB")
}).catch(err=>{
    console.log(err.message)
})


const productSchema =new Schema({
    name:String,
    price:Number,
    season:{
        // _id:{ _id:false },
        type:String,
        enum: [ "Spring","Summer","Fall","Winter"]
    }
})

const farmSchema = new Schema({
    name:String,
    city:String,
    products:[{type:Schema.Types.ObjectId,ref:"Products"}],
    // products:[productSchema]
})

const Product = mongoose.model("Products",productSchema)
const Farm = mongoose.model("Farms",farmSchema)

// Product.insertMany([
//     {name:"Apple",price:1.99,season:"Spring"},
//     {name:"Banana",price:0.99,season:"Summer"},
//     {name:"Orange",price:2.99,season:"Fall"},
//     {name:"Grapes",price:3.99,season:"Winter"},
//     {name:"Mango",price:4.99,season:"Spring"},
//     {name:"Pineapple",price:5.99,season:"Summer"},
//     {name:"Watermelon",price:6.99,season:"Fall"},
//     {name:"Strawberry",price:7.99,season:"Winter"},
//     {name:"Blueberry",price:8.99,season:"Spring"},
//     {name:"Raspberry",price:9.99,season:"Summer"},
// ])
// .then(result=>{
//     console.log(result)
// }).catch(err=>{
//     console.log(err.message)
// })



const makeFarm = async()=>{
    const farm = new Farm({ name:"Green Farm", city:"New York" })
    const mango = await Product.findOne({name:"Mango"})
    farm.products.push(mango)
    await farm.save()
    console.log(farm)
}

// makeFarm()

const addProduct = async()=>{
    const farm = new Farm({ name:"Red Farm", city:"Calforinia" })
    const Blueberry = await Product.findOne({name:"Blueberry"})
    farm.products.push(Blueberry)
    await farm.save()
    console.log(farm)
}

// addProduct()

Farm.findOneAndUpdate({name:"Red Farm"})
.populate('products','name') // it is field in farmSchema
.then(farm=> console.log(farm))


