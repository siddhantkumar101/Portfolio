import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from "react-icons/fa"
import { useState, useEffect } from "react"

// Simple mapping for GitHub language colors
const languageColors = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  "C++": "#f34b7d",
  C: "#555555",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  Various: "#3fb950" // Fallback green
}

function Projects() {
  // Show fallback immediately so cards render on page load (no blank state)
  // Backend fetch runs in the background to silently update star/fork counts
  const fallbackProjects = [
      {
        id: 1,
        title: "AutoCare Pro",
        desc: "The Professional Automotive Service Platform AutoCare Pro is a high-end, production-ready platform designed for vehicle maintenance and detailing management. It features a streamlined booking system and a professional dashboard for tracking service history.",
        tech: ["JavaScript", "React"],
        github: "https://github.com/siddhantkumar101/autocare-pro",
        live: "https://autocare-pro.vercel.app",
        image: "/assets/projects/autocare.png",
        stars: 0,
        forks: 0
      },
      {
        id: 2,
        title: "Gram Bazaar",
        desc: "The Local Community Marketplace Gram Bazaar is a robust, full-stack marketplace focused on local commerce and community-driven listings. It features secure JWT authentication, real-time product synchronization, and high-performance image management via Cloudinary.",
        tech: ["JavaScript", "Node.js"],
        github: "https://github.com/siddhantkumar101/gram-bazaar",
        live: "https://gram-bazaar.vercel.app",
        image: "/assets/projects/grambazaar.png",
        stars: 0,
        forks: 0
      },
      {
        id: 3,
        title: "Giftora Studio",
        desc: "The Premium Custom Gifting Experience Giftora is a luxury e-commerce platform that reimagines the gifting experience through its signature 'Studio' customizer. It features a mobile-first, high-performance UI built with a 'Zero-Transform' architecture.",
        tech: ["JavaScript", "React"],
        github: "https://github.com/siddhantkumar101/giftora",
        live: "https://giftora.vercel.app",
        image: "/assets/projects/giftora.png",
        stars: 0,
        forks: 0
      },
      {
        id: 4,
        title: "chattrix-chat-application",
        desc: "A secure, real-time messaging platform built with the MERN stack and Socket.io. Features JWT authentication, live presence indicators, and a responsive UI.",
        tech: ["JavaScript"],
        github: "https://github.com/siddhantkumar101/chattrix-chat-application",
        live: "https://chattrix-chat-application.vercel.app",
        image: "/assets/projects/chattrix.png",
        stars: 0,
        forks: 0
      },
      {
        id: 5,
        title: "armor_ai_financial_advising",
        desc: "An advanced AI-powered financial advising platform providing intelligent portfolio management, automated risk assessment, and personalized market insights.",
        tech: ["JavaScript", "Python"],
        github: "https://github.com/siddhantkumar101/armor_ai_financial_advising",
        live: "https://armor-ai-financial-advising-fon5.vercel.app/",
        image: "/assets/projects/armor.png",
        stars: 1,
        forks: 0
      }
    ]

  const [projects, setProjects] = useState(fallbackProjects) // Render immediately
  const [loading, setLoading] = useState(false)              // Never show loading skeleton


  useEffect(() => {
    // Fetch live repos from backend
    fetch("https://portfolio-za9x.onrender.com/api/projects")
      .then(res => {
        if (!res.ok) throw new Error("API failed")
        return res.json()
      })
      .then(data => {
        if (Array.isArray(data)) {
          // Manually inject the live link and descriptions for deployed projects
          const processedData = data.map(p => {
            let desc = p.desc;
            let live = p.live;
            let image = null;
            
            if (p.title.includes('chattrix')) {
              desc = "A secure, real-time messaging platform built with the MERN stack and Socket.io. Features JWT authentication, live presence indicators, and a responsive UI.";
              image = "/assets/projects/chattrix.png";
            } else if (p.title.includes('fishingattack')) {
              desc = "An educational cybersecurity demonstration platform designed to simulate phishing attacks and spread awareness about common social engineering vulnerabilities.";
              image = "/assets/projects/fishing.png";
            } else if (p.title.includes('timetable')) {
              desc = "An algorithmic scheduling system that automates the generation of conflict-free timetables for educational institutions, optimizing resource allocation.";
              image = "/assets/projects/timetable.png";
            } else if (p.title.toLowerCase().includes('armor_ai')) {
              live = "https://armor-ai-financial-advising-fon5.vercel.app/";
              desc = "An advanced AI-powered financial advising platform providing intelligent portfolio management, automated risk assessment, and personalized market insights.";
              image = "/assets/projects/armor.png";
            } else if (p.title.toLowerCase().includes('autocare')) {
              desc = "The Professional Automotive Service Platform AutoCare Pro is a high-end, production-ready platform designed for vehicle maintenance and detailing management. It features a streamlined booking system and a professional dashboard for tracking service history. The project emphasizes scalability and reliability, with a fully synchronized backend and optimized frontend architecture for high-traffic environments.";
              image = "/assets/projects/autocare.png";
              live = "https://autocare-pro.vercel.app";
            } else if (p.title.toLowerCase().includes('gram') || p.title.toLowerCase().includes('bazaar')) {
              desc = "The Local Community Marketplace Gram Bazaar is a robust, full-stack marketplace focused on local commerce and community-driven listings. It features secure JWT authentication, real-time product synchronization, and high-performance image management via Cloudinary. The platform is architected for seamless deployment across Vercel and Render, ensuring a stable cross-origin connection between the frontend and API.";
              image = "/assets/projects/grambazaar.png";
              live = "https://gram-bazaar.vercel.app";
            } else if (p.title.toLowerCase().includes('giftora')) {
              desc = "The Premium Custom Gifting Experience Giftora is a luxury e-commerce platform that reimagines the gifting experience through its signature \"Studio\" customizer. It features a mobile-first, high-performance UI built with a \"Zero-Transform\" architecture to ensure perfect stability across all devices. The site combines a high-impact aesthetic with advanced filtering and real-time gift design, creating a premium, boutique feel for high-end gifting.";
              image = "/assets/projects/giftora.png";
              live = "https://giftora.vercel.app";
            } else if (p.title.toLowerCase() === 'portfolio') {
              desc = "A stunning, dark-mode developer portfolio featuring dynamic GitHub repository fetching, modern animations, and a professional terminal-inspired aesthetic.";
              image = "/assets/projects/portfolio.png";
              // We'll force include the portfolio even if its live link matches the github link
              live = p.live || p.github;
            }
            
            return { ...p, live, image, desc: desc !== 'No description provided.' ? desc : p.desc }
          })
          
          // Filter deployed projects: live exists AND (live is not github link OR it is the portfolio/armor project)
          const deployedProjects = processedData.filter(p => 
            p.live && (
              p.live !== p.github || 
              ['portfolio', 'autocare', 'gram', 'bazaar', 'giftora', 'armor'].some(key => p.title.toLowerCase().includes(key))
            )
          )
          setProjects(deployedProjects)
        } else {
          setProjects(fallbackProjects)
        }
      })
      .catch(err => {
        console.error("Error fetching projects:", err)
        setProjects(fallbackProjects) // Use fallback on error
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0d1117] text-[#c9d1d9] px-6 md:px-8 py-28 border-t border-[#30363d]"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-sm text-[#8b949e] font-mono mb-4">
          // 02. Deployed Projects
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Selected Work
        </motion.h2>

        {loading ? (
          <div className="grid md:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 animate-pulse h-64">
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 md:p-8 hover:border-[#3fb950] transition group flex flex-col justify-between"
              >
                <div>
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover rounded-lg mb-6 border border-[#30363d]" 
                    />
                  )}
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-[#c9d1d9] group-hover:text-[#3fb950] transition break-words overflow-wrap-anywhere">
                      {project.title}
                    </h3>
                    <div className="flex gap-4 shrink-0">
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-[#8b949e] hover:text-[#3fb950] transition">
                        <FaGithub size={22} />
                      </a>
                      <a href={project.live} target="_blank" rel="noreferrer" className="text-[#8b949e] hover:text-[#3fb950] transition">
                        <FaExternalLinkAlt size={20} />
                      </a>
                    </div>
                  </div>

                  <p className="text-[#8b949e] mb-6 line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                <div>
                  {/* GitHub Stats */}
                  <div className="flex items-center gap-6 text-[#8b949e] text-sm font-mono mb-4">
                    <span className="flex items-center gap-1">
                      <FaStar className="text-[#e3b341]" /> {project.stars || 0}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCodeBranch /> {project.forks || 0}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#0d1117] border border-[#30363d] rounded-md text-xs font-mono text-[#8b949e] flex items-center gap-2"
                      >
                        <span 
                          className="w-2 h-2 rounded-full" 
                          style={{ backgroundColor: languageColors[tech] || '#8b949e' }}
                        ></span>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default Projects