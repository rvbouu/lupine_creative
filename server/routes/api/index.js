const router = require("express").Router();

const productRoutes = require("./product.routes");
const userRoutes = require("./user.routes");

router.use("/product", productRoutes);
router.use("/user", userRoutes);

module.exports = router;