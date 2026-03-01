import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import MiniGame from "./components/MiniGame"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useTheme } from "./context/ThemeContext"

function App() {
  const { darkMode } = useTheme()

  return (
    <div
      className={`
        font-sans min-h-screen transition-colors duration-300
        ${darkMode 
          ? "bg-[#070d1a] text-white" 
          : "bg-white text-black"}
      `}
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <MiniGame />
      <Contact />
      <Footer />
    </div>
  )
}

export default App