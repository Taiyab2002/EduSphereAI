import API from "./api";

export const getCourses = async () => {
  const response = await API.get("/courses");
  return response.data.courses;
};

export const createCourse = async (courseData: {
  title: string;
  description: string;
  category: string;
  thumbnail: string;
}) => {
  const token = localStorage.getItem("token");

  const response = await API.post(
    "/courses",
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