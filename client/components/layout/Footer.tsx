"use client";

import { Facebook, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          <div>

            <h2 className="text-3xl font-bold text-white">
              EduSphere <span className="text-cyan-400">AI</span>
            </h2>

            <p className="text-slate-400 mt-3">
              Learn Smarter with Artificial Intelligence.
            </p>

          </div>

          <div className="flex gap-5">

            <Github className="text-slate-400 hover:text-cyan-400 cursor-pointer transition" />

            <Linkedin className="text-slate-400 hover:text-cyan-400 cursor-pointer transition" />

            <Facebook className="text-slate-400 hover:text-cyan-400 cursor-pointer transition" />

          </div>

        </div>

        <hr className="border-slate-800 my-8" />

        <p className="text-center text-slate-500">
          © 2026 EduSphere AI. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}