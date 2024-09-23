const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner");
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV == "development") {
  router.post("/create", async(req, res) => {
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
router.get("/", (req, res) => {
  console.log("this is owners routers");
});



module.exports = router;
