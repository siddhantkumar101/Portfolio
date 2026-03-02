import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import { motion } from "framer-motion"

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#0d1117] text-[#c9d1d9] px-6 md:px-8 py-16 border-t border-[#30363d]">

      <div className="max-w-6xl mx-auto text-center">

        {/* Terminal Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-mono text-sm mb-10"
        >
          <span className="text-[#3fb950]">$</span>{" "}
          echo "Let’s build something meaningful."
        </motion.div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-10 text-lg">

          <a
            href="https://github.com/siddhantkumar101"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-[#161b22] border border-[#30363d] rounded-md hover:border-[#3fb950] transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/siddhant-kumar-dev"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-[#161b22] border border-[#30363d] rounded-md hover:border-[#3fb950] transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:kumarsiddhant815@gmail.com"
            className="p-3 bg-[#161b22] border border-[#30363d] rounded-md hover:border-[#3fb950] transition"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://leetcode.com/u/siddhant080306/"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-[#161b22] border border-[#30363d] rounded-md hover:border-[#3fb950] transition"
          >
            <SiLeetcode />
          </a>

        </div>

        {/* Divider */}
        <div className="border-t border-[#30363d] pt-6 text-sm text-[#8b949e] font-mono">

          <p>
            © {new Date().getFullYear()} Siddhant Kumar
          </p>

          <p className="mt-2">
            Built with React + Tailwind CSS
          </p>

        </div>

        {/* Back To Top */}
        <button
          onClick={scrollToTop}
          className="mt-6 text-sm font-mono text-[#3fb950] hover:underline transition"
        >
          ↑ backToTop()
        </button>

      </div>

    </footer>
  )
}

export default Footer