const { Product } = require("../models")

module.exports = {

  getAll: async function(){
    try {
      return await Product.find({})
    } catch(err){
      throw new Error(err.message)
    }
  },

  getOne: async function(criteriaObj){
    try {
      return await Product.findOne(criteriaObj)
    } catch(err){
      throw new Error(err.message)
    }
  },

  getById: async function(id){
    try {
      return await Product.findById(id)
    } catch(err){
      throw new Error(err.message)
    }
  },

  create: async function(data){
    try {
      return await Product.create(data)
    } catch(err){
      throw new Error(err.message)
    }
  },

  updateById: async function(id, data){
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

  deleteById: async function(id){
    try {
      return await Product.findByIdAndDelete(id)
    } catch(err){
      throw new Error(err.message)
    }
  }

}

