"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import API from "@/services/api";

export default function RegisterForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });

      setMessage(res.data.message);

      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

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

      {error && (
        <div className="mb-4 rounded-lg bg-red-500/20 border border-red-500 text-red-300 p-3">
          {error}
        </div>
      )}

      {message && (
        <div className="mb-4 rounded-lg bg-green-500/20 border border-green-500 text-green-300 p-3">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-2 text-slate-300">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-slate-300">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-slate-300">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="********"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-slate-300">
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            placeholder="********"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-slate-300">
            Register As
          </label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-cyan-400"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl py-3 transition disabled:opacity-50"
        >
          {loading ? "Creating Account..." : "Create Account"}
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