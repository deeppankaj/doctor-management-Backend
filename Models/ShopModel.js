const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: [true, "Name should be unique "],
  },
  price: { type: Number, required: [true, "price must be required"] },
  rating: { type: Number },
  reviews: { type: Array },
  size: { type: Array, default: [] },
  stock: { type: Number, required: [true, "price must be provided"] },
  description: { type: String },
  image: { type: Array, default: [] },
  discount: { type: Number, default: 0 },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const shop = mongoose.model("shop", shopSchema);

module.exports = shop;
