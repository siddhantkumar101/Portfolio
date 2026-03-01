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
    tech: ["React", "Tailwind", "JS"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Evento",
    image: evento,
    desc: "Event management frontend with interactive UI.",
    tech: ["React", "CSS"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Currency Converter",
    image: currencyconvertor,
    desc: "Real-time currency converter using API.",
    tech: ["JS", "API"],
    github: "#",
    live: "https://react-basic-7ygb.vercel.app/",
    featured: true,
  },
  {
    title: "Todo App",
    image: todo,
    desc: "Task manager with local storage.",
    tech: ["React"],
    github: "#",
    live: "https://react-basic-phi-roan.vercel.app/",
    featured: true,
  },
]
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#070d1a] text-white px-6 md:px-8 py-24 relative overflow-hidden"
    >

      {/* Subtle Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-5xl mx-auto relative z-10">

        <p className="text-center text-purple-400 text-sm tracking-widest mb-4">
          02. PROJECTS
        </p>

        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 
        bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 
        bg-clip-text text-transparent">
          Selected Work
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group bg-white/5 border border-white/10 
              rounded-xl overflow-hidden backdrop-blur-lg 
              hover:border-purple-500/40 transition duration-300"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover 
                  group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5">

                {project.featured && (
                  <span className="text-[10px] px-2 py-1 
                  bg-gradient-to-r from-purple-500/30 to-blue-500/30 
                  text-purple-300 rounded-full">
                    Featured
                  </span>
                )}

                <h3 className="text-lg font-semibold mt-3 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-xs mb-4">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-[10px] rounded-md 
                      bg-purple-600/15 text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-5 text-xs">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-purple-400 hover:text-white transition"
                  >
                    <FaGithub size={14} />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-cyan-400 hover:text-white transition"
                  >
                    <FaExternalLinkAlt size={12} />
                    Live
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