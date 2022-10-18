const tourcontroller = require("../controller/tourcontroller");
const router = require("express").Router();

router.get("/", tourcontroller.getAllTours);

// router.get("/:id", tourcontroller.getOneTour);

router.post("/", tourcontroller.createTour);

module.exports = router;
