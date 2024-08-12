const express = require("express")
const mongoose = require("mongoose")
const Product = require("./models/product")
const methodOverride = require("method-override")
const app = express()
const path = require("path")

// MongoDB Connection
const url = "mongodb://localhost:27017/farmStand"
mongoose.connect(url)
.then(()=>{
    console.log("MongoDB IS RUNNING")
}).catch( err => {
    console.log("SOMETHING WENT WRONG")
    console.log(err)
})

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))

const categories = ['fruit','vegetable','dairy']

app.get('/products',async(req,res)=>{
    const { category } = req.query;
    if(category){
        const products = await Product.find({category:category})
        res.render('products/index',{products,categories,category:category})

    }else{
        const products = await Product.find({})
        res.render('products/index',{products,categories,category:'All'})
    }
})

app.post('/products',async(req,res)=>{
    const {name,price,quantity} = req.body
    const product = new Product({name,price,quantity})
    await product.save()
    .then(()=>{
        res.redirect(`products/${product._id}`)
    }).catch(err=> res.send(err))
})

app.get('/products/:id/edit',async(req,res)=>{
    const product = await Product.findById(req.params.id)
    res.render('products/edit',{product,categories})
})

app.get('/products/new',(req,res)=>{
    res.render('products/new',{categories})
})

app.get('/products/:id',async(req,res)=>{
    const product = await Product.findById(req.params.id)
    res.render('products/singleProduct',{ product })
})

app.put("/products/:id",async(req,res)=>{
    const { id } = req.params
    const {name,price,category} = req.body
    const product = await Product.findByIdAndUpdate(id,{name,price,category},{new:true,runValidators:true})
    res.redirect(`/products/${product._id}`)
})

app.delete("/products/:id",async(req,res)=>{
    const { id } = req.params
    const del = await Product.findByIdAndDelete(id)
    res.redirect(`/products`)
})


// filtering by category
// app.get('/products/:category',async(req,res)=>{
//     const { category } = req.params
//     const products = await Product.find()
// })


app.listen(2000,()=>{
    console.log("SERVER IS RUNNING...")
    console.log("http://localhost:2000")
})

