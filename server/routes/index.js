const router = require("express").Router();
const apiRoutes = require("./api");
const stripeRoutes = require('./api/stripe');

router.use("/api", apiRoutes);
router.use('/stripe', stripeRoutes)

module.exports = router;