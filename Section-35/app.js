console.log("server side")
const express = require("express")
const app = express()
const path = require("path")
const { v4:uuid } = require("uuid")
const methodOverride = require("method-override")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('views',path.join(__dirname,'views'))
app.set("view engine" , 'ejs')
app.use(methodOverride('_method'))


let comments = [ 
    {
        id:uuid(),
        username:'Todd',
        comment:'Lol that so funny'
    },
    {
        id:uuid(),
        username:'Joie',
        comment:'so cute'
    },
    {
        id:uuid(),
        username:'Mike',
        comment:'fantasy'
    },
    {
        id:uuid(),
        username:'Teddy',
        comment:'mmm that so crazy'
    }
]


// show all comments ejs file
app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})
// show new comment forms ejs file
app.get('/comments/new',(req,res)=>{
    res.render('comments/new')
})
// create new comment
app.post('/comments',(req,res)=>{
    const {username,comment} = req.body
    comments.push({ username,comment,id:uuid() })
    res.redirect('/comments')
    // res.send("it work")
})
// get single comment
app.get("/comments/:id",(req,res)=>{
    const { id } = req.params
    const comment = comments.find( comment => comment.id === id ) 
    res.render('comments/show',{comment})
})
// update single comment ejs file
/**
 *  for check update first go details copy url then open post man paste the url set method path in body in x-www-form-urlencoded 
 *  set key comment and set a value the send after that go to index page then refresh page you can see the changes
 */
app.patch('/comments/:id',(req,res)=>{
    const { id } = req.params
    const newCommentText = req.body.comment
    // console.log(newCommentText)
    const foundComment = comments.find( c => c.id === id)
    foundComment.comment = newCommentText
    res.redirect('/comments')
})
// show edit page show form it does not need to use postman like above method 
app.get('/comments/:id/edit',(req,res)=>{
    const { id } = req.params
    const comment = comments.find( c => c.id === id)
    res.render('comments/edit',{comment})
})
// destroy a comment
app.delete('/comments/:id',(req,res)=>{
    const { id } = req.params
    comments = comments.filter( c => c.id !== id)
    res.redirect('/comments')

})



















app.get("/tacos",(req,res)=>{
    res.send("GET /tacos respons")
})

app.post('/tacos',(req,res)=>{
    const { meat,qty } = req.body
    res.send(`ok here are your ${qty} ${meat} tacos`)
})

app.listen(3001,()=>{
    console.log("On port 3001!")
})