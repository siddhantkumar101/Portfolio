import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import emailjs from "@emailjs/browser"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
})

const socials = [
  { icon: <FaGithub />, link: "https://github.com/siddhantkumar101", label: "GitHub" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/siddhant-kumar-dev", label: "LinkedIn" },
  { icon: <FaEnvelope />, link: "mailto:kumarsiddhant815@gmail.com", label: "Email" },
  { icon: <SiLeetcode />, link: "https://leetcode.com/u/siddhant080306/", label: "LeetCode" },
]

export default function Contact() {
  const form = useRef()
  const sectionRef = useRef()
  const inView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [status, setStatus] = useState("")   // "", "sending", "success", "error"

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus("sending")
    emailjs
      .sendForm("service_7v6nijb", "template_nqdnwis", form.current, "LIQ7HGPmkne7jF8zb")
      .then(() => {
        setStatus("success")
        e.target.reset()
        setTimeout(() => setStatus(""), 5000)
      })
      .catch(() => setStatus("error"))
  }

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-[#0a0a0f] relative border-t border-white/[0.04]">
      {/* Blobs */}
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-[#7928ca] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute right-0 top-0 w-64 h-64 bg-[#00ff88] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.p
          variants={fadeUp(0)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="font-mono text-xs text-[#00ff88] tracking-[0.3em] uppercase mb-4 text-center"
        >
          // 04. contact
        </motion.p>

        <motion.h2
          variants={fadeUp(0.1)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="text-4xl md:text-5xl font-black mb-4 text-center shimmer-text"
        >
          Let's Build Something
        </motion.h2>

        <motion.p
          variants={fadeUp(0.15)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="text-[#666888] text-center text-sm mb-12 font-mono"
        >
          Actively seeking SDE internships for 2026. Let's connect.
        </motion.p>

        {/* Terminal Contact Card */}
        <motion.div
          variants={fadeUp(0.2)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="gradient-border overflow-hidden"
        >
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-white/[0.02]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-[#666888]">contact.sh</span>
          </div>

          {/* Terminal body with form */}
          <div className="p-6 md:p-8">
            <p className="font-mono text-xs text-[#666888] mb-6">
              <span className="text-[#00ff88]">$</span> init contact --interactive
              <span className="terminal-cursor" />
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block font-mono text-xs text-[#666888] mb-2">
                  <span className="text-[#7928ca]">const</span> name =
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder='"Your Name"'
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-[#f0f0f0] placeholder-[#666888]/50 outline-none transition-all duration-300 focus:border-[#00ff88]/60 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(0,255,136,0.08)]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-mono text-xs text-[#666888] mb-2">
                  <span className="text-[#7928ca]">const</span> email =
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder='"your@email.com"'
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-[#f0f0f0] placeholder-[#666888]/50 outline-none transition-all duration-300 focus:border-[#00ff88]/60 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(0,255,136,0.08)]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-mono text-xs text-[#666888] mb-2">
                  <span className="text-[#7928ca]">const</span> message =
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder='"Hello Siddhant, I would like to..."'
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-[#f0f0f0] placeholder-[#666888]/50 outline-none transition-all duration-300 focus:border-[#00ff88]/60 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(0,255,136,0.08)] resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 rounded-lg font-bold text-sm font-mono text-black bg-[#00ff88] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ boxShadow: "0 0 20px rgba(0,255,136,0.3), 0 0 40px rgba(0,255,136,0.15)" }}
              >
                {status === "sending" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </span>
                ) : "send_message()"}
              </button>

              {/* Status */}
              {status === "success" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-center font-mono text-xs text-[#00ff88] neon-green-text">
                  ✓ Message sent successfully! I'll respond within 24h.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-center font-mono text-xs text-red-400">
                  ✕ Something went wrong. Email me directly at kumarsiddhant815@gmail.com
                </motion.p>
              )}
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-white/5" />
              <span className="font-mono text-[10px] text-[#666888]">OR FIND ME ON</span>
              <div className="flex-1 h-px bg-white/5" />
            </div>

            {/* Socials */}
            <div className="flex justify-center gap-4">
              {socials.map((s, i) => (
                <a key={i} href={s.link} target="_blank" rel="noreferrer" data-hover
                  title={s.label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-[#666888] hover:text-[#00ff88] border border-white/10 hover:border-[#00ff88]/40 hover:bg-[#00ff88]/5 transition-all duration-300">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}