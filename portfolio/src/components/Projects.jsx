import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from "react-icons/fa"

const languageColors = {
  JavaScript: "#f1e05a", TypeScript: "#3178c6", Python: "#3572A5",
  "C++": "#f34b7d", React: "#61dafb", HTML: "#e34c26", CSS: "#563d7c",
  Various: "#00ff88",
}

const ALL_PROJECTS = [
  {
    id: 1, title: "Chattrix", category: "MERN",
    desc: "A secure, real-time messaging platform with Socket.io. Features JWT auth, live presence indicators, and file sharing.",
    tech: ["JavaScript", "React"], github: "https://github.com/siddhantkumar101/chattrix-chat-application",
    live: "https://chattrix-chat-application.vercel.app", image: "/assets/projects/chattrix.png", stars: 0, forks: 0, featured: false,
  },
  {
    id: 2, title: "Armor AI", category: "MERN",
    desc: "An advanced AI-powered financial advising platform with intelligent portfolio management, risk assessment, and market insights.",
    tech: ["JavaScript", "Python"], github: "https://github.com/siddhantkumar101/armor_ai_financial_advising",
    live: "https://armor-ai-financial-advising-fon5.vercel.app/", image: "/assets/projects/armor.png", stars: 1, forks: 0, featured: true,
  },
  {
    id: 3, title: "Fishing Attack Demo", category: "React",
    desc: "Educational cybersecurity platform that simulates phishing attacks to spread awareness about social engineering vulnerabilities.",
    tech: ["JavaScript"], github: "https://github.com/siddhantkumar101/fishingattackdemosite",
    live: "https://fishingattackdemosite.vercel.app", image: "/assets/projects/fishing.png", stars: 0, forks: 0, featured: false,
  },
  {
    id: 4, title: "Automated Timetable", category: "Python",
    desc: "Algorithmic scheduling system that auto-generates conflict-free timetables for educational institutions using constraint optimization.",
    tech: ["Python"], github: "https://github.com/siddhantkumar101/automated_timetable_website",
    live: "https://automated-timetable-website.vercel.app", image: "/assets/projects/timetable.png", stars: 0, forks: 0, featured: false,
  },
  {
    id: 5, title: "Portfolio", category: "React",
    desc: "This very portfolio — cinematic dark-mode SPA with neural background, dynamic GitHub API integration, and full animation system.",
    tech: ["JavaScript", "React"], github: "https://github.com/siddhantkumar101/Portfolio",
    live: "https://github.com/siddhantkumar101/Portfolio", image: "/assets/projects/portfolio.png", stars: 0, forks: 0, featured: false,
  },
]

const FILTERS = ["ALL", "MERN", "React", "Python"]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
})

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      variants={fadeUp(index * 0.1)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="gradient-border group relative overflow-hidden flex flex-col"
      style={{ transform: "perspective(1000px)" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-3 right-3 z-20">
          <span className="featured-badge text-[10px] font-bold text-white px-3 py-1 rounded-full tracking-widest uppercase">
            ★ Featured
          </span>
        </div>
      )}

      {/* Image */}
      {project.image && (
        <div className="relative h-44 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#13131a] via-transparent to-transparent" />
        </div>
      )}

      <div className="p-5 md:p-6 flex flex-col flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
          <h3 className="text-lg md:text-xl font-bold text-[#f0f0f0] group-hover:text-[#00ff88] transition-colors duration-300 break-words">
            {project.title}
          </h3>
          <div className="flex gap-3 shrink-0">
            <a href={project.github} target="_blank" rel="noreferrer"
              className="text-[#666888] hover:text-[#00ff88] transition-colors">
              <FaGithub size={18} />
            </a>
            <a href={project.live} target="_blank" rel="noreferrer"
              className="text-[#666888] hover:text-[#00d4ff] transition-colors">
              <FaExternalLinkAlt size={16} />
            </a>
          </div>
        </div>

        <p className="text-[#666888] text-sm leading-relaxed mb-5 flex-1">{project.desc}</p>

        <div className="mt-auto">
          <div className="flex items-center gap-5 text-xs font-mono text-[#666888] mb-4">
            <span className="flex items-center gap-1"><FaStar className="text-yellow-500" />{project.stars}</span>
            <span className="flex items-center gap-1"><FaCodeBranch />{project.forks}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono text-[#666888] border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: languageColors[t] || "#666888" }} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover glow overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
        style={{ background: "radial-gradient(circle at 50% 0%, rgba(0,255,136,0.04), transparent 70%)" }} />
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState("ALL")
  const [projects, setProjects] = useState(ALL_PROJECTS)
  const [displayed, setDisplayed] = useState(ALL_PROJECTS)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  // Try to fetch live from backend; fallback to ALL_PROJECTS
  useEffect(() => {
    fetch("https://portfolio-za9x.onrender.com/api/projects")
      .then(r => { if (!r.ok) throw new Error(); return r.json() })
      .then(data => {
        if (!Array.isArray(data)) return
        const enriched = data.map(p => {
          const local = ALL_PROJECTS.find(lp =>
            p.title?.toLowerCase().includes(lp.title.toLowerCase().split(" ")[0])
          )
          if (local) return { ...local, stars: p.stars || local.stars, forks: p.forks || local.forks }
          return null
        }).filter(Boolean)
        if (enriched.length >= 3) setProjects(enriched)
      })
      .catch(() => { /* use fallback */ })
  }, [])

  useEffect(() => {
    setDisplayed(filter === "ALL" ? projects : projects.filter(p => p.category === filter))
  }, [filter, projects])

  return (
    <section id="projects" className="section-padding bg-[#0a0a0f] relative border-t border-white/[0.04]">
      <div className="absolute right-0 top-1/2 w-80 h-80 bg-[#00d4ff] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef}>
          <motion.p
            variants={fadeUp(0)} initial="hidden" animate={headerInView ? "visible" : "hidden"}
            className="font-mono text-xs text-[#00ff88] tracking-[0.3em] uppercase mb-4"
          >
            // 02. projects
          </motion.p>
          <motion.h2
            variants={fadeUp(0.1)} initial="hidden" animate={headerInView ? "visible" : "hidden"}
            className="text-4xl md:text-5xl font-black mb-10"
          >
            <span className={`draw-underline ${headerInView ? "active" : ""}`}>SELECTED WORK</span>
          </motion.h2>

          {/* Filter tabs */}
          <motion.div
            variants={fadeUp(0.2)} initial="hidden" animate={headerInView ? "visible" : "hidden"}
            className="flex flex-wrap gap-2 mb-12"
          >
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`filter-tab px-5 py-2 rounded-full font-mono text-xs border transition-all duration-300 ${
                  filter === f
                    ? "border-[#00ff88] text-[#00ff88] bg-[#00ff88]/10"
                    : "border-white/10 text-[#666888] hover:border-[#00ff88]/40 hover:text-[#f0f0f0]"
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}