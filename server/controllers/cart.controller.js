// Mainly this controller will pertain to the Users. 

const { Cart, Product } = require("../models");




module.exports = {
  // GET /cart
  async getCart(req, res) {
    const user = req.user._id
    try {
      const cart = await Cart.findOne({ user });
      if (cart && cart.products.length > 0) {
        res.status(200).send(cart)
      } else {
        res.send(null)
      }
    }
    catch (err) {
      // console.log(err)
      res.status.send()
    }
  },

  // POST /cart
  async createCart(req, res) {
    const user = req.user._id;
    const { productId, quantity } = req.body;

    try {
      const cart = await Cart.findOne({ user });
      const product = Product.findOne({ _id: productId });

      if (!product) {
        return res.status(404).send({ message: 'product not found' });
      }

      const price = product.price;
      const name = product.name;

      if (cart) {
        const productIndex = cart.products.findIndex((product) => product.productId == productId);

        if (productIndex > -1) {
          let product = cart.products[productIndex];
          product.quantity += quantity;
          cart.total = cart.products.reduce((acc, current) => {
            return acc + current.quantity * current.price;
          }, 0)

          cart.products[productIndex] = product;
          await cart.save();
          res.status(200).send(cart);
        }
        else {
          cart.products.push({ productId, name, quantity, price });
          cart.total = cart.products.reduce((acc, curr) => {
            return acc + curr.quantity * curr.price;
          }, 0)
          await cart.save();
          res.status(200).send(cart);
        }
      }
      else {
        const newCart = await Cart.create({
          user,
          products: [{ productId, name, quantity, price }],
          total: quantity * price,
        });
        return res.status(201).send(newCart);
      }
    } catch (error) {
      // console.log(error);
      res.status(500).send("something went wrong");
    }
  },

  async deleteItemFromCart(req, res) {
    const user = req.user._id;
    const productId = req.query.productId;
    try {
      let cart = await Cart.findOne({ user });
      const productIndex = cart.products.findIndex((product) => product.productId == productId);
      if (productIndex > -1) {
        let product = cart.products[productIndex];
        cart.total -= product.quantity * product.price;
        if (cart.total < 0) {
          cart.total = 0
        }
        cart.products.splice(productIndex, 1);
        cart.total = cart.products.reduce((acc, curr) => {
          return acc + curr.quantity * curr.price;
        }, 0)
        cart = await cart.save();
        res.status(200).send(cart);
      } else {
        res.status(404).send("product not found");
      }
    } catch (error) {
      // console.log(error);
      res.status(400).send();
    }
  }
}
