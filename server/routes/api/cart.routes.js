const router = require("express").Router();

const { 
  getCart,
  createCart,
  deleteItemFromCart
} = require("../../controllers/cart.controllers")
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken")
// require("dotenv").config()

router.route('/').get(getCart).post(createCart)

// router.route('/:productId').get(getSingleProduct).put(updateProduct).delete(deleteProduct)



