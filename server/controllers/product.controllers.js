const { Product } = require("../models")

module.exports = {


  // Get all Products
  getProducts: async function(req, res){
    try {
      const products = await Product.find()
      res.json(products);

    } catch(err){
      res.status(500).json({ message: "There are no Products in the Store"});
    }
  },


  // Get one Product by Id
  getSingleProduct: async function(req, res){
    try {
      const product = await Product.findOne({ _id: req.params.userId });

      if(!product) {
        res.status(404).json({ message: "There is not a Product with that ID."})
      }

    } catch(err){
      res.status(500).json({ message: "Unable to find Product with that ID - Server Issue"})
    }
  },


  // Create one Product
  createProduct: async function(req, res){
    try {
      const product = await Product.create(req.body);
      return res.json(product);

    } catch(err){
      res.status(500).json({ message: "Unable to create Product - Serever Issue"})
    }
  },


  // Update Product by Id
  updateProduct: async function(req, res){
    try {
      const product = await Product.findOneAndUpdate (
        { _id: req.params.productId },
        // ADD FEATURES OR ELEMENTS OF THE PROJECT OBJECT 
        // { SOMTHING: req.params.SOMETHING},
        // { SOMTHING: req.params.SOMETHING},
        // { SOMTHING: req.params.SOMETHING},
        // { SOMTHING: req.params.SOMETHING},

        // data, 
        { runValidators: true, new: true }
      )

      if (!product) {
        return res.status(404).json({ message: 'This Product doesnt exist.' });
      }

    } catch(err){
      res.status(500).json({ message: "Unable to update Product - Serever Issue"})
    }
  },


  // Delete Product by Id
  deleteProduct: async function(req, res){
    try {
      const product = await Product.findOneAndDelete({ _id: req.params.userId });

      if (!product) {
        return res.status(404).json({ message: 'This Product does not exist' });
      }

    } catch(err){
      res.status(500).json({ message: "Unable to delete Product - Serever Issue"})
    }
  }
}

