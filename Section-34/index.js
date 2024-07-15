// console.log('asdf')


const express = require("express")
const app = express()
const path = require('path')

app.set('view engine','ejs')


app.use(express.static(path.join(__dirname,'/public')))

app.set('views', path.join(__dirname,'/views'))


app.get('/' , (req,res) => {
    res.render("home")
})

app.get('/rand',(req,res)=>{
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', { bubbles:num })
})

app.get('/r/:subreddit' , (req,res)=>{
    const { subreddit } = req.params;
    res.render('subreddit', {subreddit})
})

app.get('/cats' , (req,res)=>{
    const cats = [ 'blue','Rocket','Monty','Stephanie','Winston' ]
    res.render('cats', { allCats:cats })
})

app.listen(3000,()=>{
    console.log("LISTENING ON PORT 3000")
})