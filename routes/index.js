const express = require('express')
const router = express.Router()
const isLogedin  = require('../middlewares/isLoggedIn')


router.get('/',(req,res)=>{
    let error = req.flash('error')
    res.render('index',{error})
})

router.get('/shop',isLogedin,(req,res)=>{
    let error = req.flash('error')
    res.render('shop',{error})
})


module.exports = router;
