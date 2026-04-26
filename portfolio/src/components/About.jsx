import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
})

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }

const skills = [
  "C++ (STL)", "Data Structures", "Algorithms", "Competitive Programming",
  "Node.js", "Express.js", "React.js", "MongoDB", "REST APIs",
  "JWT Auth", "Socket.io", "Git & GitHub", "Linux", "System Design",
  "DBMS", "OS Concepts", "OOP", "Python",
]

const education = [
  { year: "2024 – 2028", title: "B.Tech Computer Science", place: "IIIT Dharwad", grade: "9.05 CGPA" },
  { year: "2022 – 2024", title: "Class XII (CBSE)", place: "Ryan International School", grade: "90.6%" },
  { year: "2020 – 2022", title: "Class X (CBSE)", place: "Ryan International School", grade: "93.2%" },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="section-padding bg-[#0a0a0f] relative">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-[#7928ca] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-mono text-xs text-[#00ff88] tracking-[0.3em] uppercase mb-4"
        >
          // 01. about
        </motion.p>

        <motion.h2
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-4xl md:text-5xl font-black mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT — Code Editor */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="gradient-border overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-[#666888]">SiddhantProfile.js</span>
              </div>
              {/* Code body */}
              <div className="p-5 font-mono text-xs md:text-sm leading-relaxed">
                <div className="flex gap-4">
                  {/* Line numbers */}
                  <div className="text-[#666888] select-none space-y-1 text-right min-w-[1.5rem]">
                    {Array.from({ length: 12 }, (_, i) => <p key={i}>{i + 1}</p>)}
                  </div>
                  {/* Code */}
                  <div className="flex-1 space-y-1">
                    <p><span className="text-[#7928ca]">const</span> <span className="text-[#00d4ff]">siddhant</span> = {"{"}</p>
                    <p className="pl-4"><span className="text-[#00ff88]">role</span>: <span className="text-[#f0a070]">"B.Tech CSE"</span>,</p>
                    <p className="pl-4"><span className="text-[#00ff88]">college</span>: <span className="text-[#f0a070]">"IIIT Dharwad"</span>,</p>
                    <p className="pl-4"><span className="text-[#00ff88]">cgpa</span>: <span className="text-[#79c0ff]">9.05</span>,</p>
                    <p className="pl-4"><span className="text-[#00ff88]">focus</span>: [</p>
                    <p className="pl-8"><span className="text-[#f0a070]">"DSA"</span>, <span className="text-[#f0a070]">"Backend"</span>,</p>
                    <p className="pl-8"><span className="text-[#f0a070]">"System Design"</span></p>
                    <p className="pl-4">],</p>
                    <p className="pl-4"><span className="text-[#00ff88]">leetcode</span>: <span className="text-[#f0a070]">"10+ / day"</span>,</p>
                    <p className="pl-4"><span className="text-[#00ff88]">goal</span>: <span className="text-[#f0a070]">"SDE Intern 2026"</span>,</p>
                    <p>{"}"}<span className="terminal-cursor" /></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skill pills */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-wrap gap-2 mt-6"
            >
              {skills.map((s, i) => (
                <motion.span
                  key={i}
                  variants={fadeUp(i * 0.03)}
                  className="px-3 py-1.5 rounded-full font-mono text-xs text-[#666888] border border-white/10 hover:border-[#00ff88]/40 hover:text-[#00ff88] transition-all duration-300 cursor-default"
                >
                  {s}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Education Timeline */}
          <div className="relative">
            {/* Vertical glow line */}
            <div className="absolute left-[7px] top-4 bottom-0 w-[1px] bg-gradient-to-b from-[#00ff88] via-[#7928ca] to-transparent opacity-30" />

            {education.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp(0.3 + i * 0.15)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="relative pl-10 pb-10 last:pb-0"
              >
                {/* Dot */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], boxShadow: ["0 0 0 0 rgba(0,255,136,0.4)", "0 0 0 8px rgba(0,255,136,0)", "0 0 0 0 rgba(0,255,136,0)"] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
                  className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#0a0a0f] border-2 border-[#00ff88] z-10"
                />

                <p className="font-mono text-xs text-[#00ff88] mb-2 tracking-widest">{item.year}</p>
                <div className="gradient-border p-5 hover:scale-[1.02] transition-transform duration-300">
                  <h4 className="font-bold text-[#f0f0f0] mb-1">{item.title}</h4>
                  <p className="text-[#666888] text-sm mb-3">{item.place}</p>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold text-black bg-[#00ff88]">
                    {item.grade}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}