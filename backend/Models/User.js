const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  },
});

userSchema.methods.pre = (next) => {
  this.password = bcrypt.hash(this.password, 10);
  next();
};

const User = mongoose.model("User", userSchema);

module.exports = User;
