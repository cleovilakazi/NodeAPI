const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require('validator')



const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function(email, password) {
  if(!email || !password){
    throw new Error("Fill all fields")

  }
  if(!validator.isEmail(email)){
    throw new Error("Email not valid")   
  }
  if(!validator.isStrongPassword(password)){
    throw new Error("Password not strong") 

  }
  const exists = await this.findOne({ email });
  if (exists) {
    throw new Error("Email already in use");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hash });

  return user;
};

module.exports = mongoose.model("User",userSchema);
