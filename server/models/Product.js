const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  image: { type: Array },
  price: { type: Number },
  priceId: {type: String}
},
  {
    timestamps: true
  })

const Product = mongoose.model("product", productSchema);
module.exports = Product;