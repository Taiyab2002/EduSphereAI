import API from "./api";

// ================================
// Get All Courses
// ================================

export const getCourses = async () => {
  const response = await API.get("/courses");
  return response.data.courses;
};

// ================================
// Get Single Course
// ================================

export const getCourseById = async (courseId: string) => {
  const response = await API.get(`/courses/${courseId}`);
  return response.data.course;
};

// ================================
// Get My Courses
// ================================

export const getMyCourses = async () => {
  const token = localStorage.getItem("token");

  const response = await API.get("/courses/my", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.courses;
};

// ================================
// Create Course
// ================================

export const createCourse = async (courseData: {
  title: string;
  description: string;
  category: string;
  thumbnail: string;
}) => {
  const token = localStorage.getItem("token");

  const response = await API.post("/courses", courseData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// ================================
// Update Course
// ================================

export const updateCourse = async (
  courseId: string,
  courseData: {
    title: string;
    description: string;
    category: string;
    thumbnail: string;
  }
) => {
  const token = localStorage.getItem("token");

  const response = await API.put(
    `/courses/${courseId}`,
    courseData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// ================================
// Enroll Course
// ================================

export const enrollCourse = async (courseId: string) => {
  const token = localStorage.getItem("token");

  const response = await API.post(
    `/courses/${courseId}/enroll`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};