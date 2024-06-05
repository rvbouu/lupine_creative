const router = require("express").Router();

const productRoutes = require("./product.routes");
const userRoutes = require("./user.routes");
const contactRoutes = require("./contact.routes");

router.use("/product", productRoutes);
router.use("/user", userRoutes);
router.use("/contact", contactRoutes);

module.exports = router;