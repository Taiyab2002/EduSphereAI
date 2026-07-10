"use client";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-3xl font-bold text-white">
              EduSphere <span className="text-cyan-400">AI</span>
            </h2>

            <p className="text-slate-400 mt-2">
              The Future of Intelligent Learning.
            </p>
          </div>

          <div className="text-slate-400 text-center md:text-right">
            © 2026 EduSphere AI. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}