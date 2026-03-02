import { motion } from "framer-motion"
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa"
import { SiC, SiCplusplus, SiJavascript, SiPython, SiMysql, SiPostgresql, SiMongodb, SiFedora } from "react-icons/si"

function Skills() {

  const categories = [
    {
      title: "programmingLanguages",
      skills: [
        { name: "C", icon: <SiC /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Python", icon: <SiPython /> },
      ]
    },
    {
      title: "frontendDevelopment",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
      ]
    },
    {
      title: "databases",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
      ]
    },
    {
      title: "currentlyLearning",
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
      className="min-h-screen bg-[#0d1117] text-[#c9d1d9] px-6 md:px-8 py-28"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <p className="text-sm font-mono text-[#8b949e] mb-4">
          // 03. Skills
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-20">
          Technical Stack
        </h2>

        <div className="space-y-16">

          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              {/* Category Header */}
              <div className="font-mono text-sm text-[#8b949e] mb-6">
                {`const ${category.title} = [`}
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center justify-center 
                    bg-[#161b22] border border-[#30363d] 
                    rounded-lg p-6 hover:border-[#3fb950] transition"
                  >
                    <div className="text-3xl mb-3 text-[#3fb950]">
                      {skill.icon}
                    </div>

                    <p className="text-sm font-mono text-[#c9d1d9] text-center">
                      "{skill.name}"
                    </p>
                  </motion.div>
                ))}

              </div>

              <div className="font-mono text-sm text-[#8b949e] mt-6">
                ];
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills