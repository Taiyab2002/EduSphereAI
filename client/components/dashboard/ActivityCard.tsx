interface ActivityCardProps {
  title: string;
  time: string;
  icon: string;
}

export default function ActivityCard({
  title,
  time,
  icon,
}: ActivityCardProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-slate-900 border border-slate-800 p-5 hover:border-cyan-400 transition duration-300">

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20 text-2xl">
          {icon}
        </div>

        <div>
          <h3 className="text-white font-semibold">
            {title}
          </h3>

          <p className="text-slate-400 text-sm">
            {time}
          </p>
        </div>

      </div>

      <span className="text-cyan-400 text-xl">
        →
      </span>

    </div>
  );
}