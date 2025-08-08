const express = require("express");
const router = express.Router();
const shop = require("../controllers/shop");
const {user , getAllUsers} = require("../controllers/user");

router.get("/shop", shop);
router.post("/user" , user).get("/user" , getAllUsers);
module.exports = router;
