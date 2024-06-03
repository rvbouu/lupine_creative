const { User } = require("../models")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config()

module.exports = {
  async createToken(user) {
    const tokenData = { email: user.email }
    const token = await jwt.sign(tokenData, process.env.TOKEN_ENCRYPT_KEY)
    return token
  },

  // /api/users
  async getAllUsers(req, res) {
    try {
      const users = await User.find()
        .populate({ path: 'purchases', select: '-__v' });
      return res.status(200).json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // /api/users/userId
  async getOneUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate({ path: 'products', select: '-__v' });

      if (!user) {
        return res.status(404).json({ message: 'No user found with this ID.' })
      };
      res.status(200).json(user);
    } catch (err) {
      console.log(err)
      return res.status(500).json(err);
    }
  },


  // /api/users
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      const token = await createToken(user);

      return res.status(200)
        .cookie('auth-cookie', token, {
          maxAge: 86400000,
          httpOnly: false,
          secure: process.env.NODE_ENV === 'production'
        })
        .json(user);
    } catch (err) {
      console.log(err)
      return res.status(500).json(err);
    }
  },

  async loginUser(req, res) {
    try {
      const user = await findOne({ email: req.body.email })

      if (!user) {
        res.status(404).json({ status: 'error', msg: 'Could not authenticate user' })
      }

      const verify = bcrypt.compare(req.body.password, user.password)
      if (!verify) {
        res.status(404).json({ status: 'error', msg: 'Could not authenticate user' })
      }

      const token = await createToken(user)

      res
        .status(200)
        .cookie('auth-cookie', token, {
          maxAge: 86400000,
          httpOnly: false,
          secure: process.env.NODE_ENV === 'production'
        })
        .json(user)
    }
    catch {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async verifyUser(req, res) {
      const cookie = req.cookies['auth-cookie'];

      if (!cookie) {
        res.status(404).json({ status: 'error', msg: 'Could not authenticate user' })
      }

      const decryptedCookie = jwt.verify(cookie, process.env.TOKEN_ENCRYPT_KEY)

      const user = await User.findOne({ email: decryptedCookie.email })

      if(!user){
        res.status(404).json({ status: 'error', msg: 'Could not authenticate user' })
      }

      res.status(200).json(user)
  },

  // /api/users/userId
  async updateUserById(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No user found with this ID.' })
      };

      return res.status(200).json(user)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err);
    }
  },

  // /api/users/userId
  async deleteUserById(req, res) {
    try {
      const user = await User.findByIdAndDelete({ _id: req.params.userId })

      if (!user) {
        return res.status(404).json({ message: 'No user found with this ID.' })
      };

      return res.status(200).json({ message: 'User has been deleted.' });

    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
}

