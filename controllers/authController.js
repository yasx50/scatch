//this file controls the registraion of the new user

const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// utility function from util_folder for genrating the cookie 

const {generateToken} = require('../utils/generateToken')

module.exports.registerUser = (req, res) => {
    try {
      let { fullName, email, password } = req.body;
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
          if (err) return res.send(err.message);
          else {
            let user = await userModel.create({
              fullName,
              email,
              password: hash,
            });
            let token = generateToken(user)
            res.cookie("token", token);
            res.send("user created successfully");
          }
        });
      });
    } catch (error) {
      res.send(error.message);
    }
  }