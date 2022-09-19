const jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("secret");
const User = require("../models/User");

const auth = async(req, res, next) => {
    const token = req.headers.authorization;

    try {
        const decoded = jwt.verify(token, secret);
        const user = await User.findById(decoded.id);
        if(!user){ res.status(404).json({msg:"Unauthorized"})
    } else {
            req.user = user;
            next();
        }
    } catch (error) { 
        res.status(502).json({errors:error.message});
    }
};

module.exports = auth;