/**
 * ////////////////////////////////////////////////
 * /////////// ONE TO MANY RELATIONSHIP ///////////
 * ////////////////////////////////////////////////
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
    // the user field is a reference to the User model
    user: { type: Schema.Types.ObjectId, ref: 'User' },
})

const User = mongoose.model("User",userSchema)
const Tweet = mongoose.model("Tweet",tweetSchema)

const makeTweets = async()=>{
    // const user1 = new User({username:"Noori",age:31})
    const user1 = await User.findOne({username:"Hamza"})
    const tweet1 = new Tweet({text:"Bock bock chickens",likes:321})
    tweet1.user = user1
    // user1.save()
    tweet1.save()
}
// makeTweets()

const findTweet = async()=>{
    const t = await Tweet.find().populate('user')
    console.log(t)

}
findTweet()

