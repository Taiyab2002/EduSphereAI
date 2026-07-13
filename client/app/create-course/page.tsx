"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";
import CreateCourseForm from "@/components/course/CreateCourseForm";

export default function CreateCoursePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.push("/login");
      return;
    }

    if (user.role !== "teacher" && user.role !== "admin") {
      router.push("/dashboard");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-xl">
        Loading...
      </main>
    );
  }

  if (!user || (user.role !== "teacher" && user.role !== "admin")) {
    return null;
  }

  return (
    <main className="min-h-screen bg-slate-950 py-12 px-6">
      <CreateCourseForm />
    </main>
  );
}