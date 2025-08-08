const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

// Encrypt Password
userSchema.methods.pre = (next) => {
  const salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hash(this.password, salt);
  next();
};

// Create JWT
userSchema.methods.createJWT = () => {
  return jwt.sign(
    { id: this._id, name: this.name , role : this.role}, // payload
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};

// Compare Password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
