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
        {/* Section label */}
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

        {/* Skills grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1rem',
          }}
        >
          {stack.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.06,
                ease: EASE_OUT_EXPO,
              }}
              className="glass"
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: '16px',
              }}
            >
              {/* Skill header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.75rem',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: 'var(--text)',
                    }}
                  >
                    {skill.name}
                  </span>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.7rem',
                      fontWeight: 400,
                      color: 'var(--text3)',
                      marginTop: '0.15rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {skill.category}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--accent)',
                  }}
                >
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div
                style={{
                  height: '4px',
                  borderRadius: '2px',
                  background: 'var(--surface2)',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.4 + index * 0.08,
                    ease: EASE_OUT_EXPO,
                  }}
                  style={{
                    height: '100%',
                    borderRadius: '2px',
                    background: `linear-gradient(90deg, var(--accent), var(--blue))`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
