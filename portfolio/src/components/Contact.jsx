import { motion } from "framer-motion"
import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function Contact() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_7v6nijb",
      "template_nqdnwis",
      form.current,
      "LIQ7HGPmkne7jF8zb"
    )
    .then(() => {
      alert("Message sent successfully 🚀")
      form.current.reset()
    })
    .catch((error) => {
      alert("Failed to send ❌")
      console.log(error)
    })
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#070d1a] text-white px-6 md:px-8 py-28 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <p className="text-center text-purple-400 text-sm tracking-widest mb-4">
          06. CONTACT
        </p>

        <h2 className="text-center text-4xl md:text-5xl font-bold mb-20 
        bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 
        bg-clip-text text-transparent">
          Let’s Work Together
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Get In Touch 🚀
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
              I’m currently open to internship opportunities,
              collaborations, and exciting tech discussions.
              Feel free to reach out anytime!
            </p>

            <div className="space-y-6">

              <a
                href="mailto:kumarsiddhant815@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition"
              >
                <FaEnvelope className="text-purple-400" />
                kumarsiddhant815@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/siddhant-kumar-dev"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition"
              >
                <FaLinkedin className="text-blue-400" />
                LinkedIn Profile
              </a>

              <a
                href="https://github.com/siddhantkumar101"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition"
              >
                <FaGithub className="text-purple-400" />
                GitHub Profile
              </a>

            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 
            rounded-2xl p-8 backdrop-blur-xl space-y-6"
          >

            {/* ✅ FIXED HERE */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-white/5 border border-white/10 
              rounded-lg px-4 py-3 outline-none 
              focus:border-purple-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-white/5 border border-white/10 
              rounded-lg px-4 py-3 outline-none 
              focus:border-purple-500 transition"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full bg-white/5 border border-white/10 
              rounded-lg px-4 py-3 outline-none 
              focus:border-purple-500 transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg 
              bg-gradient-to-r from-purple-600 to-blue-600 
              hover:scale-105 transition"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  )
}

export default Contact