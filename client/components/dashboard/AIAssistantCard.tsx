import { Bot, Sparkles } from "lucide-react";

export default function AIAssistantCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-600 p-8 shadow-2xl">

      <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

      <div className="relative">

        <div className="flex items-center gap-4">

          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-lg">
            <Bot className="text-white" size={34} />
          </div>

          <div>

            <h2 className="text-3xl font-black text-white">
              AI Learning Assistant
            </h2>

            <p className="text-indigo-100 mt-2">
              Your personal AI tutor
            </p>

          </div>

        </div>

        <p className="mt-6 text-indigo-100 leading-7">
          Ask questions, summarize notes, generate quizzes,
          solve programming problems and learn faster using AI.
        </p>

        <button className="mt-8 rounded-xl bg-white px-6 py-3 font-bold text-indigo-700 hover:bg-slate-100 transition flex items-center gap-2">
          <Sparkles size={18} />
          Start AI Chat
        </button>

      </div>

    </div>
  );
}