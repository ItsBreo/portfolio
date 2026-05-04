'use client'

import { motion } from 'framer-motion'
import { aboutText } from '@/lib/data'
import { EASE_OUT_EXPO } from '@/lib/animations'

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '6rem 1.5rem',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '1rem',
          }}
        >
          {aboutText.heading}
        </motion.span>

        {/* Glass card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT_EXPO }}
          className="glass"
          style={{
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            borderRadius: '20px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {aboutText.paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.1,
                  ease: EASE_OUT_EXPO,
                }}
                style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  fontWeight: 300,
                  color: i === 0 ? 'var(--text)' : 'var(--text2)',
                  lineHeight: 1.8,
                }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
