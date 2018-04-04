const router = require("express").Router();
const designController = require("../../controller/designController");

// Matches with "/api/design"
router.route("/")
  .get(designController.findAll)
  .post(designController.create);

// Matches with "/api/design/:id"
router
  .route("/:id")
  .get(designController.findById)
  .put(designController.update)
  .delete(designController.remove);

module.exports = router;