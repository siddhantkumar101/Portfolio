import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="font-sans min-h-screen bg-[#0d1117] text-[#c9d1d9] relative">

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_1px_1px,#30363d_1px,transparent_0)] 
        bg-[size:40px_40px] 
        opacity-10 pointer-events-none">
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App