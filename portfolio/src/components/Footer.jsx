import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import { motion } from "framer-motion"

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#070d1a] text-white px-6 md:px-8 py-16 relative overflow-hidden border-t border-white/10">

      {/* Subtle Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">

        {/* Tagline */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold mb-8 
          bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 
          bg-clip-text text-transparent"
        >
          Let’s build something great together 🚀
        </motion.h3>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8 text-xl">

          <a
            href="https://github.com/siddhantkumar101"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white/5 border border-white/10 rounded-full 
            hover:bg-purple-600/20 hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/siddhant-kumar-dev"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white/5 border border-white/10 rounded-full 
            hover:bg-blue-600/20 hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:kumarsiddhant815@gmail.com"
            className="p-3 bg-white/5 border border-white/10 rounded-full 
            hover:bg-purple-600/20 hover:scale-110 transition"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://leetcode.com/u/siddhant080306/"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white/5 border border-white/10 rounded-full 
            hover:bg-yellow-500/20 hover:scale-110 transition"
          >
            <SiLeetcode />
          </a>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} Siddhant Kumar. Built with React & Tailwind.
          </p>

        </div>

        {/* Back To Top */}
        <button
          onClick={scrollToTop}
          className="mt-6 text-sm text-purple-400 hover:text-white transition"
        >
          ↑ Back to Top
        </button>

      </div>

    </footer>
  )
}

export default Footer