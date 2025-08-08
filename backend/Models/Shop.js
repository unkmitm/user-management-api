const mongoose = require("mongoose");

const shopSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    description: { type: String, required: [true, "Description is required"] },
    price: { type: Number, required: [true, "Price is required"] },
    image: { type: String },
    colors: { type: [String], default: [] },
    categories: { type: [String], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shop", shopSchema);
