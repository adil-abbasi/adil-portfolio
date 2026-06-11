const focusItems = [
  "Machine Learning Projects",
  "Data Analysis & Dashboards",
  "Database Systems",
  "Automation Workflows",
  "Frontend Development",
  "Technical Documentation",
];

function About() {
  return (
    <section id="about" className="px-4 py-24 md:px-6">
      <div className="mx-auto max-w-7xl">
        <p className="text-lg text-cyan-400">About Me</p>

        <h2 className="mt-3 max-w-5xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
          Computer Science Student Building Practical Data-Driven Solutions
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.7fr_0.8fr]">
          <div className="glass-card shine-card rounded-3xl p-8 md:p-10">
            <p className="text-lg leading-9 text-slate-300">
              I am Adil Abbasi, a Computer Science student focused on building
              practical digital solutions through software development, data
              science, machine learning, databases, and automation. I enjoy
              turning ideas into real working projects with clean structure,
              useful features, and real-world purpose.
            </p>

            <p className="mt-7 text-lg leading-9 text-slate-300">
              My work is currently focused on prediction models, data analysis
              workflows, dashboards, automation systems, database-backed
              applications, and responsive frontend experiences. I am also open
              to internships, remote roles, and project-based opportunities
              where I can learn, contribute, and grow professionally.
            </p>

                      </div>

          <div className="glass-card shine-card rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-cyan-400">
              Current Focus
            </h3>

            <div className="mt-7 space-y-4">
              {focusItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-800 bg-slate-950/50 px-5 py-4 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;