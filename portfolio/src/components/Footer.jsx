import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

const socials = [
  { icon: <FaGithub />, link: "https://github.com/siddhantkumar101" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/siddhant-kumar-dev" },
  { icon: <FaEnvelope />, link: "mailto:kumarsiddhant815@gmail.com" },
  { icon: <SiLeetcode />, link: "https://leetcode.com/u/siddhant080306/" },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/[0.04] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <p className="font-mono text-xs text-[#666888]">
          <span className="text-[#00ff88]">$</span> siddhant.dev <span className="opacity-40 mx-2">/</span>
          © {new Date().getFullYear()} Siddhant Kumar. All rights reserved.
        </p>

        <div className="flex gap-4">
          {socials.map((s, i) => (
            <a key={i} href={s.link} target="_blank" rel="noreferrer" data-hover
              className="text-[#666888] hover:text-[#00ff88] transition-colors duration-300 text-base">
              {s.icon}
            </a>
          ))}
        </div>

        <p className="font-mono text-[10px] text-[#666888]">
          Built with <span className="text-[#00d4ff]">React</span> + <span className="text-[#7928ca]">Framer Motion</span>
        </p>

      </div>
    </footer>
  )
}