"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

import {
  User,
  GraduationCap,
  ShieldCheck,
  BookOpen,
  LogOut,
  LayoutDashboard,
  PlusCircle,
} from "lucide-react";

export default function Navbar() {
  const router = useRouter();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const getRoleBadge = () => {
    if (!user) return null;

    switch (user.role) {
      case "student":
        return (
          <span className="flex items-center gap-1 rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-400">
            <GraduationCap size={14} />
            Student
          </span>
        );

      case "teacher":
        return (
          <span className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
            <BookOpen size={14} />
            Teacher
          </span>
        );

      case "admin":
        return (
          <span className="flex items-center gap-1 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-400">
            <ShieldCheck size={14} />
            Admin
          </span>
        );

      default:
        return null;
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="text-3xl font-black text-white"
        >
          EduSphere <span className="text-cyan-400">AI</span>
        </Link>

        <div className="hidden items-center gap-8 text-slate-300 md:flex">

          <Link
            href="/"
            className="hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <a
            href="#features"
            className="hover:text-cyan-400 transition"
          >
            Features
          </a>

          <a
            href="#courses"
            className="hover:text-cyan-400 transition"
          >
            Courses
          </a>

        </div>

        <div className="flex items-center gap-4">

          {!user ? (
            <>
              <Link
                href="/login"
                className="rounded-xl border border-cyan-400 px-5 py-2 text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-black transition hover:bg-cyan-400"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3 rounded-xl bg-slate-900 px-4 py-2">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20">
                  <User
                    size={20}
                    className="text-cyan-400"
                  />
                </div>

                <div>
                  <p className="font-semibold text-white">
                    {user.name}
                  </p>

                  {getRoleBadge()}
                </div>

              </div>

              <Link
                href="/dashboard"
                className="flex items-center gap-2 rounded-xl border border-cyan-400 px-5 py-2 text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
              >
                <LayoutDashboard size={18} />
                Dashboard
              </Link>

              {(user.role === "teacher" ||
                user.role === "admin") && (
                <Link
                  href="/create-course"
                  className="flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2 font-semibold text-white transition hover:bg-emerald-400"
                >
                  <PlusCircle size={18} />
                  Create Course
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-xl bg-red-500 px-5 py-2 font-semibold text-white transition hover:bg-red-600"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          )}

        </div>

      </div>
    </nav>
  );
}