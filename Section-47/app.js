const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()


/**
 * //////////////////////////////////////////////////
 * /////////////////EXPRESS ROUTES///////////////////
 * //////////////////////////////////////////////////
 */
const dogRoute = require('./route/dog')
const shelterRoute = require('./route/shelter')

app.use('/dogs',dogRoute)
app.use('/shelter',shelterRoute)
/**
 * //////////////////////////////////////////////////
 * ////////////////EXPRESS COOKIES///////////////////
 * //////////////////////////////////////////////////
*/

app.use(cookieParser('hamzanawabicookiepage'))

app.get('/getCookie',(req,res)=>{
    const { name='no-name' } = req.cookies
    res.send({msg:"EXPRESS ROUTES AND COOKIES !",cookie:name})
})
app.get('/cookie',(req,res)=>{
    res.cookie("name","Hamza",{ signed:true })
    console.log(req.cookies)
    res.send('cookies set')
})
app.get('/changeCookie',(req,res)=>{
    res.cookie("name","Ali",{ signed:true })
    console.log(req.cookies)
    res.send('cookies changed')
})
app.get("/tokenCookie",(req,res)=>{
    const token = "xlkeo2ls910dlk230dk2"
    res.cookie('access_token', 'Bearer ' + token, { expires: new Date(Date.now() + 8 * 3600000) })
    res.send({unsigned:req.cookies,signed:req.signedCookies})
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})