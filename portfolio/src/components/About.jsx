import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0d1117] text-[#c9d1d9] px-6 md:px-8 py-28"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <p className="text-sm text-[#8b949e] font-mono mb-4">
          // 01. About
        </p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE - CODE PROFILE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 font-mono text-sm shadow-lg"
          >
            <div className="text-[#8b949e] mb-4">// SiddhantProfile.js</div>

            <pre className="whitespace-pre-wrap leading-relaxed">
{`const siddhant = {
  role: "B.Tech CSE Student",
  college: "IIIT Dharwad",
  cgpa: "9.05 ⭐",
  focus: ["DSA", "Backend Development", "System Design"],
  currentStack: ["Node.js", "Express", "MongoDB", "React"],
  problemSolving: "10+ Leetcode/day",
  strengths: ["Consistency", "Debugging", "Fast Learner"],
  preparingFor: "Top SDE Internship 2026",
};`}
            </pre>
          </motion.div>

          {/* RIGHT SIDE - EDUCATION FLOW */}
          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-2 top-0 w-[2px] h-full bg-[#30363d]"></div>

            {[
              {
                year: "2024 – 2028",
                title: "B.Tech Computer Science",
                place: "IIIT Dharwad",
                grade: "9.05 CGPA"
              },
              {
                year: "2022 – 2024",
                title: "Class XII (CBSE)",
                place: "Ryan International School",
                grade: "90.6%"
              },
              {
                year: "2020 – 2022",
                title: "Class X (CBSE)",
                place: "Ryan International School",
                grade: "93.2%"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="ml-8 mb-12 relative"
              >
                {/* Dot */}
                <div className="absolute -left-[14px] top-2 w-3 h-3 rounded-full bg-gradient-to-r from-[#3fb950] to-[#2ea043] shadow-md"></div>

                <p className="text-xs text-[#8b949e] font-mono mb-1">
                  {item.year}
                </p>

                <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 
                  hover:border-[#3fb950] hover:shadow-[0_0_15px_#3fb95033] transition">
                  
                  <h4 className="font-semibold text-[#c9d1d9]">
                    {item.title}
                  </h4>

                  <p className="text-[#8b949e] text-sm mt-1">
                    {item.place}
                  </p>

                  {/* PREMIUM CGPA BADGE */}
                  <p className="inline-block mt-3 px-3 py-1 text-xs font-mono rounded-full 
                    bg-gradient-to-r from-[#3fb950] to-[#2ea043] 
                    text-black shadow-md">
                    {item.grade}
                  </p>

                </div>
              </motion.div>
            ))}

          </div>

        </div>

        {/* SKILLS SECTION */}
        <div className="mt-24">

          <p className="text-sm text-[#8b949e] font-mono mb-4">
            // Core Skills
          </p>

          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 font-mono text-sm shadow-lg">
            <span className="text-[#ff7b72]">const</span>{" "}
            <span className="text-[#79c0ff]">skills</span> = [
            <div className="ml-6 text-[#3fb950] space-y-1">
              "C++ (STL, Problem Solving)",
              "Data Structures & Algorithms",
              "Competitive Programming",
              "Backend: Node.js, Express",
              "Database: MongoDB, Redis",
              "Frontend: React, TailwindCSS",
              "Version Control: Git & GitHub",
              "Core CS: OS, DBMS, OOPs"
            </div>
            ];
          </div>

        </div>

      </div>
    </section>
  )
}

export default About