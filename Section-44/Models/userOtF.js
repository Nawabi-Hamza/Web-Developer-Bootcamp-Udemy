/**
 * /////////////////////////////////////////////////////
 * ////////////// ONE TO FEW RELATIONSHIP //////////////
 * /////////////////////////////////////////////////////
 */


const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/relationshipDemo")
.then(()=>{
    console.log("Connected to MongoDB")
}).catch(err=>{
    console.log(err.message)
})


const userSchema = mongoose.Schema({
    first:String,
    last:String,
    address:[{
        _id:{ _id:false },
        street:String,
        city:String,
        state:String,
        country:String
    }]
})


const User = mongoose.model("Users",userSchema)

const makeUser = async()=>{
    await User.deleteMany({})
    const u =await new User({
        first:"John",
        last:"Doe",
    })
    u.address.push({
        street:"123 Main St",
        city:"New York",
        state:"NA",
        country:"USA"
    })
    const res = await u.save()
    console.log(res)
}

const addAdress = async(id)=>{
    const user = await User.findById(id)
    user.address.push(
        {
            street:"43 Main St",
            city:"Sanfrasico",
            state:"NA",
            country:"AMerica"
        }
    )
    const res = await user.save()
    console.log(res)
}


// makeUser()

addAdress("66bd8c302970f8fbd4945b27")
