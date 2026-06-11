import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiRefreshCw, FiPlus } from "react-icons/fi";

const welcomeMessage =
  "Hi, I’m Orvix Mini. How can I help you explore Adil’s portfolio?";

const suggestions = [
  "Tell me about Adil",
  "Skills",
  "Projects",
  "Certificates",
  "Why hire Adil?",
  "Open GitHub",
  "Open LinkedIn",
  "Resume summary",
  "Internship focus",
  "Data science work",
  "Frontend work",
  "Contact Adil",
];

const responses = {
  about:
    "Adil Abbasi is a Computer Science student focused on AI automation, data science, machine learning, frontend development, databases, and practical software systems. He builds projects that combine usability with intelligent automation.",
  projects:
    "Adil’s key projects include Orvix, Dev.Sync, Stock Price Prediction, Global Waste & Hunger Simulator, and StopTB. His strongest project is Orvix because it combines intelligent automation, file control, Word generation, React project generation, memory handling, and safer execution flows.",
  orvix:
    "Orvix is Adil’s flagship AI desktop automation assistant. It focuses on natural language PC control, smart file operations, document generation, React project generation, dependency installation, session memory, and safe task execution.",
  skills:
    "Adil works with Python, JavaScript, React, Next.js, SQL, MySQL, MongoDB, Pandas, NumPy, Scikit-learn, XGBoost, data visualization, machine learning workflows, frontend development, and AI automation concepts.",
  resume:
    "Adil’s resume highlights AI automation, data science, machine learning, frontend development, databases, and practical software projects. His strongest direction is building intelligent systems with real-world use.",
  whyHire:
    "Adil is a strong candidate because he combines AI automation, data science, frontend development, and practical project-building. He does not just study tools; he applies them in meaningful projects like Orvix, Dev.Sync, and data-driven systems.",
  contact:
  "Sure. I’m taking you to the contact section where you can send a message to Adil. You can also email him directly at adilabbasyy233@gmail.com.",
  github: "Opening Adil’s GitHub profile.",
  linkedin: "Opening Adil’s LinkedIn profile.",
  internship:
    "Adil is open to internships and practical opportunities in AI, machine learning, data science, frontend development, software engineering, and automation-focused projects.",
  dataScience:
    "Adil’s data science direction includes Python, Pandas, NumPy, Scikit-learn, XGBoost, visualization, prediction models, dashboards, and projects like Stock Price Prediction and Global Waste & Hunger Simulator.",
  frontend:
    "Adil’s frontend work includes React, Next.js, JavaScript, Tailwind CSS, responsive UI, dashboards, portfolio design, and deployed web projects like Dev.Sync and StopTB.",
    certificates:
  "Adil has completed IBM Data Science and Applied Data Science certificates through Coursera. These cover Python, SQL, data analysis, data visualization, machine learning foundations, and hands-on data-driven projects.",
  default:
    "I can help with Adil’s background, skills, projects, Orvix, resume summary, GitHub, LinkedIn, internship focus, or contact details. Try asking: tell me about Adil, explain Orvix, summarize skills, or hire Adil.",
};

