import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { FaArrowUp } from "react-icons/fa"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./index.css"

// ── Boot Loader ──────────────────────────────────────────────────────────────
function BootLoader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [lines, setLines] = useState([])
  const bootLines = [
    "> Initializing neural interface...",
    "> Loading portfolio modules...",
    "> Fetching GitHub repositories...",
    "> Compiling assets...",
    "> All systems nominal.",
  ]

  useEffect(() => {
    let lineIdx = 0
    const lineTimer = setInterval(() => {
      if (lineIdx < bootLines.length) {
        setLines(prev => [...prev, bootLines[lineIdx]])
        lineIdx++
      } else {
        clearInterval(lineTimer)
      }
    }, 300)

    const progTimer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(progTimer); setTimeout(onDone, 300); return 100 }
        return Math.min(p + 2, 100)
      })
    }, 30)

    return () => { clearInterval(lineTimer); clearInterval(progTimer) }
  }, [])

  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[99999] bg-[#0a0a0f] flex flex-col items-center justify-center font-mono"
    >
      <div className="w-full max-w-lg px-8">
        <p className="text-[#00ff88] text-xs mb-6 neon-green-text">SIDDHANT.DEV — PORTFOLIO v2.0</p>
        <div className="space-y-2 mb-8 text-xs text-[#666888] min-h-[120px]">
          {lines.map((line, i) => (
            <motion.p key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-[#00ff88]">$</span> {line}
            </motion.p>
          ))}
        </div>
        <div className="w-full bg-[#111118] rounded-full h-1 mb-3">
          <div
            className="boot-bar h-1 rounded-full"
            style={{ background: "linear-gradient(90deg, #00ff88, #00d4ff, #7928ca)", width: `${progress}%`, transition: "width 0.03s linear" }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-[#666888]">
          <span>Loading...</span>
          <span className="text-[#00ff88]">{progress}%</span>
        </div>
      </div>
    </motion.div>
  )
}

// ── Custom Cursor ─────────────────────────────────────────────────────────────
function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const move = (e) => {
      const { clientX: x, clientY: y } = e
      if (dot.current) {
        dot.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${x - 18}px, ${y - 18}px)`
      }
    }
    const over = (e) => { if (e.target.closest('a, button, [data-hover]')) setHovered(true) }
    const out  = () => setHovered(false)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [])

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className={`cursor-ring ${hovered ? 'hovered' : ''}`} />
    </>
  )
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [booted, setBooted] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <CustomCursor />

      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Boot Loader */}
      <AnimatePresence>
        {!booted && <BootLoader key="boot" onDone={() => setBooted(true)} />}
      </AnimatePresence>

      {/* Main Site */}
      <AnimatePresence>
        {booted && (
          <motion.div
            key="site"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-[#0a0a0f] text-[#f0f0f0] relative overflow-x-hidden"
          >
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />

            {/* Back to Top */}
            <AnimatePresence>
              {showTop && (
                <motion.button
                  key="btt"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="back-to-top"
                >
                  <FaArrowUp size={16} />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}