const { User } = require("../models")

module.exports = {
  
  async getAllUsers(req, res){
    try {
      const users = await User.find()
        .populate({path: 'purchases', select: '-__v'});
        return res.status(200).json(users);
    } catch(err){
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async getOneUser(req, res){
    try {
      const user = await User.findOne({_id: req.params.userId})
        .populate({path: 'products', select: '-__v'});

      if(!user){
        return res.status(404).json({message: 'No user found with this ID.'})
      }
    } catch(err){
      throw new Error(err.message)
    }
  },

  async getUserById(req, res){
    try {
      return await User.findById(id)
    } catch(err){
      throw new Error(err.message)
    }
  },

  async createUser(req, res){
    try {
      return await User.create(data)
    } catch(err){
      throw new Error(err.message)
    }
  },

  async updateUserById(req, res){
    try {
      return await User.findByIdAndUpdate(
        id, 
        data, 
        { new: true }
      )
    } catch(err){
      throw new Error(err.message)
    }
  },

  async deleteUserById(req, res){
    try {
      return await User.findByIdAndDelete(id)
    } catch(err){
      throw new Error(err.message)
    }
  }

}

