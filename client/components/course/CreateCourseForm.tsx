"use client";

import { useState } from "react";
import { createCourse } from "@/services/courseService";

export default function CreateCourseForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    thumbnail: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      !formData.title ||
      !formData.description ||
      !formData.category
    ) {
      setError("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      await createCourse(formData);

      setMessage("Course created successfully!");

      setFormData({
        title: "",
        description: "",
        category: "",
        thumbnail: "",
      });
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Failed to create course."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto rounded-3xl bg-slate-900 border border-slate-800 p-8 shadow-xl">

      <h1 className="text-3xl font-bold text-white mb-8">
        Create New Course
      </h1>

      {error && (
        <div className="mb-5 rounded-xl border border-red-500 bg-red-500/20 p-3 text-red-300">
          {error}
        </div>
      )}

      {message && (
        <div className="mb-5 rounded-xl border border-green-500 bg-green-500/20 p-3 text-green-300">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label className="block mb-2 text-slate-300">
            Course Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-slate-300">
            Description
          </label>

          <textarea
            name="description"
            rows={5}
            value={formData.description}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-slate-300">
            Category
          </label>

          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-slate-300">
            Thumbnail URL
          </label>

          <input
            type="text"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-cyan-400"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-cyan-500 py-3 font-bold text-black hover:bg-cyan-400 disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Course"}
        </button>

      </form>

    </div>
  );
}