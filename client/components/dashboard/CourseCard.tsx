"use client";

import { useState } from "react";
import {
  BookOpen,
  User,
  ArrowRight,
  Settings,
  CheckCircle,
} from "lucide-react";

import toast from "react-hot-toast";

import { enrollCourse } from "@/services/courseService";

interface CourseCardProps {
  courseId: string;
  title: string;
  instructor: string;
  progress: number;
  role: string;
  enrolled: boolean;
}

export default function CourseCard({
  courseId,
  title,
  instructor,
  progress,
  role,
  enrolled,
}: CourseCardProps) {
  const [isEnrolled, setIsEnrolled] = useState(enrolled);
  const [loading, setLoading] = useState(false);

  const handleEnroll = async () => {
    try {
      setLoading(true);

      const res = await enrollCourse(courseId);

      setIsEnrolled(true);

      toast.success(
        res.message || "Successfully enrolled!"
      );
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Enrollment failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const renderButton = () => {
    if (role === "teacher" || role === "admin") {
      return (
        <button
          className="mt-6 w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 transition flex items-center justify-center gap-2"
        >
          <Settings size={18} />
          Manage Course
        </button>
      );
    }

    if (isEnrolled) {
      return (
        <button
          className="mt-6 w-full rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold py-3 transition flex items-center justify-center gap-2"
        >
          <CheckCircle size={18} />
          Continue Learning
        </button>
      );
    }

    return (
      <button
        onClick={handleEnroll}
        disabled={loading}
        className="mt-6 w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 transition flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {loading ? (
          "Enrolling..."
        ) : (
          <>
            <ArrowRight size={18} />
            Enroll Now
          </>
        )}
      </button>
    );
  };

  return (
    <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-lg hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300">

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-xl font-bold text-white">
            {title}
          </h2>

          <div className="flex items-center gap-2 mt-3 text-slate-400">
            <User size={16} />
            <span>{instructor}</span>
          </div>

        </div>

        <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
          <BookOpen
            className="text-cyan-400"
            size={24}
          />
        </div>

      </div>

      <div className="mt-6">

        <div className="flex justify-between text-sm mb-2">

          <span className="text-slate-400">
            Progress
          </span>

          <span className="text-cyan-400 font-semibold">
            {progress}%
          </span>

        </div>

        <div className="h-3 rounded-full bg-slate-700 overflow-hidden">

          <div
            className="h-full bg-cyan-400 rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {renderButton()}

    </div>
  );
}