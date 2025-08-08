const Shop = require("../Models/Shop");

const shop = async (req, res) => {
  try {
    const items = { ...req.body };

    const checkItem = await Shop.findOne({ name: items.name });
    if (checkItem) {
      return res.status(400).json({ msg: "Item already exists" });
    }

    const newItem = await Shop.create({
      name: items.name,
      description: items.description,
      price: items.price,
      image: items.image,
      colors: items.colors,
      categories: items.categories,
    });
    res.status(201).json({ msg: "Item added successfully", item: newItem });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Server error" });
  }
};

module.exports = shop;
