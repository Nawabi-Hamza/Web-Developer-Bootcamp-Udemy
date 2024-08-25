const isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl
        console.log(req.originalUrl)
        req.flash("error",'you must be signed in')
        return res.redirect("/login")
    }
    next()
}
const storeReturnTo = (req, res, next) => {
    // console.log(req.session)
    if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}
module.exports = { isLoggedIn,storeReturnTo }