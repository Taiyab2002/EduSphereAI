"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  BookOpen,
  TrendingUp,
  Award,
  Flame,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";
import { getCourses } from "@/services/courseService";

import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import StatsCard from "@/components/dashboard/StatsCard";
import CourseCard from "@/components/dashboard/CourseCard";
import ActivityCard from "@/components/dashboard/ActivityCard";
import AIAssistantCard from "@/components/dashboard/AIAssistantCard";

interface Course {
  _id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  instructor: {
    _id: string;
    name: string;
    email: string;
  };
}

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const [courses, setCourses] = useState<Course[]>([]);
  const [loadingCourses, setLoadingCourses] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingCourses(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-xl">
        Loading...
      </div>
    );
  }

  if (!user) return null;

  return (
    <DashboardLayout>
      <div className="space-y-10">

        <WelcomeCard />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <StatsCard
            title="Courses"
            value={courses.length.toString()}
            icon={BookOpen}
            color="bg-cyan-600"
          />

          <StatsCard
            title="Progress"
            value="72%"
            icon={TrendingUp}
            color="bg-indigo-600"
          />

          <StatsCard
            title="Certificates"
            value="3"
            icon={Award}
            color="bg-green-600"
          />

          <StatsCard
            title="Daily Streak"
            value="15 Days"
            icon={Flame}
            color="bg-orange-600"
          />

        </div>

        <AIAssistantCard />

        <section>

          <h2 className="text-3xl font-bold text-white mb-6">
            Available Courses
          </h2>

          {loadingCourses ? (
            <p className="text-slate-400">
              Loading courses...
            </p>
          ) : courses.length === 0 ? (
            <p className="text-slate-400">
              No courses available.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {courses.map((course) => (
                <CourseCard
                  key={course._id}
                  title={course.title}
                  instructor={course.instructor.name}
                  progress={0}
                />
              ))}

            </div>
          )}

        </section>

        <section>

          <h2 className="text-3xl font-bold text-white mb-6">
            Recent Activities
          </h2>

          <div className="space-y-4">

            <ActivityCard
              title="Completed Python Quiz"
              time="2 hours ago"
              icon="✅"
            />

            <ActivityCard
              title="Started Machine Learning Course"
              time="Yesterday"
              icon="📚"
            />

            <ActivityCard
              title="Asked AI Tutor about Neural Networks"
              time="3 days ago"
              icon="🤖"
            />

          </div>

        </section>

      </div>
    </DashboardLayout>
  );
}