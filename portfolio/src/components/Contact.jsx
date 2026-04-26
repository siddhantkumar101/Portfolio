import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

function Contact() {
  const form = useRef()
  const [status, setStatus] = useState("")

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus("Sending...")

    emailjs
      .sendForm(
        "service_7v6nijb",
        "template_nqdnwis",
        form.current,
        "LIQ7HGPmkne7jF8zb"
      )
      .then(
        () => {
          setStatus("Message sent successfully! ✓")
          e.target.reset()
          setTimeout(() => setStatus(""), 5000)
        },
        (error) => {
          console.log(error.text)
          setStatus("Failed to send message. ✕")
        }
      )
  }

  return (
    <section
      id="contact"
      className="bg-[#0d1117] text-[#c9d1d9] px-6 md:px-8 py-28 border-t border-[#30363d]"
    >
      <div className="max-w-3xl mx-auto text-center">

        <p className="text-sm text-[#8b949e] font-mono mb-4">
          // 04. What's Next?
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Get In Touch
        </motion.h2>

        <p className="text-[#8b949e] mb-12">
          Currently looking for internship opportunities. Whether you have a
          question or just want to say hi, my inbox is always open!
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 text-left"
        >
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">

            <div>
              <label className="block font-mono text-sm text-[#8b949e] mb-2">
                const name =
              </label>
              <input
                type="text"
                name="user_name"
                required
                placeholder='"John Doe"'
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-4 py-3 text-[#c9d1d9] font-mono focus:outline-none focus:border-[#3fb950] transition"
              />
            </div>

            <div>
              <label className="block font-mono text-sm text-[#8b949e] mb-2">
                const email =
              </label>
              <input
                type="email"
                name="user_email"
                required
                placeholder='"john@example.com"'
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-4 py-3 text-[#c9d1d9] font-mono focus:outline-none focus:border-[#3fb950] transition"
              />
            </div>

            <div>
              <label className="block font-mono text-sm text-[#8b949e] mb-2">
                const message =
              </label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder='"Hello, I would like to..."'
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-4 py-3 text-[#c9d1d9] font-mono focus:outline-none focus:border-[#3fb950] transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#238636] hover:bg-[#2ea043] text-white font-bold py-3 rounded-md transition duration-200 mt-2"
            >
              send_message()
            </button>

            {status && (
              <p className={`text-center font-mono text-sm mt-4 ${status.includes('successfully') ? 'text-[#3fb950]' : 'text-[#ff7b72]'}`}>
                {status}
              </p>
            )}

          </form>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact