const express = require('express')
const router = express.Router()
const upload = require('../config/multer-congig'); 


router.post('/create',upload.single('image'),(req,res)=>{
    
    res.send(req.file)
    

})


module.exports = router;