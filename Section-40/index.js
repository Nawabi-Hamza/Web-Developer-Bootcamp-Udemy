const express = require("express")
const app = express()
const morgan = require('morgan')

// -------------Start Middlewares-------------
app.use(morgan('tiny'))
// app.use(morgan('dev'))
// app.use(morgan('short'))
// app.use(morgan('common'))
// app.use(morgan('combined'))

// app.use('/dogs',(req,res,next)=>{
//     console.log("I Love DOGS")
//     next()
// })
// app.use((req,res,next)=>{
//     // console.log(req.query)
//     const { password } = req.query
//     password === 'chickennugget' ? next():res.send('SORRY YOU NEED A PASSWORD')
// })
const verfiyPassowrd = (req,res,next)=>{
    const { password } = req.query
    password === 'chickennugget' ? next():res.send('SORRY YOU NEED A PASSWORD')
}
// app.use((req,res,next)=>{
//     req.method = "GET" // override every request
//     req.requestTime = Date.now()
//     console.log(req.method,req.path)
//     next()
// })
// app.use((req,res,next)=>{
//     console.log("MY FIRST MIDDLEWARE !!!!")
//     return next()
//     console.log("FIRST FIRST MIDDLE WARE AFTER NEXT()")
// })
// app.use((req,res,next)=>{
//     console.log("MY SECOND MIDDLEWARE !!!!")
//     return next()
// })

// -------------End Middlewares---------------

app.get('/',(req,res)=>{
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send("Home Page")
})

app.get('/dogs',(req,res)=>{
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send("Dogs Page WOOF WOOF !")
})
// we can make middle ware and use in specific route like bellow
app.get('/secret',verfiyPassowrd,(req,res)=>{
    res.send("MY SECRET IS:Somtimes I wear headphones in public so I don't care")
})
// when any request does not match it will show them the below response
app.use((req,res)=>{
    res.status(404).send("Not Found !")
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})