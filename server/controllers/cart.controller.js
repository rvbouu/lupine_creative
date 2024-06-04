// Mainly this controller will pertain to the Users. 

const { Cart } = require("../models");
const { validateMongoDbId } = require("../models/Cart");




module.exports = {
  
  // Create the Cart
  userCart: async (req, res) => {
    const { productId, qty, price } = req.body;
    const { _id } = req.user;
    validateMongoDbId(_id);
    try {
      const newCart = await new Cart({
        userId: _id,
        productId,
        qty,
        price,
        orderBy: user?._id,
      }).save();
      res.json(newCart);

      res.status(200).json({ message: "Your Cart has been collected! "})
    } catch (err) {
      res.status(500).json({ message: "Unable to retreive your cart - Server Issue."})
    }
  },


  
}
