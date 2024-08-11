const { kMaxLength } = require("buffer")
const mongoose = require("mongoose")
const succesMsg = "\u001B[42m IT WORKED ('_') \u001B[0m"
const errorMsg = "\u001B[41m OH NO ERROR ! \u001B[0m"
const url = "mongodb://localhost:27017/shop"

mongoose.connect(url)
.then(()=>{
    console.log("\u001B[46m CONNECTION IS OPEN IN MongoDB\u001B[0m ")
}).catch(err=>{
    console.log("\u001B[41m SOMETHING WENT WRONG ! \u001B[0m")
    console.log(err)
})

// console.

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:10
    },
    price:{
        type:Number,
        required:true,
        min:[0,'Price must be positive ya dodo !'] // default message for invalid input
    },
    onSale:{
        type:Boolean,
        default:false
    },
    categories: {
        type:[String]
    },
    qty:{
        online:{
            type:Number,
            default:0
        },
        inStore:{
            type:Number,
            default:0
        }
    },
    size:{
        type:String,
        enum: ['S','M','L'] // the input should include all these otherwise it will give error
    }
},{ timestamps:true })


productSchema.methods.greet = function(){
    console.log("HELLO HI HOWDY !")
    console.log(`this is from ${this.name}`)
}

const Product = mongoose.model("Products",productSchema)

// const bike = new Product({name:'Mountain Bike',price:599})
// const bike = new Product({price:599})
// const bike = new Product({name:'Mountain Bike',price:"sam"})
// const bike = new Product({name:'Mountain Bike',price:599,color:'red'})
// const bike = new Product({name:'Bike Helmet',price:269})
// const bike = new Product({name:'Bike Wheel',price:122,onSale:true})
// const bike = new Product({name:'Bike Wheel Black',price:102})
// const bike = new Product({name:'Strait Bike',price:-26})
// const bike = new Product({name:'Strat Bike',price:43.9,categories:['cycling','Safety',432]})
const bike = new Product({name:'Joe Bike',price:329})
// // bike.save()
// .then( data=> {
//     console.log(succesMsg)
//     console.log(data)
// }).catch(err=>{
//     console.log(errorMsg)
//     console.log(err)
// }) 

const findProduct = async()=>{
    const foundProduct =await Product.findOne({name:"Bike Helmet"})
    foundProduct.greet()
}

findProduct()



// console.

// Product.findOneAndUpdate({name:'Joe Bike'},{qty:{onStore:13},price:-12},{ new:true })
// Product.findOneAndUpdate({name:'Joe Bike'},{qty:{onStore:13},price:-12},{ new:true ,runValidators:true })
// .then( data=> {
//     console.log(succesMsg)
//     console.log(data)
// }).catch(err=>{
//     console.log(errorMsg)
//     console.log(err)
// })

// Product.deleteMany({price:599}).then(msg => console.log(msg))