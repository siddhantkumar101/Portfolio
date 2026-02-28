import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#070d1a] text-white px-6 md:px-8 py-28 relative overflow-hidden"
    >
      {/* Background Glow Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-600/20 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Top Label */}
        <p className="text-center text-purple-400 text-sm tracking-widest mb-4">
          01. ABOUT 🚀
        </p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-5xl md:text-6xl font-extrabold mb-20 
          bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 
          bg-clip-text text-transparent"
        >
          Who I Am
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE */}
          <div>

            {/* Story Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 
              border border-purple-500/20 rounded-2xl p-7 
              backdrop-blur-xl mb-16 hover:scale-[1.02] transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-300">
                👨‍💻 My Journey
              </h3>

              <p className="text-gray-300 leading-relaxed text-[15px] mb-4">
                I’m Siddhant, a Computer Science student focused on mastering
                DSA and building modern web systems.
              </p>

              <p className="text-gray-400 leading-relaxed text-[15px]">
                Preparing for internships, sharpening problem-solving skills,
                and learning system design fundamentals ⚡
              </p>
            </motion.div>

            {/* Education */}
            <h3 className="text-xl font-semibold mb-8 text-cyan-400">
              🎓 Education
            </h3>

            <div className="relative border-l-2 border-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 ml-4">

              {[
                {
                  year: "2023 – 2027",
                  title: "B.Tech in Computer Science",
                  desc: "IIIT Dharwad",
                  color: "from-purple-500 to-blue-500"
                },
                {
                  year: "2021 – 2023",
                  title: "Class XII (CBSE)",
                  desc: "Senior Secondary",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  year: "2019 – 2021",
                  title: "Class X (CBSE)",
                  desc: "Secondary",
                  color: "from-cyan-500 to-purple-500"
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="mb-14 relative pl-8"
                >
                  {/* Gradient Dot */}
                  <div className={`absolute -left-[11px] top-2 w-5 h-5 rounded-full 
                  bg-gradient-to-r ${item.color} shadow-lg`}></div>

                  <p className="text-sm text-purple-300 mb-1">
                    {item.year}
                  </p>

                  <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:scale-[1.03] transition">
                    <h4 className="font-semibold text-lg">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <h3 className="text-xl font-semibold mb-8 text-pink-400">
              💡 Core Skills
            </h3>

            {[
              { name: "DSA", percent: 85, color: "from-purple-500 to-pink-500" },
              { name: "React / Next.js", percent: 80, color: "from-blue-500 to-cyan-500" },
              { name: "C++ / CP", percent: 88, color: "from-indigo-500 to-purple-500" },
              { name: "Node.js", percent: 75, color: "from-green-400 to-emerald-600" },
              { name: "System Design", percent: 65, color: "from-yellow-400 to-orange-500" },
            ].map((skill, index) => (
              <div key={index} className="mb-8">

                <div className="flex justify-between mb-2 text-sm">
                  <span>{skill.name}</span>
                  <span className="text-gray-300">
                    {skill.percent}%
                  </span>
                </div>

                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>

              </div>
            ))}

            {/* Tech Stack */}
            <h3 className="text-xl font-semibold mt-16 mb-6 text-yellow-400">
              🛠 Tech Stack
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "React ⚛️",
                "Next.js",
                "TypeScript",
                "C++",
                "Python 🐍",
                "Node.js",
                "MongoDB",
                "PostgreSQL",
                "Docker 🐳",
                "Git",
                "Tailwind",
                "Redis"
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  whileHover={{ y: -6 }}
                  className="px-4 py-2 text-sm rounded-full 
                  bg-gradient-to-r from-purple-600/20 to-blue-600/20 
                  border border-white/10 hover:from-purple-600/40 hover:to-blue-600/40 
                  transition cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About