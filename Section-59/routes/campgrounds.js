const express = require("express")
const route = express.Router()
const campground = require("../controllers/campgrounds")
const { validateCampground } = require('../Schema')
const { isLoggedIn,isAuthor } = require("../middleware")
const catchAsync = require("../utils/catchAsync")
const multer = require('multer')
const { storage } =  require("../coudinary")
const upload = multer({ storage })



route.route("/") // by this trick all the bellow methods get '/' path in .get and .post method
    .get(catchAsync(campground.index))
    .post(isLoggedIn,upload.array('image'),validateCampground,catchAsync(campground.createCampground))
    // .post(upload.array('image'),(req,res)=>{
    //     res.send(req.files)
    // })

route.get('/new',isLoggedIn,campground.renderNewForm)
// route.get('/new',campground.renderNewForm)

route.route("/:id") //this is new techneque for using same route with different method
    .get(catchAsync(campground.renderEditForm))
    .put(isLoggedIn,isAuthor,upload.array('images'),validateCampground,catchAsync(campground.updateCampground))
    .delete(isLoggedIn,isAuthor,catchAsync(campground.deleteCampground))
    
route.get('/:id/edit',isLoggedIn,isAuthor,catchAsync(campground.showCampground))


module.exports = route