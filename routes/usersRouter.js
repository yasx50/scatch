const express = require("express");
const router = express.Router();
const { registerUser } = require('../controllers/authController');

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/register",registerUser );
module.exports = router;
