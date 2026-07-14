"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import CourseCard from "@/components/dashboard/CourseCard";

import { useAuth } from "@/context/AuthContext";
import { getMyCourses } from "@/services/courseService";

interface Course {
  _id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  students: string[];
  instructor: {
    _id: string;
    name: string;
    email: string;
  };
}

export default function MyCoursesPage() {
  const { user } = useAuth();

  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyCourses = async () => {
      try {
        const data = await getMyCourses();
        setCourses(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyCourses();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div>

          <h1 className="text-4xl font-black text-white">
            {user?.role === "teacher"
              ? "My Created Courses"
              : user?.role === "admin"
              ? "All Courses"
              : "My Courses"}
          </h1>

          <p className="mt-2 text-slate-400">
            {user?.role === "teacher"
              ? "Manage the courses you created."
              : user?.role === "admin"
              ? "Manage all courses."
              : "Continue learning from your enrolled courses."}
          </p>

        </div>

        {loading ? (
          <p className="text-slate-400 text-lg">
            Loading courses...
          </p>
        ) : courses.length === 0 ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">

            <h2 className="text-2xl font-bold text-white">
              No Courses Found
            </h2>

            <p className="mt-3 text-slate-400">
              {user?.role === "teacher"
                ? "You haven't created any course yet."
                : "You haven't enrolled in any course yet."}
            </p>

          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {courses.map((course) => (
              <CourseCard
                key={course._id}
                courseId={course._id}
                title={course.title}
                instructor={course.instructor.name}
                progress={0}
                role={user?.role || ""}
                enrolled={true}
              />
            ))}

          </div>
        )}

      </div>
    </DashboardLayout>
  );
}