import { useState, useEffect, useRef } from "react"

function ReactionExperiment() {

  const [gameState, setGameState] = useState("idle") 
  // idle | waiting | ready | finished

  const [message, setMessage] = useState("Click Start to begin")
  const [trials, setTrials] = useState([])
  const [round, setRound] = useState(0)

  const startTimeRef = useRef(null)
  const timeoutRef = useRef(null)

  const TOTAL_ROUNDS = 5

  const startExperiment = () => {
    setTrials([])
    setRound(0)
    setGameState("waiting")
    setMessage("Wait for green...")
    triggerRound()
  }

  const triggerRound = () => {
    const delay = Math.random() * 3000 + 1000 // 1–4 seconds

    timeoutRef.current = setTimeout(() => {
      setGameState("ready")
      setMessage("CLICK NOW!")
      startTimeRef.current = performance.now()
    }, delay)
  }

  const handleClick = () => {

    // Clicked too early
    if (gameState === "waiting") {
      clearTimeout(timeoutRef.current)
      setMessage("Too early! Wait for green.")
      setGameState("idle")
      return
    }

    // Valid click
    if (gameState === "ready") {
      const reactionTime = performance.now() - startTimeRef.current
      const updatedTrials = [...trials, reactionTime]

      setTrials(updatedTrials)
      const nextRound = round + 1
      setRound(nextRound)

      if (nextRound < TOTAL_ROUNDS) {
        setGameState("waiting")
        setMessage("Wait for green...")
        triggerRound()
      } else {
        setGameState("finished")
        setMessage("Experiment Completed")
      }
    }
  }

  const average =
    trials.length > 0
      ? (trials.reduce((a, b) => a + b, 0) / trials.length).toFixed(2)
      : 0

  const best =
    trials.length > 0 ? Math.min(...trials).toFixed(2) : 0

  const worst =
    trials.length > 0 ? Math.max(...trials).toFixed(2) : 0

  return (
    <section
      id="game"
      className="min-h-screen bg-[#070d1a] text-white px-6 py-28 flex flex-col items-center justify-center"
    >

      <p className="text-purple-400 text-sm tracking-widest mb-4">
        04. REACTION TIME EXPERIMENT
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        Human Reaction Latency Measurement
      </h2>

      <p className="text-gray-400 max-w-xl text-center mb-10">
        A simple latency experiment measuring visual stimulus response time 
        using high-resolution browser timing APIs.
      </p>

      {/* Experiment Area */}
      <div
        onClick={handleClick}
        className={`w-full max-w-3xl h-[300px] rounded-2xl 
        flex items-center justify-center text-xl font-semibold cursor-pointer
        transition duration-200 ${
          gameState === "ready"
            ? "bg-green-500 text-black"
            : "bg-white/5 border border-white/10"
        }`}
      >
        {message}
      </div>

      {/* Controls */}
      {gameState === "idle" || gameState === "finished" ? (
        <button
          onClick={startExperiment}
          className="mt-8 px-6 py-3 rounded-lg 
          bg-gradient-to-r from-purple-600 to-blue-600 
          hover:scale-105 transition"
        >
          {gameState === "finished" ? "Run Again" : "Start Experiment"}
        </button>
      ) : null}

      {/* Results */}
      {trials.length > 0 && (
        <div className="mt-12 text-center space-y-2">
          <p>Trials: {trials.length}</p>
          <p>Average Reaction Time: {average} ms</p>
          <p>Best (Fastest): {best} ms</p>
          <p>Worst (Slowest): {worst} ms</p>
        </div>
      )}

    </section>
  )
}

export default ReactionExperiment