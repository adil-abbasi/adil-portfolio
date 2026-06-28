import TypewriterText from "./TypewriterText";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero-glow flex min-h-screen items-center px-4 pb-12 pt-28 md:px-6 md:pb-16 md:pt-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Computer Science Student • Remote Friendly
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Building Future-
            <br />
            Ready
            <br />
            <span className="block min-h-[1.15em] text-4xl sm:text-5xl lg:text-6xl">
              <TypewriterText />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
            I am Adil Abbasi, a Computer Science student focused on building
            practical software, machine learning projects, and data-driven
            applications. I am open to internships, remote roles, and
            project-based opportunities where I can learn, contribute, and
            create real-world impact.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3 font-semibold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.28)] transition hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-700 bg-slate-900/60 px-7 py-3 font-semibold text-slate-300 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://github.com/adil-abbasi"
              target="_blank"
              rel="noreferrer"
              className="group flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 transition-all duration-300 hover:w-32 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <FaGithub className="text-lg" />
              <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-20 group-hover:opacity-100">
                GitHub
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/adil-abbasi-204555307/"
              target="_blank"
              rel="noreferrer"
              className="group flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 transition-all duration-300 hover:w-32 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <FaLinkedin className="text-lg" />
              <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-20 group-hover:opacity-100">
                LinkedIn
              </span>
            </a>

            <a
              href="mailto:adilabbasyy233@gmail.com"
              className="group flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 transition-all duration-300 hover:w-28 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <FaEnvelope className="text-lg" />
              <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-16 group-hover:opacity-100">
                Email
              </span>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="glass-card shine-card relative overflow-hidden rounded-[32px] p-6 md:p-8">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl"></div>

            <div className="relative z-10">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">ML Insight Panel</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">
                    Data & Intelligence Focus
                  </h3>
                </div>

                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                  <span className="h-3 w-3 rounded-full bg-green-400"></span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Core Direction
                  </p>
                  <p className="mt-3 text-slate-200">
                    Machine learning, data analysis, intelligent automation,
                    and practical software development.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Workflow
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-300">
                    <span className="rounded-full border border-slate-700 px-3 py-1">
                      Data
                    </span>
                    <span className="text-cyan-400">→</span>
                    <span className="rounded-full border border-slate-700 px-3 py-1">
                      Analysis
                    </span>
                    <span className="text-cyan-400">→</span>
                    <span className="rounded-full border border-slate-700 px-3 py-1">
                      Models
                    </span>
                    <span className="text-cyan-400">→</span>
                    <span className="rounded-full border border-slate-700 px-3 py-1">
                      Insights
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Focus Strength
                  </p>

                  <div className="mt-4 space-y-4">
                    <div>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-slate-300">Machine Learning</span>
                        <span className="text-cyan-400">Advanced Focus</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800">
                        <div className="h-2 w-[88%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                      </div>
                    </div>

                    <div>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-slate-300">Data Analysis</span>
                        <span className="text-cyan-400">Strong</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800">
                        <div className="h-2 w-[84%] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"></div>
                      </div>
                    </div>

                    <div>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-slate-300">
                          Intelligent Automation
                        </span>
                        <span className="text-cyan-400">Practical</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800">
                        <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Current Interest
                  </p>
                  <p className="mt-3 text-slate-300">
                    Prediction systems, dashboards, intelligent assistants, and
                    real-world AI applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;