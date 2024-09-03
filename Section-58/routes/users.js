const express = require("express")
const router = express.Router()
const passport = require("passport")
const { storeReturnTo } = require("../middleware")
const users = require("../controllers/users")
const catchAsync = require("../utils/catchAsync")


router.route("/register")
    .get(users.renderRegister)
    .post(catchAsync(users.register))


const check_Auth = passport.authenticate('local', { failureFlash:true,failureRedirect:'/login' })
router.route("/login")
    .get(users.renderLogin)
    .post(storeReturnTo,check_Auth,users.login)


router.get("/logout",users.logout)

module.exports = router