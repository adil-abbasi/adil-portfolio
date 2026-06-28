import { FiExternalLink, FiAward } from "react-icons/fi";

const certifications = [
  {
    title: "IBM Data Science Certificate",
    provider: "Coursera | IBM",
    description:
      "Completed IBM Data Science certification through Coursera, covering Python, SQL, data analysis, visualization, machine learning foundations, and practical data science workflows.",
    skills: ["Python", "SQL", "Pandas", "Visualization", "Machine Learning"],
    link: "https://www.coursera.org/account/accomplishments/professional-cert/OI6OM5GX6XB7",
  },
  {
    title: "IBM Applied Data Science Certificate",
    provider: "Coursera | IBM",
    description:
      "Completed IBM Applied Data Science certification through Coursera, focused on applying data science concepts through hands-on projects, Python-based analysis, visualization, and real-world problem solving.",
    skills: ["Applied DS", "Projects", "Analysis", "Dashboards", "Insights"],
    link: "https://www.coursera.org/account/accomplishments/specialization/VCCKWWKIH61A",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="px-4 py-24 md:px-6">
      <div className="mx-auto max-w-7xl">
        <p className="text-lg text-cyan-400">Certifications</p>

        <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Verified Learning in Data Science
          </h2>

          <p className="max-w-md text-sm leading-7 text-slate-400">
            IBM certifications completed through Coursera, supporting my focus
            on data analysis, machine learning, and practical data-driven
            solutions.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {certifications.map((certificate) => (
            <div
              key={certificate.title}
              className="glass-card shine-card group relative overflow-hidden rounded-3xl p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20"></div>
              <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <FiAward className="text-2xl" />
                  </div>

                  <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs text-green-400">
                    Completed
                  </span>
                </div>

                <p className="mt-6 text-sm uppercase tracking-[0.25em] text-cyan-300">
                  {certificate.provider}
                </p>

                <h3 className="mt-4 text-2xl font-bold text-white">
                  {certificate.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {certificate.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                >
                  View Credential
                  <FiExternalLink className="text-base" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;