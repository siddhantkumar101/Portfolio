import { motion } from "framer-motion"
import { useState, useEffect } from "react"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    "about",
    "projects",
    "skills",
    "contact"
  ]

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled
          ? "bg-[#0d1117] border-b border-[#30363d]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo - Terminal Style */}
        <a
          href="#"
          className="font-mono text-sm text-[#3fb950]"
        >
          $ siddhant.dev
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-mono text-sm text-[#8b949e]">

          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:text-[#3fb950] transition"
            >
              {item}()
            </a>
          ))}

        </div>

      </div>
    </motion.nav>
  )
}

export default Navbar