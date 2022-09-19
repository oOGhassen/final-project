const express = require("express");
const { register, signIn , getUser } = require("../controllers/user.contoller");
const { RegisterRules, validator } = require('../middlewares/validator');
const auth = require("../middlewares/auth");
const router = express.Router();

router.post("/register",RegisterRules(), validator,register);
router.post("/signin",signIn);
router.get("/profile", auth, getUser);



module.exports = router;