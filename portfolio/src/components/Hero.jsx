import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

// ── Animated Counter ──────────────────────────────────────────────────────────
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const end = parseFloat(target)
    const duration = 1800
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(parseFloat(start.toFixed(2)))
    }, 16)
    return () => clearInterval(timer)
  }, [target])
  return <span>{count}{suffix}</span>
}

// ── Neural Background ─────────────────────────────────────────────────────────
function NeuralBackground() {
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 2,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient mesh blobs */}
      <div className="mesh-blob w-[500px] h-[500px] bg-[#00ff88] opacity-[0.04] top-[-100px] left-[-100px]" style={{ animationDelay: "0s" }} />
      <div className="mesh-blob w-[600px] h-[600px] bg-[#7928ca] opacity-[0.05] bottom-[-150px] right-[-150px]" style={{ animationDelay: "3s" }} />
      <div className="mesh-blob w-[400px] h-[400px] bg-[#00d4ff] opacity-[0.04] top-[40%] left-[40%]" style={{ animationDelay: "1.5s" }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Neural nodes */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {nodes.map((n, i) =>
          nodes.slice(i + 1, i + 3).map(m => (
            <motion.line
              key={`${n.id}-${m.id}`}
              x1={`${n.x}%`} y1={`${n.y}%`}
              x2={`${m.x}%`} y2={`${m.y}%`}
              stroke="rgba(0,255,136,0.08)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: n.delay }}
            />
          ))
        )}
        {nodes.map(n => (
          <motion.circle
            key={n.id}
            cx={`${n.x}%`} cy={`${n.y}%`} r="2"
            fill="rgba(0,255,136,0.4)"
            animate={{ cy: [`${n.y}%`, `${n.y - 2}%`, `${n.y}%`] }}
            transition={{ duration: n.duration, repeat: Infinity, delay: n.delay, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  const stats = [
    { label: "CGPA", value: "9.05", suffix: "" },
    { label: "LeetCode / day", value: "10", suffix: "+" },
    { label: "Projects Shipped", value: "5", suffix: "" },
    { label: "Year of Batch", value: "2028", suffix: "" },
  ]

  const socials = [
    { icon: <FaGithub />, link: "https://github.com/siddhantkumar101", label: "GitHub" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/siddhant-kumar-dev", label: "LinkedIn" },
    { icon: <FaEnvelope />, link: "mailto:kumarsiddhant815@gmail.com", label: "Email" },
    { icon: <SiLeetcode />, link: "https://leetcode.com/u/siddhant080306/", label: "LeetCode" },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]">
      <NeuralBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-24 pb-16">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <motion.p variants={fadeUp} className="font-mono text-xs text-[#00ff88] neon-green-text mb-5 tracking-[0.3em] uppercase">
              $ whoami —— Available for SDE Internship 2026
            </motion.p>

            {/* Glitch Name */}
            <motion.div variants={fadeUp} className="mb-4">
              <h1
                className="glitch font-black leading-none text-[#f0f0f0]"
                data-text="SIDDHANT"
                style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
              >
                SIDDHANT
              </h1>
              <h1
                className="glitch font-black leading-none shimmer-text"
                data-text="KUMAR"
                style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
              >
                KUMAR
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div variants={fadeUp} className="font-mono text-base md:text-xl text-[#666888] mb-8 h-8">
              <span className="text-[#00d4ff]">&gt;&nbsp;</span>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",  2000,
                  "DSA Problem Solver",    2000,
                  "Competitive Programmer",2000,
                  "SDE Intern Seeker 2026",2000,
                ]}
                wrapper="span"
                repeat={Infinity}
                className="text-[#f0f0f0]"
              />
              <span className="terminal-cursor" />
            </motion.div>

            {/* Description */}
            <motion.p variants={fadeUp} className="text-[#666888] max-w-md leading-relaxed mb-10 text-sm md:text-base">
              B.Tech CSE @ IIIT Dharwad · Building scalable full-stack systems and crushing DSA daily.
              Currently targeting top SDE internships for Summer 2026.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="magnetic-btn px-7 py-3 rounded-lg font-semibold text-black text-sm bg-[#00ff88] hover:scale-105 transition-all duration-300"
                style={{ boxShadow: "0 0 20px rgba(0,255,136,0.4), 0 0 40px rgba(0,255,136,0.2)" }}
              >
                VIEW PROJECTS
              </a>
              <button
                onClick={() => window.open("/resume.pdf")}
                className="magnetic-btn px-7 py-3 rounded-lg font-semibold text-sm text-[#00ff88] border border-[#00ff88] hover:bg-[#00ff88]/10 transition-all duration-300 animate-[pulse_2.5s_ease-in-out_infinite]"
              >
                DOWNLOAD RESUME
              </button>
            </motion.div>

            {/* Socials */}
            <motion.div variants={fadeUp} className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  data-hover
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-[#666888] hover:text-[#00ff88] border border-white/10 hover:border-[#00ff88]/50 hover:bg-[#00ff88]/5 transition-all duration-300"
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Stats + Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Code Card */}
            <div className="gradient-border p-5 font-mono text-xs md:text-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-[#666888] text-xs">siddhant.profile.js</span>
              </div>
              <div className="space-y-1 leading-relaxed">
                <p><span className="text-[#7928ca]">const</span> <span className="text-[#00d4ff]">siddhant</span> = {"{"}</p>
                <p className="pl-4"><span className="text-[#00ff88]">"role"</span>: <span className="text-[#f0a070]">"B.Tech CSE Student"</span>,</p>
                <p className="pl-4"><span className="text-[#00ff88]">"college"</span>: <span className="text-[#f0a070]">"IIIT Dharwad"</span>,</p>
                <p className="pl-4"><span className="text-[#00ff88]">"cgpa"</span>: <span className="text-[#79c0ff]">9.05</span>,</p>
                <p className="pl-4"><span className="text-[#00ff88]">"stack"</span>: [<span className="text-[#f0a070]">"Node", "React", "C++"</span>],</p>
                <p className="pl-4"><span className="text-[#00ff88]">"goal"</span>: <span className="text-[#f0a070]">"SDE Internship 2026"</span>,</p>
                <p className="pl-4"><span className="text-[#00ff88]">"leetcode"</span>: <span className="text-[#f0a070]">"10+ problems/day"</span>,</p>
                <p>{"}"}</p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  className="gradient-border p-4 text-center"
                >
                  <p className="text-2xl font-black text-[#00ff88] neon-green-text">
                    <Counter target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-[#666888] text-xs font-mono mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#666888] text-xs font-mono"
      >
        <span>scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#00ff88] to-transparent" />
      </motion.div>
    </section>
  )
}