const express = require("express");
const router = express.Router();
const {
     registerUser,
     loginUser,
     logoutUser
     } = require('../controllers/authController');



router.post("/register",registerUser );
module.exports = router;


router.post("/login",loginUser );
module.exports = router;

router.get("/logout",logoutUser );
module.exports = router;
