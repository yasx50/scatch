const express = require('express')
const router = express.Router()
const isLogedin  = require('../middlewares/isLoggedIn')
const productModel = require('../models/product')


router.get('/',(req,res)=>{
    let error = req.flash('error')
    res.render('index',{error})
})

router.get('/shop',isLogedin,async(req,res)=>{
    let products = await productModel.find()
    res.render('shop',{products})
})


module.exports = router;
