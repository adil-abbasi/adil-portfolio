import { motion } from "framer-motion";

const orvixModules = [
  {
    title: "Command Understanding",
    description:
      "Understands natural language commands, maps them to actions, handles aliases, and routes tasks to the correct module.",
    points: ["Natural language input", "Intent handling", "Task routing"],
  },
  {
    title: "File & App Automation",
    description:
      "Performs real desktop actions like creating, opening, copying, moving, renaming, deleting files, and launching applications.",
    points: ["File operations", "App launching", "Smart path handling"],
  },
  {
    title: "Document Generation",
    description:
      "Generates Word documents with structured content, live writing flow, progress updates, and auto-save behavior.",
    points: ["Word automation", "Live writing", "Auto-save workflow"],
  },
  {
    title: "React Project Generation",
    description:
      "Creates React website structures, generates files, installs dependencies, and supports local development server execution.",
    points: ["React generation", "Dependency install", "Local run support"],
  },
  {
    title: "Memory & Cache Layer",
    description:
      "Keeps recent commands, selected paths, previous actions, and session context to make follow-up commands smarter.",
    points: ["Session memory", "Recent context", "Command cache"],
  },
  {
    title: "Safety Layer",
    description:
      "Uses confirmations for risky actions, blocks sensitive paths, fails safely, and avoids destructive operations without permission.",
    points: ["Risk confirmation", "Safe execution", "Sensitive path protection"],
  },
];

function InsideOrvix() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-cyan-400">Inside Orvix</p>

          <h2 className="mt-2 text-3xl font-bold md:text-5xl">
            My Flagship AI Automation System
          </h2>

          <p className="mt-5 max-w-3xl text-slate-300">
            Orvix is an in-progress desktop AI automation system focused on
            real productivity tasks, safe system control, document generation,
            project creation, and intelligent command handling.
          </p>
        </motion.div>

        <div className="mb-10 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900/30 to-purple-600/10 p-1">
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="glass-card rounded-3xl p-8 md:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <div className="mb-4 inline-block rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-400">
                  In-progress flagship project
                </div>

                <h3 className="text-3xl font-bold md:text-4xl">
                  Orvix is more than a chatbot.
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  It is being built as a practical AI desktop assistant that can
                  understand commands and execute real workflows such as file
                  management, Word generation, React project creation,
                  dependency installation, local project running, and safe
                  automation.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 font-mono text-sm">
                <p className="text-cyan-400">&gt; orvix.analyze_task()</p>
                <p className="mt-3 text-slate-400">
                  input: "create a React portfolio and run it"
                </p>
                <p className="mt-3 text-slate-300">
                  intent: project_generation
                </p>
                <p className="mt-3 text-slate-300">
                  steps: create_folder → generate_files → install_dependencies
                  → run_dev_server
                </p>
                <p className="mt-3 text-green-400">
                  status: safe execution ready
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {orvixModules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group glass-card rounded-3xl p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400">
                0{index + 1}
              </div>

              <h3 className="text-xl font-bold transition group-hover:text-cyan-400">
                {module.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {module.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {module.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-400"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InsideOrvix;