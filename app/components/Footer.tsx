'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        padding: '2rem 1.5rem',
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span
          style={{
            fontSize: '0.8rem',
            fontWeight: 300,
            color: 'var(--text3)',
            letterSpacing: '0.01em',
          }}
        >
          &copy; {year} {personalInfo.name}
        </span>
        <span
          style={{
            fontSize: '0.7rem',
            fontWeight: 300,
            color: 'var(--text3)',
            opacity: 0.6,
          }}
        >
          Construido con Next.js & Framer Motion
        </span>
      </div>
    </motion.footer>
  )
}
