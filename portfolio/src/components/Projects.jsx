import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import currencyconvertor from "../assets/currencyconvertor.png"
import evento from "../assets/evento.png"
import megablog from "../assets/megablog.png"
import todo from "../assets/todo.png"

function Projects() {

  const projects = [
    {
      title: "MegaBlog",
      image: megablog,
      desc: "Modern blogging platform with responsive UI.",
      tech: ["React", "Tailwind", "JavaScript"],
      github: "#",
      live: "#",
    },
    {
      title: "Evento",
      image: evento,
      desc: "Event management frontend with interactive UI.",
      tech: ["React", "CSS"],
      github: "#",
      live: "#",
    },
    {
      title: "Currency Converter",
      image: currencyconvertor,
      desc: "Real-time currency converter using external API.",
      tech: ["JavaScript", "API"],
      github: "#",
      live: "https://react-basic-7ygb.vercel.app/",
    },
    {
      title: "Todo App",
      image: todo,
      desc: "Task manager with persistent local storage.",
      tech: ["React"],
      github: "#",
      live: "https://react-basic-phi-roan.vercel.app/",
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0d1117] text-[#c9d1d9] px-6 md:px-8 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <p className="text-sm font-mono text-[#8b949e] mb-4">
          // 02. Projects
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Selected Work
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#3fb950] transition"
            >

              {/* Image */}
              <div className="border-b border-[#30363d]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover"
                />
              </div>

              <div className="p-6">

                {/* Project Title */}
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#8b949e] text-sm mb-4">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="font-mono text-xs text-[#3fb950] mb-6">
                  {`stack: [${project.tech.map(t => `"${t}"`).join(", ")}]`}
                </div>

                {/* Links */}
                <div className="flex gap-6 text-sm font-mono">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#3fb950] transition"
                  >
                    <FaGithub size={14} />
                    code()
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#3fb950] transition"
                  >
                    <FaExternalLinkAlt size={12} />
                    live()
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects