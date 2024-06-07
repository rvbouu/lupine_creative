const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    total: [
      {
        _id: 0,
        price: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1
        },
      }
    ],
  },
  {
    id: false,
    timestamps: true
  }
)

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;