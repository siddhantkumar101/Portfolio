import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function MiniGame() {

  const [timeLeft, setTimeLeft] = useState(30)
  const [score, setScore] = useState(0)
  const [gameActive, setGameActive] = useState(false)
  const [position, setPosition] = useState({ x: 50, y: 50 })

  // Start Game
  const startGame = () => {
    setScore(0)
    setTimeLeft(30)
    setGameActive(true)
    moveDot()
  }

  // Move Dot Randomly
  const moveDot = () => {
    const x = Math.random() * 80
    const y = Math.random() * 70
    setPosition({ x, y })
  }

  // Timer Logic
  useEffect(() => {
    if (!gameActive) return

    if (timeLeft === 0) {
      setGameActive(false)
      return
    }

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)

  }, [timeLeft, gameActive])

  // Dot Click
  const handleDotClick = () => {
    if (!gameActive) return
    setScore(prev => prev + 1)
    moveDot()
  }

  return (
    <section
      id="game"
      className="min-h-screen bg-[#070d1a] text-white px-6 py-28 flex flex-col items-center justify-center relative overflow-hidden"
    >

      <p className="text-purple-400 text-sm tracking-widest mb-4">
        04. MINI GAME 🎮
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-12 
      bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 
      bg-clip-text text-transparent">
        Aim Trainer
      </h2>

      {/* Score & Timer */}
      <div className="flex gap-10 mb-8 text-lg">
        <div>⏱ Time: {timeLeft}s</div>
        <div>🎯 Score: {score}</div>
      </div>

      {/* Game Area */}
      <div className="relative w-full max-w-3xl h-[400px] 
      bg-white/5 border border-white/10 
      rounded-2xl backdrop-blur-xl overflow-hidden">

        {gameActive && (
          <motion.div
            onClick={handleDotClick}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute w-8 h-8 rounded-full 
            bg-gradient-to-r from-purple-500 to-blue-500 
            cursor-pointer"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
            }}
          />
        )}

        {!gameActive && timeLeft === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-xl">
            Game Over! Your Score: {score} 🎉
          </div>
        )}

      </div>

      {/* Start Button */}
      {!gameActive && (
        <button
          onClick={startGame}
          className="mt-8 px-6 py-3 rounded-lg 
          bg-gradient-to-r from-purple-600 to-blue-600 
          hover:scale-105 transition"
        >
          {timeLeft === 0 ? "Play Again" : "Start Game"}
        </button>
      )}

    </section>
  )
}

export default MiniGame