const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user'
    },
    products: [{
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
      },
      name: String,
      quantity: {
        type: Number,
        required: true,
        min: 1,
        default: 1
      },
      price: Number
    }],
    total: {
      type: Number,
      required: true,
      default: 0
    }
  },
  {
    timestamps: true
  }
)

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;