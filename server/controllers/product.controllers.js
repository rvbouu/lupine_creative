const { Product } = require("../models")

module.exports = {


  // Get all Products
  getProducts: async function(){
    try {
      return await Product.find({})

    } catch(err){
      res.status(500).json({ message: "There are no Products in the Store"})
    }
  },


  // Get one Product by Id
  getSingleProduct: async function(id){
    try {
      return await Product.findById(id)
    } catch(err){
      res.status(500).json({ message: "There is not a Product by that ID."})
    }
  },


  // Create one Product
  createProduct: async function(data){
    try {
      return await Product.create(data)
    } catch(err){
      res.status(500).json({ message: "Unable to create Product - Serever Issue"})
    }
  },


  // Update Product by Id
  updateProduct: async function(id, data){
    try {
      return await Product.findByIdAndUpdate(
        id, 
        data, 
        { new: true }
      )
    } catch(err){
      res.status(500).json({ message: "Unable to update Product - Serever Issue"})
    }
  },


  // Delete Product by Id
  deleteProdcuct: async function(id){
    try {
      return await Product.findByIdAndDelete(id)
    } catch(err){
      res.status(500).json({ message: "Unable to delete Product - Serever Issue"})
    }
  }
}

