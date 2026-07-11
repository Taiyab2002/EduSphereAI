"use client";

import {
  Brain,
  BookOpen,
  FileCheck,
  Award,
  Cloud,
  Video,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Tutor",
    description:
      "Learn with an intelligent AI assistant that answers questions instantly.",
  },
  {
    icon: Video,
    title: "HD Video Courses",
    description:
      "Watch high-quality recorded lectures anytime from any device.",
  },
  {
    icon: FileCheck,
    title: "Smart Quiz",
    description:
      "Practice interactive quizzes and receive instant feedback.",
  },
  {
    icon: BookOpen,
    title: "Assignments",
    description:
      "Submit assignments online and track your submission history.",
  },
  {
    icon: Award,
    title: "Certificates",
    description:
      "Receive digital certificates after successfully completing courses.",
  },
  {
    icon: Cloud,
    title: "Cloud Learning",
    description:
      "Access your learning resources securely from anywhere in the world.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-950 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white">
            Why Choose EduSphere AI?
          </h2>

          <p className="text-slate-400 text-lg mt-5 max-w-2xl mx-auto">
            Everything you need for a modern AI-powered learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-400 leading-8">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}