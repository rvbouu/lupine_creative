const router = require("express").Router();

const { 
  getUserCart,  
  getUserCartById,
  createUserCart, 
  updateUserCartById, 
  deleteUserCartById 
} = require("../../controllers/cart.controllers")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config()

//Ask about this part. 
async function createToken(user){
  const tokenData = { email: user.email }
  const token = await jwt.sign(tokenData, process.env.TOKEN_ENCRYPT_KEY)
  return token
}



