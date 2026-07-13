import {
  BookOpen,
  User,
  ArrowRight,
} from "lucide-react";

interface CourseCardProps {
  title: string;
  instructor: string;
  progress: number;
}

export default function CourseCard({
  title,
  instructor,
  progress,
}: CourseCardProps) {
  return (
    <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-lg hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300">

      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-xl font-bold text-white">
            {title}
          </h2>

          <div className="flex items-center gap-2 mt-3 text-slate-400">
            <User size={16} />
            <span>{instructor}</span>
          </div>
        </div>

        <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
          <BookOpen className="text-cyan-400" size={24} />
        </div>

      </div>

      <div className="mt-6">

        <div className="flex justify-between text-sm mb-2">

          <span className="text-slate-400">
            Progress
          </span>

          <span className="text-cyan-400 font-semibold">
            {progress}%
          </span>

        </div>

        <div className="h-3 rounded-full bg-slate-700 overflow-hidden">

          <div
            className="h-full bg-cyan-400 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />

        </div>

      </div>

      <button className="mt-6 w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 transition flex items-center justify-center gap-2">
        Continue Learning
        <ArrowRight size={18} />
      </button>

    </div>
  );
}