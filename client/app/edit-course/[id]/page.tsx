"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";

import {
  getCourseById,
  updateCourse,
} from "@/services/courseService";

import toast from "react-hot-toast";

export default function EditCoursePage() {
  const params = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    thumbnail: "",
  });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const course = await getCourseById(
          params.id as string
        );

        setFormData({
          title: course.title,
          description: course.description,
          category: course.category,
          thumbnail: course.thumbnail,
        });
      } catch (error) {
        console.error(error);
        toast.error("Failed to load course");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [params.id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setSaving(true);

      await updateCourse(
        params.id as string,
        formData
      );

      toast.success(
        "Course updated successfully!"
      );

      router.push(`/courses/${params.id}`);
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Update failed"
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <p className="text-lg text-white">
          Loading...
        </p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div className="mx-auto max-w-3xl rounded-3xl bg-slate-900 p-8">

        <h1 className="mb-8 text-4xl font-black text-white">
          Edit Course
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>

            <label className="mb-2 block text-slate-300">
              Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none focus:border-cyan-400"
              required
            />

          </div>

          <div>

            <label className="mb-2 block text-slate-300">
              Description
            </label>

            <textarea
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none focus:border-cyan-400"
              required
            />

          </div>

          <div>

            <label className="mb-2 block text-slate-300">
              Category
            </label>

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none focus:border-cyan-400"
            />

          </div>

          <div>

            <label className="mb-2 block text-slate-300">
              Thumbnail URL
            </label>

            <input
              type="text"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none focus:border-cyan-400"
            />

          </div>

          <button
            type="submit"
            disabled={saving}
            className="w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold text-black transition hover:bg-cyan-400 disabled:opacity-50"
          >
            {saving
              ? "Saving..."
              : "Save Changes"}
          </button>

        </form>

      </div>

    </DashboardLayout>
  );
}