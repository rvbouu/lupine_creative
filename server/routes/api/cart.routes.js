const router = require("express").Router();
const { Cart } = require('../../models')

router.get('/', async (req, res) => {
  try {
    const cart = await Cart.find()
    res.status(200).json(cart)
  }
  catch (err) {
    res.status(500).json({ status: err, message: "An error has occured" });
  }
})

router.get('/:id', async (req, res) => {
  try {
    const cart = await Cart.findOne({ _id: req.params.id })
    res.status(200).json(cart)
  }
  catch (err) {
    res.status(500).json({ status: err, message: "An error has occured" });
  }
})

router.post('/', async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  }
  catch (err) {
    res.status(500).json({ status: err, message: "An error has occured" });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updateCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: req.body
      },
      { new: true }
    )
    res.status(200).json(updateCart)
  }
  catch (err) {
    res.status(500).json({ status: err, message: "An error has occured" })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const cart = await Cart.findOneAndDelete(req.params.id)
    res.status(200).json("Cart has been deleted.")
  }
  catch (err) {
    res.status(500).json({ status: err, message: "An error has occured" })
  }
})

module.exports = router