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
} from "lucide-react";

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

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
      gradient: "from-orange-400 to-pink-500",
      date: "Feb 2025",
      link: "https://github.com/Ayesha2002/telegram_weather_bot",
    },
    {
      title: "AI-WebScrapper",
      desc: "AI-powered web scraper using Python to extract and analyze data from websites",
      tech: ["Python", "Selenium", "Streamlit"],
      gradient: "from-orange-400 to-pink-500",
      date: "Jan 2025",
      link: "https://github.com/Ayesha2002/AI-Webscrapper",
    },
    {
      title: "InstaDetection",
      desc: "Real-time facial expression recognition web app to detect and classify user emotions",
      tech: ["JavaScript", "HTML5", "Face API.js", "Vercel"],
      gradient: "from-orange-400 to-pink-500",
      date: "Jul 2023",
      link: "https://insta-detection.vercel.app",
    },
    {
      title: "Onco MRI",
      desc: "Tumor prediction web app using machine learning and regression models",
      tech: ["Python", "Custom Vision", "Azure", "Streamlit"],
      gradient: "from-orange-400 to-pink-500",
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
      {/* Floating gradient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute w-96 h-96 ${
            darkMode ? "bg-pink-500/20" : "bg-pink-300/30"
          } rounded-full blur-3xl`}
          style={{
            top: "10%",
            left: "20%",
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)`,
          }}
        />
        <div
          className={`absolute w-96 h-96 ${
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
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur-md ${navBg} border-b ${navBorder}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
         <a
  href="#hero"
  className="font-bold text-xl bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
>
  Ayesha Khan
</a>

          <div className="flex items-center gap-6">
            {["About", "Projects", "Experience", "Skills", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm hover:text-pink-500 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all" />
                </a>
              )
            )}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-slate-800 hover:bg-slate-700"
                  : "bg-slate-200 hover:bg-slate-300"
              } transition-all duration-300 hover:scale-110`}
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

     {/* Hero Section */}
<section
  id="hero"
  className="relative min-h-screen flex items-center justify-center px-6"
>
  <div className="max-w-4xl text-center space-y-8 animate-fade-in">
    {/* Tagline */}
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

    {/* Name and Title */}
    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
      <span className="block mb-2">Hey! Myself</span>
      <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 bg-clip-text text-transparent animate-gradient">
        Ayesha Khan
      </span>
    </h1>

    <p
      className={`text-xl md:text-2xl ${
        darkMode ? "text-slate-300" : "text-slate-600"
      } max-w-2xl mx-auto role-fade`}
    >
      {currentRole}
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-wrap gap-4 justify-center pt-8">
      <a
        href="#projects"
        className="group px-8 py-4 bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300 flex items-center gap-2 text-white"
      >
        View My Work
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>

      <a
        href="/Ayesha_Resume.pdf"
        download="Ayesha_Resume.pdf"
        className={`px-8 py-4 border-2 ${
          darkMode
            ? "border-slate-700 hover:border-pink-500 hover:bg-slate-800/50"
            : "border-slate-300 hover:border-pink-500 hover:bg-white"
        } rounded-full font-semibold transition-all duration-300`}
      >
        Download Resume
        <Download className="w-4 h-4 inline ml-2" />
      </a>
    </div>

    {/* Social Links */}
    <div className="flex gap-6 justify-center pt-10 flex-wrap">
      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/khanayesha10"
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3 rounded-full ${
          darkMode
            ? "bg-slate-800/50 hover:bg-slate-700"
            : "bg-white hover:bg-slate-100"
        } hover:scale-110 transition-all duration-300 border ${borderColor} hover:border-pink-500`}
      >
        <Linkedin className="w-5 h-5" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Ayesha2002"
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3 rounded-full ${
          darkMode
            ? "bg-slate-800/50 hover:bg-slate-700"
            : "bg-white hover:bg-slate-100"
        } hover:scale-110 transition-all duration-300 border ${borderColor} hover:border-pink-500`}
      >
        <Github className="w-5 h-5" />
      </a>

      {/* X (Twitter) */}
      <a
        href="https://x.com/ashibillu"
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3 rounded-full ${
          darkMode
            ? "bg-slate-800/50 hover:bg-slate-700"
            : "bg-white hover:bg-slate-100"
        } hover:scale-110 transition-all duration-300 border ${borderColor} hover:border-pink-500`}
      >
        <Twitter className="w-5 h-5" />
      </a>

      

      {/* LeetCode */}
      <a
        href="https://leetcode.com/u/khanayesha"
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3 rounded-full ${
          darkMode
            ? "bg-slate-800/50 hover:bg-slate-700"
            : "bg-white hover:bg-slate-100"
        } hover:scale-110 transition-all duration-300 border ${borderColor} hover:border-pink-500`}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          alt="LeetCode"
          className="w-5 h-5 dark:invert"
        />
      </a>
    </div>
  </div>
