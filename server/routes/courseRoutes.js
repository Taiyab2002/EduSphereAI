const express = require("express");
const {
  createCourse,
  getCourses,
} = require("../controllers/courseController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getCourses);

router.post(
  "/",
  protect,
  authorize("teacher", "admin"),
  createCourse
);

module.exports = router;