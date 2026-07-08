export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6">
          EduSphere <span className="text-cyan-400">AI</span>
        </h1>

        <p className="text-xl text-gray-400 mb-8">
          Learn Smarter with Artificial Intelligence
        </p>

        <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-300">
          Get Started
        </button>
      </div>
    </main>
  );
}