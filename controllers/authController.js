const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require('../utils/generateToken');

module.exports.registerUser = async (req, res) => {
  try {
    let { fullName, email, password } = req.body;

    let user = await userModel.findOne({ email: email });
    if (user) {
      req.flash('error', 'email exists Please log in');
      return res.redirect('/'); // Redirect to login page with flash message
    }

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) {
          req.flash('error', err.message);
          return res.redirect('/register'); // Redirect back with an error
        } else {
          let newUser = await userModel.create({
            fullName,
            email,
            password: hash,
          });
          let token = generateToken(newUser);
          res.cookie("token", token);
          req.flash('success', 'Registration successful!'); // Add success message
          res.redirect('/shop');
        }
      });
    });
  } catch (error) {
    req.flash('error', error.message);
    res.redirect('/register'); // Redirect back with an error
  }
};

module.exports.loginUser = async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email: email });
  if (!user) {
    req.flash('error', 'User not found');
    return res.redirect('/'); // Redirect back with an error
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = generateToken(user);
      res.cookie("token", token);
      req.flash('success', 'Login successful!'); // Add success message
      res.redirect('/shop');
    } else {
      req.flash('error', 'Password is incorrect');
      res.redirect('/'); // Redirect back with an error
    }
  });
};

module.exports.logoutUser = (req, res) => {
  res.cookie('token', '');
  req.flash('success', 'Logged out successfully!'); // Add logout success message
  res.redirect('/');
};
