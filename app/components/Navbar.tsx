'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/data'
import { EASE_OUT_EXPO } from '@/lib/animations'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Track active section via IntersectionObserver */
  useEffect(() => {
    const ids = ['hero', 'about', 'stack', 'experience', 'projects', 'contact']
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(`#${id}`)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 max(1.5rem, calc((100vw - 1100px) / 2))',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
            borderRadius: scrolled ? '0 0 16px 16px' : '0',
            background: scrolled ? 'var(--nav-bg)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--nav-border)' : '1px solid transparent',
            padding: '0 1.5rem',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: 'var(--text)',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              transition: 'color 0.3s',
            }}
          >
            JC<span style={{ color: 'var(--accent)' }}>.</span>
          </a>

          {/* Desktop Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
            }}
            className="nav-desktop"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: isActive ? 500 : 400,
                    color: isActive ? 'var(--accent)' : 'var(--text2)',
                    textDecoration: 'none',
                    letterSpacing: '0.01em',
                    position: 'relative',
                    paddingBottom: '4px',
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '25%',
                        right: '25%',
                        height: '2px',
                        borderRadius: '2px',
                        background: 'var(--accent)',
                      }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Theme Toggle */}
            {mounted && (
              <motion.button
                onClick={toggleTheme}
                whileTap={{ scale: 0.88 }}
                aria-label="Toggle theme"
                style={{
                  background: 'var(--surface2)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text2)',
                }}
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Sun size={16} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Moon size={16} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )}

            {/* Mobile Hamburger */}
            <button
              className="nav-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text)',
                display: 'none',
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="nav-mobile-overlay"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 500,
                  color: 'var(--text)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  )
}
