"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const router = useRouter();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="text-3xl font-black text-white">
          EduSphere <span className="text-cyan-400">AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-slate-300">

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
                className="px-5 py-2 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-5 py-2 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition duration-300"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <span className="text-cyan-400 font-semibold">
                👋 {user.name}
              </span>

              <Link
                href="/dashboard"
                className="px-5 py-2 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </>
          )}

        </div>

      </div>
    </nav>
  );
}