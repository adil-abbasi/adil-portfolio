import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Data Science",
    skills: ["Pandas", "NumPy", "Scikit-learn", "XGBoost", "Matplotlib", "Seaborn", "Plotly"],
  },
  {
    title: "Machine Learning",
    skills: ["Regression", "Classification", "Time Series", "Prediction Models", "Model Evaluation"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "Joins", "Subqueries", "Schema Design"],
  },
  {
    title: "AI & Automation",
    skills: ["LLM Concepts", "Desktop Automation", "Smart File Search", "NLP Basics", "Command Parsing"],
  },
  {
    title: "Web & Tools",
    skills: ["React", "Tailwind CSS", "Spring Boot", "REST APIs", "Git", "GitHub"],
  },
];

function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-cyan-400">Skills</p>
          <h2 className="mt-2 text-3xl font-bold md:text-5xl">
            My Technical Stack
          </h2>
          <p className="mt-5 max-w-3xl text-slate-300">
            A balanced skill set covering AI automation, machine learning,
            data analysis, databases, frontend development, and software engineering.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-card shine-card rounded-3xl p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              <h3 className="mb-5 text-xl font-semibold text-cyan-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-300"
                  >
                    {skill}
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

export default Skills;