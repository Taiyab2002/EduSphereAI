const Course = require("../models/Course");

// ===============================
// Create Course
// ===============================

const createCourse = async (req, res) => {
  try {
    const { title, description, category, thumbnail } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and Description are required",
      });
    }

    const course = await Course.create({
      title,
      description,
      category,
      thumbnail,
      instructor: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Course Created Successfully",
      course,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ===============================
// Get All Courses
// ===============================

const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate(
      "instructor",
      "name email"
    );

    res.status(200).json({
      success: true,
      count: courses.length,
      courses,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ===============================
// Get Single Course
// ===============================

const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate("instructor", "name email")
      .populate("students", "name email");

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      course,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ===============================
// Enroll in Course
// ===============================

const enrollCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    if (req.user.role !== "student") {
      return res.status(403).json({
        success: false,
        message: "Only students can enroll in courses",
      });
    }

    const alreadyEnrolled = course.students.some(
      (studentId) => studentId.toString() === req.user.id
    );

    if (alreadyEnrolled) {
      return res.status(400).json({
        success: false,
        message: "You are already enrolled in this course",
      });
    }

    course.students.push(req.user.id);

    await course.save();

    res.status(200).json({
      success: true,
      message: "Enrolled successfully",
      course,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ===============================
// Get My Courses
// ===============================

const getMyCourses = async (req, res) => {
  try {
    let courses = [];

    if (req.user.role === "student") {
      courses = await Course.find({
        students: req.user.id,
      }).populate("instructor", "name email");
    } else if (req.user.role === "teacher") {
      courses = await Course.find({
        instructor: req.user.id,
      }).populate("instructor", "name email");
    } else if (req.user.role === "admin") {
      courses = await Course.find().populate(
        "instructor",
        "name email"
      );
    }

    res.status(200).json({
      success: true,
      count: courses.length,
      courses,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  enrollCourse,
  getMyCourses,
};