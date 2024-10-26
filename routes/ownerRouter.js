const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner");
const productModel = require('../models/product');

const upload = require('../config/multer-congig'); 

console.log(process.env.NODE_ENV);

// if (process.env.NODE_ENV == "development") {
//   router.post("/", async (req, res) => {
//     let owners = await ownerModel.find();
//     if (owners.length > 0) {
//       return res.status(503).send("Already an owner exists");
//     }
//     let { fullname, email, password, gstin } = req.body;
//     let createdUser = await ownerModel.create({
//       fullname,
//       email,
//       password,
//       gstin
//     });
//     console.log(createdUser);

//     res.status(201).send(createdUser);
//   });
// }






router.get("/admin", (req, res) => {
  res.render('createproduct');
});



module.exports = router;
