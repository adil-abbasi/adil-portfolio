import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/Projects";

function isValidLink(link) {
  return link && link !== "#";
}

function ProjectDetails({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0, y: -8 }}
      animate={{ opacity: 1, height: "auto", y: 0 }}
      exit={{ opacity: 0, height: 0, y: -8 }}
      transition={{ duration: 0.28 }}
      className="overflow-hidden"
    >
      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Details
        </p>

        <p className="mt-3 leading-7 text-slate-300">{project.details}</p>

        {project.features?.length > 0 && (
          <>
            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-cyan-300">
              Key Points
            </p>

            <ul className="mt-3 grid gap-2 text-slate-300 md:grid-cols-2">
              {project.features.slice(0, 6).map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </motion.div>
  );
}

function ProjectButtons({ project, isOpen, onToggle, featured = false }) {
  return (
    <div className={`flex flex-wrap gap-3 ${featured ? "mt-8" : "mt-auto pt-7"}`}>
      <button
        onClick={onToggle}
        className={`rounded-full border border-cyan-400/40 font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950 ${
          featured ? "px-6 py-3" : "px-4 py-2 text-sm"
        }`}
      >
        {isOpen ? "Hide Details" : "View Details"}
      </button>

      {isValidLink(project.github) && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className={`rounded-full border border-slate-600 font-medium text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 ${
            featured ? "px-6 py-3" : "px-4 py-2 text-sm"
          }`}
        >
          GitHub
        </a>
      )}

      {isValidLink(project.live) && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className={`rounded-full border border-slate-600 font-medium text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 ${
            featured ? "px-6 py-3" : "px-4 py-2 text-sm"
          }`}
        >
          Live Demo
        </a>
      )}

      {isValidLink(project.demo) && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className={`rounded-full border border-purple-400/40 font-medium text-purple-300 transition hover:bg-purple-400 hover:text-slate-950 ${
            featured ? "px-6 py-3" : "px-4 py-2 text-sm"
          }`}
        >
          Demo
        </a>
      )}
    </div>
  );
}

function Projects() {
  const [openProject, setOpenProject] = useState(null);

  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  function toggleProject(title) {
    setOpenProject((current) => (current === title ? null : title));
  }

  return (
    <section id="projects" className="px-4 py-24 md:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-lg text-cyan-400">Projects</p>

          <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Selected Work & Practical Builds
            </h2>

            <p className="max-w-md text-sm leading-7 text-slate-400">
              A focused collection of projects covering data science, machine
              learning, automation, web platforms, and real-world problem
              solving.
            </p>
          </div>
        </motion.div>

        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-8 rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900/30 to-purple-600/10 p-1"
          >
            <div className="glass-card shine-card relative overflow-hidden rounded-[30px] p-7 md:p-9">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-purple-600/10 blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                      {featuredProject.category}
                    </p>

                    <h3 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                      {featuredProject.title}
                    </h3>
                  </div>

                  <span className="w-fit rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-xs text-green-400">
                    Featured Project
                  </span>
                </div>

                <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
                  {featuredProject.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {featuredProject.tech.slice(0, 8).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700 bg-slate-950/50 px-3 py-1 text-xs text-slate-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <ProjectButtons
                  project={featuredProject}
                  featured
                  isOpen={openProject === featuredProject.title}
                  onToggle={() => toggleProject(featuredProject.title)}
                />

                <AnimatePresence>
                  {openProject === featuredProject.title && (
                    <ProjectDetails project={featuredProject} />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="glass-card shine-card group flex flex-col rounded-3xl p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              <div>
                <p className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                  {project.category}
                </p>

                <h3 className="text-xl font-bold text-white transition group-hover:text-cyan-400">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.slice(0, 6).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-800 bg-slate-950/50 px-3 py-1 text-xs text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <ProjectButtons
                project={project}
                isOpen={openProject === project.title}
                onToggle={() => toggleProject(project.title)}
              />

              <AnimatePresence>
                {openProject === project.title && (
                  <ProjectDetails project={project} />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;