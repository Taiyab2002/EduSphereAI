export default function AIAssistantCard() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-600 p-8 shadow-2xl">

      <div className="text-6xl mb-5">
        🤖
      </div>

      <h2 className="text-3xl font-black text-white">
        AI Learning Assistant
      </h2>

      <p className="mt-4 text-indigo-100 leading-7">
        Ask questions, summarize notes, generate quizzes, solve programming
        problems and learn faster with your personal AI tutor.
      </p>

      <button
        className="mt-8 rounded-xl bg-white px-6 py-3 font-bold text-indigo-700 hover:bg-slate-100 transition"
      >
        Start AI Chat
      </button>

    </div>
  );
}