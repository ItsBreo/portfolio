'use client'

import { motion } from 'framer-motion'
import { stack } from '@/lib/data'
import { EASE_OUT_EXPO } from '@/lib/animations'

export default function Stack() {
  return (
    <section
      id="stack"
      style={{
        padding: '6rem 1.5rem',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
        style={{ maxWidth: '1100px', margin: '0 auto' }}
      >
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'block',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '0.5rem',
            textAlign: 'center',
          }}
        >
          Stack técnico
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
            fontWeight: 600,
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            marginBottom: '2.5rem',
            textAlign: 'center',
          }}
        >
          Tecnologías que uso
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1rem',
          }}
        >
          {stack.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.08,
                ease: EASE_OUT_EXPO,
              }}
              className="glass"
              style={{
                padding: '1.5rem',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {group.category}
              </span>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      color: 'var(--text)',
                      background: 'var(--surface2)',
                      border: '1px solid var(--border)',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '8px',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
