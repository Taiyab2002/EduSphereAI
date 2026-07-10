"use client";

export default function Statistics() {
  const stats = [
    {
      number: "20K+",
      title: "Students",
    },
    {
      number: "500+",
      title: "Courses",
    },
    {
      number: "98%",
      title: "Success Rate",
    },
    {
      number: "24/7",
      title: "AI Tutor",
    },
  ];

  return (
    <section className="bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-slate-950 border border-slate-800 p-8 text-center hover:border-cyan-400 transition duration-300"
            >
              <h2 className="text-5xl font-black text-cyan-400">
                {item.number}
              </h2>

              <p className="text-slate-400 mt-4 text-lg">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}