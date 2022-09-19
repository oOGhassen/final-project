const User= require('../models/User');
const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("secret");


exports.register = async (req, res) => {
    const { fullName, email, password, userRole} = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        res.status(401).json({ msg: "user is already exist" });
      }
      const newUser = new User({ fullName, email, password, userRole });
  
      
      const salt = await bc.genSalt(10);
      const hash = bc.hashSync(password, salt);
      newUser.password = hash;
  
      
      await newUser.save();
  
      
      const payload = {
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
      };
  
      const token = jwt.sign(payload, secret);
  
      res.status(200).send({
        token,
        user: {
          id: newUser._id,
          email: newUser.email,
          password: newUser.password,
          fullName: newUser.fullName,
          userRole: newUser.userRole
        }
      });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

  exports.signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
      const theUser = await User.findOne({ email });
      if (!theUser) {
        res.status(402).json({ msg: "email or password wrong" });
      }
  
      
      const isMatch = await bc.compare(password, theUser.password);
  
      if (!isMatch) {
        res.status(402).json({ msg: "email or password wrong" });
      }
  
      
      const payload = {
        id: theUser._id,
        fullName: theUser.fullName,
        email: theUser.email,
      };
      const token = jwt.sign(payload, secret);
  
      res.status(200).json({
        token,
        user: {
          id: theUser._id,
          email: theUser.email,
          password: theUser.password,
          fullName: theUser.fullName,
          userRole: theUser.userRole
        }
      });
    } catch (error) {
      res.status(501).json({ msg: error.message });
    }
  };
  
  
  exports.getUser = (req, res) => {
    res.send(req.user);
  }
  
    
