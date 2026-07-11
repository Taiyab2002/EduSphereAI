"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterForm() {
  const [role, setRole] = useState("student");

  return (
    <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-8 shadow-2xl">

      <div className="text-center mb-8">

        <h1 className="text-4xl font-black text-white">
          Create Account
        </h1>

        <p className="text-slate-400 mt-3">
          Join EduSphere AI today
        </p>

      </div>

      <form className="space-y-5">

        <div>
          <label className="block mb-2 text-slate-300">
            Full Name
          </label>

          <input
            type="text"
            placeholder="John Doe"
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-slate-300">
            Email
          </label>

          <input
            type="email"
            placeholder="john@example.com"
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-slate-300">
            Password
          </label>

          <input
            type="password"
            placeholder="********"
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-slate-300">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="********"
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-cyan-400"
          />
        </div>

        <div>

          <label className="block mb-2 text-slate-300">
            Register As
          </label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-cyan-400"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

        </div>

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl py-3 transition"
        >
          Create Account
        </button>

      </form>

      <p className="text-center text-slate-400 mt-8">

        Already have an account?

        <Link
          href="/login"
          className="text-cyan-400 hover:underline ml-2"
        >
          Login
        </Link>

      </p>

    </div>
  );
}