import { motion } from "framer-motion"
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa"
import { SiC, SiCplusplus, SiJavascript, SiPython, SiMysql, SiPostgresql, SiMongodb, SiFedora } from "react-icons/si"

function Skills() {

  const categories = [
    {
      title: "Programming Languages",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "C", icon: <SiC /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Python", icon: <SiPython /> },
      ]
    },
    {
      title: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
      ]
    },
    {
      title: "Databases",
      color: "from-green-400 to-emerald-600",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
      ]
    },
    {
      title: "Currently Learning 🚀",
      color: "from-yellow-400 to-orange-500",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Fedora Linux", icon: <SiFedora /> },
        { name: "System Design Basics", icon: "⚙️" },
        { name: "REST APIs", icon: "🔗" },
        { name: "Authentication & JWT", icon: "🔐" },
      ]
    }
  ]

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#070d1a] text-white px-6 md:px-8 py-28 relative overflow-hidden"
    >

      {/* Subtle Background Glow */}
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <p className="text-center text-purple-400 text-sm tracking-widest mb-4">
          03. SKILLS
        </p>

        <h2 className="text-center text-4xl md:text-5xl font-bold mb-20 
        bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 
        bg-clip-text text-transparent">
          Technical Expertise
        </h2>

        <div className="space-y-16">

          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              {/* Category Title */}
              <h3 className={`text-2xl font-semibold mb-8 
              bg-gradient-to-r ${category.color} 
              bg-clip-text text-transparent`}>
                {category.title}
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6 }}
                    className="flex flex-col items-center justify-center 
                    bg-white/5 border border-white/10 
                    rounded-xl p-6 backdrop-blur-lg 
                    hover:border-purple-500/40 transition duration-300"
                  >
                    <div className="text-3xl mb-3 text-purple-400">
                      {skill.icon}
                    </div>
                    <p className="text-sm text-gray-300 text-center">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills