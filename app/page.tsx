import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundEffects from './components/BackgroundEffects'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'

export default function Home() {
  return (
    <main id="main-content" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* WebGL shader + grain overlay — fixed behind all content */}
      <BackgroundEffects />

      {/* Scroll progress bar at the very top */}
      <ScrollProgress />

      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />

      {/* Floating back-to-top button */}
      <BackToTop />
    </main>
  )
}
