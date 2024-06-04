const { Product } = require("../models")

module.exports = {


  // Get all Products
  async getProducts(req, res){
    try {
      const products = await Product.find()
      return res.json(products);

      if(!products) {
        res.status(404).json({ message: "There are no Products in the Store" })
      }

      res.status(200).json({ message: "Here are all of the Products." })
    } catch(err){
      res.status(500).json({ message: "There are no Products in the Store - Server Issue"});
    }
  },


  // Get one Product by Id
  async getSingleProduct(req, res){
    try {
      const product = await Product.findOne({ _id: req.params.productId });
      return res.json(product);

      if(!product) {
        res.status(404).json({ message: "There is not a Product with that ID."})
      }

      res.status(200).json({ message: "Here is the Product." })
    } catch(err){
      res.status(500).json({ message: "Unable to find Product with that ID - Server Issue"})
    }
  },


  // Create one Product
  async createProduct(req, res){
    try {
      const product = await Product.create(req.body);
      return res.json(product);

      // res.status(200).json({ message: "Your Product has been created." })
    } catch(err){
      res.status(500).json({ message: "Unable to create Product - Serever Issue"})
    }
  },


  // Update Product by Id
  async updateProduct(req, res){
    try {
      const product = await Product.findOneAndUpdate(
        { _id: req.params.productId },
        { $set: req.body },
        { runValidators: true, new: true }
      )
      return res.json(product);

      if (!product) {
        return res.status(404).json({ message: 'This Product doesnt exist.' });
      }

      res.status(200).json({ message: "Your Product has been updated." })
    } catch(err){
      res.status(500).json({ message: "Unable to update Product - Serever Issue"})
    }
  },


  // Delete Product by Id
  async deleteProduct(req, res){
    try {
      const product = await Product.findOneAndDelete({ _id: req.params.productId });

      if (!product) {
        return res.status(404).json({ message: 'This Product does not exist' });
      }

      res.status(200).json({ message: "Your Product has been deleted." })
    } catch(err){
      res.status(500).json({ message: "Unable to delete Product - Serever Issue"})
    }
  }
}

