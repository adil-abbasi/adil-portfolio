import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name || "Visitor"}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:adilabbasyy233@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="mb-12 text-center"
        >
          <p className="text-cyan-400">Contact</p>

          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Let’s Build Something Intelligent
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I am open to internships, AI/ML projects, data science work,
            frontend development, and practical problem-solving opportunities.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="glass-card rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold">Contact Details</h3>

            <p className="mt-4 leading-8 text-slate-300">
              Have an internship opportunity, project idea, collaboration, or
              technical role? Send a message and I will respond as soon as
              possible.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:adilabbasyy233@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/50 p-4 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaEnvelope />
                adilabbasyy233@gmail.com
              </a>

              <a
                href="https://github.com/adil-abbasi"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/50 p-4 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaGithub />
                GitHub Profile
              </a>

              <a
                href="https://www.linkedin.com/in/adil-abbasi-204555307/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/50 p-4 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaLinkedin />
                LinkedIn Profile
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/50 p-4 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaDownload />
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="glass-card rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold">Send a Message</h3>

            <div className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3 font-semibold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.28)] transition hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(34,211,238,0.4)]"
              >
                Send Message
              </button>

              <p className="text-center text-xs text-slate-500">
                This opens the visitor’s email app with a pre-filled message.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;