import { motion } from "framer-motion"

function Toast({ message }) {
  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 20, opacity: 1 }}
      exit={{ y: -60, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg text-sm bg-[#18181b] border border-[#27272a] text-white"
    >
      {message}
    </motion.div>
  )
}

export default Toast