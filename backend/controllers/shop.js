const Shop = require("../Models/Shop");
const multer = require("multer");
const path = require("path");

// multer setting
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads")); 
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); 
  },
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB
  },
});

// multer middleware
const upload = multer({ storage: storage });

const shop = async (req, res) => {
  try {
    const items = req.body;

    const checkItem = await Shop.findOne({ name: items.name });
    if (checkItem) {
      return res.status(400).json({ msg: "Item already exists" });
    }

    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const newItem = await Shop.create({
      name: items.name,
      description: items.description,
      price: items.price,
      image: imagePath,
      colors: items.colors,
      categories: items.categories,
    });

    res.status(201).json({ msg: "Item added successfully", item: newItem });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { shop, upload };
