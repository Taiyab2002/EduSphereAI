import {
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Bot,
} from "lucide-react";

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

  const Icon =
    icon === "✅"
      ? CheckCircle2
      : icon === "📚"
      ? BookOpen
      : Bot;

  return (
    <div className="flex items-center justify-between rounded-2xl bg-slate-900 border border-slate-800 p-5 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300">

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20">
          <Icon className="text-cyan-400" size={24} />
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

      <ArrowRight
        className="text-cyan-400"
        size={22}
      />

    </div>
  );
}