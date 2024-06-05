const router = require("express").Router();
const apiRoutes = require("./api");
const stripeRoutes = require('./stripe');

router.use("/api", apiRoutes);
router.use('/stripe', stripeRoutes)

module.exports = router;