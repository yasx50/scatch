const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner");
const productModel = require('../models/product')
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV == "development") {
  router.post("/", async(req, res) => {
    let owners = await ownerModel.find();
    if(owners.length>0) {
        return 
        res.send(503).
        send("already owner exist")
    }
    let {fullname,email,password} = req.body;
    let createdUser = await ownerModel.create({
    fullname ,
    email ,
    password ,
    gstin
    })
    console.log(createdUser);
    
    res.status(201).send(createdUser)

  });
}


router.get("/admin", (req, res) => {
  res.render('createproduct')
});

// router.post("/product/createproduct", async(req, res) => {
//   let {name,original_price,discounted_price,image,panel_bg_color,text_color} = req.body
//   let product = await productModel.create({
//     name,
//     image,
//     price:original_price,
//     discount:discounted_price,
//     bgcolor:panel_bg_color,
//     panelcolor:panel_bg_color,
//     textcolor:text_color

//   })
//   res.send(product)
// });



module.exports = router;
