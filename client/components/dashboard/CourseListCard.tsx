"use client";

import Link from "next/link";
import {
  BookOpen,
  User,
  ArrowRight,
} from "lucide-react";

interface CourseListCardProps {
  courseId: string;
  title: string;
  instructor: string;
  category: string;
  studentCount: number;
}

export default function CourseListCard({
  courseId,
  title,
  instructor,
  category,
  studentCount,
}: CourseListCardProps) {
  return (
    <Link href={`/courses/${courseId}`}>
      <div className="group cursor-pointer rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400">

        <div className="flex items-start justify-between">

          <div>

            <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition">
              {title}
            </h2>

            <div className="mt-3 flex items-center gap-2 text-slate-400">
              <User size={16} />
              <span>{instructor}</span>
            </div>

          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20">
            <BookOpen
              className="text-cyan-400"
              size={24}
            />
          </div>

        </div>

        <div className="mt-6 flex items-center justify-between">

          <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-medium text-cyan-400">
            {category}
          </span>

          <span className="text-sm text-slate-400">
            {studentCount} Students
          </span>

        </div>

        <div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-5">

          <span className="font-semibold text-cyan-400">
            View Course
          </span>

          <ArrowRight
            size={20}
            className="text-cyan-400 transition-transform group-hover:translate-x-1"
          />

        </div>

      </div>
    </Link>
  );
}