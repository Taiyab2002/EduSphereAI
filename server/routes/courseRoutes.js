const express = require("express");

const {
  createCourse,
  getCourses,
  enrollCourse,
} = require("../controllers/courseController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Public
router.get("/", getCourses);

// Teacher/Admin
router.post(
  "/",
  protect,
  authorize("teacher", "admin"),
  createCourse
);

// Student
router.post(
  "/:id/enroll",
  protect,
  authorize("student"),
  enrollCourse
);

module.exports = router;