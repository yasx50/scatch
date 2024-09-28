const express = require("express");
const router = express.Router();
const { registerUser,loginUser } = require('../controllers/authController');

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/register",registerUser );
module.exports = router;


router.post("/login",loginUser );
module.exports = router;
