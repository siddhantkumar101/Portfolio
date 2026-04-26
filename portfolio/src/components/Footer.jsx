import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-[#30363d] py-8 text-center text-[#8b949e] font-mono text-sm">
      <div className="flex justify-center gap-6 mb-4 text-lg">
        <a href="https://github.com/siddhantkumar101" target="_blank" rel="noreferrer" className="hover:text-[#3fb950] transition">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/siddhant-kumar-dev" target="_blank" rel="noreferrer" className="hover:text-[#3fb950] transition">
          <FaLinkedin />
        </a>
        <a href="mailto:kumarsiddhant815@gmail.com" className="hover:text-[#3fb950] transition">
          <FaEnvelope />
        </a>
      </div>

      <p className="flex items-center justify-center gap-2">
        © {new Date().getFullYear()} Siddhant Kumar. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer