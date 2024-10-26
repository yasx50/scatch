const express = require('express')
const router = express.Router()
const upload = require('../config/multer-congig'); 
const multer = require('multer')


// Updated route to handle file uploads
router.post("/owners/products/createproduct",upload.single('image'), async (req, res) => {
    // Log incoming data for debugging
    console.log('Body:', req.body);
    console.log('File:', req.file);
  
    let { name, original_price, discounted_price, panel_bg_color, text_color } = req.body;
  
    let product = await productModel.create({
      name,
      image: req.file ? req.file.path : null, // Store the path of the uploaded image
      price: original_price,
      discount: discounted_price,
      bgcolor: panel_bg_color,
      panelcolor: panel_bg_color,
      textcolor: text_color
    });
    // res.send(req.file)
    res.status(201).send(req.file,product);
  });

module.exports = router;