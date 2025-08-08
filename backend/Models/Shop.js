const mongoose = require("mongoose");

const shopSchema = mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  description: { type: String, required: [true, "Description is required"] },
  price: { type: Number, required: [true, "Price is required"] },
  image: { type: String, required: [true, "Image is required"] },
  colors: { type: [String] , default : [] },
  category : { type: String, required: [true, "Category is required"] }
});

module.exports = mongoose.model("Shop", shopSchema);
