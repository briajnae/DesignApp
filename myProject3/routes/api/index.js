const router = require("express").Router();
const designRoutes = require("./design");

// Design routes
router.use("/design", designRoutes);

module.exports = router;