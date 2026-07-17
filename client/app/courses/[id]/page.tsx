"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import { getCourseById } from "@/services/courseService";
import { useAuth } from "@/context/AuthContext";

import {
  BookOpen,
  User,
  Users,
  Tag,
  PlayCircle,
  ArrowRight,
  Settings,
  CheckCircle,
} from "lucide-react";

interface Course {
  _id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  lessons: {
    title: string;
    videoUrl: string;
  }[];
  students: {
    _id: string;
    name: string;
    email: string;
  }[];
  instructor: {
    _id: string;
    name: string;
    email: string;
  };
}

export default function CourseDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const { user } = useAuth();

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourseById(params.id as string);
        setCourse(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [params.id]);

  if (loading) {
    return (
      <DashboardLayout>
        <p className="text-lg text-white">
          Loading course...
        </p>
      </DashboardLayout>
    );
  }

  if (!course) {
    return (
      <DashboardLayout>
        <h1 className="text-3xl font-bold text-red-500">
          Course Not Found
        </h1>
      </DashboardLayout>
    );
  }

  const isTeacher =
    user?.role === "teacher" || user?.role === "admin";

  const isEnrolled =
    course.students.some(
      (student) => student._id === user?._id
    ) ?? false;

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-6xl space-y-8">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <div className="flex items-start justify-between">

            <div>

              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-400">
                <Tag size={18} />
                {course.category}
              </div>

              <h1 className="text-5xl font-black text-white">
                {course.title}
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
                {course.description}
              </p>

            </div>

            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-cyan-500/20">
              <BookOpen
                className="text-cyan-400"
                size={50}
              />
            </div>

          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-slate-900 p-6">

            <User
              className="mb-3 text-cyan-400"
              size={26}
            />

            <p className="text-slate-400">
              Instructor
            </p>

            <h2 className="mt-2 text-xl font-bold text-white">
              {course.instructor.name}
            </h2>

          </div>

          <div className="rounded-3xl bg-slate-900 p-6">

            <Users
              className="mb-3 text-cyan-400"
              size={26}
            />

            <p className="text-slate-400">
              Students
            </p>

            <h2 className="mt-2 text-xl font-bold text-white">
              {course.students.length}
            </h2>

          </div>

          <div className="rounded-3xl bg-slate-900 p-6">

            <PlayCircle
              className="mb-3 text-cyan-400"
              size={26}
            />

            <p className="text-slate-400">
              Lessons
            </p>

            <h2 className="mt-2 text-xl font-bold text-white">
              {course.lessons.length}
            </h2>

          </div>

        </div>

        <div className="rounded-3xl bg-slate-900 p-8">

          <h2 className="mb-6 text-3xl font-bold text-white">
            Course Lessons
          </h2>

          {course.lessons.length === 0 ? (
            <p className="text-slate-400">
              No lessons added yet.
            </p>
          ) : (
            <div className="space-y-4">

              {course.lessons.map((lesson, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-2xl bg-slate-800 p-4"
                >
                  <PlayCircle className="text-cyan-400" />
                  <span className="text-white">
                    {lesson.title}
                  </span>
                </div>
              ))}

            </div>
          )}

        </div>

        <div>

          {isTeacher ? (
            <button
              onClick={() =>
                router.push(`/edit-course/${course._id}`)
              }
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 py-4 text-lg font-bold text-white transition hover:bg-indigo-500"
            >
              <Settings size={22} />
              Manage Course
            </button>
          ) : isEnrolled ? (
            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-green-600 py-4 text-lg font-bold text-white transition hover:bg-green-500">
              <CheckCircle size={22} />
              Continue Learning
            </button>
          ) : (
            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-500 py-4 text-lg font-bold text-black transition hover:bg-cyan-400">
              <ArrowRight size={22} />
              Enroll Now
            </button>
          )}

        </div>

      </div>
    </DashboardLayout>
  );
}