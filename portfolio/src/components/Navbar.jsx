import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { FaSun, FaMoon } from "react-icons/fa"
import { useTheme } from "../context/ThemeContext"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { darkMode, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    "About",
    "Projects",
    "Skills",
    "Game",
    "Achievements",
    "Contact"
  ]

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${
        scrolled
          ? "bg-white/70 dark:bg-[#0b1120]/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-lg font-semibold tracking-wide text-gray-800 dark:text-white cursor-pointer">
          Siddhant.dev
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-gray-600 dark:text-gray-300 text-sm">

          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group hover:text-black dark:hover:text-white transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-white/10 hover:scale-110 transition"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-gray-700" />
          )}
        </button>

      </div>
    </motion.nav>
  )
}

export default Navbar