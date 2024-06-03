const router = require('express').Router();
const {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProdcuct,


} = require('../../controllers/product.controllers');


// /api/products
// == Get all Products
router.get("/", async (req, res) => {
  try {
    const payload = await getProducts()
    res.status(200).json({ status: 'success', payload: payload })
  } catch(err){
    res.status(500).json({ status: 'error', msg: err.message })
  }
})


// /api/thoughts/:productId
// == Get One Product by Id
router.get("/:id", async (req, res) => {
  try {
    const payload = await getSingleProduct(req.params.id)
    res.status(200).json({ status: 'success', payload: payload })
  } catch(err){
    res.status(500).json({ status: 'error', msg: err.message })
  }
})


// /api/products
// == Create Product
router.post("/", async (req, res) => {
  try {
    const payload = await createProduct(req.body)
    res.status(200).json({ status: 'success', payload: payload })
  } catch(err){
    res.status(500).json({ status: 'error', msg: err.message })
  }
})


// /api/products
// == Update Product
router.put("/:id", async (req, res) => {
  try {
    const payload = await updateProduct(req.params.id, req.body)
    res.status(200).json({ status: 'success', payload: payload })
  } catch(err){
    res.status(500).json({ status: 'error', msg: err.message })
  }
})


// /api/thoughts/:productId
// == Delete Product
router.delete("/:id", async (req, res) => {
  try {
    const payload = await deleteProdcuct(req.params.id)
    res.status(200).json({ status: 'success', payload: payload })
  } catch(err){
    res.status(500).json({ status: 'error', msg: err.message })
  }
})


module.exports = router