const router = require("express").Router();

const productRoutes = require("./product.routes");
const userRoutes = require("./user.routes");
const contactRoutes = require("./contact.routes");
const stripe = require('./stripe')

router.use("/product", productRoutes);
router.use("/user", userRoutes);
router.use("/contact", contactRoutes);
router.use('/stripe', stripe);

module.exports = router;