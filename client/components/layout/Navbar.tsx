"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link href="/" className="text-3xl font-bold">
          <span className="text-white">EduSphere</span>{" "}
          <span className="text-cyan-400">AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <Link href="#" className="hover:text-cyan-400 transition">
            Home
          </Link>

          <Link href="#" className="hover:text-cyan-400 transition">
            Courses
          </Link>

          <Link href="#" className="hover:text-cyan-400 transition">
            Features
          </Link>

          <Link href="#" className="hover:text-cyan-400 transition">
            About
          </Link>

          <Link href="#" className="hover:text-cyan-400 transition">
            Contact
          </Link>
        </div>

        <div className="flex gap-3">
          <button className="px-5 py-2 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
            Login
          </button>

          <button className="px-5 py-2 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition">
            Register
          </button>
        </div>

      </div>
    </nav>
  );
}