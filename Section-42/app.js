const express = require("express")
const morgan = require("morgan")
const mongoose = require('mongoose')
const app = express()

const AppError = require("./AppError")

mongoose.connect("mongodb://localhost:27017/farmStand2")
.then(()=>{
    console.log("DB CONNECTED ...")
}) .catch( error=>{
    console.log(error)
})



app.use(morgan('tiny'))
app.use((req,res,next)=>{
     req.requestTime = Date.now()
     console.log(req.method,req.path)
     next()
})

const verifyPassword = (req,res,next)=>{
    const { password } = req.query
    if(password === 'Nawabi') next()
    // res.status(401)
    throw new AppError("Password Required",401)

}


app.get('/error',(req,res)=>{
    chicken.fly()
})


app.get('/',(req,res)=>{
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send("HOME PAGE !")
})
app.get("/dogs",(req,res)=>{
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send("DOGS PAGE WOOF WOOF !")
})
app.get("/secret",verifyPassword,(req,res)=>{
    res.send("MY SECRET IS:Sometimes I wear headphones in public")
})

app.get('/admin',(req,res)=>{
    throw new AppError("You are not admin",403)
})



app.use((req,res)=>{
    res.status(404).send("NOT FOUND !")
})



// app.use((err,req,res,next)=>{
//     console.log("***********************************")
//     console.log("***************ERROR***************")
//     console.log("***********************************")
//     console.log(err)
//     next(err)
// });

app.use((err,req,res,next)=>{
    const { status=500,message='Something went wrong' } = err
    res.status(status).send({ status,message })
    // res.status(status).send(err.message)
});



app.listen(3000,()=>{
    console.log("SERVER IS RUNNING IN PORT 3000")
})
