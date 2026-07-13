"use client";

import { useAuth } from "@/context/AuthContext";
import { CalendarDays, GraduationCap } from "lucide-react";

export default function WelcomeCard() {
  const { user } = useAuth();

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-700 p-8 shadow-2xl">

      <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-6">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-4xl font-black text-white border border-white/30">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <div>

            <h1 className="text-4xl font-black text-white">
              👋 {greeting}, {user?.name}
            </h1>

            <p className="mt-2 text-cyan-100">
              Welcome back to EduSphere AI. Continue your learning journey today.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">

              <div className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white">
                <GraduationCap size={18} />
                <span className="capitalize">
                  {user?.role}
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white">
                <CalendarDays size={18} />
                <span>{today}</span>
              </div>

            </div>

          </div>

        </div>

        <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 min-w-[240px]">

          <p className="text-cyan-100 text-sm">
            Today's Motivation
          </p>

          <h3 className="mt-3 text-xl font-bold text-white leading-relaxed">
            Keep learning consistently.
            Small progress every day creates extraordinary results.
          </h3>

        </div>

      </div>

    </div>
  );
}