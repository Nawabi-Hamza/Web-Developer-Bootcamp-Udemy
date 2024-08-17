const express = require("express")
const mongoose = require("mongoose")
const Product = require("./models/product")
const Farm = require("./models/farm")
const methodOverride = require("method-override")
const path = require("path")
const session = require('express-session')
const flash = require('connect-flash')

const app = express()
// MongoDB Connection
const url = "mongodb://localhost:27017/flashDemo"
mongoose.connect(url)
.then(()=>{
    console.log("MongoDB IS RUNNING")
}).catch( err => {
    console.log("SOMETHING WENT WRONG")
    console.log(err)
})

const sessionOptions = { secret:'thisisnotgoodsecret',resave:false,saveUninitialized:false}

app.use(session(sessionOptions))
app.use(flash())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

const categories = ['fruit','vegetable','dairy']

//FARM ROUTES
app.get('/farms',async(req,res)=>{
    const farms = await Farm.find()
    res.render('farms/index',{farms,messages:req.flash('success')})
})
app.get("/farms/new",async(req,res)=>{
    const product = await Product.find()
    res.render('farms/new',{product})
})
app.get('/farms/:id',async(req,res)=>{
    const { id } = req.params
    const farm = await Farm.findById(id).populate('products')
    console.log(farm)
    res.render('farms/singleFarm',{ farm,messages:req.flash('success') })
})
app.delete('/farms/:id',async(req,res)=>{
    const { id } = req.params
    const farm = await Farm.findByIdAndDelete(id)
    req.flash('success',"DELETED successfuly...")
    res.redirect('/farms') 
})

app.post('/farms',async(req,res)=>{
    const farm = new Farm(req.body)
    await farm.save()
    req.flash('success',"SUCCESSFULY made a new farm !")
    res.redirect('/farms')
})
app.get('/farms/:id/products/new',async(req,res)=>{
    const { id } = req.params
    const farm = await Farm.findById(id);
    res.render('products/new',{categories,farm})
})
app.post("/farms/:id/products",async(req,res)=>{
    const { id } = req.params
    const farm = await Farm.findById(id)
    // console.log(farm)
    const { name,price,category } =  req.body;
    const product = new Product({name,price,category})
    farm.products.push(product)
    product.farm = farm
    await farm.save()
    await product.save()
    req.flash('success',"Product added to this farm ...")
    res.redirect(`/farms/${id}`)
})




// PRODUCT ROUTES
app.get('/products',async(req,res)=>{
    const { category } = req.query;
    if(category){
        const products = await Product.find({category:category})
        res.render('products/index',{products,categories,category:category,messages:req.flash('info')})

    }else{
        const products = await Product.find({})
        res.render('products/index',{products,categories,category:'All',messages:req.flash('info')})
    }
})

app.post('/products',async(req,res)=>{
    const {name,price,category} = req.body
    const product = new Product({name,price,category})
    await product.save()
    .then(()=>{
        req.flash('info',"product add to database")
        res.redirect(`products/${product._id}`)
    }).catch(err=> res.send(err))
})

app.get('/products/:id/edit',async(req,res)=>{
    const product = await Product.findById(req.params.id)
    res.render('products/edit',{product,categories})
})

app.get('/products/new',(req,res)=>{
    res.render('products/new',{categories,farm:false})
})
    
app.get('/products/:id',async(req,res)=>{
     await Product.findById(req.params.id).populate('farm','name')
     .then((data)=>{
         res.render('products/singleProduct',{ product:data,messages:req.flash('info') })
     })
    .catch(err=>{
        res.redirect("/products")
    })
})

app.put("/products/:id",async(req,res)=>{
    const { id } = req.params
    const {name,price,category} = req.body
    const product = await Product.findByIdAndUpdate(id,{name,price,category},{new:true,runValidators:true})
    req.flash('info',`the product (${name}) updated ... `)
    res.redirect(`/products/${product._id}`)
})

app.delete("/products/:id",async(req,res)=>{
    const { id } = req.params
    const del = await Product.findByIdAndDelete(id)
    req.flash('info','product deleted succesfuly ...')
    res.redirect(`/products`)
})

// when user come with any url it redirect him to products page
app.get('/*',(req,res)=>{
    res.redirect('/products')
})
app.get('/products/*',(req,res)=>{
    res.redirect('/products')
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

