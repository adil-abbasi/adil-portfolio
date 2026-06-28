import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PortfolioAssistant from "./components/PortfolioAssistant";
//import InsideOrvix from "./components/InsideOrvix";
import ScrollProgress from "./components/ScrollProgress";
import Certifications from "./components/Certifications";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="fixed inset-0 opacity-40 grid-bg"></div>
      <div className="fixed left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl"></div>
      <div className="fixed bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>

      <div className="relative z-10">
        <ScrollProgress />
        <Navbar />
        <div className="section-divider"></div>
        <Hero />
        <div className="section-divider"></div>
        <About />
      <div className="section-divider"></div>
        <Skills />
        <div className="section-divider"></div>

        <Certifications />
        <div className="section-divider"></div>

        <Projects />
        <div className="section-divider"></div>
        <Contact />
        <div className="section-divider"></div>
        <Footer />
        <PortfolioAssistant />
      </div>
    </main>
  );
}

export default App;