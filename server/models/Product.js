const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  qty: { type: Number }
},
{
  timestamps: true
})

const Product = mongoose.model("Product", productSchema);
module.exports = Product;