const Course = require("../models/Course");

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

module.exports = {
  createCourse,
  getCourses,
};