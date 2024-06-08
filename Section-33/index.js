const express = require("express")
const app = express()
const port = 2000



app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get('/r/:subreddit',(req,res)=>{
    const { subreddit } = req.params
    res.send(`<h1>Browsing the ${subreddit}</h1`)
})

app.get('/r/:subreddit/:postId',(req,res)=>{
    const { subreddit,postId } = req.params
    res.send(`<h1>Viewing the Post ID: ${postId} on the ${subreddit}</h1`)
})


app.get('/search',(req,res)=>{
    const { q } = req.query
    // console.log(data)
    res.send(`<h1>Search Result For Q : ${q}</h1`)
})


app.use("*",(req,res)=>{
    const data = {
        status:404,
        msg:"Server Side",
        error:"Page Not Found"
    }
    res.send(data)
})
app.listen(port,(e)=>{
    if(e) return console.log(e)
    console.log(`Server is running on port ${port}`)
})
