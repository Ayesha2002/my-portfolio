import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Moon,
  Sun,
  Download,
  Briefcase,
  Menu,
  X,
} from "lucide-react";

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const roles = ["Full-stack Developer", "Web Developer", "Software Developer"];
  const [currentRole, setCurrentRole] = useState(roles[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % roles.length;
      setCurrentRole(roles[index]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "Telegram Weather Bot",
      desc: "Real-time weather updates on Telegram with daily forecasts and admin panel via Google auth",
      tech: ["Nest.js", "ReactJs", "Postgres", "Prisma", "Firebase"],
      date: "Feb 2025",
      link: "https://github.com/Ayesha2002/telegram_weather_bot",
    },
    {
      title: "AI-WebScrapper",
      desc: "AI-powered web scraper using Python to extract and analyze data from websites",
      tech: ["Python", "Selenium", "Streamlit"],
      date: "Jan 2025",
      link: "https://github.com/Ayesha2002/AI-Webscrapper",
    },
    {
      title: "InstaDetection",
      desc: "Real-time facial expression recognition web app to detect and classify user emotions",
      tech: ["JavaScript", "HTML5", "Face API.js", "Vercel"],
      date: "Jul 2023",
      link: "https://insta-detection.vercel.app",
    },
    {
      title: "Onco MRI",
      desc: "Tumor prediction web app using machine learning and regression models",
      tech: ["Python", "Custom Vision", "Azure", "Streamlit"],
      date: "Sep 2023",
      link: "https://oncomri.streamlit.app",
    },
  ];

  const skills = [
    "JavaScript",
    "React.js",
    "Python",
    "Django",
    "Php",
    "Laravel",
    "MySQL",
    "Mongodb",
    "Node.js",
    "Express.js",
    "Devops",
    "Next.js",
    "Tailwindcss",
  ];

  const experience = [
    {
      role: "Developer Intern",
      organization: "Jamtech Technologies Pvt Ltd.",
      period: "Aug 2025 - Present",
      description:
        "Built and maintained Laravel-based web applications with REST APIs, authentication, and CRUD operations. Refactored backend logic and optimized PHP controllers and database queries for better performance. Contributed to front-end integration using Blade templates and reusable Laravel components.",
      icon: Briefcase,
      tech: ["PHP", "Laravel", "MySQL", "JavaScript"],
    },
  ];

  const bgClass = darkMode
    ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    : "bg-gradient-to-br from-slate-50 via-white to-slate-100";
  const textClass = darkMode ? "text-white" : "text-slate-900";
  const cardBg = darkMode ? "bg-slate-800/30" : "bg-white/80";
  const borderColor = darkMode ? "border-slate-700/50" : "border-slate-200";
  const navBg = darkMode ? "bg-slate-950/50" : "bg-white/80";
  const navBorder = darkMode ? "border-slate-800/50" : "border-slate-200/50";

  return (
    <div
      className={`min-h-screen ${bgClass} ${textClass} overflow-hidden transition-colors duration-500`}
    >
      {/* Floating blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute w-80 sm:w-96 h-80 sm:h-96 ${
            darkMode ? "bg-pink-500/20" : "bg-pink-300/30"
          } rounded-full blur-3xl`}
          style={{
            top: "10%",
            left: "20%",
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)`,
          }}
        />
        <div
          className={`absolute w-80 sm:w-96 h-80 sm:h-96 ${
            darkMode ? "bg-orange-500/20" : "bg-orange-300/30"
          } rounded-full blur-3xl`}
          style={{
            bottom: "20%",
            right: "10%",
            transform: `translate(-${scrollY * 0.08}px, -${scrollY * 0.12}px)`,
          }}
        />
      </div>

      {/* Navbar */}
      {/* Navbar */}
<nav
  className={`fixed top-0 w-full z-50 backdrop-blur-md ${navBg} border-b ${navBorder}`}
>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
    <a
      href="#hero"
      className="font-bold text-xl bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 bg-clip-text text-transparent hover:opacity-80"
    >
      Ayesha Khan
    </a>

    {/* Desktop Nav */}
    <div className="hidden md:flex items-center gap-6">
      {["About", "Projects", "Experience", "Skills", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-sm hover:text-pink-500 transition-colors relative group"
        >
          {item}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all" />
        </a>
      ))}

      {/* 🌞 Desktop Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`p-2 rounded-full ${
          darkMode
            ? "bg-slate-800 hover:bg-slate-700 text-yellow-400"
            : "bg-slate-200 hover:bg-slate-300 text-slate-700"
        } transition-all duration-300 hover:scale-110`}
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </div>

    {/* 🍔 Mobile Menu Button */}
    <button
      className="md:hidden p-2 rounded-lg border border-slate-500"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X /> : <Menu />}
    </button>
  </div>

  {/* 📱 Mobile Dropdown Menu */}
  {menuOpen && (
    <div
      className={`md:hidden flex flex-col items-center py-4 gap-4 ${navBg} border-t ${navBorder}`}
    >
      {["About", "Projects", "Experience", "Skills", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className="text-sm hover:text-pink-500"
        >
          {item}
        </a>
      ))}

      {/* 🌙 Mobile Dark/Light Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`p-2 mt-3 rounded-full ${
          darkMode
            ? "bg-slate-800 hover:bg-slate-700 text-yellow-400"
            : "bg-slate-200 hover:bg-slate-300 text-slate-700"
        } transition-all duration-300 hover:scale-110`}
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </div>
  )}
</nav>


      {/* Hero */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6"
      >
        <div className="max-w-4xl text-center space-y-8 animate-fade-in">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 ${
              darkMode ? "bg-slate-800/50" : "bg-white/70"
            } rounded-full border ${
              darkMode ? "border-pink-500/30" : "border-orange-400/50"
            } backdrop-blur-sm`}
          >
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-pink-400">Open to Opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            <span className="block mb-2">Hey! Myself</span>
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 bg-clip-text text-transparent animate-gradient">
              Ayesha Khan
            </span>
          </h1>

          <p
            className={`text-lg sm:text-xl md:text-2xl ${
              darkMode ? "text-slate-300" : "text-slate-600"
            } max-w-sm sm:max-w-xl mx-auto role-fade`}
          >
            {currentRole}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 rounded-full font-semibold text-white flex items-center gap-2 hover:shadow-lg hover:shadow-pink-500/40 transition-all"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/ayesha_resume_intern.pdf"
              download="ayesha_resume_intern.pdf"
              className={`px-8 py-4 border-2 ${
                darkMode
                  ? "border-slate-700 hover:border-pink-500 hover:bg-slate-800/50"
                  : "border-slate-300 hover:border-pink-500 hover:bg-white"
              } rounded-full font-semibold transition-all`}
            >
              Download Resume
              <Download className="w-4 h-4 inline ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div
            className={`space-y-6 text-lg leading-relaxed ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            <p>
              A passionate full-stack developer who loves solving real-world
              problems and creating meaningful digital experiences. I focus on
              building efficient, scalable, and elegant web applications that
              combine clean design with robust backend logic.
            </p>
            <p>
              Skilled in technologies like{" "}
              <span className="text-pink-400 font-medium">React.js</span>,{" "}
              <span className="text-pink-400 font-medium">Node.js</span>,{" "}
              <span className="text-pink-400 font-medium">Python</span>, and{" "}
              <span className="text-pink-400 font-medium">Laravel</span>, I
              enjoy turning ideas into polished products that offer a seamless
              user experience.
            </p>
            <p>
              I approach development with{" "}
              <span className="text-orange-400 font-medium">clarity</span>,{" "}
              <span className="text-pink-400 font-medium">curiosity</span>, and{" "}
              <span className="text-rose-400 font-medium">
                continuous learning
              </span>
              . Beyond coding, I explore design and problem-solving techniques
              that inspire innovation in my work.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="relative border-l border-pink-500/30 ml-2 sm:ml-4">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="mb-12 ml-6 group relative transition-all hover:translate-x-1"
              >
                <div className="absolute -left-3 sm:-left-3 top-2 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-gradient-to-r from-orange-400 to-pink-500" />
                <div
                  className={`${cardBg} border ${borderColor} p-6 rounded-2xl hover:border-pink-500/60 transition-all`}
                >
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                    {exp.organization}
                  </h3>
                  <p className="italic text-slate-400 text-sm mb-2">
                    {exp.role}
                  </p>
                  <p className="text-sm text-slate-500 mb-3">{exp.period}</p>
                  <p className="text-slate-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-4 sm:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`${cardBg} border ${borderColor} rounded-2xl p-6 hover:scale-105 transition-all hover:border-pink-500/60`}
            >
              <h3 className="text-2xl font-bold mb-2 text-pink-400">
                {p.title}
              </h3>
              <p className="mb-3 text-sm sm:text-base text-slate-400">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs border border-slate-700/40 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-pink-400 hover:gap-3 transition-all"
              >
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-4 sm:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {skills.map((s, i) => (
            <span
              key={i}
              className={`px-4 py-2 rounded-full border text-xs sm:text-sm font-medium ${
                darkMode
                  ? "bg-slate-800/50 text-slate-200 border-slate-700 hover:border-pink-500"
                  : "bg-white text-slate-800 border-slate-200 hover:border-pink-500"
              } transition-all`}
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-4 sm:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10">
          Have a project in mind or just want to say hi? Reach out — I’d love to
          chat!
        </p>
        <a
          href="mailto:ayesha200210@gmail.com"
          className="inline-flex items-center gap-3 px-10 py-4 sm:px-12 sm:py-5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full font-semibold text-lg text-white hover:shadow-lg hover:shadow-pink-500/40 transition-all"
        >
          <Mail className="w-5 h-5" /> Send me an email
        </a>

        <div className="flex gap-6 justify-center pt-10">
          <a
            href="https://linkedin.com/in/khanayesha10"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-slate-700/50 hover:border-pink-500 hover:scale-110 transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/Ayesha2002"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-slate-700/50 hover:border-pink-500 hover:scale-110 transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/ashibillu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-slate-700/50 hover:border-pink-500 hover:scale-110 transition-all"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`border-t ${
          darkMode ? "border-slate-800 text-slate-500" : "border-slate-200"
        } py-8 text-center`}
      >
        © 2025 Ayesha Khan. Built with 💖
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        @keyframes fadeText {
          0%,
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
          50% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .role-fade {
          animation: fadeText 2s ease-in-out infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
