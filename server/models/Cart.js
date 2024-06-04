const mongoose = require("mongoose");
const validateMongoDbId = (id) => {
  return mongoose.Types.ProductId.isValid(id);
};

const cartSchema = new mongoose.Schema({
  name: { type: String },
  category: { type: String },
  description: { type: String },
  price: { type: Number },
  qty: { type: Number }
},
{
  userId: {
    type: mongoose.Schmea.Types.ProductId,
    ref: "User"
  },
  productId: {
    type: mongoose.Schema.Types.ProductId,
    ref: "Product"
  },
  qty: {
    type: Number, 
    required: true, 
  }, 
  price: {
    type: Number, 
    required: true,
  }
},
{
  timestamps: true
})

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;