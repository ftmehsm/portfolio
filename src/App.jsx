import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Languages from './components/Languages'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Knowledge from './components/Knowledge'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Languages />
        <Experience />
        <Projects />
        <Knowledge />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
