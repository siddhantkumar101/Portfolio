import { motion } from "framer-motion"

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "C", "JavaScript", "Python", "HTML/CSS"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "Bootstrap", "EJS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"]
    },
    {
      title: "Database & Tools",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Git & GitHub", "Linux"]
    }
  ]

  return (
    <section
      id="skills"
      className="bg-[#0d1117] text-[#c9d1d9] px-6 md:px-8 py-28 border-t border-[#30363d]"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-sm text-[#8b949e] font-mono mb-4">
          // 03. Technical Arsenal
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 hover:border-[#3fb950] transition"
            >
              <h3 className="text-2xl font-bold text-[#c9d1d9] mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#0d1117] border border-[#30363d] rounded-md font-mono text-sm text-[#8b949e] hover:text-[#3fb950] hover:border-[#3fb950] transition cursor-default"
                  >
                    {skill}
                  </span>
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