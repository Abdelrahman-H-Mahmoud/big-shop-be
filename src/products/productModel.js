const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String },
  availableQuantity: { type: Number },
  inStock: { type: Boolean, default: true },
  label: { type: String, default: "new" },
  category: { type: String },
});

module.exports = mongoose.model("product", productSchema);
