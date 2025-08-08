const User = require("../Models/User");
const bcrypt = require("bcrypt");

// Post User
const user = async (req, res) => {
  try {
    // destructure
    const { email, password, name, role } = req.body;
    if (!email || !password || !name) {
      throw new Error("All fields are required");
    }

    // check if user already exists
    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      res.status(400).json({ msg: "User already exists" });
    }

    const newUser = await User.create({ email, password, name, role });
    const token = newUser.createJWT();

    await res.status(200).json({
      user: { id: newUser._id, name: newUser.name, role: newUser.role },
      token,
    });
  } catch (err) {
    console.log(err);
  }
};

// Get All Users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};
// Get Single User
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};

// update User with patch
const updateUser = async (req, res) => {
  try {
    const updates = { ...req.body };

    if (updates.password) {
      const salt = await bcrypt.genSalt(10);
      updates.password = await bcrypt.hash(updates.password, salt);
    }

    const user = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.status(200).json({ userUpdate: user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

// delete User
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json({ msg: "User deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

// login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    res.status(200).json({
      user: {
        success: true,
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.log("Error in login ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email, password } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password; 

    await user.save();

    res.status(200).json({ msg: "Profile updated successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Reset Password , Remember Me  ( Soon )

module.exports = {
  user,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  login,
  updateProfile,
};
