import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundEffects from './components/BackgroundEffects'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      {/* WebGL shader + grain overlay — fixed behind all content */}
      <BackgroundEffects />

      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
