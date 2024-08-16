const mongoose = require('mongoose')
const Product = require('./product')
const { Schema } = mongoose

const farmSchema = new Schema({
    name:{
        type:String,
        required:[true,'farm must have a name']
    },
    city:{
        type:String
    },
    email:{
        type:String,
        required:[true,'Email required !']
    },
    products:[{
        type: Schema.Types.ObjectId,
        ref:'Product'
    }]
})
// farmSchema.pre('findOneAndDelete',async(data)=>{
//     console.log("PRE MIDDLEWARE")
//     console.log(data)
// })
farmSchema.post('findOneAndDelete',async(farm)=>{
    if(farm.products.length){
        const res = await Product.deleteMany({_id:{$in:farm.products}})
        console.log(res)
    }
    // console.log("POST MIDDLEWARE")
    // console.log(farm)
    // await Product.deleteMany({farm: this._id})
})

const Farm = mongoose.model("Farm",farmSchema)
module.exports = Farm