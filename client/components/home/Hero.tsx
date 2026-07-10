"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-300 text-sm mb-6">
              🚀 AI Powered Learning Platform
            </span>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight">
              Learn
              <br />
              Smarter with
              <span className="text-cyan-400"> AI</span>
            </h1>

            <p className="text-slate-400 text-xl mt-8 leading-9 max-w-xl">
              The next generation E-learning platform where students,
              teachers and artificial intelligence work together to make
              learning faster, smarter and more enjoyable.
            </p>

            <div className="flex gap-5 mt-10">

              <button className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition">
                Get Started
              </button>

              <button className="px-8 py-4 rounded-xl border border-slate-700 hover:border-cyan-400 transition">
                Watch Demo
              </button>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

              <h2 className="text-2xl font-bold mb-8">
                AI Learning Dashboard
              </h2>

              <div className="space-y-6">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>React Development</span>
                    <span>85%</span>
                  </div>

                  <div className="h-3 rounded-full bg-slate-700">
                    <div className="h-3 rounded-full bg-cyan-400 w-[85%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Python</span>
                    <span>72%</span>
                  </div>

                  <div className="h-3 rounded-full bg-slate-700">
                    <div className="h-3 rounded-full bg-indigo-400 w-[72%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Artificial Intelligence</span>
                    <span>91%</span>
                  </div>

                  <div className="h-3 rounded-full bg-slate-700">
                    <div className="h-3 rounded-full bg-emerald-400 w-[91%]" />
                  </div>
                </div>

              </div>

              <div className="mt-10 grid grid-cols-2 gap-5">

                <div className="rounded-2xl bg-slate-800 p-5 text-center">
                  <h3 className="text-3xl font-bold text-cyan-400">18</h3>
                  <p className="text-slate-400 text-sm">Day Streak</p>
                </div>

                <div className="rounded-2xl bg-slate-800 p-5 text-center">
                  <h3 className="text-3xl font-bold text-green-400">24</h3>
                  <p className="text-slate-400 text-sm">Certificates</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}