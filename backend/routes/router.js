const express = require("express");
const router = express.Router();

const authAdmin = require("../middlewares/authAdmin");
const checkAdmin = require("../middlewares/checkAdmin");
const authenticateUser = require("../middlewares/authenticateUser");

const shopController = require("../controllers/shop");
const userController = require("../controllers/user");

// Shop routes
router.post("/shop", authAdmin, checkAdmin, shopController.shop);
router.patch("/user/profile", authenticateUser, userController.updateProfile);

// User routes
router.post("/user", userController.user);
router.get("/allusers", userController.getAllUsers);
router.get("/user/:id", userController.getUser);
router.patch("/user/:id", authAdmin, checkAdmin, userController.updateUser);
router.delete("/user/:id", authAdmin, checkAdmin, userController.deleteUser);

// Check user profile
router.post("/login", userController.login);
module.exports = router;
