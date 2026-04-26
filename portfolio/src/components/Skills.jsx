import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
})

const skillCategories = [
  {
    title: "Languages",
    color: "#00ff88",
    skills: [
      { name: "C++", level: 90, note: "Primary language. STL, competitive programming." },
      { name: "JavaScript", level: 85, note: "ES6+, async/await, DOM manipulation." },
      { name: "Python", level: 75, note: "ML, scripting, automation." },
      { name: "HTML/CSS", level: 80, note: "Semantic HTML5, responsive layouts." },
    ],
  },
  {
    title: "Frontend",
    color: "#00d4ff",
    skills: [
      { name: "React.js", level: 85, note: "Hooks, Context, Framer Motion." },
      { name: "TailwindCSS", level: 88, note: "Utility-first, custom design systems." },
      { name: "Framer Motion", level: 75, note: "Advanced animations and transitions." },
      { name: "Bootstrap / EJS", level: 70, note: "Legacy templating and styling." },
    ],
  },
  {
    title: "Backend",
    color: "#7928ca",
    skills: [
      { name: "Node.js", level: 85, note: "Server-side JS, event loop, streams." },
      { name: "Express.js", level: 88, note: "REST APIs, middleware, routing." },
      { name: "Socket.io", level: 78, note: "Real-time bidirectional communication." },
      { name: "JWT Auth", level: 82, note: "Stateless auth, secure sessions." },
    ],
  },
  {
    title: "Database & Tools",
    color: "#f0a070",
    skills: [
      { name: "MongoDB", level: 82, note: "Document DB, aggregation pipeline." },
      { name: "MySQL / PostgreSQL", level: 70, note: "Relational DB, joins, indexing." },
      { name: "Git & GitHub", level: 88, note: "Version control, branching strategies." },
      { name: "Linux / Shell", level: 72, note: "CLI, bash scripting, process management." },
    ],
  },
]

function SkillBar({ name, level, note, color, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="flip-card h-20">
      <div className="flip-card-inner w-full h-full relative">
        {/* Front */}
        <div className="flip-card-front absolute inset-0 flex flex-col justify-center gap-2 px-4">
          <div className="flex justify-between items-center font-mono text-xs">
            <span className="text-[#f0f0f0]">{name}</span>
            <span style={{ color }}>{level}%</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            {inView && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${level}%` }}
                transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${color}, ${color}88)`, boxShadow: `0 0 8px ${color}55` }}
              />
            )}
          </div>
        </div>
        {/* Back */}
        <div
          className="flip-card-back absolute inset-0 flex items-center px-4 rounded-xl"
          style={{ background: `${color}12`, border: `1px solid ${color}30` }}
        >
          <p className="font-mono text-xs text-[#f0f0f0] leading-relaxed">{note}</p>
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={ref} className="section-padding bg-[#0a0a0f] relative border-t border-white/[0.04]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mesh-blob w-80 h-80 bg-[#00ff88] opacity-[0.03] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp(0)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="font-mono text-xs text-[#00ff88] tracking-[0.3em] uppercase mb-4"
        >
          // 03. skills
        </motion.p>
        <motion.h2
          variants={fadeUp(0.1)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="text-4xl md:text-5xl font-black mb-4"
        >
          Technical Arsenal
        </motion.h2>
        <motion.p
          variants={fadeUp(0.15)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="text-[#666888] font-mono text-xs mb-14"
        >
          Hover each skill to see proficiency details
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              variants={fadeUp(0.2 + ci * 0.1)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="gradient-border p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
                <h3 className="font-bold text-[#f0f0f0]">{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={si}
                    {...skill}
                    color={cat.color}
                    index={si}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}