import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

const navItems = ["about", "projects", "skills", "contact"]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)

      // Scrollspy
      const offsets = navItems.map(id => {
        const el = document.getElementById(id)
        return el ? { id, top: el.getBoundingClientRect().top } : null
      }).filter(Boolean)

      const inView = offsets.filter(o => o.top <= 120)
      if (inView.length) setActive(inView[inView.length - 1].id)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-[9000] transition-all duration-500 ${
          scrolled ? "glass border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">

          {/* Logo */}
          <a href="#" className="font-mono text-sm text-[#00ff88] neon-green-text tracking-wider hover:opacity-80 transition">
            $ siddhant.dev
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 font-mono text-sm text-[#666888]">
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item}`}
                className={`relative py-1 transition-colors duration-200 hover:text-[#00ff88] ${
                  active === item ? "text-[#00ff88]" : ""
                }`}
              >
                {item}()
                {active === item && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#00ff88] rounded-full"
                    style={{ boxShadow: "0 0 6px #00ff88" }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#666888] hover:text-[#00ff88] transition"
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glass border-t border-white/5 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4 font-mono text-sm text-[#666888]">
                {navItems.map(item => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setOpen(false)}
                    className="hover:text-[#00ff88] transition py-2 border-b border-white/5 last:border-0"
                  >
                    <span className="text-[#00ff88]">./</span>{item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}