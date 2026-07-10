"use client";

const courses = [
  {
    title: "Web Development",
    description: "Master HTML, CSS, JavaScript, React and Next.js.",
  },
  {
    title: "Python Programming",
    description: "Learn Python from beginner to advanced level.",
  },
  {
    title: "Data Science",
    description: "Analyze data and build predictive models.",
  },
  {
    title: "Artificial Intelligence",
    description: "Build AI applications using modern tools.",
  },
];

export default function Courses() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white">
            Featured Courses
          </h2>

          <p className="text-slate-400 text-lg mt-5">
            Explore our most popular learning paths.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {courses.map((course) => (
            <div
              key={course.title}
              className="rounded-3xl border border-slate-800 bg-slate-950 p-8 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {course.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {course.description}
              </p>

              <button className="mt-6 bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-3 rounded-xl font-semibold transition">
                View Course
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}