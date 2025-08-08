const Shop = require("../Models/Shop");

const shop = async (req, res) => {
  const items = { ...req.body };

  const checkItem = await Shop.findOne({ name: items.name });
  if (checkItem) {
    return res.status(400).json({ msg: "Item already exists" });
  }

};

module.exports = shop;
