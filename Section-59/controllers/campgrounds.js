const AppError = require("../AppError")
const Campground = require("../models/campground")
const mongoose = require('mongoose')
const { cloudinary } = require("../coudinary")

const maptilerClient = require("@maptiler/client");
maptilerClient.config.apiKey = process.env.MAPTILER_API_KEY;





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


module.exports.showCampground = async(req,res,next)=>{
  
    const { id } = req.params
    if(!isValidId(id)) throw new AppError("Not Valid ID to update !",401)
    
    const campground = await Campground.findById(id)
    if(!campground) throw new AppError("Not Found Record for update!",404)
    res.render('campgrounds/edit',{campground})
}


module.exports.createCampground = async(req,res)=>{
    // const campground = new Campground(req.body.campground);
    // res.send(req.body)
    const geoData = await maptilerClient.geocoding.forward(req.body.campground.location, { limit: 1 });
    // res.send(geoData.features[0].geometry)
    // res.send(geoData)
    const campground = new Campground(req.body.campground)

    campground.geometry = geoData.features[0].geometry;
    campground.images= req.files.map( f=> ({ url:f.path,filename:f.filename }))
    campground.author = req.user._id
    // console.log(campground)
    await campground.save()
    req.flash('success',"New Campground created !")
    res.redirect(`/campgrounds/${campground.id}`)
}

module.exports.renderEditForm = async(req,res,next)=>{
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

module.exports.updateCampground = async(req,res,next)=>{
    const { id } = req.params
    // res.send(req.body)
    // res.send(req.files)
    const camp = await Campground.findByIdAndUpdate(id,{...req.body.campground},{new:true,runValidators:true})
    const geoData = await maptilerClient.geocoding.forward(req.body.campground.location, { limit: 1 });
    // res.send(geoData)
    camp.geometry = geoData.features[0].geometry;

    const imgs = req.files.map( f=> ({ url:f.path,filename:f.filename }))
    camp.images.push( ...imgs ) 
    await camp.save()
    if(req.body.deleteImages){
        for(let filename of req.body.deleteImages){
            await cloudinary.uploader.destroy(filename)
        }
        await camp.updateOne({ $pull:{images:{ filename: { $in:req.body.deleteImages } } } })
        console.log(camp)
    }
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