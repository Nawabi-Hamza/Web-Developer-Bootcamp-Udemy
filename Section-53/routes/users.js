const express = require("express")
const router = express.Router()
const User = require("../models/user")
const passport = require("passport")
const { storeReturnTo } = require("../middleware")


function catchAsync(fn){
    return function(req,res,next){
        fn(req,res,next).catch(e => next(e))
    }
}

router.get("/register",(req,res)=>{
    res.render('users/register')
})

router.post("/register",catchAsync(async(req,res,next)=>{
    try{
        const { email,username,password } = req.body
        const user = new User({email,username})
        const registeredUser = await User.register(user,password)
        req.login(registeredUser, err=>{
            if(err) return next(err)
            req.flash('success','welcome to yelp camp !')
            res.redirect("/campgrounds")
        })
        // console.log(registeredUser)
    }catch(e){
        req.flash('error',e.message)
        res.redirect('/register')
    }
}))

router.get("/login",(req,res)=>{
    res.render("users/login") 
})

const check_Auth = passport.authenticate('local', { failureFlash:true,failureRedirect:'/login' })
router.post("/login",storeReturnTo,check_Auth,(req,res)=>{
    req.flash('success',`welcome back ~ ${req.body.username} ❤️`.toUpperCase())
    const redirectUrl = res.locals.returnTo || '/campgrounds';
    // console.log(redirectUrl)
    // delete req.session.returnTo;
    res.redirect(redirectUrl)
})

router.get("/logout",(req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err)
        }
        req.flash('success','GoodBye')
        res.redirect('/campgrounds')
    })
})

module.exports = router