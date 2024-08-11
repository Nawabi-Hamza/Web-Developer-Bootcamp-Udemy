const mongoose = require("mongoose")
const url = "mongodb://localhost:27017/shop"
// Connection
mongoose.connect(url)
.then(()=>{
    console.log("\u001B[42m CONNECTION IS RUNNING \u001B[0m")
}).catch( err=>{
    console.log("\u001B[41m OH NO ERROR ! \u001B[0m")
    console.log(err)
})


// Schema
const userSchema = new mongoose.Schema({
    username :{
        type: String,
        maxLength:15,
        minLength:3,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        minLength:4,
        required:true
    },
    number:{
        type:[Number],
        default:[123,456,789]
    }
},{ timestamps:true })

// Model
const User = mongoose.model("Users",userSchema)

// Operations

// const samim = new User({username:'Ali',email:'ali@gmail.com',password:'ali@',number:[766321456,783543236]})
// const Hamza = new User({username:'Hamza',email:'hamza@gmail.com',password:'hamza@',number:[766420877,783231188]})
// const sameer = new User({username:'Sameer',email:'ali@gmail.com',password:'ali@',number:[766321456,783543236]})
// sameer.save()
// .then( data=>{
//     console.log("DATA Inserted ...")
//     console.log(data)
// }).catch( err=>{
//     console.log(err)
// })

// User.findOne({username:'Hamza'})
// User.find()
// .then( data=>{
//     console.log("Find")
//     console.log(data)
// })

// User.findOneAndUpdate({username:"Hamza"},{number:[123423423,12341234]},{new:true})
// User.updateMany({username:{$in:["Hamza","Ali"]}},{number:[123456789],updatedAt:true})
// .then( data=>{
//     console.log("Updated")
//     console.log(data)
// })


// User.findOneAndDelete({username:"Sameer"})
// .then( data=>{
//     console.log("Deleted")
//     console.log(data)
// })