</section>


     {/* About Me Section */}
<section id="about" className="relative py-24 px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
      <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
        About Me
      </span>
    </h2>

    <div
      className={`space-y-6 text-lg leading-relaxed ${
        darkMode ? "text-slate-300" : "text-slate-700"
      }`}
    >
      <p className="text-left">
        A passionate full-stack developer who loves solving real-world problems
        and creating meaningful digital experiences. I focus on building
        efficient, scalable, and elegant web applications that combine clean
        design with robust backend logic.
      </p>

      <p className="text-left">
        Skilled in technologies like{" "}
        <span className="text-pink-400 font-medium">React.js</span>,{" "}
        <span className="text-pink-400 font-medium">Node.js</span>,{" "}
        <span className="text-pink-400 font-medium">Python</span>, and{" "}
        <span className="text-pink-400 font-medium">Laravel</span>, I enjoy
        turning ideas into polished products that offer a seamless user
        experience. I pay strong attention to performance, usability, and
        maintainability in every project I work on.
      </p>

      <p className="text-left">
        I approach development with a blend of{" "}
        <span className="text-orange-400 font-medium">clarity</span>,{" "}
        <span className="text-pink-400 font-medium">curiosity</span>, and{" "}
        <span className="text-rose-400 font-medium">continuous learning</span>.
        Beyond coding, I explore design concepts and problem-solving techniques
        that inspire innovation in my work.
      </p>

      <p className="text-left">
        I aim to build technology that not only works efficiently but also
        creates genuine value — by blending creativity, precision, and purpose
        in everything I develop.
      </p>
    </div>
  </div>
</section>


      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <div
                key={i}
                className={`${cardBg} border ${borderColor} rounded-2xl p-6 hover:scale-105 transition-all hover:border-pink-500/60`}
              >
                <h3 className="text-2xl font-bold mb-2 text-pink-400">
                  {p.title}
                </h3>
                <p className="mb-3 text-slate-400">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
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
        </div>
      </section>

      {/* Experience Section */}
<section id="experience" className="py-24 px-6">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
      Experience
    </h2>

    <div className="relative border-l border-pink-500/30 ml-4">
      {experience.map((exp, index) => (
        <div
          key={index}
          className="mb-12 ml-6 group relative transition-all hover:translate-x-1"
        >
          {/* Timeline dot */}
          <div className="absolute -left-3 top-2 w-5 h-5 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 group-hover:scale-110 transition-transform" />

          {/* Card */}
          <div
            className={`p-6 rounded-2xl border ${borderColor} ${cardBg} backdrop-blur-sm transition-all duration-500 hover:border-pink-500/60 hover:shadow-lg hover:shadow-pink-500/10`}
          >
            {/* Company name (highlighted) */}
            <h3 className="text-2xl font-semibold mb-1 bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              {exp.organization}
            </h3>

            {/* Role (smaller subtitle) */}
            <p
              className={`text-sm italic mb-2 ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {exp.role}
            </p>

            {/* Period */}
            <p
              className={`text-sm mb-3 ${
                darkMode ? "text-slate-500" : "text-slate-500"
              }`}
            >
              {exp.period}
            </p>

            {/* Description */}
            <p
              className={`leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              {exp.description}
            </p>

            {/* Tech tags */}
            {exp.tech && exp.tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-xs rounded-full border ${
                      darkMode
                        ? "border-slate-700/50 text-slate-300 bg-slate-800/30"
                        : "border-slate-200 text-slate-700 bg-slate-100"
                    } hover:border-pink-500 transition-all duration-300`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Skills */}
      <section id="skills" className="py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((s, i) => (
            <span
              key={i}
              className={`px-5 py-2 rounded-full border text-sm font-medium ${
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
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10">
          Have a project in mind or just want to say hi? Reach out — I’d love to
          chat!
        </p>
        <a
          href="mailto:ayesha200210@gmail.com"
          className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full font-semibold text-lg text-white hover:shadow-lg hover:shadow-pink-500/40 transition-all"
        >
          <Mail className="w-5 h-5" />
          Send me an email
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

      {/* Animations */}
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
