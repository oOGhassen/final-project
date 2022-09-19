const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: String,
  email: String,
  password: String,
  userRole: {
    type: String,
    roles: ["user", "admin"],
    default: "user"
  }
});

module.exports = mongoose.model("User", userSchema);