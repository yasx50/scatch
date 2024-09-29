//this file controls the registraion of the new user

const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// utility function from util_folder for genrating the cookie 

const {generateToken} = require('../utils/generateToken')

module.exports.registerUser = async(req, res) => {
    try {
      let { fullName, email, password } = req.body;

      let user = await userModel.findOne({email:email});
      if(user) return res.status(401).send('please log in')

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
            res.redirect('/shop')
          }
        });
      });
    } catch (error) {
      res.send(error.message);
    }
  }

module.exports.loginUser = async (req,res)=>{
  let {email,password} = req.body;
  let user = await userModel.findOne({email:email})
  if(!user) return res.send("bhai kux to gadbad chhe");

  bcrypt.compare(password,user.password,(err,result)=>{
    if(result){
      let token = generateToken(user)
      res.cookie("token" ,token)
      res.redirect('/shop')
    }
    else{
      res.send('password is incorrect')
    }
  })

}

module.exports.logoutUser = ()=>{
  res.cookie('token','')
  res.redirect('/')
}