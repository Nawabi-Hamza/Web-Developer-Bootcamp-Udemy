const AppError = require("../AppError")
const Campground = require("../models/campground")
const mongoose = require('mongoose')
const isValidId = (id)=> mongoose.Types.ObjectId.isValid(id)


module.exports.index = async(req,res)=>{
    const campgrounds = await Campground.find({})
    campgrounds.sort()
    res.render('campgrounds/index',{campgrounds})
}

module.exports.renderNewForm = (req,res)=>{
    // throw new AppError("Not Allowed",404)
    res.render('campgrounds/new')
}

module.exports.createCampground = async(req,res,next)=>{
    const { id } = req.params
    if(!isValidId(id)) throw new AppError("Not Valid ID !",401)

    const campground = await Campground.findById(id).populate({ path:'reviews',populate:{ path:'author' }}).populate('author')
    // console.log(campground)
    if(!campground) {
        req.flash('error','Can not find that campground')
        res.redirect('/campgrounds')
    }    
    
    res.render('campgrounds/show',{campground})
}

module.exports.showCampground = async(req,res,next)=>{
  
    const { id } = req.params
    if(!isValidId(id)) throw new AppError("Not Valid ID to update !",401)
    
    const campground = await Campground.findById(id)
    if(!campground) throw new AppError("Not Found Record for update!",404)
    res.render('campgrounds/edit',{campground})
}


module.exports.renderEditForm = async(req,res)=>{
    const campground = new Campground(req.body.campground)
    campground.author = req.user._id
    await campground.save()
    req.flash('success',"New Campground created !")
    res.redirect(`/campgrounds/${campground.id}`)
}


module.exports.updateCampground = async(req,res,next)=>{
    const { id } = req.params
    
    const camp = await Campground.findByIdAndUpdate(id,{...req.body.campground},{new:true,runValidators:true})
    req.flash('success',"Campground updated !")
    res.redirect(`/campgrounds/${id}`)
}


module.exports.deleteCampground = async(req,res)=>{
    const { id } = req.params
    // if(!campground.author.equals(req.user._id)){
    //     req.flash("error",'You do not have permission to do this')
    //     return res.redirect(`/campgrounds/${id}`)
    // }
    await Campground.findByIdAndDelete(id)
    req.flash('success',"Campground deleted !")
    res.redirect(`/campgrounds`)
}