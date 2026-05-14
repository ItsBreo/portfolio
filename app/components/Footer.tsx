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
        padding: '2.5rem 1.5rem',
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
            fontSize: '0.85rem',
            fontWeight: 500,
            color: 'var(--text)',
            letterSpacing: '0.01em',
          }}
        >
          &copy; {year} {personalInfo.name}
        </span>
        <span
          style={{
            fontSize: '0.78rem',
            fontWeight: 400,
            color: 'var(--text2)',
          }}
        >
          Hecho con Next.js y mucho café ☕
        </span>
      </div>
    </motion.footer>
  )
}
