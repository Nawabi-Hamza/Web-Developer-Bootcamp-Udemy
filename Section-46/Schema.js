const Joi = require('joi')
const AppError = require("./AppError")
// Middleware JOI
const validateCampground = (req,res,next)=>{
    const campgorundSchema = Joi.object({
        campground:Joi.object({
            title:Joi.string().required(),
            price:Joi.number().required().min(0),
            image:Joi.string().required(),
            location:Joi.string().required(),
            description:Joi.string().required()
        }).required()
    })
    const { error } = campgorundSchema.validate(req.body)
    if(error){
        const msg = error.details.map( el=>el.message).join(',')
        throw new AppError(msg,400)
    }else{
        next()
    } 
    // console.log(result)
}

const validateReview = (req,res,next)=>{
    const reviewSchema = Joi.object({
        review: Joi.object({
            rating:Joi.number().required().min(1).max(5),
            body:Joi.string().required()
        }).required()
    })
    // console.log(req.body)
    const { error } = reviewSchema.validate(req.body)
    if(error){
        const msg = error.details.map(el=>el.message).join(',')
        throw new AppError(msg,400)
    }else{
        next()
    }
}

module.exports = {
    validateCampground,
    validateReview

}