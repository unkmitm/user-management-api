const User = require("../Models/User");

const user = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });

    // destructure
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      throw new Error("All fields are required");
    }

    // check if user already exists
    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      throw new Error(`User already exists ${userAlreadyExists}`);
    }

    const token = user.createJWT();
    await res
      .status(200)
      .json({ user: { name: user.name, pass: user.password }, token });
  } catch (err) {
    console.log(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { user, getAllUsers, getUser };
