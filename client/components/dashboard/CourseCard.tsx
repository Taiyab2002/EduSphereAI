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
    <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-xl hover:border-cyan-400 transition duration-300">

      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-xl font-bold text-white">
            {title}
          </h2>

          <p className="text-slate-400 mt-2">
            👨‍🏫 {instructor}
          </p>
        </div>

        <span className="text-3xl">
          📚
        </span>

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

      <button
        className="mt-6 w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 transition"
      >
        Continue Learning
      </button>

    </div>
  );
}