const intentPatterns = {
  about: [
    "about",
    "adil",
    "who is",
    "background",
    "profile",
    "intro",
    "introduction",
    "tell me about",
    "adil kon",
    "adil kaun",
    "adil k bare",
    "adil ke bare",
    "his background",
  ],
  projects: [
    "project",
    "projects",
    "work",
    "portfolio",
    "best project",
    "show project",
    "featured",
    "built",
    "made",
    "projct",
    "projcts",
    "prject",
    "best work",
  ],
  orvix: [
    "orvix",
    "orvik",
    "orvix ai",
    "assistant",
    "desktop assistant",
    "automation assistant",
    "ai assistant",
    "flagship",
    "main project",
    "fyp",
    "word generation",
    "react generation",
    "memory cache",
    "file automation",
  ],
  skills: [
    "skill",
    "skills",
    "tech stack",
    "technology",
    "technologies",
    "tools",
    "expertise",
    "what he knows",
    "skil",
    "skils",
    "skillz",
    "python",
    "react",
    "sql",
  ],
  resume: [
    "resume",
    "cv",
    "summary",
    "resume summary",
    "cv summary",
    "resum",
    "resme",
  ],
  whyHire: [
    "why hire",
    "hire adil",
    "why should",
    "why choose",
    "should we hire",
    "reason to hire",
    "good candidate",
    "why adil",
  ],
  contact: [
    "contact",
    "email",
    "mail",
    "message",
    "reach",
    "connect",
    "hire",
    "send message",
    "how to contact",
  ],
  github: [
    "github",
    "git hub",
    "repo",
    "repository",
    "repositories",
    "githb",
    "githhub",
    "source code",
  ],
  linkedin: [
    "linkedin",
    "linked in",
    "linkdin",
    "linkdln",
    "professional profile",
  ],
  internship: [
    "internship",
    "intern",
    "job",
    "opportunity",
    "available",
    "availability",
    "open to work",
    "career",
  ],
  dataScience: [
    "data science",
    "machine learning",
    "ml",
    "model",
    "prediction",
    "dashboard",
    "visualization",
    "analytics",
    "stock",
    "xgboost",
    "pandas",
    "numpy",
  ],

  certificates: [
  "certificate",
  "certificates",
  "certification",
  "certifications",
  "coursera",
  "ibm",
  "data science certificate",
  "applied data science",
  "explain certificates",
  "course",
  "courses",
  "learning",
],

  frontend: [
    "frontend",
    "front end",
    "web",
    "website",
    "react",
    "next",
    "nextjs",
    "ui",
    "responsive",
    "tailwind",
    "javascript",
  ],
};

function cleanText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function levenshteinDistance(a, b) {
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);

  for (let j = 0; j <= a.length; j += 1) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i += 1) {
    for (let j = 1; j <= a.length; j += 1) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

function fuzzyIncludes(input, pattern) {
  const cleanedInput = cleanText(input);
  const cleanedPattern = cleanText(pattern);

  if (cleanedInput.includes(cleanedPattern)) {
    return true;
  }

  const inputWords = cleanedInput.split(" ");
  const patternWords = cleanedPattern.split(" ");

  return patternWords.some((patternWord) =>
    inputWords.some((inputWord) => {
      if (patternWord.length <= 3 || inputWord.length <= 3) {
        return inputWord === patternWord;
      }

      return levenshteinDistance(inputWord, patternWord) <= 2;
    })
  );
}

function detectIntent(input) {
  const scores = {};

  Object.entries(intentPatterns).forEach(([intent, patterns]) => {
    scores[intent] = 0;

    patterns.forEach((pattern) => {
      if (fuzzyIncludes(input, pattern)) {
        scores[intent] += pattern.split(" ").length > 1 ? 2 : 1;
      }
    });
  });

  const bestIntent = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];

  if (!bestIntent || bestIntent[1] === 0) {
    return "default";
  }

  return bestIntent[0];
}

function TypingIndicator() {
  return (
    <div className="mr-auto flex max-w-[82%] items-center gap-2 rounded-[20px] rounded-bl-md border border-slate-800 bg-slate-950/80 px-4 py-3">
      <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.2s]"></span>
      <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.1s]"></span>
      <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400"></span>
    </div>
  );
}

function getSmartIntent(input) {
  const text = cleanText(input);

  // Highest priority: direct action/contact commands
  if (
    text.includes("send mail") ||
    text.includes("send email") ||
    text.includes("mail adil") ||
    text.includes("email adil") ||
    text.includes("contact adil") ||
    text.includes("message adil") ||
    text.includes("reach adil") ||
    text.includes("connect with adil")
  ) {
    return "contact";
  }

  // Hiring intent
  if (
    text.includes("hire adil") ||
    text.includes("why hire") ||
    text.includes("why should") ||
    text.includes("why choose") ||
    text.includes("good candidate") ||
    text.includes("reason to hire")
  ) {
    return "whyHire";
  }

  // External link actions
  if (
    text.includes("open github") ||
    text.includes("github") ||
    text.includes("git hub") ||
    text.includes("githb") ||
    text.includes("source code") ||
    text.includes("repo")
  ) {
    return "github";
  }

  if (
    text.includes("open linkedin") ||
    text.includes("linkedin") ||
    text.includes("linked in") ||
    text.includes("linkdin") ||
    text.includes("professional profile")
  ) {
    return "linkedin";
  }

  // Contact commands
  if (
    text.includes("contact") ||
    text.includes("email") ||
    text.includes("mail") ||
    text.includes("message") ||
    text.includes("reach") ||
    text.includes("connect")
  ) {
    return "contact";
  }

  // Then use normal fuzzy detection
  return detectIntent(input);
}

