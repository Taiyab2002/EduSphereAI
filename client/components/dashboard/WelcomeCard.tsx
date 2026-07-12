"use client";

import { useAuth } from "@/context/AuthContext";

export default function WelcomeCard() {
  const { user } = useAuth();

  return (
    <div className="rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-8 shadow-xl">

      <h1 className="text-4xl font-black text-white">
        Welcome back, {user?.name}! 👋
      </h1>

      <p className="mt-4 text-cyan-100 text-lg">
        Ready to continue your learning journey today?
      </p>

      <div className="mt-8 flex flex-wrap gap-4">

        <div className="rounded-xl bg-white/20 px-5 py-3">
          <p className="text-sm text-cyan-100">
            Role
          </p>

          <h2 className="text-xl font-bold text-white">
            {user?.role}
          </h2>
        </div>

        <div className="rounded-xl bg-white/20 px-5 py-3">
          <p className="text-sm text-cyan-100">
            Email
          </p>

          <h2 className="text-lg font-semibold text-white break-all">
            {user?.email}
          </h2>
        </div>

      </div>

    </div>
  );
}