const router = require('express').Router();
const {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,


} = require('../../controllers/product.controllers');

router.route('/').get(getProducts).post(createProduct)

router.route('/:productId').get(getSingleProduct).put(updateProduct).delete(deleteProduct)


module.exports = router