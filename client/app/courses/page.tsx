"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import CourseCard from "@/components/dashboard/CourseCard";

import { useAuth } from "@/context/AuthContext";
import { getCourses } from "@/services/courseService";

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

export default function CoursesPage() {
  const { user } = useAuth();

  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-black text-white">
            All Courses
          </h1>

          <p className="mt-2 text-slate-400">
            Browse all available courses on EduSphere AI.
          </p>
        </div>

        {loading ? (
          <p className="text-slate-400 text-lg">
            Loading courses...
          </p>
        ) : courses.length === 0 ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">
            <h2 className="text-2xl font-bold text-white">
              No Courses Available
            </h2>

            <p className="mt-3 text-slate-400">
              No courses have been created yet.
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
                enrolled={
                  course.students?.includes(user?._id || "") ?? false
                }
              />
            ))}

          </div>
        )}

      </div>
    </DashboardLayout>
  );
}