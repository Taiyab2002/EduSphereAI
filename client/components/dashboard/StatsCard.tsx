interface StatsCardProps {
  title: string;
  value: string;
  icon: string;
  color: string;
}

export default function StatsCard({
  title,
  value,
  icon,
  color,
}: StatsCardProps) {
  return (
    <div
      className={`rounded-3xl ${color} p-6 shadow-xl hover:scale-105 transition duration-300`}
    >
      <div className="flex items-center justify-between">

        <div>
          <p className="text-white/80 text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-black text-white mt-2">
            {value}
          </h2>
        </div>

        <div className="text-5xl">
          {icon}
        </div>

      </div>
    </div>
  );
}