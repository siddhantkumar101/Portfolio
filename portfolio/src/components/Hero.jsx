import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

function Hero() {
  return (
    <section className="min-h-screen bg-[#0d1117] text-[#c9d1d9] px-6 md:px-8 flex items-center">

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Terminal Intro */}
          <p className="font-mono text-sm text-[#8b949e] mb-4">
            $ whoami
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Siddhant Kumar
          </h1>

          <p className="font-mono text-[#3fb950] mb-6">
            B.Tech CSE Student @ IIIT Dharwad
          </p>

          <div className="font-mono text-sm text-[#8b949e] mb-8">
{`const focus = [
  "Data Structures & Algorithms",
  "Competitive Programming",
  "Full Stack Development"
];`}
          </div>

          <p className="text-[#8b949e] max-w-lg mb-10">
            Building scalable web applications while consistently improving
            problem-solving skills and system design fundamentals.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-10">
            <button
              onClick={() => window.open("/resume.pdf")}
              className="px-6 py-3 border border-[#3fb950] text-[#3fb950] rounded-md hover:bg-[#3fb950] hover:text-black transition"
            >
              resume.pdf
            </button>

            <a
              href="#contact"
              className="px-6 py-3 border border-[#30363d] rounded-md hover:border-[#3fb950] transition"
            >
              contact()
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 text-lg">
            {[
              { icon: <FaGithub />, link: "https://github.com/siddhantkumar101" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/siddhant-kumar-dev" },
              { icon: <FaEnvelope />, link: "mailto:kumarsiddhant815@gmail.com" },
              { icon: <SiLeetcode />, link: "https://leetcode.com/u/siddhant080306/" }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#161b22] border border-[#30363d] rounded-md hover:border-[#3fb950] transition"
              >
                {item.icon}
              </a>
            ))}
          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 font-mono text-sm w-full max-w-md">

            <p className="text-[#8b949e] mb-4">
              // stats.json
            </p>

<pre className="whitespace-pre-wrap">
{`{
  "cgpa": "9.05",
  "leetcodeTarget": "10/day",
  "primaryLanguage": "C++",
  "currentFocus": "Internship 2026",
  "location": "India"
}`}
</pre>

          </div>
        </motion.div>

      </div>

    </section>
  )
}

export default Hero