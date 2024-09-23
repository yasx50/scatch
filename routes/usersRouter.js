const express = require('express')
const router = express.Router()
const userModel = require('../models/user')




router.get('/',(req,res)=>{
    res.render('index')
})


router.post('/register',async(req,res)=>{
   try {
    let {fullname,email,password} = req.body;
    let user =  await userModel.create({
         fullname,
         email,
         password
     })
     res.send(user)
    
   } catch (error) {
    console.log(error);
    
    
   }
   
})
module.exports = router;