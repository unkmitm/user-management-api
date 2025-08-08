const express = require("express");
const router = express.Router();

const shopController = require("../controllers/shop");
const userController = require("../controllers/user");

// Shop routes
router.get("/shop", shopController);

// User routes
router.post("/user", userController.user);
router.get("/allusers", userController.getAllUsers);
router.get("/user/:id", userController.getUser);

module.exports = router;
