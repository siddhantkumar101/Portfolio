import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Toast from "./Toast";

function Contact() {
  const form = useRef();
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    emailjs
      .send(
        "service_7v6nijb",
        "template_nqdnwis",
        {
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        },
        "LIQ7HGPmkne7jF8zb"
      )
      .then(() => {
        showToast("Message sent successfully.");
        form.current.reset();
      })
      .catch(() => {
        showToast("Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0d1117] text-[#c9d1d9] px-6 md:px-8 py-28"
    >
      <AnimatePresence>
        {toastMessage && <Toast message={toastMessage} />}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <p className="text-sm text-[#8b949e] font-mono mb-4">
          // 06. Contact
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Let’s Connect
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 font-mono text-sm">
              <p className="text-[#3fb950] mb-4">
                $ open --opportunities
              </p>

              <p className="text-[#8b949e] mb-6">
                Currently open for internships and collaborative projects.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:kumarsiddhant815@gmail.com"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <FaEnvelope className="text-[#3fb950]" />
                  kumarsiddhant815@gmail.com
                </a>

                <a
                  href="https://www.linkedin.com/in/siddhant-kumar-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <FaLinkedin className="text-[#3fb950]" />
                  linkedin.com/in/siddhant-kumar-dev
                </a>

                <a
                  href="https://github.com/siddhantkumar101"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <FaGithub className="text-[#3fb950]" />
                  github.com/siddhantkumar101
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 space-y-6 font-mono text-sm"
          >
            <div className="text-[#8b949e]">
              // SendMessage.js
            </div>

            <input
              type="text"
              name="name"
              placeholder="name"
              required
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-4 py-3 outline-none focus:border-[#3fb950] transition"
            />

            <input
              type="email"
              name="email"
              placeholder="email"
              required
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-4 py-3 outline-none focus:border-[#3fb950] transition"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="message"
              required
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-4 py-3 outline-none focus:border-[#3fb950] transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-md border border-[#3fb950] text-[#3fb950] hover:bg-[#3fb950] hover:text-black transition"
            >
              send()
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}

export default Contact;