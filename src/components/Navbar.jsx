import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-5">
        
      <div className="mx-auto max-w-7xl rounded-2xl glass-card">
        <div className="flex items-center justify-between px-5 py-3 md:px-6">
          <a href="#" className="text-lg font-bold tracking-wide md:text-xl">
            Adil Abbasi
          </a>
            
          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-slate-300 transition hover:text-cyan-400 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-full border border-slate-600 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaDownload className="text-xs" />
              Resume
            </a>

            <a
              href="#contact"
              className="rounded-full border border-cyan-400/40 px-5 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
            >
              Hire Me
            </a>
          </div>

          <button
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-200 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-xl">{isOpen ? "×" : "☰"}</span>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-slate-800 md:hidden"
            >
              <div className="flex flex-col gap-2 px-5 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-cyan-400/10 hover:text-cyan-400"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="/resume.pdf"
                  download
                  onClick={closeMenu}
                  className="rounded-xl border border-slate-700 px-4 py-3 text-center font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  Download Resume
                </a>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-2 rounded-xl bg-cyan-400 px-4 py-3 text-center font-semibold text-black"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;