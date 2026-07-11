"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [role, setRole] = useState("student");

  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-8 shadow-2xl">

      <div className="text-center mb-8">
        <h1 className="text-4xl font-black text-white">
          Welcome Back
        </h1>

        <p className="text-slate-400 mt-3">
          Login to your EduSphere AI account
        </p>
      </div>

      <form className="space-y-6">

        <div>
          <label className="block text-slate-300 mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-cyan-400 transition"
          />
        </div>

        <div>
          <label className="block text-slate-300 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="********"
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-cyan-400 transition"
          />
        </div>

        <div>
          <label className="block text-slate-300 mb-2">
            Login As
          </label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-cyan-400 transition"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="flex justify-between text-sm">

          <label className="flex items-center gap-2 text-slate-400">
            <input type="checkbox" />
            Remember Me
          </label>

          <Link
            href="#"
            className="text-cyan-400 hover:underline"
          >
            Forgot Password?
          </Link>

        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 transition"
        >
          Login
        </button>

      </form>

      <p className="text-center text-slate-400 mt-8">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="text-cyan-400 hover:underline"
        >
          Register
        </Link>
      </p>

    </div>
  );
}