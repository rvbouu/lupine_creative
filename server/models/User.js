const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  fname: { type: String },
  lname: { type: String },
  email: { type: String },
  password: { type: String },
},
{
  timestamps: true
})

userSchema.pre("save", async function(next){
  this.password = await bcrypt.hash(this.password, 10);
  next()
})

const User = mongoose.model("User", userSchema);
module.exports = User;