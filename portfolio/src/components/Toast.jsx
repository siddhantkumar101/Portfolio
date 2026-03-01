import { motion } from "framer-motion"

function Toast({ message, onClose }) {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 20, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-1/2 -translate-x-1/2 
                 bg-white/10 backdrop-blur-xl 
                 border border-white/20
                 text-white px-8 py-4 
                 rounded-2xl shadow-2xl
                 z-50"
    >
      {message}
    </motion.div>
  )
}

export default Toast