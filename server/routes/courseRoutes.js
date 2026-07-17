const express = require("express");

const {
  createCourse,
  getCourses,
  getCourseById,
  enrollCourse,
  getMyCourses,
} = require("../controllers/courseController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

const router = express.Router();

// ===============================
// Public Routes
// ===============================

router.get("/", getCourses);

router.get("/:id", getCourseById);

// ===============================
// My Courses
// ===============================

router.get(
  "/my",
  protect,
  getMyCourses
);

// ===============================
// Teacher/Admin
// ===============================

router.post(
  "/",
  protect,
  authorize("teacher", "admin"),
  createCourse
);

// ===============================
// Student
// ===============================

router.post(
  "/:id/enroll",
  protect,
  authorize("student"),
  enrollCourse
);

module.exports = router;