const express = require("express");
const router = express.Router();
const shop = require("../controllers/shop");
const user = require("../controllers/user");

router.get("/shop", shop);
router.post("/user" , user)
module.exports = router;
