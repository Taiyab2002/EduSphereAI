"use client";

import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="rounded-[40px] border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 p-14 text-center">

          <h2 className="text-5xl font-black text-white">
            Ready to Start Learning?
          </h2>

          <p className="text-slate-400 text-xl mt-6 max-w-3xl mx-auto">
            Join thousands of students already learning with EduSphere AI and
            unlock your future today.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105">

            Get Started

            <ArrowRight size={22} />

          </button>

        </div>

      </div>
    </section>
  );
}