const { Product } = require("../models")

module.exports = {


  // Get all Products
  getProducts: async function(){
    try {
      return await Product.find({})
    } catch(err){
      throw new Error(err.message)
    }
  },


  // Get one Product by Id
  getSingleProduct: async function(id){
    try {
      return await Product.findById(id)
    } catch(err){
      throw new Error(err.message)
    }
  },


  // Create one Product
  createProduct: async function(data){
    try {
      return await Product.create(data)
    } catch(err){
      throw new Error(err.message)
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
      throw new Error(err.message)
    }
  },


  // Delete Product by Id
  deleteProdcuct: async function(id){
    try {
      return await Product.findByIdAndDelete(id)
    } catch(err){
      throw new Error(err.message)
    }
  }
}

