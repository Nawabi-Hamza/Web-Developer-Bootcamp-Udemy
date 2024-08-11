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


const personSchema = new mongoose.Schema({
    first:String,
    last:String
})



personSchema.virtual('fullName').get(function(){
    return `${this.first} ${this.last}`
})

const Person = mongoose.model('Person',personSchema)

const tammy = new Person({first:'tammy',last:'chow'})

// tammy.save()

Person.find()
.then(data=>console.log(data))