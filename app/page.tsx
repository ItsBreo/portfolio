import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'

export default function Home() {
  return (
    <main id="main-content" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Scroll progress bar at the very top */}
      <ScrollProgress />

      <Navbar />
      <Hero />
      <Projects />
      <Stack />
      <Experience />
      <About />
      <Contact />
      <Footer />

      {/* Floating back-to-top button */}
      <BackToTop />
    </main>
  )
}
