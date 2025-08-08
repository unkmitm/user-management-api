const User = require("../Models/User");

const user = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
    const token = user.createJWT();
    await res
      .status(200)
      .json({ user: { name: user.name, pass: user.password }, token });
  } catch (err) {
    console.log(err);
  }
}

module.exports = user;

