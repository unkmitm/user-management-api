const express = require("express");
const router = express.Router();

const authAdmin = require("../middlewares/authAdmin");
const checkAdmin = require("../middlewares/checkAdmin");

const shopController = require("../controllers/shop");
const userController = require("../controllers/user");

// Shop routes
router.get("/shop", shopController);

// User routes
router.post("/user", userController.user);
router.get("/allusers", userController.getAllUsers);
router.get("/user/:id", userController.getUser);
router.patch("/user/:id", authAdmin, checkAdmin, userController.updateUser);
router.delete("/user/:id", userController.deleteUser);
// console.log(`Result is ${userController.deleteUser}`);
module.exports = router;
