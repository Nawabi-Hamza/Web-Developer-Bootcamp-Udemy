/**
 * //////////////////////////////////////////////////////
 * /////////// ONE TO BAJILLIONS RELATIONSHIP ///////////
 * //////////////////////////////////////////////////////
 */

const mongoose = require("mongoose")
const { Schema } = mongoose

mongoose.connect("mongodb://localhost:27017/relationshipDemo")
.then( ()=>console.log("CONNECTED TO MONGODB !") )
.catch( err=>console.log(err) )

const userSchema = new Schema({
    username: String,
    age: Number,
})
const tweetSchema = new Schema({
    text: String,
    likes:Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
})

const User = mongoose.model("User",userSchema)
const Tweet = mongoose.model("Tweet",tweetSchema)

const makeTweets = async()=>{
    // const user = await new User({username: "johnDoe", age: 30})
    const user = await User.findOne({username:'Hamza'})
    const tweet1 = await new Tweet({text: "Without User!", likes: 11})
    // const tweet1 = await new Tweet({user:user})
    tweet1.user = user
    // user.save()
    tweet1.save()
    
}
// makeTweets()

const findTweet = async()=>{
    Tweet.find()
    .populate('user')
    .then( res => console.log(res))
}
findTweet()