function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: welcomeMessage },
  ]);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isNear, setIsNear] = useState(false);
  const [eyeShift, setEyeShift] = useState({ x: 0, y: 0 });

  const orbRef = useRef(null);
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    function handleMouseMove(event) {
      if (!orbRef.current) return;

      const rect = orbRef.current.getBoundingClientRect();
      const orbX = rect.left + rect.width / 2;
      const orbY = rect.top + rect.height / 2;

      const dx = event.clientX - orbX;
      const dy = event.clientY - orbY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 240) {
        setIsNear(true);

        const maxMove = 4;
        const moveX = Math.max(-maxMove, Math.min(maxMove, dx / 28));
        const moveY = Math.max(-maxMove, Math.min(maxMove, dy / 28));

        setEyeShift({ x: moveX, y: moveY });
      } else {
        setIsNear(false);
        setEyeShift({ x: 0, y: 0 });
      }
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function scrollToSection(target) {
    const section = document.getElementById(target);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function addAssistantMessage(text) {
    setMessages((current) => [...current, { role: "assistant", text }]);
  }

  function runCommand(command) {
    const intent = getSmartIntent(command);

    setShowSuggestions(false);
    setMessages((current) => [...current, { role: "user", text: command }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
if (intent === "contact") {
  addAssistantMessage(responses.contact);

  setTimeout(() => {
    scrollToSection("contact");
  }, 450);

  return;
}

      if (intent === "linkedin") {
        addAssistantMessage(responses.linkedin);

        setTimeout(() => {
          window.open(
            "https://www.linkedin.com/in/adil-abbasi-204555307/",
            "_blank"
          );
        }, 450);

        return;
      }

      if (intent === "contact") {
        addAssistantMessage(responses.contact);

        setTimeout(() => {
          scrollToSection("contact");
        }, 450);

        return;
      }

      addAssistantMessage(responses[intent] || responses.default);
    }, 600);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!input.trim()) return;

    runCommand(input);
    setInput("");
  }

  function resetAssistant() {
    setMessages([{ role: "assistant", text: welcomeMessage }]);
    setShowSuggestions(false);
    setInput("");
    setIsTyping(false);
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto fixed bottom-24 left-3 right-3 flex h-[560px] max-h-[calc(100vh-8rem)] w-auto flex-col overflow-hidden rounded-[28px] border border-cyan-400/20 bg-slate-950/95 shadow-[0_0_55px_rgba(34,211,238,0.18)] backdrop-blur-2xl sm:bottom-28 sm:left-auto sm:right-5 sm:h-[620px] sm:w-[520px] sm:rounded-[32px]"
          >
            <div className="relative shrink-0 overflow-hidden border-b border-slate-800/80 px-5 py-4">
              <div className="absolute -right-6 -top-8 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl"></div>
              <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-purple-600/10 blur-3xl"></div>

              <div className="relative z-10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.12)]">
                    <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.9)]"></div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Orvix Mini
                    </h3>

                    <div className="mt-0.5 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-green-400"></span>
                      <p className="text-xs text-slate-400">
                        Smart Portfolio Assistant
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={resetAssistant}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  <FiRefreshCw className="text-[12px]" />
                  Reset
                </button>
              </div>
            </div>

            <div className="flex min-h-0 flex-1 flex-col p-5">
              <div className="orvix-message-scroll flex-1 overflow-y-auto rounded-[26px] border border-slate-800 bg-slate-900/55 p-5">
                <div className="space-y-3">
                  {messages.map((message, index) => (
                    <div
                      key={`${message.role}-${index}`}
                      className={`flex ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[92%] sm:max-w-[86%] px-4 py-3 text-sm leading-6 shadow-sm ${
                          message.role === "user"
                            ? "rounded-[22px] rounded-br-md bg-cyan-400 text-slate-950"
                            : "rounded-[22px] rounded-bl-md border border-slate-800 bg-slate-950/75 text-slate-200"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}

                  {isTyping && <TypingIndicator />}

                  <div ref={messageEndRef}></div>
                </div>
              </div>

              <AnimatePresence>
                {showSuggestions && (
                  <motion.div
                    initial={{ opacity: 0, y: 14, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: 14, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 overflow-hidden"
                  >
                    <div className="orvix-actions-scroll mt-4 flex gap-2 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/50 p-2">
                      {suggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => runCommand(suggestion)}
                          className="shrink-0 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs text-slate-400 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form
                onSubmit={handleSubmit}
                className="mt-4 shrink-0 rounded-[24px] border border-slate-800 bg-slate-950/65 p-2"
              >
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowSuggestions((current) => !current)}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-700 bg-slate-950/60 text-slate-300 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
                    aria-label="Toggle quick actions"
                  >
                    <FiPlus
                      className={`text-[18px] transition ${
                        showSuggestions ? "rotate-45" : "rotate-0"
                      }`}
                    />
                  </button>

                  <input
                    type="text"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Try: tell me about Adil"
                    className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500"
                  />

                  <button
                    type="submit"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 transition hover:bg-cyan-300"
                    aria-label="Send message"
                  >
                    <FiSend className="text-[16px]" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto fixed bottom-8 right-28 hidden rounded-full border border-cyan-400/20 bg-slate-950/85 px-4 py-2 text-sm text-slate-300 shadow-[0_0_25px_rgba(34,211,238,0.12)] backdrop-blur-xl md:block"
        >
          Ask AI Assistant
        </motion.div>
      )}

      <motion.button
        ref={orbRef}
        onClick={() => setIsOpen((current) => !current)}
        animate={{
          scale: isNear ? 1.07 : 1,
          rotate: isNear ? 1.5 : 0,
        }}
        transition={{ duration: 0.25 }}
        className={`pointer-events-auto fixed bottom-5 right-5 flex h-20 w-20 items-center justify-center rounded-full border bg-slate-950 transition ${
          isNear
            ? "border-cyan-400/60 shadow-[0_0_60px_rgba(34,211,238,0.48)]"
            : "border-cyan-400/30 shadow-[0_0_35px_rgba(34,211,238,0.25)]"
        }`}
        aria-label="Open Orvix Mini Assistant"
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 via-slate-900 to-purple-600/25"></span>
        <span className="absolute inset-2 rounded-full border border-cyan-400/20"></span>
        <span className="absolute inset-4 rounded-full bg-slate-900/60"></span>

        <span
          className={`absolute inset-0 rounded-full ${
            isNear ? "animate-pulse bg-cyan-400/10" : ""
          }`}
        ></span>

        <span className="relative flex gap-2">
          <span className="orvix-eye">
            <span
              className="orvix-pupil"
              style={{
                transform: `translate(${eyeShift.x}px, ${eyeShift.y}px)`,
              }}
            ></span>
          </span>

          <span className="orvix-eye">
            <span
              className="orvix-pupil"
              style={{
                transform: `translate(${eyeShift.x}px, ${eyeShift.y}px)`,
              }}
            ></span>
          </span>
        </span>

        <span
          className={`absolute -right-1 -top-1 h-4 w-4 rounded-full border border-slate-950 shadow-[0_0_12px_rgba(34,211,238,0.5)] ${
            isNear ? "bg-cyan-300" : "bg-green-400"
          }`}
        ></span>
      </motion.button>
    </div>
  );
}

export default PortfolioAssistant;