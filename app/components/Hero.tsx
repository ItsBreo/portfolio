'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { EASE_OUT_EXPO } from '@/lib/animations'
import TextReveal from './TextReveal'

/* Inline SVG brand icons (lucide-react removed brand icons) */
function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '6rem 1.5rem 4rem',
        position: 'relative',
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: '720px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        {/* Name */}
        <motion.h1
          variants={item}
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 4.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            color: 'var(--text)',
          }}
        >
          {personalInfo.name.split(' ')[0]}{' '}
          <span className="gradient-text" style={{ paddingRight: '0.1em' }}>
            {personalInfo.name.split(' ').slice(1).join(' ')}
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={item}
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            fontWeight: 500,
            color: 'var(--accent)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          {personalInfo.role}
        </motion.p>

        {/* Bio */}
        <TextReveal
          text={personalInfo.bio}
          delay={0.4}
          style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
            fontWeight: 300,
            color: 'var(--text2)',
            lineHeight: 1.7,
            maxWidth: '560px',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        />

        {/* CTAs */}
        <motion.div
          variants={item}
          style={{
            display: 'flex',
            gap: '0.75rem',
            marginTop: '0.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.7rem 1.6rem',
              borderRadius: '12px',
              background: 'var(--accent)',
              color: '#fff',
              fontWeight: 500,
              fontSize: '0.88rem',
              textDecoration: 'none',
              boxShadow: '0 4px 20px var(--glow)',
            }}
          >
            Descargar CV
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.7rem 1.6rem',
              borderRadius: '12px',
              background: 'var(--surface2)',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              fontWeight: 500,
              fontSize: '0.88rem',
              textDecoration: 'none',
            }}
          >
            Contacto
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={item}
          style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '0.75rem',
          }}
        >
          {[
            { icon: GithubIcon, href: personalInfo.github, label: 'GitHub' },
            { icon: LinkedinIcon, href: personalInfo.linkedin, label: 'LinkedIn' },
            { icon: () => <Mail size={18} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text3)',
                border: '1px solid var(--border)',
                textDecoration: 'none',
              }}
            >
              <Icon />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} style={{ color: 'var(--text3)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
