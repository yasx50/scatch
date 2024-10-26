const express = require('express')
const router = express.Router()
const productModel = require('../models/product');

const upload = require('../config/multer-congig'); 
const multer = require('multer')


// Updated route to handle file uploads
router.post("/createproduct",upload.single('image'), async (req, res) => {
try {

  
  let { name, original_price, discounted_price, panel_bg_color, text_color } = req.body;

  let product = await productModel.create({
    name,
    image: req.file.buffer, // Store the path of the uploaded image
    price: original_price,
    discount: discounted_price,
    bgcolor: panel_bg_color,
    panelcolor: panel_bg_color,
    textcolor: text_color
  });
  req.flash("success","your product  is created successfully")
  res.redirect("/owners/admin")
  
} catch (error) {
  res.send(error.message)
  
} 

});

module.exports = router;