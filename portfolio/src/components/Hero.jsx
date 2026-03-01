import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

function Hero() {
  return (
    <section className="relative min-h-screen 
      bg-white dark:bg-[#070d1a] 
      text-black dark:text-white 
      overflow-hidden transition-colors duration-300">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] 
        bg-purple-600/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] 
        bg-blue-600/20 blur-[140px] rounded-full"></div>

      {/* Gradient Overlay FIXED */}
      <div className="absolute inset-0 bg-gradient-to-b 
        from-transparent 
        via-gray-100 dark:via-[#0b1120] 
        to-white dark:to-[#070d1a]">
      </div>

      <div className="relative max-w-7xl mx-auto px-8 
        flex flex-col md:flex-row items-center justify-between min-h-screen">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 space-y-8 z-10"
        >

          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full 
            bg-purple-600/20 border border-purple-500/30 
            text-sm text-purple-600 dark:text-purple-300">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Available for internships · 2026
          </div>

          <p className="text-gray-600 dark:text-gray-400">
            Hey there, I'm
          </p>

          <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight leading-[1.05]">
            <span className="bg-gradient-to-r 
              from-purple-400 via-blue-400 to-indigo-500 
              bg-clip-text text-transparent">
              Siddhant
            </span>
            <br />
            <span className="text-black dark:text-white">
              Kumar
            </span>
          </h1>

          <TypeAnimation
            sequence={[
              "Problem Solver",
              2000,
              "React Developer",
              2000,
              "DSA Enthusiast",
              2000
            ]}
            speed={50}
            repeat={Infinity}
            className="text-purple-600 dark:text-purple-400 text-xl"
          />

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-lg">
            Passionate about building scalable web applications and mastering Data Structures & Algorithms.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="px-7 py-3 
              bg-gradient-to-r from-purple-600 to-blue-600 
              text-white rounded-lg shadow-lg 
              hover:scale-105 transition">
              View Projects
            </button>

            <button
              onClick={() => window.open("/resume.pdf")}
              className="px-7 py-3 
                border border-gray-400 dark:border-gray-600 
                rounded-lg 
                hover:bg-gray-200 dark:hover:bg-gray-800 
                transition">
              Download CV
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-6">
            {[{
              icon: <FaGithub />,
              link: "https://github.com/siddhantkumar101"
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/siddhant-kumar-dev"
            },
            {
              icon: <FaEnvelope />,
              link: "mailto:kumarsiddhant815@gmail.com"
            },
            {
              icon: <SiLeetcode />,
              link: "https://leetcode.com/u/siddhant080306/"
            }].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center 
                  rounded-xl 
                  bg-black/5 dark:bg-white/5 
                  backdrop-blur-lg 
                  border border-gray-300 dark:border-white/10 
                  hover:bg-black/10 dark:hover:bg-white/10
                  transition hover:scale-110"
              >
                {item.icon}
              </a>
            ))}
          </div>

        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center mt-16 md:mt-0 relative z-10"
        >

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl 
              bg-gradient-to-tr from-purple-500/40 to-blue-500/40 
              blur-2xl">
            </div>

            <img
              src="/yourphoto.jpg"
              alt="profile"
              className="relative w-80 md:w-96 rounded-3xl 
                border border-gray-300 dark:border-white/10 
                shadow-2xl"
            />
          </motion.div>

          {/* LeetCode Floating Card FIXED */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -left-16 top-10 
              bg-gray-200/70 dark:bg-[#111827]/70 
              backdrop-blur-lg 
              px-4 py-2 rounded-xl 
              border border-gray-300 dark:border-white/10"
          >
            <p className="text-xs text-gray-600 dark:text-gray-400">
              LeetCode
            </p>
            <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              siddhant080306
            </p>
          </motion.div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 
        text-gray-600 dark:text-gray-400 text-sm animate-bounce">
        Scroll ↓
      </div>

    </section>
  )
}

export default Hero