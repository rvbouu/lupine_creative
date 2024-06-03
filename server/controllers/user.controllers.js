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
      };
      res.status(200).json(user);
    } catch(err){
      console.log(err)
      return res.status(500).json(err);
    }
  },

  async createUser(req, res){
    try {
      const user = await User.create(req.body);

      return res.status(200).json(user);
    } catch(err){
      console.log(err)
      return res.status(500).json(err);
    }
  },

  async updateUserById(req, res){
    try {
      const user = await User.findByIdAndUpdate(
        {_id: req.params.userId}, 
        {$set: req.body}, 
        { runValidators: true ,new: true }
      );

      if(!user){
        return res.status(404).json({message: 'No user found with this ID.'})
      };

      return res.status(200).json(user)
    } catch(err){
      console.log(err)
      return res.status(500).json(err);
    }
  },

  async deleteUserById(req, res){
    try {
      const user = await User.findByIdAndDelete({_id: req.params.userId})

      if(!user){
        return res.status(404).json({message: 'No user found with this ID.'})
      };

      return res.status(200).json({message: 'User has been deleted.'});

    } catch(err){
      console.log(err);
      return res.status(500).json(err);
    }
  }

}

